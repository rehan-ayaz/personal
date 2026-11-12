/**
 * @file Error404.jsx
 * @description Dedicated 404 Error page component featuring custom vector illustration,
 * interactive cyan smiley badge, dual-theme support, and full navigation fallback.
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Error404({ onOpenTerms, onOpenPrivacy }) {
  return (
    <>
      <Header />
      <main id="main-content" role="main" aria-label="404 Error Page">
        <section className="ra-error-section" id="error-404">
          <div className="container">
            <div className="ra-error-container">
              {/* Central Visual with Floating Cyan Smiley Badge */}
              <div className="ra-error-visual-wrap">
                <img
                  src="/assets/images/error/404-developer.png"
                  alt="404 Error - Page Not Found Developer Asleep at Desk"
                  className="ra-error-illustration"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="ra-error-smilly-badge" title="Don't worry, let's get you back on track!">
                  <img
                    src="/assets/images/error/smilly-icon.png"
                    alt="Cyan Smiley"
                    className="ra-error-smilly-img"
                  />
                  <span className="ra-smilly-text">Zzz... Error 404!</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="ra-error-tag">
                <span className="ra-tag-dot"></span>
                <span>Page Not Found</span>
              </div>

              {/* Main Headline */}
              <h1 className="ra-error-title">
                Oops! Looks Like This Page Took A Coffee Break
              </h1>

              {/* Helpful Description */}
              <p className="ra-error-desc">
                The link you followed might be broken, or the page may have been moved or temporarily retired. Even the most future-proof code hits an unexpected route once in a while.
              </p>

              {/* Action Buttons */}
              <div className="ra-error-actions">
                <a href="/" className="ra-btn-primary">
                  <i className="ri-arrow-left-line"></i>
                  <span>Back to Homepage</span>
                </a>
                <a href="/#contact" className="ra-btn-secondary">
                  <i className="ri-mail-send-line"></i>
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Quick Jump Links */}
              <div className="ra-error-quicklinks-box">
                <p className="ra-error-quicklinks-title">Or explore popular sections:</p>
                <div className="ra-error-quicklinks">
                  <a href="/" className="ra-quicklink-pill">Home</a>
                  <a href="/#services" className="ra-quicklink-pill">Services</a>
                  <a href="/#projects" className="ra-quicklink-pill">Featured Projects</a>
                  <a href="/#experience" className="ra-quicklink-pill">Experience</a>
                  <a href="/#process" className="ra-quicklink-pill">Work Process</a>
                  <a href="/#testimonials" className="ra-quicklink-pill">Testimonials</a>
                  <a href="/#faq" className="ra-quicklink-pill">FAQs</a>
                  <a href="/#contact" className="ra-quicklink-pill">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenTerms={onOpenTerms} onOpenPrivacy={onOpenPrivacy} />
    </>
  );
}

