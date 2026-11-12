import React from 'react';

/**
 * @file WhyWorkWithMe.jsx
 * @description Competitive differentiator & trust signals section featuring key business stats,
 * verified project counts, and dedicated client service metrics.
 * Corresponds to Section 7 in Google's recommended architecture.
 */
export default function WhyWorkWithMe() {
  const stats = [
    {
      count: '140',
      suffix: '+',
      title: 'Projects Completed',
      badge: '[ Delivered ]',
    },
    {
      count: '2',
      suffix: '+',
      title: 'Years of Experience',
      badge: '[ Specialized ]',
    },
    {
      count: '98',
      suffix: '%',
      title: 'Client Satisfaction',
      badge: '[ Verified ]',
    },
    {
      count: '95',
      suffix: '+',
      title: 'Happy Clients',
      badge: '[ Worldwide ]',
    },
  ];

  return (
    <section className="ra-why-work-with-me why-work-with-me ra-data-counder data-counder ra-data-padding data-padding" id="why-me">
      <div className="container">
        <div className="ra-project-submitter project-submitter">
          <div className="row ra-data-implement data-implement align-items-center">
            {/* Left Column: Heading and Visual Badge */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="ra-main-second-heading-data main-second-heading-data">
                <h2 className="ra-second-heading second-heading mb-0">
                  Why Work With Me? Proven Results &amp; Dedication.
                </h2>
                <img
                  src="assets/images/about/round-shape.png"
                  alt="Decorative accent"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="ra-expe-skill-data expe-skill-data">
                <div className="ra-expe-skill-data-mock expe-skill-data-mock">
                  <div className="ra-img-container img-container">
                    <img
                      src="/assets/images/skill/why-work-with-me.webp"
                      alt="Modern web development and engineering workstation"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative and Value Prop Counters */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <p className="ra-heading-text-desc heading-text-desc">
                We craft custom, high-converting digital solutions engineered for speed, clean semantic code, and tangible business growth. From bespoke WordPress platforms to robust modern web apps, every build is delivered with transparent communication and guaranteed satisfaction.
              </p>

              <div className="ra-design-exper-sciot design-exper-sciot">
                {stats.map((stat, idx) => (
                  <div key={idx} className="ra-expeinece-area-coun expeinece-area-coun">
                    <div className="ra-number-ex number-ex">
                      <div className="ra-dot dot" />
                      <h3 className="ra-expre-number-pot expre-number-pot counter">
                        <span className="min-js count">{stat.count}</span>
                        {stat.suffix}
                      </h3>
                    </div>
                    <div className="ra-name-of-exper name-of-exper">
                      <p>{stat.title}</p>
                      <span>{stat.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

