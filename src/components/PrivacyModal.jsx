/**
 * @file PrivacyModal.jsx
 * @description Handcrafted, animated Privacy Policy modal dialog
 * matching the bespoke luxury portfolio design system of rehanayaz.com.
 */
import React, { useEffect, useRef } from 'react';

export default function PrivacyModal({ isOpen, onClose }) {
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
      aria-labelledby="privacy-modal-title"
      tabIndex={-1}
    >
      <div className="ra-terms-modal" ref={modalContentRef} tabIndex={0}>
        {/* Sticky Header Bar */}
        <div className="ra-terms-header">
          <div className="ra-terms-header-meta">
            <span className="ra-terms-badge">
              <span className="ra-terms-badge-dot" />
              Privacy &amp; Data Protection
            </span>
            <span className="ra-terms-read-time">
              <i className="ri-time-line" /> ~3 min read
            </span>
          </div>
          <div className="ra-terms-header-actions">
            <span className="ra-terms-esc-hint">ESC</span>
            <button
              type="button"
              className="ra-terms-close-btn"
              onClick={onClose}
              aria-label="Close Privacy Policy popup"
            >
              <i className="ri-close-line" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="ra-terms-body">
          {/* Hero Section */}
          <div className="ra-terms-hero">
            <h2 className="ra-terms-title" id="privacy-modal-title">Privacy Policy</h2>
            <div className="ra-terms-updated">
              <i className="ri-calendar-check-line" />
              Last updated: November 07, 2026
            </div>
            <p className="ra-terms-intro-p">
              Welcome to <strong>Rehan Ayaz</strong> (<a href="https://rehanayaz.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00C2FF', textDecoration: 'none' }}>rehanayaz.com</a>). This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our freelance web development and digital services.
            </p>
            <div className="ra-terms-callout">
              <strong>Consent Agreement:</strong> By accessing our website or engaging our services, you agree to the collection and use of information in accordance with this policy.
            </div>
          </div>

          {/* Structured Sections */}
          <div className="ra-terms-sections">
            {/* Section 1 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">01.</span>
                <h3 className="ra-terms-sec-title">Information We Collect</h3>
              </div>
              <p className="ra-terms-feature-body">
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining our services, fill out contact or project inquiry forms, or communicate with us. This may include:
              </p>
              <div className="ra-terms-def-grid">
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>Personal &amp; Contact Details</h4>
                    <span className="ra-terms-def-tag">Direct</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Full name, email address (e.g., hello@rehanayaz.com), phone/WhatsApp number, and business details.
                  </p>
                </div>
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>Project Requirements</h4>
                    <span className="ra-terms-def-tag">Scope</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Information regarding your web development needs, branding assets, content, design preferences, and budget.
                  </p>
                </div>
                <div className="ra-terms-def-card">
                  <div className="ra-terms-def-term">
                    <h4>Technical Data</h4>
                    <span className="ra-terms-def-tag">Automated</span>
                  </div>
                  <p className="ra-terms-def-desc">
                    Standard log data collected automatically when visiting the site, such as your IP address, browser type, device information, and pages visited.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">02.</span>
                <h3 className="ra-terms-sec-title">How We Use Your Information</h3>
              </div>
              <p className="ra-terms-feature-body">
                We use the information we collect for the following specific purposes:
              </p>
              <div className="ra-terms-feature-cards">
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-chat-1-line" /></span>
                    Client Communication
                  </div>
                  <p className="ra-terms-feature-body">
                    To communicate with you regarding project inquiries, proposals, and development updates.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-code-s-slash-line" /></span>
                    Project Delivery &amp; Solutions
                  </div>
                  <p className="ra-terms-feature-body">
                    To deliver custom web development, WordPress specialization, and digital solutions as agreed upon.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-bill-line" /></span>
                    Administrative &amp; Milestone Notices
                  </div>
                  <p className="ra-terms-feature-body">
                    To send administrative information, such as invoices, project milestones, and support updates.
                  </p>
                </div>
                <div className="ra-terms-feature-card">
                  <div className="ra-terms-feature-head">
                    <span className="ra-terms-feature-icon"><i className="ri-speed-up-line" /></span>
                    Experience &amp; Performance
                  </div>
                  <p className="ra-terms-feature-body">
                    To improve our website performance, user experience, and service offerings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">03.</span>
                <h3 className="ra-terms-sec-title">Data Sharing &amp; Disclosure</h3>
              </div>
              <p className="ra-terms-feature-body mb-2">
                We respect your privacy and <strong>do not sell, trade, or rent</strong> your personal information to third parties. We may share information only under the following circumstances:
              </p>
              <div className="ra-terms-payment-grid">
                <div className="ra-terms-payment-box">
                  <span className="ra-terms-payment-badge intl">
                    <i className="ri-cloud-line" /> Service Providers
                  </span>
                  <p className="ra-terms-feature-body">
                    Trusted third-party tools and hosting providers (such as Hostinger, Google Workspace, and secure payment gateways) strictly necessary to operate our website and deliver our services.
                  </p>
                </div>
                <div className="ra-terms-payment-box">
                  <span className="ra-terms-payment-badge local">
                    <i className="ri-scales-line" /> Legal Obligations
                  </span>
                  <p className="ra-terms-feature-body">
                    If required to do so by applicable laws, court orders, regulations, or enforceable legal processes in Pakistan.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">04.</span>
                <h3 className="ra-terms-sec-title">Data Security</h3>
              </div>
              <div className="ra-terms-feature-card">
                <div className="ra-terms-feature-head">
                  <span className="ra-terms-feature-icon"><i className="ri-lock-password-line" /></span>
                  Technical &amp; Organizational Safeguards
                </div>
                <p className="ra-terms-feature-body">
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">05.</span>
                <h3 className="ra-terms-sec-title">Your Data Protection Rights</h3>
              </div>
              <div className="ra-terms-feature-card">
                <div className="ra-terms-feature-head">
                  <span className="ra-terms-feature-icon"><i className="ri-user-settings-line" /></span>
                  Access, Correction &amp; Deletion
                </div>
                <p className="ra-terms-feature-body">
                  Depending on your location, you have rights regarding your personal information, including the right to access, correct, or request the deletion of any personal data we hold about you. To exercise these rights, you can contact us directly.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">06.</span>
                <h3 className="ra-terms-sec-title">Changes to This Privacy Policy</h3>
              </div>
              <div className="ra-terms-feature-card">
                <p className="ra-terms-feature-body">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="ra-terms-section-block">
              <div className="ra-terms-sec-header">
                <span className="ra-terms-num">07.</span>
                <h3 className="ra-terms-sec-title">Contact Us</h3>
              </div>
              <p className="ra-terms-feature-body">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us directly:
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

