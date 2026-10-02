'use client';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

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

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIdx + 1) % projects.length];
  const prevProject = projects[(projectIdx - 1 + projects.length) % projects.length];
  const gradient = gradients[projectIdx % gradients.length];

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans relative selection:bg-indigo-500/20">

      {/* Compact gradient header */}
      <div className={`bg-gradient-to-br ${gradient} py-16 pt-20 px-6 relative overflow-hidden`}>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-white/5 rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-bold">
            <ArrowLeft className="w-4 h-4" /> Portfolio
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
              <span key={tag} className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs font-bold rounded-lg border border-neutral-200">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors text-sm">
                <GithubIcon /> View Source
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-900 font-bold rounded-full hover:border-neutral-400 transition-colors text-sm">
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
          <h2 className="text-xl font-black text-neutral-900 mb-6">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(project.highlights || []).map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 hover:bg-white hover:border-neutral-300 transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm font-medium leading-relaxed">{h}</span>
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
          <h2 className="text-xl font-black text-neutral-900 mb-4">About this project</h2>
          <p className="text-neutral-600 text-base leading-relaxed whitespace-pre-wrap">{project.description}</p>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-4 border-t border-neutral-100 pt-8">
          <Link href={`/projects/${prevProject.slug}`} className="flex-1 group p-6 bg-neutral-50 rounded-2xl border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200">
            <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-2">← Previous</p>
            <p className="text-neutral-900 font-bold group-hover:text-indigo-600 transition-colors">{prevProject.title}</p>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="flex-1 group p-6 bg-neutral-50 rounded-2xl border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200 text-right">
            <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-2">Next →</p>
            <p className="text-neutral-900 font-bold group-hover:text-indigo-600 transition-colors">{nextProject.title}</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
