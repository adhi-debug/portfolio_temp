'use client';
import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Software Engineer',
    company: 'Trikon Software Labs',
    location: 'Mangalore, India',
    period: 'Jul 2026 – Present',
    highlights: [
      'Engineered dynamic encrypted Gemini API key infrastructure for multi-tenant isolation, eliminating hardcoded keys.',
      'Replaced legacy static audio with dynamic multilingual voice pipeline (Gemini Live WebSockets).',
      'Achieved under 600ms TTFB latency for real-time voice streaming.',
      'Solved multi-agent race conditions with deterministic cold transfer mechanisms.',
      'Built WebRTC-based telephony integrations currently deployed in production enterprise systems.',
      'Architected resilient microservices utilizing Node.js, WebSockets, and PostgreSQL.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'TechBrew Solutions',
    location: 'Mangalore, India',
    period: 'Jan 2026 – Jun 2026',
    highlights: [
      'Built APIs end-to-end: translated OpenAPI contracts into schema, database models, and validation logic.',
      'Utilized Hono.js, Drizzle ORM, and Bun with strict Zod runtime validation for type-safe endpoints.',
      'Handled complex edge cases and strict business rules across multiple API microservices.',
      'Co-built a 4-agent LangGraph intraday trading system as part of a core developer team.',
      'Implemented LLM-driven news ranking and automated Telegram alert delivery pipeline.',
      'Contributed to real-time stock data processing, technical indicator calculation, and structured trade setup generation.',
    ],
  },
];

export function Timeline() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">Experience</h2>
        <p className="text-neutral-500 text-lg">Detailed history of my professional roles and engineering contributions.</p>
      </div>

      <div className="space-y-12">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 group"
          >
            {/* Left Col: Meta */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="sticky top-24">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-lg mb-4 border border-indigo-100">
                  {item.period}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">{item.role}</h3>
                <p className="text-neutral-500 font-medium mb-1">{item.company}</p>
                <p className="text-neutral-400 text-sm">{item.location}</p>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-3xl p-8 border border-neutral-200 group-hover:border-neutral-300 group-hover:shadow-xl transition-all duration-300">
                <ul className="space-y-4">
                  {item.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 text-base leading-relaxed">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
