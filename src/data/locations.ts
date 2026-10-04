export interface LocationConfig {
  slug: string;
  name: string;
  state: string;
  region: string;
  h1: string;
  intro: string;
  description: string;
  sportsContext: string;
  proposedAreas: string[];
  confirmedAreas: string[];
  venues: string;
  cta: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  publicationStatus: 'published' | 'draft';
}

export const locations: LocationConfig[] = [
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh UT',
    region: 'Tricity',
    h1: 'Sports Physiotherapy in Chandigarh',
    intro: 'Professional sports physiotherapy support for players, athletes, coaches, academies and teams in Chandigarh, subject to appointment and service availability.',
    description: 'ProActive Physio connects athletes and active individuals in Chandigarh with physiotherapy support for sports injury assessment, rehabilitation, recovery and injury-prevention planning. Care can be arranged at a suitable training venue or other agreed setting, depending on the service and therapist availability.',
    sportsContext: 'Support can be relevant for cricket, football, golf, tennis, kabaddi, wrestling, hockey and other sports. The service is designed around the athlete’s activity, goals and training environment rather than a fixed clinic address.',
    proposedAreas: ['Chandigarh', 'Sector 17', 'Sector 22', 'Sector 34', 'Sector 35', 'Sector 43', 'Mohali', 'Panchkula', 'Zirakpur'],
    confirmedAreas: [],
    venues: 'Suitable sports grounds, courts, academies, training venues, homes or other agreed care environments, subject to availability.',
    cta: 'Enquire About Physiotherapy in Chandigarh',
    metaTitle: 'Sports Physiotherapy in Chandigarh | ProActive Physio',
    metaDescription: 'Explore sports physiotherapy and rehabilitation services in Chandigarh with ProActive Physio. Check service availability and enquire about an appointment.',
    image: 'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&h=480&w=640',
    publicationStatus: 'published',
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    region: 'Delhi NCR',
    h1: 'Sports Physiotherapy in Gurugram',
    intro: 'Professional sports physiotherapy support for athletes, players, coaches, academies and teams in Gurugram, subject to appointment and service availability.',
    description: 'ProActive Physio connects people in Gurugram with physiotherapy support for sports injury rehabilitation, recovery, movement assessment and injury-prevention planning. Care can be arranged at a suitable training venue or other agreed setting, depending on the service and therapist availability.',
    sportsContext: 'Support can be relevant for cricket, football, golf, tennis, kabaddi, wrestling, hockey and other sports. The approach is built around the individual or team’s activity, goals and training environment.',
    proposedAreas: ['Gurugram', 'Golf Course Road', 'Golf Course Extension Road', 'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5', 'Sohna Road', 'Cyber City', 'Sector 56', 'Sector 57', 'Sector 65', 'Sector 67'],
    confirmedAreas: [],
    venues: 'Suitable sports grounds, courts, academies, training venues, homes or other agreed care environments, subject to availability.',
    cta: 'Enquire About Physiotherapy in Gurugram',
    metaTitle: 'Sports Physiotherapy in Gurugram | ProActive Physio',
    metaDescription: 'Looking for sports physiotherapy in Gurugram? Explore available rehabilitation services from ProActive Physio and enquire about an appointment.',
    image: 'https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&h=480&w=640',
    publicationStatus: 'published',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    h1: 'Sports Physiotherapy in Delhi',
    intro: 'Professional sports physiotherapy and rehabilitation support in Delhi, subject to appointment and service availability.',
    description: 'ProActive Physio connects athletes, players and active individuals in Delhi with physiotherapy support for sports injury rehabilitation, recovery, mobility and functional movement assessment. Geriatric physiotherapy and online consultation are also available where clinically appropriate.',
    sportsContext: 'Support can be relevant for cricket, football, golf, tennis, kabaddi, wrestling, hockey and other sports. Appointment location and service availability are confirmed for each request rather than assumed from a locality list.',
    proposedAreas: ['Delhi', 'South Delhi', 'Saket', 'Vasant Kunj', 'Dwarka', 'Janakpuri', 'Punjabi Bagh', 'Rajouri Garden', 'Rohini', 'Pitampura', 'Lajpat Nagar', 'Greater Kailash', 'Defence Colony', 'Connaught Place'],
    confirmedAreas: [],
    venues: 'Suitable sports grounds, courts, academies, training venues, homes or other agreed care environments, subject to availability.',
    cta: 'Enquire About Physiotherapy in Delhi',
    metaTitle: 'Sports Physiotherapy in Delhi | ProActive Physio',
    metaDescription: 'Explore sports physiotherapy and rehabilitation services in Delhi with ProActive Physio. Check available service areas and request an appointment.',
    image: 'https://images.pexels.com/photos/29631854/pexels-photo-29631854.jpeg?auto=compress&cs=tinysrgb&h=480&w=640',
    publicationStatus: 'published',
  },
];

export const publishedLocations = locations.filter((location) => location.publicationStatus === 'published');

export const locationAreaOptions: Record<string, string[]> = Object.fromEntries(
  publishedLocations.map((location) => [location.slug, location.proposedAreas])
);
