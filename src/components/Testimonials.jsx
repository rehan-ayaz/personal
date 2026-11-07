/**
 * @file Testimonials.jsx
 * @description Infinite scrolling marquee ticker showcasing comprehensive services,
 * technologies, and capabilities aligned with the new services showcase,
 * featuring seamless dual-track infinite looping and dual-class naming convention (ra-*).
 */
import React from 'react';

const primaryServices = [
  "WordPress Specialist",
  "Shopify Store Design",
  "Website Design & Development",
  "Custom WooCommerce Stores",
  "Pixel-Perfect UI/UX",
  "WordPress Speed Optimization",
  "Shopify Theme Development",
  "AI & Intelligent Automation",
  "Elementor Pro Expert",
  "Conversion-Driven E-Commerce",
  "Full-Stack Web Solutions",
  "Liquid Code Customization",
  "Headless WordPress & Web",
  "Modern Landing Pages",
  "Mobile-First Web Development",
  "Custom Plugin Integration",
  "Shopify Store Migration",
  "SEO & Core Web Vitals",
  "SaaS Application Development",
  "High-Converting Shopify Stores"
];

const secondaryServices = [
  "Bespoke Website Development",
  "WordPress Theme Customization",
  "Shopify App Integration",
  "Responsive Web Design",
  "WooCommerce Payment Gateways",
  "Advanced Gutenberg & ACF",
  "E-Commerce Optimization",
  "Custom Web Applications",
  "Shopify Dropshipping Stores",
  "Interactive 3D Web Experiences",
  "WordPress Security & Backup",
  "Scalable Web Architecture",
  "Shopify UI/UX Design",
  "Cross-Browser Compatibility",
  "Clean Maintainable Code",
  "Custom Web Portals",
  "Performance & Speed Tuning",
  "Enterprise WordPress Solutions",
  "Shopify Product Landing Pages",
  "Digital Product Engineering"
];

export default function Testimonials(props) {
  return (
    <>
      {/* ==================== [ Logo Scroll Slider Section Start ] ==================== */}
      <section className="ra-slider-logo slider-logo" aria-label="Services and Capabilities Marquee">
        {/* Ribbon 1: Top / Dark Ribbon (Left Scroll) */}
        <div className="ra-logos-data logos-data ra-logos1 logos1">
          <div className="ra-logos-slide logos-slide">
            <div className="ra-marquee__content marquee__content">
              {primaryServices.map((text, idx) => (
                <div className="ra-marquee-img-main marquee-img-main" key={`p1-${idx}`}>
                  <h3>{text}</h3>
                  <span className="ra-marquee-separator marquee-separator">
                    <img
                      className="ra-marquue-flower marquue-flower"
                      src="assets/images/award/flower.png"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="ra-marquee__content marquee__content" aria-hidden="true">
              {primaryServices.map((text, idx) => (
                <div className="ra-marquee-img-main marquee-img-main" key={`p2-${idx}`}>
                  <h3>{text}</h3>
                  <span className="ra-marquee-separator marquee-separator">
                    <img
                      className="ra-marquue-flower marquue-flower"
                      src="assets/images/award/flower.png"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ribbon 2: Bottom / Light Ribbon (Reverse Right Scroll) */}
        <div className="ra-logos-data logos-data ra-logos2 logos2">
          <div className="ra-logos-slide logos-slide ra-logos-slide2 logos-slide2">
            <div className="ra-marquee__content marquee__content">
              {secondaryServices.map((text, idx) => (
                <div className="ra-marquee-img-main marquee-img-main" key={`s1-${idx}`}>
                  <h3 className="ra-image-logos image-logos">{text}</h3>
                  <span className="ra-marquee-separator marquee-separator">
                    <img
                      className="ra-marquue-flower marquue-flower"
                      src="assets/images/award/flower.png"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="ra-marquee__content marquee__content" aria-hidden="true">
              {secondaryServices.map((text, idx) => (
                <div className="ra-marquee-img-main marquee-img-main" key={`s2-${idx}`}>
                  <h3 className="ra-image-logos image-logos">{text}</h3>
                  <span className="ra-marquee-separator marquee-separator">
                    <img
                      className="ra-marquue-flower marquue-flower"
                      src="assets/images/award/flower.png"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
