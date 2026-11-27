/**
 * @file ServicesPage.jsx
 * @description Authentic Bran Star Layout-2 Services overview page.
 * Restored to 100% template structural and visual parity:
 * 1. Services Experience & Trust Banner (.services-exper)
 * 2. Detailed Alternating Services Grid (.data-section) with badges, learn more links, tags, and mockup visuals
 * 3. 3-Tier Pricing Packages (.pricing)
 * 4. Dual-Track Marquee Ribbon (.slider-logo)
 * 5. Recent Projects Showcase (.project)
 * 6. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import MarqueeRibbon from '../components/MarqueeRibbon';
import Pricing from '../components/Pricing';
import ContactCtaSection from '../components/ContactCtaSection';
import { services, projects, personalInfo } from '../data/portfolioData';

const serviceImages = {
  'web-development': 'responsive-website.webp',
  'ai-automation': 'ai-workflow.webp',
  'saas-development': 'saas-dashboard.webp',
  'mobile-apps': 'mobile-delivery-app.webp',
};

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rehan Ayaz Professional Web Development & Digital Engineering Services',
    itemListElement: services.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      description: s.shortDesc,
      url: `https://rehanayaz.com/services/${s.slug}`,
    })),
  };

  return (
    <InnerPageLayout
      title="Services"
      breadcrumb="Services"
      seoTitle="Services - Web Development, WordPress, SaaS & AI Solutions | Rehan Ayaz"
      seoDesc="Explore professional digital engineering services by Rehan Ayaz: custom WordPress development, high-performance React web apps, SaaS platforms, and speed optimization."
      canonicalPath="/services"
      schema={serviceListSchema}
    >
      {/* ==================== [ Section 1: Experience & Trust Banner ] ==================== */}
      <section className="services-exper" id="services-exper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-data-princing">
                <h2 className="second-heading zoom_in">
                  A high-performing full-stack web developer &amp; WordPress engineer — delivering
                  bespoke, resilient digital products with clean architecture and lasting client
                  partnerships.
                </h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="ra-stats-layout">
            <div className="main-second-heading-data">
              <p className="left-dertive">
                We turn ambitious technical roadmaps into high-converting digital products —
                engineered for speed, reliability, and measurable business growth.
              </p>
            </div>

            <div className="ra-stats-content design-exper-sciot">
              <div className="expeinece-area expeinece-area-coun zoom_in">
                <div className="number-ex">
                  <div className="dot"></div>
                  <p className="expre-number-pot counter">
                    <span className="expre-number-pot min-js count">140</span>+
                  </p>
                </div>
                <div className="name-of-exper">
                  <p>Projects Completed</p>
                  <span>[ Good! ]</span>
                </div>
              </div>

              <div className="expeinece-area expeinece-area-coun zoom_in">
                <div className="number-ex">
                  <div className="dot"></div>
                  <p className="expre-number-pot counter">
                    <span className="expre-number-pot min-js count">6</span>+
                  </p>
                </div>
                <div className="name-of-exper">
                  <p>Years of Experience</p>
                  <span>[ Awesome! ]</span>
                </div>
              </div>

              <div className="expeinece-area expeinece-area-coun zoom_in">
                <div className="number-ex">
                  <div className="dot"></div>
                  <p className="expre-number-pot counter">
                    <span className="expre-number-pot min-js count">99</span>%
                  </p>
                </div>
                <div className="name-of-exper">
                  <p>Client Satisfaction</p>
                  <span>[ Amazing! ]</span>
                </div>
              </div>

              <div className="expeinece-area expeinece-area-coun zoom_in">
                <div className="number-ex">
                  <div className="dot"></div>
                  <p className="expre-number-pot counter">
                    <span className="expre-number-pot min-js count">90</span>+
                  </p>
                </div>
                <div className="name-of-exper">
                  <p>5-Star Reviews</p>
                  <span>[ Nice! ]</span>
                </div>
              </div>
            </div>

            <div className="ra-stats-visual expe-skill-data">
              <div className="img expe-skill-data-mock">
                <div className="img-container">
                  <img
                    src="/assets/images/services/development-capabilities.webp"
                    alt="Development capabilities"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Layout-2 Alternating Services Grid ] ==================== */}
      <section className="data-section" id="data-section">
        {services.map((srv, index) => {
          const paddedNum = String(index + 1).padStart(2, '0') + '.';
          const isLast = index === services.length - 1;

          return (
            <div
              className={`border-data-section ${isLast ? 'border-services-bottom' : ''}`}
              key={srv.id}
            >
              <div className="container">
                <div className="row data-services-lottled align-items-center">
                  <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                    <div className="left-detail-data">
                      <p className="number-services-dotedfe">{paddedNum}</p>
                      <div className="data-right-detail-service">
                        <h2 className="title-services-misted">{srv.title.toUpperCase()}</h2>
                        <p className="title-services-desc">{srv.fullDesc || srv.shortDesc}</p>
                        <Link to={`/services/${srv.slug}`} className="btn-learn text-decoration-none" data-button-motion>
                          <ButtonLabel>Learn More</ButtonLabel>
                        </Link>
                        <div className="box-learn-data mt-4">
                          {(srv.techStack || []).slice(0, 5).map((tech, tIdx) => (
                            <span className="name-contru" key={tIdx}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="image-sep-services">
                      <div className="img services-scotted-detail-image">
                        <div className="img-container">
                          <img
                            src={`/assets/images/services/${serviceImages[srv.slug]}`}
                            alt={`${srv.title} service visual`}
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ==================== [ Section 3: Pricing Packages ] ==================== */}
      <Pricing />

      {/* ==================== [ Section 4: Dual-Track Marquee Ribbon ] ==================== */}
      <MarqueeRibbon />

      {/* ==================== [ Section 5: Recent Projects Preview ] ==================== */}
      <section className="project data-padding pb-0" id="project">
        <div className="container">
          <div className="row project-top align-items-center mb-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-design">
                <h2 className="second-heading mb-0 fade_down">Our Recent Projects.</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="data-left">
                <span className="heading fade_down">
                  See examples of custom WordPress builds and a WooCommerce store with secure
                  checkout and customer accounts.
                </span>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {projects.slice(0, 3).map((prj, pIdx) => (
              <div className="col-lg-4 col-md-6" key={prj.id}>
                <Link
                  to={`/projects/${prj.slug}`}
                  className="data-project-detail-made text-decoration-none d-block h-100"
                >
                  <div className="project-slider-image">
                    <div className="img image-project-data">
                      <div className="img-container">
                        <img
                          src={prj.desktopImg}
                          alt={prj.title}
                          className="img-fluid w-100"
                          style={{ minHeight: '260px', objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-data-cond">
                    <div className="num-project-slider">
                      <h3>{String(pIdx + 1).padStart(2, '0')}</h3>
                      <img src="/assets/images/project/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="name-slider-project">
                      <h3>{prj.title}</h3>
                      <div className="detail-data-main">
                        <span className="name-contru">{prj.category}</span>
                        <span className="name-contru">{prj.tag}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== [ Section 6: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
