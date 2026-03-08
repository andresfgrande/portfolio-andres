export const NAV_LINKS = ["About", "Experience", "Projects", "Contact"];

export const SKILLS = {
  Frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "jQuery"],
  Backend: ["Node.js", "NestJS", "PHP", "Laravel", "PostgreSQL"],
  Blockchain: ["Solidity", "Web3.js", "Cardano", "Chainlink", "OIDC4VP"],
  DevOps: ["Azure Pipelines", "CI/CD", "TDD", "Agile", "REST APIs"],
  Platforms: ["Magento 2", "ERP/CRM Integration", "Decentralized Identity", "W3C Standards"],
};

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "Business Insights",
    period: "Oct 2025 – Present",
    location: "Barcelona · Hybrid",
    desc: "Working with TypeScript, Node.js and modern fullstack technologies in a hybrid setup.",
    tags: ["TypeScript", "Node.js"],
    accent: "#00ff88",
    current: true,
  },
  {
    role: "Backend Developer",
    company: "Validated ID · Signaturit Group",
    period: "Mar 2024 – Dec 2024",
    location: "Barcelona",
    desc: "Developed decentralized identity projects aligned with OIDC4CI, OIDC4VP, and W3C standards. Built APIs and React dashboards with NestJS and TypeScript. Implemented CI/CD via Azure Pipelines and applied TDD and agile methodologies.",
    tags: ["TypeScript", "NestJS", "React", "Azure", "TDD", "W3C"],
    accent: "#a78bfa",
    current: false,
  },
  {
    role: "Full Stack Developer",
    company: "We're Sinapsis",
    period: "Sep 2018 – Mar 2024",
    location: "Barcelona",
    desc: "5+ years building custom e-commerce solutions with Magento 2, Laravel, and Node.js. Developed CRUD platforms, integrated third-party ERPs/CRMs via APIs, and built frontend interfaces in JavaScript and Vue.",
    tags: ["Magento 2", "Laravel", "Node.js", "Vue", "JavaScript", "APIs"],
    accent: "#ff6b35",
    current: false,
  },
];

export const PROJECTS = [
  {
    title: "DENERGY-LINK",
    subtitle: "Chainlink Spring 2023 Hackathon",
    desc: "Blockchain-powered energy grid management covering production, consumption tracking, and bill payments. Leverages Chainlink for off-chain data and promotes renewable energy self-management through decentralized infrastructure.",
    tags: ["Solidity", "React", "Chainlink", "Blockchain"],
    accent: "#00ff88",
    badge: "🏆 Hackathon",
  },
  {
    title: "Decentralized Identity Platform",
    subtitle: "Validated ID · Signaturit",
    desc: "Production identity system implementing OIDC4CI, OIDC4VP, and W3C standards. Includes API services and React dashboards used to demonstrate SSI (Self-Sovereign Identity) use cases to enterprise clients.",
    tags: ["TypeScript", "NestJS", "React", "OIDC4VP", "W3C"],
    accent: "#a78bfa",
    badge: "Production",
  },
  {
    title: "Custom E-Commerce Ecosystem",
    subtitle: "We're Sinapsis",
    desc: "Suite of Magento 2 projects with custom modules extending business logic and UI. Integrated ERP and CRM systems via APIs to automate catalog, stock, and customer data flows across multiple clients.",
    tags: ["Magento 2", "Laravel", "PHP", "ERP", "Node.js"],
    accent: "#ff6b35",
    badge: "Multi-client",
  },
];

export const EDUCATION = [
  {
    degree: "Master's in Blockchain Technologies",
    school: "UPC · Universitat Politècnica de Catalunya",
    period: "Jan 2022 – Nov 2023",
  },
  {
    degree: "Bachelor's in Computer Engineering",
    school: "Universitat Autònoma de Barcelona",
    period: "2015 – 2020",
  },
];

export const CERTS = [
  { name: "Cardano Blockchain Certified Associate (CBCA)", issuer: "Cardano Foundation", date: "Jul 2025" },
  { name: "EF SET English Certificate C2 Proficient", issuer: "EF SET", date: "Mar 2025" },
];

export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andres-grande/", icon: "in" },
  { label: "GitHub", href: "https://github.com/andres-grande", icon: "gh" },
  { label: "Email", href: "mailto:hello@andresgrande.dev", icon: "@" },
];
