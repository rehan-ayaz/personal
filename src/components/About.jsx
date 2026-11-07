import React from 'react';

/**
 * About component highlighting biography, professional experience counters,
 * verified background, and dynamic scroll text reveal.
 */
export default function About() {
  return (
    <section className="ra-about about ra-data-padding data-padding" id="about">
      <div className="ra-botter-left botter-left">
        <img src="assets/images/about/bottom-left.png" alt="" />
      </div>
      <div className="container">
        <div className="row ra-design-about design-about">
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="ra-main-second-heading-data main-second-heading-data">
              <h2 className="ra-second-heading second-heading">About Me</h2>
              <p className="ra-description-heading description-heading ra-fade-down fade_down">
                Professional Web Developer &amp; WordPress Specialist creating responsive, SEO-friendly, and high-performance websites for businesses worldwide.
              </p>
              <img src="assets/images/about/round-shape.png" alt="" />
            </div>
            <div className="ra-img img">
              <div className="ra-img-container img-container">
                <img src="assets/images/about/about-left-image.jpg" alt="Laptop and notebook on a desk beside flowers" />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-12">
            <div className="ra-data-self data-self">
              <div className="ra-men-xxper-data men-xxper-data">
                <div className="ra-experience-data experience-data">
                  <h3 className="ra-ex-number ex-number">2+</h3>
                  <span className="ra-ex-name ex-name">Years of Experience</span>
                </div>
                <div className="ra-box-design-right box-design-right">
                  <div className="ra-data-round-data data-round-data">
                    <img src="assets/images/about/right-men.png" alt="right-men" style={{ width: "680px", maxWidth: "680px" }} />
                  </div>
                </div>
                <div className="ra-round-image-about round-image-about">
                  <img src="assets/images/about/right-round.png" alt="" />
                </div>
              </div>
              <a
                href="#contact"
                className="ra-btn-main btn-main"
                aria-label="Connect with me"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <span>Let's Connect</span>
              </a>
              <p className="ra-self-intro self-intro ra-zoom-in zoom_in ra-show show">
                Hello! I'm Rehan Ayaz, a Professional Web Developer &amp; WordPress Specialist with 2+ years of experience delivering reliable, fast-loading sites for businesses, bloggers, and eCommerce brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
