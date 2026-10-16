import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getItineraryCatalog,
  getDestinationPackages,
  getPackageSlug,
  extractDurationShort,
  CANONICAL_BASE
} from '../src/data/itineraryRegistry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const catalog = getItineraryCatalog();
const baseDir = path.join(projectRoot, 'public', 'api', 'itineraries');
fs.mkdirSync(baseDir, { recursive: true });

// 1. Master index
const overallIndex = {
  version: '1.0',
  generatedAt: new Date().toISOString(),
  baseDomain: CANONICAL_BASE,
  totalDestinations: catalog.length,
  totalSubItineraries: catalog.reduce((acc, c) => acc + c.subRoutes.length, 0),
  destinations: catalog.map(c => ({
    destination: c.destination,
    displayName: c.displayName,
    category: c.category,
    region: c.region,
    path: c.path,
    canonicalUrl: c.canonicalUrl,
    packagesCount: c.packagesCount,
    apiEndpoint: `/api/itineraries/${c.destination}.json`,
    subItineraries: c.subRoutes.map(s => ({
      slug: s.slug,
      duration: s.duration,
      durationShort: s.durationShort,
      packageTitle: s.packageTitle,
      path: s.path,
      canonicalUrl: s.canonicalUrl,
      apiEndpoint: `/api/itineraries/${c.destination}/${s.slug}.json`,
    }))
  }))
};

fs.writeFileSync(path.join(baseDir, 'index.json'), JSON.stringify(overallIndex, null, 2));
fs.writeFileSync(path.join(projectRoot, 'public', 'api', 'itineraries.json'), JSON.stringify(overallIndex, null, 2));

// 2. Per-destination and individual sub-itinerary package endpoints
let totalSub = 0;
catalog.forEach(dest => {
  const destDir = path.join(baseDir, dest.destination);
  fs.mkdirSync(destDir, { recursive: true });

  const rawPkgs = getDestinationPackages(dest.destination);

  const fullPackages = rawPkgs.map((pkg, idx) => {
    const slug = getPackageSlug(pkg, dest.destination, idx);
    const durShort = extractDurationShort(pkg.duration);
    return {
      destination: dest.destination,
      destinationDisplayName: dest.displayName,
      category: dest.category,
      region: dest.region,
      packageId: pkg.id,
      packageTitle: pkg.title,
      duration: pkg.duration,
      durationShort: durShort,
      slug: slug,
      pagePath: `/itinerary/${dest.destination}/${slug}`,
      canonicalUrl: `${CANONICAL_BASE}/itinerary/${dest.destination}/${slug}`,
      apiEndpoint: `/api/itineraries/${dest.destination}/${slug}.json`,
      image: dest.image,
      inclusions: pkg.inclusions || [],
      days: pkg.days || [],
      whatsappUrl: `https://wa.me/918591262424?text=${encodeURIComponent(`I would like to enquire about ${dest.displayName} ${pkg.duration || ''} package`)}`
    };
  });

  // Destination JSON endpoint
  fs.writeFileSync(path.join(baseDir, `${dest.destination}.json`), JSON.stringify({
    destination: dest.destination,
    displayName: dest.displayName,
    category: dest.category,
    region: dest.region,
    pagePath: dest.path,
    canonicalUrl: dest.canonicalUrl,
    packagesCount: fullPackages.length,
    packages: fullPackages
  }, null, 2));

  // Individual Sub-Itinerary JSON endpoints
  fullPackages.forEach(sub => {
    totalSub++;
    fs.writeFileSync(path.join(destDir, `${sub.slug}.json`), JSON.stringify(sub, null, 2));
  });
});

// 3. Generate comprehensive XML Sitemap with all destinations and sub-itineraries
const currentDate = '2026-10-16';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

function addUrlEntry(loc, priority = '0.8', changefreq = 'weekly') {
  xml += '  <url>\n';
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>${currentDate}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '  <!-- Core Static Landing Pages -->\n';
addUrlEntry(`${CANONICAL_BASE}/`, '1.0');
addUrlEntry(`${CANONICAL_BASE}/domestic`, '0.9');
addUrlEntry(`${CANONICAL_BASE}/international`, '0.9');
addUrlEntry(`${CANONICAL_BASE}/spiritualjourney`, '0.9');
addUrlEntry(`${CANONICAL_BASE}/experiences`, '0.8', 'monthly');
addUrlEntry(`${CANONICAL_BASE}/about`, '0.7', 'monthly');
addUrlEntry(`${CANONICAL_BASE}/contact`, '0.8', 'monthly');
addUrlEntry(`${CANONICAL_BASE}/thank-you`, '0.6', 'monthly');

// Add preview route
addUrlEntry(`${CANONICAL_BASE}/itinerary/kerala`, '0.7', 'monthly');

const catOrder = ['Domestic', 'International', 'Spiritual'];
catOrder.forEach(category => {
  const dests = catalog.filter(c => c.category === category);

  xml += `\n  <!-- ${category} Main Destination Itineraries -->\n`;
  dests.forEach(d => {
    addUrlEntry(d.canonicalUrl, '0.85');
  });

  xml += `\n  <!-- ${category} Sub-Itineraries (Circuits & Durations) -->\n`;
  dests.forEach(d => {
    d.subRoutes.forEach(s => {
      addUrlEntry(s.canonicalUrl, '0.8');
    });
  });
});

xml += '</urlset>\n';

fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap.xml'), xml);

// 4. Update PRODUCTION_ROUTES_AND_ENDPOINTS.md & SEO_ROUTES_AND_ENDPOINTS.md
let doc = '# Production Routes and Endpoints\n\n';
doc += `**Base Domain:** \`${CANONICAL_BASE}\`\n\n`;
doc += '---\n\n';
doc += '## 1. Primary Page Routes\n\n';
doc += '| Route Path | Full Canonical Production URL | HTTP Method | Type |\n';
doc += '| :--- | :--- | :---: | :--- |\n';
doc += `| \`/\` | \`${CANONICAL_BASE}/\` | GET | Page |\n`;
doc += `| \`/domestic\` | \`${CANONICAL_BASE}/domestic\` | GET | Page |\n`;
doc += `| \`/international\` | \`${CANONICAL_BASE}/international\` | GET | Page |\n`;
doc += `| \`/spiritualjourney\` | \`${CANONICAL_BASE}/spiritualjourney\` | GET | Page |\n`;
doc += `| \`/experiences\` | \`${CANONICAL_BASE}/experiences\` | GET | Page |\n`;
doc += `| \`/about\` | \`${CANONICAL_BASE}/about\` | GET | Page |\n`;
doc += `| \`/contact\` | \`${CANONICAL_BASE}/contact\` | GET | Page |\n`;
doc += `| \`/thank-you\` | \`${CANONICAL_BASE}/thank-you\` | GET | Conversion Page |\n\n`;
doc += '---\n\n';

doc += '## 2. Destination Primary Itinerary Routes\n\n';

catOrder.forEach(cat => {
  doc += `### ${cat} Routes\n`;
  doc += '| Route Path | Full Production URL | HTTP Method | Circuits | Type |\n';
  doc += '| :--- | :--- | :---: | :---: | :--- |\n';
  const dests = catalog.filter(c => c.category === cat);
  dests.forEach(d => {
    doc += `| \`${d.path}\` | \`${d.canonicalUrl}\` | GET | ${d.packagesCount} circuits | Dynamic Route |\n`;
  });
  doc += '\n';
});

doc += '### Preview Route\n';
doc += '| Route Path | Full Production URL | HTTP Method | Type |\n';
doc += '| :--- | :--- | :---: | :--- |\n';
doc += `| \`/itinerary/kerala\` | \`${CANONICAL_BASE}/itinerary/kerala\` | GET | Preview Route |\n\n`;
doc += '---\n\n';

doc += '## 3. Dedicated Sub-Itinerary Endpoints (Circuits & Durations)\n\n';

catOrder.forEach(cat => {
  doc += `### ${cat} Sub-Itineraries\n\n`;
  doc += '| Destination | Circuit / Duration | Sub-Itinerary Path | Full Canonical URL | Days | API JSON Endpoint |\n';
  doc += '| :--- | :--- | :--- | :--- | :---: | :--- |\n';
  const dests = catalog.filter(c => c.category === cat);
  dests.forEach(d => {
    d.subRoutes.forEach(s => {
      doc += `| ${d.displayName} | **${s.durationShort}** (${s.duration}) | \`${s.path}\` | \`${s.canonicalUrl}\` | ${s.daysCount} Days | \`/api/itineraries/${d.destination}/${s.slug}.json\` |\n`;
    });
  });
  doc += '\n';
});

doc += '---\n\n';

doc += '## 4. Static JSON API Endpoints\n\n';
doc += '| Endpoint Path | Full Production API URL | HTTP Method | Description |\n';
doc += '| :--- | :--- | :---: | :--- |\n';
doc += `| \`/api/itineraries.json\` | \`${CANONICAL_BASE}/api/itineraries.json\` | GET | Master catalog of all destinations and sub-itineraries |\n`;
doc += `| \`/api/itineraries/index.json\` | \`${CANONICAL_BASE}/api/itineraries/index.json\` | GET | Master catalog index |\n`;

catalog.forEach(d => {
  doc += `| \`/api/itineraries/${d.destination}.json\` | \`${CANONICAL_BASE}/api/itineraries/${d.destination}.json\` | GET | All packages for ${d.displayName} |\n`;
});

doc += `\n> **Note:** Every sub-itinerary also has an individual JSON endpoint, e.g. \`${CANONICAL_BASE}/api/itineraries/kashmir/4n-5d.json\`.\n\n`;

doc += '---\n\n';

doc += '## 5. Alias & Redirect Routes\n\n';
doc += '| Incoming Route | Action / Destination Route | HTTP Status |\n';
doc += '| :--- | :--- | :---: |\n';
doc += '| `/enquiry` | Serves Contact Page (`/contact`) | 200 OK |\n';
doc += '| `/enquire` | Serves Contact Page (`/contact`) | 200 OK |\n';
doc += '| `/thankyou` | Redirects to `/thank-you` | 301 Redirect |\n';
doc += '| `/itinerary` | Redirects to `/domestic` | 301 Redirect |\n';
doc += '| `/itenary` | Redirects to `/domestic` | 301 Redirect |\n';
doc += '| `/itineraries` | Redirects to `/domestic` | 301 Redirect |\n';
doc += '| `/itenary/:destination` | Resolves to `/itinerary/:destination` | 200 OK |\n';
doc += '| `/itenary/:destination/:subItinerary` | Resolves to `/itinerary/:destination/:subItinerary` | 200 OK |\n\n';

doc += '---\n\n';

doc += '## 6. In-Page Section Anchor Routes\n\n';
doc += '| Anchor Route | Target Section |\n';
doc += '| :--- | :--- |\n';
doc += `| \`${CANONICAL_BASE}/domestic#north-india\` | North India circuits |\n`;
doc += `| \`${CANONICAL_BASE}/domestic#northeast-india\` | Northeast India circuits |\n`;
doc += `| \`${CANONICAL_BASE}/domestic#west-india\` | West India circuits |\n`;
doc += `| \`${CANONICAL_BASE}/domestic#south-india\` | South India circuits |\n`;
doc += `| \`${CANONICAL_BASE}/international#southeast-asia\` | Southeast Asia circuits |\n`;
doc += `| \`${CANONICAL_BASE}/international#east-&-south-asia\` | East & South Asia circuits |\n`;
doc += `| \`${CANONICAL_BASE}/international#cis-countries\` | CIS Countries circuits |\n`;
doc += `| \`${CANONICAL_BASE}/spiritualjourney#north\` | North India Pilgrimages |\n`;
doc += `| \`${CANONICAL_BASE}/spiritualjourney#south\` | South India Pilgrimages |\n`;
doc += `| \`${CANONICAL_BASE}/spiritualjourney#east\` | East India Pilgrimages |\n`;
doc += `| \`${CANONICAL_BASE}/spiritualjourney#west\` | West India Pilgrimages |\n\n`;

doc += '---\n\n';

doc += '## 7. API & External Service Endpoints\n\n';
doc += '| Endpoint URL | HTTP Method | Purpose |\n';
doc += '| :--- | :---: | :--- |\n';
doc += '| `https://formsubmit.co/ajax/info@yugatirtha.com` | POST | Primary enquiry and lead form submission |\n';
doc += '| `https://api.web3forms.com/submit` | POST | Fallback enquiry and lead form submission |\n';
doc += '| `https://wa.me/918591262424` | GET | WhatsApp direct booking and enquiry endpoint |\n\n';

doc += '---\n\n';

doc += '## 8. Static & Crawler Endpoints\n\n';
doc += '| Endpoint URL | HTTP Method | Content Type |\n';
doc += '| :--- | :---: | :--- |\n';
doc += `| \`${CANONICAL_BASE}/sitemap.xml\` | GET | XML Sitemap (\`text/xml\`) - Includes all 57 sub-itineraries & thank-you page |\n`;
doc += `| \`${CANONICAL_BASE}/robots.txt\` | GET | Crawler Directives (\`text/plain\`) |\n`;

fs.writeFileSync(path.join(projectRoot, 'PRODUCTION_ROUTES_AND_ENDPOINTS.md'), doc);
fs.writeFileSync(path.join(projectRoot, 'SEO_ROUTES_AND_ENDPOINTS.md'), doc);

// 5. Update production_routes_and_endpoints.txt
let txt = '# ==============================================================================\n';
txt += `# PRODUCTION ROUTES & ENDPOINTS — ${CANONICAL_BASE}\n`;
txt += '# ==============================================================================\n\n';
txt += '# --- Primary Page Routes (GET) ---\n';
txt += `${CANONICAL_BASE}/\n`;
txt += `${CANONICAL_BASE}/domestic\n`;
txt += `${CANONICAL_BASE}/international\n`;
txt += `${CANONICAL_BASE}/spiritualjourney\n`;
txt += `${CANONICAL_BASE}/experiences\n`;
txt += `${CANONICAL_BASE}/about\n`;
txt += `${CANONICAL_BASE}/contact\n`;
txt += `${CANONICAL_BASE}/thank-you\n\n`;

catOrder.forEach(cat => {
  txt += `# --- ${cat} Destination Primary Routes (GET) ---\n`;
  const dests = catalog.filter(c => c.category === cat);
  dests.forEach(d => {
    txt += `${d.canonicalUrl}\n`;
  });
  txt += '\n';

  txt += `# --- ${cat} Sub-Itinerary Endpoints (GET) ---\n`;
  dests.forEach(d => {
    d.subRoutes.forEach(s => {
      txt += `${s.canonicalUrl} # ${s.duration}\n`;
    });
  });
  txt += '\n';
});

txt += '# --- Preview Destination Routes (GET) ---\n';
txt += `${CANONICAL_BASE}/itinerary/kerala\n\n`;

txt += '# --- Static JSON API Endpoints (GET) ---\n';
txt += `${CANONICAL_BASE}/api/itineraries.json\n`;
txt += `${CANONICAL_BASE}/api/itineraries/index.json\n`;
catalog.forEach(d => {
  txt += `${CANONICAL_BASE}/api/itineraries/${d.destination}.json\n`;
});
txt += '\n';

txt += '# --- Redirect & Alias Routes ---\n';
txt += '/enquiry -> /contact (200 OK)\n';
txt += '/enquire -> /contact (200 OK)\n';
txt += '/thankyou -> /thank-you (301 Redirect)\n';
txt += '/itinerary -> /domestic (301 Redirect)\n';
txt += '/itenary -> /domestic (301 Redirect)\n';
txt += '/itineraries -> /domestic (301 Redirect)\n';
txt += '/itenary/* -> /itinerary/* (200 OK)\n\n';

txt += '# --- Section Deep-Link Anchors ---\n';
txt += `${CANONICAL_BASE}/domestic#north-india\n`;
txt += `${CANONICAL_BASE}/domestic#northeast-india\n`;
txt += `${CANONICAL_BASE}/domestic#west-india\n`;
txt += `${CANONICAL_BASE}/domestic#south-india\n`;
txt += `${CANONICAL_BASE}/international#southeast-asia\n`;
txt += `${CANONICAL_BASE}/international#east-&-south-asia\n`;
txt += `${CANONICAL_BASE}/international#cis-countries\n`;
txt += `${CANONICAL_BASE}/spiritualjourney#north\n`;
txt += `${CANONICAL_BASE}/spiritualjourney#south\n`;
txt += `${CANONICAL_BASE}/spiritualjourney#east\n`;
txt += `${CANONICAL_BASE}/spiritualjourney#west\n\n`;

txt += '# --- API & External Transactional Endpoints ---\n';
txt += 'POST https://formsubmit.co/ajax/info@yugatirtha.com\n';
txt += 'POST https://api.web3forms.com/submit\n';
txt += 'GET  https://wa.me/918591262424\n\n';

txt += '# --- Static / SEO Endpoints ---\n';
txt += `GET ${CANONICAL_BASE}/sitemap.xml\n`;
txt += `GET ${CANONICAL_BASE}/robots.txt\n`;

fs.writeFileSync(path.join(projectRoot, 'production_routes_and_endpoints.txt'), txt);

console.log(`Successfully generated JSON API endpoints for ${catalog.length} destinations and ${totalSub} sub-itineraries.`);
console.log(`Successfully updated public/sitemap.xml with all destinations, sub-itinerary URLs, and /thank-you endpoint.`);
console.log(`Successfully updated PRODUCTION_ROUTES_AND_ENDPOINTS.md, SEO_ROUTES_AND_ENDPOINTS.md, and production_routes_and_endpoints.txt.`);
