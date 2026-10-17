import { destinationDisplayNames } from '../data/itineraryRegistry';

export const GA_MEASUREMENT_ID = 'G-H5NN81NH19';
export const SITE_DOMAIN = 'https://www.yugatirtha.com';

/**
 * Route metadata resolver
 * Returns descriptive { title, canonical } for all static and dynamic paths
 */
export function getRouteMetadata(pathname = '/') {
  const cleanPath = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  // Static routes
  const staticTitles = {
    '/': 'Yugatīrtha | Sacred Journeys & Experiential Travel',
    '/domestic': 'Domestic Destinations & Sacred Circuits | Yugatīrtha',
    '/international': 'International Sacred Tours & Circuits | Yugatīrtha',
    '/spiritualjourney': 'Spiritual Journeys & Pilgrimage Circuits | Yugatīrtha',
    '/experiences': 'Curated Cultural & Spiritual Experiences | Yugatīrtha',
    '/about': 'About Us | Mindful Travel Across Sacred Landscapes | Yugatīrtha',
    '/contact': 'Contact Us | Plan Your Journey | Yugatīrtha',
    '/enquiry': 'Plan Your Journey | Yugatīrtha',
    '/enquire': 'Plan Your Journey | Yugatīrtha',
    '/thank-you': 'Thank You | Yugatīrtha',
    '/thankyou': 'Thank You | Yugatīrtha',
  };

  if (staticTitles[cleanPath]) {
    return {
      title: staticTitles[cleanPath],
      canonical: `${SITE_DOMAIN}${cleanPath === '/thankyou' ? '/thank-you' : cleanPath}`,
    };
  }

  // Dynamic itinerary routes: /itinerary/:destination/:subItinerary? or direct /:destination/:subItinerary
  const match = cleanPath.match(/^\/(?:itinerary|itenary)\/([^/]+)(?:\/([^/]+))?$/i) ||
                cleanPath.match(/^\/([^/]+)\/([^/]+)$/i);
  if (match) {
    const rawDest = match[1].toLowerCase();
    const rawSub = match[2] ? match[2].toLowerCase() : null;
    const displayName = destinationDisplayNames[rawDest] || (rawDest.charAt(0).toUpperCase() + rawDest.slice(1));

    if (rawSub) {
      const durMatch = rawSub.match(/^(\d+)n-(\d+)d$/);
      const durationFormatted = durMatch ? `${durMatch[1]}N/${durMatch[2]}D` : rawSub.toUpperCase();
      return {
        title: `${displayName} ${durationFormatted} Tour Itinerary | Yugatīrtha`,
        canonical: `${SITE_DOMAIN}/itinerary/${rawDest}/${rawSub}`,
      };
    }

    return {
      title: `${displayName} Tour Itineraries & Packages | Yugatīrtha`,
      canonical: `${SITE_DOMAIN}/itinerary/${rawDest}`,
    };
  }

  return {
    title: 'Yugatīrtha | Sacred Journeys & Experiential Travel',
    canonical: `${SITE_DOMAIN}${cleanPath}`,
  };
}

/**
 * Safely dispatches a command to Google Tag / GA4
 */
export function safeGtag(...args) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  } else {
    window.dataLayer.push(args);
  }
}

/**
 * Dispatches an explicit page_view event to GA4
 */
export function trackPageView({ path, title, location } = {}) {
  if (typeof window === 'undefined') return;

  const pagePath = path || (window.location.pathname + window.location.search);
  const pageTitle = title || document.title || 'Yugatīrtha';
  const pageLocation = location || window.location.href;

  // Set the current measurement context
  safeGtag('set', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
  });

  // Dispatch the page_view event
  safeGtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Tracks custom events (e.g. clicks, interactions)
 */
export function trackEvent(eventName, eventParams = {}) {
  safeGtag('event', eventName, {
    ...eventParams,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Tracks enquiry form submission / lead generation
 */
export function trackLeadSubmission(data = {}) {
  trackEvent('generate_lead', {
    currency: 'INR',
    value: 1,
    lead_source: 'contact_form',
    destination: data.destination || 'Unspecified',
    traveler_name: data.name || 'Anonymous',
  });
}

/**
 * Tracks WhatsApp button click conversion
 */
export function trackWhatsAppClick(placement = 'general', destination = '') {
  trackEvent('contact_whatsapp', {
    contact_method: 'whatsapp',
    placement,
    destination: destination || 'general',
  });
}

/**
 * Tracks Phone call link click
 */
export function trackPhoneClick(phone = '') {
  trackEvent('contact_phone', {
    contact_method: 'phone',
    phone_number: phone,
  });
}
