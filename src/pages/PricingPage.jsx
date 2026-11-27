/**
 * @file PricingPage.jsx
 * @description Authentic Bran Star Layout-2 Pricing Plan Page for Rehan Ayaz.
 * Restored to 100% template structural and visual parity:
 * 1. 3-Tier Pricing Packages (.pricing)
 * 2. Dual-Track Marquee Ribbon (.slider-logo)
 * 3. Trust Statistics & Milestones (.data-counder)
 * 4. Pricing FAQs Accordion (.faq-data)
 * 5. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import Pricing from '../components/Pricing';
import MarqueeRibbon from '../components/MarqueeRibbon';
import TrustStatsSection from '../components/TrustStatsSection';
import ContactCtaSection from '../components/ContactCtaSection';

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  const pricingFaqs = [
    {
      q: 'Do you charge on an hourly basis or fixed milestone contracts?',
      a: 'Both models are available. For well-scoped projects, I offer fixed milestones with clear deliverables. For continuous consultation, support, or ongoing feature iterations, flexible hourly rates apply.',
    },
    {
      q: 'Are there any hidden fees or extra costs for deployment?',
      a: 'No hidden fees. Every proposal includes a comprehensive scope breakdown covering development, QA, speed audits, security hardening, and production deployment.',
    },
    {
      q: 'Can I upgrade or customize my chosen package?',
      a: 'Absolutely. Every package can be tailored with specific integrations, dedicated API endpoints, headless architecture, or extended post-launch warranty support.',
    },
    {
      q: 'What payment methods do you accept for international clients?',
      a: 'I accept wire transfers, Stripe, Payoneer, Wise, and standard international direct deposits with formal invoices and tax-compliant receipts.',
    },
    {
      q: 'What is included in the post-launch support period?',
      a: 'Included support covers bug fixes, performance monitoring, security patches, minor copy adjustments, and priority technical assistance.',
    },
  ];

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Rehan Ayaz Web Development & Engineering Packages',
    priceCurrency: 'USD',
    description: 'Transparent hourly and milestone development pricing for startups and businesses.',
  };

  return (
    <InnerPageLayout
      title="Pricing Plan"
      breadcrumb="Pricing Plan"
      seoTitle="Pricing Plans & Packages - Web Development & WordPress | Rehan Ayaz"
      seoDesc="Transparent, value-driven web development pricing packages by Rehan Ayaz. Basic, Standard, and Premium tiers tailored for startups, expanding stores, and enterprise portals."
      canonicalPath="/pricing"
      schema={pricingSchema}
    >
      {/* ==================== [ Section 1: Layout-2 Pricing Packages ] ==================== */}
      <Pricing />

      {/* ==================== [ Section 2: Dual-Track Marquee Ribbon ] ==================== */}
      <MarqueeRibbon />

      {/* ==================== [ Section 3: Trust Stats & Experience ] ==================== */}
      <TrustStatsSection />

      {/* ==================== [ Section 4: Pricing FAQ Accordion ] ==================== */}
      <section className="faq-data data-padding" id="faq">
        <div className="container">
          <div className="row top-faq mb-4 align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="heading-data-princing">
                <h2 className="second-heading fade_down mb-0">Frequently Asked Questions</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <p className="queality-desc m-0">
                Clear answers regarding project billing, sprint timelines, contract milestones, and
                warranty guarantees.
              </p>
            </div>
          </div>

          <div className="faq-data-services">
            {pricingFaqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  className={`faq-services-question ${isOpen ? 'active' : ''}`}
                  key={fIdx}
                  onClick={() => setActiveFaq(isOpen ? -1 : fIdx)}
                  style={{ cursor: 'pointer' }}
                >
                  <button type="button" className="question-data-faq" aria-expanded={isOpen}>
                    <span className="rount-services-arrow" aria-hidden="true">
                      <i
                        className={isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}
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
      </section>

      {/* ==================== [ Section 5: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
