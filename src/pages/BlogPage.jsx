/**
 * @file BlogPage.jsx
 * @description Authentic Bran Star Layout-2 Blog Grid Page for Rehan Ayaz.
 * Restored to 100% template structural and visual parity:
 * 1. Global Inner Page Banner (InnerPageLayout)
 * 2. 3-Column Responsive Article Cards Grid (.blog-grid#blog-grid -> .slide-blog-grid-box)
 * 3. Verified technical metadata, dates, categories, and cover visuals
 * 4. Lead Generation Contact CTA (.contact.overflow-hidden)
 */

import React, { useState } from 'react';
import ButtonLabel from "../components/ButtonLabel";
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout';
import ContactCtaSection from '../components/ContactCtaSection';
import { blogs, personalInfo } from '../data/portfolioData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Engineering',
    'Content Management',
    'Performance & SEO',
  ];

  const blogImages = [
    '/assets/images/blog/image-5.png',
    '/assets/images/blog/image-2.png',
    '/assets/images/blog/image-4.png',
    '/assets/images/blog/image-1.png',
    '/assets/images/blog/image-3.png',
    '/assets/images/blog/image-6.png',
  ];

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter(
          (b) =>
            b.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            (b.tags && b.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase())))
        );

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Technical Web Development Articles by Rehan Ayaz',
    description:
      'Technical insights on React, Next.js, Headless WordPress, Core Web Vitals, and AI Engineering.',
    url: 'https://rehanayaz.com/blog',
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    blogPost: blogs.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: '2026-11-01',
      author: {
        '@type': 'Person',
        name: personalInfo.name,
      },
      url: `https://rehanayaz.com/blog/${post.slug}`,
    })),
  };

  return (
    <InnerPageLayout
      title="Blogs Grid"
      breadcrumb="Blogs Grid"
      seoTitle="Blogs & Technical Insights - Web Architecture & WordPress | Rehan Ayaz"
      seoDesc="Read technical engineering guides, headless WordPress tutorials, and performance optimization case studies written by Rehan Ayaz."
      canonicalPath="/blog"
      schema={blogListSchema}
    >
      {/* ==================== [ Section 1: Authentic Layout-2 Blog Grid ] ==================== */}
      <section className="blog-grid" id="blog-grid">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className="ra-filter-button px-4 py-2 text-uppercase small fw-bold"
                  data-button-motion
                  aria-pressed={isActive}
                >
                  <ButtonLabel>{cat}</ButtonLabel>
                </button>
              );
            })}
          </div>

          {/* 3-Column Articles Grid matching Layout-2 */}
          <div className="row blog-top-grid g-4">
            {filteredBlogs.map((post, idx) => {
              const cover = post.coverImg || blogImages[idx % blogImages.length];
              return (
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={post.id}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="slide-blog-grid-box text-decoration-none h-100"
                  >
                    <div className="image-data-blog data-project-redius">
                      <div className="img data-blog-grid">
                        <div className="img-container">
                          <img
                            src={cover}
                            alt={post.title}
                            className="img-fluid w-100"
                            style={{ minHeight: '260px', objectFit: 'cover' }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="time-blog">
                      {post.date?.toUpperCase() || 'NOVEMBER 2026'} -{' '}
                      {post.category?.toUpperCase() || 'DEVELOPMENT'}
                    </p>
                    <h2 className="blog-name">{post.title}</h2>
                  </Link>
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
