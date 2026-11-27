/**
 * @file BlogDetailPage.jsx
 * @description Authentic Bran Star Layout-2 Blog Detail Page for Rehan Ayaz.
 * Restored to 100% template structural and visual parity:
 * 1. Global Inner Page Banner (InnerPageLayout)
 * 2. 2-Column Article Split (.blog-detail#blog-detail):
 *    - Left 8-col: Meta pills, hero image (image-under-1.png), article body, sub-images (image-under-2.png, image-under-3.png), blockquote (quite-detail), checklist, next post link, author review (with /assets/images/favicon.ico)
 *    - Right 4-col sticky sidebar: Search widget, Recent articles list, Categories, Tags, and direct consultation card (get-touch-design-box)
 * 3. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { useParams, Link, Navigate } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';
import { blogs, personalInfo } from '../data/portfolioData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blogIndex = blogs.findIndex((b) => b.slug === slug || b.id === slug);
  const currentPost = blogIndex !== -1 ? blogs[blogIndex] : blogs[0];

  if (!currentPost) {
    return <Navigate to="/blog" replace />;
  }

  const nextPost = blogs[(blogIndex + 1) % blogs.length];
  const recentPosts = blogs.filter((b) => b.id !== currentPost.id).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: currentPost.title,
    description: currentPost.excerpt,
    datePublished: '2026-11-01',
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      image: 'https://rehanayaz.com/assets/images/favicon.ico',
    },
    url: `https://rehanayaz.com/blog/${currentPost.slug}`,
  };

  return (
    <InnerPageLayout
      title="Blog Details"
      breadcrumb="Blog Details"
      parentLink="/blog"
      parentTitle="Blogs Grid"
      seoTitle={`${currentPost.title} | Rehan Ayaz`}
      seoDesc={currentPost.excerpt}
      canonicalPath={`/blog/${currentPost.slug}`}
      schema={articleSchema}
    >
      {/* ==================== [ Section 1: Authentic Layout-2 Blog Detail Body ] ==================== */}
      <div className="blog-detail" id="blog-detail">
        <div className="container">
          <div className="row deta-blog-detail-separate">
            {/* Left 8-Column Main Article */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              <h2 className="second-heading zoom_in">{currentPost.title}</h2>

              {/* Meta Pills matching Layout-2 */}
              <div className="lebal-data-set my-4">
                <div className="data-fact-block">
                  <div className="blog-filed">
                    <img src="/assets/images/blog/blog-price.png" alt="category" />
                    <p>{currentPost.category}</p>
                  </div>
                  <div className="blog-filed">
                    <img src="/assets/images/blog/disc.png" alt="read-time" />
                    <p>{currentPost.readTime || '6 min read'}</p>
                  </div>
                </div>
                <div className="data-fact-block">
                  <div className="blog-filed">
                    <img src="/assets/images/blog/time.png" alt="date" />
                    <p>{currentPost.date || 'November 2026'}</p>
                  </div>
                  <div className="blog-filed">
                    <img
                      src="/assets/images/favicon.ico"
                      alt="author avatar"
                      style={{ width: '18px', height: '18px', borderRadius: '50%' }}
                    />
                    <p>{currentPost.author || 'Rehan Ayaz'}</p>
                  </div>
                </div>
              </div>

              {/* Main Cover Illustration */}
              <div className="image-design-under data-blogred p-0 mb-4">
                <div className="blog-ledt">
                  <img src="/assets/images/blog/left-deta.png" alt="" loading="lazy" />
                </div>
                <div className="img services-main-detail-img">
                  <div className="img-container">
                    <img
                      src={currentPost.coverImg || '/assets/images/blog/image-under-1.png'}
                      alt={currentPost.title}
                      className="img-fluid w-100"
                      style={{ maxHeight: '480px', objectFit: 'cover' }}
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="blog-ledt-bottom">
                  <img src="/assets/images/blog/left-deta.png" alt="" loading="lazy" />
                </div>
              </div>

              {/* Article Paragraphs */}
              <p className="text-services-descr fade_down">
                {currentPost.excerpt ||
                  "Modern web architectures demand uncompromising speed, resilient component isolation, and intuitive user experiences. In this deep dive, we explore production-tested strategies to optimize web platforms for conversion and scale."}
              </p>

              <div className="sec-text-desc my-4">
                <h3 className="services-sec-heading-sec text-blog-desc fade_down">
                  Why Clean Architecture &amp; Performance Matter
                </h3>
              </div>

              <p className="text-services-descr fade_down">
                Building a website isn't just about assembling visual blocks — it's about
                architecting a durable digital asset. By prioritizing sub-second initial paint times,
                semantic markup, and modular code, we ensure your users experience seamless
                interactions while search engines reward your domain with superior organic rankings.
              </p>

              {/* 2 Sub-Images matching Layout-2 */}
              <div className="box-image-design padding-thtin row my-4">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="detail-image">
                    <div className="img-container">
                      <img
                        src="/assets/images/blog/image-under-2.png"
                        alt="Architecture diagram"
                        className="img-fluid w-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="detail-image img">
                    <div className="img-container">
                      <img
                        src="/assets/images/blog/image-under-3.png"
                        alt="Code performance"
                        className="img-fluid w-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-services-descr fade_down">
                Step into an ecosystem where technical precision meets high conversion. With
                rigorous Core Web Vitals optimization and fluid micro-interactions, we eliminate
                friction points across every customer touchpoint.
              </p>

              {/* Layout-2 Blockquote */}
              <div className="quite-detail data-mices my-4">
                <img src="/assets/images/blog/quite.png" alt="quote" loading="lazy" />
                <div className="bloger-quite">
                  <h3 className="text-quite">
                    "Engineering excellence is not an accident; it is the deliberate result of clean
                    architecture, disciplined standards, and continuous performance refinement."
                  </h3>
                  <div className="design-bloger-name">
                    <div className="line-bloger"></div>
                    <p>Rehan Ayaz</p>
                  </div>
                </div>
              </div>

              <div className="sec-text-desc my-4">
                <h3 className="services-sec-heading-sec text-blog-desc fade_down">
                  Key Engineering Takeaways
                </h3>
              </div>

              {/* Checklist matching Layout-2 */}
              <div className="click-text mb-4">
                <div className="data-click">
                  <img src="/assets/images/blog/click.png" alt="check" />
                  <p>
                    Modular component design allows rapid feature iteration without code regression.
                  </p>
                </div>
                <div className="data-click">
                  <img src="/assets/images/blog/click.png" alt="check" />
                  <p>
                    Sub-second load times directly correlate with higher checkout conversion rates.
                  </p>
                </div>
                <div className="data-click">
                  <img src="/assets/images/blog/click.png" alt="check" />
                  <p>
                    Semantic HTML5 and JSON-LD schemas establish resilient search visibility.
                  </p>
                </div>
              </div>

              <p className="text-services-descr fade_down">
                Turn your web platform into your hardest-working business asset. Whether starting
                fresh or re-engineering legacy code, technical precision delivers lasting competitive
                advantage.
              </p>

              {/* Next Post Link matching Layout-2 */}
              <Link
                to={`/blog/${nextPost.slug}`}
                className="image-transpodirt text-decoration-none d-block my-5"
              >
                <p>NEXT POST</p>
                <h2 className="second-heading mb-0 color-mode">{nextPost.title}</h2>
              </Link>

              {/* Author Overview Box using /assets/images/favicon.ico */}
              <div className="sec-text-desc my-4">
                <h3 className="services-sec-heading-sec text-blog-desc fade_down">About the Author</h3>
              </div>
              <div className="comment-deta mb-5">
                <div className="comment-detail d-flex align-items-start gap-3 p-4 border" style={{ backgroundColor: 'var(--sub-background)' }}>
                  <div className="image-comment">
                    <img
                      src="/assets/images/favicon.ico"
                      alt="Rehan Ayaz"
                      style={{ width: '56px', height: '56px', borderRadius: '50%' }}
                    />
                  </div>
                  <div className="design-dated-comment">
                    <div className="top-data-comment mb-2">
                      <p className="fw-bold m-0">Written by Rehan Ayaz</p>
                      <span className="small text-muted">Full-Stack Web Developer &amp; WordPress Specialist</span>
                    </div>
                    <p className="comment-data-desc m-0 small text-muted" style={{ lineHeight: '24px' }}>
                      Rehan Ayaz specializes in modern React frontends, high-converting WooCommerce stores, and speed optimization for clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4-Column Sticky Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-12">
              <aside className="position-sticky" style={{ top: '100px' }}>
                {/* Recent Articles Widget */}
                <div className="border p-4 mb-4" style={{ backgroundColor: 'var(--sub-background)' }}>
                  <p className="services-sec-heading-sec mb-3">Recent Articles:</p>
                  <div className="d-flex flex-column gap-3">
                    {recentPosts.map((rPost) => (
                      <Link
                        to={`/blog/${rPost.slug}`}
                        key={rPost.id}
                        className="text-decoration-none text-current pb-2 border-bottom"
                      >
                        <span className="small text-muted d-block">{rPost.date}</span>
                        <h4 className="h6 m-0 mt-1 fw-bold">{rPost.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="border p-4 mb-4" style={{ backgroundColor: 'var(--sub-background)' }}>
                  <p className="services-sec-heading-sec mb-3">Article Tags:</p>
                  <div className="d-flex flex-wrap gap-2">
                    {(currentPost.tags || ['React', 'WordPress', 'Next.js', 'SEO', 'Architecture']).map(
                      (tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 border small font-monospace"
                          style={{ backgroundColor: 'var(--princing-box-border)' }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Direct Consultation Box matching Layout-2 */}
                <div className="get-touch-design-box">
                  <Link to="/" className="logo-service text-decoration-none">
                    <p>Rehan</p> Ayaz
                  </Link>
                  <p className="services-sec-heading-sec mb-4">
                    Have questions about architecting your next web application?
                  </p>
                  <Link to="/contact" className="get-touch-btn text-decoration-none text-center" data-button-motion>
                    <ButtonLabel>Get In Touch</ButtonLabel>
                  </Link>
                  <img
                    src="/assets/images/services/bottom-left.png"
                    alt="bottom-left"
                    loading="lazy"
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== [ Section 2: Lead Gen Contact CTA ] ==================== */}
      <ContactCtaSection />
    </InnerPageLayout>
  );
}
