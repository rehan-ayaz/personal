import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsMarquee from './components/ToolsMarquee';
import About from './components/About';
import TrionnServicesSection from './components/TrionnServicesSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import TrionnOrbitSection from './components/TrionnOrbitSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <div id="smooth-content">
          {/* Hero Section */}
          <Hero />

          {/* Tools & Skills Infinite Marquee */}
          <ToolsMarquee />

          {/* About Section */}
          <About />

          {/* Trionn 3D Services Showcase */}
          <TrionnServicesSection />

          {/* Trionn Selected Work & Explorations (Pinned Horizontal Showcase) */}
          <SelectedWorkSection />

          {/* Experience & Certifications (0-radius cards + top-right accents) */}
          <Experience />

          {/* Testimonials Slider */}
          <Testimonials />

          {/* Pricing Section */}
          <Pricing />

          {/* Contact Section */}
          <Contact />

          {/* Trionn Pinned 3D Orbit & Design In Motion Showcase */}
          <TrionnOrbitSection />

          {/* Footer Branding & Legal */}
          <Footer />
        </div>
      </div>

      {/* Interactive Popups & Project Detail Modals */}
      <ProjectModal />
    </>
  );
}

