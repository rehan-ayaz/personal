import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * @file WorkProcess.jsx
 * @description Work Process ("Our Process") interactive section featuring:
 * 1. 2-column responsive header: Left-aligned "Our Process" heading, Right-aligned description.
 * 2. 1-by-1 card stacking into the exact same center position with dynamic offset calculations.
 * 3. Cards 1, 2, 3, 4 stack cleanly in 1 spot, followed by a smooth unfold into 4 grid columns.
 * 4. Ticker-synchronized pinning in 100% lockstep with GSAP ScrollSmoother.
 */
export default function WorkProcess() {
  const spacerRef = useRef(null);
  const pinnedBoxRef = useRef(null);
  const [pinDistance, setPinDistance] = useState(2600);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const g = window.gsap || gsap;
    const spacer = spacerRef.current;
    const pinnedBox = pinnedBoxRef.current;
    if (!spacer || !pinnedBox) return;

    const grid = pinnedBox.querySelector('.process-grid');
    const block1 = pinnedBox.querySelector('.process-block._1');
    const block2 = pinnedBox.querySelector('.process-block._2');
    const block3 = pinnedBox.querySelector('.process-block._3');
    const block4 = pinnedBox.querySelector('.process-block._4');

    if (!grid || !block1 || !block2 || !block3 || !block4) return;

    const isDesktop = () => window.innerWidth > 991;

    const dist = 2600;
    setPinDistance(dist);

    const tl = g.timeline({ paused: true });

    // Function to calculate exact pixel offsets to center every card in the container
    const computeOffsets = () => {
      const gridW = grid.offsetWidth;
      const cardW = block1.offsetWidth;
      const centerTarget = (gridW - cardW) / 2;
      return [
        centerTarget - block1.offsetLeft,
        centerTarget - block2.offsetLeft,
        centerTarget - block3.offsetLeft,
        centerTarget - block4.offsetLeft,
      ];
    };

    const setupTimeline = () => {
      tl.clear();
      if (!isDesktop()) {
        g.set([block1, block2, block3, block4], { clearProps: 'all' });
        return;
      }

      const offsets = computeOffsets();

      // Initial positions: all 4 cards horizontally centered
      // Card 1 starts at center, Cards 2, 3, 4 start submerged at y: 380 with opacity: 0
      g.set(block1, { x: offsets[0], y: 0, opacity: 1, scale: 1, force3D: true });
      g.set(block2, { x: offsets[1], y: 380, opacity: 0, scale: 1, force3D: true });
      g.set(block3, { x: offsets[2], y: 380, opacity: 0, scale: 1, force3D: true });
      g.set(block4, { x: offsets[3], y: 380, opacity: 0, scale: 1, force3D: true });

      // Step 1: 0.0 -> 1.4: Card 1 dwells in center
      tl.to(block1, { y: 0, opacity: 1, duration: 1.4, ease: 'power1.out' }, 0);

      // Step 2: 1.4 -> 3.0: Card 2 rises into center view and stacks over Card 1
      tl.to(block2, { y: 0, opacity: 1, duration: 1.6, ease: 'power2.out' }, 1.4);

      // Step 3: 3.0 -> 4.6: Card 3 rises into center view and stacks over Card 2
      tl.to(block3, { y: 0, opacity: 1, duration: 1.6, ease: 'power2.out' }, 3.0);

      // Step 4: 4.6 -> 6.2: Card 4 rises into center view and stacks over Card 3
      tl.to(block4, { y: 0, opacity: 1, duration: 1.6, ease: 'power2.out' }, 4.6);

      // Step 5: 6.2 -> 7.6: Dwell / Hold state where all 4 cards are stacked together in 1 single place!
      tl.set({}, {}, 7.6);

      // Step 6: 7.6 -> 9.2: All 4 cards smoothly glide and spread out into 4 grid columns
      tl.to(
        [block1, block2, block3, block4],
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: 'power2.inOut',
        },
        7.6
      );

      // Step 7: 9.2 -> 10.5: Hold state so user can view all 4 unfolded cards before unpinning
      tl.set({}, {}, 10.5);
    };

    setupTimeline();

    // Ticker-synchronized pinning loop: executes in lockstep with ScrollSmoother
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

      // Active card highlight indicator based on progress
      const blocks = [block1, block2, block3, block4];
      let activeIdx = -1;
      if (progress < 0.14) activeIdx = 0;
      else if (progress < 0.30) activeIdx = 1;
      else if (progress < 0.46) activeIdx = 2;
      else if (progress < 0.76) activeIdx = 3;
      else activeIdx = -1; // all unfolded

      blocks.forEach((b, i) => {
        if (activeIdx === -1) {
          b.classList.remove('is-active');
        } else if (i === activeIdx) {
          b.classList.add('is-active');
        } else {
          b.classList.remove('is-active');
        }
      });
    };

    g.ticker.add(updatePin);

    const handleResize = () => {
      if (!isDesktop()) {
        setPinDistance(0);
        pinnedBox.style.transform = '';
        g.set([block1, block2, block3, block4], { clearProps: 'all' });
      } else {
        setPinDistance(dist);
        setupTimeline();
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
          {/* Section Header: Left Heading, Right Description */}
          <div className="ra-process-header section-header-split d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-4 mb-5">
            <div className="ra-process-header-left">
              <h2 className="ra-second-heading second-heading m-0 text-start">
                Our <span className="ra-colored colored">Process</span>
              </h2>
            </div>
            <div className="ra-process-header-right">
              <p
                className="ra-heading-descr heading-descr m-0 text-start text-md-end"
                style={{ maxWidth: '480px', fontSize: '16px', lineHeight: '26px' }}
              >
                A structured, results-driven engineering roadmap focused on technical precision, performance, and scalable digital solutions.
              </p>
            </div>
          </div>

          {/* 4 Process Blocks Grid */}
          <div className="w-layout-grid ra-process-grid process-grid">
            {/* Block 01: Discovery & Strategy */}
            <div
              className="ra-process-block process-block _1"
              style={{
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
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
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
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
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
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
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="ra-image-right image-right">
                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
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
