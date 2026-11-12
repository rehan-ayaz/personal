import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * @file WorkProcess.jsx
 * @description Work Process ("Engineering Process") interactive section featuring
 * 1-by-1 card stacking into the center and unfolding into 4 columns upon scrolling.
 * Styled with authentic pricing-box borders, backgrounds, and hover transitions.
 * Corresponds to Section 8 in Google's recommended architecture.
 */
export default function WorkProcess() {
  const spacerRef = useRef(null);
  const pinnedBoxRef = useRef(null);
  const [pinDistance, setPinDistance] = useState(2400);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const g = window.gsap || gsap;
    const spacer = spacerRef.current;
    const pinnedBox = pinnedBoxRef.current;
    if (!spacer || !pinnedBox) return;

    const block1 = pinnedBox.querySelector('.process-block._1');
    const block2 = pinnedBox.querySelector('.process-block._2');
    const block3 = pinnedBox.querySelector('.process-block._3');
    const block4 = pinnedBox.querySelector('.process-block._4');

    if (!block1 || !block2 || !block3 || !block4) return;

    const isDesktop = () => window.innerWidth > 991;

    // Build timeline mapped across 0 to 1 progress
    // Exact timing preserved: 1-by-1 card stacking and unfolding
    const tl = g.timeline({ paused: true });

    const initBlocks = () => {
      g.set(block1, { xPercent: 160, yPercent: 400, force3D: true });
      g.set(block2, { xPercent: 52, yPercent: 400, force3D: true });
      g.set(block3, { xPercent: -54.5, yPercent: 400, force3D: true });
      g.set(block4, { xPercent: -160, yPercent: 400, force3D: true });
    };

    if (isDesktop()) {
      initBlocks();
    } else {
      g.set([block1, block2, block3, block4], { clearProps: 'all' });
      return;
    }

    // Step 1: 0% -> 28% Progress: Card 1 rises into center view
    tl.to(block1, { yPercent: 0, duration: 2.8, ease: 'power1.out' }, 0);

    // Step 2: 28% -> 42% Progress: Card 2 rises into center view and stacks over Card 1
    tl.to(block2, { yPercent: 0, duration: 1.4, ease: 'power1.out' }, 2.8);

    // Step 3: 42% -> 56% Progress: Card 3 rises into center view and stacks over Card 2
    tl.to(block3, { yPercent: 0, duration: 1.4, ease: 'power1.out' }, 4.2);

    // Step 4: 56% -> 70% Progress: Card 4 rises into center view and stacks over Card 3
    tl.to(block4, { yPercent: 0, duration: 1.4, ease: 'power1.out' }, 5.6);

    // Step 5: 70% -> 88% Progress: All 4 cards smoothly glide and spread out into 4 grid columns
    tl.to(
      [block1, block2, block3, block4],
      {
        xPercent: 0,
        yPercent: 0,
        duration: 1.8,
        ease: 'power2.inOut',
      },
      7.0
    );

    // Hold / dwell state: 88% -> 100% Progress (view all 4 unfolded cards before unpinning)
    tl.set({}, {}, 10.0);

    const dist = 2400;
    setPinDistance(dist);

    // Ticker-synchronized pinning loop: executes in perfect lockstep with ScrollSmoother
    const updatePin = () => {
      if (!isDesktop()) {
        pinnedBox.style.transform = '';
        g.set([block1, block2, block3, block4], { clearProps: 'transform' });
        return;
      }

      const spacerRect = spacer.getBoundingClientRect();
      const targetTop = 95;

      const scrollY = -(spacerRect.top - targetTop);
      const progress = Math.max(0, Math.min(1, scrollY / dist));

      // Precision Pinning
      if (spacerRect.top <= targetTop && scrollY <= dist) {
        pinnedBox.style.transform = `translate3d(0, ${scrollY}px, 0)`;
      } else if (spacerRect.top > targetTop) {
        pinnedBox.style.transform = 'translate3d(0, 0, 0)';
      } else {
        pinnedBox.style.transform = `translate3d(0, ${dist}px, 0)`;
      }

      // Scrub timeline
      tl.progress(progress);
    };

    g.ticker.add(updatePin);

    const handleResize = () => {
      if (!isDesktop()) {
        setPinDistance(0);
        pinnedBox.style.transform = '';
        g.set([block1, block2, block3, block4], { clearProps: 'all' });
      } else {
        setPinDistance(dist);
        initBlocks();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      g.ticker.remove(updatePin);
      window.removeEventListener('resize', handleResize);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={spacerRef}
      id="process"
      data-w-id="18310118-f7db-88f2-b959-19eed8c6aab2"
      className="ra-alex-process ra-process-spacer pin-spacer section border-top overflow-visible"
      style={{ paddingBottom: `${pinDistance}px`, position: 'relative' }}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinnedBoxRef}
        className="ra-process-sticky-box process-sticky-box"
        style={{ willChange: 'transform' }}
      >
        <div className="w-layout-blockcontainer container w-container">
          {/* Section Header (ra-section-subtitle-box removed per instruction) */}
          <div
            data-animate="section-title"
            className="ra-section-title-box section-title-box center-two text-center"
          >
            <h2 className="ra-second-heading second-heading text-center">
              My Work Process: <span className="ra-colored colored">From Concept to Launch</span>
            </h2>
            <p
              className="ra-heading-descr heading-descr text-center"
              style={{ maxWidth: '720px', margin: '14px auto 0' }}
            >
              A structured, results-driven engineering roadmap focused on technical precision, performance, and scalable digital solutions.
            </p>
          </div>

          {/* 4 Process Blocks Grid */}
          <div className="w-layout-grid ra-process-grid process-grid">
            {/* Block 01: Discovery & Strategy */}
            <div
              className="ra-process-block process-block _1"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
              </div>
              <p className="ra-process-count process-count">01</p>
              <div className="ra-process-content process-content">
                <h3 className="ra-process-title process-title">Discovery &amp; Strategy</h3>
                <p className="ra-process-text process-text">
                  We analyze your business goals, target audience, and technical feasibility to architect a future-proof roadmap.
                </p>
              </div>
            </div>

            {/* Block 02: Design & Architecture */}
            <div
              className="ra-process-block process-block _2"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
              </div>
              <p className="ra-process-count process-count">02</p>
              <div className="ra-process-content process-content">
                <h3 className="ra-process-title process-title">Design &amp; Architecture</h3>
                <p className="ra-process-text process-text">
                  Crafting modern, intuitive, and high-converting Figma interfaces with pixel-perfect responsive layouts.
                </p>
              </div>
            </div>

            {/* Block 03: Development & Testing */}
            <div
              className="ra-process-block process-block _3"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
              </div>
              <p className="ra-process-count process-count">03</p>
              <div className="ra-process-content process-content">
                <h3 className="ra-process-title process-title">Development &amp; Testing</h3>
                <p className="ra-process-text process-text">
                  Writing clean, modular code with modern frameworks, ensuring blazing-fast performance, SEO, and robust security.
                </p>
              </div>
            </div>

            {/* Block 04: Launch & Support */}
            <div
              className="ra-process-block process-block _4"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
              </div>
              <p className="ra-process-count process-count">04</p>
              <div className="ra-process-content process-content">
                <h3 className="ra-process-title process-title">Launch &amp; Support</h3>
                <p className="ra-process-text process-text">
                  Rigorous audits, seamless live deployment, hosting configuration, and continuous post-launch optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
