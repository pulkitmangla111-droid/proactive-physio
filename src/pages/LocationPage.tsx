import { Link, useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Activity, Users, CheckCircle2, Building2, CalendarPlus } from 'lucide-react';
import SEO from '@/components/SEO';
import NotFoundPage from '@/pages/NotFoundPage';
import PageHeader from '@/components/PageHeader';
import BookingSearch from '@/components/BookingSearch';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { publishedLocations } from '@/data/locations';
import { sports } from '@/data/sports';
import { services } from '@/data/services';
import { locationFaqs } from '@/data/faqs';

export default function LocationPage() {
  const { location: slug } = useParams<{ location: string }>();
  const loc = publishedLocations.find((l) => l.slug === slug);

  if (!loc) return <NotFoundPage />;

  const faqs = locationFaqs[loc.slug] || [];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Sports Physiotherapy',
      provider: { '@type': 'Organization', name: 'ProActive Physio', url: 'https://proactivephysio.in/' },
      areaServed: { '@type': 'City', name: loc.name },
      description: loc.intro,
      url: `https://proactivephysio.in/locations/${loc.slug}/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proactivephysio.in/' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://proactivephysio.in/locations/' },
        { '@type': 'ListItem', position: 3, name: loc.name, item: `https://proactivephysio.in/locations/${loc.slug}/` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={loc.metaTitle}
        description={loc.metaDescription}
        structuredData={structuredData}
      />

      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: loc.name },
        ]}
        label={`${loc.state} · ${loc.region}`}
        title={loc.h1}
        subtitle={loc.intro}
        image={loc.image}
        ctaLabel={loc.cta}
        ctaHref="/book"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="section-label">
                <MapPin className="h-3 w-3" />
                About {loc.name}
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
                On-ground sports physiotherapy across {loc.name}
              </h2>
              <p className="mt-5 text-base text-ink-light leading-relaxed">{loc.description}</p>
              <p className="mt-4 text-base text-ink-light leading-relaxed">{loc.sportsContext}</p>

              <h3 className="mt-8 font-display text-lg font-bold text-navy-700">Service coverage in {loc.name}</h3>
              {loc.confirmedAreas.length > 0 ? (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {loc.confirmedAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-500" />
                      <span className="text-sm text-navy-700">{area}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  Chandigarh, Gurugram and Delhi are the currently published cities. Specific locality coverage is confirmed for each enquiry based on the requested service, date and physiotherapist availability.
                </p>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
                    <Building2 className="h-5.5 w-5.5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-700">Venues We Serve</h3>
                </div>
                <p className="mt-3 text-sm text-ink-light leading-relaxed">{loc.venues}</p>
              </div>

              <div className="card mt-4">
                <h3 className="font-display text-base font-bold text-navy-700">Book in {loc.name}</h3>
                <p className="mt-2 text-sm text-ink-light">
                  Select {loc.name} as your location and choose your sport and service to get started.
                </p>
                <Link to="/book" className="btn-primary mt-4 w-full">
                  <CalendarPlus className="h-4 w-4" />
                  {loc.cta}
                </Link>
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
              Book in {loc.name}
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
              Find a specialized physiotherapist in {loc.name}
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <BookingSearch defaultLocation={loc.slug} />
          </div>
        </div>
      </section>

      {/* Available Sports */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <span className="section-label">
            <Activity className="h-3 w-3" />
            Available Sports
          </span>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
            Sports we support in {loc.name}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                to={`/sports/${sport.slug}`}
                className="card group flex items-center gap-3"
              >
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <img loading="lazy" decoding="async" src={sport.image} alt={sport.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-700 group-hover:text-teal-600">{sport.name}</h3>
                  <p className="text-xs text-ink-light">Physiotherapy</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <span className="section-label">
            <Activity className="h-3 w-3" />
            Available Services
          </span>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
            Services available in {loc.name}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="card group">
                <h3 className="font-display text-base font-bold text-navy-700 group-hover:text-teal-600">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-light">{service.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <span className="section-label">
            <Activity className="h-3 w-3" />
            How On-Ground Physiotherapy Works
          </span>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
            How it works in {loc.name}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Select Your Needs', desc: 'Choose your sport, service and preferred date.' },
              { step: '2', title: 'Pick Your Venue', desc: `Tell us where you train in ${loc.name}.` },
              { step: '3', title: 'Get Matched', desc: 'We connect you with a qualified physiotherapist.' },
              { step: '4', title: 'Receive Treatment', desc: 'Your physio arrives at your venue.' },
            ].map((s) => (
              <div key={s.step} className="card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700 text-white font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-700">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Book */}
      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <span className="section-label">
            <Users className="h-3 w-3" />
            Who Can Book
          </span>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
            Who can book in {loc.name}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Individual Athletes', desc: 'Players needing professional physiotherapy at their venue.' },
              { title: 'Coaches & Academies', desc: 'Coaching centres wanting physio support for their players.' },
              { title: 'Clubs & Teams', desc: 'Teams needing match-day cover and ongoing injury management.' },
              { title: 'Tournament Organisers', desc: 'Events requiring on-site physiotherapy for participants.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-display text-sm font-bold text-navy-700">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FAQAccordion faqs={faqs} title={`FAQs — Sports Physiotherapy in ${loc.name}`} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-surface-100 py-12">
        <div className="container-page">
          <h3 className="font-display text-sm font-bold text-navy-700">Explore more locations</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {publishedLocations.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link
                key={l.slug}
                to={`/locations/${l.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-surface-300 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-600"
              >
                <MapPin className="h-3.5 w-3.5" />
                Sports Physiotherapy in {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book a Specialized Physiotherapist in ${loc.name}`}
        subtitle={loc.intro}
      />
    </>
  );
}
