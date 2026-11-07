# SEO Guidelines — AI agent and development reference only

Updated: 2026-11-05. Never import, render, link publicly, or copy this document into public/ or dist/. Maintain this file for future SEO work; do not create duplicate SEO documentation.

Status notation: [x] Completed; [ ] Pending; [!] Needs review.

## Project and objectives

Single-page personal portfolio for Rehan Ayaz, professional web developer and WordPress specialist. Objective: accurate metadata and discoverability without changing existing appearance, content, or behavior.

Stack: React 18, JavaScript/JSX, Vite 5, Bootstrap, custom CSS, GSAP (ScrollTrigger, ScrollSmoother, SplitText, TextPlugin, ScrollToPlugin), Three.js, jQuery, Slick Slider, Magnific Popup. React renders client-side through createRoot in src/main.jsx with StrictMode; index.html initially contains an empty root. src/App.jsx composes sections and injects assets/js/script.js. Theme preferences use LocalStorage.

## Actual structure

- index.html: active Vite HTML entry, metadata, styles, vendor scripts.
- src/main.jsx: React entry; src/App.jsx: section composition and smooth-scroll wrappers.
- src/components/: Preloader, Header, Hero, ToolsMarquee, About, ServicesShowcaseSection, SelectedWorkSection, Experience (including certifications), Testimonials, Pricing, GallerySection, Footer, ProjectModal. Preserve order.
- assets/: CSS, vendor/custom JavaScript, fonts, images, GSAP plugins and audio.
- public/: assets junction to existing assets, plus audio, fonts, images and video; copied by Vite.
- robots.txt and sitemap.xml: corrected root copies; matching public/ copies are shipped by Vite into dist. Keep both copies synchronized; public/ is the build source.
- index.static.html, error.html, archive/: existing alternate/legacy artifacts; not the active React entry. Do not edit as substitutes for index.html.
- package.json: dev, build, preview commands. vite.config.js: React plugin, port 3000, dist output.

## Current metadata

- [x] HTML5 doctype, lang="en", UTF-8 and responsive viewport already present and preserved.
- [x] Existing title preserved: Rehan Ayaz - Professional Web Developer & WordPress Specialist.
- [x] Added description: Rehan Ayaz is a professional web developer and WordPress specialist creating responsive, SEO-friendly websites for businesses, bloggers, and eCommerce brands.
- [x] Description derives from existing About content; no invented business claims or keyword tags.
- [x] Added robots meta: index, follow. This permits indexing; it does not guarantee indexing. Staging access/indexing policy requires deployment review.
- [x] Open Graph: website type, title, description, site_name (Rehan Ayaz).
- [x] Twitter: summary card, title, description. No invented account handle.
- [x] Existing /assets/images/favicon.ico reference preserved.
- [x] User explicitly confirmed https://rehanayaz.com/ as production URL. Added one absolute self-referencing canonical and matching og:url. Existing live site is an older site and was excluded from this audit. Host redirects still require deployment verification.
- [x] User authorized reuse of an existing project image. Visually inspected assets/images/header/mens.png (existing Hero portrait) and selected it for og:image and twitter:image with descriptive ALT metadata and PNG type. Absolute URL: https://rehanayaz.com/assets/images/header/mens.png. Original asset remains unchanged. Twitter summary card retained for this portrait; no landscape crop or new image generated.
- [ ] Confirm image HTTP availability and actual platform cropping after deployment; social platforms may cache previews. Review additional icon sizes separately.
- [ ] Metadata/image selection complete locally; actual social preview validation awaits deployment of this project (current live site is older).

## Content, semantics and schema

- [x] Source audit found one explicit h1 in Hero: Web Developer. Header/footer and multiple section elements exist.
- [!] Some headings are stylistic (Hero greeting/name and numeric counters). Review logical h2/h3 hierarchy in a future approved pass; preserve text and heading-dependent styling/animations.
- [!] No main element found in source. Evaluate a main landmark only after checking smooth-scroll selectors, CSS and accessibility behavior. No semantic wrapper changes in Phase 1.
- [!] Image ALT values include generic filenames (about-left-image, mens, bottom-left). Future audit: describe meaningful images accurately, use empty ALT for purely decorative images, avoid keywords, and check linked image accessible names. No component edits made.
- [ ] Structured data deferred. Consider minimal Person and WebSite JSON-LD after identity, production URL and profile ownership are confirmed. Use only visible verified facts; do not invent reviews, ratings, organizations or social identities.

## Technical SEO issues and deployment requirements

- [x] Removed robots.txt block on /assets/gsap-public/ so rendering scripts are crawlable. Preserved existing backup/SQL directives and added /SEO_GUIDELINES.md disallow. Robots directives are not access controls: deploy dist only; never serve the project root or rely on robots.txt to protect private files.
- [x] Removed /error.html from sitemap; retained only confirmed homepage. Removed unverified lastmod and optional frequency/priority rather than claiming a deployment update date.
- [x] Added corrected public/robots.txt and public/sitemap.xml; verified both are present in the final production output and match root copies.
- [!] Client-rendered content depends on JavaScript; social metadata is now static in the head. Assess rendered indexing after deployment. No SSR/prerender/routing changes authorized by this phase.
- [ ] Verify HTTPS, preferred hostname redirects, one canonical, HTTP 200 homepage, real 404 responses, no accidental noindex/X-Robots-Tag or access blocks, and asset MIME types on the actual host.
- [ ] Confirm favicon and all asset paths resolve on the deployment host, including assets currently supplied through the local public/assets junction.
- [ ] Verify Google Search Console ownership, inspect the live URL and rendered content, submit only the confirmed production sitemap, then monitor indexing. No account access or indexing submission performed.

## Performance and Core Web Vitals

- [!] Baseline and final build both warn about a chunk over 500 kB: application bundle 896.14 kB (247.39 kB gzip). Identical output filename index-DzNSH0Ml.js before and after metadata changes.
- [ ] Measure LCP, INP and CLS on deployed mobile/desktop pages before selecting changes. Review fonts, hero media, media dimensions, Three.js work and animation cost based on measurements.
- [ ] Any lazy loading, code splitting, asset compression or script scheduling requires a separate verified pass. Preserve initial animations, layout and dependency execution order; no performance refactor in Phase 1.

## Phase 1 changes and verification

- [x] index.html: added description, robots, basic social previews, confirmed canonical and og:url. Existing title, assets, scripts and body preserved.
- [x] robots.txt and sitemap.xml corrected; public/robots.txt and public/sitemap.xml created to include crawler files in the build. Reasons and synchronization rules are documented above.
- [x] SEO_GUIDELINES.md: created and updated this internal reference, audit, change record and pending checklist.
- [x] Social follow-up: index.html now references the existing Hero portrait for Open Graph and Twitter with ALT metadata. No image files modified or created.
- [x] No dependency, package script, Vite configuration, React component, CSS, visible copy, image or section changes.
- [x] Baseline and final npm run build succeeded (51 modules). No build errors; existing chunk-size warning remains.
- [x] Final dist/index.html checked: description, robots and each Twitter tag occur once. Documentation is absent from generated dist; corrected crawler files are now included through public/.
- [x] Development server started on 127.0.0.1:5173 using a command-line override; HTTP fetch verification was blocked by local socket permissions; served content and HTTP status remain unverified. Default 127.0.0.1:3000 failed with EACCES in this environment; configuration unchanged.
- [x] git diff --check passed.
- [!] No browser runtime/console, screenshot comparison or interactive testing performed. Source scope and identical application bundle support minimal risk but do not prove runtime behavior.
- [ ] Manual browser checks: console errors, all sections, GSAP scrolling, Three.js orbit, sliders, popups, navigation, contact links, media, theme persistence, mobile/tablet/desktop layout. Compare with baseline; do not claim these checks passed until actually tested.

## Phase 2 priorities and protection rules

1. Production URL, canonical, social URL and existing-image metadata are complete. Validate platform previews after deployment.
2. Crawler file corrections are complete locally. Deploy dist, verify host redirects/statuses and asset serving, then verify indexing in Search Console.
3. Review headings, ALT text, landmarks and verified minimal schema without changing design.
4. Measure performance and rendered indexing; propose scoped fixes with interaction checks.

Never redesign, refactor, reorder sections or change visible text for SEO without authorization. Protect src/components/, src/App.jsx, CSS, vendor script order, GSAP selectors and smooth wrappers, Three.js effects, Slick/Magnific Popup integrations and LocalStorage. If an improvement risks appearance or functionality, document the risk before implementation. Keep this file current and distinguish implemented work from pending deployment or manual tests.



## Phase 2 — React SEO Architecture

### Architecture and metadata decision

- [x] Read complete Phase 1 record and audited current React/Vite entry, all component source files, head metadata, styles, scripts and generated HTML.
- [x] Keep index.html as the single metadata source. One static title/description/canonical, robots, OG and Twitter configuration; language en. No per-section metadata, runtime SEO component or SEO dependencies needed. Static head tags are available before React executes and avoid StrictMode effects creating duplicate tags.
- [x] Initial production body contains an empty root: H1, About, services, project names/descriptions, experience and other section text require React execution. Services/projects are generated from local component data, not new indexable routes. Assets and metadata alone do not provide portfolio body content to non-JavaScript clients.

### Rendering evaluation and recommendation

| Option | Benefit | Project-specific limitation / risk | Decision |
| --- | --- | --- | --- |
| CSR | Preserves existing React/Vite deployment and animation lifecycle | Important body content requires JavaScript; non-JS clients receive empty root | Retain for this safe phase |
| SSG | Build-time portfolio HTML without a runtime server | Requires a server-compatible render path and hydration; current createRoot does not hydrate | Separate prototype and parity tests first |
| Browser prerender | Can capture content after browser execution without framework migration | May capture preloader, GSAP pin spacers/transforms, cloned slider DOM, canvas state and theme; reinitialization can duplicate animation markup | Most practical option to investigate, not enabled automatically |
| SSR | Body content on request | New server infrastructure and hydration; browser APIs and third-party initialization need isolation | Excessive complexity for this static portfolio |

- [x] Reviewed browser dependencies: Header theme initializer reads LocalStorage/document when window exists; GSAP layout/scroll effects measure window/document; orbit creates WebGLRenderer in an effect and registers resize/ticker work. Effects do not run during a server render, but static output/hydration, theme parity and imports still require testing. Do not assume all browser-dependent code is render-safe.
- [!] No SSR/SSG/prerender or hydration migration implemented: functional/visual parity has not been established. Recommendation: retain CSR now; prototype build-time static rendering or controlled prerendering separately, using the same content source, then verify every interaction before adoption. Never insert hidden duplicate copy or snapshot a running animation blindly.

### Headings, semantics, links and images

- [x] One literal primary h1: Hero Web Developer. About, Experience, Certifications, Selected Work, Pricing and Contact have h2 headings. Services uses h3 cards and separate h2 marquee words. Orbit heading is split into two h2 elements. Project cards/modal subsections use h3; modal titles use h2.
- [!] Hero greeting/name h2/h3, About numeric h3, testimonial/marquee h3 and split animated headings are styling-driven. Tools heading is d-none. Preserve these in this phase: Bootstrap heading defaults and tag-specific CSS (including marquee h3 selectors), SplitText and scroll triggers make blind retagging unsafe. Future visual tests must establish exact typography/margins before retagging. No extra headings or keywords added.
- [x] Added role=main and accessible label Portfolio to existing smooth-content div. Added role=navigation and label Primary navigation to existing drawer navigation div. Preserved tag names, wrappers, classes, IDs, section order and handlers; header/footer/section markup retained. Existing smooth-content also contains footer; any future native main restructuring should keep page footer outside main and must be tested against scrolling.
- [x] Improved Hero/Header portrait ALT to Rehan Ayaz and About desk photo ALT to Laptop and notebook on a desk beside flowers. Existing photo visually inspected during prior phase.
- [x] Emptied filename-like ALT text for explicit decorative shapes, corners, waves and arrows in affected components. No asset sources, sizes, loading behavior, visible text, CSS or animations changed. Main portrait remains eager; existing deferred image loading retained.
- [x] Audited literal anchor fragments: primary #about, #services, #project, #pricing and #contact targets exist. No new-tab anchors lacking existing noopener/noreferrer were found in source scan. No external destinations changed or live old-site checks performed.
- [!] #social and #next-project are existing placeholder anchors whose click handlers prevent default. Need real user-provided destinations/feature decisions in future; do not invent URLs or remove handlers. Home links use index.html; canonical still points to root; deployment redirect behavior requires review.
- [!] Some generic project/modal image ALT values remain; inspect actual images/context before describing them. Tool/logo and certificate ALT values are generally descriptive. Missing explicit image dimensions need measured layout checks rather than automatic dimension changes.

### Exact Phase 2 file changes

- src/App.jsx: main landmark attributes only.
- src/components/Header.jsx: navigation landmark, portrait/decorative ALT only.
- src/components/Hero.jsx: portrait/decorative ALT only.
- src/components/About.jsx: desk-photo/decorative ALT only.
- src/components/: decorative image ALT only.
- SEO_GUIDELINES.md: appended Phase 2 audit, decisions and verification; previous Phase 1 record preserved as historical context.
- No new files or dependencies; metadata, build scripts, CSS, routes and framework unchanged in Phase 2. Phase 1 working-tree changes remain intact.

### Verification and remaining work

- [x] Production build succeeded; 51 modules, existing >500 kB bundle warning remains. Final metadata present in dist/index.html and React code compiled successfully.
- [x] Development server started with existing dev command and temporary port override 5174 (default port permissions previously failed). No configuration changes.
- [x] Source checks: one H1, primary navigation targets present, external new-tab rel attributes reviewed. Component edits limited to role/aria-label/ALT attributes; visible text and image sources preserved.
- [x] Final HTML inspected: static metadata present; meaningful portfolio body still requires JS. Internal documentation excluded from dist; crawler files retained.
- [!] Browser console, rendered DOM, GSAP/Three.js, sliders/popups, theme persistence, anchor behavior and desktop/mobile screenshot parity not verified. Local Playwright/Puppeteer packages are unavailable; no package installed solely for this phase. Dev readiness/build success do not prove browser behavior.
- [ ] Manually test all sections and interactions in desktop/mobile browsers before deployment. Confirm rendered content and metadata on the new deployment, not the old live site.

### Phase 3 pending tasks

- [ ] Browser regression checks, heading/tag-style mapping and remaining image/context audit.
- [ ] Controlled prerender/SSG prototype with hydration/lifecycle parity checks; do not ship without verification.
- [ ] Real placeholder link destinations, deployment HTTP/redirect/404 checks and social preview validation.
- [ ] Measure Core Web Vitals, review image dimensions and initial asset cost based on evidence.
- [ ] Verified minimal structured data and Search Console indexing checks after deployment.



## Remaining phases status register (2026-11-05)

This register supplements, and does not overwrite, the Phase 1/2 historical records. Current Phase 7 supersedes earlier notes that schema was deferred. Statuses: [x] Completed and verified; [ ] Pending; [!] Needs user input / External verification required / Blocked — safety concern, as explicitly stated. A completed audit does not mean its identified implementation or external validation is complete.

### Phase 1 — SEO Foundation (historical record index)

Objective: safe static head metadata and crawler preparation. Audit/implementation/files/results are preserved under Current metadata and Phase 1 changes and verification above. Locally completed; deployment redirects, live preview and indexing still pending under Phase 8. Required user input: deployment authorization and account access through normal authorized sessions, never passwords in chat. Next action: complete the Phase 8 gates.

## Phase 3 — Keyword Research

Objective: select relevant portfolio queries without fabricated metrics or unsolicited content changes.

- [x] Completed — reviewed existing identity/content and performed a live search for WordPress developer portfolio, web designer, front end developer and hire intent. Search results include both hiring portfolios and job listings; this is a qualitative intent check, not a search-volume or competitive difficulty study.
- [x] Completed — preliminary keyword/section map below. All phrases are hypotheses for validation, not proven ranking opportunities. Existing website copy has not been rewritten.

| Group | Candidate terms | Intent and relevance | Existing section / URL mapping |
| --- | --- | --- | --- |
| Primary | Rehan Ayaz; Rehan Ayaz web developer; WordPress developer; WordPress specialist | Branded navigation and service evaluation; strongest alignment with existing identity | Homepage /, Hero and About; keep current title |
| Secondary | front-end developer; web designer; WordPress development; responsive web design | Hiring/portfolio or mixed informational intent; qualify with work examples | About, Experience and Services, all on / |
| Long-tail | WordPress developer for business websites; Elementor website developer; WooCommerce website developer; Figma to WordPress developer | Service evaluation; matches visible WordPress, Elementor, store and design-conversion content | Services, Projects, Pricing and Contact on / |
| Branded evidence | Rehan Ayaz portfolio; Rehan Ayaz WordPress projects | Portfolio verification | Projects and Experience on / |
| Location hypotheses only | WordPress developer in [confirmed service city]; web developer in [confirmed target market] | Local service intent, geography unconfirmed | Do not publish location targets yet |

Evidence sources (qualitative examples only): https://romanfink.com/hire-me/ and https://webicode.com/ appeared in the 2026-11-05 search. No third-party wording copied. No search volume, CPC, difficulty, traffic or ranking estimates supplied. Broad role queries also bring employment intent; prioritize branded identity and specific supported services rather than assuming broad head-term competitiveness. Multiple synonyms on one homepage are not separate competing pages. Sections/fragments are not standalone indexable landing pages; avoid creating near-duplicate future pages targeting the same intent.

Implementation/files: documentation only. Verification: phrases checked against visible source and rendered portfolio. No keyword stuffing or meta keywords added.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [ ] Pending — quantitative keyword validation | No Keyword Planner/Search Console/Semrush/Ahrefs data or verified demand metrics | Export query, country/language, date range, volume/range and competition-method data into this document; compare relevant SERPs for shortlisted phrases | Tool account/export required; paid service needs approval; do not invent metrics |
| [!] Needs user input — audience and location targeting | Employment addresses do not establish current service area; target country, language, client type and priority service unknown | SEO_GUIDELINES.md: user confirms target markets and service priorities, then refine map | User input required before geographic copy; avoid false location claims |
| [!] Needs user input — content targeting approval | Candidate map is provisional | User approves validated targeting before any change to Hero/About/Services copy or future page plan | Content changes require approval; depends on market validation |

## Phase 4 — Section-wise Content SEO

Objective: audit relevance, clarity, headings and navigation without replacing approved content.

- [x] Completed — all requested sections audited in source and portfolio text observed in the local browser. No copy, price, project, section or testimonial changes implemented.

| Section | Audit finding / intent | Proposed improvement awaiting confirmation |
| --- | --- | --- |
| Hero | Single H1 Web Developer; name, WordPress specialization and hiring/contact CTA present; greeting/name use stylistic h2/h3 | Retain existing text; only evaluate heading semantics with typography parity tests |
| About | Relevant professional identity, 2+ years and business/blog/eCommerce context | Verify experience claims periodically; approve any clearer specialization text before editing |
| Services | Four cards: AI automation, websites, mobile apps and SaaS; broad offering compared with WordPress identity; animated h2 words follow h3 cards | Confirm scope and actual service priorities; logical heading update requires visual regression testing |
| Projects | Ten named projects and descriptions; project links currently lead to #contact rather than individual case studies | Confirm role, permission, live URLs and evidence for each project before adding details or changing link behavior |
| Experience | Three roles, dates, employer locations and certificates; useful relevance evidence | Confirm dates, current employer and credentials; do not infer personal service address from employer locations |
| Testimonials | Component name is Testimonials, but actual output is skills/domain marquees, not customer quotes | No testimonial/review/rating claims or schema. Real quotes require verified text, attribution and permission; no new section authorized |
| Pricing | Starter $230, Standard $599, Premium $1500 with features and WhatsApp CTAs | Confirm current currency, scope and terms before any wording/schema update; retain all prices |
| Contact | Email, phone, form and service/budget controls present | Form delivery must be verified separately; do not submit a test message without explicit authorization |
| Tools / Footer / Modals | Tool logos, design exploration, footer/social placeholders and extra modal copy present | Modal food/iFood text, placeholder prose and percentage-result claims need owner review; not treated as verified personal results |

- [x] Completed — primary menu targets exist; no new-tab rel omissions found in literal source audit. Existing #social/#next-project placeholders retained. Rendered text/section presence confirmed; full copy accuracy requires the owner.

Implementation/files: no content source modified in this pass; findings recorded here. Verification: source audit and current browser DOM, not a claim-verification exercise.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [!] Needs user input — section claim/copy approval | Project evidence, employer dates, service scope, pricing terms and modal claims unverified | Review relevant src/components files; provide approved corrections and project evidence, then apply minimal text edits | Explicit copy approval required; do not publish invented achievements |
| [!] Needs user input — external profile/CTA destinations | Footer placeholders and profile destinations | Footer.jsx, ProjectModal.jsx: confirm owned URLs and desired project destinations before changing hrefs | User confirmation required; preserve handlers until decision |
| [!] Blocked — safety concern — heading restructuring | Current h2/h3 selectors and animation splitting affect typography/behavior | Hero, About, Testimonials, Services, Orbit and modal components: measure existing styles, prototype retagging and compare screenshots/interactions | Separate approval if appearance changes; browser parity prerequisite |
| [ ] Pending — form delivery verification | No message submitted; backend/delivery destination not established | Contact.jsx and hosting/backend: inspect intended submission integration, then request an authorized test | Sending requires explicit authorization; avoid accidental real messages |

## Phase 5 — Technical & Media SEO

Objective: identify media, font, animation and dependency costs without visual or interaction regressions.

- [x] Completed — source media audit: 192 img JSX elements, 174 with literal loading=lazy, 187 without both explicit width and height attributes. This is source-level counting (loops/clones may change rendered counts); CSS may already reserve sizes. Hero portrait is eager, 911x1726 PNG, 1,770,689 bytes. Main desk file about-left-image.jpg is actually PNG data, 315x473; filename/content mismatch documented without replacing the asset.
- [x] Completed — literal JSX src and project desktop/mobile image references resolve locally; no missing literal references found. Browser reload reported no completed images with naturalWidth=0 at the time of the check (does not exhaustively force every lazy image to load).
- [x] Completed — assets/images: 215 files, 38,631,745 bytes on disk. Largest examples: Food Delivery App 4U.png 2,244,231; legacy-laptop-mobile-mockup.png 2,235,317; IT Pro Services.png 2,118,295. PNG/JPG/WebP coexist; no automatic srcset/sizes delivery observed in the image markup reviewed. No filenames, dimensions, formats or src values changed.
- [x] Completed — font audit: four local WOFF2 files total 99,920 bytes; selected-work.css defines font-display: swap. Google Fonts DM Sans variable range 100..1000 (normal/italic) and Marcellus use display=swap; Google font preconnects already present. Extra preload/weight trimming not implemented because actual above-fold use and fallback layout need measurements.
- [x] Completed — audio audit: thunder.mp3 copies are 140,204 bytes each; audio element loops with preload=auto, user gesture unlock and scroll-dependent play/volume/pause. Fallback source aliases are not proof all copies download. Services video preload=auto; public/video contains desktop 877,274 bytes and mobile 452,753 bytes. Existing functionality retained.
- [x] Completed — Three.js audit: pixel ratio capped at 2, offscreen ticker early return exists; resize updates meshes/camera; cleanup removes ticker, resize and pointer listeners and disposes renderer/geometries/materials. GPU memory/texture disposal completeness requires profiling, not just reading dispose calls.
- [x] Completed — GSAP audit: services/selected work remove ticker and resize listeners; selected work clears refresh timer; Experience ctx.revert exists. Legacy script has global ScrollTriggers/requestAnimationFrame loops without a React-owned teardown. No comprehensive JS reduced-motion handling established. No timeline/script order changes made.
- [x] Completed — Slick/Magnific/jQuery audit: index.html loads jQuery before Bootstrap/Slick/Magnific/GSAP; legacy script uses jQuery ready, events, slick() and magnificPopup(). Keep jQuery. ProjectModal contains seven embedded script elements; their presence is not proof execution, but duplicate vendor references need lifecycle investigation. React-owned plugin teardown is not established; do not remove dependencies based only on static selectors.
- [x] Completed — Bootstrap audit: source uses container/row/col responsive grid and component conventions throughout; vendor CSS/JS cannot safely be stripped without coverage and interaction tests.
- [x] Completed — browser smoke: Chrome existing local development page, 1920x945 desktop; document scrollWidth 1920. Menu class became active/display flex on Open menu; Contact link closed menu. At 390x844 mobile and 768x1024 tablet, document scrollWidth equaled viewport width. One canvas observed; original viewport restored. These checks do not certify every breakpoint, touch interaction, full animation sequence or popup.

Implementation/files: no media/CSS/JS or dependency optimization changes in this pass; only head structured data in Phase 7. No new assets generated.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [ ] Pending — image formats/responsive delivery/dimensions/ALT review | Need image quality assessment, actual display slots and remaining modal-image context | assets/images and components: compare compressed variants and srcset candidates, verify references/case/MIME, reserve proven aspect ratios and review descriptive ALT | No extra approval for safe verified edits; visual change needs approval; CLS/cropping risks |
| [ ] Pending — font preload/weight tuning | No font waterfall or layout-shift trace captured | index.html and selected-work.css: measure critical font requests and fallback shifts before selecting preload/subsets | Safe verified tuning within scope; wrong preload competes with LCP |
| [!] Blocked — safety concern — audio/video preload changes | Startup timing and scroll/gesture unlock behavior could change | ServicesShowcaseSection.jsx: measure network, test metadata/none preload on all audio states and video entry before adoption | Behavior changes require approval; autoplay/browser-policy dependency |
| [!] Blocked — safety concern — animation cleanup/reduced motion | Global loops and smooth scroll are intertwined; fallback needs design decision | assets/js/script.js and GSAP components: inventory owners, prototype teardown and reduced-motion mode, verify scroll/pins/entrance effects | User input if reduced-motion changes visible behavior; baseline parity required |
| [!] Blocked — safety concern — vendor removal/plugin cleanup | jQuery/Slick/Magnific/Bootstrap are referenced; embedded modal scripts need runtime investigation | index.html, ProjectModal.jsx, assets/js/script.js: inspect initialization counts, active popups/sliders and teardown before any removal | No dependency removal until proven safe; interaction regressions possible |
| [ ] Pending — full responsive/accessibility regression | Only viewport overflow/menu smoke checks performed | Chrome: inspect Hero to Footer at mobile/tablet/desktop, touch targets, keyboard controls, sliders/popups/audio and lazy media | Authorized local testing; no form submit; baseline screenshots needed for parity |

## Phase 6 — Performance & Core Web Vitals

Objective: measure actual local production costs and distinguish audit evidence from lab/field scores.

- [x] Completed — production npm run build succeeded: 51 modules; dist/index.html 4.93 kB, gzip 1.23 kB; application index-BJwcCei4.js 895.91 kB, Vite gzip 247.40 kB. Existing >500 kB warning remains. This schema-only pass leaves the application bundle hash unchanged from Phase 2.
- [x] Completed — Vite/Rollup write:false module analysis, using existing dependencies, found renderedLength contributions BEFORE final chunk minification/compression: Three.js 1,287,216 bytes; GSAP 374,392; project source 193,583; react-dom 133,850; React 8,954; other 5,942. These figures are module attribution, not network transfer sizes, and must not be summed as the final download size. Nothing installed or shipped for this analysis.
- [x] Completed — identified possible bottlenecks: large project PNGs, hero portrait, Google Fonts/vendor styles in head, blocking vendor scripts, initial services media preload, bundled GSAP plus separate global plugins, Three.js per-frame work, legacy global loops. No code splitting, async/defer changes, image replacement or dependency removal implemented without parity tests.
- [x] Completed — re-render source audit: resize-based pin-distance state updates and theme/select state are expected; App has an existing isLoaded state timer whose value is not used in rendered output. Runtime render counts not profiled; no speculative state cleanup performed.
- [!] External verification required — no LCP, INP, CLS, Lighthouse score or field performance result claimed. Lighthouse CLI not found; browser smoke inspection is not a Lighthouse run. Local page is a development server, not a throttled production lab benchmark.

Implementation/files: documentation and read-only in-memory build analysis only; no performance source modifications.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [ ] Pending — repeatable production lab benchmark | No Lighthouse/trace run captured | Serve dist with existing preview command; run Lighthouse/DevTools with recorded device, throttling, cache and version; repeat mobile/desktop and record median lab LCP/CLS and interaction traces | Local tooling access needed; do not compare dev-server results to production field data |
| [!] External verification required — real-user LCP/INP/CLS | Localhost has no production CrUX/Search Console field data | After approved deployment, inspect PageSpeed/CrUX/Search Console and date/device sample; absence of data is not a good score | Public deployment dependency; no analytics service added without approval |
| [!] Blocked — safety concern — measured performance fixes | No comparative interaction/visual benchmark for split loading/vendor ordering/media changes | index.html, Vite config, components/assets: choose largest measured bottleneck, change one area and compare production traces plus parity checks | Design/behavior changes require approval; no framework migration |

## Phase 7 — Schema & Structured Data

Objective: add a minimal truthful identity graph without fake business/review claims.

- [x] Completed — added one static application/ld+json block to index.html, available before JavaScript execution: Person (#person), WebSite (#website), ProfilePage (#profile). Uses confirmed https://rehanayaz.com/, visible Rehan Ayaz name, Web Developer & WordPress Specialist title and existing Hero image. WebSite publisher and ProfilePage mainEntity/isPartOf reference those unique nodes.
- [x] Completed — no ratings/reviews, fabricated contact/address/qualification/employer results, search action, modification dates or identity statistics included. sameAs omitted pending ownership confirmation; visible links alone do not prove ownership. ProfilePage considered appropriate semantically because this page introduces the site owner; it does not promise a Google rich result.
- [x] Completed — reviewed primary references on 2026-11-05: https://schema.org/Person, https://schema.org/WebSite, https://schema.org/ProfilePage and https://developers.google.com/search/docs/appearance/structured-data/profile-page .
- [x] Completed — local verification parses generated JSON, checks one JSON-LD block, three unique node IDs/types, all internal references resolving, correct name/URL and image included in dist. Browser DOM parses the same three types; captured console error/warning list empty after reload. This is syntax/reference validation, not an external vocabulary/Google validator pass.

Implementation/files: index.html head only; SEO_GUIDELINES.md updated. No visible content/script initialization changed, no schema library added.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [!] Needs user input — sameAs identity links | Facebook/LinkedIn links exist in source but ownership not explicitly confirmed | User confirms exact owned profile URLs; then add only those to Person sameAs in index.html | Confirmation required; do not use third-party orbit link as identity |
| [!] External verification required — schema vocabulary and rich-result validation | Only local syntax/graph tests performed | Run final JSON-LD in Schema Markup Validator and Google Rich Results Test; after deployment test public URL and record results/warnings here | No new account needed for public validators; Google feature eligibility is not guaranteed |

## Phase 8 — Deployment & Google Indexing

Objective: prepare correct local output while leaving deployment/DNS/hosting untouched.

- [x] Completed — confirmed production domain https://rehanayaz.com/ already supplied by user; existing live old site ignored. Canonical/og:url/image/schema use that origin. Sitemap contains only homepage, parses as XML, no invented lastmod; root/public/dist crawler copies match. Rendering scripts are crawlable; documentation excluded from dist. robots.txt disallow is not confidentiality/access control.
- [x] Completed — production artifact preparation verified with existing npm run build. Deploy ONLY dist contents, not project root, source, SEO_GUIDELINES.md or node_modules. Existing public/assets junction is local; verified dist actually includes social portrait and literal referenced assets before deployment. Host must serve built assets with correct MIME types, HTTPS and real missing-page statuses.
- [x] Completed — no deployment, DNS, hosting, purchase, Search Console submission or credential request performed. No localhost indexing claim. Public old-site index status says nothing about this new build.

Implementation/files: existing Phase 1 crawler/metadata files retained; no hosting configuration created because host type/configuration unconfirmed. No external service state changed.

| Status / exact remaining task | Why pending; information/access required | File/platform and exact next action | Approval; risk/dependency |
| --- | --- | --- | --- |
| [!] Needs user input — production release authorization/host plan | User forbids deployment without permission; host/server and rollback process unknown | User identifies hosting platform and approves a reviewed dist release with backup/rollback plan before replacement of old site | Explicit deployment approval required; old-site routes/backlinks may need redirect inventory |
| [!] External verification required — HTTPS/status/canonical/asset delivery | Local build cannot verify future host headers, redirects or CDN behavior | Approved host: verify HTTP-to-HTTPS and www preference, /index.html handling, homepage 200, real 404, asset/image/font MIME, compression/cache and no accidental noindex/X-Robots-Tag/auth block | Hosting changes need authorization; coordinate redirects with previous URL inventory |
| [!] External verification required — public crawler/social/schema tests | This build is not deployed | After release fetch /robots.txt and /sitemap.xml; test crawler script access, canonical, image URL, platform previews and JSON-LD in public validators | Deployment dependency; caches may delay preview refresh |
| [!] Needs user input — Search Console property/verification | No authorized account/property session or verification method supplied | User opens correct property or verifies via existing authorized mechanism; do not ask for passwords/private keys; no DNS changes without explicit permission | Account authorization needed; DNS/hosting changes require explicit permission |
| [!] External verification required — sitemap submission/URL inspection/indexing | New build not publicly available and property access unverified | After release/property verification submit https://rehanayaz.com/sitemap.xml; inspect public homepage live/rendered HTML; request indexing if appropriate; later record reported canonical, crawl/index state and dates | Authorized Search Console access required; submission is not proof of indexing |

## Final verification for Phases 3–8

- [x] Completed — npm run build successful; no build errors; pre-existing large-chunk warning only. Existing npm run dev started on 127.0.0.1:5175 (temporary override); no config/script changes.
- [x] Completed — Chrome localhost:3000 existing development tab reloaded and inspected. Important sections/text present, H1 count one, canonical correct, one graph with Person/WebSite/ProfilePage, one canvas, no broken completed images at check time; captured warning/error logs empty. Menu open/Contact-close smoke passed; 390px/768px document-level overflow checks passed, viewport override reset. This improves on Phase 2 unverified-browser status; it does not retroactively certify all Phase 2 features.
- [x] Completed — production JSON parsing/reference assertions, canonical uniqueness, social image existence, crawler file synchronization, sitemap XML and internal documentation exclusion checks passed. Application bundle filename unchanged in this schema-only pass.
- [!] External verification required — production Google/schema/social validators and real-user metrics, as above.
- [ ] Pending — complete GSAP/Three.js animation-sequence, theme-persistence, audio playback, slider/popup and touch regression. No claim that every interaction or screenshot parity passed. Next action: run Phase 5 responsive/accessibility regression checklist in a production preview; no message submissions. Approval only for external sends or behavior/design changes.

Files changed during this pass: index.html (minimal identity JSON-LD only), SEO_GUIDELINES.md (Phase 3–8 findings, keyword map, exact pending tasks and verification). Files created: none. Dependencies added/removed: none. No React/CSS/media changes, framework migration, deployment or content rewrite performed in this pass. Earlier Phase 1/2 working-tree edits preserved.
