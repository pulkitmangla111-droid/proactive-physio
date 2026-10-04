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

    const setMeta = (selector: string, attribute: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (attribute === 'name') meta.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        if (attribute === 'property') meta.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', `https://proactivephysio.in${location.pathname}`);
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);

    const canonicalUrl = `https://proactivephysio.in${location.pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

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
