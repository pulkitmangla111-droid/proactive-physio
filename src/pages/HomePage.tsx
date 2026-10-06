import { Link } from 'react-router-dom';
import {
  ArrowRight, CalendarPlus, Users, Stethoscope, MapPin,
  ShieldCheck, Target, ClipboardCheck, Activity, ChevronDown,
  CircleDot, Circle, Disc, Disc3, Octagon, Hexagon, CircleDashed,
  Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video, User, Megaphone, Trophy,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import BookingSearch from '@/components/BookingSearch';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { locations } from '@/data/locations';
import { sports } from '@/data/sports';
import { services } from '@/data/services';
import { howItWorksSteps, whoCanBook, trustPoints, navLinks } from '@/data/site';
import { generalFaqs } from '@/data/faqs';

const sportIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  CircleDot, Circle, Disc, Disc3, Octagon, Hexagon, CircleDashed,
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  Stethoscope, Bandage, HeartPulse, StretchHorizontal, Flame, BatteryCharging, Accessibility, Video,
};

const whoIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  User, Megaphone, Users, Trophy,
};

const trustIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  ShieldCheck, MapPin, Target, ClipboardCheck,
};

const stepIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number | string }>> = {
  ClipboardList: Stethoscope,
  Calendar: CalendarPlus,
  UserCheck: ShieldCheck,
  Activity,
};

export default function HomePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ProActive Physio',
      slogan: 'Sports Physio, Wherever You Play.',
      description: 'ProActive Physio connects athletes, players, coaches, academies, clubs and sports teams with qualified physiotherapists who provide professional sports physiotherapy services directly at sports grounds, courts, fields, stadiums, academies and training venues.',
      areaServed: locations.map((l) => ({ '@type': 'City', name: l.name })),
      url: 'https://proactivephysio.in',
      telephone: '+91-8360867991',
      email: 'proactivephysioteam@gmail.com',
      contactPoint: [{ '@type': 'ContactPoint', telephone: '+91-8360867991', email: 'proactivephysioteam@gmail.com', contactType: 'customer service', areaServed: 'IN' }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ProActive Physio',
      url: 'https://proactivephysio.in',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: generalFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title="ProActive Physio | Sports, Geriatric & Online Physiotherapy"
        description="ProActive Physio offers sports physiotherapy, geriatric physiotherapy and online physiotherapy consultation across Delhi, Gurugram and Chandigarh, subject to service availability."
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-navy-700">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&w=1280&h=720&fit=crop"
            srcSet="https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&w=768&h=432&fit=crop 768w, https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&w=1280&h=720&fit=crop 1280w, https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop 1920w"
            sizes="100vw"
            alt="Sports physiotherapist treating an injured athlete on a football field"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700/95 via-navy-700/80 to-navy-700/90" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl animate-pulse-slow" />
        <div className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />

        <div className="container-page relative flex min-h-screen flex-col justify-center pt-20 pb-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 animate-fade-in">
                <span className="section-label-dark">
                  <Activity className="h-3 w-3" />
                  Sports Physiotherapy, On Your Turf
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl text-balance animate-fade-up">
                Sports Physio,
                <span className="block bg-gradient-to-r from-teal-400 via-teal-300 to-brand-300 bg-clip-text text-transparent">
                  Wherever You Play.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/70 text-pretty animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Professional physiotherapy support delivered directly to your sports ground, court, field, academy or training venue.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/book" className="btn-primary group">
                  <CalendarPlus className="h-4 w-4" />
                  Book a Specialized Physiotherapist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/locations" className="btn-secondary">
                  <MapPin className="h-4 w-4" />
                  Find a Physio Near You
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <span className="text-sm text-white/50">Now serving:</span>
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/locations/${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-teal-400/40 hover:bg-teal-500/10 hover:text-teal-300"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {l.name}
                    <ChevronDown className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <BookingSearch variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-surface-300 bg-white py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = trustIcons[point.icon] || ShieldCheck;
              return (
                <div key={point.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Icon className="h-5 w-5 text-teal-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-700">{point.title}</h3>
                    <p className="mt-0.5 text-xs text-ink-light leading-relaxed">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do / Intro */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">
                <Activity className="h-3 w-3" />
                What We Do
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
                Professional sports physiotherapy, delivered at your venue.
              </h2>
              <p className="mt-5 text-lg text-ink-light text-pretty">
                ProActive Physio connects athletes, players, coaches, academies, clubs and sports teams with qualified physiotherapists who provide professional sports physiotherapy services directly at sports grounds, courts, fields, stadiums, academies and training venues.
              </p>
              <p className="mt-4 text-base text-ink-light text-pretty">
                No clinic visits. No travel. Just professional, sport-specific physiotherapy — exactly where you train and compete.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'On-ground assessment and treatment',
                  'Sport-specific rehabilitation plans',
                  'Match-day and training cover',
                  'Injury screening and prevention',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="text-sm font-medium text-navy-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/how-it-works" className="btn-outline mt-8 group">
                See How It Works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/20860603/pexels-photo-20860603.jpeg?auto=compress&cs=tinysrgb&w=640&h=477&fit=crop"
                  alt="Physiotherapist providing hands-on treatment to an athlete"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-surface-300 bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-brand-500">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-700">Qualified Professionals</p>
                    <p className="text-xs text-ink-light">Vetted &amp; registered physiotherapists</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-surface-300 bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-700">On-Ground Delivery</p>
                    <p className="text-xs text-ink-light">At your training venue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Care */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="specialized-care-heading">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              <Accessibility className="h-3 w-3" />
              Specialized Care
            </span>
            <h2 id="specialized-care-heading" className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
              Specialized Care for Every Stage of Life
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              Beyond sports physiotherapy, ProActive Physio also provides focused support for older adults and convenient online physiotherapy guidance when remote care is clinically appropriate.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-surface-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img src="https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop" alt="Physiotherapy support for an older adult during an assisted exercise" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col p-7 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">For Older Adults</span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <Accessibility className="h-6 w-6 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-700">Geriatric Physiotherapy</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light">Personalized physiotherapy support for older adults focused on mobility, balance, strength and functional independence.</p>
                  <div className="mt-5 grid gap-2 text-sm text-navy-700">
                    {['Mobility & Movement Support','Balance & Stability Training','Strength & Functional Exercise','Recovery & Rehabilitation'].map((item) => (
                      <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-500" /><span>{item}</span></div>
                    ))}
                  </div>
                  <Link to="/book?service=geriatric-physiotherapy" className="btn-primary mt-7 w-full sm:w-auto"><CalendarPlus className="h-4 w-4" />Book Geriatric Physiotherapy<ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/services/geriatric-physiotherapy" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700">Explore Geriatric Physiotherapy <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-surface-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 aspect-[4/3] overflow-hidden lg:order-1 lg:aspect-auto">
                  <img src="https://images.pexels.com/photos/7195319/pexels-photo-7195319.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop" alt="Physiotherapist conducting an online consultation with a patient" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="order-1 flex flex-col p-7 sm:p-8 lg:order-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Consult From Anywhere</span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <Video className="h-6 w-6 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-700">Online Physiotherapy Consultation</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light">Get professional physiotherapy guidance online for assessment, exercises, rehabilitation support and follow-up care.</p>
                  <div className="mt-5 grid gap-2 text-sm text-navy-700">
                    {['Online Physiotherapy Assessment','Exercise Guidance','Rehabilitation Follow-Up','Personalized Exercise Plans'].map((item) => (
                      <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-500" /><span>{item}</span></div>
                    ))}
                  </div>
                  <Link to="/book?service=online-physiotherapy-consultation" className="btn-primary mt-7 w-full sm:w-auto"><CalendarPlus className="h-4 w-4" />Book Online Consultation<ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/services/online-physiotherapy-consultation" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700">Explore Online Physiotherapy Consultation <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-100 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <HeartPulse className="h-3 w-3" />
              Our Services
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
              Comprehensive sports physiotherapy services
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              From injury care to rehabilitation, taping to recovery — everything delivered on-ground at your venue.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] || Activity;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="card group flex flex-col"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-brand-500 shadow-lg shadow-teal-500/20">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-700 group-hover:text-teal-600 transition-colors">
                    {service.name}
                  </h3>
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

      {/* Sports */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Target className="h-3 w-3" />
              Sport-Specific Physiotherapy
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
              Physiotherapy built for your sport
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              Every sport has different demands. Our physiotherapists understand the specific injury patterns and movement requirements of your game.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport) => {
              const Icon = sportIcons[sport.icon] || CircleDot;
              return (
                <Link
                  key={sport.slug}
                  to={`/sports/${sport.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-surface-300 bg-navy-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={sport.image}
                      alt={`${sport.name} physiotherapy`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700 via-navy-700/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/20 backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5 text-teal-300" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{sport.name} Physiotherapy</h3>
                    <p className="mt-1 text-xs text-white/60">Learn more</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy-700 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label-dark">
              <Activity className="h-3 w-3" />
              How It Works
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Physiotherapy at your venue in four steps
            </h2>
            <p className="mt-4 text-lg text-white/70 text-pretty">
              From selection to treatment — a simple, seamless process designed for athletes and teams.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, i) => {
              const Icon = stepIcons[step.icon] || Activity;
              return (
                <div key={step.step} className="relative">
                  {i < howItWorksSteps.length - 1 && (
                    <div className="absolute top-12 left-full hidden w-full h-px bg-gradient-to-r from-white/20 to-transparent lg:block" />
                  )}
                  <div className="card-dark h-full">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand-500 shadow-lg shadow-teal-500/20">
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-teal-400">
                      Step {step.step}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/how-it-works" className="btn-secondary group">
              Learn More About How It Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Book */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Users className="h-3 w-3" />
              Who Can Book
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
              Built for everyone in sport
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              Whether you are an individual athlete, a coach, a team manager or a tournament organiser — ProActive Physio works for you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whoCanBook.map((item) => {
              const Icon = whoIcons[item.icon] || User;
              return (
                <div key={item.title} className="card text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                    <Icon className="h-7 w-7 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-light leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/for-players" className="btn-primary group">
              <User className="h-4 w-4" />
              For Players
            </Link>
            <Link to="/for-teams" className="btn-outline group">
              <Users className="h-4 w-4" />
              For Teams
            </Link>
            <Link to="/for-physiotherapists" className="btn-outline group">
              <Stethoscope className="h-4 w-4" />
              For Physiotherapists
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-surface-100 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <MapPin className="h-3 w-3" />
              Where We Operate
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl lg:text-5xl text-balance">
              Currently serving three locations
            </h2>
            <p className="mt-4 text-lg text-ink-light text-pretty">
              ProActive Physio currently operates in Delhi, Gurugram and Chandigarh. We are building for expansion to additional cities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-surface-300 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`Sports physiotherapy in ${loc.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-700/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">{loc.state}</span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Sports Physiotherapy in {loc.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{loc.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300">
                    View Location
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <FAQAccordion faqs={generalFaqs} title="Frequently Asked Questions" />
          <div className="mt-8 text-center">
            <Link to="/faq" className="btn-outline group">
              View All FAQs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
