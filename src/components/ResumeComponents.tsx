import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, MapPin, Calendar, BookOpen, Briefcase, Code2, Award } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Section({ title, icon: Icon, children, className, id }: { title: string; icon: any; children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-12", className)}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-cv-blue/10 flex items-center justify-center text-cv-blue">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Badge({ children, variant = 'default' }: any) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-600 border-neutral-200',
    accent: 'bg-cv-blue/5 text-cv-blue border-cv-blue/20',
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-xs font-medium border transition-all",
      variants[variant]
    )}>
      {children}
    </span>
  );
}

export function ExperienceCard({ company, role, period, location, projects }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200/50">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-1">{role}</h3>
          <p className="text-cv-blue font-medium">{company}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        {projects.map((project: any, i: number) => (
          <div key={i} className="group">
            <h4 className="text-md font-bold text-neutral-800 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cv-blue/40 group-hover:bg-cv-blue transition-colors" />
              {project.title}
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight: string, j: number) => (
                <li key={j} className="text-sm text-neutral-600 leading-relaxed flex gap-3">
                  <span className="text-neutral-300 mt-1.5">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectCard({ title, technologies, description, highlights, githubUrl }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 sm:p-8 flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-cv-blue transition-colors">{title}</h3>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
        
        <p className="text-sm text-neutral-600 mb-6 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech: string) => (
            <Badge key={tech} variant="accent">{tech}</Badge>
          ))}
        </div>
        
        <ul className="space-y-3">
          {highlights.map((highlight: string, i: number) => (
            <li key={i} className="text-sm text-neutral-600 leading-relaxed flex gap-3">
              <span className="text-cv-blue font-bold opacity-50">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}

export function EducationCard({ school, degree, period, location, grade }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 relative"
    >
      <div className="hidden sm:flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cv-blue z-10 shadow-sm">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="w-px h-full bg-neutral-200 -mt-2" />
      </div>
      
      <div className="flex-1 pb-10">
        <div className="glass-card p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg font-bold text-neutral-900">{school}</h3>
            <span className="text-xs font-semibold text-cv-blue bg-cv-blue/5 px-2 py-1 rounded-md">{grade}</span>
          </div>
          <p className="text-sm font-medium text-neutral-700 mb-4">{degree}</p>
          <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {period}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
