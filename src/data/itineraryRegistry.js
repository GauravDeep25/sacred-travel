import { domesticSiteConfig } from './siteConfig.domestic.js';
import { internationalSiteConfig } from './siteConfig.international.js';
import { spiritualSiteConfig } from './siteConfig.spiritual.js';
import { siteConfig } from './siteConfig.js';

export const CANONICAL_BASE = 'https://www.yugatirtha.com';

// Map destination place slugs to card images, regions, and breadcrumb parent routes
export const destinationMeta = {
  // ── Spiritual Sacred Places ──
  'adi-kailash':           { img: '/assets/spiritual-north-NuyL8ZKr.jpg', region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'badrinath':             { img: '/assets/spiritual-north.jpg',         region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'do-dham':               { img: '/assets/spiritual-north-NuyL8ZKr.jpg', region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'char-dham':             { img: '/assets/spiritual-north-NuyL8ZKr.jpg', region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'kainchi-dham':          { img: '/assets/Kainchi-Dham.jpg',             region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'kashi':                 { img: '/assets/hero-aarti.jpg',               region: 'North India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'ujjain':                { img: '/assets/hero-aarti.jpg',               region: 'Central India',   from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'maharashtra-jyotirling':{ img: '/assets/Maharashtra.jpg',            region: 'West India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'somnath-dwarka':        { img: '/assets/Gujrat.jpg',                   region: 'West India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'puri':                  { img: '/assets/konark.jpg',                    region: 'East India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'rameswaram':            { img: '/assets/temple-south-CC6aHc0Q.jpg',    region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'pancha-bhoota':         { img: '/assets/temple-south-CC6aHc0Q.jpg',    region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'madurai-rameshwaram':   { img: '/assets/hero-temple-south.jpg',        region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'mallikarjun':           { img: '/assets/Andhra.jpg',                   region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'tirupati':              { img: '/assets/Andhra.jpg',                   region: 'South India',     from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'khatu-shyam':           { img: '/assets/rajasthan-Dznk4KEj.jpg',       region: 'West India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },
  'baidyanath':            { img: '/assets/aarti-Cr2kuE6b.jpg',           region: 'East India',      from: '/spiritualjourney', fromLabel: 'Spiritual Journey' },

  // ── Domestic Places ──
  'kashmir':               { img: '/assets/kashmir-C3GCvNNI.jpg',         region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  'ladakh':                { img: '/assets/spiritual-north-NuyL8ZKr.jpg', region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  'himachal':              { img: '/assets/himachal.jpg',                 region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  'spiti':                 { img: '/assets/hero-spiti.jpg',               region: 'North India',     from: '/domestic',         fromLabel: 'Domestic' },
  'meghalaya':             { img: '/assets/northeast-D8OXmwI_.jpg',       region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  'sikkim':                { img: '/assets/sikkim.jpg',                   region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  'arunachal':             { img: '/assets/Arunachal.jpg',                region: 'Northeast India', from: '/domestic',         fromLabel: 'Domestic' },
  'rajasthan':             { img: '/assets/rajasthan-Dznk4KEj.jpg',       region: 'West India',      from: '/domestic',         fromLabel: 'Domestic' },
  'kerala':                { img: '/assets/kerala-JKm5YrGV.jpg',          region: 'South India',     from: '/domestic',         fromLabel: 'Domestic' },

  // ── International Places ──
  'bali':                  { img: '/assets/intl-bali-Ck8GSayl.jpg',       region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  'vietnam':               { img: '/assets/intl-vietnam-ZB5ZxQ8t.jpg',    region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  'philippines':           { img: '/assets/intl-angkor-Xa0-qQac.jpg',     region: 'Southeast Asia',  from: '/international',    fromLabel: 'International' },
  'georgia':               { img: '/assets/intl-caucasus-DAV0UB-k.jpg',   region: 'CIS Countries',   from: '/international',    fromLabel: 'International' },
  'japan':                 { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200', region: 'East Asia', from: '/international', fromLabel: 'International' },
  'srilanka':              { img: '/assets/Srilanka.jpg',                 region: 'South Asia',      from: '/international',    fromLabel: 'International' },
};

export const destinationDisplayNames = {
  // Spiritual places
  'adi-kailash':           'Adi Kailash',
  'badrinath':             'Badrinath',
  'do-dham':               'Do Dham',
  'char-dham':             'Char Dham',
  'kainchi-dham':          'Kainchi Dham',
  'kashi':                 'Kashi',
  'ujjain':                'Ujjain & Omkareshwar',
  'maharashtra-jyotirling':'Maharashtra Jyotirlinga',
  'somnath-dwarka':        'Somnath & Dwarka',
  'puri':                  'Puri Jagannath Dham',
  'rameswaram':            'Rameswaram',
  'pancha-bhoota':         'Pancha Bhoota Stalam',
  'madurai-rameshwaram':   'Madurai & Rameshwaram',
  'mallikarjun':           'Mallikarjun Jyotirling',
  'tirupati':              'Tirupati Balaji',
  'khatu-shyam':           'Khatu Shyam Ji',
  'baidyanath':            'Baidyanath Jyotirlinga',

  // Domestic places
  'kashmir':               'Kashmir',
  'ladakh':                'Ladakh',
  'himachal':              'Himachal Pradesh',
  'spiti':                 'Spiti Valley',
  'meghalaya':             'Meghalaya',
  'sikkim':                'Sikkim',
  'arunachal':             'Arunachal Pradesh',
  'rajasthan':             'Rajasthan',
  'kerala':                'Kerala',

  // International places
  'bali':                  'Bali',
  'vietnam':               'Vietnam',
  'philippines':           'Philippines',
  'georgia':               'Georgia',
  'japan':                 'Japan',
  'srilanka':              'Sri Lanka',
};

// Explicit custom duration sub-slugs for disambiguation
export const customSubSlugs = {
  // Himachal
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

  // Kashi / UP
  'uttarpradesh-1': '4n-5d',
  'uttarpradesh-2': '2n-3d',
  'uttarpradesh-3': '4n-5d-sangam',

  // Ujjain
  'madhyapradesh-1': '2n-3d',
  'madhyapradesh-2': '2n-3d-vip',

  // Maharashtra
  'maharashtra-1': '2n-3d',
  'maharashtra-2': '3n-4d',
  'maharashtra-3': '3n-4d-mumbai',

  // Puri
  'odisha-1': '4n-5d',
  'odisha-2': '3n-4d',

  // Tirupati
  'andhrapradesh-2': '2n-3d',
  'andhrapradesh-3': '2n-3d-kalahasti',
};

/**
 * Normalizes destination / place slug
 */
export function normalizeDestinationSlug(rawSlug = '') {
  const clean = String(rawSlug).toLowerCase().trim().replace(/[^a-z0-9-]/g, '');

  // Backward compatibility: map state-based legacy routes to the exact place
  const stateMappings = {
    'uttarakhand': 'adi-kailash', // default or resolved via sub-itinerary
    'uttarpradesh': 'kashi',
    'madhyapradesh': 'ujjain',
    'maharashtra': 'maharashtra-jyotirling',
    'gujarat': 'somnath-dwarka',
    'odisha': 'puri',
    'tamilnadu': 'rameswaram',
    'andhrapradesh': 'mallikarjun',
    'jharkhand': 'baidyanath',
  };

  return clean;
}

/**
 * Extracts a compact duration slug like "7n-8d" from a duration string
 */
export function extractDurationSlug(durationStr) {
  if (!durationStr) return null;
  const match = durationStr.match(/(\d+)\s*N\s*[\/-]?\s*(\d+)\s*D/i);
  return match ? `${match[1]}n-${match[2]}d`.toLowerCase() : null;
}

/**
 * Extracts concise display text like "7N/8D"
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
 * Retrieve all packages for a destination / place
 */
export function getDestinationPackages(destination, subItinerary = '') {
  if (!destination) return [];
  const dest = String(destination).toLowerCase().trim().replace(/[^a-z0-9-]/g, '');
  const sub = String(subItinerary).toLowerCase().trim();

  // Handle legacy state routes e.g. /itinerary/uttarakhand/badrinath-4n-5d
  if (dest === 'uttarakhand') {
    if (sub.includes('adi') || sub.includes('kailash') || sub.includes('7n')) {
      return spiritualSiteConfig.itineraries?.['adi-kailash'] || [];
    }
    if (sub.includes('badrinath') || sub.includes('4n')) {
      return spiritualSiteConfig.itineraries?.['badrinath'] || [];
    }
    if (sub.includes('kainchi') || sub.includes('2n')) {
      return spiritualSiteConfig.itineraries?.['kainchi-dham'] || [];
    }
    if (sub.includes('char') || sub.includes('9n') || sub.includes('10d')) {
      return spiritualSiteConfig.itineraries?.['char-dham'] || [];
    }
    if (sub.includes('do') || sub.includes('5n')) {
      return spiritualSiteConfig.itineraries?.['do-dham'] || [];
    }
  }

  // Direct lookup
  return (
    spiritualSiteConfig.itineraries?.[dest] ||
    domesticSiteConfig.itineraries?.[dest] ||
    internationalSiteConfig.itineraries?.[dest] ||
    siteConfig.itineraries?.[dest] ||
    []
  );
}

/**
 * Robust package resolver by slug, duration, package id, or numeric index
 */
export function findPackageIndex(packages, destination, slugOrId) {
  if (!packages || packages.length === 0) return 0;
  if (!slugOrId) return 0;

  const raw = String(slugOrId).toLowerCase().trim();
  const clean = raw.replace(/[^a-z0-9]/g, ''); // e.g. "7n8d"

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

  // 3. Match on duration pattern (e.g. "7n-8d" or "7n8d")
  const durIdx = packages.findIndex((p) => {
    const pDurSlug = extractDurationSlug(p.duration);
    if (!pDurSlug) return false;
    return pDurSlug === raw || pDurSlug.replace(/[^a-z0-9]/g, '') === clean;
  });
  if (durIdx !== -1) return durIdx;

  // 4. Keyword fuzzy match
  const keywordIdx = packages.findIndex((p) => {
    const titleClean = (p.title || '').toLowerCase();
    const durClean = (p.duration || '').toLowerCase();
    return (
      (raw.length >= 3 && (titleClean.includes(raw) || durClean.includes(raw))) ||
      (clean.length >= 3 && (titleClean.replace(/[^a-z0-9]/g, '').includes(clean) || durClean.replace(/[^a-z0-9]/g, '').includes(clean)))
    );
  });
  if (keywordIdx !== -1) return keywordIdx;

  return 0;
}

// Canonical places catalog for site building
const canonicalSpiritualPlaces = [
  'adi-kailash',
  'badrinath',
  'do-dham',
  'char-dham',
  'kainchi-dham',
  'kashi',
  'ujjain',
  'maharashtra-jyotirling',
  'somnath-dwarka',
  'puri',
  'rameswaram',
  'pancha-bhoota',
  'madurai-rameshwaram',
  'mallikarjun',
  'tirupati',
  'khatu-shyam',
  'baidyanath',
];

/**
 * Returns complete itinerary and sub-itinerary routing catalog
 */
export function getItineraryCatalog() {
  const allDestinations = [
    ...Object.entries(domesticSiteConfig.itineraries || {}).map(([dest, pkgs]) => ({ dest, pkgs, category: 'Domestic', from: '/domestic' })),
    ...Object.entries(internationalSiteConfig.itineraries || {}).map(([dest, pkgs]) => ({ dest, pkgs, category: 'International', from: '/international' })),
    ...canonicalSpiritualPlaces
      .map(dest => ({ dest, pkgs: spiritualSiteConfig.itineraries?.[dest] || [], category: 'Spiritual', from: '/spiritualjourney' }))
      .filter(item => item.pkgs.length > 0),
  ];

  const catalog = [];

  allDestinations.forEach(({ dest, pkgs, category, from }) => {
    const displayName = destinationDisplayNames[dest] || (dest.charAt(0).toUpperCase() + dest.slice(1));
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
