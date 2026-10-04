import { Link } from 'react-router-dom';
import { Stethoscope, ShieldCheck, Calendar, MapPin, ArrowRight, CheckCircle2, UserCheck, Activity } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export default function ForPhysiotherapistsPage() {
  return (
    <>
      <SEO
        title="For Physiotherapists | Join ProActive Physio"
        description="Qualified physiotherapists can join ProActive Physio to provide professional care in Delhi, Gurugram and Chandigarh. Build your practice with ProActive Physio."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'For Physiotherapists' }]}
        label="For Qualified Physiotherapists"
        title="Join as a Physiotherapist"
        subtitle="Are you a qualified physiotherapist with a passion for sports? Join ProActive Physio to provide on-ground sports physiotherapy at training venues and build your practice with athletes and teams."
        ctaLabel="Join as a Physiotherapist"
        ctaHref="/contact"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="section-label">
                <Stethoscope className="h-3 w-3" />
                Why Join Us
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Build your sports physiotherapy practice
              </h2>
              <p className="mt-5 text-base text-ink-light leading-relaxed">
                ProActive Physio connects qualified physiotherapists with athletes, teams and academies who need on-ground sports physiotherapy. Instead of waiting in a clinic, you go to where the sport happens — grounds, courts, fields and training venues.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, title: 'Work On-Ground', desc: 'Deliver physiotherapy at sporting venues — not in a clinic room.' },
                  { icon: Activity, title: 'Sport-Specific Work', desc: 'Work with athletes in sports you are passionate about.' },
                  { icon: Calendar, title: 'Flexible Schedule', desc: 'Choose when and where you work, around your existing commitments.' },
                  { icon: UserCheck, title: 'Vetted Network', desc: 'Join a network of qualified, registered physiotherapists.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                        <Icon className="h-6 w-6 text-teal-600" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-navy-700">{item.title}</h3>
                        <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="card">
                <h3 className="font-display text-lg font-bold text-navy-700">What we look for</h3>
                <div className="mt-5 space-y-3">
                  {[
                    'Qualified physiotherapist with current registration',
                    'Experience or interest in sports physiotherapy',
                    'Understanding of sport-specific injury patterns',
                    'Ability to travel to training venues',
                    'Professional indemnity and credentials',
                    'Commitment to athlete-centred care',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-500 mt-0.5" />
                      <span className="text-sm text-navy-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Express Your Interest
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <ShieldCheck className="h-3 w-3" />
              How It Works
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Joining is simple
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { step: '1', title: 'Express Interest', desc: 'Tell us about your qualifications, experience and the sports you are interested in.' },
              { step: '2', title: 'Verification', desc: 'We verify your qualifications, registration and credentials.' },
              { step: '3', title: 'Start Working', desc: 'Once verified, you start receiving bookings from athletes and teams in your area.' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-700">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to join ProActive Physio?"
        subtitle="Express your interest and we will be in touch about joining our network of sports physiotherapists."
      />
    </>
  );
}
