/**
 * @file Pricing.jsx
 * @description Pricing plans component with transparent service packages and
 * standardized dual-class naming convention (ra-*).
 */
import React, { useEffect, useRef } from 'react';
import ButtonLabel from './ButtonLabel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function Pricing() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const animation = window.gsap || gsap;
    const splitText = window.SplitText || SplitText;
    animation.registerPlugin(window.ScrollTrigger || ScrollTrigger, splitText);

    const context = animation.context(() => {
      splitText.create(heading, {
        type: 'lines,words,chars',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: ({ chars }) => {
          const wrapper = section.closest('#smooth-wrapper');
          const scroller = window.smoother?.wrapper() === wrapper ? wrapper : window;
          return animation.fromTo(chars, { opacity: 0.3, x: -7 }, {
            scrollTrigger: { trigger: heading, scroller, start: 'top 92%', end: 'top 60%', scrub: 1 },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
          });
        },
      });
    }, section);

    const revealElements = section.querySelectorAll('.ra-fade-down, .ra-zoom-in');
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 }) : null;
    for (const element of revealElements) {
      if (observer) observer.observe(element);
      else element.classList.add('show');
    }

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return (
    <>
        {/* ==================== [ Pricing section Start ] ==================== */}
        <section className="ra-pricing pricing ra-data-padding data-padding" id="pricing" ref={sectionRef} style={{ '--princ-box': 'transparent' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="ra-heading-data-princing heading-data-princing">
                            {/* The shared component initializes these animations for every route. */}
                            <h2 className="ra-second-heading second-heading" ref={headingRef} data-split-initialized="true">My Pricing Plans</h2>
                            <p className="ra-heading-descr heading-descr ra-fade-down">Transparent and competitive pricing packages tailored for businesses, startups, and personal projects.</p>
                            <img src="/assets/images/about/round-shape.png" alt="" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
                <div className="row pricing-detail">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box ra-zoom-in">
                            <div className="ra-image-right image-right">
                                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Starter</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$230</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">5 Pages Website</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Responsive Design for all devices</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Fast Loading Design</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form Integration</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">1 Month Free Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Starter%20Plan%20(%24230)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" data-button-motion style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><ButtonLabel>Let's Start with Starter</ButtonLabel></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box ra-zoom-in">
                            <div className="ra-image-right image-right">
                                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Standard</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$599</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Up to 15 Pages Website</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Custom Layout Design</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Premium Theme Setup</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form + Map Integration</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Image &amp; Speed Optimization</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Priority Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Standard%20Plan%20(%24599)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" data-button-motion style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><ButtonLabel>Let's Start with Standard</ButtonLabel></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="ra-pricing-box pricing-box ra-zoom-in">
                            <div className="ra-image-right image-right">
                                <img src="/assets/images/award/top-right.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <p className="ra-type-box type-box">Premium</p>
                                <div className="ra-price-tag price-tag">
                                    <p className="ra-price-number price-number">$1500</p>
                                    <span className="ra-type-box type-box">/one time</span>
                                </div>
                                <div className="ra-line-data line-data"></div>
                                <div className="ra-list-prince list-prince">
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">20+ Custom Pages</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Multi-Language Support</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Premium Theme &amp; Plugins</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Contact Form + Map + Live Chat</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">Full eCommerce Functionality</p>
                                    </div>
                                    <div className="ra-clicke-area clicke-area">
                                        <img src="/assets/images/award/click.png" alt="check-icon" loading="lazy" decoding="async" />
                                        <p className="ra-availble availble">6 Months Dedicated Support</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/923260735090?text=Hello%2C%20I%20want%20to%20book%20the%20Premium%20Plan%20(%241500)." target="_blank" rel="noopener noreferrer" className="ra-btn-princ btn-princ" data-button-motion style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}><ButtonLabel>Let's Start with Premium</ButtonLabel></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
