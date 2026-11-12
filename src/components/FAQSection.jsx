import React, { useState } from 'react';

/**
 * @file FAQSection.jsx
 * @description Accessible accordion FAQ section providing objection handling,
 * direct technical answers, and Schema.org FAQPage structured data for rich SERP snippets.
 * Corresponds to Section 10 in Google's recommended architecture.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Open first question by default

  const faqs = [
    {
      q: 'What web development services do you specialize in?',
      a: 'I specialize in custom WordPress development, WooCommerce eCommerce stores, high-performance responsive websites, full-stack web applications, and Google Core Web Vitals / PageSpeed speed optimization.',
    },
    {
      q: 'How long does a typical website project take to complete?',
      a: 'Most standard business websites are delivered within 1 to 2 weeks, while custom platforms or multi-feature eCommerce stores typically take 3 to 4 weeks, depending on design complexity and feature requirements.',
    },
    {
      q: 'Will my website be fast, secure, and mobile-friendly?',
      a: 'Yes, 100%. Every website is built mobile-first, fully responsive across all device sizes, and rigorously optimized for sub-second loading speeds, SSL security, and clean semantic code.',
    },
    {
      q: 'Do you provide ongoing maintenance and post-launch support?',
      a: 'Absolutely. All projects include complimentary post-launch support to ensure a smooth transition, along with flexible monthly maintenance packages for backups, security monitoring, and updates.',
    },
    {
      q: 'Can you optimize or redesign an existing website without losing SEO rankings?',
      a: 'Yes! I specialize in safely migrating, modernizing, and optimizing existing websites while strictly preserving your URL structures, search engine rankings, content, and brand identity.',
    },
    {
      q: 'How do we get started on a project?',
      a: 'Simply send an inquiry through the contact form below or reach out directly via WhatsApp. We will discuss your goals, timeline, and budget, and provide a clear, transparent project roadmap.',
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  // Structured Data for Google FAQPage Rich Snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section className="ra-faq-data faq-data ra-data-padding data-padding" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        {/* Top Header */}
        <div className="row ra-top-faq top-faq">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="ra-heading-data-princing heading-data-princing">
              <h2 className="ra-second-heading second-heading mb-0">
                Frequently Asked Questions
              </h2>
              <img
                src="assets/images/about/round-shape.png"
                alt="Decorative accent"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <p className="ra-heading-descr heading-descr">
              Everything you need to know about working together, pricing, timelines, and technical support. Clear answers for complete confidence.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="row ra-faq-design-dta faq-design-dta">
          <div className="col-12">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const isLast = idx === faqs.length - 1;
              return (
                <div key={idx} className="ra-faq-container faq-container">
                  <div
                    className={`ra-faq-item faq-item ${isOpen ? 'active' : ''} ${isLast ? 'data-border-on' : ''}`}
                  >
                    <button
                      type="button"
                      className="ra-faq-question faq-question"
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span>{faq.q}</span>
                      <span className="ra-arroew-faq-data arroew-faq-data">
                        <img
                          src="assets/images/skill/arrow.png"
                          alt="Toggle answer"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${idx}`}
                        className="ra-faq-answer faq-answer"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

