/**
 * @file Pricing.jsx
 * @description Pricing plans component with transparent service packages and
 * standardized dual-class naming convention (ra-*).
 */
import React from 'react';

export default function Pricing(props) {
  return (
    <>
        {/* ==================== [ Pricing section Start ] ==================== */}
        <section className="ra-pricing pricing ra-data-padding data-padding" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="ra-heading-data-princing heading-data-princing">
                            <h2 className="ra-second-heading second-heading">My Pricing Plans</h2>
                            <p className="ra-heading-descr heading-descr fade_down">Transparent and competitive pricing packages tailored for businesses, startups, and personal projects.</p>
                            <img src="assets/images/about/round-shape.png" alt="" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
                <div className="row pricing-detail">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box zoom_in">
                            <div className="ra-image-right image-right">
                                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Starter</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$230</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">5 Pages Website</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Responsive Design for all devices</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Fast Loading Design</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form Integration</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">1 Month Free Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Starter%20Plan%20(%24230)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><span>Let's Start with Starter</span></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box zoom_in">
                            <div className="ra-image-right image-right">
                                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Standard</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$599</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Up to 15 Pages Website</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Custom Layout Design</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Premium Theme Setup</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form + Map Integration</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Image &amp; Speed Optimization</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Priority Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Standard%20Plan%20(%24599)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><span>Let's Start with Standard</span></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box zoom_in">
                            <div className="ra-image-right image-right">
                                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Premium</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$1500</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">20+ Custom Pages</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Multi-Language Support</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Premium Theme &amp; Plugins</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form + Map + Live Chat</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Full eCommerce Functionality</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">6 Months Dedicated Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Premium%20Plan%20(%241500)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><span>Let's Start with Premium</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
