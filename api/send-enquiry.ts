import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const ALLOWED_ORIGINS = new Set([
  'https://proactivephysio.in',
  'https://www.proactivephysio.in',
]);

const MAX_BODY_BYTES = 20_000;

function clean(value: unknown, max = 1000): string {
  return String(value ?? '')
    .replace(/[<>]/g, '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max);
}

function validEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value: string) {
  return !value || /^[+()\d\s.-]{7,25}$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = String(req.headers.origin || '');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin || 'https://proactivephysio.in');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

  const rawLength = Number(req.headers['content-length'] || 0);
  if (rawLength > MAX_BODY_BYTES) return res.status(413).json({ error: 'Request is too large.' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    // Honeypot: bots fill this hidden field; legitimate users leave it empty.
    if (clean(body.website, 200)) return res.status(200).json({ ok: true });

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 160);
    const service = clean(body.service, 160);
    const city = clean(body.city, 120);
    const location = clean(body.location, 200);
    const date = clean(body.date, 40);
    const time = clean(body.time, 40);
    const message = clean(body.message, 3000);
    const type = clean(body.type, 40) || 'general';
    const sourcePage = clean(body.sourcePage, 500);

    if (!name) return res.status(400).json({ error: 'Name is required.' });
    if (!phone && !email) return res.status(400).json({ error: 'Phone or email is required.' });
    if (!validEmail(email)) return res.status(400).json({ error: 'Please provide a valid email.' });
    if (!validPhone(phone)) return res.status(400).json({ error: 'Please provide a valid phone number.' });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const emailFrom = process.env.EMAIL_FROM;

    if (!supabaseUrl || !supabaseKey || !resendKey || !adminEmail || !emailFrom) {
      console.error('Enquiry service is not fully configured.');
      return res.status(503).json({ error: 'The enquiry service is temporarily unavailable.' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const submittedAt = new Date().toISOString();

    const record = {
      name,
      phone: phone || null,
      email: email || null,
      service: service || null,
      city: city || null,
      location: location || null,
      date: date || null,
      time: time || null,
      message: message || null,
      source_page: sourcePage || null,
      enquiry_type: type,
      submitted_at: submittedAt,
    };

    const { data: inserted, error: dbError } = await supabase
      .from('enquiries')
      .insert(record)
      .select('id')
      .single();

    if (dbError) {
      console.error('Enquiry database insert failed:', dbError.message);
      return res.status(500).json({ error: 'We could not save your enquiry right now.' });
    }

    const submittedDisplay = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date(submittedAt));

    const field = (label: string, value: string) =>
      '<p style="margin:8px 0"><strong>' + escapeHtml(label) + ':</strong> ' +
      escapeHtml(value || 'Not provided') + '</p>';

    const html = [
      '<div style="font-family:Arial,sans-serif;max-width:680px;color:#172033">',
      '<h2 style="margin-bottom:4px">PROACTIVE PHYSIO</h2>',
      '<h3 style="margin-top:0">NEW WEBSITE ENQUIRY</h3>',
      '<hr>',
      '<h3>CUSTOMER</h3>',
      field('Name', name),
      field('Phone', phone),
      field('Email', email),
      '<h3>BOOKING</h3>',
      field('Service', service),
      field('City', city),
      field('Area', location),
      field('Date', date),
      field('Preferred Time', time),
      '<h3>MESSAGE</h3>',
      '<p style="white-space:pre-wrap">' + escapeHtml(message || 'Not provided') + '</p>',
      '<h3>SOURCE</h3>',
      field('Page', sourcePage),
      '<h3>SUBMITTED</h3>',
      '<p>' + escapeHtml(submittedDisplay) + ' IST</p>',
      '<hr><p style="font-size:12px;color:#667085">Enquiry ID: ' + escapeHtml(String(inserted.id)) + '</p>',
      '</div>',
    ].join('');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + resendKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [adminEmail],
        subject: 'New ProActive Physio Enquiry — ' + name,
        html,
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!resendResponse.ok) {
      const resendText = await resendResponse.text();
      console.error('Resend request failed:', resendResponse.status, resendText.slice(0, 500));
      await supabase.from('enquiries').update({ email_status: 'failed' }).eq('id', inserted.id);
      return res.status(502).json({ error: 'We could not send your enquiry right now. Please try again or contact us directly.' });
    }

    await supabase.from('enquiries').update({ email_status: 'sent' }).eq('id', inserted.id);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Enquiry endpoint error:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(400).json({ error: 'We could not process your enquiry. Please try again.' });
  }
}
