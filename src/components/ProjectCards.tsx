'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

const gradients = [
  'from-indigo-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-pink-500 to-rose-600',
  'from-violet-500 to-fuchsia-600',
  'from-amber-500 to-yellow-600',
];

export function ProjectCards() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full relative bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-neutral-500 text-lg max-w-xl mx-auto">Dive into the systems I've built — from voice AI to trading agents.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white hover:border-neutral-300 transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${gradients[idx % gradients.length]} relative overflow-hidden`}>
                  {/* Floating circles decoration */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-10 w-20 h-20 bg-white/10 rounded-full group-hover:translate-y-[-20px] transition-transform duration-700" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="text-white/20 text-[8rem] font-black leading-none select-none group-hover:scale-110 transition-transform duration-700 block">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm group-hover:gap-4 transition-all duration-300">
                    Explore project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
