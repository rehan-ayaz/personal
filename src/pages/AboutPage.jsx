import React, { useState } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import MarqueeRibbon from '../components/MarqueeRibbon';
import Pricing from '../components/Pricing';
import PrivacyModal from '../components/PrivacyModal';
import TermsModal from '../components/TermsModal';
import { personalInfo } from '../data/portfolioData';
import { AboutBanner, AboutBio, AboutProcess, AboutServices, AboutStats } from './about/AboutStory';
import { AboutContact } from './about/AboutInquiries';
import './about/about.css';

const description = 'Meet Rehan Ayaz, a web developer and WordPress specialist building fast, responsive websites and digital products for businesses worldwide.';
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  url: 'https://rehanayaz.com/about',
  image: 'https://rehanayaz.com/assets/images/about/rehan/banner.webp',
  description,
  sameAs: Object.values(personalInfo.social),
};

export default function AboutPage() {
  const [legalDocument, setLegalDocument] = useState(null);
  const [projectType, setProjectType] = useState('');

  return (
    <>
      <InnerPageLayout
        title="About Me"
        seoTitle="About Me – Web Developer & WordPress Specialist"
        seoDesc={description}
        canonicalPath="/about"
        schema={personSchema}
        banner={<AboutBanner />}
        onOpenTerms={() => setLegalDocument('terms')}
        onOpenPrivacy={() => setLegalDocument('privacy')}
      >
        <AboutBio />
        <AboutStats />
        <MarqueeRibbon />
        <AboutProcess />
        <AboutServices />
        <Pricing />
        <AboutContact projectType={projectType} onProjectTypeChange={setProjectType} />
      </InnerPageLayout>
      <TermsModal isOpen={legalDocument === 'terms'} onClose={() => setLegalDocument(null)} />
      <PrivacyModal isOpen={legalDocument === 'privacy'} onClose={() => setLegalDocument(null)} />
    </>
  );
}
