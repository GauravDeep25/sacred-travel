import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, getRouteMetadata, SITE_DOMAIN } from '../utils/analytics';

/**
 * AnalyticsTracker Component
 * 
 * Sits directly inside <Router> to listen to client-side route transitions.
 * Ensures:
 * 1. Descriptive SEO titles are assigned to all routes.
 * 2. Proper canonical <link> is maintained.
 * 3. Accurate virtual page_view hits are dispatched to Google Analytics 4 (gtag.js)
 *    on both initial hard load and every internal route transition.
 */
export default function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedRef = useRef('');

  useEffect(() => {
    const fullPath = location.pathname + location.search;

    // 1. Immediately determine metadata and ensure title & canonical tag exist
    const meta = getRouteMetadata(location.pathname);
    
    // Set initial title from route map if page has not set one
    if (!document.title || document.title === 'Yugatirtha') {
      document.title = meta.title;
    }

    // Set/update canonical link tag for SEO
    if (typeof document !== 'undefined') {
      let canonicalEl = document.querySelector("link[rel='canonical']");
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', meta.canonical || `${SITE_DOMAIN}${location.pathname}`);
    }

    // 2. Allow page-level components (such as ItineraryDetail with specific duration or ThankYou)
    // a brief tick (60ms) to finish setting their custom title before firing page_view
    const timer = setTimeout(() => {
      const activeTitle = document.title || meta.title;
      trackPageView({
        path: fullPath,
        title: activeTitle,
        location: window.location.href,
      });
      lastTrackedRef.current = fullPath;
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}
