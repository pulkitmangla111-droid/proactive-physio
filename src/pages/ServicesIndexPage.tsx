import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video, Activity } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

const serviceIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  Stethoscope, Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video,
};

export default function ServicesIndexPage() {
  return (
    <>
      <SEO
        title="Sports Physiotherapy Services | ProActive Physio"
        description="Professional sports physiotherapy services: sports injury care, rehabilitation, sports taping, warm-up preparation and recovery. Delivered on-ground with ProActive Physio."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        label="Our Services"
        title="Sports Physiotherapy Services"
        subtitle="Comprehensive physiotherapy services for athletes, players, coaches, academies and teams — all delivered on-ground at your training venue."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] || Activity;
              return (
                <Link key={service.slug} to={`/services/${service.slug}`} className="card group flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-500 shadow-lg shadow-teal-500/20">
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-navy-700 group-hover:text-teal-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-ink-light leading-relaxed">{service.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
