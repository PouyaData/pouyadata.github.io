/**
 * Single source of truth for Pouya Data LLC's capabilities and past
 * performance. The home page, past-performance page, and the capability
 * statement (and therefore its PDF) all render from this module.
 *
 * Content is distilled from the principal's CV versions (2014–2026).
 * Consulting clients are described by sector rather than named.
 */

export type IconName =
  | 'strategy'
  | 'agents'
  | 'platform'
  | 'cloud'
  | 'shield'
  | 'teach';

export interface Capability {
  icon: IconName;
  title: string;
  summary: string;
  offerings: readonly string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Engagement {
  client: string;
  sector: string;
  title: string;
  challenge: string;
  delivered: string;
  outcome: string;
  stack: readonly string[];
}

export interface Role {
  organization: string;
  title: string;
  period: string;
  location: string;
  highlights: readonly string[];
}

export interface Venture {
  name: string;
  role: string;
  period?: string;
  summary: string;
}

export const company = {
  name: 'Pouya Data LLC',
  shortName: 'Pouya Data',
  tagline: 'Your data is dynamic. So are we.',
  location: 'Potomac, Maryland',
  email: 'pouyadatallc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pouya-data/',
  founded: '2024',
  principal: {
    name: 'Pouya Barrach-Yousefi',
    title: 'Chief Technology, Data & AI Officer',
  },
  pdfPath: '/pouya-data-capabilities.pdf',
  positioning:
    'Technology, data, and AI leadership as one discipline — from C-suite strategy to production code.',
  overview:
    'Pouya Data LLC is a Maryland technology, data, and AI consultancy working where software engineering, cloud and data architecture, AI, and security converge. Led by a PMP-certified executive with 20+ years across healthcare, life sciences, and federal programs, we advise leadership teams and embed with their engineers to take initiatives from assessment to production.',
} as const;

export const metrics: readonly Metric[] = [
  { value: '20+', label: 'years delivering software, data & AI' },
  { value: '$5M→$20M', label: 'regulated-industry portfolio growth' },
  { value: '95%', label: 'faster data processing (40 h → 2 h)' },
  { value: 'Years→Days', label: 'R&D infrastructure provisioning' },
  { value: '2,500+', label: 'healthcare datasets cataloged' },
  { value: '80%+', label: 'faster delivery via reusable accelerators' },
];

export const capabilities: readonly Capability[] = [
  {
    icon: 'strategy',
    title: 'Data & AI Strategy',
    summary:
      'Executive advisory that turns technology ambition into a funded, sequenced roadmap.',
    offerings: [
      'Current-state assessments and gap analyses',
      'Future-state reference architectures',
      'Implementation roadmaps and build-vs-buy decisions',
      'Steering-committee ROI and portfolio reporting',
    ],
  },
  {
    icon: 'agents',
    title: 'Agentic & Generative AI',
    summary:
      'Production LLM systems engineered with the evaluation and guardrails regulated work demands.',
    offerings: [
      'RAG over vector databases and tool calling',
      'Multi-agent orchestration (LangGraph, MCP)',
      'Evals, guardrails, and observability',
      'Clinical, supply-chain, and commercial use cases',
    ],
  },
  {
    icon: 'platform',
    title: 'Data Platforms & Governance',
    summary:
      'Self-service lakehouse platforms with governance built in, not bolted on.',
    offerings: [
      'Databricks, Snowflake, Starburst, and dbt platforms',
      'Data Mesh and data-product operating models',
      'Metadata, lineage, and data-quality standards',
      'Enterprise data catalogs and monetization',
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevSecOps',
    summary:
      'Secure, codified infrastructure that cuts delivery cycles from weeks to hours.',
    offerings: [
      'Azure landing zones, AWS, and GCP',
      'Infrastructure as Code (Terraform, Pulumi)',
      'CI/CD modernization and FedRAMP GovCloud',
      'Data-center design and workload planning',
    ],
  },
  {
    icon: 'shield',
    title: 'Responsible AI & Security',
    summary: 'AI adoption that stands up to auditors, regulators, and boards.',
    offerings: [
      'NIST AI RMF, EU AI Act, and ISO 42001 alignment',
      'HIPAA- and FedRAMP-aware architectures',
      'AI acceptable-use and procurement guidance',
      'Privacy-preserving data techniques',
    ],
  },
  {
    icon: 'teach',
    title: 'Training & Team Building',
    summary:
      'We build capability inside your organization, then hand over ownership.',
    offerings: [
      'Graduate-level DevOps and data science curricula',
      'Train-the-trainer and executive workshops',
      'Hiring and coaching specialist teams',
      'Structured knowledge transfer',
    ],
  },
];

export const differentiators: readonly { title: string; body: string }[] = [
  {
    title: 'One hat, not four',
    body: 'Technology, data, AI, and security leadership in a single seat — no internal translation layer slowing decisions.',
  },
  {
    title: 'Player-coach delivery',
    body: 'Hands-on in the code while leading the team, so strategy is always grounded in what ships.',
  },
  {
    title: 'Regulated-industry fluency',
    body: 'Two decades in healthcare, life sciences, and federal environments where compliance is non-negotiable.',
  },
  {
    title: 'Vendor-neutral',
    body: 'No platform allegiances. Recommendations follow measured baselines, not partner incentives.',
  },
];

export const principles: readonly string[] = [
  'Client ownership — decisions, data, systems, and IP stay with you.',
  'Named counterparts and an explicit knowledge-transfer plan on every engagement.',
  'Measured baselines and decision gates before any technology choice.',
  'Reusable accelerators that shorten delivery without locking you in.',
];

export const industries: readonly { name: string; detail: string }[] = [
  {
    name: 'Life Sciences & Pharma',
    detail: 'R&D, clinical trials, commercial analytics, distribution',
  },
  {
    name: 'Healthcare',
    detail: 'Payers, providers, healthcare data & analytics',
  },
  {
    name: 'Federal & Defense',
    detail: 'DevSecOps, FedRAMP GovCloud, Medicare/Medicaid data',
  },
  {
    name: 'Startups & Ventures',
    detail: 'AI products, platform architecture, technical diligence',
  },
];

export const engagements: readonly Engagement[] = [
  {
    client: 'Fortune 500 pharmaceutical distributor',
    sector: 'Life Sciences',
    title: 'Supply-chain risk & AI scenario platforms',
    challenge:
      'Map and reduce supply-chain risk across a global pharmaceutical distribution and logistics network.',
    delivered:
      'Architected and delivered two multimillion-dollar strategic application platforms combining advanced analytics with AI-driven scenario modeling.',
    outcome:
      'Expanded the engagement with 2 change orders and 4 follow-on awards spanning cloud, data governance, and GenAI.',
    stack: ['Azure', 'AI scenario modeling', 'Data governance', 'GenAI'],
  },
  {
    client: 'Fortune 500 pharmaceutical distributor',
    sector: 'Life Sciences',
    title: 'Puerto Rico landing zone & data center',
    challenge:
      'Stand up an on-island data and AI capability to support corporate restructuring and capture tax incentives.',
    delivered:
      'Architected an enterprise Azure landing zone, physical data-center design, and workload plan; aligned WWT, Nutanix, and Neo4j contractors.',
    outcome:
      'Enabled a supply-chain visualization platform projected to save the parent enterprise millions annually.',
    stack: ['Azure Landing Zone', 'Nutanix', 'Neo4j', 'Data center'],
  },
  {
    client: 'Federal defense contractor',
    sector: 'Federal',
    title: 'DevSecOps modernization in GovCloud',
    challenge:
      'Replace an on-premises CI/CD environment that slowed every release to weeks.',
    delivered:
      'Hired and directed a DevSecOps team to build a FedRAMP-compliant pipeline with Terraform, Pulumi (Python), GitLab, SonarQube, Xray, and Artifactory.',
    outcome: 'Deployment cycles cut from weeks to hours.',
    stack: ['FedRAMP', 'Terraform', 'Pulumi', 'GitLab CI/CD'],
  },
  {
    client: 'Major healthcare payer',
    sector: 'Healthcare',
    title: 'Data product & governance strategy',
    challenge:
      'Make enterprise data discoverable, trustworthy, and governed at scale.',
    delivered:
      'Defined the data-product strategy, lineage and metadata standards, and data-quality frameworks; delivered AWS data engineering.',
    outcome: 'Led to the establishment of an enterprise Data Librarian office.',
    stack: ['Metadata management', 'Data quality', 'AWS', 'Lineage'],
  },
  {
    client: 'Global biopharma company',
    sector: 'Life Sciences',
    title: 'Data & technology strategy assessment',
    challenge:
      'Chart a modernization path for data and technology across research and operations.',
    delivered:
      'Ran discovery workshops, stakeholder interviews, and architecture reviews; produced gap analysis, future-state reference architecture, and roadmap.',
    outcome: 'Positioned the firm for the follow-on implementation.',
    stack: ['Reference architecture', 'Roadmapping', 'Assessment'],
  },
];

export const leadershipRecord: readonly Role[] = [
  {
    organization: 'AstraZeneca',
    title: 'Platform Lead (Director of Platform Engineering equivalent)',
    period: '2023 – 2024',
    location: 'Gaithersburg, MD',
    highlights: [
      'Built and directed a 15-person platform team on a $2M budget.',
      'Self-service R&D data platform on AWS Glue, EMR, Snowflake, Starburst, and dbt cut infrastructure provisioning from 1–2 years to same-day — an estimated $10M+ in annual productivity.',
      'Drove enterprise data-product adoption (Data Mesh), reducing data-request backlogs by 80%.',
    ],
  },
  {
    organization: 'Prophecy.io',
    title: 'Director, Strategic Accounts',
    period: '2022 – 2023',
    location: 'Palo Alto, CA',
    highlights: [
      'Built the strategic-account and systems-integrator go-to-market framework; 200% account revenue growth in a year.',
      '400% license growth at Johnson & Johnson through R&D and commercial expansion.',
      'Keynote speaker, Databricks Data + AI Summit 2023.',
    ],
  },
  {
    organization: 'IQVIA',
    title: 'Director, Enterprise AI Architecture & Strategy',
    period: '2017 – 2022',
    location: 'Paris & San Francisco',
    highlights: [
      'Led a 25-person AI and data-architecture organization; Databricks Photon optimization cut processing 95% (40 h → 2 h).',
      "Architected IQVIA's first healthcare data catalog — 2,500+ datasets — opening a new revenue stream.",
      'First AI/ML leader on the Technology Design Authority and Architecture Review Board; open-source Kubeflow and MLflow adoption saved millions in licensing.',
      'Reusable Python libraries cut data-science delivery times by 80%+; ML models for clinical-trial site tiering and cost estimation.',
    ],
  },
  {
    organization: 'ESIEE Paris',
    title: 'Visiting Associate Professor',
    period: '2017 – 2021',
    location: 'Paris, France',
    highlights: [
      'Taught graduate DevOps and data science courses across five semesters.',
    ],
  },
  {
    organization: 'PY Consulting',
    title: 'Principal Consultant',
    period: '2010 – 2023',
    location: 'Washington, DC',
    highlights: [
      'Lead machine learning engineer for Dataiku partner and enterprise solutions.',
      'Medicare/Medicaid data systems for Logistics Management Institute; introduced Agile practices that supported a multimillion-dollar contract win.',
      'word2vec behavioral-insight API for an ad-tech startup through successful funding rounds.',
    ],
  },
  {
    organization: 'Lockheed Martin · Thycotic · Digital DME',
    title: 'Software Engineer → Lead Developer',
    period: '2004 – 2011',
    location: 'Washington, DC metro',
    highlights: [
      'IRS systems modernization, secure web products using TDD and pair programming, and medical-device claims software.',
    ],
  },
];

export const ventures: readonly Venture[] = [
  {
    name: 'verJSON',
    role: 'Co-founder',
    period: '2026 –',
    summary:
      'Tooling and practices that scale agentic software delivery with automated verification.',
  },
  {
    name: 'Cervais',
    role: 'Co-founder',
    summary:
      'AI-powered secure gateway protecting critical-infrastructure endpoints.',
  },
  {
    name: 'Human Rights Connected',
    role: 'Chief Data & AI Officer',
    period: '2011 –',
    summary:
      'Agentic content pipelines and data strategy for a 501(c)(3) nonprofit.',
  },
  {
    name: 'MySeat.io · Starzdata',
    role: 'Advisor',
    period: '2019 –',
    summary: 'Data analytics and technical advisory.',
  },
];

export const credentials: readonly string[] = [
  'MS Computer Science — ESIEE Paris',
  'BA & BS Mathematics and Computer Science — UMBC',
  'Project Management Professional (PMP)',
  'Keynote, Databricks Data + AI Summit 2023',
  'Visiting Associate Professor, ESIEE Paris (2017–2021)',
  'Languages: English, Farsi, French',
];

export const technologies: readonly { group: string; items: string }[] = [
  {
    group: 'AI & ML',
    items:
      'LangChain / LangGraph, MCP, RAG, PyTorch, TensorFlow, Kubeflow, MLflow, DataRobot, Dataiku',
  },
  {
    group: 'Data',
    items:
      'Databricks, Snowflake, Starburst, dbt, Spark, Kafka, Unity Catalog, OpenMetadata, pgvector, Pinecone',
  },
  {
    group: 'Cloud & DevSecOps',
    items:
      'Azure, AWS, GCP, Kubernetes, Docker, Terraform, Pulumi, GitLab CI/CD, SonarQube, Artifactory',
  },
  {
    group: 'Engineering',
    items: 'Python, TypeScript, SQL, C# / .NET, Java, Next.js, NestJS, Django',
  },
];
