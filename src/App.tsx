import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import LocationsIndexPage from '@/pages/LocationsIndexPage';
import LocationPage from '@/pages/LocationPage';
import SportsIndexPage from '@/pages/SportsIndexPage';
import SportPage from '@/pages/SportPage';
import ServicesIndexPage from '@/pages/ServicesIndexPage';
import ServicePage from '@/pages/ServicePage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ForPlayersPage from '@/pages/ForPlayersPage';
import ForTeamsPage from '@/pages/ForTeamsPage';
import ForPhysiotherapistsPage from '@/pages/ForPhysiotherapistsPage';
import ResourcesPage from '@/pages/ResourcesPage';
import FAQPage from '@/pages/FAQPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BookPage from '@/pages/BookPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
