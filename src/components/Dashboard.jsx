/**
 * @file Dashboard.jsx
 * @description Native React container for the Rehan Ayaz Admin CMS.
 * Provides full-bleed immersive integration with direct quick-switcher,
 * zero layout breaks, strict zero-shadow policy, and clean navigation back to portfolio.
 */

import React, { useState, useEffect } from 'react';
import ButtonLabel from "./ButtonLabel";

const CMS_QUICK_TABS = [
  { id: 'overview', label: 'Overview', url: '/src/html/dashboards/sales.html', icon: 'ri-dashboard-line' },
  { id: 'analytics', label: 'Analytics', url: '/src/html/dashboards/analytics.html', icon: 'ri-line-chart-line' },
  { id: 'pages', label: 'Pages', url: '/src/html/content/pages.html', icon: 'ri-file-list-line' },
  { id: 'blogs', label: 'Blog Posts', url: '/src/html/content/blog-posts.html', icon: 'ri-article-line' },
  { id: 'projects', label: 'Projects', url: '/src/html/content/projects.html', icon: 'ri-folder-open-line' },
  { id: 'media', label: 'Media Library', url: '/src/html/media/all-media.html', icon: 'ri-image-line' },
  { id: 'seo', label: 'SEO', url: '/src/html/seo/overview.html', icon: 'ri-search-eye-line' },
  { id: 'leads', label: 'Leads CRM', url: '/src/html/forms-leads/leads.html', icon: 'ri-user-star-line' },
  { id: 'settings', label: 'Settings', url: '/src/html/settings/general.html', icon: 'ri-settings-4-line' },
];

export default function Dashboard() {
  const [currentUrl, setCurrentUrl] = useState('/src/html/dashboards/sales.html');
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab.id);
    setCurrentUrl(tab.url);
    setIsLoading(true);
  };

  return (
    <div className="rehan-cms-wrapper">
      {/* Ultra-Clean Floating Top Pill for Portfolio Return & Quick Switcher */}
      <div className="rehan-cms-floating-bar" role="toolbar" aria-label="CMS Quick Navigation">
        <a href="/" className="rehan-cms-pill-btn" data-button-motion title="Back to Portfolio Homepage">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <ButtonLabel>Portfolio</ButtonLabel>
        </a>

        <button
          type="button"
          className={`rehan-cms-pill-btn ${showQuickNav ? 'active' : ''}`}
          onClick={() => setShowQuickNav(!showQuickNav)}
          data-button-motion
          title="Toggle CMS Module Quick Switcher"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
          <ButtonLabel>Quick Jump</ButtonLabel>
        </button>

        <a
          href={currentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rehan-cms-pill-btn" data-button-motion
          title="Open currently active CMS view in standalone browser tab"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <ButtonLabel>New Tab</ButtonLabel>
        </a>
      </div>

      {/* Dropdown Quick Nav Grid */}
      {showQuickNav && (
        <div className="rehan-cms-quick-dropdown">
          <div className="rehan-cms-dropdown-header">
            <strong>Rehan Ayaz CMS Modules</strong>
            <button type="button" onClick={() => setShowQuickNav(false)} className="rehan-cms-close-btn">✕</button>
          </div>
          <div className="rehan-cms-quick-grid">
            {CMS_QUICK_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`rehan-cms-quick-item ${activeTab === tab.id ? 'active' : ''}`}
                data-button-motion
                onClick={() => {
                  handleTabChange(tab);
                  setShowQuickNav(false);
                }}
              >
                <ButtonLabel>{tab.label}</ButtonLabel>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Full-Bleed CMS Container */}
      <div className="rehan-cms-frame-wrap">
        {isLoading && (
          <div className="rehan-cms-loader">
            <div className="rehan-cms-spinner"></div>
            <span>Loading Rehan Ayaz CMS...</span>
          </div>
        )}
        <iframe
          key={currentUrl}
          src={currentUrl}
          title="Rehan Ayaz Admin CMS"
          className="rehan-cms-iframe"
          onLoad={() => setIsLoading(false)}
          allow="clipboard-read; clipboard-write; fullscreen"
        />
      </div>

      <style>{`
        .rehan-cms-wrapper {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          background: #0B0E14;
          z-index: 999999;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow: hidden;
          box-shadow: none !important;
        }

        .rehan-cms-floating-bar {
          position: fixed;
          top: 14px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1000000;
          pointer-events: auto;
        }

        .rehan-cms-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(15, 23, 42, 0.92);
          color: #E2E8F0;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          cursor: pointer;
          text-decoration: none;
          box-shadow: none !important;
          transition: all 0.2s ease;
        }

        .rehan-cms-pill-btn:hover,
        .rehan-cms-pill-btn.active {
          background: var(--ax-accent, #2BC4B0);
          color: #0A0C11;
          border-color: var(--ax-accent, #2BC4B0);
        }

        .rehan-cms-quick-dropdown {
          position: fixed;
          top: 56px;
          right: 20px;
          width: 320px;
          background: rgba(15, 23, 42, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 14px;
          z-index: 1000001;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: none !important;
        }

        .rehan-cms-dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 13px;
        }

        .rehan-cms-close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 14px;
          cursor: pointer;
          padding: 2px 6px;
        }

        .rehan-cms-close-btn:hover {
          color: #fff;
        }

        .rehan-cms-quick-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .rehan-cms-quick-item {
          display: flex;
          align-items: center;
          padding: 8px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #CBD5E1;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
        }

        .rehan-cms-quick-item:hover,
        .rehan-cms-quick-item.active {
          background: var(--ax-accent, #2BC4B0);
          color: #0A0C11;
          border-color: var(--ax-accent, #2BC4B0);
          font-weight: 600;
        }

        .rehan-cms-frame-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: none;
          overflow: hidden;
        }

        .rehan-cms-iframe {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: none;
          display: block;
        }

        .rehan-cms-loader {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #0A0C11;
          color: #94A3B8;
          font-size: 14px;
          z-index: 10;
        }

        .rehan-cms-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(43, 196, 176, 0.2);
          border-top-color: #2BC4B0;
          border-radius: 50%;
          animation: rehan-cms-spin 0.8s linear infinite;
        }

        @keyframes rehan-cms-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
