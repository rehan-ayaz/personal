/**
 * @file Testimonials.jsx
 * @description Infinite scrolling marquee skills/domains ticker component with
 * dual-class naming convention (ra-*).
 */
import React from 'react';

export default function Testimonials(props) {
  return (
    <>
        {/* ==================== [ Logo Scrool slider Section Start ] ==================== */}
        <section className="ra-slider-logo slider-logo">
            <div className="ra-logos-data logos-data ra-logos1 logos1">
                <div className="ra-logos-slide logos-slide">
                    <div className="ra-marquee__content marquee__content">
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>WordPress Development</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>Elementor Pro</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>WooCommerce</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>Speed Optimization</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>Figma to Web</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>Shopify Store</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>SEO Optimization</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3>Frontend Design</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ra-logos-data logos-data ra-logos2 logos2">
                <div className="ra-logos-slide logos-slide ra-logos-slide2 logos-slide2">
                    <div className="ra-marquee__content marquee__content">
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">E-Commerce Websites</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Corporate Portfolios</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">SaaS Platforms</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Business Solutions</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Food Delivery Sites</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Gadget Stores</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Gaming Stores</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                        <div className="ra-marquee-img-main marquee-img-main">
                            <h3 className="ra-image-logos image-logos">Landing Pages</h3>
                            <img className="ra-marquue-flower marquue-flower" src="assets/images/award/flower.png" alt="flower" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
