import { cpSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const routes = [
  '/',
  '/locations', '/locations/delhi', '/locations/gurugram', '/locations/chandigarh',
  '/sports', '/sports/cricket', '/sports/football', '/sports/golf', '/sports/tennis', '/sports/kabaddi', '/sports/wrestling', '/sports/hockey',
  '/services', '/services/sports-physiotherapy', '/services/sports-injury-care', '/services/sports-rehabilitation', '/services/sports-taping', '/services/warm-up', '/services/recovery', '/services/geriatric-physiotherapy', '/services/online-physiotherapy-consultation',
  '/how-it-works', '/for-players', '/for-teams', '/resources', '/faq', '/about', '/contact', '/book', '/privacy-policy', '/terms',
];

const source = join(process.cwd(), 'dist', 'index.html');
for (const route of routes) {
  if (route === '/') continue;
  const destination = join(process.cwd(), 'dist', route.slice(1), 'index.html');
  mkdirSync(join(destination, '..'), { recursive: true });
  cpSync(source, destination);
}
cpSync(source, join(process.cwd(), 'dist', '404.html'));
console.log('Prepared ' + routes.length + ' canonical SPA routes plus a 404 fallback.');
