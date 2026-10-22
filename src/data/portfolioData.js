export const personalInfo = {
  name: "Prince Tyagi",
  title: "UI/UX Designer | Junior Product Designer",
  location: "Uttar Pradesh, India",
  phone: "+91 8218485967",
  email: "princetyagi9997@gmail.com",
  linkedin: "https://www.linkedin.com/in/princetyagi",
  github: "https://github.com/princetyagi",
  resumeUrl: "/assets/Prince-Tyagi-Resume.pdf",
  summary: "Detail-oriented UI/UX Designer with hands-on Figma experience in wireframing, prototyping, and design iteration. Skilled in user research, user flows, responsive design, and usability testing, with an MCA background in full-stack development (React, Spring Boot) that enables smooth design-to-developer handoff. Seeking an entry-level UI/UX Designer role to create intuitive, user-centered digital products.",
  status: "Available for Entry-level UI/UX & Product Design Roles",
  stats: [
    { label: "Education", value: "MCA (8.7 CGPA)" },
    { label: "Core Tool", value: "Figma & Auto Layout" },
    { label: "Code Craft", value: "React & Spring Boot" },
    { label: "Design Process", value: "Research → Handoff" }
  ]
};

export const educationList = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Galgotias University",
    location: "Greater Noida, Uttar Pradesh",
    period: "2024 – 2026",
    grade: "CGPA: 8.7 / 10.0",
    badge: "First Division with Distinction",
    statusBadge: "Pursuing · High Distinction",
    summary: "Advanced postgraduate specialization bridging human-computer interaction, scalable component architectures, data-driven interfaces, and agile software product engineering.",
    highlights: [
      "Secured 8.7 / 10.0 CGPA with First Division & Distinction standing.",
      "Specialized in Human-Computer Interaction (HCI), web application architecture, and agile product development.",
      "Integrated full-stack engineering principles (React.js, Spring Boot, REST APIs) directly into design system thinking for seamless developer collaboration.",
      "Conducted usability evaluations and interface prototyping for modern web applications."
    ],
    skills: ["HCI & UX Principles", "Software Architecture", "Advanced Web Development", "Cloud Systems", "Agile & Scrum"]
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chaudhary Charan Singh University",
    location: "Meerut, Uttar Pradesh",
    period: "2021 – 2024",
    grade: "Grade: 69.39%",
    badge: "First Division",
    statusBadge: "Completed · First Division",
    summary: "Solid foundational degree in computer science, algorithmic logic, relational databases, and front-end interface engineering.",
    highlights: [
      "Graduated with First Division honors (69.39%).",
      "Built core competencies in Object-Oriented Programming (Java, C++), Data Structures, and Database Management.",
      "Developed web design projects emphasizing semantic HTML, CSS layout techniques, and user interface responsiveness.",
      "Led academic group projects on interactive software systems and database-driven applications."
    ],
    skills: ["Core Java & OOP", "Data Structures", "Database Management (MySQL)", "Web Technologies", "Operating Systems"]
  }
];

export const hybridAdvantage = {
  title: "The Developer-Literate Designer Superpower",
  subtitle: "Why an MCA background elevates UI/UX design quality",
  description: "Most design friction occurs at the boundary between Figma and the browser. Because I write React, CSS Grid, and understand API contracts, I design components that are structurally sound, production-ready, and painless for developers to implement.",
  pillars: [
    {
      title: "Zero-Friction Dev Handoff",
      desc: "Pixel-perfect Figma auto-layout, named tokens, and variant properties that map 1:1 to React props.",
      icon: "📐"
    },
    {
      title: "Technical Feasibility First",
      desc: "Anticipating loading skeletons, error boundaries, data latency, and edge cases before engineering begins.",
      icon: "⚡"
    },
    {
      title: "Design System Architecture",
      desc: "Building scalable atomic UI components with consistent 8pt spacing, WCAG color contrast, and fluid typography.",
      icon: "🧩"
    }
  ]
};

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "tools", label: "Design Tools" },
  { id: "ux", label: "UX Research & Process" },
  { id: "ui", label: "UI Design & Systems" },
  { id: "frontend", label: "Frontend & Code" },
  { id: "backend", label: "Backend & Dev Tools" },
  { id: "collaboration", label: "Collaboration & Soft Skills" }
];

export const skillsData = [
  // Design Tools
  {
    name: "Figma",
    category: "tools",
    level: "Advanced",
    highlight: true,
    tags: ["Auto Layout", "Component Sets", "Variants", "Interactive Prototypes", "Design Tokens"],
    description: "Primary design tool for high-fidelity wireframing, component-driven design systems, auto layout hierarchies, and interactive flows."
  },
  {
    name: "Wireframing & Prototyping",
    category: "tools",
    level: "Advanced",
    highlight: true,
    tags: ["Lo-Fi Wireframes", "Hi-Fi Clickable Prototypes", "Micro-interactions", "Smart Animate"],
    description: "Rapid translation of user requirements into interactive prototypes to validate workflows before development."
  },
  {
    name: "Design Systems",
    category: "tools",
    level: "Proficient",
    highlight: true,
    tags: ["Atomic Design", "Token Architecture", "Color Palettes", "Typography Scales"],
    description: "Structuring scalable, maintainable component libraries with semantic naming conventions."
  },
  {
    name: "Adobe XD & Canva",
    category: "tools",
    level: "Familiar",
    highlight: false,
    tags: ["Vector Layouts", "Asset Export", "Graphic Presentations"],
    description: "Supporting tools used for vector graphics, promotional assets, and presentation layouts."
  },

  // UX Process
  {
    name: "User Research & Personas",
    category: "ux",
    level: "Advanced",
    highlight: true,
    tags: ["Qualitative Interviews", "Empathy Maps", "User Personas", "Pain Point Discovery"],
    description: "Uncovering user motivations, mental models, and frustrations through structured discovery methods."
  },
  {
    name: "User Journeys & Flows",
    category: "ux",
    level: "Advanced",
    highlight: true,
    tags: ["Task Flows", "Experience Maps", "Happy & Edge Paths", "Navigation Logic"],
    description: "Mapping end-to-end user journeys to optimize task completion rates and eliminate cognitive friction."
  },
  {
    name: "Information Architecture (IA)",
    category: "ux",
    level: "Proficient",
    highlight: true,
    tags: ["Sitemaps", "Card Sorting", "Content Hierarchy", "Search & Filters"],
    description: "Structuring complex application content logically so users find what they need intuitively."
  },
  {
    name: "Usability Testing & Heuristics",
    category: "ux",
    level: "Proficient",
    highlight: true,
    tags: ["Nielsen's Heuristics", "Think-Aloud Protocols", "Iterative Usability", "Feedback Loops"],
    description: "Evaluating interfaces against usability standards, uncovering usability snags, and validating design updates."
  },
  {
    name: "Design Thinking",
    category: "ux",
    level: "Advanced",
    highlight: false,
    tags: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
    description: "Applying human-centered problem solving to translate business goals into delightful user experiences."
  },

  // UI Design
  {
    name: "Visual Hierarchy & Layout",
    category: "ui",
    level: "Advanced",
    highlight: true,
    tags: ["Spatial Composition", "Visual Anchors", "F-Pattern Scanning", "Gestalt Principles"],
    description: "Guiding the user's eye naturally across the screen through intentional scale, contrast, and balance."
  },
  {
    name: "Typography & Color Theory",
    category: "ui",
    level: "Advanced",
    highlight: true,
    tags: ["Type Scales", "Harmonic Palettes", "Color Semantics", "Readability"],
    description: "Crafting expressive, readable typography pairings and accessible color schemes that reinforce brand personality."
  },
  {
    name: "Grid & Responsive Layout",
    category: "ui",
    level: "Advanced",
    highlight: true,
    tags: ["8pt Grid System", "Mobile-First", "Breakpoints", "Fluid Typography"],
    description: "Designing elastic layouts that adapt cleanly from small mobile viewports to ultra-wide displays."
  },
  {
    name: "Accessibility (WCAG 2.1)",
    category: "ui",
    level: "Proficient",
    highlight: true,
    tags: ["Color Contrast (AA/AAA)", "Touch Targets (44px+)", "Focus States", "Screen Reader Semantics"],
    description: "Ensuring digital experiences are inclusive, legible, and compliant with web accessibility standards."
  },
  {
    name: "Interaction Design",
    category: "ui",
    level: "Proficient",
    highlight: false,
    tags: ["Hover States", "Feedback Loops", "Transitions", "Button Micro-animations"],
    description: "Designing tactile, satisfying interface states that provide clear affordances and system status."
  },

  // Frontend & Code
  {
    name: "React.js",
    category: "frontend",
    level: "Proficient",
    highlight: true,
    tags: ["Reusable Components", "Hooks (useState, useEffect)", "State Management", "Props Architecture"],
    description: "Building responsive, modern user interfaces with clean component hierarchies and modular styling."
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    level: "Advanced",
    highlight: false,
    tags: ["Semantic Elements", "ARIA Landmarks", "SEO Best Practices", "Clean DOM"],
    description: "Structuring web content with accessible, well-organized semantic tags for browsers and assistive tech."
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    level: "Advanced",
    highlight: true,
    tags: ["Flexbox", "CSS Grid", "Custom Properties (Variables)", "Transitions & Keyframes"],
    description: "Writing maintainable, modular CSS with design token variables and responsive media queries."
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Proficient",
    highlight: false,
    tags: ["DOM Manipulation", "Async/Await", "Event Handling", "Array Methods"],
    description: "Implementing client-side interactivity, API data fetching, and stateful interface dynamics."
  },

  // Backend & Dev Tools
  {
    name: "Java & Spring Boot",
    category: "backend",
    level: "Proficient",
    highlight: true,
    tags: ["Java 21", "OOP Architecture", "Spring MVC", "RESTful Endpoints"],
    description: "Full-stack backend development for robust enterprise services, secure routing, and business logic."
  },
  {
    name: "REST APIs & Postman",
    category: "backend",
    level: "Proficient",
    highlight: false,
    tags: ["API Contracts", "JSON Schemas", "Endpoint Testing", "Status Codes"],
    description: "Designing and testing clean REST API interfaces and payload structures that feed the frontend UI."
  },
  {
    name: "MySQL & Database Design",
    category: "backend",
    level: "Proficient",
    highlight: false,
    tags: ["Relational Schemas", "Queries", "Normalization", "CRUD Operations"],
    description: "Designing clean data models and queries that represent user entities and business records."
  },
  {
    name: "Git, GitHub & VS Code",
    category: "backend",
    level: "Advanced",
    highlight: false,
    tags: ["Version Control", "Branches & PRs", "Dev Environment", "Markdown"],
    description: "Standard engineering workflow, version tracking, collaboration, and code editor tooling."
  },

  // Collaboration & Soft Skills
  {
    name: "Design Handoff & Dev Mode",
    category: "collaboration",
    level: "Advanced",
    highlight: true,
    tags: ["Figma Dev Mode", "Redlines", "Asset Export", "Code-Ready Specs"],
    description: "Delivering unambiguous design specifications with precise measurements, token names, and behavioral states."
  },
  {
    name: "Agile & Scrum Teamwork",
    category: "collaboration",
    level: "Proficient",
    highlight: false,
    tags: ["Sprint Planning", "Standups", "Cross-Functional Sync", "Jira/Trello"],
    description: "Thriving in iterative sprint rhythms, collaborating seamlessly with engineers and product owners."
  },
  {
    name: "Empathy & Communication",
    category: "collaboration",
    level: "Advanced",
    highlight: true,
    tags: ["Active Listening", "Design Rationale", "Stakeholder Alignment", "User Advocating"],
    description: "Articulating the 'why' behind design decisions and championing the user's voice in every feature discussion."
  },
  {
    name: "Attention to Detail & Craft",
    category: "collaboration",
    level: "Advanced",
    highlight: true,
    tags: ["Pixel Perfection", "Consistent Spacing", "Micro-copy", "Edge-Case Coverage"],
    description: "Meticulous care for optical alignment, typo-free microcopy, and resilient fallback states."
  }
];

export const experienceList = [
  {
    id: "codsoft",
    role: "Java Development Intern",
    company: "CodSoft",
    location: "Virtual / Remote",
    period: "Virtual Internship",
    badge: "Software Engineering & UI Ergonomics",
    description: "Engineered 5 modular desktop applications with an acute focus on human-computer interaction, user mental models, intuitive task completion, and error prevention.",
    keyDeliverables: [
      "Architected 5 user-centered desktop software applications: ATM Interface, Student Management System, Grade Calculator, Currency Converter, and Number Guessing Game.",
      "Engineered 20+ reusable OOP classes implementing modular separation of logic, data models, and user display layers.",
      "Tackled user error scenarios by designing preventive input validation, clear error messaging, and robust File Handling exception fallbacks.",
      "Bridged procedural logic with human UX patterns, reducing user cognitive friction during transaction and calculation flows."
    ],
    uxTakeaway: "Directly experienced how software state management and system latencies impact the user experience, solidifying a deep empathy for developer feasibility during design handoffs.",
    techStack: ["Java 21", "Core OOP", "Collections Framework", "File I/O", "Exception Handling"]
  }
];

export const certificationsList = [
  {
    id: "ccna",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "Certified",
    badge: "Networking Fundamentals",
    icon: "🌐",
    accent: "blue",
    description: "Mastered core network architectures, OSI layers, IP routing, packet inspection, and client-server connectivity."
  },
  {
    id: "java",
    title: "Java Programming Fundamentals",
    issuer: "Geekster",
    year: "2025",
    badge: "Core Engineering",
    icon: "☕",
    accent: "orange",
    description: "Advanced grasp of Object-Oriented Programming, data structures, algorithm efficiency, and modular code design."
  },
  {
    id: "c-lang",
    title: "C Programming Language",
    issuer: "Simplilearn",
    year: "2024",
    badge: "Systems Foundation",
    icon: "⚡",
    accent: "lime",
    description: "Solid grounding in memory management, pointer logic, control flow, and computational fundamentals."
  }
];

export const projectsList = [
  {
    id: "narrative",
    num: "01",
    type: "Web experience & Design System",
    filterType: "Web experience",
    title: "Narrative® — UI/UX Design Portfolio",
    subtitle: "Modular creative showcase across 8 design disciplines",
    description: "A responsive UI/UX portfolio website designed to showcase multidisciplinary creative case studies across eight categories with effortless filtering, clear typography hierarchy, and mobile-first layouts.",
    accent: "orange",
    visual: "portfolio",
    tags: ["React.js", "Design System", "Information Architecture", "Responsive Design", "WCAG AA"],
    caseStudy: {
      client: "Design Portfolio & Case Study Platform",
      role: "Lead UI/UX Designer & Frontend Engineer",
      timeline: "Concept to Production",
      problem: "Traditional design portfolios often feel like cluttered galleries of disconnected screenshots. Users and hiring managers face high cognitive friction when trying to discover relevant projects, understand the problem-solving journey, or view mobile-friendly work.",
      solution: "Engineered Narrative®—an editorial, content-first portfolio system. Structured with an intuitive 8-category taxonomic filter, instant search capability, custom component-based case study layouts, and an 8pt spatial grid for flawless responsive scaling.",
      process: [
        { phase: "01. Research & Persona", detail: "Analyzed recruitment workflows of 15+ design managers; prioritized scannable problem/solution summaries and direct access to interactive prototypes." },
        { phase: "02. Information Architecture", detail: "Defined hierarchical sitemaps and content taxonomy spanning 8 distinct design categories for rapid discovery." },
        { phase: "03. Wireframing & Design System", detail: "Developed high-contrast type scales in Figma pairing Playfair Display with DM Sans, with accessible dark-on-light color tokens." },
        { phase: "04. React Component Engineering", detail: "Implemented reusable modular React components, smooth zero-layout-shift transitions, and full mobile optimization." }
      ],
      deliverables: ["Figma Component Library", "Interactive Clickable Prototype", "Responsive Web App", "Case Study Layout Framework"],
      metrics: [
        { value: "8 Categories", label: "Multi-discipline coverage" },
        { value: "100%", label: "Responsive layout score" },
        { value: "<500ms", label: "Instant filter response" }
      ]
    }
  },
  {
    id: "business-assistant",
    num: "02",
    type: "Product design & AI UX",
    filterType: "Product design",
    title: "AI-Powered Business Assistant",
    subtitle: "Conversational cockpit & predictive analytics platform",
    description: "A decision-ready analytics dashboard and AI chatbot interface focusing on clean data presentation, role-based access control (RBAC), and intuitive conversational assistance for modern business teams.",
    accent: "violet",
    visual: "analytics",
    tags: ["AI UX Design", "Analytics Dashboard", "React.js", "Spring Boot", "Data Visualization"],
    caseStudy: {
      client: "Enterprise Operations & Analytics",
      role: "Product Designer & Full-Stack Architect",
      timeline: "Full Lifecycle",
      problem: "Non-technical store managers and business operators spend hours deciphering dense raw database tables. Existing analytics tools lack conversational guidance, making anomaly detection and trend forecasting intimidating.",
      solution: "Designed a dual-surface product experience: an ergonomic visual telemetry dashboard paired with an intelligent conversational AI assistant. Implemented progressive disclosure so critical insights appear upfront, with deeper statistical drill-downs available via conversational natural language prompts.",
      process: [
        { phase: "01. User Flows & Task Analysis", detail: "Mapped standard managerial review routines to streamline daily morning telemetry checks into a 30-second glanceable dashboard." },
        { phase: "02. AI Conversational UX", detail: "Designed conversational states (thinking, streaming, citations, error fallbacks) ensuring users understand the reasoning behind AI recommendations." },
        { phase: "03. Dashboard Data Ergonomics", detail: "Applied color theory to data indicators (positive trends in soft sage, warnings in amber), avoiding alarmist visual fatigue." },
        { phase: "04. Full-Stack Implementation", detail: "Crafted responsive frontend in React connected to Spring Boot & FastAPI services with secure JWT authentication and role-based permissions." }
      ],
      deliverables: ["Dual-Pane UI Wireframes", "Conversational AI Chat States", "Analytics Component Library", "RBAC User Flows"],
      metrics: [
        { value: "90%+", label: "Model forecast accuracy" },
        { value: "-40%", label: "Cognitive clutter reduction" },
        { value: "Dual Surface", label: "Visual + Chat interaction" }
      ]
    }
  },
  {
    id: "forecasting-workspace",
    num: "03",
    type: "Product design & Data Viz",
    filterType: "Product design",
    title: "Forecasting & Inventory Intelligence",
    subtitle: "Predictive signals and stock optimization workspace",
    description: "A focused data workspace for sales forecasting and inventory replenishment, engineered for instant visual clarity, anomaly detection, and rapid decision-making.",
    accent: "lime",
    visual: "forecast",
    tags: ["Data Experience", "Predictive Modeling", "Information Design", "Figma", "UI System"],
    caseStudy: {
      client: "Supply Chain & Retail Intelligence",
      role: "UI/UX & Data Experience Designer",
      timeline: "Product Design Concept",
      problem: "Stockouts and overstock cost retail businesses significant capital. Traditional ERP interfaces are buried under spreadsheet tabs, leaving inventory controllers blind to imminent supply crunches.",
      solution: "Created an intuitive forecasting cockpit that highlights replenishment thresholds, dynamic confidence bounds (92% confidence level), and actionable alerts before inventory depletes.",
      process: [
        { phase: "01. Heuristic Review", detail: "Audited existing inventory tools, finding severe contrast issues, lack of status badges, and confusing multi-level navigation." },
        { phase: "02. Data Visualization Design", detail: "Drafted smooth trendline graphs with interactive tooltip inspection, threshold limit lines, and color-coded stock health chips." },
        { phase: "03. Ergonomic Card Layouts", detail: "Arranged telemetry cards following the F-shaped reading pattern with primary stock ratios in high-contrast display typography." },
        { phase: "04. Design System Tokens", detail: "Defined semantic status variables (--status-optimal, --status-warning, --status-critical) for consistent UI feedback." }
      ],
      deliverables: ["Data Visualization Specs", "Interactive Trendline Mockup", "Alert & Notification Flows", "Figma Component Library"],
      metrics: [
        { value: "92%", label: "Forecast confidence index" },
        { value: "Real-time", label: "Telemetry & alert response" },
        { value: "3 Clicks", label: "Restock action flow" }
      ]
    }
  }
];

export const designPrinciples = [
  {
    step: "01",
    title: "Listen Closely (Research & Empathy)",
    description: "Deep user research, stakeholder interviews, and empathy mapping turn unverified assumptions into razor-sharp product direction."
  },
  {
    step: "02",
    title: "Structure with Intent (IA & Flows)",
    description: "Robust information architecture, clear task flows, and intuitive navigation give every screen a purposeful cognitive hierarchy."
  },
  {
    step: "03",
    title: "Craft with Polish (UI & Tokens)",
    description: "Meticulous typography scales, 8pt spatial rhythm, accessible contrast ratios, and tactile micro-interactions that spark delight."
  },
  {
    step: "04",
    title: "Bridge to Code (Feasibility & Handoff)",
    description: "Leveraging my MCA full-stack foundation to ensure design tokens, variants, and responsive breakpoints translate flawlessly into production React code."
  }
];
