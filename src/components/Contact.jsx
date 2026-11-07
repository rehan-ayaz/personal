/**
 * @file Contact.jsx
 * @description Direct contact section with custom accessible selects, responsive form grid,
 * and standardized dual-class naming convention (ra-*).
 */
import React, { useState, useRef, useEffect } from 'react';

function CustomSelect({ name, id, placeholder, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handlePointerDown);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="ra-custom-select-wrapper custom-select-wrapper" ref={containerRef}>
      <input type="hidden" name={name} id={id} value={value} />
      <button
        type="button"
        className={`ra-custom-select-trigger custom-select-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`ra-selected-text selected-text ${!selectedOption ? 'is-placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className="ra-chevron-icon chevron-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="ra-custom-select-dropdown custom-select-dropdown" role="listbox">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`ra-custom-select-option custom-select-option ${isSelected ? 'is-selected' : ''}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg
                    className="ra-check-icon check-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Contact(props) {
  const [interestedProject, setInterestedProject] = useState('');
  const [budget, setBudget] = useState('');

  const projectOptions = [
    { value: 'wordpress_website', label: 'WordPress Website' },
    { value: 'ecommerce_store', label: 'E-Commerce Store' },
    { value: 'speed_optimization', label: 'Speed Optimization' },
    { value: 'custom_web_development', label: 'Custom Web Development' },
  ];

  const budgetOptions = [
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
  ];

  return (
    <>
      {/* ==================== [ Contact section Start ] ==================== */}
      <section className="ra-contact contact overflow-hidden" id="contact">
        <div className="ra-data-padding data-padding">
          <div className="container">
            <div className="row ra-contact-design contact-design ">
              <div className="ra-top-design-contact top-design-contact">
                <img src="assets/images/about/right-peack.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="ra-right-design-contact right-design-contact">
                <img src="assets/images/about/bottom-right.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="ra-center-image center-image">
                <img src="assets/images/contact/top-center.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="ra-wave-image wave-image">
                <img src="assets/images/contact/wave.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="ra-contact-data contact-data">
                  <h2 className="ra-second-heading second-heading ra-data-text data-text">If you have any project in mind.</h2>
                  <p className="ra-contact-desc contact-desc fade_down">Have a project in mind, a question, or just want to say hello? Feel free to reach out!</p>
                  <a href="mailto:hello@rehanayaz.com" className="ra-mail-contact mail-contact fade_down">
                    <div className="ra-image-contact image-contact">
                      <img src="assets/images/contact/mail.svg" alt="mail" loading="lazy" decoding="async" />
                    </div>
                    <p>hello@rehanayaz.com</p>
                  </a>
                  <a href="tel:+923260735090" className="ra-mail-contact mail-contact ra-data-call data-call fade_down">
                    <div className="ra-image-contact image-contact">
                      <img src="assets/images/contact/call.svg" alt="call" loading="lazy" decoding="async" />
                    </div>
                    <p>+92 326 0735090</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="ra-relative-box relative-box">
                  <form className="ra-main-contact main-contact">
                    <div className="ra-contact-page contact-page">
                      <div className="ra-title-contact-page title-contact-page">
                        <h3>Send Us a Message</h3>
                        <p>Give us a chance to serve and bring magic to your brand.</p>
                      </div>

                      {/* Contact Form Grid: Half-Half for Name, Email, Interested In, Budget; Full Width for Your Request */}
                      <div className="ra-contact-form-grid contact-form-grid">
                        {/* Row 1, Left: Name */}
                        <div className="ra-contact-field-half contact-field-half">
                          <input
                            type="text"
                            name="username"
                            autoComplete="name"
                            className="ra-input-fiels input-fiels"
                            placeholder="Enter Name"
                            required
                          />
                        </div>

                        {/* Row 1, Right: Email */}
                        <div className="ra-contact-field-half contact-field-half">
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="ra-input-fiels input-fiels"
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>

                        {/* Row 2, Left: Interested In */}
                        <div className="ra-contact-field-half contact-field-half">
                          <div className="ra-interes-contact interes-contact">
                            <label htmlFor="interested_project">I'm interested in:</label>
                            <CustomSelect
                              name="interested_project"
                              id="interested_project"
                              placeholder="Select project"
                              options={projectOptions}
                              value={interestedProject}
                              onChange={setInterestedProject}
                            />
                          </div>
                        </div>

                        {/* Row 2, Right: Budget */}
                        <div className="ra-contact-field-half contact-field-half">
                          <div className="ra-interes-contact interes-contact">
                            <label htmlFor="budget">My budget is:</label>
                            <CustomSelect
                              name="budget"
                              id="budget"
                              placeholder="Select budget"
                              options={budgetOptions}
                              value={budget}
                              onChange={setBudget}
                            />
                          </div>
                        </div>

                        {/* Row 3, Full Width: Your Request */}
                        <div className="ra-contact-field-full contact-field-full">
                          <div className="ra-interes-contact interes-contact">
                            <label htmlFor="message">Your Request:</label>
                            <div className="ra-selcted-area selcted-area">
                              <textarea
                                rows="4"
                                cols="50"
                                placeholder="Write here..."
                                className="ra-custom-textarea custom-textarea border-0"
                                name="message"
                                id="message"
                                spellCheck="false"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="ra-btn-mark btn-mark" type="submit"><span>Submit</span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
