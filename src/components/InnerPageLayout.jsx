/**
 * @file InnerPageLayout.jsx
 * @description Standardized layout wrapper for all multi-page inner routes.
 * Implements Bran Star Layout-2 top applicant banner, breadcrumb hierarchy,
 * dynamic SEO metadata, canonical URLs, and consistent Header/Footer integration.
 */

import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import InnerPageBanner from './InnerPageBanner';

const revealSelector = '.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down';

export default function InnerPageLayout({
  title,
  breadcrumb,
  parentLink = null,
  parentTitle = null,
  seoTitle,
  seoDesc,
  canonicalPath,
  schema = null,
  banner,
  children,
  onOpenTerms,
  onOpenPrivacy
}) {
  const mainRef = useRef(null);

  // Update Document Title, Meta Description, and Canonical Link on Route Change
  useEffect(() => {
    const fullTitle = seoTitle
      ? `${seoTitle} | Rehan Ayaz`
      : `${title} | Rehan Ayaz - Professional Web Developer & WordPress Specialist`;
    document.title = fullTitle;

    const desc = seoDesc || "Rehan Ayaz is a professional full-stack web developer and WordPress specialist creating high-performance, conversion-driven websites and scalable web applications.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    // Canonical URL
    const fullCanonical = `https://rehanayaz.com${canonicalPath || window.location.pathname}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = fullCanonical;

    // Scroll to Top on Mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, seoTitle, seoDesc, canonicalPath]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const elements = main.querySelectorAll(revealSelector);
    if (!('IntersectionObserver' in window)) {
      for (const element of elements) element.classList.add('show');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.2 });

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, [canonicalPath]);

  // Generate BreadcrumbList Schema
  const breadcrumbList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://rehanayaz.com/"
    }
  ];

  if (parentLink && parentTitle) {
    breadcrumbList.push({
      "@type": "ListItem",
      "position": 2,
      "name": parentTitle,
      "item": `https://rehanayaz.com${parentLink}`
    });
    breadcrumbList.push({
      "@type": "ListItem",
      "position": 3,
      "name": breadcrumb || title,
      "item": `https://rehanayaz.com${canonicalPath || window.location.pathname}`
    });
  } else {
    breadcrumbList.push({
      "@type": "ListItem",
      "position": 2,
      "name": breadcrumb || title,
      "item": `https://rehanayaz.com${canonicalPath || window.location.pathname}`
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  return (
    <div className="ra-inner-page-wrapper inner-page-wrapper">
      {/* Dynamic SEO JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Header and Slide-out Navigation */}
      <Header />

      <main id="inner-page-main" className="ra-inner-main-content" ref={mainRef}>
        {/* ==================== [ Global Inner Pages Banner ] ==================== */}
        {banner ?? (
          <InnerPageBanner
            title={title}
            breadcrumb={breadcrumb}
            parentLink={parentLink}
            parentTitle={parentTitle}
          />
        )}

        {/* Dynamic Page Content */}
        {children}
      </main>

      {/* Footer Branding & Legal */}
      <Footer onOpenTerms={onOpenTerms} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
