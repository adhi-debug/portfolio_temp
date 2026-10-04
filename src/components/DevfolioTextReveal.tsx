'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function DevfolioTextReveal({ text }: { text: string }) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 20%"]
  });

  const words = text.split(" ");

  return (
    <section ref={targetRef} className="py-32 md:py-48 px-6 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <p className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-6 md:gap-y-4 text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            
            return (
              <motion.span key={i} style={{ opacity }} className="tracking-tight">
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
