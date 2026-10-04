import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, Activity, AlertTriangle, Flame, BatteryCharging,
  MapPin, CheckCircle2, CalendarPlus, ChevronRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import NotFoundPage from '@/pages/NotFoundPage';
import PageHeader from '@/components/PageHeader';
import BookingSearch from '@/components/BookingSearch';
import CTASection from '@/components/CTASection';
import { sports } from '@/data/sports';
import { locations } from '@/data/locations';
import { notFound } from '@/lib/utils';

export default function SportPage() {
  const { sport: slug } = useParams<{ sport: string }>();
  const sport = sports.find((s) => s.slug === slug);

  if (!sport) return <NotFoundPage />;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: `${sport.name} Physiotherapy`,
      provider: { '@type': 'Organization', name: 'ProActive Physio' },
      description: sport.intro,
      url: `https://proactivephysio.in/sports/${sport.slug}`,
    },
  ];

  return (
    <>
      <SEO
        title={sport.metaTitle}
        description={sport.metaDescription}
        structuredData={structuredData}
      />

      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sports', href: '/sports' },
          { label: sport.name },
        ]}
        label="Sport-Specific Physiotherapy"
        title={sport.h1}
        subtitle={sport.intro}
        image={sport.image}
        ctaLabel={`Book a ${sport.name} Physiotherapist`}
        ctaHref="/book"
      />

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 prose-physio">
              <span className="section-label">
                <Activity className="h-3 w-3" />
                About {sport.name} Physiotherapy
              </span>
              <h2 className="font-display text-2xl font-extrabold text-navy-700 sm:text-3xl mt-5">
                Understanding the demands of {sport.name.toLowerCase()}
              </h2>
              <p className="mt-4 text-base text-ink-light leading-relaxed">{sport.description}</p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-700">
                Common injuries in {sport.name.toLowerCase()}
              </h3>
              <div className="mt-4 space-y-2.5">
                {sport.injuries.map((injury) => (
                  <div key={injury} className="flex items-start gap-2.5">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                    <span className="text-sm text-ink-light">{injury}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-700">
                Physiotherapy considerations for {sport.name.toLowerCase()}
              </h3>
              <p className="mt-3 text-base text-ink-light leading-relaxed">{sport.considerations}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                      <Flame className="h-5 w-5 text-amber-600" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-navy-700">Warm-Up Guidance</h4>
                  </div>
                  <p className="mt-3 text-sm text-ink-light leading-relaxed">{sport.warmUp}</p>
                </div>

                <div className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                      <BatteryCharging className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-navy-700">Recovery Guidance</h4>
                  </div>
                  <p className="mt-3 text-sm text-ink-light leading-relaxed">{sport.recovery}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="font-display text-base font-bold text-navy-700">
                  Book {sport.name} physiotherapy
                </h3>
                <p className="mt-2 text-sm text-ink-light">
                  Select your location and preferred date to book a physiotherapist for {sport.name.toLowerCase()} at your venue.
                </p>
                <Link to="/book" className="btn-primary mt-4 w-full">
                  <CalendarPlus className="h-4 w-4" />
                  Book a {sport.name} Physiotherapist
                </Link>

                <div className="mt-6 border-t border-surface-300 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">Available in</h4>
                  <div className="mt-3 space-y-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          {loc.name}
                        </span>
                        <ChevronRight className="h-4 w-4 text-ink-light" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search */}
      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Activity className="h-3 w-3" />
              Book Now
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Find a {sport.name} physiotherapist near you
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <BookingSearch defaultSport={sport.slug} />
          </div>
        </div>
      </section>

      {/* Other Sports */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-xl font-bold text-navy-700">Explore other sports</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {sports.filter((s) => s.slug !== sport.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/sports/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-surface-300 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-600"
              >
                {s.name} Physiotherapy
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book a ${sport.name} Physiotherapist`}
        subtitle={`Professional ${sport.name.toLowerCase()} physiotherapy delivered at your training venue in Delhi, Gurugram and Chandigarh.`}
      />
    </>
  );
}
