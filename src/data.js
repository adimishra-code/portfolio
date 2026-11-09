// ============================================================
// All portfolio content lives here — edit this file to update
// the site without touching components.
// ============================================================

export const profile = {
  name: "Aditya Mishra",
  handle: "aditya-mishra",
  title: "B.Tech IT Student · Full Stack & AI Developer",
  location: "Greater Noida, UP, India",
  email: "adityamishrav820@gmail.com",
  phone: "+91 70156 91250",
  phoneHref: "+917015691250",
  university: "Gautam Buddha University",
  github: "https://github.com/adimishra-code",
  linkedin: "https://www.linkedin.com/in/adi-mishraa/",
  instagram: "https://www.instagram.com/adiiimishraaa/",
  resume: "/Aditya_Mishra_CV.pdf",
  formspreeId: "xqpzkzer",
};

export const stats = [
  { label: "projects shipped", value: 3, suffix: "" },
  { label: "technologies used", value: 20, suffix: "+" },
  { label: "best SGPA", value: 9.24, suffix: "", decimals: 2 },
  { label: "years of coding", value: 2, suffix: "+" },
];

export const typedInterests = [
  "Full Stack Development",
  "AI-powered platforms",
  "Backend Engineering",
  "System Design",
  "Security Auditing",
  "RAG pipelines",
  "Real-time applications",
];

export const projects = [
  {
    id: "docsmind",
    name: "DocsMind",
    emoji: "📄",
    description:
      "AI document intelligence platform — upload PDFs and chat with them. RAG-powered, citation-backed answers, OCR for scanned docs, hybrid vector + keyword search, and real-time streaming responses.",
    contribution:
      "Built the backend APIs, document-processing pipeline & AI workflow.",
    stack: ["React", "FastAPI", "Python", "LangChain", "LangGraph", "Qdrant", "Redis", "PostgreSQL", "Docker"],
    highlights: "RAG · OCR · Hybrid Search · Streaming",
    langs: [
      { label: "Python", dot: "py" },
      { label: "JavaScript", dot: "js" },
    ],
    repo: "https://github.com/adimishra-code",
    live: "https://docsmind-beige.vercel.app",
    video: "/videos/docsmind.mp4",
  },
  {
    id: "campuspool",
    name: "CampusPool",
    emoji: "🚗",
    description:
      "MERN ride-sharing platform for university students — student verification, JWT auth, real-time ride updates & live chat over Socket.IO, Google Maps integration, and role-based access control.",
    contribution:
      "Designed REST APIs, secure auth & responsive booking interfaces.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "Redux Toolkit", "JWT", "Google Maps API"],
    highlights: "Realtime · Auth · Maps · RBAC",
    langs: [
      { label: "JavaScript", dot: "js" },
      { label: "Node.js", dot: "node" },
    ],
    repo: "https://github.com/adimishra-code",
    live: "https://campuspool.pages.dev/",
    video: "/videos/campuspool.mp4",
  },
  {
    id: "extensionguard",
    name: "ExtensionGuard",
    emoji: "🛡️",
    description:
      "Automated browser extension security auditing platform — analyzes Chrome extensions via a 5-stage pipeline: safe ingestion, AST static analysis, Playwright sandbox dynamic analysis, LLM verification & 0–100 risk scoring.",
    contribution:
      "Architected the 5-stage auditing pipeline, AST analysis engine, Playwright sandbox & AI verification system.",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Redis", "Playwright", "AST Analysis", "LLM Verification"],
    highlights: "50+ Dangerous APIs · Network Exfiltration · AST Analysis · 0–100 Risk Score",
    langs: [
      { label: "TypeScript", dot: "ts" },
      { label: "React", dot: "js" },
    ],
    repo: "https://github.com/adimishra-code",
    live: "https://extensionguard-web.onrender.com/",
    video: "/videos/extension-guard.mp4",
  },
];

export const skills = [
  { title: "languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C"] },
  { title: "frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "backend", items: ["Node.js", "Express.js", "FastAPI", "Fastify"] },
  { title: "databases", items: ["MongoDB", "PostgreSQL", "Redis", "Qdrant"] },
  { title: "ai / ml", items: ["LangChain", "LangGraph", "RAG", "OCR", "Prompt Engineering"] },
  { title: "tools", items: ["Git", "GitHub", "Docker", "Playwright", "Postman", "VS Code", "Figma"] },
];

export const langBar = [
  { label: "TypeScript", dot: "ts", seg: "seg-ts", pct: 30 },
  { label: "JavaScript", dot: "js", seg: "seg-js", pct: 28 },
  { label: "Python", dot: "py", seg: "seg-py", pct: 22 },
  { label: "Java", dot: "java", seg: "seg-java", pct: 10 },
  { label: "C", dot: "c", seg: "seg-c", pct: 10 },
];

export const education = [
  {
    hash: "a8f3c21",
    ref: "(HEAD → main)",
    date: "2024 — Present",
    school: "Gautam Buddha University",
    detail: "B.Tech — Information Technology · 3rd Year",
    head: true,
    sgpa: [
      { label: "Sem 1", value: "7.36" },
      { label: "Sem 2", value: "7.34" },
      { label: "Sem 3", value: "9.24", up: true },
      { label: "Sem 4", value: "9.16", up: true },
      { label: "YCGPA", value: "~8.3", cgpa: true },
    ],
  },
  {
    hash: "e5d9b04",
    date: "2023",
    school: "New Lahoria Sr. Sec. School",
    detail: "Class XII (CBSE) · 78.80%",
  },
  {
    hash: "c1a7f88",
    date: "2021",
    school: "New Lahoria Sr. Sec. School",
    detail: "Class X (CBSE) · 93.66%",
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
];

export const bootLines = [
  { type: "cmd", text: "ssh aditya@portfolio.dev" },
  { type: "out", text: "Connecting to portfolio.dev..." },
  { type: "ok", text: "✓ Connection established" },
  { type: "cmd", text: "whoami" },
  { type: "accent", text: "Aditya Mishra — Full Stack & AI Developer" },
  { type: "cmd", text: "npm run portfolio" },
  { type: "out", text: "▸ compiling projects... done" },
  { type: "out", text: "▸ loading skills... done" },
  { type: "ok", text: "✓ ready — launching" },
];
