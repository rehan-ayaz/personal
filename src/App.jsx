/**
 * @file App.jsx
 * @description Main application container integrating GSAP ScrollSmoother,
 * global theme management, and modular standardized sections.
 */

import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsMarquee from './components/ToolsMarquee';
import About from './components/About';
import ServicesShowcaseSection from './components/ServicesShowcaseSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
// import Contact from './components/Contact';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header and Slide-out Navigation */}
      <Header />

      {/* GSAP ScrollSmoother Content Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content" role="main" aria-label="Portfolio">
          {/* Hero Section */}
          <Hero />

          {/* Tools & Skills Infinite Marquee */}
          <ToolsMarquee />

          {/* About Section */}
          <About />

          {/* 3D Services Showcase */}
          <ServicesShowcaseSection />

          {/* Selected Work & Explorations (Pinned Horizontal Showcase) */}
          <SelectedWorkSection />

          {/* Experience & Certifications (0-radius cards + top-right accents) */}
          <Experience />

          {/* Testimonials Slider */}
          <Testimonials />

          {/* Pricing Section */}
          <Pricing />

          {/* Interactive Gallery ("Life Outside the Screen") */}
          <GallerySection />

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

