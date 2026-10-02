'use client';
import Image from 'next/image';
import FluidBackground from '@/components/FluidBackground';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { ProjectGrid } from '@/components/ProjectGrid';
import { CareerTimeline } from '@/components/CareerTimeline';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-neutral-900 font-sans antialiased overflow-hidden selection:bg-indigo-500/20">
      
      {/* Dynamic Background */}
      <FluidBackground />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-10 md:pb-20 z-10 pointer-events-none">
        {/* Background Big Text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden bg-gradient-to-b from-neutral-100 to-white/0 bg-clip-text text-[12rem] leading-none font-black text-transparent select-none sm:block lg:text-[18rem]" 
            style={{ marginBottom: '-3rem' }}
          >
            Vishmitha
          </motion.div>
        </div>

        {/* Hero Avatar Image - Large */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-[6px] border-white bg-white pointer-events-auto group mb-10"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image 
              src="/avatar.jpeg" 
              alt="Vishmitha" 
              fill 
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 400px"
              className="group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>

        {/* Header Text */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="z-10 flex flex-col items-center text-center pointer-events-auto"
        >
          <h1 className="text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 pb-2 drop-shadow-sm">
            AI Engineer
          </h1>
          <p className="text-neutral-500 mt-4 text-xl max-w-2xl font-medium">
            Building intelligent voice systems & agentic workflows.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 hover:-translate-y-1 transition-all text-sm font-bold shadow-lg shadow-neutral-900/20">
              <GithubIcon /> GitHub
            </a>
            <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-full hover:border-neutral-400 hover:-translate-y-1 transition-all text-sm font-bold shadow-sm">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:-translate-y-1 transition-all text-sm font-bold shadow-lg shadow-indigo-600/20">
              📄 Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full pt-10 bg-white">
        
        {/* The restored Skills Marquee */}
        <SkillsMarquee />
        
        {/* The restored Project Grid */}
        <ProjectGrid />
        
        {/* The restored alternating Timeline */}
        <CareerTimeline />
        
        {/* Footer */}
        <footer className="w-full py-16 flex flex-col items-center justify-center border-t border-neutral-100 mt-20 bg-neutral-50">
          <div className="flex gap-8 mb-8">
            <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="text-neutral-500 font-medium hover:text-neutral-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="text-neutral-500 font-medium hover:text-neutral-900 transition-colors">LinkedIn</a>
            <a href="mailto:vishmithapoojary84@gmail.com" className="text-neutral-500 font-medium hover:text-neutral-900 transition-colors">Email</a>
          </div>
          <p className="text-neutral-400 text-sm font-medium">© 2026 Vishmitha Poojary. Designed with simplicity in mind.</p>
        </footer>
      </div>
    </main>
  );
}
