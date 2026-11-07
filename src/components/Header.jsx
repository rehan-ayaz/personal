import React, { useEffect, useState } from 'react';

/**
 * Header component featuring site logo, synchronous theme toggle button,
 * and slide-out full navigation menu drawer.
 */
export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selected-theme');
      if (saved) return saved;
      return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }
    return 'light';
  });

  // Keep body class and localStorage synchronized with theme state
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      localStorage.setItem('selected-theme', 'dark');
      localStorage.setItem('selected-icon', 'ri-sun-fill');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('selected-theme', 'light');
      localStorage.setItem('selected-icon', 'ri-moon-clear-fill');
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }
  }, [theme]);

  // Instant response theme toggle handler
  const toggleTheme = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isCurrentlyDark = document.body.classList.contains('dark-theme');
    const nextTheme = isCurrentlyDark ? 'light' : 'dark';

    if (nextTheme === 'dark') {
      document.body.classList.add('dark-theme');
      localStorage.setItem('selected-theme', 'dark');
      localStorage.setItem('selected-icon', 'ri-sun-fill');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('selected-theme', 'light');
      localStorage.setItem('selected-icon', 'ri-moon-clear-fill');
    }

    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: nextTheme } }));
    }
  };

  return (
    <>
      <header className="ra-header header" data-header>
        <div className="container">
          <div className="ra-data-spaces data-spaces">
            <a href="index.html" className="ra-logo logo">
              <span className="ra-logo-black logo-black">Rehan </span>
              <span className="ra-logo-blue logo-blue">Ayaz</span>
            </a>
            <div className="ra-menu-data menu-data">
              <button
                type="button"
                onClick={toggleTheme}
                className="ra-navbar-link navbar-link ra-sidebar-actions sidebar__actions"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <span className="ra-link-nav link-nav">
                  <i
                    className={`ra-sidebar-link sidebar__link ra-sidebar-theme sidebar__theme ${theme === 'dark' ? 'ri-sun-fill' : 'ri-moon-clear-fill'}`}
                    id="theme-button"
                  />
                </span>
              </button>
              <button className="ra-menu-bar menu-bar" aria-label="Open menu">
                <i className="ri-menu-line" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <div className="ra-menu menu" id="menu">
        <div className="ra-left-data left-data">
          <div className="ra-logo-design logo-design">
            <a href="index.html" className="ra-logo logo">
              <span className="ra-logo-black logo-black">Rehan </span>
              <span className="ra-logo-blue logo-blue">Ayaz</span>
            </a>
          </div>
          <div className="ra-navbar-data navbar-data" role="navigation" aria-label="Primary navigation">
            <ul>
              <li>
                <a href="index.html" className="ra-data-name data-name">HOME</a>
                <span className="ra-menu-number menu-number">01</span>
              </li>
              <li>
                <a href="#about" className="ra-data-name data-name">ABOUT ME</a>
                <span className="ra-menu-number menu-number">02</span>
              </li>
              <li>
                <a href="#services" className="ra-data-name data-name">SERVICES</a>
                <span className="ra-menu-number menu-number">03</span>
              </li>
              <li>
                <a href="#project" className="ra-data-name data-name">PROJECTS</a>
                <span className="ra-menu-number menu-number">04</span>
              </li>
              <li>
                <a href="#pricing" className="ra-data-name data-name">PRICING</a>
                <span className="ra-menu-number menu-number">05</span>
              </li>
              <li>
                <a href="#contact" className="ra-data-name data-name">CONTACT</a>
                <span className="ra-menu-number menu-number">06</span>
              </li>
            </ul>
          </div>
          <div className="ra-bottm-data bottm-data">
            <img src="assets/images/header/bottom-left.png" alt="" />
          </div>
          <button className="ra-close-bar close-bar ra-mistel mistel" aria-label="Close menu">
            <i className="ri-close-line" />
          </button>
        </div>

        <div className="ra-center-data center-data">
          <div className="ra-data-contact-soft data-contact-soft">
            <div className="ra-data-vector-top data-vector-top">
              <img src="assets/images/header/top-left.png" alt="" />
            </div>
            <div className="ra-data-vector-bottom data-vector-bottom">
              <img src="assets/images/header/bottom-td.png" alt="" />
            </div>
            <div className="ra-mens-data mens-data">
              <img src="assets/images/header/mens.png" alt="Rehan Ayaz" />
            </div>
            <div className="ra-data-vector-right data-vector-right">
              <img src="assets/images/header/top-right.png" alt="" />
            </div>
            <div className="ra-data-vector-right-data data-vector-right-data">
              <img src="assets/images/header/bottom-dt.png" alt="" />
            </div>
          </div>
        </div>

        <div className="ra-right-data right-data">
          <button className="ra-close-bar close-bar" aria-label="Close menu">
            <i className="ri-close-line" />
          </button>
          <div className="ra-data-contact data-contact">
            <p className="ra-project-mind project-mind">If you have any project in mind.</p>
            <p className="ra-description-data description-data">
              Have a project in mind? Let's work together to bring your vision to life.
            </p>
            <a href="mailto:hello@rehanayaz.com" className="ra-link-data link-data">hello@rehanayaz.com</a>
            <a href="tel:+923260735090" className="ra-link-data link-data mt-3">+92 326 0735090</a>
            <div className="ra-social-data social-data">
              <p className="ra-data-wich data-wich">Follow Me</p>
              <div className="ra-social-media social-media">
                <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="ri-facebook-fill" />
                </a>
                <a href="https://www.linkedin.com/in/rehan-ayaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="ri-linkedin-fill" />
                </a>
                <a href="https://wa.me/923260735090" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="ra-dot-right dot-right">
            <img src="assets/images/header/bottom-right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
