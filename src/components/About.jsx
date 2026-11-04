import React from 'react';

export default function About(props) {
  return (
    <>
        {/* ==================== [ About Section Start ] ==================== */}
        <section className="about data-padding" id="about">
            <div className="botter-left">
                <img src="assets/images/about/bottom-left.png" alt="bottom-left" />
            </div>
            <div className="container">
                <div className="row design-about">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="main-second-heading-data">
                            <h2 className="second-heading">About Me</h2>
                            <p className="description-heading fade_down">Professional Web Developer &amp; WordPress Specialist creating responsive, SEO-friendly, and high-performance websites for businesses worldwide.</p>
                            <img src="assets/images/about/round-shape.png" alt="round-shape" />
                        </div>
                        <div className="img">
                            <div className="img-container">
                                <img src="assets/images/about/about-left-image.jpg" alt="about-left-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="data-self">
                            <div className="men-xxper-data">
                                <div className="experience-data">
                                    <h3 className="ex-number">2+</h3>
                                    <span className="ex-name">Years of Experience</span>
                                </div>
                                <div className="box-design-right">
                                    <div className="data-round-data">
                                        <img src="assets/images/about/right-men.png" alt="right-men" style={{ width: "680px", maxWidth: "680px" }} />
                                    </div>
                                </div>
                                <div className="round-image-about">
                                    <img src="assets/images/about/right-round.png" alt="right-round" />
                                </div>
                            </div>
                            <a href="#contact" className="btn-main" aria-label="Connect with me" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><span>Let's Connect</span></a>
                            <p className="self-intro zoom_in show">Hello! I'm Rehan Ayaz, a Professional Web Developer &amp; WordPress Specialist with 2+ years of experience delivering reliable, fast-loading sites for businesses, bloggers, and eCommerce brands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
