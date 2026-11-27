import React, { useEffect, useRef, useState } from "react";
import ButtonLabel from "./ButtonLabel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolioData";

export default function SelectedWorkSection() {
  const spacerRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const plusIconRef = useRef(null);
  const [pinDistance, setPinDistance] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const g = window.gsap || gsap;
    const stPlugin = window.ScrollTrigger || ScrollTrigger;
    if (g && stPlugin) {
      g.registerPlugin(stPlugin);
    }

    const workSec = sectionRef.current;
    const track = trackRef.current;
    const spacer = spacerRef.current;
    const plusIcon = plusIconRef.current;
    if (!workSec || !track || !spacer) return;

    const cards = workSec.querySelectorAll(".js-work-card");
    const animatedLines = new Set();

    const isMobileView = () => window.innerWidth < 768;

    // Initial setup matching smooth responsive parameters
    const resetInitialCardStates = () => {
      const mobile = isMobileView();
      cards.forEach((card, t) => {
        const inner = card.querySelector(".js-work-card-inner");
        const vLine = card.querySelector(".js-card-line");
        const hLine = card.querySelector(".js-card-line-horizontal");

        if (inner) {
          // On desktop, card 0 starts partially revealed, others submerged at y: 550
          const initialY = mobile ? 0 : (t === 0 ? 30 : 550);
          g.set(inner, { y: initialY, opacity: 1, force3D: true });
        }
        if (vLine) {
          g.set(vLine, { scaleY: mobile ? 1 : 0, transformOrigin: "top", force3D: true });
        }
        if (hLine) {
          g.set(hLine, { scaleX: mobile ? 1 : 0, transformOrigin: "left", force3D: true });
        }
      });

      if (plusIcon) {
        g.set(plusIcon, { rotation: 0, force3D: true });
      }
    };

    resetInitialCardStates();

    const calculateDistance = () => {
      if (isMobileView()) {
        setPinDistance(0);
        return 0;
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth);
      setPinDistance(dist);
      return dist;
    };

    calculateDistance();

    // Ticker-synchronized pinning loop: executes in perfect lockstep with ScrollSmoother
    const updatePin = () => {
      const mobile = isMobileView();
      if (mobile) {
        workSec.style.transform = "none";
        track.style.transform = "none";
        cards.forEach((card) => {
          const inner = card.querySelector(".js-work-card-inner");
          if (inner) inner.style.transform = "none";
        });
        return;
      }

      const maxDist = Math.max(0, track.scrollWidth - window.innerWidth);
      const start = spacer.offsetTop;
      const end = start + maxDist;
      const sy = window.smoother ? window.smoother.scrollTop() : window.scrollY;

      let currentS = 0;
      let progress = 0;

      if (sy < start) {
        workSec.style.transform = "translate3d(0, 0px, 0)";
        track.style.transform = "translate3d(0px, 0, 0)";
        currentS = 0;
        progress = 0;
      } else if (sy <= end) {
        const y = sy - start;
        progress = maxDist > 0 ? (sy - start) / maxDist : 0;
        currentS = progress * maxDist;
        workSec.style.transform = `translate3d(0, ${y}px, 0)`;
        track.style.transform = `translate3d(${-currentS}px, 0, 0)`;
      } else {
        const y = maxDist;
        progress = 1;
        currentS = maxDist;
        workSec.style.transform = `translate3d(0, ${y}px, 0)`;
        track.style.transform = `translate3d(${-maxDist}px, 0, 0)`;
      }

      // Rotate decorative plus icon at the end of the showcase
      if (plusIcon) {
        g.set(plusIcon, { rotation: 360 * progress, force3D: true });
      }

      // Smooth Card Entrance Animation:
      // Uses the exact cubic formula: y = 550 * (1 - (1 - Math.pow(1 - (1.2 - r) / 0.7, 3)))
      const screenW = window.innerWidth;
      const A = 0.5 * screenW; // 50vw title block
      const R = 0.5 * screenW; // 50vw card width

      cards.forEach((card, t) => {
        const inner = card.querySelector(".js-work-card-inner");
        const vLine = card.querySelector(".js-card-line");

        // Relative horizontal position across screen (0 = left edge, 0.5 = center, 1.0 = right edge)
        const r = (A + t * R + R / 2 - currentS) / screenW;

        if (inner) {
          let targetY = 0;
          if (r > 1.2) {
            targetY = 550;
          } else if (r > 0.5) {
            const p = (1.2 - r) / 0.7; // 0 to 1
            const eased = 1 - Math.pow(1 - p, 3);
            targetY = 550 * (1 - eased);
          } else {
            // Reached center and moving to left: remains perfectly level at y = 0
            targetY = 0;
          }
          g.set(inner, { y: targetY, force3D: true });
        }

        // Draw vertical hairline divider when card enters viewport
        if (vLine) {
          if (r < 1.05 && !animatedLines.has(t)) {
            animatedLines.add(t);
            g.to(vLine, { scaleY: 1, duration: 1.2, ease: "power2.out", overwrite: "auto" });
          } else if (r >= 1.2 && animatedLines.has(t)) {
            animatedLines.delete(t);
            g.set(vLine, { scaleY: 0, overwrite: "auto" });
          }
        }
      });
    };

    g.ticker.add(updatePin);

    const handleResize = () => {
      calculateDistance();
      resetInitialCardStates();
      if (stPlugin) stPlugin.refresh();
    };

    window.addEventListener("resize", handleResize);

    const refreshTimer = setTimeout(() => {
      calculateDistance();
      if (stPlugin) stPlugin.refresh();
    }, 600);

    return () => {
      g.ticker.remove(updatePin);
      window.removeEventListener("resize", handleResize);
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <div
      ref={spacerRef}
      className="pin-spacer work-pin-spacer relative w-full"
      style={{ paddingBottom: `${pinDistance}px` }}
    >
      <div
        ref={sectionRef}
        id="work-section"
        className="relative w-full min-h-screen max-md:overflow-visible md:min-h-dvh md:h-dvh md:overflow-hidden"
      >
        <div id="project" style={{ position: "absolute", top: 0, left: 0 }} />
        <div className="work-viewport-outer">
          <div className="work-viewport-inner">
            <div className="work-viewport-center">
              <div ref={trackRef} className="work-track">
                {/* Title Pinned Block */}
                <div className="title-pinned-block">
                  <div className="title-block">
                    <h2 className="section-main-heading">
                      Selected work <br />&amp; explorations
                    </h2>
                    <div className="button_wrapper">
                      <a
                        className="btn button-text btn-main" data-button-motion
                        href="/projects"
                        style={{ textDecoration: "none" }}
                      >
                        <ButtonLabel>Explore All Work</ButtonLabel>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Real Project Cards - Animated Entrance */}
                {projects.map((proj) => (
                  <div key={proj.id} className="js-work-card">
                    <div className="js-card-line" />
                    <div className="js-card-line-horizontal" />
                    <div className="js-work-card-inner">
                      <div className="card-content-box">
                        <a
                          className="project-image-link"
                          href={`/projects/${proj.slug}`}
                          title={proj.title}
                        >
                          <img
                            alt={proj.title}
                            loading="lazy"
                            className="d-none d-md-block"
                            src={proj.desktopImg}
                          />
                          <img
                            alt={proj.title}
                            loading="lazy"
                            className="d-block d-md-none"
                            src={proj.mobileImg}
                          />
                        </a>
                        <div className="project-meta-box">
                          <h3 className="project-title">{proj.title}</h3>
                          <p className="project-desc">{proj.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Final CTA Card with Rotating Plus Icon */}
                <div className="js-work-card d-flex align-items-center justify-content-center">
                  <div className="js-card-line" />
                  <div className="js-card-line-horizontal" />
                  <div className="js-work-card-inner w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="cta-final-card">
                      <h3 className="cta-final-heading text-center mx-auto">
                        Discover our complete digital experiences.
                      </h3>
                      <div className="button_wrapper text-center mx-auto">
                        <a
                          href="/projects"
                          className="btn button-text btn-main cta-final-btn" data-button-motion
                          style={{ textDecoration: "none" }}
                        >
                          <ButtonLabel>View All Projects &rarr;</ButtonLabel>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative End Divider & Rotating Plus Icon */}
                  <div className="absolute right-0 top-0 bottom-0 h-dvh w-px pointer-events-none z-20 hidden md:block">
                    <div className="absolute top-0 left-0 h-full w-full bg-black/10 dark:bg-white/10" />
                    <svg
                      ref={plusIconRef}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -left-[6px] top-1/2 -translate-y-1/2 overflow-visible z-30"
                    >
                      <line x1="7" y1="0" x2="7" y2="14" strokeWidth="1.5" stroke="currentColor" className="text-black dark:text-white" />
                      <line x1="0" y1="7" x2="14" y2="7" strokeWidth="1.5" stroke="currentColor" className="text-black dark:text-white" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
