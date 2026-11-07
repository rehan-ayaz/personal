/**
 * @file TermsModal.jsx
 * @description Handcrafted, animated Terms and Conditions modal dialog
 * matching the bespoke luxury portfolio design system of rehanayaz.com.
 */
import React, { useEffect, useRef } from 'react';

export default function TermsModal({ isOpen, onClose }) {
  const modalContentRef = useRef(null);

  // Background Scroll-Lock & Keyboard / Window Event Listeners
  useEffect(() => {
    if (!isOpen) return;

    // Calculate scrollbar width to prevent background layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Pause GSAP ScrollSmoother if initialized
    const sm = (window.ScrollSmoother && window.ScrollSmoother.get()) || window.smoother;
    if (sm && typeof sm.paused === 'function') {
      sm.paused(true);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Auto-focus inside modal for accessibility
    if (modalContentRef.current) {
      modalContentRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (sm && typeof sm.paused === 'function') {
        sm.paused(false);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle backdrop outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`ra-terms-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      tabIndex={-1}
    >
      <div className="ra-terms-modal" ref={modalContentRef} tabIndex={0}>
        {/* Sticky Header Bar */}
        <div className="ra-terms-header">
          <div className="ra-terms-header-meta">
            <span className="ra-terms-badge">
              <span className="ra-terms-badge-dot" />
              Legal &amp; Compliance
            </span>
            <span className="ra-terms-read-time">
              <i className="ri-time-line" /> ~4 min read
            </span>
          </div>
          <div className="ra-terms-header-actions">
            <span className="ra-terms-esc-hint">ESC</span>
            <button
              type="button"
              className="ra-terms-close-btn"
              onClick={onClose}
              aria-label="Close Terms and Conditions popup"
            >
              <i className="ri-close-line" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="ra-terms-body">
          {/* Hero Section */}
          <div className="ra-terms-hero">
            <h2 className="ra-terms-title" id="terms-modal-title">Terms and Conditions</h2>
            <div className="ra-terms-updated">
              <i className="ri-calendar-check-line" />
              Last updated: November 07, 2026
            </div>
            <p className="ra-terms-intro-p">
              Welcome to <strong>Rehan Ayaz</strong> (<a href="https://rehanayaz.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00C2FF', textDecoration: 'none' }}>rehanayaz.com</a>). These Terms and Conditions outline the rules and regulations for the use of our website and freelance web development, WordPress, and digital services.
            </p>
            <div className="ra-terms-callout">
              <strong>Notice of Acceptance:</strong> By accessing this website or hiring our services, you accept and agree to be bound by these terms. If you do not agree to all of the terms stated on this page, please do not use our website or services.
            </div>
          </div>

          {/* Structured Sections */}
          <div className="ra-terms-sections">
            {/* Section 1 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">01.</span>
                <h3 className="ra-terms-sec-title">Definitions &amp; Interpretation</h3>
              </div>
              <div className="ra-terms-def-grid">
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>"Client", "You", "Your"</h4>
                    <span className="ra-terms-def-tag">Entity</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Refers to you, the individual or business entity accessing this website, commissioning projects, and accepting these contractual terms.
                  </p>
                </div>
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>"The Company", "We", "Us"</h4>
                    <span className="ra-terms-def-tag">Developer</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Refers to Rehan Ayaz, operating as a professional freelance web developer and digital specialist based in Pakistan.
                  </p>
                </div>
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>"Services"</h4>
                    <span className="ra-terms-def-tag">Deliverables</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Refers to custom website design, WordPress development, e-commerce store setups, maintenance, optimization, and related digital solutions offered by us.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">02.</span>
                <h3 className="ra-terms-sec-title">Services &amp; Project Scope</h3>
              </div>
              <div className="ra-terms-feature-cards">
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-file-text-line" /></span>
                    Proposals &amp; Quotations
                  </div>
                  <p className="ra-terms-feature-body">
                    All project scopes, deliverables, timelines, and costs will be clearly outlined in a formal project proposal or agreement before work commences.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-refresh-line" /></span>
                    Revisions &amp; Scope Management
                  </div>
                  <p className="ra-terms-feature-body">
                    Each service package includes a specified number of revisions. Additional modifications outside the agreed scope may incur extra charges.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-user-follow-line" /></span>
                    Client Responsibilities
                  </div>
                  <p className="ra-terms-feature-body">
                    Clients are expected to provide necessary content, text, media, branding assets, and feedback in a timely manner to avoid project delays.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">03.</span>
                <h3 className="ra-terms-sec-title">Pricing, Payments &amp; Refunds (Pakistan &amp; International)</h3>
              </div>
              <div className="ra-terms-payment-grid">
                <div className="ra-terms-payment-box">
                  <span className="ra-terms-payment-badge local">
                    <i className="ri-map-pin-user-line" /> Local Clients (Pakistan)
                  </span>
                  <p className="ra-terms-feature-body mb-2">
                    For clients within Pakistan, payments can be made via local bank transfers (IBAN / Raast) or authorized digital payment methods as agreed upon.
                  </p>
                  <p className="ra-terms-feature-body" style={{ fontSize: '13px', opacity: 0.85 }}>
                    Invoicing available in equivalent PKR pegged to confirmed project rates.
                  </p>
                </div>

                <div className="ra-terms-payment-box">
                  <span className="ra-terms-payment-badge intl">
                    <i className="ri-global-line" /> International Clients (Global)
                  </span>
                  <p className="ra-terms-feature-body mb-2">
                    International transactions are processed through secure global payment gateways, Payoneer, direct wire transfers, or international bank remittance.
                  </p>
                  <p className="ra-terms-feature-body" style={{ fontSize: '13px', opacity: 0.85 }}>
                    Standard prices listed on the site are in USD and subject to written contract confirmation.
                  </p>
                </div>
              </div>

              <div className="ra-terms-feature-card mt-2">
                <div className="ra-terms-feature-head">
                  <span className="ra-terms-feature-icon"><i className="ri-secure-payment-line" /></span>
                  Payment Terms
                </div>
                <p className="ra-terms-feature-body">
                  Standard projects require an initial deposit (typically 50%) before work begins, with the remaining balance due upon project completion and prior to final deployment/handover.
                </p>
              </div>

              {/* Refund Policy Callout */}
              <div className="ra-terms-refund-card">
                <h5>
                  <i className="ri-alert-line" /> Refund Policy
                </h5>
                <p>
                  Due to the custom nature of web development and digital services, deposits and milestone payments are generally non-refundable once work has commenced or design concepts have been delivered.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">04.</span>
                <h3 className="ra-terms-sec-title">Intellectual Property Rights</h3>
              </div>
              <div className="ra-terms-feature-cards">
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-copyright-line" /></span>
                    Our Work &amp; Frameworks
                  </div>
                  <p className="ra-terms-feature-body">
                    Unless otherwise stated, Rehan Ayaz and/or its licensors own the intellectual property rights for all material, custom code snippets, design frameworks, and proprietary assets created on this website and during project delivery.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-shield-check-line" /></span>
                    Client Ownership &amp; Portfolio Rights
                  </div>
                  <p className="ra-terms-feature-body">
                    Upon full and final payment, the client receives ownership of the final deployed website and its unique content as specified in the project agreement. We reserve the right to showcase completed projects in our portfolio.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">05.</span>
                <h3 className="ra-terms-sec-title">Limitation of Liability</h3>
              </div>
              <div className="ra-terms-feature-card">
                <p className="ra-terms-feature-body mb-3">
                  To the maximum extent permitted by applicable Pakistani and international law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising out of or in connection with your use of our website or delivered web solutions.
                </p>
                <p className="ra-terms-feature-body">
                  We provide post-launch support and maintenance as specified in your selected pricing plan (e.g., Starter, Standard, or Premium packages), but we are not responsible for third-party plugin vulnerabilities, server downtimes, or unauthorized modifications made by third parties.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">06.</span>
                <h3 className="ra-terms-sec-title">Governing Law &amp; Jurisdiction</h3>
              </div>
              <div className="ra-terms-feature-card">
                <div className="ra-terms-feature-head">
                  <span className="ra-terms-feature-icon"><i className="ri-scales-3-line" /></span>
                  Jurisdiction of Pakistan
                </div>
                <p className="ra-terms-feature-body">
                  These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts located in Pakistan for the resolution of any disputes.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">07.</span>
                <h3 className="ra-terms-sec-title">Changes to These Terms</h3>
              </div>
              <div className="ra-terms-feature-card">
                <p className="ra-terms-feature-body">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check this page periodically for updates. Continued use of our site or engagement of services constitutes formal agreement to updated terms.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">08.</span>
                <h3 className="ra-terms-sec-title">Contact Information</h3>
              </div>
              <p className="ra-terms-feature-body">
                If you have any questions or require clarification about these Terms and Conditions, please reach out to us directly:
              </p>
              <div className="ra-terms-contact-grid">
                <div className="ra-terms-contact-card">
                  <div className="ra-terms-contact-icon">
                    <i className="ri-mail-send-line" />
                  </div>
                  <div className="ra-terms-contact-info">
                    <span className="ra-terms-contact-label">Official Email</span>
                    <a href="mailto:hello@rehanayaz.com" className="ra-terms-contact-val">
                      hello@rehanayaz.com
                    </a>
                  </div>
                </div>

                <div className="ra-terms-contact-card">
                  <div className="ra-terms-contact-icon">
                    <i className="ri-whatsapp-line" />
                  </div>
                  <div className="ra-terms-contact-info">
                    <span className="ra-terms-contact-label">Phone / WhatsApp</span>
                    <a
                      href="https://wa.me/923260735090"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ra-terms-contact-val"
                    >
                      +92 326 0735090
                    </a>
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

