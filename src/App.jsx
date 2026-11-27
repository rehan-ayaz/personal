/**
 * @file App.jsx
 * @description Master application container and multi-page routing architecture.
 * Integrates React Router DOM v7 for seamless client-side navigation between Homepage,
 * dedicated inner pages (About, Services, Projects, Blog, Resume, Pricing, Testimonials, FAQ, Contact),
 * Admin CMS (/admin, /dashboard), and custom 404 handling.
 * 
 * HOMEPAGE INTEGRITY GUARANTEE:
 * The homepage remains 100% identical in structure, GSAP ScrollSmoother pinning, Three.js,
 * animations, and visual styling.
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Core Homepage Components (Strictly Unchanged)
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
import Dashboard from './components/Dashboard';

// Inner Page Components (Bran Star Layout-2 Native Design)
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ResumePage from './pages/ResumePage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import './components/stats-layout.css';

/**
 * Exact, 100% Protected Homepage Component
 */
function HomePage({ isLoaded, isTermsOpen, setIsTermsOpen, isPrivacyOpen, setIsPrivacyOpen }) {
  return (
    <>
      {/* Preloader */}
      <Preloader isLoaded={isLoaded} />

      {/* Header and Slide-out Navigation */}
      <Header />

      {/* GSAP ScrollSmoother Content Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content" role="main" aria-label="Portfolio">
          {/* 1. Hero Section: First Impression & Value Prop */}
          <Hero />

          {/* Skills & Tech Stack: Technical Competence */}
          <ToolsMarquee />

          {/* 2. Short Introduction: Professional Authority */}
          <About />

          {/* 3. Services Showcase */}
          <ServicesShowcaseSection />

          {/* 5. Featured Projects */}
          <SelectedWorkSection />

          {/* 6. Professional Experience */}
          <Experience />

          {/* 7. Why Work With Me? */}
          <WhyWorkWithMe />

          {/* 8. Work Process */}
          <WorkProcess />

          {/* 9. Client Testimonials */}
          <Testimonials />

          {/* Pricing Section */}
          <Pricing />

          {/* 10. FAQs */}
          <FAQSection />

          {/* Real Gallery */}
          <GallerySection />

          {/* 11. Contact / Inquiry */}
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

/**
 * Main Application Router Container
 */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Clean trailing index.html from URL if present
  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/index.html')) {
      const cleanPath = window.location.pathname.replace(/\/index\.html$/, '') || '/';
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  }, []);

  // Global Modal Event Listeners
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

  // Legacy Script Injection for GSAP ScrollSmoother on the Homepage
  useEffect(() => {
    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
    if (!isHome) return;

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
      if (typeof window !== 'undefined') {
        if (window.smoother) {
          window.smoother.refresh();
        }
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Homepage Route */}
        <Route
          path="/"
          element={
            <HomePage
              isLoaded={isLoaded}
              isTermsOpen={isTermsOpen}
              setIsTermsOpen={setIsTermsOpen}
              isPrivacyOpen={isPrivacyOpen}
              setIsPrivacyOpen={setIsPrivacyOpen}
            />
          }
        />
        <Route path="/index.html" element={<Navigate to="/" replace />} />

        {/* Multi-Page Inner Routes */}
        <Route
          path="/about"
          element={
            <AboutPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/services/:slug"
          element={
            <ServiceDetailPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
        <Route
          path="/projects/:slug"
          element={
            <ProjectDetailPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
        <Route
          path="/blog"
          element={
            <BlogPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <BlogDetailPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/resume"
          element={
            <ResumePage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route path="/experience" element={<Navigate to="/resume" replace />} />
        <Route
          path="/pricing"
          element={
            <PricingPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/testimonials"
          element={
            <TestimonialsPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/faq"
          element={
            <FAQPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />

        {/* Admin CMS Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Custom 404 Fallback */}
        <Route
          path="*"
          element={
            <>
              <Error404
                onOpenTerms={() => setIsTermsOpen(true)}
                onOpenPrivacy={() => setIsPrivacyOpen(true)}
              />
              <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
              <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
