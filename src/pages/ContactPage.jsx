/**
 * @file ContactPage.jsx
 * @description Authentic Bran Star Layout-2 Contact Page for Rehan Ayaz.
 * Restored to 100% template structural and visual parity:
 * 1. Global Inner Page Banner (InnerPageLayout)
 * 2. Interactive Direct Inquiry & Channels Section (.contact.overflow-hidden#contact)
 * 3. Office & Visual Map Showcase (.map-deta) with decorative corner assets and live interactive embed
 */

import React from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rehan Ayaz - Full-Stack Developer & WordPress Specialist',
    url: 'https://rehanayaz.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: personalInfo.name,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      url: 'https://rehanayaz.com/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressRegion: 'Federal Capital',
        addressCountry: 'Pakistan',
      },
    },
  };

  return (
    <InnerPageLayout
      title="Contact"
      breadcrumb="Contact"
      seoTitle="Contact Rehan Ayaz - Start a Project or Consultation"
      seoDesc="Get in touch with Rehan Ayaz for bespoke web development, custom WordPress themes, SaaS portals, or technical speed audits. Rapid 24-hour response."
      canonicalPath="/contact"
      schema={contactSchema}
    >
      {/* ==================== [ Section 1: Interactive Contact & Form ] ==================== */}
      <ContactCtaSection />

      {/* ==================== [ Section 2: Authentic Layout-2 Map & Visual Section ] ==================== */}
      <section className="map-deta data-padding pt-0">
        <h2 className="d-none">Location &amp; Office Availability</h2>
        <div className="container">
          <div className="row data-map-row align-items-center">
            {/* Left 6-Column: Portrait & Geometric Frames */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="data-contact-image">
                <div className="image-contact-top">
                  <img src="/assets/images/contact/top-right.png" alt="top-right" loading="lazy" />
                </div>
                <div className="image-contact-bottom">
                  <img src="/assets/images/contact/top-left.png" alt="top-left" loading="lazy" />
                </div>
                <div className="img contact-last-image">
                  <div className="img-container">
                    <img
                      src="/assets/images/contact/man.png"
                      alt="Rehan Ayaz availability"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6-Column: Embedded Location Map */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
              <div className="map-sec">
                <div className="map-img border" style={{ minHeight: '380px', overflow: 'hidden' }}>
                  <iframe
                    title="Rehan Ayaz Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.74113215707!2d72.85501867946976!3d33.68442019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="380"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
