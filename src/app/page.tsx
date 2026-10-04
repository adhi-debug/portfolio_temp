'use client';
import Image from 'next/image';
import FluidBackground from '@/components/FluidBackground';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { DevfolioProjects } from '@/components/DevfolioProjects';
import { DevfolioTextReveal } from '@/components/DevfolioTextReveal';
import { CareerTimeline } from '@/components/CareerTimeline';
import { DevfolioFooter } from '@/components/DevfolioFooter';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';

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
  const imageRef = useRef<HTMLDivElement>(null);
  const typedElementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: [
          'Software Engineer.',
          'I build things for the web.',
          'I create intelligent systems.'
        ],
        typeSpeed: 50,
        startDelay: 300,
        backSpeed: 50,
        backDelay: 8000,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <main id="home" className="flex min-h-screen flex-col bg-white text-neutral-900 font-sans antialiased overflow-hidden selection:bg-indigo-500/20">

      {/* Dynamic Background */}
      <FluidBackground />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-10 md:pb-20 z-10 pointer-events-none">
        {/* Hero Section */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 min-h-screen">
          
          {/* Left Text Block */}
          <div className="flex flex-col items-start text-left w-full md:w-1/2 select-none z-20 mt-32 md:mt-0">
            <motion.h5 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono font-medium text-[#9f55ff] text-xl md:text-2xl mb-4"
            >
              Hi, my name is
            </motion.h5>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.2]"
            >
              <span className="relative inline-block mr-4">
                Vishmitha
                <span className="absolute bottom-[0.5rem] md:bottom-[0.8rem] left-0 w-full h-[0.35rem] md:h-[0.5rem] rounded-full bg-gradient-to-r from-[#9f55ff] to-[#7000ff] shadow-[0_0_1rem_#7000ff] -z-10 animate-[growHorizontal_1s_ease-out_forwards]"></span>
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-mono leading-relaxed mb-8 min-h-[3rem] whitespace-nowrap"
            >
              <span ref={typedElementRef}></span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6 mb-12 relative z-50 pointer-events-auto"
            >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-[#9f55ff] transition-colors pointer-events-auto relative z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
              <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-[#9f55ff] transition-colors pointer-events-auto relative z-50">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-[#9f55ff] transition-colors pointer-events-auto relative z-50">
                <GithubIcon />
              </a>
              <a href="/resume.pdf" target="_blank" className="text-neutral-700 hover:text-[#9f55ff] transition-colors pointer-events-auto relative z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative z-50 pointer-events-auto"
            >
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block px-8 py-3 rounded border-2 border-[#9f55ff] text-neutral-900 font-mono text-sm hover:bg-[#9f55ff]/10 transition-colors pointer-events-auto relative z-50"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right Avatar Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6, 
              ease: "easeOut",
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }
            }}
            className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0 pointer-events-none"
          >
            <div
              className="relative w-48 h-48 md:w-[320px] md:h-[320px] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-white overflow-hidden pointer-events-auto"
            >
              <Image 
                src="/avatar.jpeg" 
                alt="Vishmitha" 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 192px, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full pt-10 bg-white">
        
        {/* The restored Skills Marquee */}
        <SkillsMarquee />
        
        <DevfolioTextReveal text="I build scalable intelligent systems that bridge the gap between complex AI models and elegant, accessible user experiences." />

        <DevfolioProjects />
        
        {/* The restored alternating Timeline */}
        <div className="bg-black border-t border-white/10">
          <CareerTimeline />
        </div>
        
        <DevfolioFooter />
      </div>
    </main>
  );
}
