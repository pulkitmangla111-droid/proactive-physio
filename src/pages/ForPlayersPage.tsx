import { Link } from 'react-router-dom';
import { User, CalendarPlus, ShieldCheck, Activity, MapPin, CheckCircle2, ArrowRight, Target, HeartPulse } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import BookingSearch from '@/components/BookingSearch';
import CTASection from '@/components/CTASection';

export default function ForPlayersPage() {
  return (
    <>
      <SEO
        title="For Players | Sports Physiotherapy for Athletes | ProActive Physio"
        description="Individual athletes and players can book a qualified sports physiotherapist at their training venue. Injury care, rehabilitation, taping and recovery with ProActive Physio."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'For Players' }]}
        label="For Individual Athletes"
        title="Physiotherapy for Players"
        subtitle="Whether you are a competitive athlete or a recreational player, ProActive Physio brings qualified sports physiotherapy directly to your training venue."
        ctaLabel="Book a Specialized Physiotherapist"
        ctaHref="/book"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Injury Assessment', desc: 'Get a professional assessment of your injury on the ground, with a clear diagnosis and management plan.' },
              { icon: HeartPulse, title: 'Rehabilitation', desc: 'Structured, phased rehabilitation programmes designed to return you to full performance in your sport.' },
              { icon: Activity, title: 'Taping & Support', desc: 'Professional taping for injury support, joint stability and confidence during training and matches.' },
              { icon: Target, title: 'Sport-Specific Care', desc: 'Physiotherapy tailored to the demands of your sport, your position and your training load.' },
              { icon: MapPin, title: 'At Your Venue', desc: 'No clinic visits. Your physiotherapist comes to your ground, court, field or academy.' },
              { icon: CalendarPlus, title: 'Flexible Booking', desc: 'Book around your training and match schedule, at a time that works for you.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <User className="h-3 w-3" />
              Book Your Session
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Find a physiotherapist near you
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <BookingSearch />
          </div>
        </div>
      </section>

      <CTASection
        title="Book your physiotherapy session today"
        subtitle="Professional sports physiotherapy at your training venue in Delhi, Gurugram or Chandigarh."
      />
    </>
  );
}
