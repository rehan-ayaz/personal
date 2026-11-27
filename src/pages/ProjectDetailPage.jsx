/**
 * @file ProjectDetailPage.jsx
 * @description Authentic Bran Star Layout-2 Project Detail Page.
 * Restored to 100% template structural and visual parity:
 * 1. Title, tags & summary header
 * 2. Main visual showcase hero image (main-project-image-data)
 * 3. 2-Column Split Body:
 *    - Left 8-col: Project goals, solution, responsive mockups, highlights, and next project link
 *    - Right 4-col sticky sidebar: Project information specs (detail-over) & direct inquiry card (get-touch-design-box)
 * 4. Dual-Track Marquee Ribbon (.slider-logo)
 * 5. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { useParams, Link, Navigate } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import MarqueeRibbon from '../components/MarqueeRibbon';
import ContactCtaSection from '../components/ContactCtaSection';
import ProjectHighlights from '../components/ProjectHighlights';
import { projects, personalInfo } from '../data/portfolioData';
import { projectDetailMedia } from './project-detail-media';
import './project-detail-images.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((project) =>
    [project.slug, project.id, project.legacySlug].includes(slug ?? '')
  );
  const currentProject = projects[projectIndex];

  if (!currentProject) {
    return <Navigate to="/projects" replace />;
  }
  if (slug === currentProject.legacySlug) {
    return <Navigate to={`/projects/${currentProject.slug}`} replace />;
  }

  const media = projectDetailMedia[currentProject.slug];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: currentProject.title,
    description: currentProject.desc,
    image: `https://rehanayaz.com${currentProject.desktopImg}`,
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    url: `https://rehanayaz.com/projects/${currentProject.slug}`,
  };

  const projectDetails = [
    currentProject.client ? ['Client', currentProject.client] : ['Project', currentProject.title],
    ['Category', currentProject.category],
    ['Type', currentProject.tag],
    ['Focus', currentProject.focus],
    currentProject.techStack
      ? ['Tools', currentProject.techStack.join(', ')]
      : ['Feature', currentProject.highlights[0].title],
  ];

  return (
    <InnerPageLayout
      title={currentProject.title}
      breadcrumb={currentProject.shortTitle || currentProject.title}
      parentLink="/projects"
      parentTitle="Projects"
      seoTitle={`${currentProject.title} - Case Study & Deliverables | Rehan Ayaz`}
      seoDesc={currentProject.desc}
      canonicalPath={`/projects/${currentProject.slug}`}
      schema={projectSchema}
    >
      {/* ==================== [ Section 1: Authentic Layout-2 Project Detail Body ] ==================== */}
      <section className="project-detail-data" id="project-data">
        <div className="container">
          {/* Top Title & Metadata Row */}
          <div className="row project-top align-items-center mb-4">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-design data-width-detail">
                <h2 className="second-heading mb-0 fade_down">{currentProject.title}</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
                <div className="detail-data-main data-project-center mt-4">
                  <span className="name-contru">{currentProject.category}</span>
                  <span className="name-contru">{currentProject.tag}</span>
                  <span className="name-contru">{currentProject.focus}</span>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="data-left">
                <span className="heading fade_down">{currentProject.desc}</span>
              </div>
            </div>
          </div>

          {/* Main Visual Showcase Hero */}
          <div className="main-project-image-data mb-5">
            <div className="img project-container-image ra-project-image">
              <div className="img-container">
                <img
                  src={currentProject.desktopImg}
                  alt={currentProject.title}
                  width={media?.hero.width}
                  height={media?.hero.height}
                  className="img-fluid w-100"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Sidebar Grid */}
          <div className="row detail-project-data">
            {/* Left 8-Column Narrative */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              <p className="text-services-descr fade_down">
                {currentProject.overview}
              </p>

              <div className="main-project-image-data pb-0 mt-5">
                <h3 className="services-sec-heading-sec fade_down">Project Goals</h3>
              </div>
              <p className="text-services-descr mt-3 fade_down">
                {currentProject.objective}
              </p>

              {/* Work Overview Images Grid */}
              <div className="box-image-design data-wincd row g-4 my-4">
                {media?.supporting.map(({ file, alt }) => (
                  <div className="col-xl-6 col-lg-6 col-md-6" key={file}>
                    <div className="data-project-redius">
                      <div className="img project-container-image ra-project-image">
                        <div className="img-container">
                          <img
                            src={`/assets/images/project-details/${currentProject.slug}/${file}`}
                            alt={alt}
                            width="1536"
                            height="1024"
                            className="img-fluid w-100"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="services-sec-heading-sec fade_down">What I Did</h3>
              <p className="text-services-descr fade_down">{currentProject.solution}</p>

              <h3 className="services-sec-heading-sec mt-4 fade_down">Key Highlights</h3>
              <ProjectHighlights highlights={currentProject.highlights} />

              {/* Next Project Link Card matching Layout-2 */}
              <div className="line-design my-4"></div>
              <Link
                to={`/projects/${nextProject.slug}`}
                className="main-sec-design-hover text-decoration-none d-block"
              >
                <p>NEXT CASE STUDY</p>
                <h2 className="second-heading mb-1">{nextProject.title}</h2>
                <div className="desing-project-mag flex-wrap">
                  <span className="name-contru">{nextProject.category}</span>
                  <span className="name-contru">{nextProject.tag}</span>
                  <span className="name-contru">{nextProject.focus}</span>
                </div>
              </Link>
            </div>

            {/* Right 4-Column Sticky Project Information Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="position-sticky" style={{ top: '100px' }}>
                <p className="services-sec-heading-sec">Project Information:</p>
                <div className="detail-over">
                  {projectDetails.map(([label, value], index) => (
                    <div className={`project-name-detail${index === projectDetails.length - 1 ? ' border-0 pb-0' : ''}`} key={label}>
                      <p>{label}:</p>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Consultation Box matching Layout-2 */}
                <div className="get-touch-design-box mt-4">
                  <Link to="/" className="logo-service text-decoration-none">
                    <p>Rehan</p> Ayaz
                  </Link>
                  <p className="services-sec-heading-sec mb-4">
                    Reach out to get started about your design and development needs?
                  </p>
                  <Link to="/contact" className="get-touch-btn text-decoration-none text-center" data-button-motion>
                    <ButtonLabel>Get In Touch</ButtonLabel>
                  </Link>
                  <img src="/assets/images/services/bottom-left.png" alt="bottom-left" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Dual-Track Marquee Ribbon ] ==================== */}
      <MarqueeRibbon />

      {/* ==================== [ Section 3: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
