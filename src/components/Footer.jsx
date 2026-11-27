/**
 * @file Footer.jsx
 * @description Site footer component matching Bran Star Layout-2 design.
 * Features dual-column navigation links, social profile links, copyright details,
 * and terms/privacy modal triggers.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <>
      {/* ==================== [ Footer section start ] ==================== */}
      <footer className="ra-footer-data footer-data" id="footer">
        <div className="container">
          <div className="row minxsedser align-items-center mb-4">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="ra-footer-text footer-text">
                <h2 className="ra-second-heading second-heading text-start">Helping Start-Ups Scale &amp; Grow.</h2>
                <p className="ra-footer-descr footer-descr micketd mosko text-start">
                  Professional Web Developer &amp; WordPress Specialist available for new projects, remote collaborations, and long-term partnerships. Feel free to reach out anytime.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="meantioned">
                <ul className="one-left">
                  <li><Link to="/" className="page-link-data">Home</Link></li>
                  <li><Link to="/about" className="page-link-data">About Me</Link></li>
                  <li><Link to="/services" className="page-link-data">Services</Link></li>
                  <li><Link to="/projects" className="page-link-data">Projects</Link></li>
                  <li><Link to="/blog" className="page-link-data">Blog</Link></li>
                </ul>
                <ul className="one-left">
                  <li><Link to="/resume" className="page-link-data">Resume / CV</Link></li>
                  <li><Link to="/pricing" className="page-link-data">Pricing Plans</Link></li>
                  <li><Link to="/testimonials" className="page-link-data">Testimonials</Link></li>
                  <li><Link to="/faq" className="page-link-data">FAQs</Link></li>
                  <li><Link to="/contact" className="page-link-data">Contact Me</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ra-created-data created-data pt-4" style={{ borderTop: '1px solid var(--princing-box-border)' }}>
            <p className="ra-copy-right copy-right mb-0">&copy; 2026 Rehan Ayaz. All Rights Reserved.</p>
            <div className="ra-data-copy data-copy">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof props.onOpenTerms === 'function') {
                    props.onOpenTerms();
                  } else {
                    window.dispatchEvent(new CustomEvent('open-terms-modal'));
                  }
                }}
                className="ra-copy-right copy-right ra-terms-link-btn"
                aria-label="Open Terms and Conditions"
              >
                Terms and Conditions
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof props.onOpenPrivacy === 'function') {
                    props.onOpenPrivacy();
                  } else {
                    window.dispatchEvent(new CustomEvent('open-privacy-modal'));
                  }
                }}
                className="ra-copy-right copy-right ra-terms-link-btn"
                aria-label="Open Privacy Policy"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="ra-bran-stark bran-stark">
          <div className="ra-data-round-image data-round-image" style={{ left: "54.2%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <img src="/assets/images/about/right-round.png" alt="" loading="lazy" decoding="async" />
          </div>
          <img src="/assets/images/contact/Bran.png" alt="Rehan Ayaz" className="ra-bran-stark-img bran-stark-img" loading="lazy" decoding="async" />
        </div>
      </footer>
    </>
  );
}
