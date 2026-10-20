import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, MapPin, Search, ShieldCheck, Video, House, Activity } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { formatINR, getPackagePrice, homeVisitPackages, pricedServices, pricingCategories, pricingCities, type PricingCategory, type PricingCity } from '@/data/pricing';

const faqs = [
  { q: 'How much does home physiotherapy cost?', a: 'Regular home physiotherapy starts at ₹800 per 45-minute session, depending on the selected city. Prices are fixed for the listed service and city; any exceptional travel charge is discussed before confirmation.' },
  { q: 'Are these prices final?', a: 'The displayed service prices are fixed for Delhi, Gurugram and Chandigarh. Your booking request is still subject to therapist availability and confirmation.' },
  { q: 'Do you offer online consultations?', a: 'Yes. Online consultation and follow-up options are listed separately and are suitable only when remote care is appropriate for your concern.' },
  { q: 'How do home-visit packages work?', a: 'Package totals are calculated from the regular home-session rate for the selected city and rounded to the nearest ₹50. The team confirms eligibility and availability before accepting a package request.' },
  { q: 'Can I book a specific date and time?', a: 'You can submit your preferred date and time through the booking form. The request is not confirmed until the team contacts you.' },
  { q: 'Can physiotherapy replace medical advice?', a: 'No. Physiotherapy is not a substitute for emergency care or a medical diagnosis when one is needed. Seek urgent medical help for severe or sudden symptoms.' },
];

export default function PricingPage() {
  const [city, setCity] = useState<PricingCity>('delhi');
  const [category, setCategory] = useState<PricingCategory | 'all'>('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'recommended' | 'low' | 'high' | 'duration'>('recommended');

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    const results = pricedServices.filter((service) =>
      (category === 'all' || service.category === category) &&
      (!q || [service.name, service.category, service.summary, service.mode].some((value) => value.toLowerCase().includes(q))),
    );
    if (sort === 'low') results.sort((a, b) => a.prices[city] - b.prices[city]);
    if (sort === 'high') results.sort((a, b) => b.prices[city] - a.prices[city]);
    if (sort === 'duration') results.sort((a, b) => a.duration - b.duration);
    return results;
  }, [city, category, query, sort]);

  return (
    <>
      <SEO title="Physiotherapy Pricing & Packages | ProActive Physio" description="View fixed physiotherapy prices, session durations and home-visit package totals in Delhi, Gurugram and Chandigarh." />
      <PageHeader breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} label="Clear, upfront guidance" title="Physiotherapy Pricing" subtitle="Compare fixed service prices and session lengths in Delhi, Gurugram and Chandigarh before sending a booking request." />

      <section className="py-10 lg:py-14">
        <div className="container-page">
          <div className="rounded-3xl bg-navy-700 p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <span className="section-label-dark"><ShieldCheck className="h-4 w-4" /> Fixed city pricing</span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Choose a service that fits your care needs</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">Fixed prices in INR for the three listed cities. We confirm therapist availability before accepting a booking request.</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 lg:mt-0 lg:min-w-64">
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/60">Online sessions from</p><p className="mt-1 text-xl font-bold" >₹500</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/60">Home visits from</p><p className="mt-1 text-xl font-bold" >₹800</p></div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-surface-300 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-5">
            <div>
              <label htmlFor="pricing-city" className="mb-1.5 block text-xs font-semibold text-navy-600"><MapPin className="mr-1 inline h-3.5 w-3.5" />City</label>
              <select id="pricing-city" className="select-field" value={city} onChange={(e) => setCity(e.target.value as PricingCity)}>{pricingCities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select>
            </div>
            <div>
              <label htmlFor="pricing-category" className="mb-1.5 block text-xs font-semibold text-navy-600">Service category</label>
              <select id="pricing-category" className="select-field" value={category} onChange={(e) => setCategory(e.target.value as PricingCategory | 'all')}><option value="all">All categories</option>{pricingCategories.map((c) => <option key={c} value={c}>{c}</option>)}</select>
            </div>
            <div>
              <label htmlFor="pricing-search" className="mb-1.5 block text-xs font-semibold text-navy-600">Search services</label>
              <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" /><input id="pricing-search" className="input-field pl-9" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try online or sports" /></div>
            </div>
            <div>
              <label htmlFor="pricing-sort" className="mb-1.5 block text-xs font-semibold text-navy-600">Sort by</label>
              <select id="pricing-sort" className="select-field" value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}><option value="recommended">Recommended</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="duration">Shortest duration</option></select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 text-sm text-ink-light"><span>{filteredServices.length} services</span><span>Prices for {pricingCities.find((c) => c.slug === city)?.name}</span></div>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => (
              <article key={service.id} className="card flex h-full flex-col">
                <div className="flex items-start justify-between gap-3"><span className="section-label">{service.category}</span><span className="rounded-full bg-surface-100 px-3 py-1 text-xs font-semibold text-navy-600">{service.mode === 'Online' ? <Video className="mr-1 inline h-3.5 w-3.5" /> : service.mode === 'Home visit' ? <House className="mr-1 inline h-3.5 w-3.5" /> : <Activity className="mr-1 inline h-3.5 w-3.5" />}{service.mode}</span></div>
                <h2 className="mt-4 text-xl font-bold text-navy-700">{service.name}</h2>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-light"><Clock3 className="h-4 w-4" />{service.duration} minutes</p>
                <p className="mt-3 text-sm leading-6 text-ink-light">{service.summary}</p>
                <ul className="mt-4 space-y-2">{service.includes.map((item) => <li key={item} className="flex gap-2 text-sm text-ink-light"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />{item}</li>)}</ul>
                <div className="mt-auto pt-6"><p className="text-xs text-ink-light">Fixed price · {pricingCities.find((c) => c.slug === city)?.name}</p><p className="mt-1 text-3xl font-bold text-navy-700">{formatINR(service.prices[city])}<span className="ml-1 text-sm font-normal text-ink-light">/ session</span></p><Link to={`/book?service=${encodeURIComponent(service.serviceSlug || service.id)}&serviceName=${encodeURIComponent(service.name)}&location=${city}&price=${service.prices[city]}&duration=${service.duration}`} className="btn-primary mt-5 w-full">Request this service <ArrowRight className="h-4 w-4" /></Link></div>
              </article>
            ))}
          </div>
          {filteredServices.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-surface-300 p-10 text-center"><h2 className="text-xl font-bold text-navy-700">No matching services</h2><p className="mt-2 text-sm text-ink-light">Try another category or search term.</p><button className="btn-outline mt-4" onClick={() => { setCategory('all'); setQuery(''); }}>Clear filters</button></div>}
        </div>
      </section>

      <section className="bg-surface-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center"><span className="section-label">Multiple-session options</span><h2 className="mt-4 text-3xl font-bold text-navy-700">Home-visit packages</h2><p className="mt-3 text-ink-light">Suggested package structures for care plans recommended by a physiotherapist. Eligibility and final pricing are confirmed before any purchase.</p></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{homeVisitPackages.map((pack) => <article key={pack.id} className="card"><p className="text-sm font-semibold text-teal-700">{pack.sessions} sessions · {pack.validityDays} days validity</p><h3 className="mt-3 text-xl font-bold text-navy-700">{pack.name}</h3><p className="mt-2 text-sm leading-6 text-ink-light">{pack.description}</p><p className="mt-4 text-xs text-ink-light">Package total for {pricingCities.find((c) => c.slug === city)?.name}</p><p className="mt-1 text-2xl font-bold text-navy-700">{formatINR(getPackagePrice(city, pack.sessions, pack.savingsPercent))}</p><p className="mt-1 text-xs text-ink-light">Save {pack.savingsPercent}% off the standard session total; rounded to the nearest ₹50.</p><Link to={`/book?location=${city}&package=${pack.id}`} className="btn-outline mt-5 w-full">Ask about this package <ArrowRight className="h-4 w-4" /></Link></article>)}</div>
        </div>
      </section>

      <section className="py-16 lg:py-20"><div className="container-page max-w-4xl"><div className="text-center"><span className="section-label">Good to know</span><h2 className="mt-4 text-3xl font-bold text-navy-700">Pricing FAQs</h2></div><div className="mt-8 divide-y divide-surface-300 rounded-2xl border border-surface-300 bg-white px-5 sm:px-8">{faqs.map((faq) => <details key={faq.q} className="group py-5"><summary className="cursor-pointer list-none pr-5 font-semibold text-navy-700 marker:hidden">{faq.q}<span className="float-right text-teal-600 transition-transform group-open:rotate-45">＋</span></summary><p className="mt-3 text-sm leading-6 text-ink-light">{faq.a}</p></details>)}</div><p className="mt-5 text-xs leading-5 text-ink-light">Listed prices are fixed for Delhi, Gurugram and Chandigarh and are not a confirmed booking. Home-visit travel within the normal service area is included; any exceptional out-of-area charge will be disclosed before confirmation. Prices are not a diagnosis or a promise of a particular recovery outcome.</p></div></section>
      <CTASection />
    </>
  );
}
