'use client';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { use, useState, useEffect } from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const gradients = [
  'from-indigo-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-pink-500 to-rose-600',
  'from-violet-500 to-fuchsia-600',
  'from-amber-500 to-yellow-600',
];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const projectIdx = projects.findIndex((p) => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project && (project as any).gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % (project as any).gallery.length);
    }
  };

  const prevImage = () => {
    if (project && (project as any).gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + (project as any).gallery.length) % (project as any).gallery.length);
    }
  };

  useEffect(() => {
    if (!project || !(project as any).gallery || (project as any).gallery.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (project as any).gallery.length);
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(interval);
  }, [project, currentImageIndex]);

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIdx + 1) % projects.length];
  const prevProject = projects[(projectIdx - 1 + projects.length) % projects.length];
  const gradient = gradients[projectIdx % gradients.length];

  return (
    <main className="min-h-screen bg-black text-white font-sans relative selection:bg-indigo-500/20">

      {/* Compact gradient header */}
      <div className={`bg-gradient-to-br ${gradient} py-16 pt-20 px-6 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay for better contrast */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-white/5 rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-bold">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{project.emoji}</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">{project.title}</h1>
          </div>
          <p className="text-white/80 text-base max-w-2xl">{project.shortDescription}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tags + Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-lg border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)] uppercase tracking-wider">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-bold rounded-full hover:bg-neutral-700 hover:shadow-lg transition-all text-sm">
                <GithubIcon /> View Source
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 hover:shadow-lg transition-all text-sm">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-black text-white mb-6">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(project.highlights || []).map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-neutral-900/50 rounded-2xl border border-white/10 hover:bg-neutral-800 hover:border-white/20 transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm font-medium leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl font-black text-white mb-4">About this project</h2>
          <p className="text-neutral-400 text-base leading-relaxed whitespace-pre-wrap">{project.description}</p>
        </motion.div>

        {/* Project Gallery */}
        {(project as any).gallery && (project as any).gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-xl font-black text-white mb-6">Gallery</h2>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-neutral-900 aspect-video group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={(project as any).gallery[currentImageIndex]} 
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Controls */}
              {(project as any).gallery.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                  >
                    <ChevronLeft className="w-6 h-6 -ml-0.5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                  >
                    <ChevronRight className="w-6 h-6 ml-0.5" />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {(project as any).gallery.map((_: any, i: number) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-2'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 border-t border-white/10 pt-8 mt-12 pb-12">
          <Link href={`/projects/${prevProject.slug}`} className="flex-1 group p-6 bg-neutral-900/50 rounded-2xl border border-white/10 hover:bg-neutral-800 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300">
            <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-2">← Previous</p>
            <p className="text-white font-bold group-hover:text-indigo-400 transition-colors">{prevProject.title}</p>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="flex-1 group p-6 bg-neutral-900/50 rounded-2xl border border-white/10 hover:bg-neutral-800 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 text-right">
            <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-2">Next →</p>
            <p className="text-white font-bold group-hover:text-indigo-400 transition-colors">{nextProject.title}</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
