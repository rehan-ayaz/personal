/**
 * @file portfolioData.js
 * @description Centralized, single-source-of-truth portfolio data repository for Rehan Ayaz.
 * Strictly verified real projects, services, work history, technical blogs, and credentials.
 */

export const personalInfo = {
  name: "Rehan Ayaz",
  role: "Professional Web Developer & WordPress Specialist",
  tagline: "Engineering high-performance web platforms, custom WordPress systems, and modern digital products that scale.",
  email: "hello@rehanayaz.com",
  secondaryEmail: "contact@rehanayaz.com",
  phone: "+92 326 0735090",
  whatsappUrl: "https://wa.me/923260735090",
  avatar: "/assets/images/favicon.ico",
  authorAvatar: "/assets/images/favicon.ico",
  location: "Islamabad / Rawalpindi, Pakistan (Available for Worldwide Remote Contracts)",
  bio: `I am Rehan Ayaz, a passionate Professional Web Developer and WordPress Specialist with over 2 years of professional experience building high-performance, conversion-oriented websites, enterprise platforms, and digital products. 

My work bridges engineering precision with intuitive visual aesthetics. Having delivered more than 140 digital solutions for clients worldwide, I specialize in architecting fast, secure, and SEO-dominant web applications using modern frameworks (React, Next.js, Node.js) and robust CMS ecosystems (WordPress, WooCommerce).`,
  experienceYears: "2+",
  projectsCompleted: "140+",
  clientSatisfaction: "98%",
  onTimeDelivery: "100%",
  social: {
    facebook: "https://www.facebook.com/rehan.ayaz.399",
    linkedin: "https://www.linkedin.com/in/rehan-ayaz/",
    github: "https://github.com/rehanayaz",
    whatsapp: "https://wa.me/923260735090"
  }
};

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Website Design & Development",
    shortDesc: "Bespoke, high-performance websites engineered with pixel-perfect UI/UX, fluid micro-interactions, and scalable clean code.",
    iconClass: "ri-code-s-slash-line",
    category: "Engineering",
    fullDesc: "From custom corporate portals to complex dynamic web applications, I build tailored digital web solutions using React, Next.js, WordPress, and PHP. Every line of code is written with performance, accessibility, SEO best practices, and responsive design at its foundation.",
    capabilities: [
      "Custom WordPress Theme & Plugin Architecture",
      "Headless CMS Integration (WordPress + Next.js / React)",
      "Single-Page & Multi-Page Web Applications",
      "Enterprise Corporate Portals & Landing Pages",
      "Sub-Second Page Load Optimization & Core Web Vitals",
      "API Integrations & Third-Party Service Connections"
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", desc: "Analyzing technical scope, business objectives, user journeys, and structuring clean data models." },
      { step: "02", title: "Figma UI/UX & Prototyping", desc: "Designing responsive, conversion-focused interfaces with accessible contrast and modern typography." },
      { step: "03", title: "Clean Modular Development", desc: "Implementing modular, maintainable code with strict component isolation and modern CSS frameworks." },
      { step: "04", title: "Audit, SEO & Production Launch", desc: "Rigorous cross-browser QA, Core Web Vitals speed tuning, SSL configuration, and live deployment." }
    ],
    techStack: ["React", "Next.js", "WordPress", "PHP", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "MySQL", "Git"],
    relatedProjects: ["it-pro-services", "legacy-building-group", "shabelle-capital", "codenest-online"],
    faqs: [
      {
        q: "Do you build fully custom themes or rely on pre-made templates?",
        a: "I build lightweight, fully bespoke themes tailored specifically to your branding and requirements, ensuring clean code without unnecessary bloat."
      },
      {
        q: "Will my website be mobile-friendly and cross-browser compatible?",
        a: "Yes. Every website is engineered mobile-first and tested extensively on Chrome, Safari, Firefox, and Edge across iOS, Android, macOS, and Windows."
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    shortDesc: "Smart AI agents, custom LLM solutions, and automated intelligent workflows designed to scale business operations effortlessly.",
    iconClass: "ri-brain-line",
    category: "Artificial Intelligence",
    fullDesc: "I build intelligent AI-driven automations, custom Retrieval-Augmented Generation (RAG) pipelines, and autonomous agent workflows that streamline manual operations, handle customer support around the clock, and unlock predictive insights for business scalability.",
    capabilities: [
      "Custom AI Chatbots & Customer Assistant Agents",
      "LLM Pipeline Integrations (OpenAI, Anthropic, Gemini)",
      "Automated Business Process & CRM Pipelines",
      "Vector Database Setup & Semantic Search (Pinecone, Supabase pgvector)",
      "Intelligent Data Extraction & Document Summarization",
      "Webhook Automation (Zapier, Make, n8n & Custom Node.js Backends)"
    ],
    process: [
      { step: "01", title: "Workflow Analysis", desc: "Mapping out repetitive bottlenecks and identifying high-impact automation targets." },
      { step: "02", title: "System Architecture & Prompt Engineering", desc: "Structuring agent roles, guardrails, vector embeddings, and API data payloads." },
      { step: "03", title: "Integration & Testing", desc: "Connecting agents into live databases, messaging channels (WhatsApp, Slack, Web), and CRM tools." },
      { step: "04", title: "Monitoring & Refinement", desc: "Tracking prompt latency, hallucination prevention, token usage, and continuous telemetry." }
    ],
    techStack: ["Python", "Node.js", "LangChain", "OpenAI API", "Gemini API", "Supabase", "pgvector", "n8n", "REST APIs"],
    relatedProjects: ["erp-system-4u", "food-delivery-app-4u"],
    faqs: [
      {
        q: "Can AI agents connect to our existing database and CRM?",
        a: "Yes. I construct secure API endpoints and middleware so AI agents can query real-time inventories, book appointments, or update records directly."
      },
      {
        q: "How do you ensure data security and prevent hallucinations?",
        a: "By employing strict system prompts, retrieval-augmented grounding (RAG), and deterministic validation layers before any user response is output."
      }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Application Development",
    shortDesc: "Robust multi-tenant cloud platforms, scalable SaaS architectures, secure API ecosystems, and conversion-focused dashboards.",
    iconClass: "ri-cloud-line",
    category: "Cloud Platforms",
    fullDesc: "End-to-end development of modern SaaS web applications designed to handle high transaction volumes, secure multi-tenant user authentication, subscription billing (Stripe, PayPal), and intuitive real-time administrative dashboards.",
    capabilities: [
      "Multi-Tenant Software Architectures & Role-Based Access Control (RBAC)",
      "Subscription Billing, Invoicing & Webhook Handling (Stripe / Paddle)",
      "Interactive Analytics Dashboards & Data Visualization Charts",
      "RESTful & GraphQL API Design with Robust Security Middleware",
      "Database Schema Architecture & High-Performance Indexing",
      "Automated Cloud Deployment & CI/CD Pipelines (Vercel, AWS, DigitalOcean)"
    ],
    process: [
      { step: "01", title: "Product Blueprint & Scope", desc: "Defining feature requirements, user roles, pricing tiers, and entity-relationship models." },
      { step: "02", title: "Interactive UI/UX Wireframing", desc: "Crafting modular dashboards, data tables, filter mechanics, and onboarding flows." },
      { step: "03", title: "Full-Stack Development", desc: "Developing secure RESTful microservices, state management, and optimized database queries." },
      { step: "04", title: "Load Testing & Go-Live", desc: "Rigorous security audits, rate-limiting configuration, billing testing, and production deployment." }
    ],
    techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "Stripe API", "Tailwind CSS"],
    relatedProjects: ["erp-system-4u", "it-pro-services", "codenest-online"],
    faqs: [
      {
        q: "Can you handle custom subscription billing and tiered pricing?",
        a: "Yes. I configure complete Stripe Billing workflows including recurring subscriptions, prorated upgrades, customer portals, and automatic dunning."
      },
      {
        q: "How scalable will the architecture be for growing user bases?",
        a: "The architecture is modular and stateless, allowing horizontal scaling, read-replica database configurations, and Redis caching when traffic expands."
      }
    ]
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Design & Development",
    shortDesc: "Native & cross-platform iOS and Android mobile apps crafted for speed, seamless gestures, and immersive user journeys.",
    iconClass: "ri-smartphone-line",
    category: "Mobile",
    fullDesc: "I build responsive, fluid cross-platform mobile apps using React Native and modern frontend frameworks. Engineered with native-feeling gestures, offline capabilities, real-time push notifications, and seamless backend API synchronization.",
    capabilities: [
      "Cross-Platform iOS & Android Application Engineering",
      "Real-Time Geo-Location & Live Order Tracking Systems",
      "Push Notifications & In-App Messaging Integrations",
      "Seamless In-App Payments & Biometric Authentication",
      "Offline Data Caching & Local State Synchronization",
      "App Store & Google Play Store Submission Assistance"
    ],
    process: [
      { step: "01", title: "Mobile UI/UX Wireframes", desc: "Ergonomic mobile interface design tailored to iOS Human Interface and Material Design standards." },
      { step: "02", title: "Component Development", desc: "Building native-feeling React Native components with responsive layout scaling." },
      { step: "03", title: "API & Hardware Integration", desc: "Connecting camera, GPS, push tokens, payment SDKs, and websocket streams." },
      { step: "04", title: "Store Submission & QA", desc: "Device lab testing, build signing, provisioning profile setup, and App Store submission." }
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase", "WebSockets", "Redux Toolkit"],
    relatedProjects: ["food-delivery-app-4u", "ar-gadgets"],
    faqs: [
      {
        q: "Will one codebase run smoothly on both iPhone and Android?",
        a: "Yes. Using React Native, we maintain a single unified codebase that compiles to native UI on both iOS and Android, saving time and maintenance overhead."
      },
      {
        q: "Can you assist with the Apple App Store and Google Play review process?",
        a: "Absolutely. I guide you through app store guidelines, privacy disclosures, metadata preparation, and release management."
      }
    ]
  }
];

export const projects = [
  {
    id: "food-delivery",
    slug: "food-delivery-app-4u",
    title: "Food Delivery App 4U",
    category: "UI/UX to WordPress Conversion",
    group: "Figma to WordPress",
    tag: "WordPress Website",
    focus: "7 Custom Pages",
    desc: "A mobile-first, seven-page WordPress website for a food ordering and delivery platform, built from the client’s Figma design.",
    desktopImg: "/assets/images/projects/food-delivery/Food Delivery App 4U.webp",
    mobileImg: "/assets/images/projects/food-delivery/food-delivery_m.webp",
    overview: "Food Delivery App 4U is a custom website for a modern food ordering and delivery platform. It gives customers a straightforward way to browse the menu on desktop or mobile.",
    objective: "Translate the client’s Figma design faithfully while keeping the site fast to load and easy to navigate.",
    solution: "I converted the Figma design into seven custom WordPress pages, matching the original layout and typography. I built the pages mobile-first and focused on fast loading and clear navigation so visitors could browse the menu easily.",
    highlights: [
      { title: "7 Custom Pages", description: "Built from the client’s Figma designs." },
      { title: "Figma to WordPress", description: "A pixel-perfect implementation of the supplied design." },
      { title: "Mobile-First", description: "Responsive layouts built for menu browsing on smaller screens." },
      { title: "Easy Navigation", description: "Clear page structure and quick access to the menu." }
    ],
    techStack: ["Figma","WordPress"]
  },
  {
    id: "erp-system",
    slug: "erp-system-4u",
    title: "ERP System 4U",
    category: "Corporate & B2B Software Website",
    group: "Figma to WordPress",
    tag: "B2B Website",
    focus: "11 Custom Pages",
    desc: "An 11-page WordPress website that explains an ERP company’s software and guides B2B prospects toward an inquiry.",
    desktopImg: "/assets/images/projects/erp-system/ERP System 4U.webp",
    mobileImg: "/assets/images/projects/erp-system/erp-system_m.webp",
    overview: "ERP System 4U is a professional website for an enterprise resource planning software company. It presents the company’s products and capabilities to business buyers.",
    objective: "Make complex ERP features easy for business prospects to understand and give interested visitors a clear path to get in touch.",
    solution: "I developed 11 custom WordPress pages from Figma. Clean typography and structured sections made the software features easier to scan and gave the website a consistent, professional presentation.",
    highlights: [
      { title: "11 Custom Pages", description: "Designed around the company’s ERP offerings." },
      { title: "Figma to WordPress", description: "Converted the supplied designs into a working website." },
      { title: "B2B Lead Focus", description: "A clear structure that guides business prospects toward an inquiry." },
      { title: "Clear Hierarchy", description: "Organized complex feature information into easy-to-scan sections." }
    ],
    techStack: ["Figma","WordPress"]
  },
  {
    id: "ar-gadgets",
    slug: "ar-gadgets",
    title: "AR Gadgets",
    category: "E-Commerce Store (Tech & Gadgets)",
    group: "E-Commerce",
    tag: "WooCommerce Store",
    focus: "Customer Accounts",
    desc: "A WooCommerce store for tech accessories and gadgets with secure checkout, customer accounts, and order tracking.",
    desktopImg: "/assets/images/projects/ar-gadgets/AR Gadgets.webp",
    mobileImg: "/assets/images/projects/ar-gadgets/ar-gadgets_m.webp",
    overview: "AR Gadgets is an online store for tech accessories and gadgets. Customers can browse products, place orders, and manage their purchases from a dedicated account.",
    objective: "Build a shopping experience that makes it easy to check out and find order information afterward.",
    solution: "I built the store on WooCommerce, set up a secure checkout flow, and configured a dedicated customer dashboard for account management and order tracking.",
    highlights: [
      { title: "Secure Checkout", description: "A straightforward flow for completing purchases." },
      { title: "Customer Accounts", description: "A dedicated dashboard for managing customer information." },
      { title: "WooCommerce", description: "The platform behind the catalog, checkout, and customer accounts." },
      { title: "Order Tracking", description: "Customers can find their order status from their account." }
    ],
    techStack: ["WordPress","WooCommerce"]
  },
  {
    id: "it-pro",
    slug: "it-pro-services",
    title: "IT Pro – Custom Software Development Services",
    shortTitle: "IT Pro",
    category: "IT Agency & Services Website",
    group: "Corporate Websites",
    tag: "Corporate Website",
    focus: "Service-Oriented UI",
    desc: "A fast, service-focused corporate website built with Hello Elementor and Elementor Pro for a custom software development company.",
    desktopImg: "/assets/images/projects/it-pro/IT Pro Services.webp",
    mobileImg: "/assets/images/projects/it-pro/it-pro_m.webp",
    overview: "IT Pro is a modern corporate website for a company that offers custom software development services. It introduces the services and gives prospective clients a clear way to take the next step.",
    objective: "Present the company’s services clearly and make it easy for visitors to find the right information and respond to a call to action.",
    solution: "I built the website with the lightweight Hello Elementor theme and Elementor Pro. I focused on fast loading, a service-oriented layout, and clear calls to action.",
    highlights: [
      { title: "Hello Elementor", description: "A lightweight theme for the website." },
      { title: "Elementor Pro", description: "Used to build and arrange the service pages." },
      { title: "Service-Oriented UI", description: "Layouts that put the company’s software services first." },
      { title: "Clear Calls to Action", description: "Visible prompts guide prospective clients to the next step." }
    ],
    techStack: ["WordPress","Hello Elementor","Elementor Pro"]
  },
  {
    id: "hassan-tech",
    slug: "hassan-tech",
    title: "Hassan Tech",
    category: "E-Commerce & Customer Support Integration",
    group: "E-Commerce",
    tag: "Online Store",
    focus: "Live Chat Support",
    desc: "An electronics and tech store with fast product browsing, secure checkout, and live chat for customers who have questions before buying.",
    desktopImg: "/assets/images/projects/hassan-tech/Hassan Tech.webp",
    mobileImg: "/assets/images/projects/hassan-tech/hassan-tech_m.webp",
    overview: "Hassan Tech is an online shopping platform for electronics and tech products. It pairs a straightforward buying experience with real-time product support.",
    objective: "Help customers get answers before checkout without interrupting the buying process.",
    solution: "I integrated real-time live chat alongside a smooth, secure checkout. Shoppers can browse products quickly and get answers before buying, which helped improve conversions.",
    highlights: [
      { title: "Secure Checkout", description: "A smooth path from cart to purchase." },
      { title: "Live Chat Support", description: "Shoppers can get answers in real time." },
      { title: "Fast Browsing", description: "Customers can navigate the electronics catalog quickly." },
      { title: "Pre-Purchase Help", description: "Support is available while shoppers are still choosing a product." }
    ]
  },
  {
    id: "anwan-llc",
    slug: "anwan-llc",
    title: "Anwan LLC",
    category: "Modern E-Commerce Brand",
    group: "E-Commerce",
    tag: "Retail Website",
    focus: "Advanced Search & Filtering",
    desc: "A fast, modern online store designed to make a large retail catalog easy to search and filter.",
    desktopImg: "/assets/images/projects/anwan-llc/anwan-llc.jpg",
    mobileImg: "/assets/images/projects/anwan-llc/anwan-llc_m.jpg",
    overview: "Anwan LLC is a modern retail brand with an online store designed for quick product discovery across a large inventory.",
    objective: "Make a large catalog easy to navigate so shoppers can reach relevant results without browsing every category.",
    solution: "I implemented advanced product search and filtering, allowing visitors to narrow the catalog and find the products they want quickly. I paired those tools with a sleek, performance-focused storefront.",
    highlights: [
      { title: "Modern Storefront", description: "A clean, current design for an online retail brand." },
      { title: "Advanced Search", description: "Helps shoppers find relevant products across the catalog." },
      { title: "Product Filters", description: "Lets shoppers narrow their results as they browse." },
      { title: "Optimized UX", description: "A fast shopping experience built around product discovery." }
    ]
  },
  {
    id: "sa-market",
    slug: "sa-market",
    title: "SA Market",
    category: "Multi-Feature E-Commerce Platform",
    group: "E-Commerce",
    tag: "Online Marketplace",
    focus: "Wishlist & Comparison",
    desc: "An e-commerce marketplace with a wishlist and side-by-side product comparison to help shoppers make informed purchase decisions.",
    desktopImg: "/assets/images/projects/sa-market/sa-market.jpg",
    mobileImg: "/assets/images/projects/sa-market/sa-market_m.jpg",
    overview: "SA Market is an e-commerce marketplace that gives shoppers tools to save products, evaluate alternatives, and choose what to buy.",
    objective: "Make it easier for customers to return to items they like and weigh their options before purchasing.",
    solution: "I added a custom wishlist and a product comparison feature. Shoppers can save items for later and compare features and prices side by side when they are ready to decide.",
    highlights: [
      { title: "Product Compare", description: "A side-by-side view of product options." },
      { title: "Custom Wishlist", description: "Lets shoppers save items they want to revisit." },
      { title: "Conversion-Focused", description: "The layout supports the path from browsing to buying." },
      { title: "Price & Feature Comparison", description: "Shoppers can evaluate the details that influence their purchase." }
    ]
  },
  {
    id: "legacy-building",
    slug: "legacy-building-group",
    title: "Legacy Building Group",
    category: "Construction & Real Estate Website",
    group: "Corporate Websites",
    tag: "Company Portfolio",
    focus: "Visual Project Showcase",
    desc: "A visual portfolio website that showcases a construction and real estate group’s projects and services.",
    desktopImg: "/assets/images/projects/legacy-building/legacy-laptop-mobile-mockup.png",
    mobileImg: "/assets/images/projects/legacy-building/legacy-building_m.png",
    overview: "Legacy Building Group is a construction and real estate group. Its portfolio website presents its projects and services through clear, image-led pages.",
    objective: "Give the group a professional digital presence and let the quality of its completed work lead the presentation.",
    solution: "I used Hello Elementor and Elementor Pro to build a clean, visual portfolio website. I arranged the project photography and service information so visitors could explore the work and understand what the group offers.",
    highlights: [
      { title: "Hello Elementor", description: "A lightweight foundation for the portfolio site." },
      { title: "Elementor Pro", description: "Used to build out the project and service layouts." },
      { title: "High-Impact Visuals", description: "Project photography leads the portfolio presentation." },
      { title: "Services Showcase", description: "Clear sections present the group’s construction and real estate services." }
    ],
    techStack: ["WordPress","Hello Elementor","Elementor Pro"]
  },
  {
    id: "codenest",
    slug: "codenest-online",
    legacySlug: "mycustomcode",
    title: "CodeNest Online",
    category: "EdTech & Learning Management System (LMS)",
    group: "Learning Platforms",
    tag: "Learning Platform",
    focus: "Student Dashboard",
    desc: "An e-learning platform built with Tutor LMS and WooCommerce, with a student dashboard, course enrollment, and secure payments.",
    desktopImg: "/assets/images/projects/codenest/codenest.jpg",
    mobileImg: "/assets/images/projects/codenest/codenest_m.jpg",
    overview: "CodeNest Online is an interactive platform for online courses and digital skills training. Students can discover courses, enroll, and access their learning from one place.",
    objective: "Connect course discovery, enrollment, payment, and student access in a straightforward learning experience.",
    solution: "I built the platform with WordPress and Astra, integrating Tutor LMS for courses and WooCommerce for checkout. It includes a dedicated student dashboard, a clear course enrollment flow, and a secure payment gateway.",
    highlights: [
      { title: "Tutor LMS & WooCommerce", description: "Course management and checkout work together." },
      { title: "Student Dashboard", description: "A dedicated space where learners access their courses." },
      { title: "Course Enrollment", description: "A clear flow for signing up for a course." },
      { title: "Secure Payments", description: "A payment gateway supports paid enrollments." }
    ],
    techStack: ["WordPress","Astra","Tutor LMS","WooCommerce"]
  },
  {
    id: "shabelle",
    slug: "shabelle-capital",
    legacySlug: "shabelle-bank",
    title: "Shabelle Capital",
    category: "Banking & Financial Services Website",
    group: "Corporate Websites",
    tag: "Corporate Website",
    focus: "Banking & Investment",
    desc: "A responsive financial services website for Shabelle Bank, with clear information on branches, investments, and digital banking.",
    desktopImg: "/assets/images/projects/shabelle/shabelle-bank.jpg",
    mobileImg: "/assets/images/projects/shabelle/shabelle-bank_m.jpg",
    client: "Shabelle Bank",
    overview: "Shabelle Capital is a corporate website project for Shabelle Bank. It presents the institution’s branch network, investment services, and digital banking features.",
    objective: "Give visitors a clear way to find branch and financial service information in an interface that feels professional and trustworthy.",
    solution: "I designed the fully responsive website using Elementor Page Builder, with a clear content hierarchy for the bank’s branches, investment offerings, and digital services.",
    highlights: [
      { title: "Elementor", description: "Built with Elementor Page Builder." },
      { title: "Fully Responsive", description: "The interface adapts to desktop and smaller screens." },
      { title: "Corporate Financial UI", description: "A professional visual hierarchy for banking information." },
      { title: "Services & Branches", description: "Dedicated sections cover branch, investment, and digital banking information." }
    ],
    techStack: ["WordPress","Elementor Page Builder"]
  }
];

export const experience = [
  {
    id: "addiztech",
    role: "Senior WordPress Web Developer & Team Lead",
    company: "Addiztech IT Solutions",
    location: "Rawalpindi / Islamabad, Pakistan",
    period: "Aug 2024 – Present",
    desc: "Leading end-to-end WordPress web development, custom theme tailoring, plugin integrations, performance optimization, and reliable client-first digital deliverables.",
    achievements: [
      "Directed front-end and back-end development across 25+ successful international client launches.",
      "Engineered bespoke WordPress themes scoring 95+ on Google PageSpeed Insights.",
      "Mentored junior developers on coding standards, version control workflows, and security best practices."
    ],
    logo: "/assets/images/resume/addiztech-logo.png"
  },
  {
    id: "7marketing",
    role: "Front-end WordPress Developer",
    company: "7 Marketing (SMC-Pvt) Ltd",
    location: "Plaza 57, Service Road, Bahria Phase 7, Islamabad",
    period: "Jan 2024 – July 2024",
    desc: "Engineered responsive, cross-browser front-end WordPress interfaces, customized core templates, improved page load speed, and converted UI designs into functional websites.",
    achievements: [
      "Converted 40+ complex Figma and Adobe XD prototypes into pixel-perfect responsive web pages.",
      "Decreased average website load times by 45% through asset minification, critical CSS, and caching.",
      "Collaborated closely with SEO and marketing teams to implement schema structured data and on-page ranking factors."
    ],
    logo: "/assets/images/resume/7marketing-logo.png"
  },
  {
    id: "wsm",
    role: "Web Designer & UI Specialist",
    company: "WSM Solutions Pvt Ltd",
    location: "Gulshan Batool, 13/G Road, Chishtian Mandi, Pakistan",
    period: "Aug 2023 – July 2024",
    desc: "Designed intuitive user interfaces, visual design systems, banners, and responsive layouts prioritizing user experience and consistent brand identity.",
    achievements: [
      "Created modern UI/UX design systems, responsive wireframes, and design guidelines for commercial clients.",
      "Delivered high-converting eCommerce product landing pages with interactive micro-interactions.",
      "Maintained 100% client approval ratings on brand identity and responsive usability audits."
    ],
    logo: "/assets/images/resume/wsm-logo.png"
  }
];

export const certifications = [
  {
    id: "cert-wp",
    title: "WordPress Web Development",
    issuer: "Learning With Earning (Pvt) Ltd.",
    year: "2022",
    credentialId: "LWE-95895",
    desc: "Comprehensive professional training covering WordPress core development, theme architecture, plugin ecosystems, dynamic content setups, and production site deployment.",
    thumb: "/assets/images/award/cert_20260809_125238_6fe50e3932c2.webp"
  },
  {
    id: "cert-seo",
    title: "SEO & Content Writing",
    issuer: "Learning With Earning (Pvt) Ltd.",
    year: "2022",
    credentialId: "LWE-95896",
    desc: "Specialized training in technical SEO, search intent modeling, keyword structuring, content optimization, metadata strategy, and search engine ranking best practices.",
    thumb: "/assets/images/award/cert_20260809_125254_bb0a7842fd29.webp"
  }
];

export const blogs = [
  {
    id: "scalable-web-architectures-nextjs-react",
    slug: "scalable-web-architectures-nextjs-react",
    title: "Building Enterprise Scalable Web Architectures with Next.js 15 & React 19",
    category: "Web Engineering",
    author: "Rehan Ayaz",
    date: "November 18, 2026",
    readTime: "7 min read",
    coverImg: "/assets/images/blog/image-5.png",
    excerpt: "An in-depth architectural guide exploring Server Components, Streaming SSR, and edge rendering strategies for high-traffic enterprise applications.",
    tags: ["React 19", "Next.js 15", "Architecture", "Performance", "Full-Stack"],
    content: `Modern web applications demand uncompromising performance, instant initial load speeds, and seamless real-time interactivity. In this article, we dive into how the latest paradigm shift in Next.js 15 and React 19 transforms how we architect web platforms.

### The Power of React Server Components (RSC)
By shifting data fetching and heavy computational dependencies to the server, Server Components reduce the JavaScript bundle delivered to client browsers down to the absolute bare minimum. This results in nearly zero-latency First Contentful Paint (FCP) and eliminates client-side waterfall waterfalls.

### Streaming SSR and Progressive Hydration
Instead of waiting for the entire database query to resolve before transmitting HTML, streaming Server-Side Rendering allows the server to send the application shell instantly, streaming heavier interactive widgets into place as soon as their promises resolve.

### Key Takeaways for Production
1. **Colocate data requirements with components:** Avoid bulky centralized API layers when Server Components can fetch directly from Postgres or Redis.
2. **Minimize Client Component footprint:** Only use 'use client' directives when local state, browser event listeners, or custom DOM measurements are strictly necessary.
3. **Leverage Edge Middleware:** Perform authentication, geo-routing, and security headers at the network edge before requests hit your origin servers.`
  },
  {
    id: "modern-headless-cms-wordpress-supabase",
    slug: "modern-headless-cms-wordpress-supabase",
    title: "Modern Headless CMS Integration: WordPress, Strapi & Supabase",
    category: "Content Management",
    author: "Rehan Ayaz",
    date: "November 12, 2026",
    readTime: "6 min read",
    coverImg: "/assets/images/blog/image-2.png",
    excerpt: "How to decouple the WordPress backend to leverage its world-class editorial interface while rendering ultra-fast frontends with React and Supabase.",
    tags: ["WordPress", "Headless CMS", "GraphQL", "Supabase", "Jamstack"],
    content: `WordPress powers over 40% of the web due to its unmatched editorial experience, mature plugin ecosystem, and user-friendly media management. However, monolithic WordPress themes often struggle with JavaScript bloat and slower Time to Interactive (TTI).

### Decoupling the Presentation Layer
By utilizing WPGraphQL or the WordPress REST API, we can treat WordPress strictly as a content API. Content creators continue to write in Gutenberg or classic editors, while frontend developers build blazingly fast interfaces with React, Next.js, or Astro.

### Enriching Content with Supabase
For dynamic user interactions—such as comments, bookmarks, user profiles, and analytics—connecting Supabase Postgres alongside WordPress creates a hybrid architecture that delivers the best of both worlds:
- Non-technical marketing teams enjoy complete editorial control.
- Developers achieve sub-second TTFB, bulletproof static caching, and modern reactive UIs.`
  },
  {
    id: "full-stack-performance-optimization-core-web-vitals",
    slug: "full-stack-performance-optimization-core-web-vitals",
    title: "Full-Stack Performance Optimization & Core Web Vitals Deep-Dive",
    category: "Performance & SEO",
    author: "Rehan Ayaz",
    date: "November 05, 2026",
    readTime: "8 min read",
    coverImg: "/assets/images/blog/image-4.png",
    excerpt: "Mastering Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for peak Google search visibility.",
    tags: ["Core Web Vitals", "LCP", "INP", "CLS", "Technical SEO"],
    content: `Google's Core Web Vitals are no longer just performance suggestions—they are definitive search ranking signals directly impacting organic traffic, conversion rates, and revenue.

### 1. Conquering Largest Contentful Paint (LCP)
- **Preload Critical Hero Assets:** Always specify \`<link rel="preload" as="image" href="..." fetchpriority="high">\` for above-the-fold hero banners.
- **Modern Image Formats:** Convert all PNG and JPEG graphics to WebP and AVIF to reduce file weights by up to 70% with zero perceptible loss in visual fidelity.

### 2. Taming Interaction to Next Paint (INP)
With Google replacing First Input Delay (FID) with INP, every click and keyboard event must complete processing within 200ms:
- Avoid long JavaScript main-thread tasks by chunking computation using \`requestIdleCallback\` or web workers.
- Avoid excessive re-renders by memoizing expensive component subtrees.

### 3. Eliminating Cumulative Layout Shift (CLS)
- Explicitly declare \`width\` and \`height\` attributes on all \`<img>\` tags and video embeds.
- Reserve container aspect ratios using the CSS \`aspect-ratio\` property to prevent jarring layout jumps as remote media streams in.`
  }
];

export const pricingPlans = [
  {
    id: "starter",
    title: "Starter",
    price: "$230",
    period: "/one time",
    popular: false,
    desc: "Perfect for personal portfolios, simple landing pages, and emerging small businesses needing a clean digital presence.",
    features: [
      "5 Custom Designed Responsive Pages",
      "Mobile-First Responsive Layout for All Devices",
      "Fast Loading & Performance Tuning",
      "Contact & Inquiry Form Integration",
      "Basic SEO Metadata & Social Sharing Tags",
      "1 Month Dedicated Free Support & Maintenance"
    ],
    ctaText: "Let's Start with Starter",
    whatsappMsg: "Hello, I want to book the Starter Plan ($230)."
  },
  {
    id: "standard",
    title: "Standard",
    price: "$599",
    period: "/one time",
    popular: true,
    desc: "The most popular package for growing businesses, corporate agencies, and service providers requiring advanced features.",
    features: [
      "Up to 10 Custom Designed Responsive Pages",
      "Complete Dynamic CMS (WordPress / Headless)",
      "Advanced On-Page Technical SEO & Schema Markup",
      "E-Commerce Setup or Advanced Lead Gen Funnels",
      "Speed Optimization (90+ Google PageSpeed Score)",
      "2 Months Dedicated Priority Support & Training"
    ],
    ctaText: "Choose Standard Plan",
    whatsappMsg: "Hello, I want to book the Standard Plan ($599)."
  },
  {
    id: "premium",
    title: "Premium",
    price: "$1,199",
    period: "/one time",
    popular: false,
    desc: "Comprehensive enterprise solution for full-scale eCommerce brands, SaaS products, and custom platform architectures.",
    features: [
      "Unlimited Custom Pages & Dynamic Post Types",
      "Custom E-Commerce Architecture or SaaS MVP",
      "AI Chatbot or Intelligent Automation Workflows",
      "Full Core Web Vitals Optimization & CDN Setup",
      "Custom Payment Gateways & CRM Integration",
      "6 Months Comprehensive Support & Retainer Priority"
    ],
    ctaText: "Get Enterprise Plan",
    whatsappMsg: "Hello, I want to book the Premium Plan ($1199)."
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Founder & CEO, NexaTech Solutions",
    country: "United States",
    rating: 5,
    avatar: "/assets/images/testimonial/client-1.jpg",
    text: "Working with Rehan was an absolute game changer for our platform. He delivered an enterprise-grade web architecture that slashed our page load times in half and noticeably boosted our inbound demo conversions. His communication, technical prowess, and attention to detail are world-class."
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    role: "Head of Marketing, Lumina Retail Group",
    country: "United Kingdom",
    rating: 5,
    avatar: "/assets/images/testimonial/client-2.jpg",
    text: "Rehan engineered our high-volume multi-category eCommerce store with extreme care. The checkout funnel is silky smooth, the mobile speed is incredible, and our customer feedback has been overwhelmingly positive. If you need a reliable developer who truly understands business ROI, Rehan is your guy."
  },
  {
    id: "t3",
    name: "Ahmed Al-Mansoor",
    role: "Operations Director, Gulf Capital Partners",
    country: "United Arab Emirates",
    rating: 5,
    avatar: "/assets/images/testimonial/client-3.jpg",
    text: "Rehan's technical execution on our corporate portal and financial advisory tools exceeded all our expectations. He is prompt, highly professional, and ensures every pixel and security requirement is handled with precision. We will certainly continue working with him for all our digital initiatives."
  },
  {
    id: "t4",
    name: "David Chen",
    role: "CTO, CloudPulse Technologies",
    country: "Australia",
    rating: 5,
    avatar: "/assets/images/testimonial/client-4.jpg",
    text: "As a CTO, I have very high standards for code quality, modular architecture, and responsiveness. Rehan demonstrated exceptional mastery across modern React components, responsive layouts, and clean API integrations. Highly recommended for any serious web development project."
  }
];

export const faqs = [
  {
    category: "General & Experience",
    items: [
      {
        q: "What web development services do you specialize in?",
        a: "I specialize in custom WordPress development, WooCommerce eCommerce platforms, high-performance responsive web applications using React/Next.js, full-stack SaaS solutions, and Google Core Web Vitals / PageSpeed speed optimization."
      },
      {
        q: "How many years of professional experience do you have?",
        a: "I have over 5 years of hands-on professional web development experience, successfully delivering more than 60 projects for startups, enterprises, and eCommerce brands internationally."
      },
      {
        q: "Where are you based and do you work with international clients?",
        a: "I am based in Pakistan and collaborate seamlessly with clients across the United States, United Kingdom, Canada, Australia, the UAE, and Europe via remote workflows (Slack, WhatsApp, Zoom, GitHub)."
      }
    ]
  },
  {
    category: "Timeline & Pricing",
    items: [
      {
        q: "How long does a typical website project take to complete?",
        a: "Most standard business websites are delivered within 1 to 2 weeks, while custom platforms or multi-feature eCommerce stores typically take 3 to 4 weeks, depending on design complexity and feature requirements."
      },
      {
        q: "What are your payment terms?",
        a: "Projects are typically structured with a 50% upfront deposit to initiate discovery and architecture, and the remaining 50% upon final milestone approval and deployment to your live production server."
      },
      {
        q: "Do you offer custom pricing packages outside the standard tiers?",
        a: "Yes. Every business has unique requirements. Reach out via the contact form or WhatsApp with your project scope and I will prepare a transparent, tailored proposal."
      }
    ]
  },
  {
    category: "Technical Quality & Performance",
    items: [
      {
        q: "Will my website be fast, secure, and mobile-friendly?",
        a: "Yes, 100%. Every website is built mobile-first, fully responsive across all device sizes, and rigorously optimized for sub-second loading speeds, SSL security, and clean semantic code."
      },
      {
        q: "Can you optimize or redesign an existing website without losing SEO rankings?",
        a: "Yes! I specialize in safely migrating, modernizing, and optimizing existing websites while strictly preserving your URL structures, search engine rankings, content, and brand identity."
      },
      {
        q: "Do you provide ongoing maintenance and post-launch support?",
        a: "Absolutely. All projects include complimentary post-launch support to ensure a smooth transition, along with flexible monthly maintenance packages for backups, security monitoring, and updates."
      }
    ]
  }
];
