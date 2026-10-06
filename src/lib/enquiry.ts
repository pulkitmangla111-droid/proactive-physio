export interface EnquiryData {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  sport?: string;
  role?: string;
  city?: string;
  location?: string;
  preferredArea?: string;
  customArea?: string;
  venueAddress?: string;
  date?: string;
  time?: string;
  message?: string;
  sourcePage?: string;
  type?: 'booking' | 'contact' | 'physiotherapist' | 'team' | 'general';
  website?: string;
}

const API_URL = 'https://pbpuytdhwmyvvklechhi.supabase.co/functions/v1/send-enquiry-email';

export async function submitEnquiry(data: EnquiryData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      sourcePage: data.sourcePage || window.location.href,
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error || 'Unable to submit enquiry.');
  }

  return payload;
}
