import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SITE_URL = 'https://proactivephysio.in';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `${SITE_URL}${item.href === '/' ? '/' : item.href.replace(/\/+$/, '') + '/'}` }
        : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />}
            {item.href ? (
              <Link to={item.href} className="hover:text-teal-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80" aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
