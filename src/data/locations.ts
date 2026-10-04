export const locations = [
  {
    slug: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    region: 'Delhi NCR',
    h1: 'Sports Physiotherapy in Gurugram',
    intro:
      'Access professional sports physiotherapy support across Gurugram, with services designed for athletes, players, coaches, academies and teams.',
    description:
      'Gurugram is home to a rapidly growing sports community, from cricket academies and football training grounds to golf courses and tennis clubs. ProActive Physio brings qualified sports physiotherapists directly to your training venue, ground or academy — whether you are in DLF City, Sushant Lok, Sohna Road, Golf Course Road or Sector 56. Our on-ground physiotherapy model means athletes in Gurugram can access professional injury care, taping, recovery and rehabilitation without travelling to a clinic.',
    sportsContext:
      'Cricket coaching academies, football training grounds, golf courses, tennis clubs, badminton halls and multi-sport complexes are well established across Gurugram. Many are concentrated around Golf Course Road, Sohna Road and the DLF phases, creating strong demand for on-ground sports physiotherapy.',
    areas: [
      'DLF City',
      'Sushant Lok',
      'Sohna Road',
      'Golf Course Road',
      'Sector 56',
      'Palam Vihar',
      'MG Road',
      'Cyber City',
    ],
    venues:
      'Training grounds, cricket nets, football fields, tennis courts, golf courses, sports academies and fitness centres across the city.',
    cta: 'Book a Specialized Physiotherapist in Gurugram',
    metaTitle: 'Sports Physiotherapy in Gurugram | ProActive Physio',
    metaDescription:
      'Find professional sports physiotherapy in Gurugram for athletes, players and teams. Book sports injury care, recovery, taping and rehabilitation with ProActive Physio.',
    image:
      'https://images.pexels.com/photos/34085834/pexels-photo-34085834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh UT',
    region: 'Tricity',
    h1: 'Sports Physiotherapy in Chandigarh',
    intro:
      'Professional sports physiotherapy support for players, athletes, coaches, academies and teams across Chandigarh.',
    description:
      'Chandigarh has a deep sporting culture, with strong traditions in cricket, hockey, football, golf and athletics. The city is home to numerous training grounds, sports complexes and coaching academies. ProActive Physio delivers qualified sports physiotherapists directly to your ground, court or training venue — from Sector 7 and Sector 42 sports complexes to golf club roads and university fields. Whether you are an individual athlete, a weekend player or a team manager, our on-ground physiotherapy service in Chandigarh brings professional care to where you train and compete.',
    sportsContext:
      'Chandigarh is known for its planned sports infrastructure, including Sector 42 sports complex, cricket grounds, hockey fields, tennis courts and golf courses. The city also has a strong wrestling and kabaddi culture, with akharas and training centres across the Tricity area.',
    areas: [
      'Sector 7',
      'Sector 42',
      'Sector 22',
      'Sector 17',
      'Golf Club Road',
      'Punjab University',
      'Mohali (Tricity)',
      'Panchkula (Tricity)',
    ],
    venues:
      'Sports complexes, cricket grounds, hockey fields, tennis courts, golf courses, wrestling akharas and multi-sport training centres across Chandigarh and the Tricity.',
    cta: 'Book a Specialized Physiotherapist in Chandigarh',
    metaTitle: 'Sports Physiotherapy in Chandigarh | ProActive Physio',
    metaDescription:
      'Access professional sports physiotherapy in Chandigarh for players, athletes, academies and teams. Book sports injury care, recovery and rehabilitation with ProActive Physio.',
    image:
      'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'rohini',
    name: 'Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    h1: 'Physiotherapy in Delhi',
    intro:
      'Get professional physiotherapy support close to your home, training ground, court, academy or sporting venue across Delhi.',
    description:
      'Delhi has a diverse and active community of athletes, older adults, families, academies and sports teams. ProActive Physio connects people across Delhi with qualified physiotherapists who can provide care at a suitable home, training venue or sporting environment. From sports injury assessment and rehabilitation to geriatric physiotherapy focused on mobility and independence, our service is designed around your needs and schedule.',
    sportsContext:
      'Across Delhi, people access physiotherapy for sports performance, injury recovery, mobility concerns and everyday functional independence. ProActive Physio supports individual athletes, teams, families and older adults with professional care delivered where it is most convenient and clinically appropriate.',
    areas: [
      'North Delhi',
      'North-West Delhi',
      'Central Delhi',
      'South Delhi',
      'West Delhi',
      'East Delhi',
      'Outer Delhi',
      'Delhi NCR',
    ],
    venues:
      'Homes, sports academies, training grounds, courts, fields, fitness centres and other suitable care environments across Delhi.',
    cta: 'Book a Physiotherapist in Delhi',
    metaTitle: 'Physiotherapy in Delhi | ProActive Physio',
    metaDescription:
      'Find professional physiotherapy in Delhi for sports injury care, rehabilitation, geriatric physiotherapy and online consultation with ProActive Physio.',
    image:
      'https://images.pexels.com/photos/29631854/pexels-photo-29631854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
] as const;

export type Location = (typeof locations)[number];
