import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { publishedLocations } from '@/data/locations';

export default function LocationsIndexPage() {
  return (
    <>
      <SEO
        title="Sports Physiotherapy Locations | ProActive Physio"
        description="ProActive Physio currently operates in Delhi, Gurugram and Chandigarh. Find professional physiotherapy at your home, training venue or sporting environment."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        label="Where We Operate"
        title="Sports Physiotherapy Locations"
        subtitle="ProActive Physio currently operates in Delhi, Gurugram and Chandigarh. Select your city to find professional physiotherapy at your home or training venue."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {publishedLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-surface-300 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`Sports physiotherapy in ${loc.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-700/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">{loc.state}</span>
                  <h2 className="mt-1 font-display text-xl font-bold text-white">
                    Sports Physiotherapy in {loc.name}
                  </h2>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{loc.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300">
                    View Location
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-surface-300 bg-surface-100 p-6 text-center">
            <MapPin className="mx-auto h-8 w-8 text-teal-500" />
            <h3 className="mt-4 font-display text-lg font-bold text-navy-700">More cities coming soon</h3>
            <p className="mt-2 text-sm text-ink-light max-w-md mx-auto">
              ProActive Physio is built for expansion. Our platform architecture supports adding new cities without redesign. We currently serve Delhi, Gurugram and Chandigarh only.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
