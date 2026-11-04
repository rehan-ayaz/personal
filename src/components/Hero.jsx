import React from 'react';

export default function Hero(props) {
  return (
    <>
        {/* ==================== [ hero Section Start ] ==================== */}
        <section className="hero" id="hero">
            <div className="bottom-dummy-data">
                <img src="assets/images/hero/bottom-data-hero.png" alt="bottom-data-hero" />
            </div>
            <div className="container">
                <h1 className="heading-one up-down-2">Web Developer</h1>
                <div className="all-mens">
                    <div className="left-blue">
                        <img src="assets/images/header/bottom-td.png" alt="bottom-td" />
                    </div>
                    <div className="left-black">
                        <img src="assets/images/header/top-left.png" alt="top-left" />
                    </div>
                    <div className="data-men-boy">
                        <img src="assets/images/header/mens.png" alt="mens" />
                    </div>
                    <div className="right-black">
                        <img src="assets/images/header/top-right.png" alt="top-right" />
                    </div>
                    <div className="right-blue">
                        <img src="assets/images/header/bottom-dt.png" alt="bottom-dt" />
                    </div>
                    <a href="https://wa.me/923260735090" className="btn-design" aria-label="Hire me" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><span>hire me!</span></a>
                    <div className="online-free">
                        <div className="online-dot"></div>
                        <p>Available for freelance</p>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center data-name-lofter">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="main-scokted">
                            <h2 className="data-name-med">Hey! I'm</h2>
                            <h3 className="data-name-high">Rehan Ayaz</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="main-desc">
                            Professional Web Developer &amp; WordPress Specialist with over 2 years of experience building responsive, easy-to-manage websites.
                        </div>
                    </div>
                </div>
            </div>
            <a href="mailto:hello@rehanayaz.com" className="rotate"> hello@rehanayaz.com </a>
            <div className="hero-social-media">
                <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                <a href="https://www.linkedin.com/in/rehan-ayaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                <a href="https://wa.me/923260735090" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="ri-whatsapp-line"></i></a>
            </div>
        </section>

    </>
  );
}
