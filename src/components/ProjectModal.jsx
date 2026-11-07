/**
 * @file ProjectModal.jsx
 * @description Accessible services detail modal dialog with interactive triggers
 * and standardized dual-class naming convention (ra-*).
 */
import React from 'react';

export default function ProjectModal(props) {
  return (
    <>
    {/* ==================== [ Services popup Section Start ] ==================== */}
    <div className="ra-popup-overlay popup-overlay"></div>
    <div className="ra-popup-box-dash popup-box-dash">
        <div className="ra-top-right-data-services top-right-data-services">
            <img src="assets/images/blog/top-image.png" alt="top-image" loading="lazy" decoding="async" />
        </div>
        <div className="ra-bottom-right-data-services bottom-right-data-services">
            <img src="assets/images/blog/right-top.png" alt="right-top" loading="lazy" decoding="async" />
        </div>
        <div className="ra-popup-content popup-content">
            <div className="ra-container-popup container-popup">
                <div className="ra-index-design index-design">
                    <a href="index.html" className="ra-home-deta home-deta">Home</a>
                    <img src="assets/images/services/arrow.png" alt="" loading="lazy" decoding="async" />
                    <p className="ra-name-service name-service">WordPress &amp; Web Development</p>
                </div>
                <div className="ra-text-title text-title zoom_in">
                    <h2 className="ra-second-heading second-heading">Developing high-impact websites and digital solutions that elevate your
                        brand and captivate your audience.</h2>
                </div>
                <p className="ra-text-desc text-desc zoom_in">We craft visually stunning, user-focused websites tailored to your
                    brand—fully optimized for all devices, with ongoing support and seamless updates.</p>
                <p className="ra-text-desc text-desc mb-0 zoom_in">In today's digital landscape, your website is often the first
                    impression of your brand. That's why we focus on creating custom, responsive, and user-friendly
                    websites that not only look great but also provide an outstanding user experience.</p>
                <div className="ra-image-design-under image-design-under zoom_in">
                    <img src="assets/images/services/image-under.png" alt="image-under" loading="lazy" decoding="async" />
                </div>
                <h3 className="ra-deta-heading-sec deta-heading-sec">Our Web Design Process:</h3>
                <p className="ra-text-data-desc text-data-desc fade_down">We start by understanding your goals through discovery and research,
                    then craft wireframes and prototypes, design tailored solutions, ensure full responsiveness,
                    optimize for SEO, and deliver seamless testing, launch, and ongoing support to keep your project
                    thriving.</p>
                <div className="ra-box-design-services-under box-design-services-under">
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">Discovery & Research:</h2>
                        <span className="ra-data-desc-font data-desc-font">We start by diving deep into your business, audience, and
                            goals—crafting a website that truly reflects your brand and delivers an exceptional user
                            experience.</span>
                    </div>
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">Custom Design:</h2>
                        <span className="ra-data-desc-font data-desc-font">Your website will be fully responsive, delivering a flawless
                            experience on every device—desktop, tablet, or smartphone.</span>
                    </div>
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">Wire frame & Prototype:</h2>
                        <span className="ra-data-desc-font data-desc-font">We craft intuitive wireframes and interactive prototypes to bring
                            your website's layout to life, ensuring a seamless user experience from start to
                            finish.</span>
                    </div>
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">SEO Optimization:</h2>
                        <span className="ra-data-desc-font data-desc-font">We craft your website with proven SEO strategies to boost
                            visibility, drive traffic, and rank higher on search engines.</span>
                    </div>
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">Testing & Launch:</h2>
                        <span className="ra-data-desc-font data-desc-font">Before launch, we meticulously test your website on all
                            browsers and devices to guarantee flawless performance everywhere.</span>
                    </div>
                    <div className="ra-design-box-project design-box-project zoom_in">
                        <h2 className="ra-data-font data-font">Support & Maintenance:</h2>
                        <span className="ra-data-desc-font data-desc-font">Launch is just the beginning of your digital journey. We provide
                            continuous care to keep your site secure, current, and lightning-fast.</span>
                    </div>
                </div>
                <div className="ra-box-image-design box-image-design row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="ra-detail-image detail-image zoom_in">
                            <img src="assets/images/services/image-under-1.png" alt="image-under-1" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="ra-detail-image detail-image zoom_in">
                            <img src="assets/images/services/image-under-2.png" alt="image-under-2" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
                <p className="ra-text-data-desc text-data-desc fade_down">An unknown printer once took a galley of type and crafted a new
                    specimen book—one that has stood the test of time for over five centuries. With a little help from
                    friends along the way, it continues to thrive. Just like that, we offer the one-stop convenience you
                    need, bringing clarity and creativity to every page we touch.</p>
                <div className="ra-sec-text-desc sec-text-desc">
                    <h3 className="ra-deta-heading-sec deta-heading-sec">Why Choose Us for Your Web Design Needs?</h3>
                </div>
                <p className="ra-text-data-desc text-data-desc fade_down">We craft custom, user-focused websites that are fast,
                    mobile-friendly, and SEO-optimized—designed to deliver an exceptional user experience and drive real
                    online success.</p>
                <div className="ra-data-mail-all data-mail-all">
                    <div className="ra-peralax-data-seted peralax-data-seted fade_down">
                        <div className="ra-image-tick image-tick">
                            <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-text-tick text-tick">
                            <p className="ra-data-font data-font">Tailored Designs:</p>
                            <span className="ra-data-desc-font data-desc-font">Each website is uniquely crafted to reflect your brand and
                                captivate your audience.</span>
                        </div>
                    </div>
                    <div className="ra-peralax-data-seted peralax-data-seted fade_down">
                        <div className="ra-image-tick image-tick">
                            <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-text-tick text-tick">
                            <p className="ra-data-font data-font">Delivering smooth:</p>
                            <span className="ra-data-desc-font data-desc-font">We craft intuitive, seamless experiences your users will
                                love at first click.</span>
                        </div>
                    </div>
                    <div className="ra-peralax-data-seted peralax-data-seted fade_down">
                        <div className="ra-image-tick image-tick">
                            <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-text-tick text-tick">
                            <p className="ra-data-font data-font">Mobile-First Design:</p>
                            <span className="ra-data-desc-font data-desc-font">In a mobile-first world, we deliver sleek, responsive
                                designs that drive results on every device.</span>
                        </div>
                    </div>
                </div>
                <p className="ra-text-data-desc text-data-desc fade_down">Turn your website into your hardest-working asset. Whether starting
                    fresh or revamping, we're here to bring your vision to life—beautifully and strategically.
                </p>
                <div className="main-btn-stcoked">
                    <button type="button" className="circle-wrap">
                        <span className="border-animate"></span>
                        <span className="close-btn">Close</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {/* ==================== [ Project popup Section Start ] ==================== */}
    <div className="popup-box-dash-project">
        <div className="project-top-image">
            <img src="assets/images/blog/top-image.png" alt="top-image" loading="lazy" decoding="async" />
        </div>
        <div className="project-bottom-image">
            <img src="assets/images/blog/top-image.png" alt="top-image" loading="lazy" decoding="async" />
        </div>
        <div className="ra-popup-content popup-content">
            <div className="ra-container-popup container-popup">
                <div className="ra-index-design index-design">
                    <a href="index.html" className="ra-home-deta home-deta">Home</a>
                    <img src="assets/images/services/arrow.png" alt="" loading="lazy" decoding="async" />
                    <p className="ra-name-service name-service">Food Delivery App 4U</p>
                </div>
                <div className="image-design-under">
                    <img src="assets/images/project/image-under.png" alt="Food Delivery Platform" loading="lazy" decoding="async" />
                </div>
                <div className="detail-project-under row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="data-detail-project-socde">
                            <h2 className="second-heading mb-0">Food Delivery Platform</h2>
                            <div className="desing-project-mag">
                                <span className="name-contru">
                                    WordPress
                                </span>
                                <span className="name-contru">
                                    Elementor Pro
                                </span>
                                <span className="name-contru">
                                    7 Pages
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="data-detail-project-socde made-project">
                            <p className="project-desc">A modern Food Delivery Platform website converted from Figma design into a fully responsive WordPress website with custom-designed pages and responsive layout.</p>
                            <div className="detail-over">
                                <div className="project-name-detail">
                                    <p>CLIENT:</p>
                                    <span>Food Delivery App 4U</span>
                                </div>
                                <div className="project-name-detail">
                                    <p>PLATFORM:</p>
                                    <span>WORDPRESS</span>
                                </div>
                                <div className="project-name-detail">
                                    <p>ROLE:</p>
                                    <span>DEVELOPER</span>
                                </div>
                                <div className="project-name-detail">
                                    <p>LIVE LINK:</p>
                                    <span><a href="https://fooddeliveryapp4u.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-color)" }}>fooddeliveryapp4u.com</a></span>
                                </div>
                                <div className="project-name-detail border-0 pb-0">
                                    <p>SOFTWARE:</p>
                                    <span>ELEMENTOR PRO, FIGMA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="ra-deta-heading-sec deta-heading-sec">Research & User Insights</h3>
                <p className="text-data-desc">At iFood, we believe food is more than just a meal—it's an experience. Whether
                    you're craving comfort food or gourmet dishes, we serve up quality and flavor. With a commitment to
                    fresh ingredients and exceptional service, we aim to provide you with an unforgettable dining
                    experience, both at our restaurant and from the comfort of your home.</p>
                <div className="box-image-design data-wincd row">
                    <div className="col-12">
                        <div className="detail-image-main">
                            <img src="assets/images/project/main-image.png" alt="main-image" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="detail-image">
                            <img src="assets/images/services/image-under-1.png" alt="image-under-1" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="detail-image">
                            <img src="assets/images/services/image-under-2.png" alt="image-under-2" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
                <h3 className="ra-deta-heading-sec deta-heading-sec">Work Overview</h3>
                <p className="text-data-desc">We believe food is more than just a meal—it's an experience. Whether you're
                    craving comfort food or gourmet dishes, we serve up quality and flavor. With a commitment to fresh
                    ingredients and exceptional service, we aim to provide. Our journey has been marked by countless
                    successful projects that not only achieved but surpassed our clients' goals, reinforcing their trust
                    in us as a leading innovator in the digital.</p>
                <p className="text-data-desc mt-3">We craft custom, user-focused websites that are fast, mobile-friendly,
                    and SEO-optimized—designed to deliver an exceptional user experience and drive real online success.
                </p>
                <div className="avrage-data row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="box-project-avrage border-design">
                            <div className="ra-image-tick image-tick">
                                <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="average-code">
                                <p>120%</p>
                                <span>Conversion Growth</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="box-project-avrage border-design">
                            <div className="ra-image-tick image-tick">
                                <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="average-code">
                                <p>80%</p>
                                <span>Daily Signups Increase</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="box-project-avrage design-over-border">
                            <div className="ra-image-tick image-tick">
                                <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="average-code">
                                <p>140%</p>
                                <span>Traffic Growth</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="box-project-avrage">
                            <div className="ra-image-tick image-tick">
                                <img src="assets/images/services/arrow-tic.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="average-code">
                                <p>130%</p>
                                <span>Increase in conversions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-data-desc">We craft custom, user-focused websites that are fast, mobile-friendly, and
                    SEO-optimized—designed to deliver an exceptional user experience and drive real online success.</p>
                <div className="line-design"></div>
                <a href="#next-project" onClick={(e) => e.preventDefault()} className="main-sec-design-hover">
                    <p>NEXT</p>
                    <h2 className="second-heading mb-1">Lifestyle Blog Website</h2>
                    <div className="desing-project-mag flex-wrap">
                        <div className="name-contru">
                            Clean Layout
                        </div>
                        <div className="name-contru">
                            Blog
                        </div>
                        <div className="name-contru">
                            WordPress
                        </div>
                    </div>
                    <div className="hover-reveal image01">
                        <img className="hidden-img" src="assets/images/project/hover-img.png" alt="hover-img" loading="lazy" decoding="async" />
                    </div>
                </a>
                <div className="main-btn-stcoked">
                    <button type="button" className="circle-wrap">
                        <span className="border-animate"></span>
                        <span className="close-btn">Close</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/magnific-popup.js"></script>
    {/*  GSAP Core & Animation Plugins  */}
    <script src="assets/gsap-public/minified/gsap.min.js"></script>
    <script src="assets/gsap-public/minified/ScrollTrigger.min.js"></script>
    <script src="assets/gsap-public/minified/ScrollSmoother.min.js"></script>

    </>
  );
}
