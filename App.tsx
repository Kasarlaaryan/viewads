
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import LocationServices from './pages/LocationServices';
import Locations from './pages/Locations';
import IndustriesWeServe from './pages/IndustriesWeServe';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import FacebookMarketing from './pages/smm/FacebookMarketing';
import InstagramMarketing from './pages/smm/InstagramMarketing';
import LinkedInMarketing from './pages/smm/LinkedInMarketing';
import ContentCreation from './pages/smm/ContentCreation';
import PaidSocialAds from './pages/smm/PaidSocialAds';
import WebsiteDesignDevelopment from './pages/WebsiteDesignDevelopment';
import BusinessWebsiteDesign from './pages/web-design/BusinessWebsiteDesign';
import WordPressDevelopment from './pages/web-design/WordPressDevelopment';
import LandingPageDesign from './pages/web-design/LandingPageDesign';
import WebsiteRedesign from './pages/web-design/WebsiteRedesign';
import MobileFriendlyDesign from './pages/web-design/MobileFriendlyDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import GoogleAds from './pages/digital-marketing/GoogleAds';
import LeadFunnels from './pages/digital-marketing/LeadFunnels';
import PerformanceMarketing from './pages/digital-marketing/PerformanceMarketing';
import EmailMarketing from './pages/digital-marketing/EmailMarketing';
import CRO from './pages/digital-marketing/CRO';
import SEOServices from './pages/SEOServices';
import KeywordResearch from './pages/seo/KeywordResearch';
import OnPageSEO from './pages/seo/OnPageSEO';
import OffPageSEO from './pages/seo/OffPageSEO';
import LocalSEO from './pages/seo/LocalSEO';
import SEOAudit from './pages/seo/SEOAudit';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import GeminiAssistant from './components/GeminiAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/social-media-marketing/facebook-marketing" element={<FacebookMarketing />} />
            <Route path="/services/social-media-marketing/instagram-marketing" element={<InstagramMarketing />} />
            <Route path="/services/social-media-marketing/linkedin-marketing" element={<LinkedInMarketing />} />
            <Route path="/services/social-media-marketing/content-creation" element={<ContentCreation />} />
            <Route path="/services/social-media-marketing/paid-ads" element={<PaidSocialAds />} />
            <Route path="/services/website-design-development" element={<WebsiteDesignDevelopment />} />
            <Route path="/services/website-design-development/business-website" element={<BusinessWebsiteDesign />} />
            <Route path="/services/website-design-development/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/services/website-design-development/landing-page" element={<LandingPageDesign />} />
            <Route path="/services/website-design-development/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/services/website-design-development/mobile-friendly" element={<MobileFriendlyDesign />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/digital-marketing/google-ads" element={<GoogleAds />} />
            <Route path="/services/digital-marketing/lead-generation-funnels" element={<LeadFunnels />} />
            <Route path="/services/digital-marketing/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/services/digital-marketing/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/digital-marketing/cro" element={<CRO />} />
            <Route path="/services/seo" element={<SEOServices />} />
            <Route path="/services/seo/keyword-research" element={<KeywordResearch />} />
            <Route path="/services/seo/on-page-seo" element={<OnPageSEO />} />
            <Route path="/services/seo/off-page-seo" element={<OffPageSEO />} />
            <Route path="/services/seo/local-seo" element={<LocalSEO />} />
            <Route path="/services/seo/seo-audit" element={<SEOAudit />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/industries-we-serve" element={<IndustriesWeServe />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location/:city" element={<LocationServices />} />
            
            {/* Catch-all for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;
