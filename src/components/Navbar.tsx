'use client';
import React from 'react';
import { Mail, FileText } from 'lucide-react';
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

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-md border border-neutral-200 shadow-sm rounded-full">
        <a href="/" className="font-bold text-xl tracking-tighter text-neutral-900 mr-4">VP.</a>
        <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">
          <LinkedinIcon />
        </a>
        <a href="mailto:vishmithapoojary84@gmail.com" className="text-neutral-500 hover:text-neutral-900 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 text-sm font-bold bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 border border-neutral-900 transition-colors ml-2 shadow-lg shadow-neutral-900/20">
          <FileText className="w-4 h-4" />
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
