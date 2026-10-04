import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  structuredData?: object[];
}

export default function SEO({ title, description, structuredData = [] }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const canonicalUrl = `https://proactive-physio-web-yefd.bolt.host${location.pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute('content', 'index, follow');

    const existing = document.querySelectorAll('script[data-structured-data]');
    existing.forEach((s) => s.remove());

    structuredData.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    window.scrollTo(0, 0);
  }, [title, description, location.pathname, structuredData]);

  return null;
}
