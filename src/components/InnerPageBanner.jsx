/**
 * @file InnerPageBanner.jsx
 * @description Standardized Global Inner Pages Banner matching Bran Star Layout-2 design.
 * Features 2-column header layout: Left-aligned H1 Title & Breadcrumbs,
 * and 351x540 Rehan Ayaz hero portrait with decorative geometric frames on the right.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function InnerPageBanner({
  title,
  breadcrumb,
  parentLink = null,
  parentTitle = null,
}) {
  const currentBreadcrumb = breadcrumb || title;

  return (
    <section className="top-applicant-data data-padding pt-0">
      <div className="container">
        <div className="top-applicant-detail row align-items-center">
          {/* Left Column: Heading and Breadcrumb Path */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="data-over-top">
              <h1 className="header-top-aplication">{title}</h1>
              <nav className="index-header" aria-label="Breadcrumb">
                <Link
                  to="/"
                  className="ra-breadcrumb-link"
                  style={{ whiteSpace: 'nowrap', margin: 0, textDecoration: 'none' }}
                >
                  Home
                </Link>
                <img
                  src="/assets/images/hero/right.svg"
                  alt="separator"
                  width="16"
                  height="16"
                  style={{
                    width: '16px',
                    height: '16px',
                    minWidth: '16px',
                    maxWidth: '16px',
                    flexShrink: 0,
                    margin: 0,
                  }}
                />
                {parentLink && parentTitle ? (
                  <>
                    <Link
                      to={parentLink}
                      className="ra-breadcrumb-link"
                      style={{ whiteSpace: 'nowrap', margin: 0, textDecoration: 'none' }}
                    >
                      {parentTitle}
                    </Link>
                    <img
                      src="/assets/images/hero/right.svg"
                      alt="separator"
                      width="16"
                      height="16"
                      style={{
                        width: '16px',
                        height: '16px',
                        minWidth: '16px',
                        maxWidth: '16px',
                        flexShrink: 0,
                        margin: 0,
                      }}
                    />
                    <p
                      className="ra-breadcrumb-current"
                      style={{ whiteSpace: 'nowrap', margin: 0, padding: 0 }}
                    >
                      {currentBreadcrumb}
                    </p>
                  </>
                ) : (
                  <p
                    className="ra-breadcrumb-current"
                    style={{ whiteSpace: 'nowrap', margin: 0, padding: 0 }}
                  >
                    {currentBreadcrumb}
                  </p>
                )}
              </nav>
            </div>
          </div>

          {/* Right Column: 351x540 Hero Portrait with Layout-2 Geometric Accents */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="dispaly-data-apllication position-relative">
              <div className="top-left-apllicant">
                <img src="/assets/images/hero/left-minc-top.png" alt="" loading="lazy" />
              </div>
              <div className="top-left-bottom-apllicant">
                <img src="/assets/images/hero/top-left-app.png" alt="" loading="lazy" />
              </div>

              {/* Central Cutout Pill with 351x540 Rehan Ayaz Portrait */}
              <div className="deta-men-applicant text-center">
                <picture>
                  <source srcSet="/assets/images/hero/expert-351x540.webp" type="image/webp" />
                  <img
                    src="/assets/images/hero/expert-351x540.png"
                    alt="Rehan Ayaz - Professional Web Developer & WordPress Specialist"
                    className="data-conter expert img-fluid"
                    width="351"
                    height="540"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>

              <div className="top-right-apllicant">
                <img src="/assets/images/hero/top-right-app.png" alt="" loading="lazy" />
              </div>
              <div className="top-right-bottom-apllicant">
                <img src="/assets/images/hero/right-minc-top.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
