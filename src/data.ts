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
};

export const projects: Project[] = [
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
    name: "StreamForge",
    blurb:
      "A serverless real-time data-pipeline platform on AWS — ingestion, transforms, anomaly detection, DLQ replay, health scoring, cost analysis, and alerting.",
    highlights: [
      "50K events/sec ingestion with sub-second transform latency",
      "Dead-letter replay, schema registry, and composite SLO health scoring",
      "280+ automated tests, CI, infrastructure as code (AWS CDK)",
    ],
    tags: ["AWS", "Lambda", "Kinesis", "Python", "React"],
    link: "https://github.com/Nishit24113/streamforge",
    accent: "#6366f1",
  },
  {
    name: "LifeOps Copilot",
    blurb:
      "A six-agent AI platform (Next.js, FastAPI, GCP) automating everyday workflows with planning and tool use.",
    highlights: [
      "Vertex AI Gemini, Gmail API, and Google OAuth integration",
      "95% task-completion rate across four workflow types",
      "Deployed on Cloud Run with auto-scaling",
    ],
    tags: ["Next.js", "FastAPI", "AI Agents", "GCP"],
    link: "https://github.com/Nishit24113",
    accent: "#f59e0b",
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
