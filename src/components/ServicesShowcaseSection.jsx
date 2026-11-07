import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const servicesData = [
  {
    id: "card-L0",
    pair: 0,
    side: "left",
    title: "AI & Intelligent Automation",
    description: "Smart AI agents, custom LLM solutions, and automated intelligent workflows designed to scale business operations effortlessly.",
    svgPaths: [
      "M35.9,59.8V.5",
      "M30,59.7V.4",
      "M6.4,59.8V.5",
      "M59.5,59.7V.4",
      "M53.6,59.7V.4",
      "M47.7,59.7V.4",
      "M41.8,59.7V.4",
      "M24.1,59.7V.3",
      "M18.2,59.7V.4",
      "M12.3,59.7V.4",
      "M.5,59.7V.4",
      "M30,12 L48,30 L30,48 L12,30 Z",
      "M30,18 L42,30 L30,42 L18,30 Z",
      "M30,24 L36,30 L30,36 L24,30 Z"
    ]
  },
  {
    id: "card-R0",
    pair: 0,
    side: "right",
    title: "Website Design & Development",
    description: "Bespoke, high-performance websites engineered with pixel-perfect UI/UX, fluid micro-interactions, and scalable clean code.",
    svgPaths: [
      "M2,7 C2,4.2 4.2,2 7,2 H53 C55.8,2 58,4.2 58,7 V53 C58,55.8 55.8,58 53,58 H7 C4.2,58 2,55.8 2,53 Z",
      "M2,15 H58",
      "M 7.5,8.5 a 1.5,1.5 0 1,0 3,0 a 1.5,1.5 0 1,0 -3,0",
      "M 13.5,8.5 a 1.5,1.5 0 1,0 3,0 a 1.5,1.5 0 1,0 -3,0",
      "M 19.5,8.5 a 1.5,1.5 0 1,0 3,0 a 1.5,1.5 0 1,0 -3,0",
      "M6,19 H54 V54 H6 Z",
      "M10,23 H50 V50 H10 Z",
      "M22,29 L14,36.5 L22,44",
      "M25,29 L17,36.5 L25,44",
      "M33,26 L27,47",
      "M36,26 L30,47",
      "M38,29 L46,36.5 L38,44",
      "M41,29 L49,36.5 L41,44",
      "M14,54 H46"
    ]
  },
  {
    id: "card-L1",
    pair: 1,
    side: "left",
    title: "Mobile App Design & Development",
    description: "Native & cross-platform iOS and Android mobile apps crafted for speed, seamless gestures, and immersive user journeys.",
    svgPaths: [
      "M16,6 C16,3.8 17.8,2 20,2 H40 C42.2,2 44,3.8 44,6 V54 C44,56.2 42.2,58 40,58 H20 C17.8,58 16,56.2 16,54 Z",
      "M19,8 C19,5.8 20.8,4 23,4 H37 C39.2,4 41,5.8 41,8 V52 C41,54.2 39.2,56 37,56 H23 C20.8,56 19,54.2 19,52 Z",
      "M22,11 H38 V49 H22 Z",
      "M26,7 C26,5.9 26.9,5 28,5 H32 C33.1,5 34,5.9 34,7 C34,8.1 33.1,9 32,9 H28 C26.9,9 26,8.1 26,7 Z",
      "M26,53 H34",
      "M25,17 H35",
      "M25,22 H35",
      "M25,27 H31",
      "M 27,35 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0",
      "M25,43 H35",
      "M12,18 C9,23 9,37 12,42",
      "M8,14 C4,21 4,39 8,46",
      "M48,18 C51,23 51,37 48,42",
      "M52,14 C56,21 56,39 52,46"
    ]
  },
  {
    id: "card-R1",
    pair: 1,
    side: "right",
    title: "SaaS Application Development",
    description: "Robust multi-tenant cloud platforms, scalable SaaS architectures, secure API ecosystems, and conversion-focused dashboards.",
    svgPaths: [
      "M30,2 L56,16.5 V43.5 L30,58 L4,43.5 V16.5 Z",
      "M30,8 L50,19.5 V39.5 L30,51 L10,39.5 V19.5 Z",
      "M30,14 L44,22.5 V35.5 L30,44 L16,35.5 V22.5 Z",
      "M30,2 V58",
      "M4,16.5 L30,30 L56,16.5",
      "M10,19.5 L30,30 L50,19.5",
      "M16,47 L30,54 L44,47",
      "M22,50 L30,54 L38,50"
    ]
  }
];

export default function ServicesShowcaseSection() {
  const spacerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef({});
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const pinDistRef = useRef(2000);
  const [pinDistance, setPinDistance] = useState(2000);

  const [isPlaying, setIsPlaying] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const soundEnabledRef = useRef(true);

  // Strictly sync sound and visibility with Dark Mode
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.body.classList.contains('dark-theme');
    }
    return false;
  });

  // Keep dark theme state in sync & silence audio whenever in light mode
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleThemeChange = () => {
      const currentlyDark = document.body.classList.contains('dark-theme');
      setIsDark(currentlyDark);

      const audio = audioRef.current;
      if (!currentlyDark) {
        // Voice is strictly ONLY in dark mode
        if (audio && !audio.paused) {
          audio.pause();
        }
        setIsPlaying(false);
        setNeedsGesture(false);
      } else {
        // If switched to dark mode and currently inside services section, resume
        const spacerEl = spacerRef.current;
        if (spacerEl && audio && soundEnabledRef.current) {
          const rect = spacerEl.getBoundingClientRect();
          const dist = pinDistRef.current || 2000;
          const progress = Math.max(0, Math.min(1, -rect.top / dist));
          if (progress >= 0.01 && progress <= 0.99 && audio.paused) {
            audio.volume = 0.85;
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
                setNeedsGesture(false);
              })
              .catch(() => {});
          }
        }
      }
    };

    handleThemeChange();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          handleThemeChange();
        }
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('themechange', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('themechange', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // Directly play or pause audio when user toggles sound button
  const handleSoundToggle = (e) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    const currentlyDark = typeof document !== 'undefined' && document.body.classList.contains('dark-theme');
    if (!currentlyDark) {
      if (!audio.paused) audio.pause();
      setIsPlaying(false);
      return;
    }

    if (isPlaying) {
      audio.pause();
      soundEnabledRef.current = false;
      setIsPlaying(false);
      setNeedsGesture(false);
    } else {
      soundEnabledRef.current = true;
      audio.volume = 0.85;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setNeedsGesture(false);
        })
        .catch((err) => {
          console.warn("Direct play blocked:", err);
        });
    }
  };

  // Browser Autoplay Policy: Unlock audio on first user gesture anywhere (Dark mode only)
  useEffect(() => {
    const handleGesture = () => {
      const audio = audioRef.current;
      if (!audio) return;

      const currentlyDark = typeof document !== 'undefined' && document.body.classList.contains('dark-theme');
      if (!currentlyDark) return;

      const spacerEl = spacerRef.current;
      if (!spacerEl) return;

      const rect = spacerEl.getBoundingClientRect();
      const dist = pinDistRef.current || 2000;
      const progress = Math.max(0, Math.min(1, -rect.top / dist));

      // If in services view and sound is enabled, play immediately
      if (progress >= 0.01 && progress <= 0.99 && soundEnabledRef.current) {
        if (audio.paused) {
          audio.volume = 0.85;
          audio
            .play()
            .then(() => {
              setIsPlaying(true);
              setNeedsGesture(false);
            })
            .catch(() => {});
        }
      }
    };

    window.addEventListener("click", handleGesture);
    window.addEventListener("pointerdown", handleGesture);
    window.addEventListener("touchstart", handleGesture);
    window.addEventListener("keydown", handleGesture);

    return () => {
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("keydown", handleGesture);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const g = window.gsap || gsap;
    const stPlugin = window.ScrollTrigger || ScrollTrigger;

    const calculateDistance = () => {
      const isMobile = window.innerWidth <= 768;
      const h = window.innerHeight;
      let scrollDist = 0;
      if (!isMobile) {
        scrollDist = Math.round(h * 2.2);
      }
      pinDistRef.current = scrollDist;
      setPinDistance(scrollDist);
    };

    calculateDistance();

    const updateServices = () => {
      const spacerEl = spacerRef.current;
      const sectionEl = sectionRef.current;
      if (!spacerEl || !sectionEl) return;

      const spacerRect = spacerEl.getBoundingClientRect();
      const currentPinDist = pinDistRef.current || 2000;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        sectionEl.style.transform = "";
        return;
      }

      const scrollY = -spacerRect.top;
      const progress = Math.max(0, Math.min(1, scrollY / currentPinDist));

      // 1. Rock-solid Ticker Pinning (Zero Wobble)
      if (spacerRect.top <= 0 && spacerRect.bottom >= window.innerHeight) {
        const clampedY = Math.min(-spacerRect.top, currentPinDist);
        sectionEl.style.transform = `translate3d(0, ${clampedY}px, 0)`;
      } else if (spacerRect.top > 0) {
        sectionEl.style.transform = "translate3d(0, 0, 0)";
      } else {
        sectionEl.style.transform = `translate3d(0, ${currentPinDist}px, 0)`;
      }

      // 2. Background Video Playback Trigger
      const videoEl = videoRef.current;
      if (videoEl) {
        if (progress > 0.01 && progress < 0.99) {
          if (videoEl.paused) videoEl.play().catch(() => {});
        } else {
          if (!videoEl.paused) videoEl.pause();
        }
      }

      // 3. Authentic Ambient Thunder Audio Control (Strictly Dark Mode Only)
      const audio = audioRef.current;
      if (audio) {
        const currentlyDark = typeof document !== 'undefined' && document.body.classList.contains('dark-theme');
        const inAudioZone = progress >= 0.01 && progress <= 0.99;
        if (currentlyDark && inAudioZone && soundEnabledRef.current) {
          if (audio.paused) {
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
                setNeedsGesture(false);
              })
              .catch((err) => {
                // Autoplay blocked by browser policy until user click
                setIsPlaying(false);
                setNeedsGesture(true);
              });
          }
          // Volume curve: solid, rich, and clearly audible
          const volIn = Math.min(1, Math.max(0, (progress - 0.01) / 0.15));
          const volOut = Math.min(1, Math.max(0, (0.99 - progress) / 0.12));
          audio.volume = Math.max(0.3, Math.min(0.9, (0.65 + 0.2 * volIn) * volOut));
        } else {
          if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
          }
        }
      }

      // 4. 3D Perspective Card Trajectories (2 Pairs, 4 Cards)
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cardW = Math.min(420, Math.round(0.28 * w));
      const cardH = 260;

      // Pair 0: AI & Intelligent Automation (L) & Website Design & Development (R)
      // Pair 1: Mobile App Design & Development (L) & SaaS Application Development (R)
      const pairWindows = [
        { start: 0.04, dur: 0.50 },
        { start: 0.44, dur: 0.50 }
      ];

      servicesData.forEach((item) => {
        const cardEl = cardRefs.current[item.id];
        if (!cardEl) return;

        cardEl.style.width = `${cardW}px`;
        cardEl.style.height = `${cardH}px`;

        const win = pairWindows[item.pair];
        const t = Math.max(0, Math.min(1, (progress - win.start) / win.dur));

        if (t <= 0 || t >= 1) {
          cardEl.style.opacity = "0";
          cardEl.style.pointerEvents = "none";
          cardEl.style.transform = "translate3d(-9999px, -9999px, 0)";
          return;
        }

        // Active in flight
        cardEl.style.pointerEvents = "auto";
        let curX = 0;
        let curY = 0;
        let curOpacity = 0;
        let rotZ = 0;
        let rotY = 0;

        // Fade in (0 to 0.2), full opacity at center (0.2 to 0.8), fade out (0.8 to 1.0)
        if (t < 0.2) curOpacity = t / 0.2;
        else if (t > 0.8) curOpacity = (1 - t) / 0.2;
        else curOpacity = 1;

        if (item.side === "left") {
          // Swoop upwards from bottom-left to top-left
          const startX = -0.5 * cardW;
          const targetX = Math.round(0.08 * w);
          const arch = Math.sin(t * Math.PI);
          curX = startX + arch * (targetX - startX);
          curY = h - t * (h + cardH + 80);
          rotZ = -6 * (1 - 2 * t);
          rotY = 12 * (1 - t);
        } else {
          // Swoop downwards from top-right to bottom-right
          const startX = w - 0.5 * cardW;
          const targetX = w - cardW - Math.round(0.08 * w);
          const arch = Math.sin(t * Math.PI);
          curX = startX - arch * (startX - targetX);
          curY = -cardH + t * (h + cardH + 80);
          rotZ = 6 * (1 - 2 * t);
          rotY = -12 * (1 - t);
        }

        cardEl.style.opacity = curOpacity.toFixed(3);
        cardEl.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, 0) rotateZ(${rotZ.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg)`;
      });
    };

    g.ticker.add(updateServices);

    const handleResize = () => {
      calculateDistance();
      if (stPlugin) stPlugin.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      g.ticker.remove(updateServices);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={spacerRef}
      id="services-spacer"
      className="pin-spacer ra-services-spacer relative w-full"
      style={{ paddingBottom: `${pinDistance}px` }}
    >
      <section
        ref={sectionRef}
        id="services"
        className="services-pinned ra-services-section relative w-full min-h-screen overflow-hidden"
      >
        {/* Corner Accents matching Services section */}
        <div className="service-top-left">
          <img src="/assets/images/services/top-left.png" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="service-top-right">
          <img src="/assets/images/services/top-left.png" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="service-bottom-right">
          <img src="/assets/images/services/top-left.png" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="service-bottom-left">
          <img src="/assets/images/services/bottom-left.png" alt="" loading="lazy" decoding="async" />
        </div>

        {/* Authentic Background Thunder Audio with Multiple Local Fallbacks */}
        <audio
          ref={audioRef}
          loop
          preload="auto"
          playsInline
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 14) {
              e.currentTarget.currentTime = 0;
            }
          }}
        >
          <source src="/assets/audio/thunder.mp3" type="audio/mpeg" />
          <source src="assets/audio/thunder.mp3" type="audio/mpeg" />
        </audio>

        {/* Background Atmosphere Video & Lighting */}
        <div className="services-video-wrap">
          <video
            ref={videoRef}
            src="/video/homepage-services-video.mp4"
            muted
            loop
            playsInline
            preload="auto"
            className="services-bg-video"
          />
          <div className="services-bg-gradient" />
        </div>

        {/* 3D Floating Perspective Cards Container */}
        <div className="services-stage-3d">
          {servicesData.map((s) => (
            <div
              key={s.id}
              ref={(el) => (cardRefs.current[s.id] = el)}
              className="svc-card"
            >
              <div className="svc-card-inner">
                <div className="svc-card-top">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <svg
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svc-card-icon"
                  >
                    {s.svgPaths.map((p, idx) => (
                      <path
                        key={idx}
                        className="svg-path"
                        fill="none"
                        stroke="#d8d8d8"
                        strokeMiterlimit="10"
                        d={p}
                      />
                    ))}
                  </svg>
                </div>
                <p className="svc-card-desc">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Static Container with Giant Stacked Marquee Typography */}
        <div className="services-center-container">
          {/* Top Row: Small Sound Toggle SVG Icon (Right-aligned, strictly Dark Mode only) */}
          <div className="services-top-row">
            {isDark && (
              <button
                type="button"
                onClick={handleSoundToggle}
                className={`services-sound-btn ${isPlaying ? "playing" : "muted"} ${needsGesture ? "needs-gesture" : ""}`}
                title={isPlaying ? "Mute Ambient Sound" : needsGesture ? "Click to Enable Sound" : "Play Ambient Sound"}
                aria-label={isPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
              >
                {isPlaying ? (
                  <svg
                    className="sound-svg-icon sound-icon-playing"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path className="sound-wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path className="sound-wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                ) : (
                  <svg
                    className="sound-svg-icon sound-icon-muted"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="22" y1="9" x2="16" y2="15" />
                    <line x1="16" y1="9" x2="22" y2="15" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Central Bold Stacked Typography */}
          <div className="services-marquee-block">
            <h2 className="services-marquee-line">A.I.</h2>
            <h2 className="services-marquee-line">Websites</h2>
            <h2 className="services-marquee-line">Mobile Apps</h2>
            <h2 className="services-marquee-line">SaaS Apps</h2>
          </div>

          {/* Symmetrical Bottom Spacer (replaces removed tagline & button to keep marquee vertically centered) */}
          <div className="services-bottom-spacer" />
        </div>
      </section>
    </div>
  );
}
