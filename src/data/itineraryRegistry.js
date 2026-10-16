import { domesticSiteConfig } from './siteConfig.domestic.js';
import { internationalSiteConfig } from './siteConfig.international.js';
import { spiritualSiteConfig } from './siteConfig.spiritual.js';
import { siteConfig } from './siteConfig.js';

export const CANONICAL_BASE = 'https://www.yugatirtha.com';

// Map destination slugs to card images, regions, and breadcrumb parent routes
export const destinationMeta = {
  kashmir:       { img: '/assets/kashmir-C3GCvNNI.jpg',          region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  ladakh:        { img: '/assets/spiritual-north-NuyL8ZKr.jpg',  region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  himachal:      { img: '/assets/himachal.jpg',                  region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  spiti:         { img: '/assets/hero-spiti.jpg',                region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  meghalaya:     { img: '/assets/northeast-D8OXmwI_.jpg',        region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  sikkim:        { img: '/assets/sikkim.jpg',                    region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  arunachal:     { img: '/assets/Arunachal.jpg',                 region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  rajasthan:     { img: '/assets/rajasthan-Dznk4KEj.jpg',        region: 'West India',      from: '/domestic',         fromLabel: 'Domestic' },
  kerala:        { img: '/assets/kerala-JKm5YrGV.jpg',           region: 'South India',     from: '/domestic',         fromLabel: 'Domestic' },
  maharashtra:   { img: '/assets/Maharashtra.jpg',               region: 'West India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  gujarat:       { img: '/assets/Gujrat.jpg',                    region: 'West India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  tamilnadu:     { img: '/assets/temple-south-CC6aHc0Q.jpg',     region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  andhrapradesh: { img: '/assets/Andhra.jpg',                    region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  uttarakhand:   { img: '/assets/Kainchi-Dham.jpg',              region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  uttarpradesh:  { img: '/assets/aarti-Cr2kuE6b.jpg',            region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  madhyapradesh: { img: '/assets/hero-aarti.jpg',                region: 'Central India',   from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  odisha:        { img: '/assets/konark.jpg',                    region: 'East India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  bali:          { img: '/assets/intl-bali-Ck8GSayl.jpg',        region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  vietnam:       { img: '/assets/intl-vietnam-ZB5ZxQ8t.jpg',     region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  philippines:   { img: '/assets/intl-angkor-Xa0-qQac.jpg',      region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  georgia:       { img: '/assets/intl-caucasus-DAV0UB-k.jpg',    region: 'CIS Countries',   from: '/international',    fromLabel: 'International' },
  japan:         { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200', region: 'East Asia', from: '/international', fromLabel: 'International' },
  srilanka:      { img: '/assets/Srilanka.jpg',                  region: 'South Asia',      from: '/international',    fromLabel: 'International' },
};

export const destinationDisplayNames = {
  kashmir: 'Kashmir',
  ladakh: 'Ladakh',
  himachal: 'Himachal Pradesh',
  spiti: 'Spiti Valley',
  meghalaya: 'Meghalaya',
  sikkim: 'Sikkim',
  arunachal: 'Arunachal Pradesh',
  rajasthan: 'Rajasthan',
  kerala: 'Kerala',
  maharashtra: 'Maharashtra',
  gujarat: 'Gujarat',
  tamilnadu: 'Tamil Nadu',
  andhrapradesh: 'Andhra Pradesh',
  uttarakhand: 'Uttarakhand',
  uttarpradesh: 'Uttar Pradesh',
  madhyapradesh: 'Madhya Pradesh',
  odisha: 'Odisha',
  bali: 'Bali',
  vietnam: 'Vietnam',
  philippines: 'Philippines',
  georgia: 'Georgia',
  japan: 'Japan',
  srilanka: 'Sri Lanka',
};

// Explicit canonical slugs for sub-itineraries where disambiguation or specific naming is best
export const customSubSlugs = {
  // Himachal (has two 5N/6D packages)
  'himachal-1': '4n-5d',
  'himachal-2': '5n-6d',
  'himachal-3': '5n-6d-jibhi-tirthan',
  'himachal-4': '8n-9d',

  // Bali
  'bali-1': '5n-6d',
  'bali-2': '5n-6d-yoga',

  // Sri Lanka
  'srilanka-1': '5n-6d',
  'srilanka-2': '5n-6d-ella-trincomalee',

  // Uttarakhand
  'uttarakhand-1': 'do-dham-5n-6d',
  'uttarakhand-2': 'char-dham-9n-10d',
  'uttarakhand-3': 'kainchi-dham-2n-3d',
  'uttarakhand-4': 'badrinath-4n-5d',

  // Uttar Pradesh
  'uttarpradesh-1': 'varanasi-ayodhya-4n-5d',
  'uttarpradesh-2': 'kashi-2n-3d',
  'uttarpradesh-3': 'kashi-prayagraj-ayodhya-4n-5d',

  // Madhya Pradesh
  'madhyapradesh-1': 'bhasma-aarti-2n-3d',
  'madhyapradesh-2': 'vip-passes-2n-3d',

  // Maharashtra
  'maharashtra-1': 'pune-jyotirling-2n-3d',
  'maharashtra-2': 'pune-jyotirling-3n-4d',
  'maharashtra-3': 'mumbai-jyotirling-3n-4d',

  // Gujarat
  'gujarat-1': '3n-4d',

  // Odisha
  'odisha-1': 'puri-dham-4n-5d',
  'odisha-2': 'puri-konark-3n-4d',

  // Tamil Nadu
  'tamilnadu-1': 'rameswaram-4n-5d',
  'tamilnadu-2': 'pancha-bhoota-stalam-6n-7d',

  // Andhra Pradesh
  'andhrapradesh-1': 'mallikarjun-jyotirling-3n-4d',
  'andhrapradesh-2': 'tirupati-2n-3d',
  'andhrapradesh-3': 'tirupati-kalahasti-2n-3d',
};

/**
 * Extracts a compact duration slug like "4n-5d" from a duration string like "Kashmir 4N/5D"
 */
export function extractDurationSlug(durationStr) {
  if (!durationStr) return null;
  const match = durationStr.match(/(\d+)\s*N\s*[\/-]?\s*(\d+)\s*D/i);
  return match ? `${match[1]}n-${match[2]}d`.toLowerCase() : null;
}

/**
 * Extracts concise display text like "4N/5D"
 */
export function extractDurationShort(durationStr) {
  if (!durationStr) return '';
  const match = durationStr.match(/(\d+)\s*N\s*[\/-]?\s*(\d+)\s*D/i);
  return match ? `${match[1]}N/${match[2]}D` : durationStr;
}

/**
 * Gets the canonical slug for a package
 */
export function getPackageSlug(pkg, destination, index = 0) {
  if (!pkg) return `package-${index + 1}`;
  if (pkg.id && customSubSlugs[pkg.id]) {
    return customSubSlugs[pkg.id];
  }
  const durSlug = extractDurationSlug(pkg.duration);
  if (durSlug) return durSlug;
  return `package-${index + 1}`;
}

/**
 * Retrieve all packages for a destination
 */
export function getDestinationPackages(destination) {
  if (!destination) return [];
  const dest = destination.toLowerCase().trim();
  return (
    domesticSiteConfig.itineraries?.[dest] ||
    internationalSiteConfig.itineraries?.[dest] ||
    spiritualSiteConfig.itineraries?.[dest] ||
    siteConfig.itineraries?.[dest] ||
    []
  );
}

/**
 * Robust package resolver by slug, alias, duration, package id, or numeric index
 */
export function findPackageIndex(packages, destination, slugOrId) {
  if (!packages || packages.length === 0) return 0;
  if (!slugOrId) return 0;

  const raw = String(slugOrId).toLowerCase().trim();
  const clean = raw.replace(/[^a-z0-9]/g, ''); // e.g. "4n5d"

  // 1. Exact match on canonical slug or id
  const exactIdx = packages.findIndex((p, idx) => {
    const canonical = getPackageSlug(p, destination, idx).toLowerCase();
    return p.id?.toLowerCase() === raw || canonical === raw;
  });
  if (exactIdx !== -1) return exactIdx;

  // 2. Normalized alphanumeric match on canonical slug or id
  const normIdx = packages.findIndex((p, idx) => {
    const canonical = getPackageSlug(p, destination, idx).replace(/[^a-z0-9]/g, '');
    const pIdClean = (p.id || '').replace(/[^a-z0-9]/g, '');
    return canonical === clean || pIdClean === clean;
  });
  if (normIdx !== -1) return normIdx;

  // 3. Match on duration pattern (e.g. "4n-5d" or "4n5d")
  const durIdx = packages.findIndex((p) => {
    const pDurSlug = extractDurationSlug(p.duration);
    if (!pDurSlug) return false;
    return pDurSlug === raw || pDurSlug.replace(/[^a-z0-9]/g, '') === clean;
  });
  if (durIdx !== -1) return durIdx;

  // 4. Keyword fuzzy match (e.g. "yoga", "jibhi", "kainchi", "badrinath", "dham", "kashi")
  const keywordIdx = packages.findIndex((p) => {
    const titleClean = (p.title || '').toLowerCase();
    const durClean = (p.duration || '').toLowerCase();
    return (
      (raw.length >= 3 && (titleClean.includes(raw) || durClean.includes(raw))) ||
      (clean.length >= 3 && (titleClean.replace(/[^a-z0-9]/g, '').includes(clean) || durClean.replace(/[^a-z0-9]/g, '').includes(clean)))
    );
  });
  if (keywordIdx !== -1) return keywordIdx;

  // 5. 1-based numeric index (e.g. "1" -> 0, "2" -> 1)
  const num = parseInt(raw, 10);
  if (!isNaN(num) && num >= 1 && num <= packages.length) {
    return num - 1;
  }

  return 0;
}

/**
 * Returns complete itinerary and sub-itinerary routing catalog
 */
export function getItineraryCatalog() {
  const allDestinations = [
    ...Object.entries(domesticSiteConfig.itineraries || {}).map(([dest, pkgs]) => ({ dest, pkgs, category: 'Domestic', from: '/domestic' })),
    ...Object.entries(internationalSiteConfig.itineraries || {}).map(([dest, pkgs]) => ({ dest, pkgs, category: 'International', from: '/international' })),
    ...Object.entries(spiritualSiteConfig.itineraries || {}).map(([dest, pkgs]) => ({ dest, pkgs, category: 'Spiritual', from: '/spiritualjourney' })),
  ];

  const catalog = [];

  allDestinations.forEach(({ dest, pkgs, category, from }) => {
    const displayName = destinationDisplayNames[dest] || dest;
    const meta = destinationMeta[dest] || { region: category, img: '/assets/hero-spiti.jpg' };

    // Parent destination route
    const destRoute = {
      type: 'destination',
      destination: dest,
      displayName,
      category,
      path: `/itinerary/${dest}`,
      canonicalUrl: `${CANONICAL_BASE}/itinerary/${dest}`,
      packagesCount: pkgs.length,
      image: meta.img,
      region: meta.region,
      from,
    };

    // Sub-itinerary routes
    const subRoutes = pkgs.map((pkg, idx) => {
      const slug = getPackageSlug(pkg, dest, idx);
      return {
        type: 'sub_itinerary',
        destination: dest,
        destinationDisplayName: displayName,
        category,
        packageId: pkg.id,
        packageTitle: pkg.title,
        duration: pkg.duration,
        durationShort: extractDurationShort(pkg.duration),
        slug,
        path: `/itinerary/${dest}/${slug}`,
        canonicalUrl: `${CANONICAL_BASE}/itinerary/${dest}/${slug}`,
        daysCount: pkg.days?.length || 0,
        inclusionsCount: pkg.inclusions?.length || 0,
        image: meta.img,
        region: meta.region,
      };
    });

    catalog.push({
      ...destRoute,
      subRoutes,
    });
  });

  return catalog;
}
