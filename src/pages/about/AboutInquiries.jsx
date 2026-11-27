import React, { useState } from 'react';
import ButtonLabel from "../../components/ButtonLabel";
import { personalInfo } from '../../data/portfolioData';

const assets = '/assets/images';

const projectTypes = [
  'Website design and development',
  'WordPress or WooCommerce',
  'AI and automation',
  'Mobile app development',
  'SaaS application',
  'Website speed and technical SEO',
  'Other project',
];

const packageTypes = ['Starter Website Package', 'Standard Website Package', 'Premium Website Package'];
const inquiryTypes = [...projectTypes, ...packageTypes];
const budgets = ['Under $500', '$500–$999', '$1,000–$2,999', '$3,000–$4,999', '$5,000+', 'Still deciding'];

function InquirySelect({ name, label, placeholder, options, selectionProps }) {
  const id = `about-inquiry-${name}`;
  return (
    <div className="interes-contact">
      <label htmlFor={id}>{label}</label>
      <div className="selcted-area">
        <select className="selected" id={id} name={name} {...selectionProps} required>
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
        <img src={`${assets}/contact/arrow-down.svg`} alt="" />
      </div>
    </div>
  );
}

export function AboutContact({ projectType, onProjectTypeChange }) {
  const [draft, setDraft] = useState(null);

  function prepareInquiry(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const message = [
      'Hi Rehan, I would like to discuss a project.',
      `Name: ${fields.get('name').trim()}`,
      `Email: ${fields.get('email').trim()}`,
      `Project: ${fields.get('project')}`,
      `Budget: ${fields.get('budget')}`,
      '',
      fields.get('message').trim(),
    ].join('\n');
    const url = new URL(personalInfo.whatsappUrl);
    url.searchParams.set('text', message);
    setDraft({ href: url.href, projectType });
  }

  return (
    <section className="contact overflow-hidden ra-about-contact" id="contact" aria-labelledby="about-contact-heading">
      <div className="data-padding">
        <div className="container">
          <div className="row contact-design">
            <div className="top-design-contact" aria-hidden="true"><img src={`${assets}/about/right-peack.png`} alt="" loading="lazy" /></div>
            <div className="right-design-contact" aria-hidden="true"><img src={`${assets}/about/bottom-right.png`} alt="" loading="lazy" /></div>
            <div className="center-image" aria-hidden="true"><img src={`${assets}/contact/top-center.png`} alt="" loading="lazy" /></div>
            <div className="wave-image" aria-hidden="true"><img src={`${assets}/contact/wave.png`} alt="" loading="lazy" /></div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-data">
                <h2 className="second-heading data-text fade_down" id="about-contact-heading">Have a Project in Mind?</h2>
                <p className="contact-desc fade_down">Tell me what you’d like to build or improve, what you need it to do, and when you’d like to launch.</p>
                <a href={`mailto:${personalInfo.email}`} className="mail-contact fade_down">
                  <div className="image-contact"><img src={`${assets}/contact/mail.svg`} alt="" /></div>
                  <p>{personalInfo.email}</p>
                </a>
                <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mail-contact data-call fade_down" aria-label={`WhatsApp ${personalInfo.phone}`}>
                  <div className="image-contact"><img src={`${assets}/contact/call.svg`} alt="" /></div>
                  <p>{personalInfo.phone}</p>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="relative-box" id="about-inquiry">
                <form className="main-contact" onSubmit={prepareInquiry} onChange={() => setDraft(null)} aria-labelledby="about-inquiry-heading">
                  <div className="contact-page">
                    <div className="title-contact-page">
                      <h3 id="about-inquiry-heading">Tell Me About Your Project</h3>
                      <span>Fill in your details to prepare a WhatsApp message.</span>
                    </div>
                    <div className="input-form-first">
                      <input className="input-fields" type="text" name="name" autoComplete="name" placeholder="Your name" aria-label="Your name" maxLength="100" required />
                      <input className="input-fields" type="email" name="email" autoComplete="email" placeholder="Your email address" aria-label="Your email address" maxLength="254" required />
                      <InquirySelect name="project" label="Project type" placeholder="Select a project type" options={inquiryTypes} selectionProps={{ value: projectType, onChange: (event) => onProjectTypeChange(event.target.value) }} />
                      <InquirySelect name="budget" label="Budget in USD" placeholder="Select a budget" options={budgets} selectionProps={{ defaultValue: '' }} />
                      <div className="interes-contact">
                        <label htmlFor="about-inquiry-message">Project details</label>
                        <div className="selcted-area">
                          <textarea className="custom-textarea border-0" id="about-inquiry-message" name="message" rows="4" maxLength="2000" placeholder="Tell me what you need…" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-mark" data-button-motion><ButtonLabel>Prepare Inquiry</ButtonLabel></button>
                  <div className="ra-about-draft" aria-live="polite">
                    {draft?.projectType === projectType && <a className="btn-mark" data-button-motion href={draft.href} target="_blank" rel="noopener noreferrer"><ButtonLabel>Open WhatsApp</ButtonLabel></a>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
