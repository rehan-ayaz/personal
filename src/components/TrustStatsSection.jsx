import React from 'react';

/**
 * @file TrustStatsSection.jsx
 * @description Authentic Bran Star Layout-2 Trust & Experience section (.data-counder.data-padding).
 * Features skill visual mockups on the left, and 4 experience counters on the right.
 */
export default function TrustStatsSection({
  title = 'The Story Behind the Stats - Proven & Reliable!',
  description = "A seasoned professional web developer and WordPress specialist dedicated to turning complex business challenges into seamless, high-performance web products. With deep technical acumen and a focus on speed, scalability, and conversion, I deliver digital solutions that exceed expectations.",
  stats = [
    { number: '140', suffix: '+', label: 'Projects Completed', badge: '[ Delivered ]' },
    { number: '2', suffix: '+', label: 'Years of Experience', badge: '[ Specialized ]' },
    { number: '98', suffix: '%', label: 'Client Satisfaction', badge: '[ Verified ]' },
    { number: '95', suffix: '+', label: 'Happy Clients', badge: '[ Worldwide ]' },
  ],
}) {

  return (
    <section className="data-counder data-padding">
      <div className="container">
        <div className="ra-stats-layout">
          <div className="main-second-heading-data">
            <h2 className="second-heading max-data-width mb-0 zoom_in wedsa">{title}</h2>
            <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
          </div>

          <div className="ra-stats-content">
            <p className="heading-text-desc zoom_in">{description}</p>
            <div className="design-exper-sciot">
              {stats.map((st, sIdx) => (
                <div className="expeinece-area expeinece-area-coun zoom_in" key={sIdx}>
                  <div className="number-ex">
                    <div className="dot"></div>
                    <h3 className="expre-number-pot counter">
                      <span className="expre-number-pot min-js count">{st.number}</span>
                      {st.suffix}
                    </h3>
                  </div>
                  <div className="name-of-exper">
                    <p>{st.label}</p>
                    <span>{st.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ra-stats-visual expe-skill-data">
            <div className="img expe-skill-data-mock">
              <div className="img-container">
                <img
                  src="/assets/images/skill/image-list.png"
                  alt="Rehan Ayaz technical skills and tools showcase"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
