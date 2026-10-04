import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CalendarPlus, CheckCircle2, ArrowRight, MapPin, Activity, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import BookingSearch from '@/components/BookingSearch';
import { sports } from '@/data/sports';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function BookPage() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const sportSlug = searchParams.get('sport') || '';
  const serviceSlug = searchParams.get('service') || '';
  const locSlug = searchParams.get('location') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';

  const sport = sports.find((s) => s.slug === sportSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  const loc = locations.find((l) => l.slug === locSlug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Book a Specialized Physiotherapist | ProActive Physio"
        description="Book a qualified physiotherapist in Delhi, Gurugram or Chandigarh. Choose sports physiotherapy, geriatric physiotherapy or an online consultation."
      />

      <section className="relative overflow-hidden bg-navy-700 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="container-page relative">
          <div className="flex items-center gap-1.5 text-sm text-white/60">
            <Link to="/" className="hover:text-teal-300">Home</Link>
            <span>/</span>
            <span className="text-white/80">Book</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Book a Specialized Physiotherapist
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70 text-pretty">
            Select your preferences and submit your booking request. We will connect you with a qualified physiotherapist for your area.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          {submitted ? (
            <div className="mx-auto max-w-2xl">
              <div className="card flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                  <CheckCircle2 className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy-700">Booking request received!</h2>
                <p className="mt-3 text-base text-ink-light max-w-md">
                  Thank you for your booking request. Our team will review your details and connect you with a qualified physiotherapist in your area. We will be in touch shortly to confirm your appointment.
                </p>

                {(sport || service || loc) && (
                  <div className="mt-6 grid gap-2 rounded-xl bg-surface-100 p-5 text-left text-sm">
                    {sport && <div className="flex items-center gap-2"><Activity className="h-4 w-4 text-teal-600" /> <span className="font-semibold text-navy-700">Sport:</span> <span className="text-ink-light">{sport.name}</span></div>}
                    {service && <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600" /> <span className="font-semibold text-navy-700">Service:</span> <span className="text-ink-light">{service.name}</span></div>}
                    {loc && <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-600" /> <span className="font-semibold text-navy-700">Location:</span> <span className="text-ink-light">{loc.name}</span></div>}
                    {date && <div className="flex items-center gap-2"><CalendarPlus className="h-4 w-4 text-teal-600" /> <span className="font-semibold text-navy-700">Date:</span> <span className="text-ink-light">{date}</span></div>}
                    {time && <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-600" /> <span className="font-semibold text-navy-700">Time:</span> <span className="text-ink-light">{time}</span></div>}
                  </div>
                )}

                <div className="mt-8 flex gap-3">
                  <Link to="/" className="btn-outline">Back to Home</Link>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    New Booking
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-navy-700">Your booking details</h2>
                <p className="mt-1 text-sm text-ink-light">Review your selections and complete your details below.</p>
              </div>

              {(sport || service || loc || date || time) && (
                <div className="mb-6 flex flex-wrap gap-3 rounded-2xl border border-teal-200 bg-teal-50/50 p-4">
                  {sport && <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-700"><Activity className="h-3 w-3" /> {sport.name}</span>}
                  {service && <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-700"><CheckCircle2 className="h-3 w-3" /> {service.name}</span>}
                  {loc && <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-700"><MapPin className="h-3 w-3" /> {loc.name}</span>}
                  {date && <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-700"><CalendarPlus className="h-3 w-3" /> {date}</span>}
                  {time && <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-700"><Clock className="h-3 w-3" /> {time}</span>}
                </div>
              )}

              <form onSubmit={handleSubmit} className="card">
                <h3 className="font-display text-base font-bold text-navy-700">Your details</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Full Name</label>
                    <input type="text" required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Phone</label>
                    <input type="tel" required className="input-field" placeholder="+91 83608 67991" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Email</label>
                    <input type="email" required className="input-field" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Sport</label>
                    <select defaultValue={sportSlug} className="select-field">
                      <option value="">Select sport</option>
                      {sports.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Service</label>
                    <select defaultValue={serviceSlug} className="select-field">
                      <option value="">Select service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Location</label>
                    <select defaultValue={locSlug} className="select-field">
                      <option value="">Select location</option>
                      {locations.map((l) => (
                        <option key={l.slug} value={l.slug}>{l.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-600">Preferred Date</label>
                    <input type="date" defaultValue={date} className="input-field" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold text-navy-600">Venue / Training Location Address</label>
                  <input type="text" className="input-field" placeholder="Tell us where you train or play" />
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold text-navy-600">Additional Information</label>
                  <textarea rows={4} className="input-field resize-none" placeholder="Describe your injury or the support you need..." />
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  <CalendarPlus className="h-4 w-4" />
                  Submit Booking Request
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-ink-light">
                  We will review your request and contact you to confirm availability. This is a request, not a confirmed booking.
                </p>
              </form>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-navy-700">Prefer to search first?</p>
                <BookingSearch />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
