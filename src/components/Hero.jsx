import React from 'react';

/**
 * Hero component showcasing main introduction, availability status indicator,
 * avatar visual composition, and social contact links.
 */
export default function Hero() {
  return (
    <section className="ra-hero hero" id="hero">
      <div className="ra-bottom-dummy-data bottom-dummy-data">
        <img src="assets/images/hero/bottom-data-hero.png" alt="" />
      </div>
      <div className="container">
        <h1 className="ra-heading-one heading-one up-down-2">Web Developer</h1>
        <div className="ra-all-mens all-mens">
          <div className="ra-left-blue left-blue">
            <img src="assets/images/header/bottom-td.png" alt="" />
          </div>
          <div className="ra-left-black left-black">
            <img src="assets/images/header/top-left.png" alt="" />
          </div>
          <div className="ra-data-men-boy data-men-boy">
            <img src="assets/images/header/mens.png" alt="Rehan Ayaz" />
          </div>
          <div className="ra-right-black right-black">
            <img src="assets/images/header/top-right.png" alt="" />
          </div>
          <div className="ra-right-blue right-blue">
            <img src="assets/images/header/bottom-dt.png" alt="" />
          </div>
          <a
            href="https://wa.me/923260735090"
            className="ra-btn-design btn-design"
            aria-label="Hire me"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span>hire me!</span>
          </a>
          <div className="ra-online-free online-free">
            <div className="ra-online-dot online-dot" />
            <p>Available for freelance</p>
          </div>
        </div>
        <div className="row justify-content-between align-items-center ra-data-name-lofter data-name-lofter">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="ra-main-scokted main-scokted">
              <h2 className="ra-data-name-med data-name-med">Hey! I'm</h2>
              <h3 className="ra-data-name-high data-name-high">Rehan Ayaz</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="ra-main-desc main-desc">
              Professional Web Developer &amp; WordPress Specialist with over 2 years of experience building responsive, easy-to-manage websites.
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:hello@rehanayaz.com" className="ra-rotate rotate">hello@rehanayaz.com</a>
      <div className="ra-hero-social-media hero-social-media">
        <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="ri-facebook-fill" />
        </a>
        <a href="https://www.linkedin.com/in/rehan-ayaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="ri-linkedin-fill" />
        </a>
        <a href="https://wa.me/923260735090" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="ri-whatsapp-line" />
        </a>
      </div>
    </section>
  );
}
