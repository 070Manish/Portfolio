import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, FileText, Briefcase, BookOpen, User, Code2, Award, ChevronDown } from 'lucide-react';
import { RESUME_DATA } from './constants';
import { Section, ExperienceCard, ProjectCard, EducationCard, SkillCategory, cn } from './components/ResumeComponents';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg text-gradient leading-none">MN.</span>
          <div className="hidden md:flex items-center gap-8">
            {['Experience', 'Projects', 'Skills', 'Education'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-cv-blue transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <a 
            href={`${import.meta.env.BASE_URL}${RESUME_DATA.contact.resumeUrl?.replace(/^\//, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cv-blue text-white text-xs font-bold hover:shadow-lg transition-all"
          >
            <FileText className="w-4 h-4" />
            Resume PDF
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cv-blue)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Available for Opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 mb-6"
          >
            {RESUME_DATA.name}
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            <span className="text-cv-blue font-semibold">{RESUME_DATA.title}</span> specializing in enterprise-grade microservices and secure data architectures. Currently driving API modernization at CAMS.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-cv-blue transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                <Mail className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Email</span>
            </a>
            <a href={`https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-cv-blue transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={`https://github.com/${RESUME_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-cv-blue transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                <Github className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-cv-blue transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Contact</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        
        {/* Experience Section */}
        <Section id="experience" title="Work Experience" icon={Briefcase}>
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </Section>

        {/* Projects Grid */}
        <Section id="projects" title="Featured Projects" icon={Code2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
          {/* Sidebar / Extra Info */}
          <div className="space-y-16">
            <Section id="education" title="Education" icon={BookOpen}>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, i) => (
                  <EducationCard key={i} {...edu} />
                ))}
              </div>
            </Section>
          </div>

          {/* Skills Section and Achievements */}
          <div className="lg:col-span-2 space-y-16">
            <Section id="skills" title="Technical Arsenal" icon={TerminalIcon}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 bg-white p-8 rounded-3xl border border-neutral-200/50">
                <SkillCategory title="Languages" skills={RESUME_DATA.skills.languages} />
                <SkillCategory title="Backend" skills={RESUME_DATA.skills.backend} />
                <SkillCategory title="Frontend" skills={RESUME_DATA.skills.frontend} />
                <SkillCategory title="AI / ML" skills={RESUME_DATA.skills.ai} />
                <SkillCategory title="DevOps & Cloud" skills={RESUME_DATA.skills.devops} />
                <SkillCategory title="Databases" skills={RESUME_DATA.skills.databases} />
                <SkillCategory title="Tools" skills={RESUME_DATA.skills.tools} />
              </div>
            </Section>

            <Section id="achievements" title="Achievements" icon={Award}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {RESUME_DATA.achievements.map((achievement, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-5 bg-white border border-neutral-100 rounded-3xl flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-cv-teal/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-cv-teal" />
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-neutral-200/50 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 inline-flex items-center gap-3">
             <div className="w-px h-12 bg-neutral-200 rotate-12" />
             <span className="font-display font-black text-4xl text-neutral-900 leading-none">MN.</span>
             <div className="w-px h-12 bg-neutral-200 -rotate-12" />
          </div>
          <p className="text-sm text-neutral-400 mb-8 font-medium">Built with React, Tailwind CSS, and Gemini AI</p>
          <div className="flex justify-center gap-6">
             <a href={`https://github.com/${RESUME_DATA.contact.github}`} className="text-neutral-400 hover:text-cv-blue transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href={`https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`} className="text-neutral-400 hover:text-cv-blue transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
             <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-neutral-400 hover:text-cv-blue transition-colors">
               <Mail className="w-5 h-5" />
             </a>
          </div>
          <p className="mt-12 text-[11px] text-neutral-300 uppercase tracking-widest font-bold">© 2026 Manish Nagpure. All Rights Reserved.</p>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIAssistant />
    </div>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <div className={cn("w-5 h-5 border-2 border-current rounded overflow-hidden flex items-center justify-center font-mono text-[8px] font-bold leading-none", className)}>
      &gt;_
    </div>
  );
}

