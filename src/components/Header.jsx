import React, { useEffect, useState } from 'react';

export default function Header(props) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selected-theme');
      if (saved) return saved;
      return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }
    return 'light';
  });

  // Ensure body class and localStorage stay synced with state
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
  }, [theme]);

  // Synchronous theme toggle for instant 0ms response
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
  };

  return (
    <>
    {/* ==================== [ Header Section Start ] ==================== */}
    <header className="header" data-header>
        <div className="container">
            <div className="data-spaces">
                <a href="index.html" className="logo">
                    <span className="logo-black">Rehan </span><span className="logo-blue">Ayaz</span>
                </a>
                <div className="menu-data">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="navbar-link sidebar__actions"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <span className="link-nav">
                            <i
                                className={`sidebar__link sidebar__theme ${theme === 'dark' ? 'ri-sun-fill' : 'ri-moon-clear-fill'}`}
                                id="theme-button"
                            >
                            </i>
                        </span>
                    </button>
                    <button className="menu-bar" aria-label="Open menu">
                        <i className="ri-menu-line"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    {/*  [ Menu Design Data start ]  */}
    <div className="menu" id="menu">
        <div className="left-data">
            <div className="logo-design">
                <a href="index.html" className="logo">
                    <span className="logo-black">Rehan </span><span className="logo-blue">Ayaz</span>
                </a>
            </div>
            <div className="navbar-data">
                <ul>
                    <li>
                        <a href="index.html" className="data-name">HOME</a>
                        <span className="menu-number">01</span>
                    </li>
                    <li>
                        <a href="#about" className="data-name">ABOUT ME</a>
                        <span className="menu-number">02</span>
                    </li>
                    <li>
                        <a href="#services" className="data-name">SERVICES</a>
                        <span className="menu-number">03</span>
                    </li>
                    <li>
                        <a href="#project" className="data-name">PROJECTS</a>
                        <span className="menu-number">04</span>
                    </li>
                    <li>
                        <a href="#pricing" className="data-name">PRICING</a>
                        <span className="menu-number">05</span>
                    </li>
                    <li>
                        <a href="#contact" className="data-name">CONTACT</a>
                        <span className="menu-number">06</span>
                    </li>
                </ul>
            </div>
            <div className="bottm-data">
                <img src="assets/images/header/bottom-left.png" alt="bottom-left" />
            </div>
            <button className="close-bar mistel" aria-label="Close menu">
                <i className="ri-close-line"></i>
            </button>
        </div>
        <div className="center-data">
            <div className="data-contact-soft">
                <div className="data-vector-top">
                    <img src="assets/images/header/top-left.png" alt="top-left" />
                </div>
                <div className="data-vector-bottom">
                    <img src="assets/images/header/bottom-td.png" alt="bottom-td" />
                </div>
                <div className="mens-data">
                    <img src="assets/images/header/mens.png" alt="mens" />
                </div>
                <div className="data-vector-right">
                    <img src="assets/images/header/top-right.png" alt="top-right" />
                </div>
                <div className="data-vector-right-data">
                    <img src="assets/images/header/bottom-dt.png" alt="bottom-dt" />
                </div>
            </div>
        </div>
        <div className="right-data">
            <button className="close-bar">
                <i className="ri-close-line"></i>
            </button>
            <div className="data-contact">
                <p className="project-mind">If you have any project in mind.</p>
                <p className="description-data">Have a project in mind? Let's work together to bring your vision
                    to life.</p>
                <a href="mailto:hello@rehanayaz.com" className="link-data">hello@rehanayaz.com</a>
                <a href="tel:+923260735090" className="link-data mt-3">+92 326 0735090</a>
                <div className="social-data">
                    <p className="data-wich">Follow Me</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/rehan.ayaz.399" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rehan-ayaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://wa.me/923260735090" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="ri-whatsapp-line"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="dot-right">
                <img src="assets/images/header/bottom-right.png" alt="bottom-right" />
            </div>
        </div>
    </div>
    {/* ==================== [ Header Section Exit ] ==================== */}

    </>
  );
}
