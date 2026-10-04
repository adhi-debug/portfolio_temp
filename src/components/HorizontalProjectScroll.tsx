'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export function HorizontalProjectScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 85}vw`]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background 'PROJECTS' watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] pointer-events-none select-none z-0 tracking-tighter">
          WORK
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 z-10 items-center">
          {projects.map((project, idx) => (
            <div 
              key={project.slug} 
              className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group"
            >
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Code className="w-32 h-32 text-white" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end">
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {project.tags.slice(0,3).map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-white tracking-widest uppercase border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">{project.title}</h3>
                  <p className="text-neutral-400 text-sm md:text-lg mb-8 line-clamp-2 max-w-xl font-medium">{project.shortDescription}</p>
                  
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl"
                  >
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
