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
    src: '/gallery/gallery-01.jpg',
    alt: 'Rehan Ayaz with colleagues at WordCamp Conference',
    title: 'WordCamp Community',
    category: 'Conference',
    width: { desktop: 'clamp(12.5rem, 17vw, 17rem)', mobile: '38vw' },
    aspectRatio: '1.5 / 1',
    bgTone: '#E2E8F0',
    darkBgTone: '#1E293B',
    position: { desktop: [0.15, 0.22], mobile: [0.26, 0.16] }
  },
  {
    id: '02',
    src: '/gallery/gallery-02.jpg',
    alt: 'Rehan Ayaz at a formal celebration gathering',
    title: 'Celebration & Milestones',
    category: 'Gathering',
    width: { desktop: 'clamp(7.5rem, 9.5vw, 9.5rem)', mobile: '28vw' },
    aspectRatio: '0.56 / 1',
    bgTone: '#F5EBE6',
    darkBgTone: '#3B231A',
    position: { desktop: [0.92, 0.51], mobile: [0.74, 0.23] }
  },
  {
    id: '03',
    src: '/gallery/gallery-03.jpg',
    alt: 'WordPress Community Meetup celebration with badge',
    title: 'Code Is Poetry',
    category: 'WordPress Meetup',
    width: { desktop: 'clamp(12rem, 16vw, 16rem)', mobile: '38vw' },
    aspectRatio: '1.33 / 1',
    bgTone: '#E0F2FE',
    darkBgTone: '#0C4A6E',
    position: { desktop: [0.83, 0.20], mobile: [0.26, 0.33] }
  },
  {
    id: '04',
    src: '/gallery/gallery-04.jpg',
    alt: 'Rehan Ayaz at WordCamp keynote stage backdrop',
    title: 'A Future For Everyone',
    category: 'WordCamp Stage',
    width: { desktop: 'clamp(12rem, 16vw, 16rem)', mobile: '38vw' },
    aspectRatio: '1.5 / 1',
    bgTone: '#EDE9FE',
    darkBgTone: '#2E1065',
    position: { desktop: [0.08, 0.50], mobile: [0.26, 0.69] }
  },
  {
    id: '05',
    src: '/gallery/gallery-06.jpg',
    alt: 'Casual office celebration and cake with colleagues',
    title: 'Team Bonding',
    category: 'Office Culture',
    width: { desktop: 'clamp(13rem, 18vw, 18rem)', mobile: '40vw' },
    aspectRatio: '1.78 / 1',
    bgTone: '#FEF3C7',
    darkBgTone: '#451A03',
    position: { desktop: [0.17, 0.79], mobile: [0.74, 0.86] }
  },
  {
    id: '06',
    src: '/gallery/gallery-07.jpg',
    alt: 'Addiz Tech milestone celebration with team cake',
    title: 'Addiz Tech Milestones',
    category: 'Celebration',
    width: { desktop: 'clamp(8.5rem, 11vw, 11rem)', mobile: '30vw' },
    aspectRatio: '0.75 / 1',
    bgTone: '#ECFDF5',
    darkBgTone: '#064E3B',
    position: { desktop: [0.50, 0.81], mobile: [0.74, 0.69] }
  },
  {
    id: '07',
    src: '/gallery/gallery-08.jpg',
    alt: 'Birthday and team milestone celebration moment',
    title: 'Milestone Memories',
    category: 'Memories',
    width: { desktop: 'clamp(8.5rem, 11vw, 11rem)', mobile: '30vw' },
    aspectRatio: '0.75 / 1',
    bgTone: '#F0FDF4',
    darkBgTone: '#14532D',
    position: { desktop: [0.83, 0.80], mobile: [0.26, 0.87] }
  }
];

export default function GallerySection() {
  const spacerRef = useRef(null);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const cardsRef = useRef([]);
  const [pinDistance, setPinDistance] = useState(1200);

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

    // Tight, natural runway calculation so it moves directly into the footer without empty space
    const calcPinDist = () => {
      const h = window.innerHeight;
      const dist = Math.round(h * (isMobile() ? 0.9 : 1.2));
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
      const edgePad = mobile ? 10 : 28;
      const xMargin = mobile ? 50 : 100;
      const yMargin = mobile ? 55 : 90;

      return galleryItems.map((item, idx) => {
        const coords = mobile ? item.position.mobile : item.position.desktop;
        // Deterministic organic rotations based on index
        const rots = [-2.0, 2.2, -2.4, 2.0, -1.8, 0.8, -2.0];
        const rot = rots[idx % rots.length];

        const targetX = clamp(coords[0] * w - w / 2, -w / 2 + xMargin + edgePad, w / 2 - xMargin - edgePad);
        const targetY = clamp(coords[1] * h - h / 2, -h / 2 + yMargin, h / 2 - yMargin);

        return { x: targetX, y: targetY, r: rot };
      });
    };

    let settled = computeSettledPositions();
    let scatter = getScatterFrom(screenW(), screenH());
    const cards = cardsRef.current.filter(Boolean);

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

      // Card entrance flight (0 to 0.70 progress) - seamless settling with zero dead space
      const flightDuration = 0.70;
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
        card.style.opacity = '1';
        card.style.visibility = 'visible';
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

          {/* 7 Interactive Gallery Cards with Real Photos */}
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
      </section>
    </div>
  );
}
