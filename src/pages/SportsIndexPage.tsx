import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { sports } from '@/data/sports';

export default function SportsIndexPage() {
  return (
    <>
      <SEO
        title="Sport-Specific Physiotherapy | ProActive Physio"
        description="Professional sports physiotherapy for cricket, football, golf, tennis, kabaddi, wrestling and hockey. Sport-specific injury care and rehabilitation with ProActive Physio."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sports' }]}
        label="Sport-Specific Physiotherapy"
        title="Physiotherapy Built for Your Sport"
        subtitle="Every sport has unique demands, injury patterns and movement requirements. Our physiotherapists understand the specific needs of your game."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                to={`/sports/${sport.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-surface-300 bg-navy-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sport.image}
                    alt={`${sport.name} physiotherapy`}
                    className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700 via-navy-700/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-display text-xl font-bold text-white">{sport.h1}</h2>
                  <p className="mt-2 text-sm text-white/60 line-clamp-2">{sport.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
