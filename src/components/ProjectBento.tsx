'use client';
import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export function ProjectBento() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">Featured Work</h2>
        <p className="text-neutral-500 text-lg">Architecting intelligent systems for the modern web.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(300px,auto)] gap-4 md:gap-6">
        {projects.map((project, idx) => {
          // Create a 2026 Bento Grid layout
          // First item large (span 2 cols, 2 rows if on desktop)
          // Others varying sizes
          let spanClass = 'md:col-span-1 md:row-span-1';
          if (idx === 0) spanClass = 'md:col-span-2 md:row-span-2';
          else if (idx === 1) spanClass = 'md:col-span-2 md:row-span-1';
          else if (idx === 4) spanClass = 'md:col-span-2 md:row-span-1';
          
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
              className={`${spanClass} group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-2xl hover:shadow-neutral-200/50 p-8`}
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
              
              {/* Background gradient blob that reveals on hover */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-20 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{project.emoji}</span>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 group-hover:bg-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors mb-2">{project.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {idx === 0 ? project.description.substring(0, 150) + '...' : project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, idx === 0 ? 5 : 3).map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-lg border border-transparent group-hover:border-neutral-200 transition-colors">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > (idx === 0 ? 5 : 3) && (
                      <span className="px-2.5 py-1 bg-neutral-50 text-neutral-400 text-xs font-bold rounded-lg">
                        +{project.tags.length - (idx === 0 ? 5 : 3)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
