export interface ExperienceEntry {
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  date: string;
  coursework: string[];
  activities: string[];
}

// Bullets use **term** for metrics/technologies worth calling out — rendered
// as emphasis by ExperienceTimeline.
export const experience: ExperienceEntry[] = [
  {
    org: "OneStream Software",
    role: "Software Engineering Intern",
    location: "New York, NY (Remote)",
    start: "Jun 2026",
    end: "Aug 2026",
    current: true,
    bullets: [
      "Owned end-to-end delivery of **3+ customer-facing C#/.NET features** for enterprise financial reporting.",
      "Shipped configuration features for enterprise financial reporting software used by **1,800+ global customers**.",
      "Authored **100+ regression test cases** in C# to validate features, ensuring code quality before each release.",
      "Collaborated across **4+ engineering teams** to streamline deployment pipelines and accelerate release cadence.",
    ],
  },
  {
    org: "PARES AI",
    role: "Software Engineer (Founding)",
    location: "San Francisco, CA",
    start: "Jun 2025",
    end: "Sep 2025",
    bullets: [
      "Deployed core features for an AI-driven real estate platform consolidating agent tools across **5+ firms** — Y Combinator S25.",
      "Developed a **Node.js/TypeScript** backend for property ingestion and auth, reducing response times by **35%**.",
      "Leveraged the **Claude API** for structured property summaries and metadata validation, cutting manual work by **60%**.",
      "Refactored **PostgreSQL** schemas and migrations, improving query performance by **40%** and supporting **3x** growth.",
      "Implemented RBAC across **20,000+ records** with role permission audits to ensure zero cross-tenant data exposure.",
      "Wrote database and endpoint unit tests using **Docker** and **GitHub Actions** to validate continuous deployment.",
    ],
  },
  {
    org: "Cornell University",
    role: "Student Researcher — Datacenter Acoustics Study",
    location: "Ithaca, NY",
    start: "Jan 2026",
    end: "Present",
    current: true,
    bullets: [
      "Engineered a **Python** web scraper to extract **1,000+ testimonies** from news sources on datacenter noise impacts.",
      "Deployed a **Flask** web app on **Google Cloud Platform** to visualize 1,000+ scraped data points in real time.",
      "Integrated **OpenStreetMap** and the **Overpass API** to render an interactive map of **100+ US datacenter sites**.",
    ],
  },
  {
    org: "Cornell University",
    role: "Research Assistant to Prof. Christopher Csikszentmihalyi",
    location: "Ithaca, NY",
    start: "May 2025",
    end: "May 2026",
    bullets: [
      "Developed a **Python** data pipeline to ingest, validate, and store **10,000+ lake environmental sensor readings**.",
      "Upgraded a water drone's Pixhawk flight controller to collect lake sensor data with **50% faster** processing.",
      "Automated data cleaning, anomaly detection, and schema validation workflows, reducing manual effort by **75%**.",
    ],
  },
];

export const education: EducationEntry = {
  school: "Cornell University",
  location: "Ithaca, NY",
  degree: "B.S. Computer Science, College of Engineering",
  date: "Expected May 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Systems (C/C#)",
    "Discrete Math",
    "Machine Learning",
    "Database Systems",
    "Analysis of Algorithms",
  ],
  activities: [
    "Association of Computer Science Undergraduates",
    "Cornell Outdoor Education Climbing Wall",
    "Thread Fashion Magazine — Photographer",
  ],
};

export const skills: Record<string, string[]> = {
  Languages: [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "C++",
    "C",
    "C#",
    "SQL",
    "OCaml",
    "Swift",
    "HTML/CSS",
    "Assembly",
  ],
  "Frameworks & Libraries": [
    "React",
    "Express",
    "Node.js",
    "FastAPI",
    "Flask",
    "PyTorch",
    "JUCE",
    ".NET",
    "SwiftUI",
    "MapKit",
  ],
  "Databases & Tools": [
    "PostgreSQL",
    "Redis",
    "Supabase",
    "Docker",
    "Git",
    "CloudKit",
    "Google Cloud Platform",
  ],
  "Backend & Infrastructure": [
    "REST APIs",
    "API Design",
    "CI/CD",
    "Unit Testing",
    "Agile",
    "Scrum",
    "Claude API",
    "OpenAI API",
  ],
};
