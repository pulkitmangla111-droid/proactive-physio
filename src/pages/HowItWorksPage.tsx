import { Link } from 'react-router-dom';
import { ClipboardList, Calendar, UserCheck, Activity, ArrowRight, ClipboardCheck, MapPin, ShieldCheck, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const steps = [
  {
    icon: ClipboardList,
    step: '1',
    title: 'Select Your Sport & Service',
    description: 'Choose your sport, the type of physiotherapy service you need and your location. Whether you need injury care, rehabilitation, taping or recovery support, we match you with the right physiotherapist.',
    details: [
      'Choose from cricket, football, golf, tennis, kabaddi, wrestling, hockey and more',
      'Select from sports physiotherapy, injury care, rehabilitation, taping, warm-up or recovery',
      'Pick your location — Delhi, Gurugram or Chandigarh',
    ],
  },
  {
    icon: Calendar,
    step: '2',
    title: 'Pick Your Date & Time',
    description: 'Select a date and time that fits your training schedule. Our physiotherapists come to your ground, court, field, academy or training venue — no clinic visit required.',
    details: [
      'Choose a date that works around your training or match schedule',
      'Select a preferred time slot',
      'Tell us your venue address or training location',
    ],
  },
  {
    icon: UserCheck,
    step: '3',
    title: 'Get Matched with a Physiotherapist',
    description: 'We connect you with a qualified, vetted sports physiotherapist who has experience in your sport and the type of support you need.',
    details: [
      'Every physiotherapist is a registered, qualified professional',
      'Matched based on your sport, service and location',
      'Vetted for sports physiotherapy experience',
    ],
  },
  {
    icon: Activity,
    step: '4',
    title: 'Receive On-Ground Physiotherapy',
    description: 'Your physiotherapist arrives at your venue with everything needed for assessment, treatment and ongoing care. You receive professional physiotherapy where you train and compete.',
    details: [
      'Assessment, hands-on treatment and a clear management plan',
      'Sport-specific rehabilitation and return-to-play guidance',
      'Ongoing monitoring and progression across your training week',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How It Works | ProActive Physio"
        description="Book a sports physiotherapist in four simple steps. Select your sport and service, pick your date and time, get matched with a physiotherapist, and receive on-ground physiotherapy at your venue."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'How It Works' }]}
        label="Simple & Seamless"
        title="How On-Ground Physiotherapy Works"
        subtitle="From selection to treatment — a simple, seamless process designed for athletes, coaches and teams. No clinic visits, no travel, just professional physiotherapy at your venue."
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;
              return (
                <div key={step.step} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-500 shadow-lg shadow-teal-500/20">
                        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Step {step.step}</span>
                        <h2 className="font-display text-xl font-extrabold text-navy-700 sm:text-2xl">{step.title}</h2>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-ink-light leading-relaxed">{step.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <ClipboardCheck className="h-5 w-5 flex-shrink-0 text-teal-500 mt-0.5" />
                          <span className="text-sm text-ink-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-navy-700 p-8">
                      <div className="text-center">
                        <span className="font-display text-7xl font-extrabold text-white/10">{step.step}</span>
                        <Icon className="mx-auto h-16 w-16 text-teal-400/40" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why On-Ground */}
      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <MapPin className="h-3 w-3" />
              Why On-Ground?
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Why physiotherapy at your venue matters
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, title: 'No Travel Required', desc: 'Your physiotherapist comes to your training venue — saving time and keeping you in your sporting environment.' },
              { icon: ShieldCheck, title: 'Sport-Specific Context', desc: 'Treatment in your actual training environment means better assessment and more relevant rehabilitation.' },
              { icon: Clock, title: 'Fits Your Schedule', desc: 'Book around your training and match schedule, not around clinic opening hours.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                    <Icon className="h-7 w-7 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        subtitle="Book a qualified physiotherapist at your venue in Delhi, Gurugram or Chandigarh."
      />
    </>
  );
}
