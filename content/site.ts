/**
 * SITE CONTENT — edit this file to update the whole website.
 *
 * This is your "CMS": every page reads from the data below. To change
 * anything on the live site — add a project, tweak your bio, add a
 * testimonial — edit this file (either in GitHub's web editor or locally),
 * commit, and push. The GitHub Actions workflow rebuilds and redeploys
 * the site automatically within a minute or two.
 */

export const siteConfig = {
  name: "Usman Javaid",
  role: "AI Agent Developer",
  tagline: "I build AI agents that businesses actually put to work.",
  description:
    "AI agent developer specializing in Telegram, WhatsApp, and Shopify automation — support bots, booking agents, RAG chatbots, and lead-generation systems.",
  location: "Faisalabad, Pakistan",
  email: "contactusmanjavaid@gmail.com", // TODO: replace with your real contact email
  github: "https://github.com/usmanxjavaid",
  // TODO: add real profiles if you have them
  linkedin: "",
  fiverr: "",
  upwork: "",
  resumeUrl: "/resume.pdf", // TODO: drop a resume.pdf into /public
  // TODO: create a free account at emailjs.com, then paste your own IDs here.
  // These are not secret — EmailJS's public key is designed to be exposed
  // client-side; abuse is prevented via their domain allow-list + rate limits.
  emailjs: {
    serviceId: "service_4qq6f3g",
    templateId: "template_qq28pih",
    publicKey: "IxnwBHN07skFk9d4c",
  },
};

export type Channel = "Telegram" | "WhatsApp" | "Shopify" | "Web";

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  channels: Channel[];
  category: "Support Agent" | "Booking Agent" | "RAG / Chatbot" | "Lead Gen" | "Assistant";
  oneliner: string;
  overview: string;
  flow: string;
  features: string[];
  stack: string[];
  repo: string;
  demo?: string;
  video?: string; // put files in /public/videos/{slug}.mp4
  featured: boolean;
};

export const hero = {
  headline: "Production-grade AI agents built to optimize how your business runs.",
  subhead:
    "I design AI agents that plug into the tools your business already runs on — cutting manual work, speeding up response times, and handling the repetitive parts so your team doesn't have to.",
  credentials: [
    { label: "Production-ready", detail: "Not a demo, not a prototype" },
    { label: "<30 min", detail: "Client onboarding" },
    { label: "Guardrailed", detail: "Every action logged & safe" },
  ],
};


export const projects: Project[] = [
  {
    slug: "velvora",
    name: "Velvora",
    subtitle: "AI Customer Support & Sales Agent for Shopify",
    channels: ["Shopify", "Telegram", "Web"],
    category: "Support Agent",
    oneliner:
      "Looks up real orders, answers product questions from the live catalog, and only refunds when the rules actually allow it.",
    overview:
      "A production-grade support agent for Shopify stores. It authenticates against the store's real Admin API, so every order lookup, refund, and catalog answer reflects live data — not a static script. Refund logic follows shipment status automatically, and anything outside its authority is escalated into a proper support ticket with full conversation history attached.",
    flow: "message → tool-calling agent decides: reply, look up an order, check the catalog, or hand off to a human — every step logged to Postgres.",
    features: [
      "Refunds follow shipment status — unshipped orders refund automatically, fulfilled ones need a human to confirm",
      "Escalates into a real support ticket with threaded history; the AI steps back until a human resolves it",
      "Replies by voice or text, in whatever language the customer used",
      "Full conversation memory per customer, backed by Postgres",
    ],
    stack: ["Python", "FastAPI", "OpenRouter + Groq", "Shopify Admin API", "ChromaDB", "PostgreSQL", "Docker"],
    repo: "https://github.com/usmanxjavaid/Velvora-AI-Customer-Support-and-Sales-Agent-for-Shopify",
    video: "/videos/velvora.mp4",
    featured: true,
  },
  {
    slug: "axiscare",
    name: "AxisCare",
    subtitle: "AI Support & Appointment Booking for WhatsApp",
    channels: ["WhatsApp"],
    category: "Booking Agent",
    oneliner: "Patients book, view, or cancel an appointment just by chatting — no menus, no phone calls.",
    overview:
      "A WhatsApp-native front desk for clinics. Booking happens in natural language rather than a rigid button flow, appointments sync straight to a real Google Calendar and Sheet, and patient questions are answered from the clinic's own handbook using retrieval-augmented generation. Voice messages are transcribed and understood the same as text.",
    flow: "message → intent detected → book, view, cancel, or answered straight from the clinic handbook — calendar and sheet update instantly.",
    features: [
      "Books directly into a real Google Calendar and logs every appointment to Google Sheets",
      "Answers patient questions from the clinic's own handbook using RAG",
      "Understands voice messages, transcribed with Groq Whisper",
      "Admin dashboard for the clinic to review bookings",
    ],
    stack: ["Python", "FastAPI", "Groq (LLaMA 3.1 + Whisper)", "Google Calendar API", "Google Sheets API", "PostgreSQL"],
    repo: "https://github.com/usmanxjavaid/AxisCare-AI-Customer-Support-Appointment-Booking-Agent-for-WhatsApp",
    video: "/videos/axiscare.mp4",
    featured: true,
  },
  {
    slug: "community-healthcare",
    name: "Community Healthcare",
    subtitle: "WhatsApp AI Support Agent with RAG",
    channels: ["WhatsApp"],
    category: "Support Agent",
    oneliner: "Reads a clinic's own documents and answers patient questions on WhatsApp, day or night.",
    overview:
      "A leaner WhatsApp support agent built around a simple idea: don't reach for a vector database until the knowledge base is actually big enough to need one. Under a few thousand words, it answers directly from context; past that, it automatically switches to full retrieval-augmented generation.",
    flow: "question comes in → knowledge base under 4,000 words answers directly; anything larger gets vector-searched first.",
    features: [
      "Auto-switches between simple mode and full RAG mode depending on knowledge-base size",
      "Reads PDF, DOCX, TXT files, or a website straight into its knowledge base",
      "Redis-backed conversation memory with an automatic in-memory fallback",
    ],
    stack: ["Python", "FastAPI", "Groq (LLaMA 3.1)", "ChromaDB", "sentence-transformers", "Redis"],
    repo: "https://github.com/usmanxjavaid/Community-Healthcare-AI-Customer-Support-Agent-For-Whatsapp",
    video: "/videos/community-healthcare.mp4",
    featured: false,
  },
  {
    slug: "documind",
    name: "DocuMind AI",
    subtitle: "Chat With Your Documents (RAG)",
    channels: ["Web"],
    category: "RAG / Chatbot",
    oneliner: "Upload a contract or manual, ask it questions in plain English, get an answer with the exact page it came from.",
    overview:
      "A document Q&A tool built to run entirely on free-tier infrastructure. Files are chunked and embedded locally, so no OpenAI key or paid vector database is required — only the retrieved snippet is ever sent to the LLM. Every answer cites the exact page it was pulled from.",
    flow: "upload a file → chunked and embedded locally → ask a question → answer arrives with a source-page citation.",
    features: [
      "Runs entirely on free-tier tools — no OpenAI key, no paid vector database",
      "Embeddings computed locally; only the retrieved snippet is sent to the LLM",
      "Remembers the last few exchanges so follow-up questions work naturally",
    ],
    stack: ["Python", "LangChain", "ChromaDB", "HuggingFace Embeddings", "Groq", "Streamlit"],
    repo: "https://github.com/usmanxjavaid/DocuMind-AI-RAG-chatbot-langchain",
    video: "/videos/documind.mp4",
    featured: true,
  },
  {
    slug: "nexora",
    name: "Nexora",
    subtitle: "AI Customer Support Chatbot for Telegram",
    channels: ["Telegram"],
    category: "Support Agent",
    oneliner: "Reads a business's own PDFs and website, then answers customer questions around the clock.",
    overview:
      "A general-purpose Telegram support bot built for small businesses that don't have a dedicated support team. It ingests a business's existing documents and website as its knowledge base, rates its own answers via customer feedback, and automatically falls back to a second model if the primary one is unavailable.",
    flow: "question comes in → Groq answers from the business's own docs → HuggingFace steps in automatically if Groq fails.",
    features: [
      "Falls back to a second model automatically if the primary AI is unavailable",
      "Customers rate every answer, feeding a simple feedback loop",
      "Rate-limited per user to stop spam and API abuse",
    ],
    stack: ["Python", "python-telegram-bot", "Groq (LLaMA 3)", "HuggingFace Inference API", "SQLite", "Docker"],
    repo: "https://github.com/usmanxjavaid/Nexora-AI-Customer-Support-Chatbot-For-Telegram",
    video: "/videos/nexora.mp4",
    featured: false,
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking Agent",
    subtitle: "AI Booking for Clinics, Salons & Consultants",
    channels: ["Telegram"],
    category: "Booking Agent",
    oneliner: "Books, reschedules, and reminds — with live slot availability so nothing double-books.",
    overview:
      "A drop-in booking agent for any service-based business. Availability is pulled live from the booking database so there's no risk of double-booking, reminders fire automatically an hour ahead of every appointment, and the business owner is notified in Telegram the moment a new booking lands.",
    flow: "pick a service, date, and time slot → confirmed instantly → reminder fires automatically an hour before.",
    features: [
      "Shows live availability pulled straight from the booking database",
      "Sends an automatic reminder one hour before every appointment",
      "Notifies the business owner in Telegram the moment a booking lands",
    ],
    stack: ["Python", "python-telegram-bot", "Groq (LLaMA 3.1)", "APScheduler", "SQLite", "Docker"],
    repo: "https://github.com/usmanxjavaid/AI-Appointment-Booking-Agent-for-telegram",
    video: "/videos/appointment-booking.mp4",
    featured: false,
  },
  {
    slug: "lead-gen",
    name: "Lead Generation Agent",
    subtitle: "AI Lead Capture for Telegram",
    channels: ["Telegram"],
    category: "Lead Gen",
    oneliner: "Runs a natural conversation to collect and qualify a lead, then hands it straight to sales.",
    overview:
      "A conversational lead-capture agent designed to replace a static contact form. It collects and validates name, email, phone, and service interest in real time, notifies the business the instant a lead comes in, and tracks every lead through a simple new → contacted → converted pipeline.",
    flow: "conversation collects name, email, phone, and interest → validated live → saved, and the admin is pinged instantly.",
    features: [
      "Validates email and international phone formats as the conversation happens",
      "Exports every lead to a CSV file on demand",
      "Tracks each lead through new → contacted → converted",
    ],
    stack: ["Python", "python-telegram-bot", "Groq (LLaMA 3.1)", "SQLite", "Docker"],
    repo: "https://github.com/usmanxjavaid/AI-Lead-Generation-agent-for-telegram",
    video: "/videos/lead-gen.mp4",
    featured: false,
  },
  {
    slug: "coinsage",
    name: "CoinSage",
    subtitle: "AI Crypto Assistant for Telegram",
    channels: ["Telegram"],
    category: "Assistant",
    oneliner: "Live prices and plain-English market questions, answered — with no financial-advice overreach.",
    overview:
      "A beginner-friendly crypto assistant built around a button-first interface instead of a command-heavy one. It pulls live prices from CoinGecko's public API and answers general market questions with an LLM, while staying explicitly clear of financial advice.",
    flow: "tap a button → live price, a market snapshot, or an AI-answered question — no commands to memorize.",
    features: [
      "Button-based menus instead of a command-heavy interface",
      "Live prices pulled from CoinGecko's public API",
      "Built with a clean service layer designed to scale into tiered packages",
    ],
    stack: ["Python", "python-telegram-bot", "Groq", "CoinGecko API"],
    repo: "https://github.com/usmanxjavaid/CoinSage-AI-Crypto-Assistant-Agent-for-telegram",
    video: "/videos/coinsage.mp4",
    featured: false,
  },
];

export type Skill = { name: string; category: "Frontend" | "Backend" | "AI / LLMs" | "Data" | "DevOps"; level: number };

export const skills: Skill[] = [
  { name: "Python", category: "Backend", level: 90 },
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "LangChain", category: "AI / LLMs", level: 80 },
  { name: "RAG Systems", category: "AI / LLMs", level: 85 },
  { name: "Groq / LLM APIs", category: "AI / LLMs", level: 88 },
  { name: "Prompt & Tool-calling Design", category: "AI / LLMs", level: 85 },
  { name: "PostgreSQL", category: "Data", level: 75 },
  { name: "ChromaDB / Vector Search", category: "Data", level: 80 },
  { name: "Redis", category: "Data", level: 70 },
  { name: "Docker", category: "DevOps", level: 75 },
  { name: "TypeScript / React", category: "Frontend", level: 70 },
  { name: "Telegram / WhatsApp APIs", category: "Backend", level: 88 },
];

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "AI Support Agents",
    description: "Customer support bots for Telegram, WhatsApp, or web that answer from your real docs and data.",
    features: ["Custom knowledge base (RAG)", "Human handoff & escalation", "Multi-language support"],
  },
  {
    title: "Booking & Scheduling Agents",
    description: "Conversational booking systems that sync to a real calendar and remind customers automatically.",
    features: ["Google Calendar / Sheets sync", "Automatic reminders", "Zero double-bookings"],
  },
  {
    title: "RAG / Document Q&A Systems",
    description: "Turn a pile of PDFs, manuals, or a knowledge base into a chatbot that cites its sources.",
    features: ["Source-page citations", "Local or hosted embeddings", "Works with your existing docs"],
  },
  {
    title: "Lead Generation Agents",
    description: "Conversational lead capture that validates, qualifies, and routes leads to your sales pipeline.",
    features: ["Live validation", "CRM / CSV export", "Instant owner notification"],
  },
  {
    title: "E-commerce AI Agents",
    description: "Shopify-integrated agents that handle order status, refunds, and product questions safely.",
    features: ["Live Shopify Admin API", "Guardrailed refund logic", "Full audit logging"],
  },
  {
    title: "Workflow Automation",
    description: "Custom automation connecting your AI agent to the tools your business already runs on.",
    features: ["API integrations", "Scheduled jobs", "Admin notifications"],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  stack: string[];
};

// TODO: replace with your real work history
export const experience: Experience[] = [
  {
    role: "AI Agent Developer",
    org: "Freelance",
    period: "Present",
    description:
      "Designing and shipping AI agents — support bots, booking systems, RAG pipelines — for Telegram, WhatsApp, and Shopify, built to be handed to a client and configured in under 30 minutes.",
    stack: ["Python", "FastAPI", "LangChain", "Groq", "Docker"],
  },
];

// TODO: write your own bio — this is a honest starting point based only on
// what your repos show, not invented biographical detail.
export const bio = {
  intro:
    "I design and build AI agents — systems that hold a real conversation, call the right tool at the right time, and know when to step back and hand off to a human. Most of what I ship lives on Telegram, WhatsApp, or inside a Shopify store, because that's where the businesses I build for already are.",
  approach:
    "Every agent I build follows the same discipline: log every event, fail over gracefully when a model or API goes down, and never let the AI make a call it shouldn't — refunds, bookings, and escalations all follow explicit rules, not vibes. Config-driven by design, so a new client is a configuration change, not a rewrite.",
};

export const values = [
  {
    title: "Guardrails over guesswork",
    description: "An agent that can issue a refund needs rules for when it can't — not a prompt that hopes for the best.",
  },
  {
    title: "Log everything",
    description: "If it can't be traced after the fact, it isn't production-ready yet.",
  },
  {
    title: "Config, not rewrites",
    description: "A new client should be a config change and a redeploy, not a new codebase.",
  },
];

export type EducationItem = { school: string; credential: string; period: string };

// TODO: add your real education / certifications — left empty to hide the section
export const education: EducationItem[] = [];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// TODO: add real client testimonials here — leave empty to hide the section
export const testimonials: Testimonial[] = [];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];