export interface ProjectWorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectResultMetric {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  client: string;
  year: string;
  country: string;
  countryFlag: string;
  industry: "social" | "chatbot" | "leadgen";
  industryLabel: string;
  tags: string[];
  headline: string;
  stat: string;
  statLabel: string;
  accentColor: string;
  image: string;
  videoUrl?: string;
  externalVideoUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    automationType: string;
    stack: string[];
    workflow: ProjectWorkflowStep[];
    results: ProjectResultMetric[];
    testimonial: string;
  };
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  roiBadge: string;
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];
  stack: string[];
}

export const siteContent = {
  brand: {
    name: "YOUCF®",
    preloaderLogo: "YOUCF.",
    preloaderText: "Initializing Systems...",
    title: "Youcf Vision — AI Automation & n8n Specialist",
    description:
      "Foundi Youcef (Youcf Vision) builds autonomous AI workflows, multi-agent systems, and intelligent automation pipelines with n8n, Gemini, Claude, and OpenAI.",
    founderName: "Foundi Youcef",
    founderBrand: "Youcf Vision",
    founderRole: "AI Automation Engineer & n8n Specialist",
    location: "Algeria · Remote Worldwide",
    locationShort: "📍 Algeria · Remote Worldwide",
    est: "Online · Est. 2024",
    email: "youcfomda@gmail.com",
    phone: "+213 793 28 74 58",
    whatsappUrl: "https://wa.me/213793287458",
    linkedinUrl: "https://www.linkedin.com/in/youcf-foundi-251bbb338",
    instagramUrl: "https://www.instagram.com/youcf_vision",
    youtubeUrl: "https://youtube.com/@youcf_vision?si=2zSXZkvHHhViCtfS",
    notionPortfolioUrl:
      "https://halved-coat-d37.notion.site/My-Portfolio-2f2c8137efaa8023a274e0154bc33385",
  },

  nav: {
    links: [
      { label: "Work", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Packages", href: "#packages" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Start a Project →",
  },

  hero: {
    topLabel: "Youcf Foundi — AI Automation Engineer, Algeria",
    portraitImage: "/images/hero/youcf-portrait.png?v=7",
    roles: [
      "AI Automation",
      "n8n Workflows",
      "Autonomous AI Agents",
      "Gemini & Claude Integration",
    ],
    metrics: [
      { num: "15+", label: "Workflows Deployed" },
      { num: "90%", label: "Faster Response Time" },
      { num: "6+", label: "Platforms Automated" },
      { num: "24/7", label: "Automation Running" },
    ],
  },

  about: {
    sectionMeta: { name: "About", jp: "私について", num: "02" },
    tag: "[ About ]",
    manifestoLead: "We believe every business deserves AI that",
    manifestoEmphasis: "actually works.",
    photoUrl: "/images/hero/youcf.png?v=2",
    storyTag: "// The Story",
    storyTitle: "Built with engineering precision.",
    paragraphs: [
      "I'm Foundi Youcef, an AI Automation specialist with a Master's in Electrical Engineering (Control Systems) who transforms manual business operations into intelligent, self-running systems. I bridge the gap between complex technology and real business results — helping entrepreneurs and teams reclaim their most valuable asset: time.",
      "Operating under the Youcf Vision brand, I architect multi-model n8n workflows, RAG-connected AI sales agents, and autonomous social media production pipelines. By orchestrating Gemini, Claude, ChatGPT, and Perplexity with centralized Google Sheets & Notion CRMs, every workflow runs with 24/7 reliability.",
    ],
    stats: [
      { value: 15, suffix: "+", label: "Workflows" },
      { value: 90, suffix: "%", label: "Time Saved" },
      { value: 6, suffix: "+", label: "Platforms" },
      { value: null, suffix: "", display: "2024", label: "Since" },
    ],
    techPills: [
      "n8n.io",
      "Google Gemini",
      "Claude AI",
      "ChatGPT / OpenAI",
      "OpenRouter",
      "AI Agents & RAG",
      "Google Sheets",
      "Notion",
      "Telegram Bot API",
      "Apify & Apollo",
      "Google Cloud",
    ],
    values: [
      {
        num: "01",
        title: "Multi-Model AI Automation",
        desc: "Expert in matching each task to the ideal AI: Perplexity for fact-checked research, Claude for complex logic & code, ChatGPT for creative execution, and Gemini for deep context analysis.",
      },
      {
        num: "02",
        title: "Process Mapping & RAG",
        desc: "Mapping high-intelligence workflows using AI Agents and RAG. Structured processes allow autonomous agents to use Google Sheets and Notion as live knowledge bases with human-like accuracy.",
      },
      {
        num: "03",
        title: "Active CRM Brains",
        desc: "Designing custom CRM systems in Airtable, Notion, and Google Sheets mapped directly into n8n workflows — transforming passive storage into active engines that manage leads and sales autonomously.",
      },
      {
        num: "04",
        title: "Engineering-Grade Delivery",
        desc: "Utilizing Notion, Trello, and self-hosted Docker/n8n environments with automatic retries, error recovery, and real-time status syncing for total transparency and stability.",
      },
    ],
  },

  services: {
    sectionMeta: { name: "Services", jp: "サービス", num: "03" },
    subtitle: "// What I Build",
    title: "Services.",
    items: [
      {
        id: "social-engine",
        num: "001",
        title: "AI Content Engine & Multi-Platform Publishing",
        description:
          "End-to-end Telegram-controlled media production pipeline: generate AI images and cinematic Veo 3 videos via text or voice commands, customize captions, preview/revise interactively, and schedule auto-publishing across 6 platforms.",
        roiBadge: "6 Platforms · 100% Automated",
        workflow: [
          {
            step: "01",
            title: "Text or Voice Command on Telegram",
            desc: "Send a prompt or voice note with optional custom caption directly to your private Telegram bot",
          },
          {
            step: "02",
            title: "AI Image & Veo 3 Video Generation",
            desc: "Gemini AI refines prompts and generates high-impact visuals or videos stored on Backblaze B2 & Google Drive",
          },
          {
            step: "03",
            title: "Interactive Preview & Smart Scheduling",
            desc: "Approve, request edits, publish immediately, or schedule for an exact date/time in Google Sheets",
          },
          {
            step: "04",
            title: "Autonomous 6-Platform Distribution",
            desc: "Publishes to Facebook, Instagram, TikTok, YouTube, LinkedIn, and X with instant Telegram status reports",
          },
        ],
        stack: [
          "n8n.io",
          "Google Gemini",
          "Veo 3 Video AI",
          "Telegram API",
          "Google Sheets",
          "Backblaze B2",
          "Blotato API",
        ],
      },
      {
        id: "chatbot",
        num: "002",
        title: "Autonomous AI Sales & Support Chatbots",
        description:
          "Custom AI sales agents for Telegram, WhatsApp, and Instagram that answer product inquiries, check live inventory via RAG, and qualify buyers 24/7 — reducing initial response time by 90%.",
        roiBadge: "↓90% Response Time",
        workflow: [
          {
            step: "01",
            title: "Customer Sends Inquiry",
            desc: "Text or voice message received via Telegram, WhatsApp, or Instagram DM",
          },
          {
            step: "02",
            title: "AI Intent & Language Detection",
            desc: "Understands Arabic, French, or English context and customer buying intent",
          },
          {
            step: "03",
            title: "Live RAG Database Lookup",
            desc: "Queries Google Sheets or Notion inventory for exact product specs and pricing",
          },
          {
            step: "04",
            title: "Instant Conversion & Order Handoff",
            desc: "Replies in seconds with accurate details and logs qualified orders for closure",
          },
        ],
        stack: [
          "n8n.io",
          "Gemini AI",
          "OpenAI / ChatGPT",
          "Telegram API",
          "WhatsApp API",
          "RAG",
          "Google Sheets",
        ],
      },
      {
        id: "leadgen",
        num: "003",
        title: "Lead Generation & CRM Automation",
        description:
          "Automated B2B & B2C lead scraping, enrichment, AI qualification scoring, and centralized CRM pipelines in Google Sheets, Notion, and Airtable so your sales team only talks to ready buyers.",
        roiBadge: "3× Qualified Leads",
        workflow: [
          {
            step: "01",
            title: "Automated Lead Scraping & Capture",
            desc: "Extracts targeted prospects using Apify, Apollo, and web scraping webhooks",
          },
          {
            step: "02",
            title: "AI Enrichment & Scoring",
            desc: "Gemini & OpenAI analyze prospect profiles, company fit, and buying signals",
          },
          {
            step: "03",
            title: "Centralized CRM Sync",
            desc: "Populates structured pipelines in Google Sheets, Notion, or Airtable",
          },
          {
            step: "04",
            title: "Automated Personalized Outreach",
            desc: "Triggers tailored follow-up sequences and instant team notifications",
          },
        ],
        stack: [
          "n8n.io",
          "Apify",
          "Apollo",
          "Google Sheets",
          "Notion",
          "Airtable",
          "Gemini",
        ],
      },
      {
        id: "n8n-workflows",
        num: "004",
        title: "Custom n8n Workflow Engineering",
        description:
          "Replace manual grind with resilient n8n architectures. From multi-app webhook integrations to complex 100+ node autonomous pipelines with retry logic and fault tolerance.",
        roiBadge: "↓80% Manual Grind",
        workflow: [
          {
            step: "01",
            title: "Process Mapping & Blueprinting",
            desc: "Visual architecture of your business logic and bottleneck elimination",
          },
          {
            step: "02",
            title: "Multi-App API Orchestration",
            desc: "Seamless syncing across Google Workspace, Notion, Trello, and custom REST APIs",
          },
          {
            step: "03",
            title: "Multi-Model AI Routing",
            desc: "Connecting OpenRouter, Claude, Gemini, and Perplexity to each specialized step",
          },
          {
            step: "04",
            title: "Audit Logging & Error Protection",
            desc: "Built-in retry mechanisms, duplicate locks, and real-time alerts",
          },
        ],
        stack: [
          "n8n.io",
          "OpenRouter",
          "Claude AI",
          "Perplexity",
          "Google Cloud",
          "Docker",
          "Webhooks",
        ],
      },
      {
        id: "packages",
        num: "005",
        title: "Turnkey Automation Packages (Starter · Standard · Premium)",
        description:
          "Transparent, fixed-price automation tiers from my portfolio — whether you need to eliminate your first bottleneck ($100 Starter), scale with a 24/7 AI Agent ($500 Standard), or deploy an enterprise 10+ workflow ecosystem ($1,000 Premium).",
        roiBadge: "$100 · $500 · $1,000 Tiers",
        workflow: [
          {
            step: "01",
            title: "Starter Package — $100",
            desc: "2–3 Core n8n Workflows, Basic CRM Setup (Google Sheets/Airtable), Workflow Mapping, and up to 2 app integrations",
          },
          {
            step: "02",
            title: "Standard Package — $500",
            desc: "5–7 Advanced Workflows, 24/7 Autonomous AI Agent, 90% response time optimization, and up to 5 app integrations",
          },
          {
            step: "03",
            title: "Premium Enterprise — $1,000",
            desc: "10+ Complex Autonomous Workflows, Full-Scale RAG Knowledge Base, self-hosted n8n & Docker setup, and Specialized Agent Fleets",
          },
          {
            step: "04",
            title: "Seamless Credential Handoff",
            desc: "Delivered fully tested with clean credential binding and complete documentation",
          },
        ],
        stack: [
          "Starter ($100)",
          "Standard ($500)",
          "Premium ($1,000)",
          "Self-Hosted n8n",
          "Docker",
          "Full Documentation",
        ],
      },
    ] as ServiceItem[],
  },

  stackMarquee: {
    tag: "[ Stack ]",
    title: "Technologies I Use",
    items: [
      {
        name: "n8n.io",
        iconUrl: "https://cdn.simpleicons.org/n8n/EA4B71",
        color: "#EA4B71",
      },
      {
        name: "Google Gemini",
        iconUrl: "https://cdn.simpleicons.org/googlegemini/8E75B2",
        color: "#8E75B2",
      },
      {
        name: "Claude AI",
        iconUrl: "https://cdn.simpleicons.org/anthropic/D97757",
        color: "#D97757",
      },
      {
        name: "OpenAI / ChatGPT",
        iconUrl: "https://cdn.simpleicons.org/openai/ffffff",
        color: "#ffffff",
      },
      {
        name: "Telegram",
        iconUrl: "https://cdn.simpleicons.org/telegram/26A5E4",
        color: "#26A5E4",
      },
      {
        name: "Google Sheets",
        iconUrl: "https://cdn.simpleicons.org/googlesheets/34A853",
        color: "#34A853",
      },
      {
        name: "Notion",
        iconUrl: "https://cdn.simpleicons.org/notion/ffffff",
        color: "#ffffff",
      },
      {
        name: "Perplexity",
        iconUrl: "https://cdn.simpleicons.org/perplexity/20808D",
        color: "#20808D",
      },
      {
        name: "Airtable",
        iconUrl: "https://cdn.simpleicons.org/airtable/18BFFF",
        color: "#18BFFF",
      },
      {
        name: "Google Cloud",
        iconUrl: "https://cdn.simpleicons.org/googlecloud/4285F4",
        color: "#4285F4",
      },
      {
        name: "Docker",
        iconUrl: "https://cdn.simpleicons.org/docker/2496ED",
        color: "#2496ED",
      },
      {
        name: "WhatsApp",
        iconUrl: "https://cdn.simpleicons.org/whatsapp/25D366",
        color: "#25D366",
      },
      {
        name: "Instagram",
        iconUrl: "https://cdn.simpleicons.org/instagram/E4405F",
        color: "#E4405F",
      },
      {
        name: "YouTube",
        iconUrl: "https://cdn.simpleicons.org/youtube/FF0000",
        color: "#FF0000",
      },
      {
        name: "OpenRouter",
        iconUrl: null,
        color: "#8C3D1A",
      },
      {
        name: "Apify & Apollo",
        iconUrl: null,
        color: "#C9A84C",
      },
    ],
  },

  projects: {
    sectionMeta: { name: "Work", jp: "作品", num: "04" },
    subtitle: "// Selected Work",
    title: "Projects.",
    filters: [
      { label: "All", value: "all" },
      { label: "AI Content & Social", value: "social" },
      { label: "AI Chatbots & Sales", value: "chatbot" },
      { label: "Lead Gen & CRM", value: "leadgen" },
    ],
    categoryColors: {
      social: "#8C3D1A",
      chatbot: "#C9A84C",
      leadgen: "#7C3AED",
    } as Record<string, string>,
    items: [
      {
        id: "1",
        slug: "ai-social-media-content-engine",
        client: "AI Social Media Content Engine (Telegram All-In-One)",
        year: "2026",
        country: "Multi-Platform · Global",
        countryFlag: "🌐",
        industry: "social",
        industryLabel: "AI Content & Social",
        tags: [
          "n8n (110 Nodes)",
          "Gemini & Veo 3",
          "Telegram Bot",
          "Google Sheets CRM",
          "6 Platforms",
        ],
        headline: "Autonomous AI Video & Image Creation + 6-Platform Auto-Publishing",
        stat: "6×",
        statLabel: "Platforms Automated End-to-End",
        accentColor: "#8C3D1A",
        image: "/images/projects/social-media-engine.png",
        videoUrl:
          "https://drive.google.com/file/d/1OjMiDTAFVPcuZyQTMeSLygBD6yqUpw-5/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1OjMiDTAFVPcuZyQTMeSLygBD6yqUpw-5/view?usp=sharing",
        caseStudy: {
          problem:
            "Creating high-quality social media videos and images, writing platform-specific captions, managing revisions, and scheduling posts across 6 separate platforms (Facebook, Instagram, TikTok, YouTube Shorts, LinkedIn, and X) required hours of daily manual work and was prone to missed schedules or duplicate posts.",
          solution:
            "I architected a comprehensive 110-node n8n automation ecosystem controlled entirely from a private Telegram bot. The user simply sends a text or voice message (with an optional custom caption); Gemini AI & Veo 3 generate the image or video, send an interactive Telegram preview for approval or revision, and either publish immediately or schedule it in Google Sheets with timezone-accurate auto-publishing and live Telegram delivery reports.",
          automationType:
            "Telegram All-In-One AI Media Production + Smart Scheduler + 6-Platform Publisher",
          stack: [
            "n8n.io (110 Nodes)",
            "Google Gemini AI",
            "Veo 3 Video AI",
            "Telegram Bot API",
            "Google Sheets CRM",
            "Backblaze B2 Cloud",
            "Google Drive",
            "Blotato Multi-Social API",
          ],
          workflow: [
            {
              step: 1,
              title: "Trigger: Telegram Text, Voice & Custom Caption",
              description:
                "User selects Image or Video mode on Telegram and sends a text prompt or voice note. If a custom caption is included, the router extracts and preserves it across all platforms and revisions.",
              icon: "MessageCircle",
            },
            {
              step: 2,
              title: "AI Prompt Engineering & Media Generation",
              description:
                "Voice notes are transcribed and refined by Gemini AI into studio-grade visual prompts. The pipeline generates high-resolution images or Veo 3 videos and uploads them to Backblaze B2 and Google Drive.",
              icon: "Sparkles",
            },
            {
              step: 3,
              title: "Interactive Telegram Preview & Revision Loop",
              description:
                "The generated asset is sent back to Telegram with inline action buttons: Publish Now, Schedule Post, or Edit/Revise. Any revision preserves the original custom caption and media type.",
              icon: "CheckCircle",
            },
            {
              step: 4,
              title: "Timezone-Accurate Smart Scheduling & Lock",
              description:
                "Scheduled posts are stored in Google Sheets with Europe/Berlin timezone parsing (supporting both ISO and Google Sheets date formats) and atomic 'prosasing' locks to guarantee single-execution accuracy.",
              icon: "Calendar",
            },
            {
              step: 5,
              title: "6-Platform Publishing & Final Telegram Report",
              description:
                "Automatically publishes to Facebook, Instagram, TikTok, YouTube Shorts, LinkedIn, and X/Twitter, updates each platform column in Google Sheets to 'done', and sends a detailed completion report to Telegram.",
              icon: "Send",
            },
          ],
          results: [
            {
              metric: "Platforms Published Simultaneously",
              before: "1 at a time (Manual)",
              after: "6 Platforms Auto",
              improvement: "6× Reach",
            },
            {
              metric: "Content Production & Scheduling Time",
              before: "2–3 hours / post",
              after: "< 60 seconds via Telegram",
              improvement: "−98%",
            },
            {
              metric: "Duplicate or Missed Scheduled Posts",
              before: "Frequent manual errors",
              after: "0% (Atomic Sheet Lock)",
              improvement: "100% Reliable",
            },
            {
              metric: "Custom Caption Propagation",
              before: "Copy-pasted 6 times",
              after: "1 Telegram message → All 6",
              improvement: "Zero Friction",
            },
          ],
          testimonial:
            '"An entire AI media agency inside a single Telegram chat — from voice prompt to video generation, scheduling, and publishing across all 6 social networks automatically." — Youcf Vision Production System',
        },
      },
      {
        id: "2",
        slug: "telegram-chatbot-n8n-gemini",
        client: "Telegram AI Sales Chatbot (Hamiz DZ)",
        year: "2025",
        country: "El Hamiz, Algeria",
        countryFlag: "🇩🇿",
        industry: "chatbot",
        industryLabel: "AI Chatbots & Sales",
        tags: ["n8n.io", "Gemini AI", "OpenAI", "Telegram Bot"],
        headline: "90% Faster Customer Response Time for Commercial Showroom",
        stat: "−90%",
        statLabel: "Initial Response Time",
        accentColor: "#C9A84C",
        image: "/images/projects/telegram-chatbot.png",
        videoUrl: "https://www.youtube.com/embed/tidjYH_eCkU",
        externalVideoUrl: "https://youtube.com/shorts/tidjYH_eCkU",
        caseStudy: {
          problem:
            "Hamiz DZ (located in the high-traffic commercial hub of El Hamiz, Algeria) needed to handle a constant stream of customer inquiries regarding professional office chairs — specifications, models, availability, and pricing — without overwhelming the owner with repetitive messages.",
          solution:
            "I developed a specialized AI sales agent on Telegram powered by n8n.io, Gemini, and OpenAI. The assistant provides instant, accurate product specifications and pricing 24/7, allowing the business owner to focus 100% on closing qualified orders.",
          automationType: "Conversational AI Sales Agent + Product Knowledge Base",
          stack: ["n8n.io", "Google Gemini", "OpenAI", "Telegram Bot API", "Google Sheets"],
          workflow: [
            {
              step: 1,
              title: "Trigger: Customer Inquiry on Telegram",
              description:
                "Customer sends a question about office chair models, dimensions, ergonomic features, or pricing via Telegram.",
              icon: "MessageCircle",
            },
            {
              step: 2,
              title: "Context & Intent Understanding",
              description:
                "n8n routes the conversation through Gemini / OpenAI to understand the customer's exact requirements and language preference.",
              icon: "Brain",
            },
            {
              step: 3,
              title: "Product Specification & Price Retrieval",
              description:
                "The AI agent cross-references the live catalog of professional office chairs to pull accurate specs, stock status, and pricing.",
              icon: "Database",
            },
            {
              step: 4,
              title: "24/7 Instant Conversational Reply",
              description:
                "Delivers a clear, helpful sales response in seconds, guiding high-intent buyers directly toward order confirmation.",
              icon: "Zap",
            },
          ],
          results: [
            {
              metric: "Initial Response Time",
              before: "Hours (Manual)",
              after: "Instant (< 5 sec)",
              improvement: "−90%",
            },
            {
              metric: "Sales Availability",
              before: "Business hours only",
              after: "24/7 Autonomous",
              improvement: "+100% Uptime",
            },
            {
              metric: "Owner Focus on Order Closure",
              before: "Split with repetitive FAQs",
              after: "100% Focus on Closing",
              improvement: "Maximum ROI",
            },
          ],
          testimonial:
            '"By integrating n8n with Gemini and OpenAI, the system provides instant, accurate product specifications and pricing 24/7 — dramatically improving customer conversion in a high-traffic commercial environment." — Hamiz DZ Case Study',
        },
      },
      {
        id: "3",
        slug: "lead-generation-system",
        client: "Autonomous Lead Generation System",
        year: "2025",
        country: "Algeria · International",
        countryFlag: "🚀",
        industry: "leadgen",
        industryLabel: "Lead Gen & CRM",
        tags: ["n8n.io", "Gemini AI", "Apify", "Google Sheets", "Google Drive"],
        headline: "End-to-End Lead Scraping, AI Qualification & CRM Pipeline",
        stat: "3×",
        statLabel: "Qualified Pipeline Velocity",
        accentColor: "#7C3AED",
        image: "/images/projects/lead-generation.png",
        videoUrl: "https://www.youtube.com/embed/BQQUFALnglg",
        externalVideoUrl: "https://youtube.com/shorts/BQQUFALnglg",
        caseStudy: {
          problem:
            "Manual prospecting, copying lead details into spreadsheets, and researching company fit consumed hours every day while resulting in inconsistent follow-ups and unorganized CRM data.",
          solution:
            "I built an automated Lead Generation System combining n8n.io, Apify web scraping, Google Gemini AI qualification, Google Sheets CRM, and Google Drive. Leads are captured, enriched, scored by AI, and organized into an actionable sales pipeline automatically.",
          automationType: "Automated Web Scraping + AI Lead Scoring + Google Sheets CRM",
          stack: [
            "n8n.io",
            "Google Gemini",
            "Apify",
            "Google Sheets",
            "Google Drive",
            "Webhooks",
          ],
          workflow: [
            {
              step: 1,
              title: "Trigger: Targeted Lead Scraping via Apify",
              description:
                "n8n triggers Apify actors to extract targeted business leads, contact details, and company metadata from web sources.",
              icon: "Search",
            },
            {
              step: 2,
              title: "Data Cleaning & Deduplication",
              description:
                "Raw lead data is normalized, verified, and deduplicated before entering the AI analysis stage.",
              icon: "Filter",
            },
            {
              step: 3,
              title: "Gemini AI Qualification & Scoring",
              description:
                "Google Gemini evaluates each prospect's profile, categorizes their industry fit, and generates personalized outreach angles.",
              icon: "Sparkles",
            },
            {
              step: 4,
              title: "Google Sheets CRM & Google Drive Archiving",
              description:
                "Qualified leads are structured in Google Sheets with status tracking, while generated reports and assets are stored in Google Drive.",
              icon: "Database",
            },
          ],
          results: [
            {
              metric: "Manual Prospecting Time",
              before: "4+ hours / day",
              after: "Fully Automated",
              improvement: "−90%",
            },
            {
              metric: "Data Accuracy & Structuring",
              before: "Unstructured lists",
              after: "AI-Scored CRM Rows",
              improvement: "100% Organized",
            },
            {
              metric: "Lead Qualification Speed",
              before: "15 mins / lead",
              after: "Seconds / batch",
              improvement: "10× Faster",
            },
          ],
          testimonial:
            '"Transforms Google Sheets and Google Drive from simple storage into an active lead generation engine powered by n8n, Apify, and Gemini AI." — Youcf Vision Portfolio',
        },
      },
    ] as ProjectItem[],
  },

  packages: {
    sectionMeta: { name: "Packages", jp: "料金プラン", num: "05" },
    tag: "[ Service Tiers ]",
    title: "Transparent Pricing.",
    subtitle:
      "Clear, results-driven automation packages tailored to your stage of growth — from eliminating your first manual bottleneck to full-scale enterprise digital transformation.",
    tiers: [
      {
        name: "Starter",
        price: "$100",
        badge: "Small Businesses & Startups",
        accent: "var(--text-secondary)",
        tagline:
          "Perfect for small businesses or startups looking to eliminate their first manual bottlenecks:",
        features: [
          "2–3 Core n8n Workflows: Focused on lead capture, automated email notifications, and data entry.",
          "Basic CRM Setup: Organization of business data using Google Sheets or Airtable.",
          "Workflow Mapping: Visual blueprinting of your current processes using Whimsical or Miro.",
          "Integration: Connection of up to 2 primary apps (e.g., Email + CRM).",
        ],
      },
      {
        name: "Standard",
        price: "$500",
        badge: "Most Popular · Growing Teams",
        accent: "var(--accent-rust)",
        featured: true,
        tagline:
          "Ideal for growing teams that need reliable AI systems to scale without increasing headcount:",
        features: [
          "5–7 Advanced Workflows: Comprehensive automation covering sales, marketing, and operations.",
          "Autonomous AI Agent: A custom-built bot capable of handling 24/7 customer inquiries with human-like accuracy.",
          "Response Optimization: Implementation of systems proven to reduce lead response times by up to 90%.",
          "Tool Integration: Seamless syncing between up to 5 apps, including Notion, calendars, and project management tools.",
        ],
      },
      {
        name: "Premium",
        price: "$1,000",
        badge: "Enterprise Transformation",
        accent: "#C9A84C",
        tagline:
          "A full-scale digital transformation for enterprises requiring custom engineering and high security:",
        features: [
          "10+ Complex Autonomous Workflows: Fully integrated systems that manage the entire business lifecycle without human intervention.",
          "Full-Scale RAG Knowledge Base: Linking your AI Agents to your company's private data for hyper-accurate, context-aware intelligence.",
          "Engineering-Grade Infrastructure: Setup of self-hosted n8n and Docker environments to ensure maximum data privacy and system stability.",
          "Specialized Agent Fleets: Multiple AI agents designed for specific roles, such as automated SDRs or AI-driven project managers.",
          "Unlimited Integrations: Full ecosystem connectivity across ERP, CRM, and custom APIs.",
        ],
      },
    ],
  },

  results: {
    sectionMeta: { name: "Results", jp: "結果", num: "05" },
    tag: "[ By the Numbers ]",
    summaryLine:
      "15+ autonomous workflows deployed · 6+ platforms connected · 24/7 engineering reliability",
    metrics: [
      {
        value: 90,
        suffix: "%",
        label: "Faster Response Time",
        sublabel: "Reduction in initial customer inquiry wait times",
        col: "1 / 6",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "left" as const,
        delay: 0,
      },
      {
        value: 15,
        suffix: "+",
        label: "Autonomous Workflows",
        sublabel: "Production n8n systems across sales, CRM & content",
        col: "5 / 9",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.8)",
        align: "center" as const,
        delay: 0.1,
      },
      {
        value: 6,
        suffix: "×",
        label: "Multi-Platform Reach",
        sublabel: "Simultaneous publishing from a single Telegram command",
        col: "9 / 13",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "right" as const,
        delay: 0.2,
      },
      {
        value: 100,
        suffix: "%",
        label: "Data Precision",
        sublabel: "RAG-backed knowledge bases in Google Sheets & Notion",
        col: "2 / 7",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.7)",
        align: "left" as const,
        delay: 0.15,
      },
      {
        value: 80,
        suffix: "%",
        label: "Manual Work Eliminated",
        sublabel: "Repetitive data entry and content scheduling automated",
        col: "6 / 11",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "center" as const,
        delay: 0.25,
      },
      {
        value: 24,
        suffix: "/7",
        label: "System Uptime",
        sublabel: "Self-running AI agents & scheduled pipelines",
        col: "8 / 13",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.8)",
        align: "right" as const,
        delay: 0.3,
      },
    ],
  },

  testimonials: {
    sectionMeta: { name: "Testimonials", jp: "レビュー", num: "06" },
    marqueeText: "Testimonial© — Reviews ",
    ctaLabel: "Get in touch",
    items: [
      {
        quote:
          "رد جميل و احترافي راح يكون منتج ناجح باذن الله خاصة في السوق الجزائري و لاصحاب المشاريع لحبو يطورو البزنس تاعهم",
        isRtl: true,
        voiceVideo: undefined as string | undefined,
        name: "Yacine Merabet",
        title: "E-Commerce Founder · Algeria",
        initials: "YM",
        avatar: "/images/testimonials/client-dz-1.png",
        avatarBg: "#8C3D1A",
        avatarText: "#F4F1EB",
      },
      {
        quote:
          "بصح لعزيز بارك الله فيك اخي — هذي لازم نخلصك ونعطيك حقك فيها تستاهل",
        isRtl: true,
        voiceVideo: undefined as string | undefined,
        name: "Hamiz DZ",
        title: "Founder, Hamiz DZ Store · Algiers",
        initials: "HD",
        avatar: "/images/testimonials/client-hamiz.png",
        avatarBg: "#1E2428",
        avatarText: "#F4F1EB",
      },
      {
        quote: "ربي يحفظك يوسف، خدمة ما شاء الله خويا العزيز!",
        isRtl: true,
        voiceVideo: "/images/testimonials/anas-voice-praise.mp4?v=3" as
          | string
          | undefined,
        name: "Anas — On Agency",
        title: "Founder, On Agency & AM Pro · Algeria",
        initials: "AN",
        avatar: "/images/testimonials/client-anas.png",
        avatarBg: "#7A4F22",
        avatarText: "#F4F1EB",
      },
      {
        quote:
          "Before bringing Youcef on board, our team spent hours every morning manually collecting leads and updating spreadsheets. He engineered an end-to-end n8n and Gemini AI pipeline that scrapes, qualifies, and syncs prospects into our CRM automatically — saving us over 25 hours a week with zero human error.",
        isRtl: false,
        voiceVideo: undefined as string | undefined,
        name: "Marcus Vance",
        title: "Head of Growth, Vance Digital · United Kingdom",
        initials: "MV",
        avatar: "/images/testimonials/client-foreign-2.jpg",
        avatarBg: "#6B6258",
        avatarText: "#F4F1EB",
      },
    ],
  },

  contact: {
    sectionMeta: { name: "Contact", jp: "連絡", num: "07" },
    tag: "Get in Touch",
    title: "Ready to Automate?",
    promise:
      "Tell me about your business and the manual bottlenecks you want to eliminate. I'll respond within 24 hours with a custom automation blueprint.",
    whatsappButtonLabel: "Chat on WhatsApp",
    budgets: [
      { value: "starter-100", label: "Starter Package ($100)" },
      { value: "standard-500", label: "Standard Package ($500)" },
      { value: "premium-1000", label: "Premium Package ($1,000+)" },
      { value: "custom", label: "Custom Workflow / AI Agent" },
    ],
  },

  floatingPromo: {
    title: "Youcf Vision · AI Automation",
    subtitle: "Watch workflow demos on Instagram & YouTube",
    ctaText: "@youcf_vision →",
    href: "https://www.instagram.com/youcf_vision",
  },
};

export const siteContentAr: typeof siteContent = {
  brand: {
    ...siteContent.brand,
    preloaderText: "جارٍ تهيئة الأنظمة الذكية...",
    title: "يوسف فيجن — خبير أتمتة الذكاء الاصطناعي و n8n",
    description:
      "يوسف فوندي (Youcf Vision) متخصص في هندسة مسارات العمل الذاتية وأنظمة الـ Multi-Agent والأتمتة الذكية باستخدام n8n وGemini وClaude وOpenAI.",
    founderName: "يوسف فوندي",
    founderBrand: "Youcf Vision",
    founderRole: "مهندس أتمتة الذكاء الاصطناعي وخبير n8n",
    location: "الجزائر · عمل عن بُعد لجميع أنحاء العالم",
    locationShort: "📍 الجزائر · عن بُعد حول العالم",
    est: "متصل · تأسس 2024",
  },

  nav: {
    links: [
      { label: "الأعمال", href: "#projects" },
      { label: "الخدمات", href: "#services" },
      { label: "الباقات", href: "#packages" },
      { label: "من أنا", href: "#about" },
      { label: "تواصل معي", href: "#contact" },
    ],
    ctaLabel: "ابدأ مشروعك ←",
  },

  hero: {
    topLabel: "يوسف فوندي — مهندس أتمتة الذكاء الاصطناعي، الجزائر",
    portraitImage: siteContent.hero.portraitImage,
    roles: [
      "أتمتة الذكاء الاصطناعي",
      "هندسة مسارات n8n",
      "وكلاء ذكاء اصطناعي (AI Agents)",
      "دمج Gemini و Claude",
    ],
    metrics: [
      { num: "15+", label: "نظام مؤتمت قيد العمل" },
      { num: "90%", label: "سرعة استجابة أعلى" },
      { num: "6+", label: "منصات مرتبطة تلقائياً" },
      { num: "24/7", label: "تشغيل مستمر بدون توقف" },
    ],
  },

  about: {
    sectionMeta: { name: "من أنا", jp: "私について", num: "02" },
    tag: "[ نبذة عني ]",
    manifestoLead: "نؤمن بأن كل مشروع يستحق ذكاءً اصطناعياً",
    manifestoEmphasis: "يعمل بفعالية حقيقية.",
    photoUrl: siteContent.about.photoUrl,
    storyTag: "// القصة والمسار",
    storyTitle: "مبني بدقة هندسية.",
    paragraphs: [
      "أنا يوسف فوندي (Foundi Youcef)، متخصص في أتمتة الذكاء الاصطناعي وحاصل على ماستر في الهندسة الكهربائية (أنظمة التحكم الآلي)، أقوم بتحويل العمليات اليدوية المتكررة في الشركات إلى أنظمة ذكية تعمل ذاتياً. أبني الجسر بين التقنيات المعقدة والنتائج التجارية الملموسة لمساعدة رواد الأعمال والفرق على استعادة أثمن أصولهم: الوقت.",
      "تحت علامة Youcf Vision، أصمم مسارات عمل n8n متعددة النماذج، ووكلاء مبيعات أذكياء مرتبطين بقواعد معرفية (RAG)، وخطوط إنتاج ونشر محتوى سوشيال ميديا تلقائية بالكامل. من خلال التنسيق بين Gemini وClaude وChatGPT وPerplexity مع أنظمة Google Sheets وNotion CRM، يعمل كل نظام بموثوقية تامة على مدار الساعة 24/7.",
    ],
    stats: [
      { value: 15, suffix: "+", label: "مسار عمل" },
      { value: 90, suffix: "%", label: "توفير الوقت" },
      { value: 6, suffix: "+", label: "منصات" },
      { value: null, suffix: "", display: "2024", label: "منذ" },
    ],
    techPills: siteContent.about.techPills,
    values: [
      {
        num: "01",
        title: "أتمتة متعددة النماذج (Multi-Model AI)",
        desc: "توظيف النموذج الأنسب لكل مهمة بدقة: Perplexity للبحث الموثق، وClaude للمنطق البرمجي المعقد، وChatGPT للتنفيذ الإبداعي، وGemini لتحليل السياق العميق.",
      },
      {
        num: "02",
        title: "هندسة العمليات و RAG",
        desc: "تصميم مسارات عمل عالية الذكاء باستخدام وكلاء الذكاء الاصطناعي (AI Agents) وتقنية RAG لتحويل Google Sheets وNotion إلى قواعد معرفية حية بدقة بشرية.",
      },
      {
        num: "03",
        title: "أنظمة CRM ذكية ونشطة",
        desc: "بناء أنظمة إدارة عملاء مخصصة في Airtable وNotion وGoogle Sheets مرتبطة مباشرة بـ n8n لتحويل الجداول العادية إلى محركات مبيعات ومتابعة ذاتية.",
      },
      {
        num: "04",
        title: "اعتمادية واستقرار هندسي",
        desc: "تجهيز بيئات n8n وDocker مع آليات إعادة المحاولة التلقائية، ومنع التكرار، والتنبيهات الفورية لضمان استقرار النظام وشفافيته الكاملة.",
      },
    ],
  },

  services: {
    sectionMeta: { name: "الخدمات", jp: "サービス", num: "03" },
    subtitle: "// ما الذي أبنيه",
    title: "الخدمات.",
    items: [
      {
        id: "social-engine",
        num: "001",
        title: "محرك صناعة المحتوى بالـ AI والنشر التلقائي على 6 منصات",
        description:
          "نظام إنتاج ونشر إعلامي متكامل يُدار بالكامل من تليغرام: توليد صور وفيديوهات Veo 3 سينمائية عبر الرسائل النصية أو الصوتية، تخصيص الوصف (Caption)، المعاينة والتعديل التفاعلي، والجدولة والنشر التلقائي عبر 6 منصات.",
        roiBadge: "6 منصات · أتمتة 100%",
        workflow: [
          {
            step: "01",
            title: "أمر نصي أو صوتي عبر تليغرام",
            desc: "إرسال فكرة المنشور نصياً أو صوتياً مع إمكانية إرفاق كابشن مخصص مباشرة إلى بوت تليغرام الخاص بك",
          },
          {
            step: "02",
            title: "توليد الصور وفيديوهات Veo 3 بالذكاء الاصطناعي",
            desc: "يقوم Gemini AI بتحسين البرومبت وتوليد صور أو فيديوهات عالية الجودة وحفظها على Backblaze B2 وGoogle Drive",
          },
          {
            step: "03",
            title: "معاينة تفاعلية وجدولة ذكية",
            desc: "اعتماد المنشور، طلب تعديل، النشر الفوري، أو الجدولة لتاريخ وساعة محددة في Google Sheets",
          },
          {
            step: "04",
            title: "نشر تلقائي على 6 منصات مع تقرير فوري",
            desc: "النشر على فيسبوك، إنستغرام، تيك توك، يوتيوب، لينكدإن، ومنصة X مع إشعار تأكيد فوري على تليغرام",
          },
        ],
        stack: siteContent.services.items[0].stack,
      },
      {
        id: "chatbot",
        num: "002",
        title: "وكلاء المبيعات وخدمة العملاء بالذكاء الاصطناعي (Chatbots)",
        description:
          "وكلاء مبيعات مخصصون لتليغرام وواتساب وإنستغرام للرد على استفسارات العملاء، والتحقق من المخزون والأسعار لحظياً عبر RAG، وتأهيل المشترين 24/7 — مما يقلل وقت الاستجابة بنسبة 90%.",
        roiBadge: "↓90% وقت الاستجابة",
        workflow: [
          {
            step: "01",
            title: "استقبال رسالة العميل",
            desc: "رسالة نصية أو صوتية عبر تليغرام أو واتساب أو رسائل إنستغرام",
          },
          {
            step: "02",
            title: "فهم النية واللغة تلقائياً",
            desc: "تحليل السياق بالدارجة الجزائرية أو العربية أو الفرنسية أو الإنجليزية وفهم طلب المشتري",
          },
          {
            step: "03",
            title: "البحث اللحظي في قاعدة البيانات (RAG)",
            desc: "استخراج المواصفات والأسعار الدقيقة وتوفر المنتج من Google Sheets أو Notion",
          },
          {
            step: "04",
            title: "رد فوري وتحويل الطلبات المؤهلة",
            desc: "الإجابة خلال ثوانٍ بروابط المنتجات وتوثيق الطلبات الجاهزة للإغلاق",
          },
        ],
        stack: siteContent.services.items[1].stack,
      },
      {
        id: "leadgen",
        num: "003",
        title: "أتمتة استقطاب العملاء (Lead Gen) وأنظمة CRM",
        description:
          "استخراج بيانات العملاء المحتملين (B2B & B2C) تلقائياً، إثراء البيانات وتقييمها بالذكاء الاصطناعي، وتنظيمها في Google Sheets وNotion وAirtable ليتفرغ فريقك للعملاء الجاهزين للشراء فقط.",
        roiBadge: "3× عملاء مؤهلين",
        workflow: [
          {
            step: "01",
            title: "استخراج وجمع العملاء تلقائياً",
            desc: "سحب بيانات الشركات والعملاء المستهدفين عبر Apify وApollo والـ Webhooks",
          },
          {
            step: "02",
            title: "تحليل وتقييم العميل بالـ AI",
            desc: "يقوم Gemini وOpenAI بتحليل ملف العميل وتحديد مدى ملاءمته وإعطائه درجة تقييم",
          },
          {
            step: "03",
            title: "مزامنة مركزية في الـ CRM",
            desc: "تحديث الجداول تلقائياً في Google Sheets أو Notion أو Airtable بدون أي إدخال يدوي",
          },
          {
            step: "04",
            title: "رسائل متابعة مخصصة وتنبيهات",
            desc: "إطلاق حملات تواصل مخصصة وإرسال إشعارات فورية لفريق المبيعات",
          },
        ],
        stack: siteContent.services.items[2].stack,
      },
      {
        id: "n8n-workflows",
        num: "004",
        title: "هندسة مسارات n8n المخصصة والربط البرمجي",
        description:
          "استبدال العمل اليدوي المرهق بمعماريات n8n عالية الاعتمادية؛ من ربط التطبيقات عبر Webhooks إلى بناء أنظمة ذاتية تتجاوز 100 عقدة (Node) مع حماية من الأخطاء ومنع التكرار.",
        roiBadge: "↓80% عمل يدوي",
        workflow: [
          {
            step: "01",
            title: "تخطيط العمليات ورسم المعمارية",
            desc: "تحليل منطق العمل وتحديد نقاط الاختناق وتحويلها إلى مخطط أتمتة واضح",
          },
          {
            step: "02",
            title: "ربط ومزامنة التطبيقات والـ APIs",
            desc: "تكامل سلس بين Google Workspace وNotion وTrello وواجهات REST APIs المخصصة",
          },
          {
            step: "03",
            title: "توجيه متعدد النماذج (Multi-Model Routing)",
            desc: "ربط OpenRouter وClaude وGemini وPerplexity بكل خطوة متخصصة في المسار",
          },
          {
            step: "04",
            title: "سجلات تدقيق وحماية من الأخطاء",
            desc: "آليات إعادة المحاولة، أقفال منع التكرار، وتقارير الحالة الفورية",
          },
        ],
        stack: siteContent.services.items[3].stack,
      },
      {
        id: "packages",
        num: "005",
        title: "باقات الأتمتة الجاهزة (Starter · Standard · Premium)",
        description:
          "باقات واضحة ومحددة السعر تناسب مرحلة نمو مشروعك — سواء كنت تبدأ بأتمتة أولى مهامك (100$)، أو تحتاج وكيل ذكاء اصطناعي متكامل (500$)، أو منظومة مؤسسية شاملة (1,000$).",
        roiBadge: "باقات 100$ · 500$ · 1,000$",
        workflow: [
          {
            step: "01",
            title: "باقة البداية (Starter) — 100$",
            desc: "2 إلى 3 مسارات n8n أساسية، إعداد CRM مبسط على Google Sheets/Airtable، وربط تطبيقين أساسيين",
          },
          {
            step: "02",
            title: "الباقة القياسية (Standard) — 500$",
            desc: "5 إلى 7 مسارات متقدمة، وكيل ذكاء اصطناعي 24/7، تقليص وقت الرد بنسبة 90%، وربط حتى 5 تطبيقات",
          },
          {
            step: "03",
            title: "الباقة الاحترافية (Premium) — 1,000$",
            desc: "أكثر من 10 مسارات معقدة، قاعدة معرفية RAG شاملة، استضافة n8n وDocker خاصة، وأسطول وكلاء ذكاء اصطناعي",
          },
          {
            step: "04",
            title: "تسليم احترافي وتوثيق كامل",
            desc: "ربط آمن لبيانات الاعتماد (Credentials) مع شرح وتوثيق شامل للنظام",
          },
        ],
        stack: siteContent.services.items[4].stack,
      },
    ],
  },

  stackMarquee: {
    tag: "[ التقنيات ]",
    title: "التقنيات والأدوات التي أستخدمها",
    items: siteContent.stackMarquee.items,
  },

  projects: {
    sectionMeta: { name: "الأعمال", jp: "作品", num: "04" },
    subtitle: "// مشاريع مختارة",
    title: "المشاريع.",
    filters: [
      { label: "الكل", value: "all" },
      { label: "صناعة المحتوى والسوشيال ميديا", value: "social" },
      { label: "شات بوت والمبيعات", value: "chatbot" },
      { label: "استقطاب العملاء و CRM", value: "leadgen" },
    ],
    categoryColors: siteContent.projects.categoryColors,
    items: [
      {
        id: "1",
        slug: "ai-social-media-content-engine",
        client: "محرك صناعة المحتوى بالـ AI والنشر التلقائي (Telegram All-In-One)",
        year: "2026",
        country: "متعدد المنصات · عالمي",
        countryFlag: "🌐",
        industry: "social",
        industryLabel: "صناعة المحتوى والسوشيال",
        tags: [
          "n8n (110 عقدة)",
          "Gemini & Veo 3",
          "بوت تليغرام",
          "Google Sheets CRM",
          "6 منصات",
        ],
        headline: "توليد الفيديوهات والصور بالذكاء الاصطناعي والنشر التلقائي على 6 منصات",
        stat: "6×",
        statLabel: "منصات مؤتمتة بالكامل",
        accentColor: "#8C3D1A",
        image: "/images/projects/social-media-engine.png",
        videoUrl:
          "https://drive.google.com/file/d/1OjMiDTAFVPcuZyQTMeSLygBD6yqUpw-5/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1OjMiDTAFVPcuZyQTMeSLygBD6yqUpw-5/view?usp=sharing",
        caseStudy: {
          problem:
            "كان إنتاج فيديوهات وصور عالية الجودة للسوشيال ميديا، وكتابة وصف (Caption) مناسب لكل منصة، وإدارة التعديلات، وجدولة النشر عبر 6 منصات مختلفة (فيسبوك، إنستغرام، تيك توك، يوتيوب شورتس، لينكدإن، ومنصة X) يستغرق ساعات يومياً ويعاني من أخطاء النشر اليدوي أو تكرار المنشورات.",
          solution:
            "قمت بهندسة منظومة أتمتة شاملة على n8n مكونة من 110 عقدة (Nodes) يتم التحكم فيها بالكامل من بوت تليغرام خاص. يرسل المستخدم رسالة نصية أو صوتية (مع إمكانية إرفاق كابشن مخصص)، ليقوم Gemini AI وVeo 3 بتوليد الصورة أو الفيديو، وإرسال معاينة تفاعلية على تليغرام للموافقة أو التعديل، ثم النشر الفوري أو الجدولة الذكية في Google Sheets مع تقارير تسليم فورية.",
          automationType:
            "إنتاج إعلامي شامل عبر تليغرام + مجدول ذكي + ناشر تلقائي لـ 6 منصات",
          stack: [
            "n8n.io (110 Nodes)",
            "Google Gemini AI",
            "Veo 3 Video AI",
            "Telegram Bot API",
            "Google Sheets CRM",
            "Backblaze B2 Cloud",
            "Google Drive",
            "Blotato Multi-Social API",
          ],
          workflow: [
            {
              step: 1,
              title: "المشغّل: رسالة نصية أو صوتية وكابشن مخصص عبر تليغرام",
              description:
                "يختار المستخدم وضع الصورة أو الفيديو في تليغرام ويرسل فكرته نصياً أو صوتياً. وفي حال إرفاق كابشن مخصص، يقوم الموجه الذكي باستخراجه والحفاظ عليه عبر جميع المنصات والتعديلات.",
              icon: "MessageCircle",
            },
            {
              step: 2,
              title: "هندسة الأوامر وتوليد الصور وفيديوهات Veo 3",
              description:
                "يتم تفريغ الرسائل الصوتية وتحويلها بواسطة Gemini AI إلى أوامر بصرية احترافية لتوليد صور عالية الدقة أو فيديوهات Veo 3 ورفعها تلقائياً إلى Backblaze B2 وGoogle Drive.",
              icon: "Sparkles",
            },
            {
              step: 3,
              title: "معاينة تفاعلية وحلقة تعديلات مرنة على تليغرام",
              description:
                "يُرسل الفيديو أو الصورة إلى تليغرام مع أزرار تفاعلية: نشر الآن، جدولة المنشور، أو طلب تعديل، مع الحفاظ التام على الكابشن ونوع الميديا.",
              icon: "CheckCircle",
            },
            {
              step: 4,
              title: "جدولة ذكية دقيقة وقفل منع التكرار (Atomic Lock)",
              description:
                "تُحفظ المنشورات المجدولة في Google Sheets مع معالجة دقيقة للتوقيت الزمني وقفل ذري (prosasing) يضمن عدم تكرار نشر أي منشور نهائياً.",
              icon: "Calendar",
            },
            {
              step: 5,
              title: "النشر على 6 منصات وتقرير الإنجاز النهائي",
              description:
                "النشر التلقائي على فيسبوك، إنستغرام، تيك توك، يوتيوب، لينكدإن، ومنصة X، وتحديث حالة كل منصة في Google Sheets إلى 'done' مع إرسال تقرير مفصل لتليغرام.",
              icon: "Send",
            },
          ],
          results: [
            {
              metric: "المنصات التي يتم النشر عليها معاً",
              before: "منصة واحدة يدوياً",
              after: "6 منصات تلقائياً",
              improvement: "6× انتشار",
            },
            {
              metric: "وقت إنتاج وجدولة المحتوى",
              before: "2–3 ساعات لكل منشور",
              after: "أقل من 60 ثانية عبر تليغرام",
              improvement: "−98%",
            },
            {
              metric: "تكرار أو نسيان المنشورات المجدولة",
              before: "أخطاء يدوية متكررة",
              after: "0% (قفل ذري في الجدول)",
              improvement: "موثوقية 100%",
            },
            {
              metric: "تعميم الكابشن المخصص",
              before: "نسخ ولصق 6 مرات",
              after: "رسالة تليغرام واحدة ← 6 منصات",
              improvement: "سلاسة تامة",
            },
          ],
          testimonial:
            '"وكالة إعلامية متكاملة بالذكاء الاصطناعي داخل محادثة تليغرام واحدة — من رسالة صوتية إلى توليد الفيديو والجدولة والنشر عبر 6 شبكات اجتماعية تلقائياً." — نظام إنتاج Youcf Vision',
        },
      },
      {
        id: "2",
        slug: "telegram-chatbot-n8n-gemini",
        client: "شات بوت المبيعات الذكي على تليغرام (Hamiz DZ)",
        year: "2025",
        country: "الحميز، الجزائر",
        countryFlag: "🇩🇿",
        industry: "chatbot",
        industryLabel: "شات بوت والمبيعات",
        tags: ["n8n.io", "Gemini AI", "OpenAI", "Telegram Bot"],
        headline: "تقليص وقت الرد على العملاء بنسبة 90% لمعرض تجاري",
        stat: "−90%",
        statLabel: "وقت الاستجابة الأولي",
        accentColor: "#C9A84C",
        image: "/images/projects/telegram-chatbot.png",
        videoUrl: "https://www.youtube.com/embed/tidjYH_eCkU",
        externalVideoUrl: "https://youtube.com/shorts/tidjYH_eCkU",
        caseStudy: {
          problem:
            "كان متجر Hamiz DZ (في القطب التجاري بالحميز، الجزائر) يستقبل يومياً مئات الرسائل المتكررة حول الكراسي المكتبية والطبية — الموديلات، المواصفات، التوفر، والأسعار — مما كان يستهلك وقت صاحب المتجر ويؤخر الرد على المشترين.",
          solution:
            "طورت وكيل مبيعات ذكي على تليغرام يعمل بـ n8n وGemini وOpenAI، يجيب العملاء فوراً وعلى مدار الساعة 24/7 بالمواصفات الدقيقة والأسعار وروابط المنتجات، مما أتاح لصاحب المتجر التفرغ التام لإغلاق الطلبات.",
          automationType: "وكيل مبيعات محادثاتي بالـ AI + قاعدة بيانات المنتجات",
          stack: ["n8n.io", "Google Gemini", "OpenAI", "Telegram Bot API", "Google Sheets"],
          workflow: [
            {
              step: 1,
              title: "المشغّل: استفسار العميل على تليغرام",
              description:
                "يرسل العميل سؤاله حول موديلات الكراسي المكتبية أو الأسعار أو الروابط عبر بوت تليغرام.",
              icon: "MessageCircle",
            },
            {
              step: 2,
              title: "فهم السياق ونية الشراء",
              description:
                "يوجه n8n المحادثة عبر Gemini / OpenAI لفهم طلب العميل بدقة بالدارجة الجزائرية أو العربية أو الفرنسية.",
              icon: "Brain",
            },
            {
              step: 3,
              title: "استرجاع المواصفات والأسعار والروابط",
              description:
                "يطابق الوكيل الذكي السؤال مع كتالوج المنتجات الحي لاستخراج السعر الدقيق والمواصفات ورابط المنتج.",
              icon: "Database",
            },
            {
              step: 4,
              title: "رد بيعي فوري 24/7",
              description:
                "يرسل إجابة واضحة ومنظمة خلال ثوانٍ تقود العميل مباشرة إلى تأكيد الطلب.",
              icon: "Zap",
            },
          ],
          results: [
            {
              metric: "وقت الاستجابة الأولي",
              before: "ساعات (يدوياً)",
              after: "فوري (أقل من 5 ثوانٍ)",
              improvement: "−90%",
            },
            {
              metric: "توفر خدمة المبيعات",
              before: "أوقات العمل فقط",
              after: "24/7 تلقائياً",
              improvement: "+100% جاهزية",
            },
            {
              metric: "تركيز صاحب المتجر على المبيعات",
              before: "مشتت مع الأسئلة المتكررة",
              after: "تركيز 100% على إغلاق الصفقات",
              improvement: "أقصى عائد",
            },
          ],
          testimonial:
            '"بفضل دمج n8n مع Gemini وOpenAI، يقدم النظام إجابات فورية ودقيقة بالأسعار والروابط على مدار الساعة — مما ضاعف سرعة تحويل الزوار إلى مشترين." — دراسة حالة Hamiz DZ',
        },
      },
      {
        id: "3",
        slug: "lead-generation-system",
        client: "نظام استقطاب وتأهيل العملاء التلقائي (Lead Generation)",
        year: "2025",
        country: "الجزائر · دولي",
        countryFlag: "🚀",
        industry: "leadgen",
        industryLabel: "استقطاب العملاء و CRM",
        tags: ["n8n.io", "Gemini AI", "Apify", "Google Sheets", "Google Drive"],
        headline: "أتمتة كاملة لاستخراج بيانات العملاء وتقييمهم بالـ AI وربط الـ CRM",
        stat: "3×",
        statLabel: "سرعة تدفق العملاء المؤهلين",
        accentColor: "#7C3AED",
        image: "/images/projects/lead-generation.png",
        videoUrl: "https://www.youtube.com/embed/BQQUFALnglg",
        externalVideoUrl: "https://youtube.com/shorts/BQQUFALnglg",
        caseStudy: {
          problem:
            "كان البحث اليدوي عن العملاء المحتملين ونسخ بياناتهم إلى الجداول وتقييم ملاءمتهم يستغرق ساعات طويلة يومياً ويؤدي إلى بيانات غير منظمة وضعف في المتابعة.",
          solution:
            "بنيت نظام استقطاب عملاء مؤتمت بالكامل يجمع بين n8n وApify لسحب البيانات وGoogle Gemini AI لتحليل وتقييم كل عميل، مع تنظيم تلقائي في Google Sheets CRM وأرشفة في Google Drive.",
          automationType: "سحب بيانات الويب تلقائياً + تقييم العملاء بالـ AI + Google Sheets CRM",
          stack: [
            "n8n.io",
            "Google Gemini",
            "Apify",
            "Google Sheets",
            "Google Drive",
            "Webhooks",
          ],
          workflow: [
            {
              step: 1,
              title: "المشغّل: سحب بيانات العملاء المستهدفين عبر Apify",
              description:
                "يقوم n8n بتشغيل Apify لاستخراج بيانات الشركات وجهات الاتصال المستهدفة من مصادر الويب تلقائياً.",
              icon: "Search",
            },
            {
              step: 2,
              title: "تنظيف البيانات ومنع التكرار",
              description:
                "توحيد صيغ البيانات والتحقق من صحتها وإزالة أي تكرار قبل إرسالها لتحليل الذكاء الاصطناعي.",
              icon: "Filter",
            },
            {
              step: 3,
              title: "تحليل وتأهيل العملاء بواسطة Gemini AI",
              description:
                "يقوم Google Gemini بتقييم نشاط كل عميل وتصنيف مدى ملاءمته واقتراح زوايا تواصل مخصصة.",
              icon: "Sparkles",
            },
            {
              step: 4,
              title: "تحديث Google Sheets CRM وأرشفة Google Drive",
              description:
                "تُسجل بيانات العملاء المؤهلين في Google Sheets مع تتبع الحالة، وحفظ التقارير والملفات في Google Drive.",
              icon: "Database",
            },
          ],
          results: [
            {
              metric: "وقت البحث اليدوي عن العملاء",
              before: "+4 ساعات يومياً",
              after: "مؤتمت بالكامل",
              improvement: "−90%",
            },
            {
              metric: "دقة وتنظيم البيانات",
              before: "قوائم عشوائية",
              after: "صفوف CRM مقيمة بالـ AI",
              improvement: "تنظيم 100%",
            },
            {
              metric: "سرعة تأهيل العميل",
              before: "15 دقيقة لكل عميل",
              after: "ثوانٍ لكل دفعة",
              improvement: "10× أسرع",
            },
          ],
          testimonial:
            '"يحول Google Sheets وGoogle Drive من مجرد ملفات تخزين إلى محرك نشط لاستقطاب وتأهيل العملاء بقوة n8n وApify وGemini AI." — بورتفوليو Youcf Vision',
        },
      },
    ] as ProjectItem[],
  },

  packages: {
    sectionMeta: { name: "الباقات", jp: "料金プラン", num: "05" },
    tag: "[ باقات الخدمة ]",
    title: "أسعار واضحة وشفافة.",
    subtitle:
      "باقات أتمتة مدروسة ومصممة حسب مرحلة نمو مشروعك — من أتمتة أولى مهامك اليدوية إلى التحول الرقمي الشامل للمؤسسات.",
    tiers: [
      {
        name: "Starter",
        price: "$100",
        badge: "للمشاريع الناشئة والصغيرة",
        accent: "var(--text-secondary)",
        tagline:
          "مثالية للمشاريع الصغيرة والناشئة التي ترغب في التخلص من أولى المهام اليدوية المتكررة:",
        features: [
          "2 إلى 3 مسارات n8n أساسية: للتركيز على جمع العملاء، إشعارات البريد التلقائية، وإدخال البيانات.",
          "إعداد CRM أساسي: تنظيم بيانات العمل والعملاء باستخدام Google Sheets أو Airtable.",
          "تخطيط مسار العمل: رسم معمارية مرئية لعملياتك الحالية باستخدام Whimsical أو Miro.",
          "ربط التطبيقات: ربط تطبيقين أساسيين معاً (مثل البريد الإلكتروني + الـ CRM).",
        ],
      },
      {
        name: "Standard",
        price: "$500",
        badge: "الأكثر طلباً · للفرق المتنامية",
        accent: "var(--accent-rust)",
        featured: true,
        tagline:
          "مثالية للفرق المتنامية التي تحتاج أنظمة ذكاء اصطناعي موثوقة للتوسع دون زيادة عدد الموظفين:",
        features: [
          "5 إلى 7 مسارات عمل متقدمة: أتمتة شاملة تغطي المبيعات، التسويق، والعمليات اليومية.",
          "وكيل ذكاء اصطناعي مستقل (AI Agent): بوت مخصص للرد على استفسارات العملاء 24/7 بدقة تحاكي البشر.",
          "تحسين سرعة الاستجابة: تطبيق أنظمة تقلل وقت الرد على العملاء المحتملين بنسبة تصل إلى 90%.",
          "تكامل الأدوات: مزامنة سلسة بين 5 تطبيقات، بما فيها Notion والتقويم وأدوات إدارة المشاريع.",
        ],
      },
      {
        name: "Premium",
        price: "$1,000",
        badge: "تحول رقمي للمؤسسات",
        accent: "#C9A84C",
        tagline:
          "تحول رقمي متكامل للشركات والمؤسسات التي تتطلب هندسة مخصصة وأماناً عالياً:",
        features: [
          "أكثر من 10 مسارات ذكية معقدة: أنظمة مترابطة تدير دورة العمل بالكامل دون تدخل بشري.",
          "قاعدة معرفية شاملة (RAG): ربط وكلاء الذكاء الاصطناعي ببيانات شركتك الخاصة لذكاء فائق الدقة.",
          "بنية تحتية هندسية: إعداد استضافة خاصة لـ n8n وDocker لضمان أقصى درجات الخصوصية والاستقرار.",
          "أسطول وكلاء متخصصين: عدة وكلاء AI لأدوار محددة مثل مندوبي المبيعات الآليين أو إدارة المشاريع.",
          "ربط غير محدود: تكامل كامل عبر أنظمة ERP وCRM وواجهات البرمجة المخصصة (Custom APIs).",
        ],
      },
    ],
  },

  results: {
    sectionMeta: { name: "النتائج", jp: "結果", num: "05" },
    tag: "[ بالأرقام ]",
    summaryLine:
      "+15 مسار عمل ذاتي قيد التشغيل · +6 منصات متصلة · اعتمادية هندسية 24/7",
    metrics: [
      {
        value: 90,
        suffix: "%",
        label: "سرعة استجابة أعلى",
        sublabel: "تقليص وقت انتظار العملاء عند أول استفسار",
        col: "1 / 6",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "left" as const,
        delay: 0,
      },
      {
        value: 15,
        suffix: "+",
        label: "مسار عمل ذاتي",
        sublabel: "أنظمة n8n إنتاجية في المبيعات والـ CRM والمحتوى",
        col: "5 / 9",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.8)",
        align: "center" as const,
        delay: 0.1,
      },
      {
        value: 6,
        suffix: "×",
        label: "انتشار متعدد المنصات",
        sublabel: "نشر متزامن من أمر واحد عبر تليغرام",
        col: "9 / 13",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "right" as const,
        delay: 0.2,
      },
      {
        value: 100,
        suffix: "%",
        label: "دقة البيانات",
        sublabel: "قواعد معرفية مدعومة بـ RAG في Google Sheets وNotion",
        col: "2 / 7",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.7)",
        align: "left" as const,
        delay: 0.15,
      },
      {
        value: 80,
        suffix: "%",
        label: "مهام يدوية تم إلغاؤها",
        sublabel: "أتمتة إدخال البيانات المتكرر وجدولة المحتوى",
        col: "6 / 11",
        sizeLg: true,
        color: "var(--text-primary)",
        align: "center" as const,
        delay: 0.25,
      },
      {
        value: 24,
        suffix: "/7",
        label: "جاهزية النظام",
        sublabel: "وكلاء ذكاء اصطناعي ومسارات مجدولة تعمل بلا توقف",
        col: "8 / 13",
        sizeLg: false,
        color: "rgba(var(--text-rgb),0.8)",
        align: "right" as const,
        delay: 0.3,
      },
    ],
  },

  testimonials: {
    sectionMeta: { name: "آراء العملاء", jp: "レビュー", num: "06" },
    marqueeText: "Testimonial© — Reviews ",
    ctaLabel: "تواصل معي الآن",
    items: [
      {
        quote:
          "رد جميل و احترافي راح يكون منتج ناجح باذن الله خاصة في السوق الجزائري و لاصحاب المشاريع لحبو يطورو البزنس تاعهم",
        isRtl: true,
        voiceVideo: undefined as string | undefined,
        name: "Yacine Merabet",
        title: "مؤسس متجر إلكتروني · الجزائر",
        initials: "YM",
        avatar: "/images/testimonials/client-dz-1.png",
        avatarBg: "#8C3D1A",
        avatarText: "#F4F1EB",
      },
      {
        quote:
          "بصح لعزيز بارك الله فيك اخي — هذي لازم نخلصك ونعطيك حقك فيها تستاهل",
        isRtl: true,
        voiceVideo: undefined as string | undefined,
        name: "Hamiz DZ",
        title: "مؤسس متجر Hamiz DZ · الجزائر",
        initials: "HD",
        avatar: "/images/testimonials/client-hamiz.png",
        avatarBg: "#1E2428",
        avatarText: "#F4F1EB",
      },
      {
        quote: "ربي يحفظك يوسف، خدمة ما شاء الله خويا العزيز!",
        isRtl: true,
        voiceVideo: "/images/testimonials/anas-voice-praise.mp4?v=3" as
          | string
          | undefined,
        name: "Anas — On Agency",
        title: "مؤسس On Agency & AM Pro · الجزائر",
        initials: "AN",
        avatar: "/images/testimonials/client-anas.png",
        avatarBg: "#7A4F22",
        avatarText: "#F4F1EB",
      },
      {
        quote:
          "Before bringing Youcef on board, our team spent hours every morning manually collecting leads and updating spreadsheets. He engineered an end-to-end n8n and Gemini AI pipeline that scrapes, qualifies, and syncs prospects into our CRM automatically — saving us over 25 hours a week with zero human error.",
        isRtl: false,
        voiceVideo: undefined as string | undefined,
        name: "Marcus Vance",
        title: "Head of Growth, Vance Digital · United Kingdom",
        initials: "MV",
        avatar: "/images/testimonials/client-foreign-2.jpg",
        avatarBg: "#6B6258",
        avatarText: "#F4F1EB",
      },
    ],
  },

  contact: {
    sectionMeta: { name: "تواصل معي", jp: "連絡", num: "07" },
    tag: "ابدأ الآن",
    title: "جاهز لأتمتة مشروعك؟",
    promise:
      "حدثني عن مشروعك والمهام اليدوية التي تريد التخلص منها. سأرد عليك خلال 24 ساعة بخطة أتمتة مخصصة لعملك.",
    whatsappButtonLabel: "تحدث معي عبر واتساب",
    budgets: [
      { value: "starter-100", label: "باقة البداية Starter ($100)" },
      { value: "standard-500", label: "الباقة القياسية Standard ($500)" },
      { value: "premium-1000", label: "الباقة الاحترافية Premium ($1,000+)" },
      { value: "custom", label: "نظام مخصص / وكيل ذكاء اصطناعي" },
    ],
  },

  floatingPromo: {
    title: "Youcf Vision · أتمتة الذكاء الاصطناعي",
    subtitle: "شاهد عروض الأنظمة على إنستغرام ويوتيوب",
    ctaText: "@youcf_vision ←",
    href: "https://www.instagram.com/youcf_vision",
  },
};

export function getSiteContent(lang: "en" | "ar") {
  return lang === "ar" ? siteContentAr : siteContent;
}


