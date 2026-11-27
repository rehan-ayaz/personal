/**
 * @file ServiceDetailPage.jsx
 * @description Authentic Bran Star Layout-2 Service Detail page.
 * Restored to 100% template structural and visual parity:
 * 1. 2-Column Split Layout (.services-detail-seprate#seprate-services)
 *    - Left 8-col: Headline, overview, hero image (image-under.png), 6 process cards, 2 sub-images (image-under-1.png, image-under-2.png), benefit checklist (arrow-tic.png), interactive FAQ accordion
 *    - Right 4-col sticky sidebar: "More Services" nav widget (arrow-1.png/arrow-hover.png) and "Get In Touch" direct card
 * 2. Dual-Track Marquee Ribbon (.slider-logo)
 * 3. Relevant Case Studies Showcase (.project)
 * 4. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { useParams, Link, Navigate } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import MarqueeRibbon from '../components/MarqueeRibbon';
import ContactCtaSection from '../components/ContactCtaSection';
import { services, projects, personalInfo } from '../data/portfolioData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const currentService = services.find((s) => s.slug === slug) || services[0];
  const [openFaq, setOpenFaq] = useState(0);

  if (!currentService) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjectList = projects.filter(
    (p) =>
      currentService.relatedProjects?.includes(p.slug) ||
      currentService.relatedProjects?.includes(p.id)
  );

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: currentService.title,
    description: currentService.fullDesc || currentService.shortDesc,
    provider: {
      '@type': 'Person',
      name: personalInfo.name,
      url: 'https://rehanayaz.com/',
    },
    serviceType: currentService.category,
    url: `https://rehanayaz.com/services/${currentService.slug}`,
  };

  const defaultProcess = [
    {
      title: 'Discovery Research:',
      desc: 'We start by diving deep into your business, target audience, and goals — architecting a solution that truly reflects your brand.',
    },
    {
      title: 'Custom Architecture:',
      desc: 'Clean modular code and database schemas engineered for sub-second responses, security, and effortless horizontal scaling.',
    },
    {
      title: 'Figma & UI Prototype:',
      desc: 'We craft intuitive wireframes and interactive prototypes to bring your vision to life, ensuring a seamless user experience.',
    },
    {
      title: 'SEO & Core Web Vitals:',
      desc: 'Every page is engineered with semantic metadata, structured schemas, asset compression, and 90+ PageSpeed benchmarks.',
    },
    {
      title: 'Testing & Launch:',
      desc: 'Meticulous cross-browser and cross-device testing to guarantee zero regressions, SSL security, and flawless performance.',
    },
    {
      title: 'Support & Maintenance:',
      desc: 'Launch is just the beginning. We provide continuous monitoring, regular updates, and priority technical assistance.',
    },
  ];

  const processItems = currentService.process?.length >= 4 ? currentService.process : defaultProcess;

  const faqs = currentService.faqs?.length
    ? currentService.faqs
    : [
        {
          q: 'Curious what a pro web developer can do for your brand?',
          a: 'Crafting beautiful, high-performance web experiences — modern React apps, custom WordPress themes, eCommerce platforms, and speed optimization all in one seamless package.',
        },
        {
          q: 'Do you offer custom API and database architecture as well?',
          a: 'Yes. I design robust RESTful and GraphQL APIs, integrate third-party webhooks, configure PostgreSQL/MySQL databases, and ensure airtight security.',
        },
        {
          q: 'Will my website or application be optimized for Google search?',
          a: 'Absolutely. Every build follows Google Technical SEO guidelines, includes Schema.org markup, semantic HTML5, XML sitemaps, and optimized Core Web Vitals.',
        },
        {
          q: 'What is your typical project timeline and communication process?',
          a: 'Most standard projects take between 2 to 4 weeks depending on scope. I provide weekly milestone builds and direct communication via WhatsApp and Slack.',
        },
      ];

  return (
    <InnerPageLayout
      title={currentService.title}
      breadcrumb={currentService.title}
      parentLink="/services"
      parentTitle="Services"
      seoTitle={`${currentService.title} - Professional Engineering | Rehan Ayaz`}
      seoDesc={currentService.shortDesc}
      canonicalPath={`/services/${currentService.slug}`}
      schema={serviceSchema}
    >
      {/* ==================== [ Section 1: 2-Column Split Service Detail ] ==================== */}
      <section className="services-detail-seprate" id="seprate-services">
        <div className="container">
          <div className="row data-page-service">
            {/* Left 8-Column Main Content */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="heading-data-princing">
                <h2 className="second-heading zoom_in">
                  Developing high-impact digital solutions and custom architectures that elevate your
                  brand and captivate your audience.
                </h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>

              <p className="text-services-descr fade_down">
                {currentService.fullDesc || currentService.shortDesc}
              </p>
              <p className="text-services-descr fade_down mt-4">
                In today's competitive landscape, your digital product is often the first and most
                lasting impression of your business. That's why I focus on crafting custom,
                accessible, and blazing-fast web platforms that not only look remarkable but drive
                exceptional conversion rates.
              </p>

              {/* Main Service Hero Mockup */}
              <div className="img services-main-detail-img">
                <div className="img-container">
                  <img
                    src="/assets/images/services/image-under.png"
                    alt={currentService.title}
                    className="img-fluid w-100"
                    loading="eager"
                  />
                </div>
              </div>

              <h2 className="services-sec-heading-sec fade_down">Our Engineering Process:</h2>
              <p className="text-services-descr text-start">
                We start by understanding your goals through discovery and research, then craft
                prototypes, build tailored solutions, ensure full responsiveness, optimize for SEO,
                and deliver seamless testing, launch, and ongoing support.
              </p>

              {/* 6 Process Cards Grid */}
              <div className="box-design-services-under">
                {processItems.map((prc, idx) => (
                  <div className="design-box-project zoom_in" key={idx}>
                    <h3 className="data-font">{prc.title || prc.step}</h3>
                    <span className="data-desc-font">{prc.desc}</span>
                  </div>
                ))}
              </div>

              {/* 2 Detail Sub-Images */}
              <div className="box-image-design row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="detail-image">
                    <div className="img-container">
                      <img
                        src="/assets/images/services/image-under-1.png"
                        alt="Process wireframes"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="detail-image img">
                    <div className="img-container">
                      <img
                        src="/assets/images/services/image-under-2.png"
                        alt="Testing and optimization"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-services-descr text-start">
                Every project is built from scratch with clean, modular architecture — eliminating
                bloated plugins, guaranteeing smooth interactions, and ensuring your business is
                equipped with a rock-solid digital foundation that stands the test of time.
              </p>

              {/* Why Choose Us & Checkmarks */}
              <div className="sec-text-desc">
                <h3 className="services-sec-heading-sec fade_down">
                  Why Choose Rehan Ayaz for Your Project?
                </h3>
              </div>
              <p className="text-services-descr text-start">
                We craft custom, user-focused web products that are fast, mobile-friendly, and
                SEO-optimized — engineered to deliver an exceptional experience and drive real
                business results.
              </p>

              <div className="data-mail-all">
                <div className="peralax-data-seted fade_down">
                  <div className="image-tick">
                    <img src="/assets/images/services/arrow-tic.png" alt="check" />
                  </div>
                  <div className="text-tick">
                    <h2 className="data-font-sky">Tailored Engineering:</h2>
                    <span className="data-desc-font">
                      Each solution is uniquely crafted to reflect your brand identity, business
                      logic, and specific audience needs.
                    </span>
                  </div>
                </div>

                <div className="peralax-data-seted fade_down">
                  <div className="image-tick">
                    <img src="/assets/images/services/arrow-tic.png" alt="check" />
                  </div>
                  <div className="text-tick">
                    <h2 className="data-font-sky">Delivering Speed &amp; Security:</h2>
                    <span className="data-desc-font">
                      Sub-second load times, 90+ Core Web Vitals scores, clean semantic HTML, and
                      strict security hardening.
                    </span>
                  </div>
                </div>

                <div className="peralax-data-seted fade_down">
                  <div className="image-tick">
                    <img src="/assets/images/services/arrow-tic.png" alt="check" />
                  </div>
                  <div className="text-tick">
                    <h2 className="data-font-sky">Mobile-First Responsiveness:</h2>
                    <span className="data-desc-font">
                      In a mobile-first world, we deliver sleek, responsive designs that look
                      impeccable and convert on every screen size.
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-services-descr text-start">
                Turn your web presence into your hardest-working revenue asset. Whether starting
                fresh or redesigning an existing portal, I am ready to bring your roadmap to life.
              </p>

              {/* Service FAQs Accordion */}
              <div className="faq-servicece-title">
                <h2 className="services-sec-heading-sec mb-0">Frequently Asked Questions</h2>
              </div>
              <div className="faq-data-services">
                {faqs.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div
                      className={`faq-services-question ${isOpen ? 'active' : ''}`}
                      key={fIdx}
                      onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <button type="button" className="question-data-faq" aria-expanded={isOpen}>
                        <span className="rount-services-arrow" aria-hidden="true">
                          <i
                            className={
                              isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'
                            }
                          ></i>
                        </span>
                        <span className="question-services">{faq.q}</span>
                      </button>
                      {isOpen && <p className="answer-question-faq">{faq.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 4-Column Sticky Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12">
              <div className="right-services-data-tickey">
                <p className="services-sec-heading-sec">More Services:</p>
                <div className="box-design-faq">
                  {services.map((s, idx) => {
                    const isCurrent = s.slug === currentService.slug;
                    const paddedNum = String(idx + 1).padStart(2, '0');
                    return (
                      <Link
                        to={`/services/${s.slug}`}
                        className={`data-faq-join text-decoration-none ${
                          idx === services.length - 1 ? 'border-0 pb-0' : ''
                        }`}
                        key={s.id}
                      >
                        <div className="data-name-faq-num">
                          <h2>{paddedNum}</h2>
                          <h2
                            style={{
                              color: isCurrent ? 'var(--theme-data)' : undefined,
                            }}
                          >
                            {s.title}
                          </h2>
                        </div>
                        <div className="image-faq-data">
                          <img
                            src="/assets/images/faq/arrow-1.png"
                            className="data-arrow"
                            alt="arrow-1"
                          />
                          <img
                            src="/assets/images/faq/arrow-hover.png"
                            className="data-hider"
                            alt="arrow-hover"
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Direct Consultation Box matching Layout-2 */}
                <div className="get-touch-design-box">
                  <Link to="/" className="logo-service text-decoration-none">
                    <p>Rehan</p> Ayaz
                  </Link>
                  <p className="services-sec-heading-sec mb-4">
                    Reach out to get started about your design and development needs?
                  </p>
                  <Link to="/contact" className="get-touch-btn text-decoration-none text-center" data-button-motion>
                    <ButtonLabel>Get In Touch</ButtonLabel>
                  </Link>
                  <img
                    src="/assets/images/services/bottom-left.png"
                    alt="bottom-left"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Dual-Track Marquee Ribbon ] ==================== */}
      <MarqueeRibbon />

      {/* ==================== [ Section 3: Related Case Studies ] ==================== */}
      <section className="project data-padding pb-0" id="project">
        <div className="container">
          <div className="row project-top align-items-center mb-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-design">
                <h2 className="second-heading mb-0 fade_down">Selected Case Studies.</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="data-left">
                <span className="heading fade_down">
                  Explore selected websites and online stores I’ve built for clients.
                </span>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {(relatedProjectList.length ? relatedProjectList : projects)
              .slice(0, 3)
              .map((prj, pIdx) => (
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
                          <span className="name-contru">
                            {prj.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ==================== [ Section 4: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
