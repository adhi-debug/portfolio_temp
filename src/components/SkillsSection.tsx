'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'TypeScript', 'JavaScript',
  'React', 'Next.js', 'Node.js', 'FastAPI', 'Hono.js',
  'PostgreSQL', 'MongoDB', 'Drizzle ORM',
  'Docker', 'Git', 'Linux',
  'Google Gemini API', 'LangGraph', 'RAG', 'Agentic Workflows',
  'WebRTC', 'WebSockets', 'REST APIs',
  'System Design', 'Microservices'
];

export function SkillsSection() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">Core Skills</h2>
        <p className="text-neutral-500 text-lg">Technologies I leverage to build robust software.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ 
              duration: 0.2, 
              delay: idx * 0.02, // Very fast staggered reveal
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-5 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-700 font-bold text-sm shadow-sm hover:shadow-md hover:border-indigo-200 hover:text-indigo-700 transition-all cursor-default select-none"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
