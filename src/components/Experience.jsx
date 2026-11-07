/**
 * @file Experience.jsx
 * @description Experience and Certifications section with scroll-driven GSAP scrub timeline,
 * dynamic geometry tracking, and standardized dual-class naming convention (ra-*).
 */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience(props) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const g = window.gsap || gsap;
    const st = window.ScrollTrigger || ScrollTrigger;
    if (g && st) {
      g.registerPlugin(st);
    }

    const sec = sectionRef.current;
    if (!sec) return;

    const ctx = g.context(() => {
      const columns = [leftColRef.current, rightColRef.current];

      columns.forEach((col) => {
        if (!col) return;
        const list = col.querySelector('.ra-education-list, .education-list');
        const items = col.querySelectorAll('.ra-education, .education');
        const circles = col.querySelectorAll('.ra-education-cirlce, .education-cirlce');
        const track = col.querySelector('.ra-timeline-line-track, .timeline-line-track');
        const activeLine = col.querySelector('.ra-timeline-line-active, .timeline-line-active');
        const glow = col.querySelector('.ra-timeline-line-glow, .timeline-line-glow');
        const title = col.querySelector('.ra-tilte-education, .tilte-education');
        const cornerImg = col.querySelector('.ra-image-right, .image-right');

        if (!list || items.length < 3 || circles.length < 3) return;

        const updateTrackGeometry = () => {
          if (!circles[0] || !circles[2] || !track) return;
          const listRect = list.getBoundingClientRect();
          const firstRect = circles[0].getBoundingClientRect();
          const lastRect = circles[2].getBoundingClientRect();

          const top = (firstRect.top + firstRect.height / 2) - listRect.top;
          const height = (lastRect.top + lastRect.height / 2) - (firstRect.top + firstRect.height / 2);

          track.style.top = `${top}px`;
          track.style.height = `${height}px`;
        };

        updateTrackGeometry();

        // Initial setup for scroll-scrubbed entrance
        g.set(activeLine, { scaleY: 0, transformOrigin: 'top center', force3D: true });
        g.set(glow, { opacity: 0, top: '0%', force3D: true });
        if (title) g.set(title, { opacity: 0.2, y: -20, force3D: true });
        if (cornerImg) g.set(cornerImg, { opacity: 0.2, scale: 0.85, force3D: true });

        items.forEach((item, i) => {
          const content = item.querySelector('.ra-education-meanse-data, .education-meanse-data');
          const circle = circles[i];
          const innerDot = circle?.querySelector('.ra-cicles_blue, .cicles_blue');
          const ripple = circle?.querySelector('.ra-node-ripple-pulse, .node-ripple-pulse');

          if (content) g.set(content, { opacity: 0.2, y: -20, force3D: true });
          if (circle) {
            g.set(circle, {
              scale: 0.75,
              opacity: 0.4,
              boxShadow: '0 0 0px rgba(0, 194, 255, 0)',
              borderColor: 'rgba(0, 194, 255, 0.35)',
              force3D: true
            });
          }
          if (innerDot) {
            g.set(innerDot, {
              scale: 0.8,
              opacity: 0.4,
              boxShadow: '0 0 0px rgba(0, 194, 255, 0)',
              force3D: true
            });
          }
          if (ripple) {
            g.set(ripple, { scale: 0.8, opacity: 0, force3D: true });
          }
        });

        // Scroll-Driven GSAP Scrub Timeline
        // Tied directly to scroll: unrolls as user scrolls through the section, reverses on scroll-up
        const tl = g.timeline({
          scrollTrigger: {
            trigger: col,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 1, // Smooth 1-second scrub catch-up matching ScrollSmoother
            invalidateOnRefresh: true,
            onRefresh: updateTrackGeometry
          }
        });

        // --- Step 1: Header & Corner entrance (Progress 0.0 - 1.0) ---
        if (title) {
          tl.to(title, { opacity: 1, y: 0, duration: 1.0, ease: 'power1.out' }, 0);
        }
        if (cornerImg) {
          tl.to(cornerImg, { opacity: 1, scale: 1, duration: 1.0, ease: 'power1.out' }, 0);
        }

        // --- Step 2: Milestone 1 & Node 1 lights up (Progress 0.2 - 1.5) ---
        const c0 = circles[0];
        const dot0 = c0?.querySelector('.cicles_blue');
        const rip0 = c0?.querySelector('.node-ripple-pulse');
        const item0Content = items[0]?.querySelector('.education-meanse-data');

        tl.to(c0, {
          scale: 1,
          opacity: 1,
          boxShadow: '0 0 16px rgba(0, 194, 255, 0.85)',
          borderColor: '#00C2FF',
          duration: 1.0,
          ease: 'power2.out'
        }, 0.2);

        if (dot0) {
          tl.to(dot0, {
            scale: 1.2,
            opacity: 1,
            boxShadow: '0 0 8px #00C2FF',
            backgroundColor: '#00C2FF',
            duration: 1.0,
            ease: 'power2.out'
          }, 0.2);
        }

        if (rip0) {
          tl.fromTo(rip0,
            { scale: 0.8, opacity: 0.9 },
            { scale: 2.2, opacity: 0, duration: 1.2, ease: 'power1.out' },
            0.4
          );
        }

        if (item0Content) {
          tl.to(item0Content, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 0.3);
        }

        if (glow) {
          tl.to(glow, { opacity: 1, duration: 0.6, ease: 'power1.inOut' }, 0.5);
        }

        // --- Step 3: Draw Line from Node 1 down to Node 2 (Progress 1.5 - 5.0) ---
        tl.to(activeLine, { scaleY: 0.5, duration: 3.5, ease: 'none' }, 1.5);
        if (glow) {
          tl.to(glow, { top: '50%', duration: 3.5, ease: 'none' }, 1.5);
        }

        // --- Step 4: Milestone 2 & Node 2 lights up (Progress 4.4 - 5.8) ---
        const c1 = circles[1];
        const dot1 = c1?.querySelector('.cicles_blue');
        const rip1 = c1?.querySelector('.node-ripple-pulse');
        const item1Content = items[1]?.querySelector('.education-meanse-data');

        tl.to(c1, {
          scale: 1,
          opacity: 1,
          boxShadow: '0 0 16px rgba(0, 194, 255, 0.85)',
          borderColor: '#00C2FF',
          duration: 1.0,
          ease: 'power2.out'
        }, 4.4);

        if (dot1) {
          tl.to(dot1, {
            scale: 1.2,
            opacity: 1,
            boxShadow: '0 0 8px #00C2FF',
            backgroundColor: '#00C2FF',
            duration: 1.0,
            ease: 'power2.out'
          }, 4.4);
        }

        if (rip1) {
          tl.fromTo(rip1,
            { scale: 0.8, opacity: 0.9 },
            { scale: 2.2, opacity: 0, duration: 1.2, ease: 'power1.out' },
            4.6
          );
        }

        if (item1Content) {
          tl.to(item1Content, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 4.6);
        }

        // --- Step 5: Draw Line from Node 2 down to Node 3 (Progress 5.0 - 8.5) ---
        tl.to(activeLine, { scaleY: 1.0, duration: 3.5, ease: 'none' }, 5.0);
        if (glow) {
          tl.to(glow, { top: '100%', duration: 3.5, ease: 'none' }, 5.0);
        }

        // --- Step 6: Milestone 3 & Node 3 lights up (Progress 7.9 - 9.3) ---
        const c2 = circles[2];
        const dot2 = c2?.querySelector('.cicles_blue');
        const rip2 = c2?.querySelector('.node-ripple-pulse');
        const item2Content = items[2]?.querySelector('.education-meanse-data');

        tl.to(c2, {
          scale: 1,
          opacity: 1,
          boxShadow: '0 0 16px rgba(0, 194, 255, 0.85)',
          borderColor: '#00C2FF',
          duration: 1.0,
          ease: 'power2.out'
        }, 7.9);

        if (dot2) {
          tl.to(dot2, {
            scale: 1.2,
            opacity: 1,
            boxShadow: '0 0 8px #00C2FF',
            backgroundColor: '#00C2FF',
            duration: 1.0,
            ease: 'power2.out'
          }, 7.9);
        }

        if (rip2) {
          tl.fromTo(rip2,
            { scale: 0.8, opacity: 0.9 },
            { scale: 2.2, opacity: 0, duration: 1.2, ease: 'power1.out' },
            8.1
          );
        }

        if (item2Content) {
          tl.to(item2Content, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 8.1);
        }

        // --- Step 7: Beam docks softly at bottom node (Progress 9.2 - 10.0) ---
        if (glow) {
          tl.to(glow, { opacity: 0.35, duration: 0.8, ease: 'power1.out' }, 9.2);
        }
      });
    }, sec);

    const handleResize = () => {
      st.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ==================== [ Experience & Certifications Section Start ] ==================== */}
      <section className="ra-education-data education-data ra-data-padding data-padding" id="experience" ref={sectionRef}>
        <div className="container">
          <div className="row ra-exelant-edu exelant-edu">
            {/* Left Column: Work Experience */}
            <div className="col-xl-6 col-lg-12 col-md-12" ref={leftColRef}>
              <div className="ra-education-detail education-detail">
                <div className="ra-image-right image-right">
                  <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="ra-tilte-education tilte-education">
                  <h2 className="ra-second-heading second-heading text-start">Experience</h2>
                  <p>2+ years of professional hands-on experience in web development, WordPress specialization, and digital solutions.</p>
                </div>
                <div className="ra-education-list education-list ra-has-custom-timeline has-custom-timeline">
                  {/* Continuous Animated Timeline Line Track */}
                  <div className="ra-timeline-line-track timeline-line-track">
                    <div className="ra-timeline-line-active timeline-line-active"></div>
                    <div className="ra-timeline-line-glow timeline-line-glow"></div>
                  </div>

                  {/* Experience Item 01 (Present) */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>Web Developer &amp; WordPress Specialist</p>
                          <span>Addiztech IT Solution &bull; Present</span>
                          <span className="ra-edu-location edu-location"><i className="ri-map-pin-2-line"></i> 84j Ghazali Rd, Block 2 PECHS, Karachi</span>
                        </div>
                        <div className="ra-img-education img-education">
                          <img src="assets/images/resume/addiztech-logo.png" alt="Addiztech IT Solution" className="ra-logo-addiztech logo-addiztech" width="36" height="36" loading="lazy" />
                        </div>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Leading end-to-end WordPress web development, custom theme tailoring, plugin integrations, performance optimization, and reliable client-first digital deliverables.</p>
                    </div>
                  </div>

                  {/* Experience Item 02 */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>Front-end WordPress Developer</p>
                          <span>7 Marketing (SMC-Pvt) Ltd &bull; Jan 2024 – July 2024</span>
                          <span className="ra-edu-location edu-location"><i className="ri-map-pin-2-line"></i> Plaza 57, Service Road, Bahria Phase 7, Islamabad</span>
                        </div>
                        <div className="ra-img-education img-education">
                          <img src="assets/images/resume/7marketing-logo-cyan.png" alt="7 Marketing" className="ra-logo-7marketing logo-7marketing ra-logo-dark logo-dark" width="36" height="36" loading="lazy" />
                          <img src="assets/images/resume/7marketing-logo.png" alt="7 Marketing" className="ra-logo-7marketing logo-7marketing ra-logo-light logo-light" width="36" height="36" loading="lazy" />
                        </div>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Engineered responsive, cross-browser front-end WordPress interfaces, customized core templates, improved page load speed, and converted UI designs into functional websites.</p>
                    </div>
                  </div>

                  {/* Experience Item 03 */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>Web Designer</p>
                          <span>WSM Solutions Pvt Ltd &bull; Aug 2023 – July 2024</span>
                          <span className="ra-edu-location edu-location"><i className="ri-map-pin-2-line"></i> Gulshan Batool, 13/G Road, Chishtian Mandi, Pakistan</span>
                        </div>
                        <div className="ra-img-education img-education">
                          <img src="assets/images/resume/wsm-logo.png" alt="WSM Solutions" className="ra-logo-wsm logo-wsm ra-logo-dark logo-dark" width="36" height="36" loading="lazy" />
                          <img src="assets/images/resume/wsm-logo-light.png" alt="WSM Solutions" className="ra-logo-wsm logo-wsm ra-logo-light logo-light" width="36" height="36" loading="lazy" />
                        </div>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Designed intuitive user interfaces, visual design systems, banners, and responsive layouts prioritizing user experience and consistent brand identity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Certifications */}
            <div className="col-xl-6 col-lg-12 col-md-12" ref={rightColRef}>
              <div className="ra-education-detail education-detail">
                <div className="ra-image-right image-right">
                  <img src="assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="ra-tilte-education tilte-education">
                  <h2 className="ra-second-heading second-heading text-start">Certifications</h2>
                  <p>Certified expertise in professional WordPress web development, SEO content writing, and practical e-commerce training.</p>
                </div>
                <div className="ra-education-list education-list ra-has-custom-timeline has-custom-timeline">
                  {/* Continuous Animated Timeline Line Track */}
                  <div className="ra-timeline-line-track timeline-line-track">
                    <div className="ra-timeline-line-active timeline-line-active"></div>
                    <div className="ra-timeline-line-glow timeline-line-glow"></div>
                  </div>

                  {/* Certificate 01 */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>WordPress Web Development</p>
                          <span>Learning With Earning (Pvt) Ltd. &bull; 2022</span>
                          <span className="ra-edu-location edu-location"><i className="ri-award-line"></i> ID: LWE-95895 &bull; 1.5-Month Skills Program</span>
                        </div>
                        <a href="assets/images/award/cert_20260809_125238_6fe50e3932c2.webp" target="_blank" rel="noopener noreferrer" className="ra-cert-thumb-link cert-thumb-link" title="Click to view Certificate">
                          <img src="assets/images/award/cert_20260809_125238_6fe50e3932c2.webp" alt="WordPress Certificate" className="ra-cert-thumb-img cert-thumb-img" loading="lazy" decoding="async" />
                        </a>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Comprehensive training covering WordPress core development, theme architecture, plugin ecosystems, dynamic content setups, and production site deployment.</p>
                    </div>
                  </div>

                  {/* Certificate 02 */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>SEO &amp; Content Writing</p>
                          <span>Learning With Earning (Pvt) Ltd. &bull; 2022</span>
                          <span className="ra-edu-location edu-location"><i className="ri-award-line"></i> ID: LWE-95896 &bull; 1.5-Month Skills Program</span>
                        </div>
                        <a href="assets/images/award/cert_20260809_125254_bb0a7842fd29.webp" target="_blank" rel="noopener noreferrer" className="ra-cert-thumb-link cert-thumb-link" title="Click to view Certificate">
                          <img src="assets/images/award/cert_20260809_125254_bb0a7842fd29.webp" alt="SEO Certificate" className="ra-cert-thumb-img cert-thumb-img" loading="lazy" decoding="async" />
                        </a>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Specialized training in technical SEO, search intent modeling, keyword structuring, content optimization, metadata strategy, and search engine ranking best practices.</p>
                    </div>
                  </div>

                  {/* Certificate 03 */}
                  <div className="ra-education education">
                    <div className="ra-eduction-left eduction-left">
                      <div className="ra-education-cirlce education-cirlce">
                        <div className="ra-node-ripple-pulse node-ripple-pulse"></div>
                        <div className="ra-cicles_blue cicles_blue"></div>
                      </div>
                    </div>
                    <div className="ra-education-meanse-data education-meanse-data">
                      <div className="ra-name-univer name-univer">
                        <div className="ra-detail-desc-edu detail-desc-edu">
                          <p>E-Commerce Practical Training</p>
                          <span>Punjab Board of Technical Education (PSDF) &bull; 2023</span>
                          <span className="ra-edu-location edu-location"><i className="ri-award-line"></i> 800 Hours Practical Training &bull; 95% Marks</span>
                        </div>
                        <a href="assets/images/award/cert_20260809_125035_efd63cd14e40.jpg" target="_blank" rel="noopener noreferrer" className="ra-cert-thumb-link cert-thumb-link" title="Click to view Certificate">
                          <img src="assets/images/award/cert_20260809_125035_efd63cd14e40.jpg" alt="E-Commerce Certificate" className="ra-cert-thumb-img cert-thumb-img" loading="lazy" decoding="async" />
                        </a>
                      </div>
                      <p className="ra-desc-ducation desc-ducation">Government-accredited technical qualification covering comprehensive e-commerce store setups, digital product catalogs, WooCommerce management, and online sales workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}