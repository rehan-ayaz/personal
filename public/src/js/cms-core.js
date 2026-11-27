/**
 * @file cms-core.js
 * @description Central CMS Data Store, CRUD controller, and UI manager for the Rehan Ayaz Admin CMS.
 * Features localStorage persistence, seed data from live website content, activity logging,
 * search, filtering, sorting, pagination, CSV import/export, and modal CRUD operations.
 */

(function () {
  'use strict';

  const buttonMotion = document.createElement('script');
  buttonMotion.type = 'module';
  buttonMotion.src = '/assets/js/button-motion.js';
  document.head.append(buttonMotion);

  // Seed data reflecting the actual portfolio website content
  const DEFAULT_CMS_DATA = {
    pages: [
      { id: 1, title: 'Homepage', slug: '/', status: 'Published', author: 'Rehan Ayaz', template: 'Default Portfolio', views: 18450, seoTitle: 'Rehan Ayaz - Professional Web Developer & WordPress Specialist', metaDesc: 'Professional web developer and WordPress specialist creating responsive, SEO-friendly websites.', updated: '2026-11-20' },
      { id: 2, title: 'About Me', slug: '/#about', status: 'Published', author: 'Rehan Ayaz', template: 'Section Anchor', views: 9820, seoTitle: 'About Rehan Ayaz - Senior Web Architect', metaDesc: 'Learn about my technical background, development stack, and design philosophy.', updated: '2026-11-19' },
      { id: 3, title: 'Services Showcase', slug: '/#services', status: 'Published', author: 'Rehan Ayaz', template: 'Pinned Showcase', views: 12400, seoTitle: 'High-Impact Web & WordPress Services', metaDesc: 'Bespoke web development, headless WordPress, AI automation, and cloud architecture.', updated: '2026-11-18' },
      { id: 4, title: 'Selected Work (Portfolio)', slug: '/#work-section', status: 'Published', author: 'Rehan Ayaz', template: 'Horizontal Slider', views: 15300, seoTitle: 'Featured Projects & Case Studies - Rehan Ayaz', metaDesc: 'Explore enterprise ERPs, eCommerce solutions, and bespoke web applications.', updated: '2026-11-21' },
      { id: 5, title: 'Our Process', slug: '/#process', status: 'Published', author: 'Rehan Ayaz', template: 'Interactive Stacking Cards', views: 8200, seoTitle: 'Our Work Process - From Concept to Launch', metaDesc: 'Structured, results-driven engineering roadmap focused on technical precision.', updated: '2026-11-22' },
      { id: 6, title: 'Pricing & Packages', slug: '/#pricing', status: 'Published', author: 'Rehan Ayaz', template: 'Pricing Grid', views: 6700, seoTitle: 'Transparent Web Development Pricing', metaDesc: 'Explore Starter, Professional, and Enterprise packages.', updated: '2026-11-15' },
      { id: 7, title: 'Contact & Inquiries', slug: '/#contact', status: 'Published', author: 'Rehan Ayaz', template: 'Contact Section', views: 5400, seoTitle: 'Get in Touch - Rehan Ayaz', metaDesc: 'Schedule a discovery call or request a project quotation.', updated: '2026-11-21' },
      { id: 8, title: 'Terms & Conditions', slug: '/terms', status: 'Published', author: 'Rehan Ayaz', template: 'Legal Modal / Page', views: 1200, seoTitle: 'Terms of Service', metaDesc: 'Project terms, milestone agreements, and copyright licensing.', updated: '2026-11-10' },
      { id: 9, title: 'Privacy Policy', slug: '/privacy', status: 'Published', author: 'Rehan Ayaz', template: 'Legal Modal / Page', views: 1100, seoTitle: 'Privacy Policy', metaDesc: 'Data collection, analytics, and client confidentiality policies.', updated: '2026-11-10' }
    ],
    blogs: [
      { id: 1, title: 'Building Hyper-Performant GSAP Scroll Animations in React 18', slug: 'gsap-scroll-animations-react-18', category: 'Frontend Development', author: 'Rehan Ayaz', status: 'Published', views: 3420, readingTime: '6 min', seoStatus: 'Good', date: '2026-11-14', tags: ['React', 'GSAP', 'Performance'] },
      { id: 2, title: 'Headless WordPress Architecture: Speed, Scalability & Security', slug: 'headless-wordpress-architecture', category: 'WordPress & CMS', author: 'Rehan Ayaz', status: 'Published', views: 2890, readingTime: '8 min', seoStatus: 'Good', date: '2026-11-05', tags: ['WordPress', 'Headless', 'REST API'] },
      { id: 3, title: 'How to Achieve a 100/100 Google PageSpeed Score on Complex Websites', slug: 'achieve-100-pagespeed-score', category: 'Performance Optimization', author: 'Rehan Ayaz', status: 'Published', views: 4120, readingTime: '10 min', seoStatus: 'Good', date: '2026-10-28', tags: ['Core Web Vitals', 'SEO', 'Optimization'] },
      { id: 4, title: 'Modern CSS Architectures: Managing Fluid Responsive Breakpoints', slug: 'modern-css-responsive-breakpoints', category: 'UI/UX Engineering', author: 'Rehan Ayaz', status: 'Draft', views: 420, readingTime: '5 min', seoStatus: 'Needs Review', date: '2026-11-21', tags: ['CSS', 'Responsive'] }
    ],
    categories: [
      { id: 1, name: 'Frontend Development', slug: 'frontend-development', desc: 'Modern JavaScript frameworks, animation, and responsive UI engineering.', postCount: 14 },
      { id: 2, name: 'WordPress & CMS', slug: 'wordpress-cms', desc: 'Custom themes, WooCommerce, plugins, and headless solutions.', postCount: 22 },
      { id: 3, name: 'Performance Optimization', slug: 'performance-optimization', desc: 'Speed audits, caching, Core Web Vitals, and resource minimization.', postCount: 9 },
      { id: 4, name: 'UI/UX Engineering', slug: 'ui-ux-engineering', desc: 'Pixel-perfect Figma translations, micro-interactions, and accessibility.', postCount: 11 },
      { id: 5, name: 'AI & Automation', slug: 'ai-automation', desc: 'Intelligent workflows, custom agents, and API integrations.', postCount: 6 }
    ],
    tags: [
      { id: 1, name: 'React', slug: 'react', count: 18 },
      { id: 2, name: 'GSAP', slug: 'gsap', count: 12 },
      { id: 3, name: 'WordPress', slug: 'wordpress', count: 25 },
      { id: 4, name: 'WooCommerce', slug: 'woocommerce', count: 14 },
      { id: 5, name: 'SEO', slug: 'seo', count: 16 },
      { id: 6, name: 'Core Web Vitals', slug: 'core-web-vitals', count: 8 },
      { id: 7, name: 'Three.js', slug: 'threejs', count: 5 }
    ],
    projects: [
      { id: 1, title: 'Food Delivery App 4U', category: 'Full-Stack Ecosystem', client: 'Delivery 4U Global', status: 'Live', featured: true, date: '2026-09', tech: 'React, Node, WebSockets, Maps API', image: '/assets/images/projects/food-delivery/Food Delivery App 4U.webp', url: 'https://rehanayaz.com/#contact' },
      { id: 2, title: 'ERP System 4U', category: 'Enterprise Cloud App', client: 'OmniCorp Logistics', status: 'Live', featured: true, date: '2026-08', tech: 'React, PostgreSQL, Next.js, Redis', image: '/assets/images/projects/erp-system/ERP System 4U.webp', url: 'https://rehanayaz.com/#contact' },
      { id: 3, title: 'AR Gadgets', category: 'eCommerce Store', client: 'AR Electronics Store', status: 'Live', featured: true, date: '2026-07', tech: 'WooCommerce, Custom Elementor, Stripe', image: '/assets/images/projects/ar-gadgets/AR Gadgets.webp', url: 'https://rehanayaz.com/#contact' },
      { id: 4, title: 'IT Pro Services', category: 'Corporate Agency', client: 'IT Pro International', status: 'Live', featured: false, date: '2026-06', tech: 'WordPress, PHP, Cloudflare Caching', image: '/assets/images/projects/it-pro/IT Pro Services.webp', url: 'https://rehanayaz.com/#contact' },
      { id: 5, title: 'Hassan Tech', category: 'Specialized eCommerce', client: 'Hassan Tech PK', status: 'Live', featured: true, date: '2026-05', tech: 'WooCommerce Custom Filter, AJAX Cart', image: '/assets/images/projects/hassan-tech/Hassan Tech.webp', url: 'https://rehanayaz.com/#contact' },
      { id: 6, title: 'Shabelle Bank', category: 'Fintech Portal', client: 'Shabelle Commercial Bank', status: 'Live', featured: true, date: '2026-04', tech: 'Enterprise Security, SSR, Tailwind', image: '/assets/images/projects/shabelle/shabelle-bank.jpg', url: 'https://rehanayaz.com/#contact' }
    ],
    services: [
      { id: 1, title: 'AI & Intelligent Automation', slug: 'ai-automation', status: 'Active', order: 1, desc: 'Smart AI agents, custom LLM solutions, and automated intelligent workflows designed to scale business operations effortlessly.' },
      { id: 2, title: 'Website Design & Development', slug: 'web-development', status: 'Active', order: 2, desc: 'Bespoke, high-performance websites engineered with pixel-perfect UI/UX, fluid micro-interactions, and scalable clean code.' },
      { id: 3, title: 'Mobile App Design & Development', slug: 'mobile-apps', status: 'Active', order: 3, desc: 'Native & cross-platform iOS and Android mobile apps crafted for speed, seamless gestures, and immersive user journeys.' },
      { id: 4, title: 'Performance & Cloud Architecture', slug: 'cloud-performance', status: 'Active', order: 4, desc: 'Sub-second load times, 100/100 Core Web Vitals optimization, and enterprise server infrastructures.' }
    ],
    testimonials: [
      { id: 1, client: 'Alexander Wright', position: 'CTO, OmniCorp Global', rating: 5, status: 'Approved', content: 'Rehan engineered our corporate portal with extraordinary technical precision. Page speed improved by over 300% and user retention jumped noticeably.', featured: true },
      { id: 2, client: 'Sarah Jenkins', position: 'Head of Marketing, AR Gadgets', rating: 5, status: 'Approved', content: 'The custom WooCommerce filters and smooth GSAP interactions delivered an exceptional conversion boost. Highly recommended for complex projects.', featured: true },
      { id: 3, client: 'David K.', position: 'Founder, Food Delivery 4U', rating: 5, status: 'Approved', content: 'Extremely professional execution from initial Figma alignment to live production deployment. Outstanding attention to detail.', featured: false }
    ],
    team: [
      { id: 1, name: 'Rehan Ayaz', designation: 'Lead Web Architect & Full-Stack Specialist', email: 'contact@rehanayaz.com', status: 'Active', linkedin: 'https://www.linkedin.com/in/rehan-ayaz/' },
      { id: 2, name: 'Ayesha Khan', designation: 'UI/UX Visual Designer', email: 'design@rehanayaz.com', status: 'Active', linkedin: 'https://linkedin.com' },
      { id: 3, name: 'Bilal Ahmed', designation: 'Backend & DevOps Engineer', email: 'devops@rehanayaz.com', status: 'Active', linkedin: 'https://linkedin.com' }
    ],
    faqs: [
      { id: 1, question: 'What is your typical project timeline for a custom website?', category: 'Development', status: 'Published', answer: 'Most custom high-performance websites take between 2 to 4 weeks depending on architectural complexity, dynamic animations, and third-party integrations.' },
      { id: 2, question: 'Do you offer post-launch maintenance and technical support?', category: 'Support', status: 'Published', answer: 'Yes, we provide ongoing maintenance, cloud backups, security patching, and Core Web Vitals audits to ensure flawless ongoing operations.' },
      { id: 3, question: 'Can you migrate an existing WordPress or Wix site to modern React / Vite?', category: 'Migration', status: 'Published', answer: 'Absolutely. We specialize in zero-downtime migrations that preserve all SEO equity, rankings, and redirect chains while boosting speed.' }
    ],
    media: [
      { id: 1, name: 'Food Delivery App 4U.webp', folder: 'Projects', type: 'image/webp', size: '142 KB', dimensions: '1200x800', url: '/assets/images/projects/food-delivery/Food Delivery App 4U.webp' },
      { id: 2, name: 'ERP System 4U.webp', folder: 'Projects', type: 'image/webp', size: '158 KB', dimensions: '1200x800', url: '/assets/images/projects/erp-system/ERP System 4U.webp' },
      { id: 3, name: 'AR Gadgets.webp', folder: 'Projects', type: 'image/webp', size: '135 KB', dimensions: '1200x800', url: '/assets/images/projects/ar-gadgets/AR Gadgets.webp' },
      { id: 4, name: 'mens.webp', folder: 'Branding', type: 'image/webp', size: '84 KB', dimensions: '800x1000', url: '/assets/images/header/mens.webp' },
      { id: 5, name: 'logo.svg', folder: 'Branding', type: 'image/svg+xml', size: '12 KB', dimensions: 'Vector', url: '/assets/images/header/logo.svg' }
    ],
    folders: [
      { id: 1, name: 'Projects', count: 18 },
      { id: 2, name: 'Branding', count: 8 },
      { id: 3, name: 'Blog', count: 14 },
      { id: 4, name: 'Testimonials', count: 6 }
    ],
    forms: [
      { id: 1, name: 'Main Portfolio Contact Form', status: 'Active', submissions: 142, fieldsCount: 5, action: 'Email & CRM Lead' },
      { id: 2, name: 'Project Inquiry & Discovery Form', status: 'Active', submissions: 86, fieldsCount: 7, action: 'Direct Quote' },
      { id: 3, name: 'Newsletter Subscription Form', status: 'Active', submissions: 320, fieldsCount: 2, action: 'Subscriber List' }
    ],
    submissions: [
      { id: 1, form: 'Main Portfolio Contact Form', name: 'Marcus Vance', email: 'marcus@vanceenterprises.com', phone: '+1 (555) 234-5678', date: '2026-11-22 14:32', status: 'New', message: 'Looking for a complete redesign of our enterprise SaaS marketing site with custom GSAP animations.' },
      { id: 2, form: 'Project Inquiry & Discovery Form', name: 'Elena Rostova', email: 'elena@novatech.io', phone: '+44 20 7946 0912', date: '2026-11-21 09:15', status: 'Read', message: 'Need an estimate for a headless WooCommerce store with 500+ SKU inventory and live telemetry.' },
      { id: 3, form: 'Main Portfolio Contact Form', name: 'Tariq Mehmood', email: 'tariq@gulflogistics.ae', phone: '+971 50 123 4567', date: '2026-11-20 18:40', status: 'Replied', message: 'We need custom ERP dashboard integration with modern responsive UI.' }
    ],
    subscribers: [
      { id: 1, email: 'developer.john@gmail.com', name: 'John Doe', date: '2026-11-22', status: 'Active', source: 'Blog Footer' },
      { id: 2, email: 'sarah.tech@outlook.com', name: 'Sarah Smith', date: '2026-11-20', status: 'Active', source: 'Case Study Popup' },
      { id: 3, email: 'ceo@startupventures.co', name: 'Michael Chang', date: '2026-11-18', status: 'Active', source: 'Homepage CTA' }
    ],
    leads: [
      { id: 1, name: 'Marcus Vance', company: 'Vance Enterprises', email: 'marcus@vanceenterprises.com', service: 'Full-Stack Web App', status: 'New', priority: 'High', value: '$8,500', date: '2026-11-22' },
      { id: 2, name: 'Elena Rostova', company: 'NovaTech Solutions', email: 'elena@novatech.io', service: 'Headless eCommerce', status: 'Qualified', priority: 'High', value: '$12,000', date: '2026-11-21' },
      { id: 3, name: 'Tariq Mehmood', company: 'Gulf Logistics Hub', email: 'tariq@gulflogistics.ae', service: 'ERP Dashboard', status: 'Proposal Sent', priority: 'Medium', value: '$6,200', date: '2026-11-20' },
      { id: 4, name: 'Arthur Pendelton', company: 'Pendelton Realty', email: 'arthur@pendelton.com', service: 'WordPress Optimization', status: 'Converted', priority: 'Medium', value: '$3,800', date: '2026-11-15' }
    ],
    activityLogs: [
      { id: 1, activity: 'Page Updated', user: 'Rehan Ayaz', module: 'Content > Pages', time: '10 mins ago', status: 'Success', details: 'Updated meta description and schema on Homepage' },
      { id: 2, activity: 'New Lead Registered', user: 'System (Form)', module: 'Forms & Leads', time: '1 hour ago', status: 'Success', details: 'Marcus Vance submitted Discovery Inquiry' },
      { id: 3, activity: 'Database Backup Completed', user: 'Automated Cron', module: 'Security & System', time: '4 hours ago', status: 'Success', details: 'Full database snapshot verified (24.8 MB)' },
      { id: 4, activity: 'SEO Audit Executed', user: 'Rehan Ayaz', module: 'SEO Management', time: 'Yesterday', status: 'Success', details: '0 broken links, 100% canonical validation' }
    ],
    backups: [
      { id: 1, name: 'rehanayaz_full_backup_20261122.zip', type: 'Full System & DB', size: '48.2 MB', date: '2026-11-22 04:00', status: 'Verified' },
      { id: 2, name: 'rehanayaz_db_backup_20261121.sql', type: 'Database Only', size: '14.6 MB', date: '2026-11-21 04:00', status: 'Verified' },
      { id: 3, name: 'rehanayaz_content_backup_20261120.zip', type: 'Content & Media', size: '33.6 MB', date: '2026-11-20 04:00', status: 'Verified' }
    ],
    users: [
      { id: 1, name: 'Rehan Ayaz', username: 'rehan', email: 'contact@rehanayaz.com', role: 'Super Admin', status: 'Active', lastLogin: 'Just now' },
      { id: 2, name: 'Ayesha Khan', username: 'ayesha.design', email: 'ayesha@rehanayaz.com', role: 'Editor', status: 'Active', lastLogin: 'Yesterday 17:40' },
      { id: 3, name: 'Technical Auditor', username: 'auditor', email: 'seo@rehanayaz.com', role: 'SEO Manager', status: 'Active', lastLogin: '3 days ago' }
    ],
    roles: [
      { id: 1, name: 'Super Admin', usersCount: 1, desc: 'Unrestricted control over all CMS modules, settings, security, and database.' },
      { id: 2, name: 'Administrator', usersCount: 1, desc: 'Full content, SEO, leads, and media control. Cannot modify core API secrets.' },
      { id: 3, name: 'Editor', usersCount: 1, desc: 'Manage blog posts, pages, testimonials, and portfolio entries.' },
      { id: 4, name: 'SEO Manager', usersCount: 1, desc: 'Access to SEO overview, page meta tags, schema, redirects, and sitemaps.' }
    ],
    settings: {
      siteName: 'Rehan Ayaz Portfolio & CMS',
      tagline: 'Professional Web Developer & WordPress Specialist',
      siteUrl: 'https://rehanayaz.com',
      adminEmail: 'contact@rehanayaz.com',
      contactPhone: '+92 300 0000000',
      timezone: 'UTC+5 (Pakistan Standard Time)',
      maintenanceMode: false,
      smtpHost: 'smtp.mailgun.org',
      smtpPort: '587',
      smtpUser: 'postmaster@rehanayaz.com',
      smtpEncryption: 'TLS',
      analyticsId: 'G-MEASUREMENT123',
      tagManagerId: 'GTM-XXXXXXX',
      metaPixelId: '123456789012345'
    }
  };

  const STORAGE_KEY = 'rehan_ayaz_cms_store_v1';

  class CmsStore {
    constructor() {
      this.data = this.loadData();
    }

    loadData() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          // Merge with default schema in case new modules are added
          return { ...DEFAULT_CMS_DATA, ...parsed };
        }
      } catch (e) {
        console.warn('Failed to parse CMS store from localStorage, using seed defaults:', e);
      }
      this.saveData(DEFAULT_CMS_DATA);
      return JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
    }

    saveData(data) {
      this.data = data || this.data;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {
        console.error('Failed to save CMS data to localStorage:', e);
      }
    }

    getItems(collection) {
      return this.data[collection] || [];
    }

    getItem(collection, id) {
      const items = this.getItems(collection);
      return items.find((item) => item.id === Number(id) || item.id === id) || null;
    }

    saveItem(collection, item) {
      if (!this.data[collection]) this.data[collection] = [];
      const list = this.data[collection];
      let actionType = 'Created';

      if (item.id) {
        const index = list.findIndex((i) => i.id === Number(item.id) || i.id === item.id);
        if (index !== -1) {
          list[index] = { ...list[index], ...item, updated: new Date().toISOString().split('T')[0] };
          actionType = 'Updated';
        } else {
          list.push({ ...item, updated: new Date().toISOString().split('T')[0] });
        }
      } else {
        const newId = list.length > 0 ? Math.max(...list.map((i) => (Number(i.id) || 0))) + 1 : 1;
        const newItem = { ...item, id: newId, updated: new Date().toISOString().split('T')[0] };
        list.push(newItem);
      }

      this.saveData();
      this.logActivity(`${collection.toUpperCase()} ${actionType}`, 'Rehan Ayaz', actionType, collection, 'Success');
      return item;
    }

    deleteItem(collection, id) {
      if (!this.data[collection]) return false;
      const initialLen = this.data[collection].length;
      this.data[collection] = this.data[collection].filter((i) => i.id !== Number(id) && i.id !== id);
      const changed = this.data[collection].length !== initialLen;
      if (changed) {
        this.saveData();
        this.logActivity(`${collection.toUpperCase()} Deleted`, 'Rehan Ayaz', 'Delete', collection, 'Success');
      }
      return changed;
    }

    bulkDelete(collection, ids) {
      if (!this.data[collection] || !Array.isArray(ids)) return 0;
      const idSet = new Set(ids.map((id) => Number(id)));
      const count = this.data[collection].filter((i) => idSet.has(Number(i.id))).length;
      this.data[collection] = this.data[collection].filter((i) => !idSet.has(Number(i.id)));
      this.saveData();
      this.logActivity(`Bulk Deleted ${count} items from ${collection}`, 'Rehan Ayaz', 'Bulk Delete', collection, 'Success');
      return count;
    }

    bulkStatus(collection, ids, status) {
      if (!this.data[collection] || !Array.isArray(ids)) return 0;
      const idSet = new Set(ids.map((id) => Number(id)));
      let count = 0;
      this.data[collection].forEach((item) => {
        if (idSet.has(Number(item.id))) {
          item.status = status;
          count++;
        }
      });
      this.saveData();
      this.logActivity(`Bulk Updated ${count} items in ${collection} to ${status}`, 'Rehan Ayaz', 'Bulk Update', collection, 'Success');
      return count;
    }

    logActivity(activity, user = 'Rehan Ayaz', action = 'Action', module = 'System', status = 'Success') {
      if (!this.data.activityLogs) this.data.activityLogs = [];
      const newLog = {
        id: Date.now(),
        activity,
        user,
        module,
        time: 'Just now',
        status,
        details: `${action} performed on ${module}`
      };
      this.data.activityLogs.unshift(newLog);
      if (this.data.activityLogs.length > 50) this.data.activityLogs.pop();
      this.saveData();
    }

    getOverviewStats() {
      return {
        totalVisitors: '48,290',
        uniqueVisitors: '32,450',
        totalPageViews: '142,800',
        avgSessionDuration: '3m 42s',
        bounceRate: '28.4%',
        publishedPages: this.getItems('pages').filter((p) => p.status === 'Published').length,
        totalBlogPosts: this.getItems('blogs').length,
        totalProjects: this.getItems('projects').length,
        totalLeads: this.getItems('leads').length,
        totalSubscribers: this.getItems('subscribers').length,
        totalMediaFiles: this.getItems('media').length,
        pendingSubmissions: this.getItems('submissions').filter((s) => s.status === 'New').length
      };
    }

    exportCsv(collection) {
      const items = this.getItems(collection);
      if (!items || items.length === 0) return '';
      const headers = Object.keys(items[0]);
      const rows = items.map((obj) =>
        headers.map((h) => {
          let val = obj[h];
          if (Array.isArray(val)) val = val.join('; ');
          if (val === null || val === undefined) val = '';
          return `"${String(val).replace(/"/g, '""')}"`;
        }).join(',')
      );
      return [headers.join(','), ...rows].join('\n');
    }

    downloadCsv(collection, filename) {
      const csv = this.exportCsv(collection);
      if (!csv) {
        alert('No data to export.');
        return;
      }
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename || `${collection}_export_${Date.now()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Instantiate singleton
  window.CmsStore = new CmsStore();

  // Helper UI functions for rendering tables, modals, delete confirmations
  window.CmsUI = {
    // Show toast message
    toast(message, type = 'success') {
      let toastBox = document.getElementById('ax-cms-toast-box');
      if (!toastBox) {
        toastBox = document.createElement('div');
        toastBox.id = 'ax-cms-toast-box';
        toastBox.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
        document.body.appendChild(toastBox);
      }
      const toast = document.createElement('div');
      const colors = {
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        info: '#00c2ff'
      };
      toast.style.cssText = `background:var(--ax-surface, #1e293b);color:var(--ax-text-strong, #fff);border:1px solid ${colors[type] || '#10b981'};border-left:4px solid ${colors[type] || '#10b981'};padding:12px 18px;border-radius:6px;font-size:13px;font-weight:500;box-shadow:none;pointer-events:auto;transition:all 0.3s ease;transform:translateY(10px);opacity:0;`;
      toast.innerHTML = `<div style="display:flex;align-items:center;gap:8px;"><span>${message}</span></div>`;
      toastBox.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
      });
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    },

    // Confirm dialog
    confirm(title, message, onConfirm) {
      const existing = document.getElementById('ax-confirm-modal');
      if (existing) existing.remove();

      const modal = document.createElement('div');
      modal.id = 'ax-confirm-modal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);display:flex;align-items:center;justify-content:center;z-index:999999;backdrop-filter:blur(4px);';
      modal.innerHTML = `
        <div class="ax-card" style="width:100%;max-width:440px;margin:16px;border:1px solid var(--ax-border);background:var(--ax-surface);box-shadow:none;">
          <div class="ax-card__header" style="border-bottom:1px solid var(--ax-border);padding:14px 18px;">
            <h3 class="ax-card__title" style="margin:0;font-size:16px;font-weight:600;color:var(--ax-text-strong);">${title}</h3>
          </div>
          <div class="ax-card__body" style="padding:18px;">
            <p style="margin:0;color:var(--ax-text-muted);font-size:14px;line-height:1.5;">${message}</p>
          </div>
          <div class="ax-card__footer" style="padding:12px 18px;border-top:1px solid var(--ax-border);display:flex;justify-content:flex-end;gap:10px;">
            <button type="button" class="ax-btn ax-btn--secondary ax-btn--sm" id="ax-confirm-cancel">Cancel</button>
            <button type="button" class="ax-btn ax-btn--danger ax-btn--sm" id="ax-confirm-proceed">Confirm Delete</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('ax-confirm-cancel').onclick = () => modal.remove();
      document.getElementById('ax-confirm-proceed').onclick = () => {
        modal.remove();
        if (typeof onConfirm === 'function') onConfirm();
      };
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };
    }
  };

  // Sync active states on load
  document.addEventListener('DOMContentLoaded', () => {
    // Inject zero-shadow stylesheet link if missing
    if (!document.querySelector('link[href*="vireo-no-shadow.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = '/assets/vireo-no-shadow.css';
      document.head.appendChild(l);
    }
  });
})();
