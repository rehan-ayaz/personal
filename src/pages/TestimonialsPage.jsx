/**
 * @file TestimonialsPage.jsx
 * @description Authentic Bran Star Layout-2 Testimonials Page.
 * Restored to 100% template structural and visual parity:
 * 1. Hero Reviews Showcase (.testimonial#testimonial) with video thumbnail, quotes, and client cards
 * 2. Client Brand Logos Carousel (.top-bg-slider)
 * 3. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';
import { testimonials, personalInfo } from '../data/portfolioData';

export default function TestimonialsPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const clientImages = [
    '/assets/images/testimonial/client-1.png',
    '/assets/images/testimonial/client-2.png',
    '/assets/images/testimonial/client-3.png',
    '/assets/images/testimonial/client-4.png',
  ];

  const brandLogos = [
    '/assets/images/hero/image-1.png',
    '/assets/images/hero/image-2.png',
    '/assets/images/hero/image-3.png',
    '/assets/images/hero/image-4.png',
    '/assets/images/hero/image-5.png',
    '/assets/images/hero/image-6.png',
    '/assets/images/hero/image-7.png',
    '/assets/images/hero/image-8.png',
    '/assets/images/hero/image-9.png',
    '/assets/images/hero/image-10.png',
  ];

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Client Reviews & Endorsements for Rehan Ayaz',
    itemListElement: testimonials.map((t, idx) => ({
      '@type': 'Review',
      position: idx + 1,
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating || 5,
        bestRating: 5,
      },
      reviewBody: t.text,
      itemReviewed: {
        '@type': 'Person',
        name: personalInfo.name,
      },
    })),
  };

  return (
    <InnerPageLayout
      title="Testimonial"
      breadcrumb="Testimonial"
      seoTitle="Client Reviews & Testimonials - Verified Results | Rehan Ayaz"
      seoDesc="Read authentic client feedback and reviews for Rehan Ayaz from business owners, agency directors, and founders across the United States, UK, UAE, and Europe."
      canonicalPath="/testimonials"
      schema={reviewSchema}
    >
      {/* ==================== [ Section 1: Authentic Testimonial Showcase ] ==================== */}
      <section className="testimonial" id="testimonial">
        <div className="test-container overflow-hidden">
          <div className="testimonial-data row align-items-center">
            {/* Left Column: Visual Mockup with Play Button */}
            <div className="col-xl-6 col-lg-6 col-md-12 data-testimonial-padding">
              <div className="image-top-data-test-left">
                <img src="/assets/images/services/bottom-left.png" alt="bottom-left" loading="lazy" />
              </div>
              <div className="image-top-data-test-right-top">
                <img src="/assets/images/about/right-peack.png" alt="right-peack" loading="lazy" />
              </div>
              <div className="image-top-data-test-right">
                <img src="/assets/images/about/right-peack.png" alt="right-peack" loading="lazy" />
              </div>
              <div className="image-top-data-test-right-bttom">
                <img src="/assets/images/about/bottom-right.png" alt="bottom-right" loading="lazy" />
              </div>
              <div className="images-data-test">
                <div className="porject-image">
                  <div className="img testimonial-image">
                    <div className="img-container">
                      <img
                        src="/assets/images/testimonial/image.png"
                        alt="Client satisfaction"
                        className="img-fluid"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <div className="button is-play youtube">
                  <span className="button-outer-circle has-scale-animation"></span>
                  <span className="button-outer-circle has-scale-animation has-delay-short"></span>
                  <span className="button-icon is-play">
                    <img src="/assets/images/testimonial/play.svg" alt="Play" className="play-image" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Client Feedback List */}
            <div className="col-xl-6 col-lg-6 col-md-12 data-testimonial-padding">
              <div className="testimonail-detail">
                <div className="top-text">
                  <h2 className="second-heading data-testimonail mb-0 zoom_in">
                    What Clients Say About Us.
                  </h2>
                  <p className="heading data-regular dark-fix-color zoom_in">
                    Authentic feedback from international founders, product managers, and enterprise
                    teams who partner with Rehan Ayaz.
                  </p>
                  <img
                    src="/assets/images/services/round-shape-serv.png"
                    alt="round-shape"
                    loading="lazy"
                  />
                </div>

                <div className="image-quete my-3">
                  <img src="/assets/images/testimonial/quete.png" alt="quote" loading="lazy" />
                </div>

                <div className="client-says zoom_in">
                  <div className="testimonial-detail">
                    {testimonials.map((test, idx) => {
                      const avatar = clientImages[idx % clientImages.length];
                      return (
                        <div className="main-testimonail-data mb-4 pb-3 border-bottom" key={test.id}>
                          <p className="client-review">"{test.text}"</p>
                          <div className="client-name-detail d-flex align-items-center gap-3">
                            <div className="client-image">
                              <img
                                src={avatar}
                                alt={test.name}
                                style={{ width: '56px', height: '56px', borderRadius: '50%' }}
                                loading="lazy"
                              />
                            </div>
                            <div className="name-design">
                              <p className="fw-bold m-0">{test.name}</p>
                              <span className="dark-fix-color">
                                ({test.role} — {test.country})
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Client Logos Marquee ] ==================== */}
      <section className="top-bg-slider data-padding">
        <h2 className="d-none">Trusted Brand Partners</h2>
        <div className="logos">
          <div className="logos-slide">
            {brandLogos.concat(brandLogos).map((logo, lIdx) => (
              <img
                src={logo}
                alt="Brand Partner"
                key={lIdx}
                loading="lazy"
                style={{ maxHeight: '40px', objectFit: 'contain' }}
              />
            ))}
          </div>
          <div className="data-gradient"></div>
        </div>
      </section>

      {/* ==================== [ Section 3: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
