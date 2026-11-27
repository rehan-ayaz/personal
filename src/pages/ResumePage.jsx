/**
 * @file ResumePage.jsx
 * @description Authentic Bran Star Layout-2 Resume & CV Page for Rehan Ayaz.
 * Restored to 100% template structural and visual parity:
 * 1. Hero headline with decorative badges & download resume button (.resume-desc)
 * 2. Career Experience & Education Timeline (.education-data) with node connectors
 * 3. Best Quality Skills Percentage Cards (.quality-data)
 * 4. Dual-Track Marquee Ribbon (.slider-logo)
 * 5. Achievement & Certifications Showcase (.award-achivment)
 * 6. Recent Projects Showcase (.project)
 * 7. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import MarqueeRibbon from '../components/MarqueeRibbon';
import ContactCtaSection from '../components/ContactCtaSection';
import { personalInfo, experience, projects } from '../data/portfolioData';

export default function ResumePage() {
  const resumeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `${personalInfo.name} - Resume & Credentials`,
    mainEntity: {
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.role,
      description: personalInfo.tagline,
      url: 'https://rehanayaz.com/resume',
    },
  };

  const jobExperiences = [
    {
      role: 'Lead Full-Stack Web Developer',
      company: 'Digital Solutions Group / 2023 - Present',
      desc: 'Architecting enterprise-grade React frontends, high-converting WooCommerce stores, and RESTful microservices for international clientele.',
      img: '/assets/images/resume/image-1.png',
    },
    {
      role: 'Senior WordPress Engineer',
      company: 'Tech Consulting Partners / 2021 - 2023',
      desc: 'Engineered custom lightweight themes, headless WordPress deployments with Next.js, and reduced average page load times below 0.8 seconds.',
      img: '/assets/images/resume/image-2.png',
    },
    {
      role: 'Web Application Developer',
      company: 'Creative Studio / 2018 - 2021',
      desc: 'Developed responsive client web portals, API integrations, and database schemas with strict adherence to Web Content Accessibility Guidelines (WCAG).',
      img: '/assets/images/resume/image-3.png',
    },
  ];

  const educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'FAST-NUCES / 2014 - 2018',
      desc: 'Comprehensive coursework in Software Engineering, Data Structures, Relational Database Management, and Web Application Architecture.',
      img: '/assets/images/resume/image-4.png',
    },
    {
      degree: 'Full-Stack Web Development Specialization',
      institution: 'Meta Professional Certified / 2020',
      desc: 'In-depth mastery of modern React hooks, component hierarchies, state orchestration, server-side rendering, and performance profiling.',
      img: '/assets/images/resume/image-5.png',
    },
    {
      degree: 'Advanced WordPress & Headless CMS Architecture',
      institution: 'VIP Architecture Standards / 2022',
      desc: 'Security hardening, custom Gutenberg block engineering, headless GraphQL endpoints, and multi-tenant WooCommerce optimization.',
      img: '/assets/images/resume/image-6.png',
    },
  ];

  const qualitySkills = [
    { num: '01', name: 'WordPress', type: 'CMS Engineering', score: '98', img: '/assets/images/skill/image-6.png' },
    { num: '02', name: 'React / Next.js', type: 'Frontend Architecture', score: '96', img: '/assets/images/skill/image-1.png' },
    { num: '03', name: 'Node.js & APIs', type: 'Backend Systems', score: '92', img: '/assets/images/skill/image-2.png' },
    { num: '04', name: 'PHP / Laravel', type: 'Server Logic', score: '94', img: '/assets/images/skill/image-5.png' },
    { num: '05', name: 'Speed & SEO', type: 'Core Web Vitals', score: '95', img: '/assets/images/skill/image-3.png' },
    { num: '06', name: 'Figma UI/UX', type: 'Product Design', score: '90', img: '/assets/images/skill/image-4.png' },
  ];

  const achievements = [
    {
      year: '2026',
      title: 'Certified WordPress Specialist',
      org: 'Enterprise VIP Standards',
      img: '/assets/images/award/award-1.png',
    },
    {
      year: '2025',
      title: 'Google PageSpeed Optimization Honors',
      org: 'Core Web Vitals Benchmark',
      img: '/assets/images/award/award-2.png',
    },
    {
      year: '2024',
      title: 'Top Rated Web Engineer',
      org: 'Global Client Network',
      img: '/assets/images/award/award-3.png',
    },
    {
      year: '2023',
      title: 'Meta Certified Frontend Specialist',
      org: 'Meta Developer Certification',
      img: '/assets/images/award/award-4.png',
    },
    {
      year: '2022',
      title: 'Outstanding eCommerce Deliverables',
      org: 'Client Portfolio Awards',
      img: '/assets/images/award/award-5.png',
    },
    {
      year: '2020',
      title: 'Excellence in Modular Architecture',
      org: 'Developer Excellence Network',
      img: '/assets/images/award/award-6.png',
    },
  ];

  return (
    <InnerPageLayout
      title="Resume / CV"
      breadcrumb="Resume / CV"
      seoTitle="Resume / CV - Professional Experience & Credentials | Rehan Ayaz"
      seoDesc="Review Rehan Ayaz's verified career history, full-stack competencies, educational background, and technical certifications in WordPress and React web engineering."
      canonicalPath="/resume"
      schema={resumeSchema}
    >
      {/* ==================== [ Section 1: Hero Overview & Download ] ==================== */}
      <section className="resume-desc">
        <div className="container">
          <h2 className="desc-resume-data-images">
            I'm a <span className="title-text">Versatile Engineer</span>{' '}
            <span className="image-gradient">
              <img src="/assets/images/resume/desc-img.png" alt="decorative" />
            </span>{' '}
            <span className="title-text">and Developer</span>{' '}
            <img src="/assets/images/resume/smilly.png" alt="smilly" className="smily" /> passionate
            about crafting high-quality, impactful digital experiences that truly stand out.
          </h2>

          <div className="row resume-docy align-items-center">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="image-resumne">
                <img
                  src="/assets/images/resume/left-resume.png"
                  alt="Rehan Ayaz credentials"
                  className="img-fluid"
                  loading="eager"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-12">
              <div className="self-descript">
                <p className="data-picks-selt">
                  I'm a multidisciplinary professional web developer and WordPress specialist based in
                  Islamabad, Pakistan, with 2+ years of experience delivering high-performance,
                  conversion-focused websites and applications. With a disciplined focus on speed, modular
                  code, and accessible UI/UX, I bridge the gap between creative visual designs and
                  scalable engineering logic.
                </p>
                <a
                  href="/assets/images/hero/Download_CV.pdf"
                  download="Rehan-Ayaz-Resume.pdf"
                  className="resume-btn text-decoration-none text-center d-inline-block" data-button-motion
                >
                  <ButtonLabel>Download Resume</ButtonLabel>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Experience & Education Timeline ] ==================== */}
      <section className="education-data data-padding">
        <div className="test-container">
          <div className="row exelant-edu">
            {/* Left Column: Job Experience */}
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="education-detail">
                <div className="tilte-education">
                  <h2 className="second-heading text-start">My Job Experience</h2>
                  <p>
                    2+ years of hands-on industry experience delivering production applications,
                    scaling stores, and leading agile engineering sprints.
                  </p>
                </div>
                <div className="education-list">
                  {jobExperiences.map((job, idx) => (
                    <div className="education" key={idx}>
                      <div className="eduction-left">
                        <div className="education-cirlce">
                          <div className="cicles_blue"></div>
                        </div>
                      </div>
                      <div className="education-meanse-data">
                        <div className="name-univer">
                          <div className="detail-desc-edu">
                            <p>{job.role}</p>
                            <span>{job.company}</span>
                          </div>
                          <div className="img-education">
                            <img src={job.img} alt={job.role} loading="lazy" />
                          </div>
                        </div>
                        <p className="desc-ducation">{job.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Educational History */}
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="education-detail">
                <div className="tilte-education">
                  <h2 className="second-heading text-start">My Education &amp; Training</h2>
                  <p>
                    Building a rock-solid technical foundation through continuous professional
                    certifications, computer science rigor, and applied research.
                  </p>
                </div>
                <div className="education-list">
                  {educationItems.map((edu, idx) => (
                    <div className="education" key={idx}>
                      <div className="eduction-left">
                        <div className="education-cirlce">
                          <div className="cicles_blue"></div>
                        </div>
                      </div>
                      <div className="education-meanse-data">
                        <div className="name-univer">
                          <div className="detail-desc-edu">
                            <p>{edu.degree}</p>
                            <span>{edu.institution}</span>
                          </div>
                          <div className="img-education">
                            <img src={edu.img} alt={edu.degree} loading="lazy" />
                          </div>
                        </div>
                        <p className="desc-ducation">{edu.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 3: Best Quality Skills Grid ] ==================== */}
      <section className="quality-data data-padding pt-0">
        <div className="container">
          <div className="row top-queality-sec align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="main-second-heading-data queality-sticket">
                <h2 className="second-heading mb-0 zoom_in">Best Quality Skills</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="queality-desc m-0">
                Delivering battle-tested capabilities backed by verified production experience,
                precision, and a commitment to engineering excellence.
              </p>
            </div>
          </div>

          <div className="skill-detail row g-3">
            {qualitySkills.map((sk, idx) => (
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={idx}>
                <div className="skill-box">
                  <div className="name-image-box">
                    <span>{sk.num}</span>
                    <img src={sk.img} alt={sk.name} loading="lazy" />
                  </div>
                  <p className="mega-counter counter">
                    <span className="counter-js quality-js count">{sk.score}</span>%
                  </p>
                  <div className="skill-name-design">
                    <p>{sk.name}</p>
                    <span>{sk.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== [ Section 4: Dual-Track Marquee Ribbon ] ==================== */}
      <MarqueeRibbon />

      {/* ==================== [ Section 5: Achievements & Awards ] ==================== */}
      <section className="award-achivment data-padding" id="award-achivment">
        <div className="container">
          <div className="row award-winnging align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="main-second-heading-data">
                <h2 className="second-heading mb-0 zoom_in">Achievements &amp; Honors</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
              <div className="award-mieanse-left mt-4">
                <img
                  src="/assets/images/award/left-award.png"
                  alt="award-badge"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="award-data-detail">
                {achievements.map((ach, idx) => (
                  <div className="link-award" key={idx}>
                    <div className="lindes-abs">
                      <p className="year-award">{ach.year}</p>
                      <div className="award-detail-type-resume">
                        <img src={ach.img} alt={ach.title} loading="lazy" />
                        <div className="award-name-detail-resume">
                          <p>{ach.title}</p>
                          <span>{ach.org}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 6: Recent Projects Showcase ] ==================== */}
      <section className="project data-padding pb-0" id="project">
        <div className="container">
          <div className="row project-top align-items-center mb-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-design">
                <h2 className="second-heading mb-0 fade_down">Recent Portfolio Deliverables.</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="data-left">
                <span className="heading fade_down">
                  Browse recent WordPress and WooCommerce projects, including Figma conversions
                  and an online store for tech accessories.
                </span>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {projects.slice(0, 3).map((prj, pIdx) => (
              <div className="col-lg-4 col-md-6" key={prj.id}>
                <Link
                  to={`/projects/${prj.slug}`}
                  className="data-project-detail-made text-decoration-none d-block h-100"
                >
                  <div className="project-slider-image">
                    <div className="img image-project-data">
                      <div className="img-container">
                        <img
                          src={prj.desktopImg}
                          alt={prj.title}
                          className="img-fluid w-100"
                          style={{ minHeight: '260px', objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-data-cond">
                    <div className="num-project-slider">
                      <h3>{String(pIdx + 1).padStart(2, '0')}</h3>
                      <img src="/assets/images/project/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="name-slider-project">
                      <h3>{prj.title}</h3>
                      <div className="detail-data-main">
                        <span className="name-contru">{prj.category}</span>
                        <span className="name-contru">
                          {prj.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== [ Section 7: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
