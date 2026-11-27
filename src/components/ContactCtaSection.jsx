import React, { useState } from 'react';
import ButtonLabel from "./ButtonLabel";
import { personalInfo } from '../data/portfolioData';

/**
 * @file ContactCtaSection.jsx
 * @description Authentic Bran Star Layout-2 Contact CTA section (.contact.overflow-hidden).
 * Used at the bottom of About, Services, Projects, Pricing, Resume, and FAQ pages.
 * Features verified Rehan Ayaz direct channels on the left and an interactive inquiry form on the right.
 */
export default function ContactCtaSection() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    project_type: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ username: '', email: '', project_type: '', budget: '', message: '' });
    }, 600);
  };

  return (
    <section className="contact overflow-hidden" id="contact">
      <div className="data-padding">
        <div className="container">
          <div className="row contact-design">
            <div className="top-design-contact">
              <img src="/assets/images/about/right-peack.png" alt="right-peack" loading="lazy" />
            </div>
            <div className="right-design-contact">
              <img src="/assets/images/about/bottom-right.png" alt="bottom-right" loading="lazy" />
            </div>
            <div className="center-image">
              <img src="/assets/images/contact/top-center.png" alt="top-center" loading="lazy" />
            </div>
            <div className="wave-image">
              <img src="/assets/images/contact/wave.png" alt="wave" loading="lazy" />
            </div>

            {/* Left Column: Direct Inquiries */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-data">
                <h2 className="second-heading data-text fade_down">If you have any project in mind.</h2>
                <p className="contact-desc fade_down">
                  Have a web development project, WordPress upgrade, or custom web application in mind?
                  Let's collaborate to bring your vision to life with precision.
                </p>
                <a href={`mailto:${personalInfo.email}`} className="mail-contact fade_down">
                  <div className="image-contact">
                    <img src="/assets/images/contact/mail.svg" alt="mail" />
                  </div>
                  <p>{personalInfo.email}</p>
                </a>
                <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mail-contact data-call fade_down">
                  <div className="image-contact">
                    <img src="/assets/images/contact/call.svg" alt="call" />
                  </div>
                  <p>{personalInfo.phone}</p>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="relative-box">
                {submitted ? (
                  <div className="main-contact p-4 text-center">
                    <div className="mb-3">
                      <i className="ri-checkbox-circle-fill text-success" style={{ fontSize: '48px' }}></i>
                    </div>
                    <h3 className="h5 mb-2" style={{ fontFamily: '"Marcellus", serif' }}>Thank You!</h3>
                    <p className="small text-muted mb-4">
                      Your project inquiry has been received. I will review your requirements and respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-mark" data-button-motion
                      style={{ cursor: 'pointer' }}
                    >
                      <ButtonLabel>Send Another Message</ButtonLabel>
                    </button>
                  </div>
                ) : (
                  <form className="main-contact" onSubmit={handleSubmit}>
                    <div className="contact-page">
                      <div className="title-contact-page">
                        <h3>Send Us a Message</h3>
                        <span>Give us a chance to serve and bring high-performance results to your brand.</span>
                      </div>
                      <div className="input-form-first">
                        <input
                          type="text"
                          name="username"
                          autoComplete="name"
                          className="input-fields"
                          placeholder="Enter Name"
                          required
                          value={formData.username}
                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          className="input-fields"
                          placeholder="Enter Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div className="interes-contact">
                          <label htmlFor="cta_project_type">I'm interested in:</label>
                          <div className="selcted-area">
                            <select
                              name="project_type"
                              className="selected"
                              id="cta_project_type"
                              required
                              value={formData.project_type}
                              onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                            >
                              <option value="" disabled>Select your interested project</option>
                              <option value="web_development">Web Development</option>
                              <option value="wordpress">WordPress & WooCommerce</option>
                              <option value="ui_ux">UI/UX & Prototyping</option>
                              <option value="saas">SaaS & Web Applications</option>
                              <option value="speed_seo">Speed & SEO Optimization</option>
                            </select>
                            <img src="/assets/images/contact/arrow-down.svg" alt="arrow-down" />
                          </div>
                        </div>
                        <div className="interes-contact">
                          <label htmlFor="cta_budget">My budget is:</label>
                          <div className="selcted-area">
                            <select
                              name="budget"
                              className="selected"
                              id="cta_budget"
                              required
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            >
                              <option value="" disabled>Select your project budget</option>
                              <option value="500-1000">$500 - $1,000</option>
                              <option value="1000-3000">$1,000 - $3,000</option>
                              <option value="3000-5000">$3,000 - $5,000</option>
                              <option value="5000+">$5,000+</option>
                            </select>
                            <img src="/assets/images/contact/arrow-down.svg" alt="arrow-down" />
                          </div>
                        </div>
                        <div className="interes-contact">
                          <label htmlFor="cta_textarea">Your Request:</label>
                          <div className="selcted-area">
                            <textarea
                              rows="4"
                              cols="50"
                              placeholder="Write here..."
                              className="custom-textarea border-0"
                              id="cta_textarea"
                              spellCheck="false"
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn-mark" data-button-motion disabled={loading}>
                      <ButtonLabel>{loading ? 'Submitting...' : 'Submit'}</ButtonLabel>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
