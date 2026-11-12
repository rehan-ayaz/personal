/**
 * @file App.jsx
 * @description Main application container integrating GSAP ScrollSmoother,
 * global theme management, and modular standardized sections.
 */

import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesShowcaseSection from './components/ServicesShowcaseSection';
import ToolsMarquee from './components/ToolsMarquee';
import SelectedWorkSection from './components/SelectedWorkSection';
import Experience from './components/Experience';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import Error404 from './components/Error404';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const is404 = typeof window !== 'undefined' && (() => {
    const p = (window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/');
    return p !== '/' && p !== '/index.html';
  })();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/index.html')) {
      const cleanPath = window.location.pathname.replace(/\/index\.html$/, '') || '/';
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  }, []);

  useEffect(() => {
    const handleOpenTerms = () => setIsTermsOpen(true);
    const handleCloseTerms = () => setIsTermsOpen(false);
    const handleOpenPrivacy = () => setIsPrivacyOpen(true);
    const handleClosePrivacy = () => setIsPrivacyOpen(false);

    window.addEventListener('open-terms-modal', handleOpenTerms);
    window.addEventListener('close-terms-modal', handleCloseTerms);
    window.addEventListener('open-privacy-modal', handleOpenPrivacy);
    window.addEventListener('close-privacy-modal', handleClosePrivacy);

    return () => {
      window.removeEventListener('open-terms-modal', handleOpenTerms);
      window.removeEventListener('close-terms-modal', handleCloseTerms);
      window.removeEventListener('open-privacy-modal', handleOpenPrivacy);
      window.removeEventListener('close-privacy-modal', handleClosePrivacy);
    };
  }, []);

  useEffect(() => {
    // Avoid double-injecting script.js in React StrictMode
    let script = document.querySelector('script[data-legacy-script="true"]');
    if (!script) {
      script = document.createElement('script');
      script.src = '/assets/js/script.js';
      script.async = true;
      script.setAttribute('data-legacy-script', 'true');
      document.body.appendChild(script);
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (is404) {
    return (
      <>
        <Preloader />
        <Error404
          onOpenTerms={() => setIsTermsOpen(true)}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </>
    );
  }

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header and Slide-out Navigation */}
      <Header />

      {/* GSAP ScrollSmoother Content Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content" role="main" aria-label="Portfolio">
          {/* 1. Hero Section: First Impression & Value Prop */}
          <Hero />

          {/* 2. Short Introduction: Professional Authority */}
          <About />

          {/* 3. Services Overview: Intent Routing */}
          <ServicesShowcaseSection />

          {/* 4. Skills & Tech Stack: Technical Competence */}
          <ToolsMarquee />

          {/* 5. Featured Projects: Proof of Work & ROI */}
          <SelectedWorkSection />

          {/* 6. Professional Experience: Career Credibility */}
          <Experience />

          {/* 7. Why Work With Me?: Competitive Differentiator & Trust Signals */}
          <WhyWorkWithMe />

          {/* 8. Work Process: De-risking & Transparency / Workflow Overview */}
          <WorkProcess />

          {/* 9. Client Testimonials: Social Proof & Trust */}
          <Testimonials />

          {/* Pricing Section: Clear Packages */}
          <Pricing />

          {/* 10. FAQs: Objection Handling & SEO Accordion */}
          <FAQSection />

          {/* Real Gallery: Life Outside the Screen */}
          <GallerySection />

          {/* 11. Contact / Inquiry: Lead Generation & Direct Channels */}
          <Contact />

          {/* Footer Branding & Legal */}
          <Footer
            onOpenTerms={() => setIsTermsOpen(true)}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
          />
        </div>
      </div>

      {/* Interactive Popups & Project Detail Modals */}
      <ProjectModal />

      {/* Terms and Conditions Animated Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      {/* Privacy Policy Animated Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}

