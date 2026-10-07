import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  structuredData?: object[];
  image?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://proactivephysio.in';
const DEFAULT_IMAGE = `${SITE_URL}/proactive_physio_logo.png`;

export default function SEO({
  title,
  description,
  structuredData = [],
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/\/+$/, '') || '/';
  const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '/' : cleanPath + '/'}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: 'name' | 'property', content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, selector.match(new RegExp(`${attribute}="([^"]+)"`))?.[1] || '');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[name="robots"]', 'name', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'ProActive Physio');
    setMeta('meta[property="og:image"]', 'property', image);
    setMeta('meta[property="og:locale"]', 'property', 'en_IN');

    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);
    setMeta('meta[name="twitter:image"]', 'name', image);
    setMeta('meta[name="twitter:url"]', 'name', canonicalUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.documentElement.lang = 'en';

    const existing = document.querySelectorAll('script[data-structured-data]');
    existing.forEach((script) => script.remove());

    const siteStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'ProActive Physio',
        url: `${SITE_URL}/`,
        inLanguage: 'en-IN',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: 'ProActive Physio',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/proactive_physio_logo.png`,
        email: 'proactivephysioteam@gmail.com',
        telephone: '+91-8360867991',
        areaServed: ['Delhi', 'Gurugram', 'Chandigarh'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'en-IN',
      },
    ];

    [...siteStructuredData, ...structuredData].forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [title, description, image, noindex, location.pathname, structuredData]);

  return null;
}
