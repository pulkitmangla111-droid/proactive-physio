import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, CalendarPlus, Activity,
  Stethoscope, Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video,
  MapPin,
} from 'lucide-react';
import SEO from '@/components/SEO';
import NotFoundPage from '@/pages/NotFoundPage';
import PageHeader from '@/components/PageHeader';
import BookingSearch from '@/components/BookingSearch';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const serviceIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  Stethoscope, Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video,
};

export default function ServicePage() {
  const { service: slug } = useParams<{ service: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFoundPage />;

  const Icon = serviceIcons[service.icon] || Activity;

  const canonicalUrl = `https://proactivephysio.in/services/${service.slug}/`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      provider: { '@type': 'Organization', name: 'ProActive Physio', url: 'https://proactivephysio.in/' },
      description: service.intro,
      areaServed: locations.map((l) => ({ '@type': 'City', name: l.name })),
      url: canonicalUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proactivephysio.in/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://proactivephysio.in/services/' },
        { '@type': 'ListItem', position: 3, name: service.name, item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        structuredData={structuredData}
      />

      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
        label="Our Services"
        title={service.h1}
        subtitle={service.intro}
        ctaLabel={`Book ${service.name}`}
        ctaHref={`/book?service=${service.slug}`}
      />

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-500 shadow-lg shadow-teal-500/20">
                <Icon className="h-7 w-7 text-white" strokeWidth={2} />
              </div>
              <h2 className="mt-6 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
                {service.name}
              </h2>
              <p className="mt-4 text-base text-ink-light leading-relaxed">{service.description}</p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-700">What's included</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-500 mt-0.5" />
                    <span className="text-sm text-ink-light">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-surface-300 bg-surface-100 p-5">
                <h3 className="font-display text-lg font-bold text-navy-700">Next steps</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">
                  Review the booking options for this service, browse frequently asked questions, or contact ProActive Physio if you need help choosing the right service.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to={`/book?service=${service.slug}`} className="text-sm font-semibold text-teal-600 hover:text-teal-700">Book this service</Link>
                  <Link to="/faq" className="text-sm font-semibold text-teal-600 hover:text-teal-700">Read physiotherapy FAQs</Link>
                  <Link to="/contact" className="text-sm font-semibold text-teal-600 hover:text-teal-700">Contact ProActive Physio</Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="font-display text-base font-bold text-navy-700">Book this service</h3>
                <p className="mt-2 text-sm text-ink-light">
                  Select the relevant preferences and submit a booking request for {service.name.toLowerCase()}.
                </p>
                <Link to={`/book?service=${service.slug}`} className="btn-primary mt-4 w-full">
                  <CalendarPlus className="h-4 w-4" />
                  Book Now
                </Link>

                <div className="mt-6 border-t border-surface-300 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">Available in</h4>
                  <div className="mt-3 space-y-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center gap-2 text-sm text-navy-700 hover:text-teal-600"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {loc.name}
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
              Book {service.name.toLowerCase()} at your venue
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <BookingSearch defaultService={service.slug} />
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-xl font-bold text-navy-700">Explore other services</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.filter((s) => s.slug !== service.slug).map((s) => {
              const SIcon = serviceIcons[s.icon] || Activity;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card group flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                    <SIcon className="h-5 w-5 text-teal-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-700 group-hover:text-teal-600">{s.name}</h3>
                    <p className="mt-1 text-xs text-ink-light line-clamp-2">{s.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book ${service.name}`}
        subtitle={service.intro}
      />
    </>
  );
}
