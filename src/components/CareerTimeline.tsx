'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function CareerTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full z-10 relative pointer-events-auto bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Career History</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">My professional journey in building scalable systems and AI infrastructure.</p>
      </motion.div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 origin-top"
        ></motion.div>

        {/* Timeline Item 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex justify-between items-center w-full group"
        >
          <div className="w-5/12 pr-10 text-right">
            <div className="bg-neutral-900 p-8 rounded-[2rem] border border-white/10 shadow-2xl inline-block w-full text-left hover:border-indigo-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
              <p className="text-indigo-400 font-bold text-sm mb-4 uppercase tracking-wider">Trikon Software Labs</p>
              <ul className="text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
                <li>Built a Real-Time Multilingual Voice AI, replacing static greetings with a dynamic engine speaking over 30 languages.</li>
                <li>Led a Zero-Data-Loss Cloud Database Migration, ensuring zero downtime and perfectly preserving user permissions.</li>
                <li>Engineered a High-Volume Enterprise Calling System with smart traffic-pacing to handle thousands of concurrent calls.</li>
                <li>Fixed critical AI voice bugs with smart audio filters, stopping interruptions and saving significant API costs.</li>
              </ul>
            </div>
          </div>
          
          <div className="z-20">
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-12 h-12 bg-black rounded-full border-4 border-indigo-900/50 shadow-sm"
            >
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="w-5/12 pl-10 text-left">
            <span className="text-neutral-300 font-mono font-bold text-sm bg-neutral-900 px-5 py-2 rounded-full border border-white/10">Jul 2026 - Present</span>
          </div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-between items-center w-full flex-row-reverse group"
        >
          <div className="w-5/12 pl-10 text-left">
            <div className="bg-neutral-900 p-8 rounded-[2rem] border border-white/10 shadow-2xl inline-block w-full hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Software Developer Intern</h3>
              <p className="text-purple-400 font-bold text-sm mb-4 uppercase tracking-wider">TechBrew Solutions</p>
              <ul className="text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
                <li>Built APIs end-to-end: translated OpenAPI contracts into schema, database models, and validation logic.</li>
                <li>Utilized Hono.js, Drizzle ORM, and Bun with strict Zod runtime validation for type-safe endpoints.</li>
                <li>Co-built a 4-agent LangGraph intraday trading system as part of a core developer team.</li>
                <li>Implemented LLM-driven news ranking and automated Telegram alert delivery pipeline.</li>
              </ul>
            </div>
          </div>
          
          <div className="z-20">
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-12 h-12 bg-black rounded-full border-4 border-purple-900/50 shadow-sm"
            >
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="w-5/12 pr-10 text-right">
            <span className="text-neutral-300 font-mono font-bold text-sm bg-neutral-900 px-5 py-2 rounded-full border border-white/10">Jan 2026 - Jun 2026</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
