import React, { useLayoutEffect, useRef } from 'react';

/**
 * @file WhyWorkWithMe.jsx
 * @description Competitive differentiator & trust signals section featuring key business stats,
 * verified project counts, and dedicated client service metrics.
 * Corresponds to Section 7 in Google's recommended architecture.
 */
export default function WhyWorkWithMe() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const image = imageRef.current;

    const syncImageWidth = () => {
      const headingBox = heading.getBoundingClientRect();
      // SplitText animates the characters. Measure their word wrappers to avoid tracking the animation.
      const words = heading.querySelectorAll('.split-line > *');
      const range = document.createRange();
      range.selectNodeContents(heading);
      const textBoxes = words.length
        ? Array.from(words, (word) => word.getBoundingClientRect())
        : Array.from(range.getClientRects());
      const textRight = Math.max(headingBox.left, ...textBoxes.map((box) => box.right));
      const width = Math.min(headingBox.width, textRight - headingBox.left);

      if (width > 0) image.style.setProperty('--why-me-image-width', `${width}px`);
    };

    syncImageWidth();
    const resizeObserver = new ResizeObserver(syncImageWidth);
    resizeObserver.observe(heading);
    const splitObserver = new MutationObserver(syncImageWidth);
    splitObserver.observe(heading, { childList: true, subtree: true });
    document.fonts.addEventListener('loadingdone', syncImageWidth);

    return () => {
      resizeObserver.disconnect();
      splitObserver.disconnect();
      document.fonts.removeEventListener('loadingdone', syncImageWidth);
    };
  }, []);

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
        <div className="ra-stats-layout">
          <div className="ra-main-second-heading-data main-second-heading-data">
            <h2 className="ra-second-heading second-heading mb-0" ref={headingRef}>
              Why Work With Me? Proven Results &amp; Dedication.
            </h2>
            <img
              src="assets/images/about/round-shape.png"
              alt="Decorative accent"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="ra-stats-content">
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

          <div className="ra-stats-visual ra-expe-skill-data expe-skill-data" ref={imageRef}>
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
      </div>
    </section>
  );
}

