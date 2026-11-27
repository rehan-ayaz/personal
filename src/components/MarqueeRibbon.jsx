import React from 'react';

/**
 * @file MarqueeRibbon.jsx
 * @description Authentic dual-track marquee ribbon from Bran Star Layout-2 (.slider-logo).
 * Features continuous auto-scrolling skill & capability pills with decorative flower dividers.
 */
export default function MarqueeRibbon() {
  const track1 = [
    'Web Development',
    'WordPress & WooCommerce',
    'React & Next.js',
    'API Architecture',
    'Technical SEO & Speed',
    'UI/UX Design',
    'Full-Stack Solutions',
    'Cloud & Hosting',
  ];

  const track2 = [
    'Custom Dashboards',
    'eCommerce Portals',
    'Headless CMS',
    'Performance Audits',
    'SaaS Engineering',
    'Responsive Design',
    'Database Optimization',
    'Modern Web Apps',
  ];

  return (
    <section className="slider-logo">
      <div className="logos-data logos1">
        <div className="logos-slide">
          <div className="marquee__content">
            {track1.concat(track1).map((item, idx) => (
              <div className="marquee-img-main" key={`t1-${idx}`}>
                <h3>{item}</h3>
                <img
                  className="marquue-flower"
                  src="/assets/images/award/flower.png"
                  alt="flower"
                  width="28"
                  height="28"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="logos-data logos2">
        <div className="logos-slide logos-slide2">
          <div className="marquee__content">
            {track2.concat(track2).map((item, idx) => (
              <div className="marquee-img-main" key={`t2-${idx}`}>
                <h3 className="image-logos">{item}</h3>
                <img
                  className="marquue-flower"
                  src="/assets/images/award/flower.png"
                  alt="flower"
                  width="28"
                  height="28"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
