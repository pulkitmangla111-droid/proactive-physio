import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs, { type BreadcrumbItem } from './Breadcrumbs';

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  label?: string;
  title: string;
  subtitle?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHeader({
  breadcrumbs,
  label,
  title,
  subtitle,
  image,
  ctaLabel,
  ctaHref,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-700 pt-28 pb-16 lg:pt-32 lg:pb-20">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="ProActive Physio physiotherapy services" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-700/80 via-navy-700/85 to-navy-700" />
        </div>
      )}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container-page relative">
        <Breadcrumbs items={breadcrumbs} />

        {label && (
          <span className="section-label-dark mt-6">{label}</span>
        )}

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/70 text-pretty">
            {subtitle}
          </p>
        )}

        {ctaLabel && ctaHref && (
          <Link to={ctaHref} className="btn-primary mt-8 group">
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </section>
  );
}
