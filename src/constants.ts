import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Manish Nagpure",
  title: "Software Development Engineer",
  contact: {
    phone: "+91-9130407795",
    email: "a.manishnagpure@gmail.com",
    linkedin: "manish-nagpure",
    github: "070Manish",
  },
  education: [
    {
      school: "Indian Institute of Information Technology, Allahabad",
      degree: "Master of Technology in Software Engineering",
      period: "2023 -- 2025",
      location: "Allahabad, India",
      grade: "GPA: 8.11/10",
    },
    {
      school: "Yeshwantrao Chavan College of Engineering, Nagpur",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2018 -- 2021",
      location: "Nagpur, India",
      grade: "CGPA: 7.11/10",
    },
  ],
  experience: [
    {
      company: "CAMS (Computer Age Management Services)",
      role: "Software Development Engineer I",
      period: "Jul 2025 -- Present",
      location: "Chennai, India",
      projects: [
        {
          title: "Project Odin: ARN Looker Mapping",
          highlights: [
            "Implemented multi-tenant Row-Level Security (RLS) in Looker using hierarchical ARN mapping logic to securely isolate distributor data across 100+ financial tenants.",
            "Designed ARN -> CONS -> DISTRIBUTOR mapping workflows to manage secure and scalable distributor-level data access across analytics dashboards.",
            "Built validation and fallback mechanisms for legacy distributor mappings, eliminating manual access management across 100+ financial tenants.",
          ],
        },
        {
          title: "Project Odin: API Modernization Initiative",
          highlights: [
            "Modernized legacy enterprise services by designing REST, GraphQL, and gRPC APIs, reducing inter-service latency and de-risking migration via side-by-side parallel-run validation.",
            "Developed APIs to support replay and parallel-run workflows for comparator systems, enabling side-by-side validation between legacy and modernized services.",
            "Drove API contract consistency and validation standards across backend teams, reducing integration bugs during service migration for systems handling financial transactions.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Multi-Threaded Proxy Server with and without Cache",
      technologies: ["C", "Semaphores", "Client-Server Architecture"],
      description: "Developed a scalable multithreaded HTTP proxy server in C using pthreads for concurrent client handling.",
      highlights: [
        "Integrated LRU caching to minimize redundant server calls and improve response times.",
        "Ensured thread-safe operations using semaphores and mutexes for synchronization in critical sections.",
        "Built custom HTTP request parser and socket-level forwarding with no external libraries.",
      ],
      githubUrl: "https://github.com/070Manish/2.Multhreaded-Proxy-Server",
    },
    {
      title: "MediSync -- Healthcare Portal",
      technologies: ["Spring Boot", "React.js", "MySQL", "RabbitMQ", "Webhooks", "JWT", "SSE"],
      description: "Developed a secure healthcare portal enabling health record transfers using ABDM APIs and FHIR standards.",
      highlights: [
        "Designed FIGMA mockups, built backend services with Spring Boot, and developed frontend with React.js.",
        "Chose RabbitMQ over direct HTTP calls for async inter-service communication to decouple services.",
        "Used SSE over WebSockets for lightweight real-time frontend updates.",
        "Ensured secure communication using JWT-based authentication and role-based access control (RBAC).",
      ],
      githubUrl: "https://github.com/070Manish/",
    },
  ],
  skills: {
    languages: ["Java", "C++", "C", "JavaScript", "SQL"],
    backend: ["Spring Boot", "RESTful APIs", "Microservices Architecture"],
    frontend: ["HTML", "CSS", "ReactJS"],
    ai: ["LLM Integration", "Prompt Engineering", "RAG Pipelines", "Looker Explore Assistance (Vertex AI)"],
    devops: ["Google Cloud Platform (GCP)", "Docker", "AWS", "CI/CD", "Linux"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "Postman"],
  },
  achievements: [
    "GATE CSE 2023: Secured All India Rank 3409 (among 100,000+ candidates).",
    "Problem Solving: Solved 500+ coding problems on LeetCode, CodeChef, and GFG.",
  ],
};
