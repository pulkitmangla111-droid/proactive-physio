import { Link } from 'react-router-dom';
import { Activity, Target, MapPin, Users, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ProActive Physio | Sports Physiotherapy at Your Ground"
        description="ProActive Physio connects athletes, players, families, academies, clubs and sports teams with qualified physiotherapists for care in Delhi, Gurugram and Chandigarh."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        label="About Us"
        title="About ProActive Physio"
        subtitle="Sports Physio, Wherever You Play. We are building India's most accessible on-ground sports physiotherapy platform."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">
                <Activity className="h-3 w-3" />
                Our Story
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl text-balance">
                Bringing physiotherapy to where sport happens
              </h2>
              <p className="mt-5 text-base text-ink-light leading-relaxed">
                ProActive Physio was founded on a simple idea: athletes should not have to travel to a clinic to get professional sports physiotherapy. The best place to assess, treat and rehabilitate a sports injury is often the environment where the sport itself happens — the ground, the court, the field or the training venue.
              </p>
              <p className="mt-4 text-base text-ink-light leading-relaxed">
                We connect athletes, players, coaches, academies, clubs and sports teams with qualified physiotherapists who provide professional sports physiotherapy services directly at sports grounds, courts, fields, stadiums, academies and training venues. No clinic visits. No travel. Just professional, sport-specific care — wherever you play.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img loading="lazy" decoding="async"
                src="https://images.pexels.com/photos/27684617/pexels-photo-27684617.jpeg?auto=compress&cs=tinysrgb&w=940&h=700&fit=crop"
                alt="Physiotherapist providing treatment to an athlete"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Target className="h-3 w-3" />
              Our Mission
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl text-balance">
              Making sports physiotherapy accessible to every athlete
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              We believe every athlete — from the weekend player to the competitive professional — deserves access to qualified sports physiotherapy at their training venue. Our mission is to make that a reality, one city at a time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Professional', desc: 'Qualified, registered physiotherapists with sports expertise.' },
              { icon: MapPin, title: 'Accessible', desc: 'Physiotherapy delivered at your venue — no clinic visits.' },
              { icon: Stethoscope, title: 'Athlete-First', desc: 'Care designed around the demands of your sport and schedule.' },
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

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <span className="section-label">
            <MapPin className="h-3 w-3" />
            Where We Operate
          </span>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
            Currently serving three cities
          </h2>
          <p className="mt-4 text-base text-ink-light max-w-2xl">
            ProActive Physio currently operates in Delhi, Gurugram and Chandigarh. We are building for expansion to additional cities and our platform architecture supports adding new locations over time.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="card group flex items-center justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-navy-700 group-hover:text-teal-600">{loc.name}</h3>
                  <p className="text-xs text-ink-light">{loc.state}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-teal-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
