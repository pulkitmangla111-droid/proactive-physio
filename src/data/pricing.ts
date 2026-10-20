export type PricingCity = 'delhi' | 'gurugram' | 'chandigarh';
export type PricingCategory = 'Sports Physiotherapy' | 'Geriatric Physiotherapy' | 'Online Consultation' | 'Post-operative Rehabilitation' | 'Pain & Mobility' | 'Home Physiotherapy';

export interface PricedService {
  id: string;
  name: string;
  category: PricingCategory;
  duration: number;
  prices: Record<PricingCity, number>;
  summary: string;
  includes: string[];
  mode: 'Home visit' | 'Online' | 'Venue visit' | 'Assessment';
  serviceSlug?: string;
}

export const pricingCities: { slug: PricingCity; name: string }[] = [
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'gurugram', name: 'Gurugram' },
  { slug: 'chandigarh', name: 'Chandigarh' },
];

export const pricingCategories: PricingCategory[] = [
  'Sports Physiotherapy',
  'Geriatric Physiotherapy',
  'Online Consultation',
  'Post-operative Rehabilitation',
  'Pain & Mobility',
  'Home Physiotherapy',
];

// Indicative starting prices in INR. Final quote depends on assessment, travel, and confirmed availability.
export const pricedServices: PricedService[] = [
  { id: 'sports-assessment', name: 'Sports Injury Assessment', category: 'Sports Physiotherapy', duration: 60, prices: { delhi: 1500, gurugram: 1700, chandigarh: 1400 }, summary: 'A focused assessment of your injury, movement and return-to-sport goals.', includes: ['Movement and injury history review', 'Functional assessment', 'Initial care and recovery plan'], mode: 'Assessment', serviceSlug: 'sports-physiotherapy' },
  { id: 'sports-session', name: 'Sports Physiotherapy Session', category: 'Sports Physiotherapy', duration: 60, prices: { delhi: 1400, gurugram: 1600, chandigarh: 1300 }, summary: 'Individual care for sports-related pain, recovery and performance support.', includes: ['Individual treatment session', 'Exercise guidance', 'Progress notes and next steps'], mode: 'Venue visit', serviceSlug: 'sports-physiotherapy' },
  { id: 'return-to-sport', name: 'Return-to-Sport Rehabilitation', category: 'Sports Physiotherapy', duration: 60, prices: { delhi: 1600, gurugram: 1800, chandigarh: 1500 }, summary: 'Progressive rehabilitation to help rebuild sport-specific function.', includes: ['Goal-based exercise progression', 'Strength and movement checks', 'Return-to-training guidance'], mode: 'Venue visit', serviceSlug: 'sports-physiotherapy' },
  { id: 'geriatric-assessment', name: 'Geriatric Physiotherapy Assessment', category: 'Geriatric Physiotherapy', duration: 60, prices: { delhi: 1600, gurugram: 1800, chandigarh: 1500 }, summary: 'An assessment focused on everyday mobility, balance and independence.', includes: ['Mobility and balance screening', 'Functional goals discussion', 'Personalised home exercise plan'], mode: 'Home visit', serviceSlug: 'geriatric-physiotherapy' },
  { id: 'geriatric-session', name: 'Geriatric Home Session', category: 'Geriatric Physiotherapy', duration: 45, prices: { delhi: 1400, gurugram: 1600, chandigarh: 1300 }, summary: 'One-to-one support for strength, balance, mobility and daily activities.', includes: ['Guided therapeutic exercises', 'Mobility and balance practice', 'Caregiver guidance where appropriate'], mode: 'Home visit', serviceSlug: 'geriatric-physiotherapy' },
  { id: 'online-consult', name: 'Online Physiotherapy Consultation', category: 'Online Consultation', duration: 40, prices: { delhi: 900, gurugram: 1000, chandigarh: 900 }, summary: 'Remote guidance for suitable concerns, exercise review and follow-up.', includes: ['Video consultation', 'Exercise and self-management guidance', 'Follow-up recommendations'], mode: 'Online', serviceSlug: 'online-physiotherapy-consultation' },
  { id: 'online-followup', name: 'Online Follow-up Consultation', category: 'Online Consultation', duration: 25, prices: { delhi: 600, gurugram: 700, chandigarh: 600 }, summary: 'A shorter remote review of progress and your current exercise plan.', includes: ['Progress review', 'Exercise adjustments', 'Next-step guidance'], mode: 'Online', serviceSlug: 'online-physiotherapy-consultation' },
  { id: 'post-op-assessment', name: 'Post-operative Rehabilitation Assessment', category: 'Post-operative Rehabilitation', duration: 60, prices: { delhi: 1700, gurugram: 1900, chandigarh: 1600 }, summary: 'A careful starting assessment aligned with your surgery and clinician guidance.', includes: ['Current mobility review', 'Goal and precautions discussion', 'Phased rehabilitation plan'], mode: 'Assessment' },
  { id: 'post-op-session', name: 'Post-operative Rehab Session', category: 'Post-operative Rehabilitation', duration: 45, prices: { delhi: 1500, gurugram: 1700, chandigarh: 1400 }, summary: 'Individual rehabilitation support following surgery, subject to clinical suitability.', includes: ['Guided rehabilitation exercises', 'Mobility and function practice', 'Progress review'], mode: 'Home visit' },
  { id: 'pain-assessment', name: 'Pain & Mobility Assessment', category: 'Pain & Mobility', duration: 60, prices: { delhi: 1500, gurugram: 1700, chandigarh: 1400 }, summary: 'An assessment for movement-related pain, stiffness or reduced function.', includes: ['History and movement review', 'Functional assessment', 'Personalised management plan'], mode: 'Assessment' },
  { id: 'pain-session', name: 'Pain & Mobility Session', category: 'Pain & Mobility', duration: 45, prices: { delhi: 1300, gurugram: 1500, chandigarh: 1200 }, summary: 'One-to-one physiotherapy to support movement and everyday function.', includes: ['Individual treatment session', 'Therapeutic exercise', 'Self-management advice'], mode: 'Home visit' },
  { id: 'home-assessment', name: 'Home Physiotherapy Assessment', category: 'Home Physiotherapy', duration: 60, prices: { delhi: 1600, gurugram: 1800, chandigarh: 1500 }, summary: 'An in-home assessment to understand mobility needs and care goals.', includes: ['Home-based functional assessment', 'Personalised care recommendations', 'Exercise and safety guidance'], mode: 'Home visit' },
];

export interface HomeVisitPackage {
  id: string;
  name: string;
  sessions: number;
  validityDays: number;
  savingsPercent: number;
  description: string;
}

export const homeVisitPackages: HomeVisitPackage[] = [
  { id: 'starter-3', name: 'Starter Care', sessions: 3, validityDays: 30, savingsPercent: 5, description: 'A short course to begin a care plan and review progress.' },
  { id: 'progress-5', name: 'Progress Plan', sessions: 5, validityDays: 45, savingsPercent: 8, description: 'For a structured block of treatment with progress reviews.' },
  { id: 'continuity-10', name: 'Continuity Plan', sessions: 10, validityDays: 75, savingsPercent: 10, description: 'For ongoing care when a physiotherapist recommends a longer plan.' },
];

export const formatINR = (amount: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
