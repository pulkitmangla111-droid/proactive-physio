import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Activity, Calendar, Trophy, ClipboardCheck, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export default function ForTeamsPage() {
  return (
    <>
      <SEO
        title="For Teams | Sports Physiotherapy for Clubs & Academies | ProActive Physio"
        description="Teams, clubs and academies can book professional sports physiotherapy support including match-day cover, training sessions, injury screening and ongoing rehabilitation management."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'For Teams' }]}
        label="For Clubs, Teams & Academies"
        title="Physiotherapy for Your Team"
        subtitle="Professional sports physiotherapy support for clubs, teams and academies. From match-day cover to ongoing injury management — delivered at your training venue."
        ctaLabel="Book for Your Team"
        ctaHref="/book"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="section-label">
                <Users className="h-3 w-3" />
                Team Support
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Comprehensive physiotherapy for your team
              </h2>
              <p className="mt-5 text-base text-ink-light leading-relaxed">
                ProActive Physio works with sports clubs, teams and coaching academies to provide ongoing physiotherapy support across the season. Whether you need match-day cover, training-session support, injury screening or structured rehabilitation for individual players, we connect you with qualified physiotherapists who understand team sport.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Trophy, title: 'Match-Day Cover', desc: 'On-site physiotherapy cover for matches, tournaments and competitive events.' },
                  { icon: Calendar, title: 'Training-Session Support', desc: 'Regular physiotherapy presence at training sessions for assessment, taping and injury management.' },
                  { icon: ClipboardCheck, title: 'Injury Screening', desc: 'Pre-season and in-season injury screening to identify risk factors and guide prevention.' },
                  { icon: Activity, title: 'Rehabilitation Management', desc: 'Structured, phased rehabilitation programmes for injured players with return-to-play criteria.' },
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
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=940&h=700&fit=crop"
                  alt="Team physiotherapy support at a sports venue"
                  className="h-full w-full object-cover"
                />
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
              Why Teams Choose Us
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Built for team sport
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Qualified, vetted physiotherapists',
              'Sport-specific expertise',
              'Flexible scheduling around training',
              'Coordination with coaching staff',
              'Ongoing player management',
              'Match-day and tournament cover',
              'Injury screening and prevention',
              'Clear return-to-play protocols',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-500 mt-0.5" />
                <span className="text-sm font-medium text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book physiotherapy for your team"
        subtitle="Match-day cover, training support and ongoing injury management for clubs, teams and academies."
      />
    </>
  );
}
