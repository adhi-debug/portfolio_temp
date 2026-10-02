'use client';
import React from 'react';
import { BrainCircuit, Database, Server, Layout, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export function Expertise() {
  const skills = [
    { name: 'Python', icon: BrainCircuit },
    { name: 'TypeScript', icon: Layout },
    { name: 'Next.js', icon: Layout },
    { name: 'React', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'FastAPI', icon: Server },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Docker', icon: ShieldAlert },
    { name: 'RAG', icon: BrainCircuit },
    { name: 'LangGraph', icon: BrainCircuit },
    { name: 'Gemini AI', icon: BrainCircuit },
    { name: 'WebRTC', icon: Server },
    { name: 'REST APIs', icon: Server },
    { name: 'System Design', icon: ShieldAlert },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full z-10 relative pointer-events-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Expertise & Skills</h2>
        <p className="text-neutral-500 text-lg max-w-2xl mx-auto">A blend of full-stack development, agentic AI systems, and robust backend infrastructure.</p>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-4 bg-white border border-neutral-200 shadow-sm hover:shadow-md rounded-2xl cursor-default transition-shadow"
          >
            <skill.icon className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-neutral-800 tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
