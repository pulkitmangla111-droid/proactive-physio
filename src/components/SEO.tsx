import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  structuredData?: object[];
  image?: string;
}

export default function SEO({ title, description, structuredData = [], image = 'https://proactivephysio.in/proactive_physio_logo.png' }: SEOProps) {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/\/+$/, '') || '/';
  const canonicalUrl = `https://proactivephysio.in${cleanPath === '/' ? '/' : cleanPath + '/'}`;

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
    setMeta('meta[property="og:url"]', 'property', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'ProActive Physio');
    setMeta('meta[property="og:image"]', 'property', image);
    setMeta('meta[name="twitter:image"]', 'name', image);
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);

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
