import React, { useEffect, useRef, useState } from 'react';
import ButtonLabel from "../../components/ButtonLabel";
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';

const assets = '/assets/images';
const photos = `${assets}/about/rehan`;
const ribbonAccent = `${assets}/about/round-shape.png`;

const bannerAccents = [
  ['top-left-apllicant', 'left-minc-top.png'],
  ['top-left-bottom-apllicant', 'top-left-app.png'],
  ['top-right-apllicant', 'top-right-app.png'],
  ['top-right-bottom-apllicant', 'right-minc-top.png'],
];

const bioAccents = [
  ['image-top-data-test-left', 'services/bottom-left.png'],
  ['image-top-data-test-right-top', 'about/right-peack.png'],
  ['image-top-data-test-right', 'about/right-peack.png'],
  ['image-top-data-test-right-bttom', 'about/bottom-right.png'],
];

const serviceAccents = [
  ['image-top-what', 'services/top-left.png'],
  ['image-right-what', 'services/top-left.png'],
  ['image-bottom-right-what', 'services/top-left.png'],
  ['image-bottom-left-what', 'services/bottom-left.png'],
];

const socialLinks = [
  ['LinkedIn', 'ri-linkedin-fill', personalInfo.social.linkedin],
  ['GitHub', 'ri-github-fill', personalInfo.social.github],
  ['Facebook', 'ri-facebook-fill', personalInfo.social.facebook],
  ['WhatsApp', 'ri-whatsapp-line', personalInfo.whatsappUrl],
  ['Google Business Profile', 'ri-google-fill', 'https://share.google/utjvSBhLUilRx9qRa'],
];

const contactLinks = [
  ['phone', 'WhatsApp', personalInfo.phone, personalInfo.whatsappUrl],
  ['mail', 'Email', personalInfo.email, `mailto:${personalInfo.email}`],
];

const stats = [
  [personalInfo.projectsCompleted, 'Projects completed', '[ Delivered ]'],
  [personalInfo.experienceYears, 'Years of experience', '[ Specialized ]'],
  [personalInfo.clientSatisfaction, 'Client satisfaction', '[ Verified ]'],
  ['95+', 'Happy clients', '[ Worldwide ]'],
];
const metricNumbers = stats.map(([value]) => Number.parseInt(value, 10));
const metricSuffixes = stats.map(([value]) => value.replace(/^\d+/, ''));

const process = [
  ['Discovery & Strategy', 'I start with your goals, audience, and requirements so we can agree on what the project needs to achieve.'],
  ['Design & Architecture', 'I map key pages and workflows, then turn them into responsive prototypes you can review before development.'],
  ['Development & Testing', 'I build the site or application, then check it across devices for usability, speed, and accessibility.'],
  ['Launch & Support', 'I prepare the site for launch, make sure you can manage it, and provide the support included in your plan.'],
];

const offerings = [
  ['Website Design & Development', 'web-development', 'websites'],
  ['WordPress & WooCommerce', 'web-development', 'commerce'],
  ['AI & Intelligent Automation', 'ai-automation', 'automation'],
  ['Mobile App Development', 'mobile-apps', 'mobile'],
  ['SaaS Application Development', 'saas-development', 'saas'],
  ['Website Speed & Technical SEO', 'web-development', 'performance'],
];

function Accents({ items, root = assets }) {
  return items.map(([className, path]) => (
    <div className={className} key={className} aria-hidden="true">
      <img src={`${root}/${path}`} alt="" />
    </div>
  ));
}

export function AboutBanner() {
  return (
    <section className="top-applicant-data data-padding pt-0 ra-about-banner">
      <div className="container">
        <div className="top-applicant-detail row">
          <div className="col-md-6 col-12">
            <div className="data-over-top">
              <h1 className="header-top-aplication">About Me</h1>
              <nav className="index-header" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <img src={`${assets}/hero/right.svg`} width="16" height="16" alt="" />
                <p aria-current="page">About Me</p>
              </nav>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="dispaly-data-apllication">
              <Accents items={bannerAccents} root={`${assets}/hero`} />
              <div className="deta-men-applicant">
                <img className="data-conter" src={`${photos}/banner.webp`} width="351" height="540" alt="Rehan Ayaz" fetchpriority="high" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutBio() {
  return (
    <section className="testimonial ra-about-bio" id="testimonial" aria-labelledby="about-bio-heading">
      <div className="test-container overflow-hidden">
        <div className="testimonial-data row">
          <div className="col-xl-6 col-lg-4 col-md-12 data-testimonial-padding ra-about-bio-visual">
            <Accents items={bioAccents} />
            <img className="ra-about-bio-photo" src={`${photos}/profile.webp`} width="860" height="875" alt="A developer testing a responsive site in a design studio" decoding="async" />
          </div>
          <div className="col-xl-6 col-lg-8 col-md-12 data-testimonial-padding">
            <div className="mister-detail">
              <div className="heading-testidial-about">
                <h2 className="second-heading data-color-test" id="about-bio-heading">Web Developer &amp; WordPress Specialist</h2>
                <p className="dark-fix-color">
                  <span>I'm {personalInfo.name}.</span> I build fast, responsive websites that businesses can manage themselves. With <span>{personalInfo.experienceYears} years of experience</span>, I've worked on WordPress sites, eCommerce stores, and custom web applications for clients worldwide. I focus on clear navigation, fast loading, and a straightforward handover.
                </p>
                <img src={`${assets}/about/round-shape-bk.png`} alt="" />
              </div>
              <div className="download-social-data">
                <a href={`${assets}/hero/Download_CV.pdf`} download="Rehan-Ayaz-Resume.pdf" className="download text-decoration-none" data-button-motion><ButtonLabel>Download CV</ButtonLabel></a>
                <div className="social-meadia-scotted">
                  {socialLinks.map(([label, icon, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="medail-social-dispay" aria-label={label}>
                      <i className={icon} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-mics">
                {contactLinks.map(([icon, label, value, href]) => (
                  <div className="calling-mincs" key={label}>
                    <div className="calling-picked"><img src={`${assets}/about/${icon}.svg`} alt="" /><p className="dark-fix-color">{label}</p></div>
                    <div className="calling-picked"><a href={href}><span>{value}</span></a></div>
                  </div>
                ))}
                <div className="calling-mincs border-mickesd-filfer">
                  <div className="calling-picked"><img src={`${assets}/about/web.svg`} alt="" /><p className="dark-fix-color">Website</p></div>
                  <div className="calling-picked"><Link to="/"><span>rehanayaz.com</span></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsMetrics() {
  const metrics = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();

      const tick = (now) => {
        const elapsed = Math.min(1, (now - start) / 850);
        setProgress(1 - (1 - elapsed) ** 3);
        if (elapsed < 1) frame = requestAnimationFrame(tick);
      };

      setProgress(0);
      frame = requestAnimationFrame(tick);
    });

    observer.observe(metrics.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="design-exper-sciot" ref={metrics}>
      {stats.map(([value, label, badge], index) => (
        <div className="expeinece-area expeinece-area-coun zoom_in" key={label}>
          <div className="number-ex">
            <div className="dot" aria-hidden="true" />
            <span className="visually-hidden">{value}</span>
            <p className="expre-number-pot" aria-hidden="true">{Math.round(metricNumbers[index] * progress)}{metricSuffixes[index]}</p>
          </div>
          <div className="name-of-exper"><p>{label}</p><span>{badge}</span></div>
        </div>
      ))}
    </div>
  );
}

export function AboutStats() {
  return (
    <section className="data-counder data-padding ra-about-stats" aria-labelledby="about-stats-heading">
      <div className="container">
        <div className="ra-stats-layout">
          <div className="main-second-heading-data">
            <h2 className="second-heading max-data-width mb-0 zoom_in" id="about-stats-heading">The Work Behind the Numbers</h2>
            <img src={ribbonAccent} alt="" />
          </div>
          <div className="ra-stats-content">
            <p className="heading-text-desc zoom_in">I work directly with businesses, founders, and eCommerce brands. From the first brief to launch, I keep clients informed about what’s ready, what’s being tested, and what they need to review.</p>
            <StatsMetrics />
          </div>
          <img className="ra-stats-visual ra-about-stats-photo" src={`${photos}/development-workspace.webp`} alt="Development workspace with responsive layouts and a performance dashboard" width="880" height="660" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export function AboutProcess() {
  return (
    <section className="data-counter data-padding ra-about-process" aria-labelledby="about-process-heading">
      <div className="container">
        <div className="project-submitter row data-implement">
          <div className="col-lg-6 col-12">
            <div className="main-second-heading-data">
              <h2 className="second-heading max-data-width mb-0 zoom_in" id="about-process-heading">How I Take a Project From Idea to Launch</h2>
              <img src={ribbonAccent} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <ol className="process-list">
              {process.map(([title, description], index) => (
                <li className="process-item" key={title}>
                  <Accents items={[
                    ['img-inter-top', 'about/right-peack.png'],
                    ['img-inter-bottom', 'about/bottom-peack.png'],
                  ]} />
                  <span className="number-ui" aria-hidden="true">0{index + 1}</span>
                  <div className="process-content"><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function moveServicePreview(event) {
  const link = event.currentTarget;
  const bounds = link.getBoundingClientRect();
  link.style.setProperty('--about-preview-x', `${event.clientX - bounds.left}px`);
  link.style.setProperty('--about-preview-y', `${event.clientY - bounds.top}px`);
}

export function AboutServices() {
  return (
    <section className="what-do data-padding ra-about-services" aria-labelledby="about-services-heading">
      <Accents items={serviceAccents} />
      <div className="container">
        <div className="main-second-heading-data modhe-midek">
          <h2 className="second-heading data-color-test-what" id="about-services-heading">What I Do</h2>
          <p className="heading-desc fade_down dark-fix-color">I design and build websites, stores, and applications. I also help businesses improve existing sites and automate repetitive workflows.</p>
          <img src={`${assets}/services/round-shape-serv.png`} alt="" />
        </div>
        <ul className="hovering-data option-design-data">
          {offerings.map(([title, slug, filename], index) => (
            <li key={filename}>
              <Link className={`link ra-about-service text-decoration-none${index === offerings.length - 1 ? ' border-btn-bdr' : ''}`} to={`/services/${slug}`} onPointerMove={moveServicePreview}>
                <div className="text-data"><h3 className="text-name dark-fix-color">{title}</h3></div>
                <div className="hover-reveal" aria-hidden="true">
                  <img src={`${photos}/${filename}.webp`} alt="" width="480" height="480" decoding="async" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
