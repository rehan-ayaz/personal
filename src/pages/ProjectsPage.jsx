/**
 * @file ProjectsPage.jsx
 * @description Authentic Bran Star Layout-2 Projects Portfolio Page.
 * Restored to 100% template structural and visual parity:
 * 1. Header with title & breadcrumbs (via InnerPageLayout)
 * 2. Filterable Projects Showcase (.project#project) with authentic .sticky-project rows
 * 3. 2-Column project rows (.data-detail.sticky-project) with project number, arrow, category pills, and mockup visuals
 * 4. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';
import { projects, personalInfo } from '../data/portfolioData';

const categories = ['All', ...new Set(projects.map((project) => project.group))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.group === activeCategory);

  const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Web Development & Software Projects by Rehan Ayaz',
    itemListElement: projects.map((proj, idx) => ({
      '@type': 'CreativeWork',
      position: idx + 1,
      name: proj.title,
      description: proj.desc,
      url: `https://rehanayaz.com/projects/${proj.slug}`,
      image: `https://rehanayaz.com${proj.desktopImg}`,
      author: {
        '@type': 'Person',
        name: personalInfo.name,
      },
    })),
  };

  return (
    <InnerPageLayout
      title="Projects"
      breadcrumb="Projects"
      seoTitle="Projects & Portfolio - Case Studies & Live Deliverables | Rehan Ayaz"
      seoDesc="Explore Rehan Ayaz’s portfolio of Figma-to-WordPress builds, e-commerce stores, corporate websites, and online learning platforms."
      canonicalPath="/projects"
      schema={projectListSchema}
    >
      {/* ==================== [ Section 1: Authentic Layout-2 Projects Grid ] ==================== */}
      <section className="project" id="project">
        <div className="container">
          <div className="row project-top align-items-center mb-4">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-design">
                <h2 className="second-heading mb-0 fade_down">Our Recent Projects.</h2>
                <img src="/assets/images/about/round-shape.png" alt="round-shape" loading="lazy" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="data-left">
                <p className="heading fade_down m-0">
                  See how I turned Figma designs into WordPress sites, built online stores, and
                  developed websites for businesses and online learning.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="ra-filter-button px-4 py-2 text-uppercase small fw-bold"
                  data-button-motion
                  aria-pressed={isActive}
                >
                  <ButtonLabel>{cat}</ButtonLabel>
                </button>
              );
            })}
          </div>

          {/* Layout-2 Sticky Project Rows */}
          <div className="sticky-project">
            {filteredProjects.map((project, idx) => {
              const paddedNum = String(idx + 1).padStart(2, '0');

              return (
                <div className="row data-detail align-items-center" key={project.id}>
                  {/* Left 6-Column: Project Number, Title & Tags */}
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-detail text-decoration-none"
                    >
                      <div className="number-of-project">
                        <p>{paddedNum}</p>
                        <img src="/assets/images/project/Arrow.png" alt="Arrow" />
                      </div>
                      <div className="name-project">
                        <h3 className="mb-2">{project.title}</h3>
                        <div className="detail-data-main">
                          <span className="name-contru">{project.category}</span>
                          <span className="name-contru">{project.tag}</span>
                          <span className="name-contru">{project.focus}</span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Right 6-Column: Project Visual */}
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="project-image">
                      <div className="img data">
                        <div className="img-container">
                          <Link to={`/projects/${project.slug}`}>
                            <img
                              src={project.desktopImg}
                              alt={project.title}
                              className="img-fluid w-100"
                              style={{
                                maxHeight: '380px',
                                objectFit: 'cover',
                                border: '1px solid var(--princing-box-border)',
                              }}
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== [ Section 2: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
