import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, FileText, Activity, HeartPulse, StretchHorizontal, Flame } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { sports } from '@/data/sports';
import { services } from '@/data/services';

export default function ResourcesPage() {
  const articles = [
    { icon: HeartPulse, title: 'Understanding Hamstring Strains in Cricket', desc: 'A guide to hamstring injury assessment, management and return-to-play for cricket players.', tag: 'Cricket' },
    { icon: Activity, title: 'The FIFA 11+ Warm-Up Programme Explained', desc: 'How evidence-based warm-up programmes reduce injury rates in football.', tag: 'Football' },
    { icon: StretchHorizontal, title: 'Sports Taping: When and Why It Helps', desc: 'A practical overview of rigid and kinesiology taping for injury support.', tag: 'General' },
    { icon: Flame, title: 'Building an Effective Pre-Match Warm-Up', desc: 'Key principles of warm-up design across different sports.', tag: 'General' },
    { icon: HeartPulse, title: 'Managing Lower Back Pain in Fast Bowlers', desc: 'Why fast bowlers are vulnerable to lumbar stress and what to do about it.', tag: 'Cricket' },
    { icon: Activity, title: 'Ankle Sprain Recovery: A Step-by-Step Guide', desc: 'Evidence-based rehabilitation for lateral ankle sprains in sport.', tag: 'General' },
  ];

  return (
    <>
      <SEO
        title="Resources | Sports Physiotherapy Guides | ProActive Physio"
        description="Educational resources and guides on sports physiotherapy, injury prevention, warm-up, taping and rehabilitation from ProActive Physio."
      />

      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        label="Knowledge Hub"
        title="Resources & Guides"
        subtitle="Educational articles and guides on sports physiotherapy, injury prevention, warm-up, taping and rehabilitation."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => {
              const Icon = article.icon;
              return (
                <div key={i} className="card group flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-600" strokeWidth={2} />
                  </div>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-surface-200 px-3 py-1 text-xs font-semibold text-ink-light">{article.tag}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-navy-700 group-hover:text-teal-600 transition-colors">{article.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-light">{article.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-surface-300 bg-surface-100 p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-teal-600" />
              <h3 className="font-display text-base font-bold text-navy-700">Explore by sport</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {sports.map((sport) => (
                <Link
                  key={sport.slug}
                  to={`/sports/${sport.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-300 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-600"
                >
                  {sport.name} Physiotherapy
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-surface-300 bg-surface-100 p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-teal-600" />
              <h3 className="font-display text-base font-bold text-navy-700">Explore by service</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-300 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
