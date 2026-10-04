'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            className="weather-card group hover:-translate-y-2 transition-transform duration-300 border border-neutral-100"
          >
            {/* Top Banner Section */}
            <div className="relative w-full h-[60%] bg-gradient-to-br from-neutral-50 to-white overflow-hidden border-b border-neutral-100">
              {project.image ? (
                <>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent h-1/2 pointer-events-none z-0"></div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                  <Code className="w-32 h-32 text-neutral-900" />
                </div>
              )}

              <div className="absolute top-0 left-0 w-full p-6 flex items-start justify-between z-10">
                <h3 className={`text-xl font-bold leading-tight max-w-[80%] ${project.image ? 'text-white drop-shadow-md' : 'text-neutral-900'}`}>
                  {project.title}
                </h3>
                <Link href={`/projects/${project.slug}`} className="p-2 bg-white rounded-full hover:bg-neutral-50 shadow-sm transition-colors border border-neutral-200 group-hover:border-neutral-300">
                  <ArrowRight className="w-4 h-4 text-neutral-700" />
                </Link>
              </div>
            </div>
            
            {/* Bottom Content Section */}
            <div className="w-full h-[40%] flex flex-col p-6 bg-white">
              <p className="text-neutral-500 text-sm mb-4 line-clamp-2 text-left w-full font-medium">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto w-full">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 text-[10px] font-bold rounded-md">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
