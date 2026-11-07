/**
 * @file GallerySection.jsx
 * @description Standardized portfolio gallery section ("Life Outside the Screen")
 * featuring 11 bespoke interactive cards, ticker-synchronized scroll-driven scatter flight,
 * dynamic tone background morphing, and 5 venetian blind curtain slats wiping
 * seamlessly into the footer with full standardized naming convention (ra-*).
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const galleryItems = [
  {
    id: '01',
    src: '/gallery/placeholder-01.svg',
    alt: 'Mountain Expeditions',
    title: 'Mountain Expeditions',
    category: 'Exploration',
    width: { desktop: 'clamp(15rem, 25vw, 26.25rem)', mobile: '50vw' },
    aspectRatio: '1.38 / 1',
    bgTone: '#E2E8F0',
    darkBgTone: '#0F172A',
    position: { desktop: [0.15, 0.17], mobile: [0.3, 0.14] }
  },
  {
    id: '02',
    src: '/gallery/placeholder-02.svg',
    alt: 'Pour-Over & Beans',
    title: 'Pour-Over & Beans',
    category: 'Daily Ritual',
    width: { desktop: 'clamp(10.313rem, 17vw, 17.813rem)', mobile: '30vw' },
    aspectRatio: '0.76 / 1',
    bgTone: '#EFECE6',
    darkBgTone: '#1A1612',
    position: { desktop: [0.38, 0.16], mobile: [0.72, 0.16] }
  },
  {
    id: '03',
    src: '/gallery/placeholder-03.svg',
    alt: 'Urban Architecture',
    title: 'Urban Architecture',
    category: 'Street Lens',
    width: { desktop: 'clamp(16.25rem, 28vw, 28.438rem)', mobile: '54vw' },
    aspectRatio: '1.55 / 1',
    bgTone: '#E5E7EB',
    darkBgTone: '#111827',
    position: { desktop: [0.7, 0.17], mobile: [0.47, 0.3] }
  },
  {
    id: '04',
    src: '/gallery/placeholder-04.svg',
    alt: 'Workspace Nirvana',
    title: 'Workspace Nirvana',
    category: 'Minimal Desk',
    width: { desktop: 'clamp(10.313rem, 17vw, 17.813rem)', mobile: '32vw' },
    aspectRatio: '0.72 / 1',
    bgTone: '#E0E7FF',
    darkBgTone: '#0F172A',
    position: { desktop: [0.86, 0.32], mobile: [0.25, 0.43] }
  },
  {
    id: '05',
    src: '/gallery/placeholder-05.svg',
    alt: 'Trail Running',
    title: 'Trail Running',
    category: 'Movement',
    width: { desktop: 'clamp(15.625rem, 26vw, 26.875rem)', mobile: '48vw' },
    aspectRatio: '1.28 / 1',
    bgTone: '#ECFDF5',
    darkBgTone: '#064E3B',
    position: { desktop: [0.18, 0.43], mobile: [0.73, 0.43] }
  },
  {
    id: '06',
    src: '/gallery/placeholder-06.svg',
    alt: 'Vinyl & Lo-Fi',
    title: 'Vinyl & Lo-Fi',
    category: 'Soundscapes',
    width: { desktop: 'clamp(10.625rem, 18vw, 18.75rem)', mobile: '30vw' },
    aspectRatio: '0.78 / 1',
    bgTone: '#F3E8FF',
    darkBgTone: '#2E1065',
    position: { desktop: [0.46, 0.44], mobile: [0.42, 0.57] }
  },
  {
    id: '07',
    src: '/gallery/placeholder-07.svg',
    alt: 'Tech Meetups',
    title: 'Tech Meetups',
    category: 'Network',
    width: { desktop: 'clamp(16.875rem, 29vw, 29.375rem)', mobile: '56vw' },
    aspectRatio: '1.62 / 1',
    bgTone: '#EFF6FF',
    darkBgTone: '#172554',
    position: { desktop: [0.73, 0.47], mobile: [0.72, 0.67] }
  },
  {
    id: '08',
    src: '/gallery/placeholder-08.svg',
    alt: 'Weekend Reads',
    title: 'Weekend Reads',
    category: 'Curiosity',
    width: { desktop: 'clamp(9.688rem, 16vw, 16.875rem)', mobile: '28vw' },
    aspectRatio: '0.7 / 1',
    bgTone: '#FEF3C7',
    darkBgTone: '#451A03',
    position: { desktop: [0.28, 0.69], mobile: [0.27, 0.71] }
  },
  {
    id: '09',
    src: '/gallery/placeholder-09.svg',
    alt: 'Custom Keyboards',
    title: 'Custom Keyboards',
    category: 'Craft',
    width: { desktop: 'clamp(15.313rem, 25vw, 25.938rem)', mobile: '48vw' },
    aspectRatio: '1.34 / 1',
    bgTone: '#E0F2FE',
    darkBgTone: '#082F49',
    position: { desktop: [0.57, 0.71], mobile: [0.5, 0.84] }
  },
  {
    id: '10',
    src: '/gallery/placeholder-10.svg',
    alt: 'Stargazing Camps',
    title: 'Stargazing Camps',
    category: 'Solitude',
    width: { desktop: 'clamp(10.313rem, 17vw, 17.813rem)', mobile: '30vw' },
    aspectRatio: '0.74 / 1',
    bgTone: '#EDE9FE',
    darkBgTone: '#1E1B4B',
    position: { desktop: [0.82, 0.69], mobile: [0.76, 0.84] }
  },
  {
    id: '11',
    src: '/gallery/placeholder-11.svg',
    alt: 'Coastline Roadtrips',
    title: 'Coastline Roadtrips',
    category: 'Journey',
    width: { desktop: 'clamp(16.875rem, 29vw, 29.375rem)', mobile: '56vw' },
    aspectRatio: '1.62 / 1',
    bgTone: '#F1F5F9',
    darkBgTone: '#0F172A',
    position: { desktop: [0.5, 0.78], mobile: [0.15, 0.27] }
  }
];

export default function GallerySection() {
  const spacerRef = useRef(null);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const cardsRef = useRef([]);
  const slatsRef = useRef([]);
  const [pinDistance, setPinDistance] = useState(4500);

  const isDarkMode = () =>
    typeof document !== 'undefined' && document.body.classList.contains('dark-theme');

  const getDefaultBg = () => (isDarkMode() ? '#0D0F14' : '#00000003');
  const [activeTone, setActiveTone] = useState(getDefaultBg);

  const zCounterRef = useRef(50);
  const isBusyRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const spacer = spacerRef.current;
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    if (!spacer || !section || !viewport) return;

    const isMobile = () => window.innerWidth < 768;
    const screenW = () => window.innerWidth;
    const screenH = () => window.innerHeight;

    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    // Dynamic runway calculation
    const calcPinDist = () => {
      const h = window.innerHeight;
      const dist = Math.round(h * (isMobile() ? 3.5 : 4.5));
      setPinDistance(dist);
      return dist;
    };

    let currentPinDist = calcPinDist();

    // Initial offscreen scatter coordinates
    const getScatterFrom = (w, h) => {
      const maxDim = 0.72 * Math.max(w, h);
      return [
        { x: -w / 2 - maxDim, y: -h / 2 - 80 },
        { x: w / 2 + maxDim, y: -h / 2 + 30 },
        { x: -w / 2 - maxDim, y: h / 2 + 70 },
        { x: w / 2 + maxDim, y: h / 2 + 20 },
        { x: -80, y: -h / 2 - maxDim },
        { x: 130, y: h / 2 + maxDim },
        { x: -w / 2 - maxDim, y: 20 },
        { x: w / 2 + maxDim, y: -100 },
        { x: -220, y: h / 2 + maxDim },
        { x: 260, y: -h / 2 - maxDim },
        { x: -w / 2 - maxDim, y: -h / 2 - 433 }
      ];
    };

    // Calculate target settled coordinates for each card
    const computeSettledPositions = () => {
      const w = screenW();
      const h = screenH();
      const mobile = isMobile();
      const edgePad = mobile ? 14 : 28;

      return galleryItems.map((item, idx) => {
        const coords = mobile ? item.position.mobile : item.position.desktop;
        // Deterministic organic rotations based on index
        const rots = [-1.0, -3.8, -3.4, -5.5, -1.0, -5.5, -3.0, -1.0, -4.0, 2.4, -3.7];
        const rot = rots[idx % rots.length];

        const targetX = clamp(coords[0] * w - w / 2, -w / 2 + 100 + edgePad, w / 2 - 100 - edgePad);
        const targetY = clamp(coords[1] * h - h / 2, -h / 2 + 90, h / 2 - 90);

        return { x: targetX, y: targetY, r: rot };
      });
    };

    let settled = computeSettledPositions();
    let scatter = getScatterFrom(screenW(), screenH());
    const cards = cardsRef.current.filter(Boolean);
    const slats = slatsRef.current.filter(Boolean);

    // Initial card setup
    cards.forEach((card, idx) => {
      const fromPos = scatter[idx % scatter.length];
      const target = settled[idx];
      card.style.transform = `translate(-50%, -50%) translate3d(${fromPos.x}px, ${fromPos.y}px, 0) rotate(${1.5 * target.r}deg) scale(0.92)`;
      card.style.zIndex = `${idx + 3}`;
      card.style.opacity = '1';
    });

    // Rock-solid Ticker Animation Loop (synchronized perfectly with ScrollSmoother)
    const onTick = () => {
      const spacerRect = spacer.getBoundingClientRect();
      const dist = currentPinDist;

      let progress = 0;
      if (spacerRect.top <= 0 && spacerRect.bottom >= window.innerHeight) {
        const clampedY = Math.min(-spacerRect.top, dist);
        section.style.transform = `translate3d(0, ${clampedY}px, 0)`;
        progress = Math.max(0, Math.min(1, -spacerRect.top / dist));
      } else if (spacerRect.top > 0) {
        section.style.transform = 'translate3d(0, 0, 0)';
        progress = 0;
      } else {
        section.style.transform = `translate3d(0, ${dist}px, 0)`;
        progress = 1;
      }

      // Reset active tone if user scrolled back up
      if (progress < 0.04) {
        const def = getDefaultBg();
        if (section.style.backgroundColor !== def) {
          section.style.backgroundColor = def;
          viewport.style.backgroundColor = def;
          setActiveTone(def);
        }
      }

      // Phase 1: Card entrance flight (0 to 0.58 progress)
      const flightDuration = 0.58;
      const cardProgMaster = Math.min(1, progress / flightDuration);
      const stagger = 0.045;
      const flySpan = 0.45;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        const p = Math.max(0, Math.min(1, (cardProgMaster - stagger * i) / flySpan));
        const easeP = 1 - Math.pow(1 - p, 3); // cubic ease out

        const fromPos = scatter[i % scatter.length];
        const target = settled[i];

        const curX = fromPos.x + (target.x - fromPos.x) * easeP;
        const curY = fromPos.y + (target.y - fromPos.y) * easeP;
        const curR = 1.5 * target.r + (target.r - 1.5 * target.r) * easeP;
        const curScale = 0.92 + (1.0 - 0.92) * easeP;

        card.style.transform = `translate(-50%, -50%) translate3d(${curX}px, ${curY}px, 0) rotate(${curR}deg) scale(${curScale})`;
      }

      // Phase 2: Venetian Blind Slat Curtain Wipe into Footer (progress > 0.65)
      const slatStart = 0.65;
      const slatP = Math.max(0, Math.min(1, (progress - slatStart) / (1 - slatStart)));
      const count = slats.length;

      for (let i = 0; i < count; i++) {
        const startD = (0.28 * (count - 1 - i)) / (count - 1 || 1);
        const endD = startD + 0.35;
        const p = Math.max(0, Math.min(1, (slatP - startD) / (endD - startD)));
        slats[i].style.transform = `scaleY(${p})`;
      }

      // Smoothly fade out cards behind the wiping curtain so no card edges bleed into the footer
      const cardFade = progress < slatStart ? 1 : Math.max(0, Math.min(1, 1 - slatP * 2));
      for (let i = 0; i < cards.length; i++) {
        if (cards[i]) {
          cards[i].style.opacity = `${cardFade}`;
          cards[i].style.visibility = cardFade <= 0.01 ? 'hidden' : 'visible';
        }
      }
    };

    gsap.ticker.add(onTick);

    const onResize = () => {
      currentPinDist = calcPinDist();
      settled = computeSettledPositions();
      scatter = getScatterFrom(screenW(), screenH());
    };

    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Card Click Interaction: Morph background & elevate card
  const handleCardClick = (idx) => {
    if (isBusyRef.current) return;
    const card = cardsRef.current[idx];
    if (!card) return;

    isBusyRef.current = true;
    zCounterRef.current += 1;
    card.style.zIndex = zCounterRef.current;

    const dark = isDarkMode();
    const tone = dark
      ? card.dataset.darkBgTone || '#0F172A'
      : card.dataset.bgTone || '#00000003';

    setActiveTone(tone);

    if (sectionRef.current && viewportRef.current) {
      gsap.to([sectionRef.current, viewportRef.current], {
        backgroundColor: tone,
        duration: 0.85,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    }

    const inner = card.querySelector('.ra-gallery-card-inner');
    if (inner) {
      gsap.fromTo(
        inner,
        { scale: 0.98 },
        { scale: 1.035, duration: 0.35, yoyo: true, repeat: 1, ease: 'power2.out' }
      );
    }

    setTimeout(() => {
      isBusyRef.current = false;
    }, 400);
  };

  // Card Hover
  const handleCardHover = (idx, isHovering) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const inner = card.querySelector('.ra-gallery-card-inner');
    if (!inner) return;

    gsap.to(inner, {
      scale: isHovering ? 1.03 : 1,
      duration: isHovering ? 0.25 : 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      ref={spacerRef}
      id="gallery-spacer"
      className="pin-spacer relative w-full"
      style={{ paddingBottom: `${pinDistance}px` }}
    >
      <section
        ref={sectionRef}
        id="gallery"
        className="ra-gallery-section h-dvh overflow-hidden relative will-change-transform translate-z-0 z-10 -top-px!"
        style={{
          backgroundColor: activeTone,
          transform: 'translate3d(0, 0, 0)',
          width: '100%'
        }}
        aria-label="Life Outside the Screen"
      >
        <div
          ref={viewportRef}
          className="ra-gallery-viewport overflow-hidden relative h-dvh w-screen transform-[translate3d(0,0,0)] will-change-transform contain-[layout_paint]"
          style={{ backgroundColor: activeTone }}
        >
          {/* Center Headline & Subtitle */}
          <div className="ra-gallery-center-text absolute top-1/2 left-1/2 -translate-1/2 text-center z-1 pointer-events-none w-[min(50rem,82vw)]">
            <h2 className="ra-second-heading ra-gallery-title mb-6">
              <div className="lines">
                <div className="words">Life Outside the Screen</div>
              </div>
            </h2>
            <div className="ra-gallery-desc max-w-90 sm:max-w-105 mx-auto">
              <p className="small">
                Not everything happens behind a screen. A collection of moments, memories, and experiences from my journey.
              </p>
            </div>
          </div>

          {/* 11 Interactive Gallery Cards */}
          {galleryItems.map((item, idx) => (
            <figure
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="ra-gallery-item"
              style={{
                '--gallery-w': item.width.desktop,
                '--gallery-w-mobile': item.width.mobile,
                aspectRatio: item.aspectRatio,
                zIndex: idx + 3
              }}
              data-bg-tone={item.bgTone}
              data-dark-bg-tone={item.darkBgTone}
              onClick={() => handleCardClick(idx)}
              onMouseEnter={() => handleCardHover(idx, true)}
              onMouseLeave={() => handleCardHover(idx, false)}
            >
              <div className="ra-gallery-card-inner">
                <img
                  alt={item.alt}
                  src={item.src}
                  crossOrigin="anonymous"
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>

        {/* 5 Venetian Blind Curtain Slats for Smooth Wipe into Footer */}
        <div
          className="ra-gallery-slats-wrap absolute inset-0 pointer-events-none flex flex-col w-full h-full"
          style={{ zIndex: 98 }}
        >
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={`stripe-${idx}`}
              ref={(el) => {
                if (el) slatsRef.current[idx] = el;
              }}
              className="ra-gallery-slat will-change-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
