'use client';
import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export function ProjectShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-neutral-500 text-lg max-w-xl mx-auto">From voice AI to trading agents — systems I built and shipped.</p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50 hover:bg-white hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-200/50">
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left: Number + Emoji */}
                  <div className="md:w-32 flex-shrink-0 flex items-center justify-center p-6 md:p-0">
                    <div className="flex items-center gap-3 md:flex-col md:gap-1">
                      <span className="text-5xl md:text-6xl font-black text-neutral-200 group-hover:text-indigo-200 transition-colors duration-300 leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-3xl">{project.emoji}</span>
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 p-6 md:py-8 md:px-6">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors duration-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4 max-w-2xl">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white border border-neutral-200 text-neutral-600 text-[11px] font-bold rounded-lg group-hover:border-indigo-200 group-hover:text-indigo-700 group-hover:bg-indigo-50 transition-colors duration-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Arrow */}
                  <div className="hidden md:flex items-center pr-8">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 group-hover:bg-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
