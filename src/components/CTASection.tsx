import { Link } from 'react-router-dom';
import { ArrowRight, CalendarPlus, Users, Stethoscope } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'dark' | 'teal';
}

export default function CTASection({
  title = 'Ready to Book a Specialized Physiotherapist?',
  subtitle = 'Get professional sports physiotherapy delivered directly to your ground, court, field, academy or training venue.',
  variant = 'dark',
}: CTASectionProps) {
  const bg = variant === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-teal-600 to-brand-600';

  return (
    <section className={`relative overflow-hidden ${bg} py-20`}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-page relative text-center">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg text-pretty">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/book" className="btn-primary group">
            <CalendarPlus className="h-4 w-4" />
            Book a Specialized Physiotherapist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/for-teams" className="btn-secondary">
            <Users className="h-4 w-4" />
            Book for Your Team
          </Link>
          <Link to="/for-physiotherapists" className="btn-secondary">
            <Stethoscope className="h-4 w-4" />
            Join as a Physiotherapist
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/50">
          Currently serving Gurugram · Chandigarh · Delhi
        </p>
      </div>
    </section>
  );
}
