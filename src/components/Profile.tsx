import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Profile() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-20 max-w-7xl mx-auto w-full z-10 relative">
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20">
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-left pointer-events-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Hi, I'm Vishmitha. <br/>
            I build intelligent <br/>
            voice systems.
          </h3>
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            Based in Mangalore, India, I specialize in AI engineering and real-time voice infrastructure. I am currently a Software Engineer at Trikon Software Labs, building enterprise-level conversational AI agents using Google Gemini Live, WebRTC, and scalable distributed architectures.
          </p>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
            I am deeply passionate about pushing the boundaries of what LLMs can do in real-time. Whether it's driving latency down to 600ms, building robust Noise Gates for Voice Activity Detection, or architecting WebSocket-based streaming, I thrive on complex engineering challenges.
          </p>
          <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            Send me a message <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-12 pointer-events-auto">
          <div>
            <h4 className="text-2xl font-bold text-neutral-900 mb-6">Experience</h4>
            <div className="flex flex-col gap-8">
              <div>
                <h5 className="font-bold text-neutral-800 text-lg">Software Engineer</h5>
                <p className="text-indigo-600 font-medium mb-2">Trikon Software Labs | Jul 2026 - Present</p>
                <p className="text-neutral-600">Engineered a dynamic encrypted Gemini API key infrastructure. Replaced legacy static audio with dynamic multilingual voice pipeline (Gemini Live WebSockets), reducing TTFB latency to under 600ms. Solved multi-agent race conditions and built deterministic cold transfer mechanisms.</p>
              </div>
              <div>
                <h5 className="font-bold text-neutral-800 text-lg">Software Developer Intern</h5>
                <p className="text-indigo-600 font-medium mb-2">TechBrew Solutions | Jan 2026 - Jun 2026</p>
                <p className="text-neutral-600">Built production REST APIs from OpenAPI contracts using Hono.js, Drizzle ORM, and Bun. Contributed to a team-built 4-agent LangGraph intraday trading system with LLM-driven news ranking and Telegram alert delivery.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold text-neutral-900 mb-6">Skills</h4>
            <div className="flex flex-wrap gap-3">
              {['Python', 'TypeScript', 'Node.js', 'React.js', 'Next.js', 'FastAPI', 'LangGraph', 'Gemini API', 'LiveKit', 'WebRTC', 'PostgreSQL', 'Drizzle ORM'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
