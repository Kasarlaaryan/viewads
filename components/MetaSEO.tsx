import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://viewads.in';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  /** Override the canonical path (defaults to the current router pathname) */
  path?: string;
  /** Set true on the 404 page so search engines skip it */
  noindex?: boolean;
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const MetaSEO: React.FC<SEOProps> = ({ title, description, keywords, path, noindex = false }) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${path ?? location.pathname}`;

  useEffect(() => {
    // Page title
    document.title = title;

    // Primary meta tags (create-or-update)
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // Canonical URL
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph (per-page, overrides the site defaults in index.html)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description, keywords, canonicalUrl, noindex]);

  return null;
};

export default MetaSEO;
