export interface NavLink {
  label: string;
  href: string;
  dropdown?: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Sports', href: '/sports', dropdown: 'sports' },
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'Locations', href: '/locations', dropdown: 'locations' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Players', href: '/for-players' },
  { label: 'For Teams', href: '/for-teams' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Select Your Sport & Service',
    description:
      'Choose your sport, the service you need and your location. Whether you are a cricketer needing injury care or a footballer requiring rehabilitation, we match you with the right physiotherapist.',
    icon: 'ClipboardList',
  },
  {
    step: 2,
    title: 'Pick Your Date & Time',
    description:
      'Select a date and time that works for your training schedule. Our physiotherapists come to your ground, court, field or academy — no clinic visit required.',
    icon: 'Calendar',
  },
  {
    step: 3,
    title: 'Get Matched with a Physiotherapist',
    description:
      'We connect you with a qualified, vetted sports physiotherapist experienced in your sport and the type of support you need.',
    icon: 'UserCheck',
  },
  {
    step: 4,
    title: 'Receive On-Ground Physiotherapy',
    description:
      'Your physiotherapist arrives at your venue with everything needed for assessment, treatment and ongoing care. You receive professional physiotherapy where you train and compete.',
    icon: 'Activity',
  },
];

export const whoCanBook = [
  {
    title: 'Individual Athletes & Players',
    description:
      'Recreational and competitive athletes who need professional physiotherapy at their training venue, from injury care to rehabilitation.',
    icon: 'User',
  },
  {
    title: 'Coaches & Coaching Academies',
    description:
      'Coaches and academies who want professional physiotherapy support for their players, including screening, taping and injury management.',
    icon: 'Megaphone',
  },
  {
    title: 'Sports Clubs & Teams',
    description:
      'Clubs and teams that need match-day cover, training-session support and ongoing injury management across the season.',
    icon: 'Users',
  },
  {
    title: 'Tournament Organisers',
    description:
      'Tournament and event organisers who require on-site physiotherapy cover for participants across multiple matches or days.',
    icon: 'Trophy',
  },
];

export const trustPoints = [
  {
    title: 'Qualified Physiotherapists',
    description: 'Every physiotherapist is a registered, vetted professional with sports physiotherapy experience.',
    icon: 'ShieldCheck',
  },
  {
    title: 'On-Ground Delivery',
    description: 'Physiotherapy delivered at your venue — no clinic visits, no travel, no disruption to training.',
    icon: 'MapPin',
  },
  {
    title: 'Sport-Specific Expertise',
    description: 'Physiotherapists who understand the demands of your sport, your position and your training load.',
    icon: 'Target',
  },
  {
    title: 'Structured Care Plans',
    description: 'Clear diagnosis, phased treatment plans and criteria-based return-to-sport progression.',
    icon: 'ClipboardCheck',
  },
];
