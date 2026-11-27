import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header component featuring site logo, synchronous theme toggle button,
 * and slide-out full navigation menu drawer.
 * Fully global and interactive across both Homepage and all inner routes.
 */
export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Window scroll detection for sticky blurred header
  useEffect(() => {
    const handleScroll = () => {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        (window.smoother ? window.smoother.scrollTop() : 0) ||
        0;
      setIsScrolled(top > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 7 Main Pages strictly in the exact order requested
  const navItems = [
    { num: '01', title: 'HOME', path: '/' },
    { num: '02', title: 'ABOUT ME', path: '/about' },
    { num: '03', title: 'SERVICES', path: '/services' },
    { num: '04', title: 'PROJECTS', path: '/projects' },
    { num: '05', title: 'BLOG', path: '/blog' },
    { num: '06', title: 'PRICING', path: '/pricing' },
    { num: '07', title: 'CONTACT', path: '/contact' },
  ];

  const isItemActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header
        className={`ra-header header ${isScrolled ? 'active is-scrolled' : ''}`}
        data-header
        style={
          isScrolled
            ? {
                backgroundColor:
                  theme === 'dark' ? 'rgba(13, 13, 13, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom:
                  theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(0, 0, 0, 0.06)',
                padding: '14px 0',
                transition: 'background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease',
              }
            : {
                backgroundColor: 'transparent',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                padding: '20px 0',
                transition: 'background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease',
              }
        }
      >
        <div className="container">
          <div className="ra-data-spaces data-spaces">
            <Link
              to="/"
              className="ra-logo logo"
              aria-label="Rehan Ayaz Homepage"
              onClick={() => handleNavClick('/')}
            >
              <span className="ra-logo-black logo-black">Rehan </span>
              <span className="ra-logo-blue logo-blue">Ayaz</span>
            </Link>
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
                    className={`ra-sidebar-link sidebar__link ra-sidebar-theme sidebar__theme ${
                      theme === 'dark' ? 'ri-sun-fill' : 'ri-moon-clear-fill'
                    }`}
                    id="theme-button"
                  />
                </span>
              </button>
              <button
                type="button"
                onClick={openMenu}
                className="ra-menu-bar menu-bar"
                aria-label="Open menu"
              >
                <i className="ri-menu-line" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <div className={`ra-menu menu ${isMenuOpen ? 'active' : ''}`} id="menu">
        <div className="ra-left-data left-data">
          <div className="ra-logo-design logo-design">
            <Link
              to="/"
              className="ra-logo logo"
              aria-label="Rehan Ayaz Homepage"
              onClick={() => handleNavClick('/')}
            >
              <span className="ra-logo-black logo-black">Rehan </span>
              <span className="ra-logo-blue logo-blue">Ayaz</span>
            </Link>
          </div>
          <nav className="ra-navbar-data navbar-data" role="navigation" aria-label="Primary navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`ra-data-name data-name ${isItemActive(item.path) ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.title}
                  </Link>
                  <span className="ra-menu-number menu-number">{item.num}</span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ra-bottm-data bottm-data">
            <img src="/assets/images/header/bottom-left.png" alt="" />
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="ra-close-bar close-bar ra-mistel mistel"
            aria-label="Close menu"
          >
            <i className="ri-close-line" />
          </button>
        </div>

        <div className="ra-center-data center-data">
          <div className="ra-data-contact-soft data-contact-soft">
            <div className="ra-data-vector-top data-vector-top">
              <img src="/assets/images/header/top-left.png" alt="" />
            </div>
            <div className="ra-data-vector-bottom data-vector-bottom">
              <img src="/assets/images/header/bottom-td.png" alt="" />
            </div>
            <div className="ra-mens-data mens-data">
              <img src="/assets/images/header/mens.png" alt="Rehan Ayaz" />
            </div>
            <div className="ra-data-vector-right data-vector-right">
              <img src="/assets/images/header/top-right.png" alt="" />
            </div>
            <div className="ra-data-vector-right-data data-vector-right-data">
              <img src="/assets/images/header/bottom-dt.png" alt="" />
            </div>
          </div>
        </div>

        <div className="ra-right-data right-data">
          <button
            type="button"
            onClick={closeMenu}
            className="ra-close-bar close-bar"
            aria-label="Close menu"
          >
            <i className="ri-close-line" />
          </button>
          <div className="ra-data-contact data-contact">
            <p className="ra-project-mind project-mind">If you have any project in mind.</p>
            <p className="ra-description-data description-data">
              Have a project in mind? Let's work together to bring your vision to life.
            </p>
            <a href="mailto:hello@rehanayaz.com" className="ra-link-data link-data">
              hello@rehanayaz.com
            </a>
            <a href="tel:+923260735090" className="ra-link-data link-data mt-3">
              +92 326 0735090
            </a>
            <div className="ra-social-data social-data">
              <p className="ra-data-wich data-wich">Follow Me</p>
              <div className="ra-social-media social-media">
                <a
                  href="https://www.facebook.com/rehan.ayaz.399"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rehan-ayaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill" />
                </a>
                <a
                  href="https://wa.me/923260735090"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="ri-whatsapp-line" />
                </a>
                <a
                  href="https://share.google/utjvSBhLUilRx9qRa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                >
                  <i className="ri-google-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="ra-dot-right dot-right">
            <img src="/assets/images/header/bottom-right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
