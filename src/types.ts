export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: {
    title: string;
    highlights: string[];
  }[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumeUrl?: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    languages: string[];
    backend: string[];
    frontend: string[];
    ai: string[];
    devops: string[];
    databases: string[];
    tools: string[];
  };
  achievements: string[];
}
