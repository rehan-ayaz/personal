/**
 * @file FAQPage.jsx
 * @description Authentic Bran Star Layout-2 FAQs Page.
 * Restored to 100% template structural and visual parity:
 * 1. Filterable Category Sidebar (.box-design-faq)
 * 2. Accordion Container (.sep-faq-scot -> .faq-container-seprate)
 * 3. Animated Arrow/Plus Indicator (assets/images/skill/arrow.png)
 * 4. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import ButtonLabel from '../components/ButtonLabel';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const categories = [
    'General',
    'Web Development',
    'WordPress & WooCommerce',
    'Full-Stack SaaS',
    'Speed & SEO',
    'Payment & Support',
  ];

  const faqDataByCategory = {
    0: [
      {
        q: 'Curious what a pro web developer can do for your brand?',
        a: 'I engineer high-converting digital web products — including bespoke WordPress themes, reactive single-page applications, SaaS dashboards, and speed audits that measurably increase inbound leads and user retention.',
      },
      {
        q: 'How do we kick off a new development collaboration?',
        a: 'We begin with a discovery conversation (via WhatsApp, email, or video call) to examine your requirements, wireframes, and business goals. I then provide an architectural scope, milestones, and a clear delivery timeline.',
      },
      {
        q: 'Where are you based, and do you work with international clients?',
        a: 'I am based in Islamabad / Rawalpindi, Pakistan, and work remotely with clients worldwide across the United States, UK, Canada, Australia, Europe, and the Middle East in their respective timezones.',
      },
    ],
    1: [
      {
        q: 'What modern technologies do you use for web development?',
        a: 'My primary stack includes React, Next.js, Node.js, TypeScript, Tailwind CSS, Bootstrap, and modern REST/GraphQL APIs with PostgreSQL, MySQL, and Supabase database backends.',
      },
      {
        q: 'Will my website perform smoothly on smartphones and tablets?',
        a: 'Yes. Every project is engineered mobile-first with fluid touch response, zero layout shifts, optimized asset sizes, and cross-browser testing across Chrome, Safari, Firefox, and Edge.',
      },
      {
        q: 'Do you write clean, modular, and maintainable code?',
        a: 'Always. I adhere strictly to component isolation, DRY principles, modern linting standards, and clear documentation so any engineering team can easily maintain or scale the product.',
      },
    ],
    2: [
      {
        q: 'Do you create custom WordPress themes or use bloated page builders?',
        a: 'I specialize in lightweight, fully bespoke WordPress themes and custom Gutenberg blocks tailored specifically to your design. This ensures zero plugin bloat, airtight security, and blazing-fast load speeds.',
      },
      {
        q: 'Can you handle complex WooCommerce stores and payment gateways?',
        a: 'Yes. I configure custom checkout workflows, multi-currency support, payment gateways (Stripe, PayPal, local acquirers), automated inventory sync, and webhook integrations.',
      },
      {
        q: 'How do you safeguard WordPress websites from security vulnerabilities?',
        a: 'Through hardened file permissions, custom login endpoints, database prefix changes, SSL enforcement, CSP headers, rate-limiting, and continuous vulnerability scanning.',
      },
    ],
    3: [
      {
        q: 'Can you engineer custom SaaS web applications from scratch?',
        a: 'Yes. From multi-tenant authentication and role-based access control (RBAC) to subscription billing (Stripe), interactive charts, and database architecture, I deliver full-stack SaaS solutions.',
      },
      {
        q: 'How do you handle application scaling and server performance?',
        a: 'By architecting stateless Node.js / Next.js backends, database query indexing, Redis caching layers, and containerized cloud deployment on AWS, Vercel, or DigitalOcean.',
      },
    ],
    4: [
      {
        q: 'What is your strategy for achieving 90+ Google PageSpeed scores?',
        a: 'I eliminate render-blocking CSS/JS, implement next-gen image formats (WebP/AVIF), optimize critical CSS paths, lazy-load secondary media, and guarantee sub-second First Contentful Paint (FCP).',
      },
      {
        q: 'Do your builds include on-page and technical SEO foundations?',
        a: 'Yes. Every page incorporates semantic HTML5, Schema.org JSON-LD structured data, open-graph social tags, auto-generated XML sitemaps, and robots.txt directives.',
      },
    ],
    5: [
      {
        q: 'What payment schedules and contracts do you work with?',
        a: 'Projects typically follow a 50% upfront and 50% on successful completion schedule, or staged milestone releases. I provide formal international invoices with Wise, Payoneer, and direct wire options.',
      },
      {
        q: 'What happens after the website goes live?',
        a: 'Every project includes 30 to 90 days of complimentary warranty support. Extended maintenance packages are also available for continuous security updates, backups, and feature enhancements.',
      },
    ],
  };

  const currentFaqs = faqDataByCategory[activeCategory] || faqDataByCategory[0];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: currentFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <InnerPageLayout
      title="FAQs"
      breadcrumb="FAQs"
      seoTitle="Frequently Asked Questions - Web Engineering & Hiring | Rehan Ayaz"
      seoDesc="Find instant answers to common questions about hiring Rehan Ayaz: project workflows, WordPress and React development, pricing, timelines, speed optimization, and support."
      canonicalPath="/faq"
      schema={faqSchema}
    >
      {/* ==================== [ Section 1: Authentic Layout-2 FAQ Page ] ==================== */}
      <section className="faq-page">
        <div className="container">
          <div className="row mb-5">
            <div className="col-xl-9 col-12">
              <div className="heading-data-princing">
                <h2 className="second-heading fade_down">Frequently Asked Questions</h2>
                <p className="heading-descr fade_down">
                  Everything you need to know about working together, all in one place. Browse by
                  category for instant clarity and technical answers.
                </p>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row faq-choise">
            {/* Left 4-Column: Category Tabs */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4 mb-lg-0">
              <div className="box-design-faq">
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === idx;
                  const paddedNum = String(idx + 1).padStart(2, '0');
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setActiveCategory(idx);
                        setOpenFaq(0);
                      }}
                      className={`data-faq-join w-100 text-start border-0 ${
                        idx === categories.length - 1 ? 'pb-0 border-0' : ''
                      }`}
                      style={{
                        background: 'transparent',
                        cursor: 'pointer',
                      }}
                      data-button-motion
                      aria-pressed={isActive}
                    >
                      <div className="data-name-faq-num">
                        <p>{paddedNum}</p>
                        <h2 style={{ color: isActive ? 'var(--ra-button-accent-ink)' : undefined }}><ButtonLabel>{cat}</ButtonLabel></h2>
                      </div>
                      <div className="image-faq-data">
                        <img
                          src="/assets/images/faq/arrow-1.png"
                          className="data-arrow"
                          alt="arrow"
                        />
                        <img
                          src="/assets/images/faq/arrow-hover.png"
                          className="data-hider"
                          alt="arrow"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right 8-Column: Accordion Items */}
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="sep-faq-scot">
                {currentFaqs.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div className="faq-container data-faq-margin faq-container-seprate" key={fIdx}>
                      <div
                        className={`faq-item sepatrat-faq fade_down ${isOpen ? 'active' : ''}`}
                        onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="faq-question data-bg-sep d-flex align-items-center justify-content-between">
                          <button type="button" className="font-faq text-start border-0 bg-transparent">
                            {faq.q}
                          </button>
                          <div className="arroew-faq-data">
                            <img
                              src="/assets/images/skill/arrow.png"
                              alt="toggle"
                              style={{
                                transform: isOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </div>
                        </div>
                        {isOpen && <div className="faq-answer faq-padding">{faq.a}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
