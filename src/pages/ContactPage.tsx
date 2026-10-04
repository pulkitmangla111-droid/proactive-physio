import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import { locations } from '@/data/locations';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact ProActive Physio | Get in Touch"
        description="Contact ProActive Physio for physiotherapy bookings, geriatric physiotherapy, online consultations, team enquiries and general questions in Delhi, Gurugram and Chandigarh."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        label="Get in Touch"
        title="Contact ProActive Physio"
        subtitle="Have a question or want to book a session? Get in touch with our team and we will get back to you."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl font-bold text-navy-700">Contact Information</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Mail className="h-5.5 w-5.5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-700">Email</h3>
                    <a href="mailto:proactivephysioteam@gmail.com" className="text-sm text-ink-light hover:text-teal-600">proactivephysioteam@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Phone className="h-5.5 w-5.5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-700">Phone</h3>
                    <a href="tel:+918360867991" className="text-sm text-ink-light hover:text-teal-600">+91 83608 67991</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <MapPin className="h-5.5 w-5.5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-700">Service Areas</h3>
                    <p className="text-sm text-ink-light">Delhi · Gurugram · Chandigarh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-surface-300 bg-surface-100 p-5">
                <h3 className="font-display text-sm font-bold text-navy-700">Operating as a service-area business</h3>
                <p className="mt-2 text-xs text-ink-light leading-relaxed">
                  ProActive Physio delivers physiotherapy at your training venue. We do not operate from a fixed clinic address — our physiotherapists come to your ground, court, field or academy.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                    <CheckCircle2 className="h-8 w-8 text-teal-600" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-navy-700">Message sent!</h2>
                  <p className="mt-2 text-sm text-ink-light max-w-md">
                    Thank you for getting in touch. Our team will review your message and get back to you as soon as possible.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                      <MessageSquare className="h-5 w-5 text-teal-600" />
                    </div>
                    <h2 className="font-display text-lg font-bold text-navy-700">Send us a message</h2>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-navy-600">Full Name</label>
                      <input type="text" required className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-navy-600">Email</label>
                      <input type="email" required className="input-field" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-navy-600">Phone</label>
                      <input type="tel" className="input-field" placeholder="+91 83608 67991" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-navy-600">Location</label>
                      <select className="select-field">
                        <option value="">Select location</option>
                        {locations.map((l) => (
                          <option key={l.slug} value={l.slug}>{l.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">I am a...</label>
                    <select className="select-field">
                      <option value="">Select an option</option>
                      <option>Individual Player / Athlete</option>
                      <option>Coach / Academy</option>
                      <option>Team / Club Manager</option>
                      <option>Tournament Organiser</option>
                      <option>Physiotherapist (Joining)</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Message</label>
                    <textarea required rows={5} className="input-field resize-none" placeholder="Tell us what you need..." />
                  </div>

                  <button type="submit" className="btn-primary mt-6 w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
