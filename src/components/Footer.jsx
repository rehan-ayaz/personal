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
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer"
                            className="ra-box-social-media box-social-media" aria-label="Facebook">
                            <img src="assets/images/contact/Facebook.svg" alt="Facebook icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="#social" onClick={(e) => e.preventDefault()} className="ra-box-social-media box-social-media" aria-label="Instagram">
                            <img src="assets/images/contact/instagram.svg" alt="Instagram icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="#social" onClick={(e) => e.preventDefault()} className="ra-box-social-media box-social-media" aria-label="Twitter">
                            <img src="assets/images/contact/twitter.svg" alt="Twitter icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="#social" onClick={(e) => e.preventDefault()} className="ra-box-social-media box-social-media" aria-label="Behance">
                            <img src="assets/images/contact/behance.svg" alt="Behance icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="#social" onClick={(e) => e.preventDefault()} className="ra-box-social-media box-social-media" aria-label="Dribbble">
                            <img src="assets/images/contact/dribble.svg" alt="Dribbble icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 ra-box-socila-design-footer box-socila-design-footer zoom_in">
                        <a href="#social" onClick={(e) => e.preventDefault()} className="ra-box-social-media box-social-media" aria-label="YouTube">
                            <img src="assets/images/contact/youtube.svg" alt="YouTube icon" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
                <div className="ra-created-data created-data">
                    <p className="ra-copy-right copy-right">&copy; 2026 Rehan Ayaz. All Rights Reserved.</p>
                    <div className="ra-data-copy data-copy">
                        <p className="ra-copy-right copy-right">Terms and Conditions</p>
                        <p className="ra-copy-right copy-right">Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="ra-bran-stark bran-stark">
                <div className="ra-data-round-image data-round-image" style={{ left: "54.2%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <img src="assets/images/about/right-round.png" alt="right-round" loading="lazy" decoding="async" />
                </div>
                <img src="assets/images/contact/Bran.png" alt="Rehan Ayaz" className="ra-bran-stark-img bran-stark-img" loading="lazy" decoding="async" />
            </div>
        </footer>
    </>
  );
}
