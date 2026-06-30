export const heroData = {
  greeting: "hi, my name is",
  name: "sharun naicker.",
  tagline: "i like to build stuff",
  description:
    "i'm a software engineer at JPMorgan Chase. full-stack background, with a soft spot for data and backend systems. i care about building things that are efficient, reliable, and built to last.",
  cta: { text: "Check out my work", href: "#projects" },
};

export const aboutData = {
  paragraphs: [
    "I'm a software engineer with a background in Computer Science from the University of Texas at Dallas. I'm currently at JPMorgan Chase, working on the backend infrastructure that keeps financial data flowing reliably at scale.",
    "I love the intersection of data engineering and product — designing the invisible systems that make applications fast, reliable, and insightful. I care deeply about writing clean, maintainable code that solves real problems.",
    "I enjoy being active so outside of work, you'll find me rock climbing, running, or lifting. If I'm not doing those I'm probably watching anime, reviewing movies, or playing modded Elden Ring",
  ],
  photo: "/photo.JPEG",
  technologies: [
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C++ ",
    "SQL",
    "MongoDB",
    "AWS",
    "React",
  ],
};

export const experienceData = [
  {
    company: "JPMorgan Chase",
    role: "Software Engineer",
    startDate: "August 2025",
    endDate: "Present",
    bullets: [
      "Optimized bulk data validation for jobs processing 1K–2K records by redesigning validation checks from per-record to batch execution, reducing processing time from 150s to 67s (~2.2× faster) and enabling bulk job creation via API.",
      "Architected migration of audit report storage from relational databases to AWS S3, reducing costs by ~30% and enabling scalable handling of frequently generated reports.",
      "Built and integrated Java-based APIs to manage FX trade rules, connecting with downstream services via AWS-based messaging and API gateways to support event-driven transaction workflows.",
      "Designed a Java-based event-driven API integrating Kafka for real-time data routing across enrichment, gateway, and relational database layers, reducing manual account lookup time by 60%.",
    ],
  },
  {
    company: "JPMorgan Chase",
    role: "Software Engineering Intern",
    startDate: "May 2024",
    endDate: "August 2024",
    bullets: [
      "Developed an internal application using Flask (Python) and React.js that enables team members to upload Parquet files, convert the data into JSON, and modify it through an editable form, streamlining API request generation and automating a daily task that reduced engineers' time spent by 70%.",
      "Implemented metadata transformations in Databricks by normalizing inconsistent schemas, enriching datasets with additional attributes, and restructuring metadata for optimized query performance, enhancing pipeline efficiency and increasing data throughput by 25%.",
      "Optimized workflows by configuring NiFi clusters to process over 5TB of metadata, reducing processing time by 20% and optimizing workflows, showcasing knowledge in high-scale distributed systems and systems engineering.",
      "Collaborated with cross-functional teams to conduct detailed requirements analysis, identifying key features that increased application usage and adoption by 15%.",
    ],
  },
  {
    company: "State Farm",
    role: "Software Engineering Intern",
    startDate: "May 2023",
    endDate: "December 2023",
    bullets: [
      "Built an enhanced data model visualization for the internal dashboard using React.js and MongoDB, implementing 8+ improvements, including interactive graphs and tables, to optimize the display of Personal and Auto Sector data.",
      "Optimized backend performance by implementing database caching, reducing response time by 15%, and resolving cursor timeout error to process 150,000+ MongoDB entries, ensuring seamless frontend visualization.",
      "Migrated ETL workflows from AWS Lambda to AWS Glue (PySpark) enabling distributed data processing and reducing job completion time by 20%.",
      "Improved dashboard stability by 10% through JUnit and Selenium testing, resolving 4+ bugs to enhance user experience.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "PolicyGraph AI",
    description:
      "LLM-powered agent workflow application for policy document analysis. Full-stack system with a FastAPI backend, PostgreSQL with JSONB/GIN indexes for semantic search, Redis for caching, and a React 18 frontend. Integrates with the Anthropic Claude API to power multi-step reasoning over complex policy documents.",
    tech: [
      "FastAPI",
      "Pydantic v2",
      "PostgreSQL",
      "Redis",
      "React 18",
      "TypeScript",
      "Anthropic SDK",
    ],
    github: "https://github.com/sharunnaicker/policygraph-ai",
    external: "",
    image: "",
  },
  {
    title: "UTD Building Classifier",
    description:
      "iOS app that identifies 11 UTD campus buildings in real time using a custom-trained Core ML model. We collected 500+ on-campus photos ourselves, trained a neural network with augmentations (blur, rotation, etc.) using Create ML, and integrated S(Casp) common sense reasoning to improve classification accuracy. Built with Swift, SwiftUI, and Apple's Vision Library.",
    tech: ["Swift", "SwiftUI", "Core ML", "Create ML", "Vision"],
    github: "https://github.com/srilokhkaruturi/UTD-BUILDING-CLASSIFIER-main",
    external: "",
    image: "",
  },
];

export const otherProjects = [
  {
    title: "Spotify Group Controller",
    description:
      "Web app that lets groups collaboratively control Spotify playback. Multiple users can queue tracks, and control music together in real time via a shared session.",
    tech: ["Django", "Python", "JavaScript"],
    github: "https://github.com/Sharunnaicker/Spotify-Group-Controller",
    external: "",
  },
  {
    title: "iPlan",
    description:
      "Mobile app for collaborative event planning with budget tracking, itinerary building, deadline calendars, and task prioritization.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/Sharunnaicker/iPlan",
    external: "",
  },
  {
    title: "Portfolio Website",
    description:
      "This website — designed and built from scratch with a custom Three.js animated background, Framer Motion transitions, and a dark/light theme system. Built with Next.js 16, TypeScript, and Tailwind CSS v4.",
    tech: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Framer Motion",
      "Tailwind CSS",
    ],
    github: "https://github.com/Sharunnaicker/portfolio-sharunnaicker",
    external: "",
  },
];

export const contactData = {
  heading: "Get in touch",
  description:
    "I'm currently looking for new opportunities in the Seattle area. Whether you have a question or just want to say hi, my inbox is always open.",
  cta: { text: "Say hello", href: "mailto:sharunnaicker@gmail.com" },
};
