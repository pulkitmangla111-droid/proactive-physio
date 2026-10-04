export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFaqs: FAQItem[] = [
  {
    question: 'What is ProActive Physio?',
    answer:
      'ProActive Physio is a sports physiotherapy service that connects athletes, players, coaches, academies, clubs and sports teams with qualified physiotherapists who provide professional sports physiotherapy directly at sports grounds, courts, fields, academies and training venues.',
  },
  {
    question: 'Where does ProActive Physio currently operate?',
    answer:
      'ProActive Physio currently operates in Delhi, Gurugram (Haryana) and Chandigarh. We are structured to expand to additional cities over time. We do not currently operate outside these service areas.',
  },
  {
    question: 'Do I need to visit a clinic for treatment?',
    answer:
      'No. ProActive Physio delivers physiotherapy at your sporting venue — your ground, court, field, academy or training location. Our physiotherapists come to where you train and compete.',
  },
  {
    question: 'Who can book a sports physiotherapist?',
    answer:
      'Individual athletes, players, coaches, sports academies, clubs and teams can book a sports physiotherapist through ProActive Physio. We work with players across cricket, football, golf, tennis, kabaddi, wrestling, hockey and other sports.',
  },
  {
    question: 'What services does ProActive Physio provide?',
    answer:
      'We provide sports physiotherapy, sports injury care, sports rehabilitation, sports taping, warm-up and preparation support, recovery and regeneration, geriatric physiotherapy and online physiotherapy consultations when remote care is clinically appropriate.',
  },
  {
    question: 'How do I book a sports physiotherapist?',
    answer:
      'You can book through the search and booking component on our website. Select your sport, service, location, preferred date and time, and we will connect you with a qualified physiotherapist for your area.',
  },
  {
    question: 'Are the physiotherapists qualified?',
    answer:
      'Yes. ProActive Physio connects you with qualified physiotherapists who are registered professionals. Each physiotherapist is vetted for their qualifications and experience in sports physiotherapy.',
  },
  {
    question: 'Can ProActive Physio support my entire team?',
    answer:
      'Yes. Teams, clubs and academies can book physiotherapy support for their players. This includes match-day cover, training-session support, injury screening and ongoing rehabilitation management.',
  },
];

export const gurugramFaqs: FAQItem[] = [
  {
    question: 'Do you provide sports physiotherapy across all of Gurugram?',
    answer:
      'Yes. ProActive Physio provides on-ground sports physiotherapy across Gurugram, including DLF City, Sushant Lok, Sohna Road, Golf Course Road, Palam Vihar and surrounding areas. Our physiotherapists come to your training venue, academy or ground.',
  },
  {
    question: 'What sports do you support in Gurugram?',
    answer:
      'We support cricket, football, golf, tennis, kabaddi, wrestling, hockey and other sports across Gurugram. Our physiotherapists understand the specific demands of each sport and provide sport-specific assessment, treatment and rehabilitation.',
  },
  {
    question: 'Can academies in Gurugram book physiotherapy for their players?',
    answer:
      'Yes. Sports academies in Gurugram can book ongoing physiotherapy support for their players, including training-session cover, injury screening, taping and rehabilitation management.',
  },
  {
    question: 'How quickly can a physiotherapist come to my venue in Gurugram?',
    answer:
      'Availability depends on your location, date and time preference. Use the booking component to select your preferred date and time, and we will connect you with a physiotherapist available for your area.',
  },
];

export const chandigarhFaqs: FAQItem[] = [
  {
    question: 'Do you provide sports physiotherapy across all of Chandigarh?',
    answer:
      'Yes. ProActive Physio provides on-ground sports physiotherapy across Chandigarh, including Sector 7, Sector 42, Sector 22, Golf Club Road, Punjab University and surrounding areas. We also cover Mohali and Panchkula as part of the Tricity.',
  },
  {
    question: 'What sports do you support in Chandigarh?',
    answer:
      'We support cricket, hockey, football, golf, tennis, kabaddi, wrestling and other sports across Chandigarh. The city has a strong sporting culture, and our physiotherapists are experienced in the demands of these sports.',
  },
  {
    question: 'Can teams in Chandigarh book match-day physiotherapy cover?',
    answer:
      'Yes. Teams and clubs in Chandigarh can book match-day physiotherapy cover, training-session support and ongoing injury management for their players.',
  },
  {
    question: 'Do you cover Mohali and Panchkula?',
    answer:
      'Yes. As part of the Tricity, we provide on-ground sports physiotherapy in Mohali and Panchkula as well as Chandigarh proper.',
  },
];

export const delhiFaqs: FAQItem[] = [
  {
    question: 'Do you provide physiotherapy across Delhi?',
    answer:
      'Yes. ProActive Physio provides physiotherapy support across Delhi, including suitable homes, training venues, academies and sporting environments. Availability depends on the requested service, location and schedule.',
  },
  {
    question: 'What physiotherapy services do you support in Delhi?',
    answer:
      'We support sports physiotherapy, sports injury care, rehabilitation, geriatric physiotherapy and online physiotherapy consultations in Delhi. Our physiotherapists tailor care to the person, their goals and the setting.',
  },
  {
    question: 'Can families and academies in Delhi book physiotherapy support?',
    answer:
      'Yes. Families, individual athletes, coaching academies and teams in Delhi can request physiotherapy support, including rehabilitation guidance, mobility support and suitable on-site care.',
  },
  {
    question: 'Can individual clients in Delhi book a physiotherapist?',
    answer:
      'Yes. Individual clients in Delhi can request one-to-one physiotherapy, including sports physiotherapy, geriatric physiotherapy or an online consultation when remote care is clinically appropriate.',
  },
];

export const locationFaqs: Record<string, FAQItem[]> = {
  gurugram: gurugramFaqs,
  chandigarh: chandigarhFaqs,
  rohini: rohiniFaqs,
};
