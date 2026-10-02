'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code } from 'lucide-react';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export function ProjectGrid() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full z-10 relative pointer-events-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-neutral-500 text-lg max-w-2xl mx-auto">Recent work in AI, Voice Infrastructure, and System Architecture.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-white border border-neutral-200 rounded-[2rem] p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-2 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 bg-neutral-50 flex items-center justify-center rounded-2xl border border-neutral-100 group-hover:scale-110 transition-transform duration-500">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <Link href={`/projects/${project.slug}`} className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-full transition-colors">
                <ArrowRight className="w-5 h-5 text-neutral-600" />
              </Link>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">{project.title}</h3>
            <p className="text-neutral-500 text-sm mb-8 flex-1 leading-relaxed">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-full">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-100">
              <Link href={`/projects/${project.slug}`} className="text-indigo-600 font-bold text-sm hover:text-indigo-800 flex items-center gap-2 transition-colors">
                View full details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
