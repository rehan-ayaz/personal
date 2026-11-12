/**
 * @file Footer.jsx
 * @description Site footer component with brand typography, social profile links,
 * copyright details, and standardized dual-class naming convention (ra-*).
 */
import React from 'react';

export default function Footer(props) {
  return (
    <>
        {/* ==================== [ Footer section start ] ==================== */}
        <footer className="ra-footer-data footer-data" id="footer">
            <div className="container">
                <div className="ra-footer-text footer-text">
                    <h2 className="ra-second-heading second-heading">Helping Start-Ups Scale &amp; Grow.</h2>
                    <p className="ra-footer-descr footer-descr fade_down">Professional Web Developer &amp; WordPress Specialist available for new projects, remote collaborations, and long-term partnerships. Feel free to reach out anytime.</p>
                </div>
                <div className="ra-social-design-footer social-design-footer row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer"
                            className="ra-box-social-media box-social-media" aria-label="Facebook">
                            <img src="assets/images/contact/Facebook.svg" alt="Facebook icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="https://www.linkedin.com/in/rehan-ayaz/" target="_blank" rel="noopener noreferrer"
                            className="ra-box-social-media box-social-media" aria-label="LinkedIn">
                            <img src="assets/images/contact/Linkedin.svg" alt="LinkedIn icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
                <div className="ra-created-data created-data">
                    <p className="ra-copy-right copy-right">&copy; 2026 Rehan Ayaz. All Rights Reserved.</p>
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
                    <img src="assets/images/about/right-round.png" alt="" loading="lazy" decoding="async" />
                </div>
                <img src="assets/images/contact/Bran.png" alt="Rehan Ayaz" className="ra-bran-stark-img bran-stark-img" loading="lazy" decoding="async" />
            </div>
        </footer>
    </>
  );
}
