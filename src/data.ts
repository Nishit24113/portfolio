export const profile = {
  name: "Nishit Patel",
  role: "Software Engineer · AI / ML",
  tagline:
    "I build production AI systems and reproducible ML research — real-time data platforms, LLM agents, and benchmarks for model reliability.",
  location: "Tempe, Arizona, USA",
  email: "npate230@asu.edu",
  github: "https://github.com/Nishit24113",
  linkedin: "https://www.linkedin.com/in/nishit-patel241103",
  summary:
    "MS Computer Science student at Arizona State University (GPA 4.0). I work across the stack — from serverless data infrastructure on AWS to LLM agents, retrieval, and evaluation — with a bias toward measurable results and clean, tested code.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "ASU — Cloud Innovation Center (powered by AWS)",
    role: "Full Stack Developer",
    period: "Jan 2026 — Present",
    location: "Scottsdale, AZ",
    points: [
      "Embedded with clients to scope workflows and ship production AI systems on their infrastructure.",
      "Built a multi-channel AI platform (Python/FastAPI, React, AWS) handling 500+ daily interactions across chat, voice, forms, and WhatsApp.",
      "Deployed AI agents on Amazon Bedrock AgentCore with Claude and RAG, automating ~80% of inquiry responses.",
      "Engineered a real-time voice pipeline (WebSocket, Amazon Nova Sonic, Twilio) with <10ms relay latency.",
    ],
    tags: ["AWS", "Bedrock", "FastAPI", "React", "RAG", "WebSocket"],
  },
  {
    company: "MindInventory",
    role: "Python AI/ML Intern",
    period: "Jan 2025 — May 2025",
    location: "India",
    points: [
      "Built production Python/Flask REST APIs serving a 53-class ML model at 92% accuracy.",
      "Cut inference latency ~20% (450ms → 360ms) through profiling and batching.",
      "Hardened input validation, reducing malformed responses by 40%.",
    ],
    tags: ["Python", "Flask", "ML", "APIs"],
  },
  {
    company: "Neurapses Technologies",
    role: "Data Science Intern",
    period: "May 2024 — Jul 2024",
    location: "India",
    points: [
      "Built ETL pipelines over 100K+ records, improving data quality from 70% to 98%.",
      "Consolidated 5+ data sources with Python and SQL, saving 10+ hours weekly.",
    ],
    tags: ["Python", "SQL", "ETL", "Dashboards"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  link: string;
  accent: string;
  role?: string; // set for team projects to make my contribution explicit
};

export type MiniProject = {
  name: string;
  blurb: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "StreamForge",
    blurb:
      "A serverless real-time data-pipeline platform on AWS — ingestion, transforms, anomaly detection, dead-letter replay, health scoring, cost analysis, and alerting.",
    highlights: [
      "50K events/sec ingestion with sub-second transform latency",
      "Schema registry, DLQ auto-replay, and composite SLO health scoring",
      "280+ automated tests, CI, infrastructure as code (AWS CDK)",
    ],
    tags: ["AWS", "Lambda", "Kinesis", "Python", "React"],
    link: "https://github.com/Nishit24113/streamforge",
    accent: "#6366f1",
  },
  {
    name: "CodeStreamAI",
    blurb:
      "An AI-powered code-review platform that runs retrieval-augmented review over your codebase — Bedrock + Pinecone embeddings, async review workers, and a Next.js dashboard.",
    highlights: [
      "RAG over code with Amazon Bedrock embeddings + Pinecone",
      "FastAPI backend with Celery async workers, Postgres, and Redis",
      "Cloud-native deploy: Terraform + AWS CDK + Lambda, in a pnpm/Turbo monorepo",
    ],
    tags: ["Python", "FastAPI", "Next.js", "AWS", "RAG"],
    link: "https://github.com/Nishit24113/CodeStreamAI",
    accent: "#a855f7",
  },
  {
    name: "Tether",
    blurb:
      "A reproducible benchmark for RAG answer faithfulness — measuring how well low-cost detectors catch hallucinations versus an LLM judge.",
    highlights: [
      "Labeled dataset, AUROC/F1 metrics, baseline suite, ranked leaderboard",
      "Pure-stdlib, offline, deterministic — reproducible on any machine",
      "Research framing: the cost/accuracy frontier of faithfulness detection",
    ],
    tags: ["Python", "NLP", "LLM Evaluation", "Benchmark"],
    link: "https://github.com/Nishit24113/tether-bench",
    accent: "#22d3ee",
  },
  {
    name: "LifeOps Copilot",
    blurb:
      "A multi-agent AI life copilot spanning inbox, budget, calendar, and career workflows.",
    role: "Team project — I built the AI backend: the multi-agent pipeline, Google OAuth, and Gmail integration.",
    highlights: [
      "Multi-agent LLM pipeline (router, planner, extractor, action, review, memory)",
      "Google OAuth + Gmail API + Vertex AI, with budget analytics services",
      "FastAPI backend and Next.js frontend, deployed on Cloud Run",
    ],
    tags: ["FastAPI", "Next.js", "AI Agents", "GCP"],
    link: "https://github.com/ashah5123/LifeOps-Copilot",
    accent: "#f59e0b",
  },
  {
    name: "ClicklessAI",
    blurb:
      "Voice- and agent-driven shopping automation that browses retailers and ranks products for you.",
    role: "Team project — I own the browser-automation scraper engine and the three-stage ML ranking pipeline.",
    highlights: [
      "Playwright scraping engine (Amazon, Walmart) with stealth and checkout flows",
      "Three-stage ML ranking: BM25 → LambdaMART → SBERT re-ranking",
      "Async FastAPI + aiohttp backend",
    ],
    tags: ["Python", "Playwright", "ML Ranking", "FastAPI"],
    link: "https://github.com/jashkarangiya/clicklessAI-SWM",
    accent: "#10b981",
  },
  {
    name: "CloudPulse",
    blurb:
      "A serverless observability platform on AWS — metrics, logs, distributed tracing, alerting, and dashboards, with 2–3 line SDK integration. A self-hostable take on Datadog/New Relic.",
    highlights: [
      "Metrics, logs, and distributed tracing with PromQL-like queries",
      "Threshold + anomaly-detection alerting across multiple channels",
      "Serverless AWS backend with real-time dashboards and SDKs",
    ],
    tags: ["AWS", "Observability", "Serverless", "Python"],
    link: "https://github.com/Nishit24113/cloudpulse",
    accent: "#0ea5e9",
  },
];

export const moreProjects: MiniProject[] = [
  {
    name: "Momentum Kanban",
    blurb:
      "A realtime Kanban board with Supabase row-level security, optimistic drag-and-drop, and a live demo.",
    tags: ["React", "TypeScript", "Supabase"],
    link: "https://github.com/Nishit24113/momentum-kanban-board",
  },
  {
    name: "Sign-Language YOLO",
    blurb:
      "Real-time ASL letter detection with a custom-trained YOLOv8 model, plus GenAI sentence generation.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    link: "https://github.com/Nishit24113/sign-language-yolo",
  },
  {
    name: "Fruit Disease Detection",
    blurb:
      "A CNN fruit-disease classifier with LLaMA-generated treatment guidance and multi-language output.",
    tags: ["Python", "TensorFlow", "LLM"],
    link: "https://github.com/Nishit24113/fruit-disease-detection",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"] },
  { label: "AI / ML", items: ["LLMs", "AI Agents", "RAG", "Evaluation", "Amazon Bedrock", "PyTorch"] },
  { label: "Cloud / Infra", items: ["AWS", "Lambda", "Kinesis", "DynamoDB", "Docker", "Terraform / CDK", "CI/CD"] },
  { label: "Web", items: ["React", "Next.js", "FastAPI", "Node.js", "GraphQL", "WebSocket"] },
];

export const education = [
  {
    school: "Arizona State University",
    degree: "M.S. Computer Science",
    period: "Expected May 2027",
    detail: "GPA 4.0 · Cloud Computing, Distributed Systems, Agentic AI",
  },
  {
    school: "Pandit Deendayal Energy University",
    degree: "B.Tech, Information & Communication Technology",
    period: "May 2025",
    detail: "Data Structures, Algorithms, Databases, Software Engineering",
  },
];
