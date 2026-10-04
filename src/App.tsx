import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';

const LocationsIndexPage = lazy(() => import('@/pages/LocationsIndexPage'));
const LocationPage = lazy(() => import('@/pages/LocationPage'));
const SportsIndexPage = lazy(() => import('@/pages/SportsIndexPage'));
const SportPage = lazy(() => import('@/pages/SportPage'));
const ServicesIndexPage = lazy(() => import('@/pages/ServicesIndexPage'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const ForPlayersPage = lazy(() => import('@/pages/ForPlayersPage'));
const ForTeamsPage = lazy(() => import('@/pages/ForTeamsPage'));
const ForPhysiotherapistsPage = lazy(() => import('@/pages/ForPhysiotherapistsPage'));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const BookPage = lazy(() => import('@/pages/BookPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function PageFallback() {
  return <div className="min-h-[50vh] bg-surface" aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsIndexPage />} />
            <Route path="/locations/:location" element={<LocationPage />} />
            <Route path="/sports" element={<SportsIndexPage />} />
            <Route path="/sports/:sport" element={<SportPage />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/services/:service" element={<ServicePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/for-players" element={<ForPlayersPage />} />
            <Route path="/for-teams" element={<ForTeamsPage />} />
            <Route path="/for-physiotherapists" element={<ForPhysiotherapistsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
