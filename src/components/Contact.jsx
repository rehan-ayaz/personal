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
    <div className="custom-select-wrapper" ref={containerRef}>
      <input type="hidden" name={name} id={id} value={value} />
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`selected-text ${!selectedOption ? 'is-placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className="chevron-icon"
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
        <ul className="custom-select-dropdown" role="listbox">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg
                    className="check-icon"
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
      <section className="contact overflow-hidden" id="contact">
        <div className="data-padding">
          <div className="container">
            <div className="row contact-design ">
              <div className="top-design-contact">
                <img src="assets/images/about/right-peack.png" alt="right-peack" loading="lazy" decoding="async" />
              </div>
              <div className="right-design-contact">
                <img src="assets/images/about/bottom-right.png" alt="bottom-right" loading="lazy" decoding="async" />
              </div>
              <div className="center-image">
                <img src="assets/images/contact/top-center.png" alt="top-center" loading="lazy" decoding="async" />
              </div>
              <div className="wave-image">
                <img src="assets/images/contact/wave.png" alt="wave" loading="lazy" decoding="async" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-data">
                  <h2 className="second-heading data-text">If you have any project in mind.</h2>
                  <p className="contact-desc fade_down">Have a project in mind, a question, or just want to say hello? Feel free to reach out!</p>
                  <a href="mailto:hello@rehanayaz.com" className="mail-contact fade_down">
                    <div className="image-contact">
                      <img src="assets/images/contact/mail.svg" alt="mail" loading="lazy" decoding="async" />
                    </div>
                    <p>hello@rehanayaz.com</p>
                  </a>
                  <a href="tel:+923260735090" className="mail-contact data-call fade_down">
                    <div className="image-contact">
                      <img src="assets/images/contact/call.svg" alt="call" loading="lazy" decoding="async" />
                    </div>
                    <p>+92 326 0735090</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="relative-box">
                  <form className="main-contact">
                    <div className="contact-page">
                      <div className="title-contact-page">
                        <h3>Send Us a Message</h3>
                        <p>Give us a chance to serve and bring magic to your brand.</p>
                      </div>

                      {/* Contact Form Grid: Half-Half for Name, Email, Interested In, Budget; Full Width for Your Request */}
                      <div className="contact-form-grid">
                        {/* Row 1, Left: Name */}
                        <div className="contact-field-half">
                          <input
                            type="text"
                            name="username"
                            autoComplete="name"
                            className="input-fiels"
                            placeholder="Enter Name"
                            required
                          />
                        </div>

                        {/* Row 1, Right: Email */}
                        <div className="contact-field-half">
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="input-fiels"
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>

                        {/* Row 2, Left: Interested In */}
                        <div className="contact-field-half">
                          <div className="interes-contact">
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
                        <div className="contact-field-half">
                          <div className="interes-contact">
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
                        <div className="contact-field-full">
                          <div className="interes-contact">
                            <label htmlFor="message">Your Request:</label>
                            <div className="selcted-area">
                              <textarea
                                rows="4"
                                cols="50"
                                placeholder="Write here..."
                                className="custom-textarea border-0"
                                name="message"
                                id="message"
                                spellCheck="false"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn-mark" type="submit"><span>Submit</span></button>
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
