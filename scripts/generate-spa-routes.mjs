import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const routes = [
  '/',
  '/locations', '/locations/delhi', '/locations/gurugram', '/locations/chandigarh',
  '/sports', '/sports/cricket', '/sports/football', '/sports/golf', '/sports/tennis', '/sports/kabaddi', '/sports/wrestling', '/sports/hockey',
  '/services', '/services/sports-physiotherapy', '/services/sports-injury-care', '/services/sports-rehabilitation', '/services/sports-taping', '/services/warm-up', '/services/recovery', '/services/geriatric-physiotherapy', '/services/online-physiotherapy-consultation',
  '/how-it-works', '/for-players', '/for-teams', '/resources', '/faq', '/about', '/contact', '/book', '/privacy-policy', '/terms',
];

const routeMeta = {
  '/': {
    title: 'ProActive Physio | Sports & Physiotherapy in Delhi, Gurugram & Chandigarh',
    description: 'ProActive Physio offers sports, geriatric and online physiotherapy services in Delhi, Gurugram and Chandigarh. Book your consultation today.',
  },
  '/services/sports-physiotherapy': {
    title: 'Sports Physiotherapy in Delhi, Gurugram & Chandigarh | ProActive Physio',
    description: 'Sports physiotherapy in Delhi, Gurugram and Chandigarh with assessment, treatment and rehabilitation support from ProActive Physio.',
  },
  '/services/geriatric-physiotherapy': {
    title: 'Geriatric Physiotherapy in Delhi, Gurugram & Chandigarh | ProActive Physio',
    description: 'Geriatric physiotherapy for older adults in Delhi, Gurugram and Chandigarh, focused on mobility, balance, strength and function.',
  },
  '/services/online-physiotherapy-consultation': {
    title: 'Online Physiotherapy Consultation | ProActive Physio',
    description: 'Online physiotherapy consultation for movement concerns, rehabilitation goals and exercise guidance when remote care is appropriate.',
  },
  '/contact': {
    title: 'Contact ProActive Physio | Physiotherapy Services',
    description: 'Contact ProActive Physio for sports, geriatric and online physiotherapy services in Delhi, Gurugram and Chandigarh.',
  },
  '/book': {
    title: 'Book a Physiotherapist | ProActive Physio',
    description: 'Book physiotherapy services in Delhi, Gurugram or Chandigarh, including sports, geriatric and online consultations.',
  },
  '/faq': {
    title: 'Physiotherapy FAQs | ProActive Physio',
    description: 'Find answers about sports physiotherapy, geriatric physiotherapy, online consultations, bookings and service areas.',
  },
};

const cityNames = { delhi: 'Delhi', gurugram: 'Gurugram', chandigarh: 'Chandigarh' };
const serviceNames = {
  'sports-physiotherapy': 'Sports Physiotherapy',
  'sports-injury-care': 'Sports Injury Physiotherapy',
  'sports-rehabilitation': 'Sports Rehabilitation',
  'sports-taping': 'Sports Taping',
  'warm-up': 'Warm-Up & Preparation',
  recovery: 'Recovery & Regeneration',
  'geriatric-physiotherapy': 'Geriatric Physiotherapy',
  'online-physiotherapy-consultation': 'Online Physiotherapy Consultation',
};
const sportNames = { cricket: 'Cricket', football: 'Football', golf: 'Golf', tennis: 'Tennis', kabaddi: 'Kabaddi', wrestling: 'Wrestling', hockey: 'Hockey' };

function humanize(slug) {
  return slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function metadataFor(route) {
  if (routeMeta[route]) return routeMeta[route];
  const cityMatch = route.match(/^\/locations\/(delhi|gurugram|chandigarh)$/);
  if (cityMatch) {
    const city = cityNames[cityMatch[1]];
    return {
      title: `Physiotherapy Services in ${city} | ProActive Physio`,
      description: `Explore physiotherapy services from ProActive Physio in ${city}, including sports, geriatric and online consultation options, subject to availability.`,
    };
  }
  const serviceMatch = route.match(/^\/services\/([^/]+)$/);
  if (serviceMatch && serviceNames[serviceMatch[1]]) {
    const name = serviceNames[serviceMatch[1]];
    return {
      title: `${name} | ProActive Physio`,
      description: `${name} from ProActive Physio with professional physiotherapy support in Delhi, Gurugram and Chandigarh.`,
    };
  }
  const sportMatch = route.match(/^\/sports\/([^/]+)$/);
  if (sportMatch && sportNames[sportMatch[1]]) {
    const sport = sportNames[sportMatch[1]];
    return {
      title: `${sport} Physiotherapy | ProActive Physio`,
      description: `Sport-specific physiotherapy guidance for ${sport.toLowerCase()} athletes from ProActive Physio in Delhi, Gurugram and Chandigarh.`,
    };
  }
  return {
    title: `ProActive Physio | ${humanize(route.slice(1) || 'Home')}`,
    description: 'ProActive Physio provides sports, geriatric and online physiotherapy services in Delhi, Gurugram and Chandigarh.',
  };
}

function applyMeta(html, route) {
  const meta = metadataFor(route);
  const canonical = `https://proactivephysio.in${route === '/' ? '/' : route.replace(/\/+$/, '') + '/'}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${meta.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${meta.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${meta.description}" />`)
    .replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${canonical}" />`);
}

const source = join(process.cwd(), 'dist', 'index.html');
for (const route of routes) {
  if (route === '/') continue;
  const destination = join(process.cwd(), 'dist', route.slice(1), 'index.html');
  mkdirSync(join(destination, '..'), { recursive: true });
  cpSync(source, destination);
  const html = applyMeta(readFileSync(destination, 'utf8'), route);
  writeFileSync(destination, html);
}
cpSync(source, join(process.cwd(), 'dist', '404.html'));
const notFound = join(process.cwd(), 'dist', '404.html');
writeFileSync(notFound, applyMeta(readFileSync(notFound, 'utf8'), '/404'));
console.log('Prepared ' + routes.length + ' canonical SPA routes plus a 404 fallback.');
