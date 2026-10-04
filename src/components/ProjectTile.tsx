'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
const techIconMap: Record<string, string> = {
  'React': '/projects/tech/react.svg',
  'TypeScript': '/projects/tech/typescript.svg',
  'MongoDB': '/projects/tech/mongodb.svg',
  'JavaScript': '/projects/tech/javascript.svg',
  'Next.js': '/projects/tech/nextjs.svg',
  'Tailwind': '/projects/tech/tailwindcss.svg',
  'Redux': '/projects/tech/redux.svg',
  'Node.js': '/projects/tech/nodedotjs.svg',
  'Python': '/projects/tech/python.svg',
  'FastAPI': '/projects/tech/fastapi.svg',
  'PostgreSQL': '/projects/tech/postgresql.svg',
  'WebRTC': '/projects/tech/webrtc.svg',
  'Gemini API': '/projects/tech/googlegemini.svg',
  'Gemini Live API': '/projects/tech/googlegemini.svg',
  'Express': '/projects/tech/express.svg',
  'HTML': '/projects/tech/html5.svg',
  'HTML5': '/projects/tech/html5.svg',
  'CSS': '/projects/tech/css3.svg',
  'GSAP': '/projects/tech/greensock.svg',
  'Telegram API': '/projects/tech/telegram.svg',
  'JWT': '/projects/tech/jsonwebtokens.svg',
  'LangGraph': '/projects/tech/langchain.svg',
  'LLM APIs': '/projects/tech/openai.svg',
  'LLMs': '/projects/tech/openai.svg',
  'WebSockets': '/projects/tech/socketdotio.svg',
};

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

export function ProjectTile({ project, classes, isDesktop }: any) {
  const projectCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = projectCard.current;
    if (node) {
      VanillaTilt.init(node, tiltOptions);
    }
    return () => (node as any)?.vanillaTilt?.destroy();
  }, []);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`overflow-hidden rounded-3xl snap-start link block ${classes || ''}`}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className="rounded-3xl relative p-6 sm:p-8 flex flex-col justify-between"
        style={{
          background: project.gradient ? `linear-gradient(90deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)` : `linear-gradient(90deg, #4f46e5 0%, #db2777 100%)`,
          height: isDesktop ? '26rem' : '24rem',
          width: isDesktop ? '38rem' : '85vw',
          maxWidth: '38rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)'
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl pointer-events-none"
          fill
        />
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              position: 'absolute',
              top: '1rem',
              right: isDesktop ? '2rem' : '0.5rem',
              width: isDesktop ? '17rem' : '14rem',
              transform: 'rotate(-22.5deg)',
              borderRadius: '0.75rem',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              objectFit: 'contain',
              zIndex: 0,
            }}
          />
        )}
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
            style={{
              background: `linear-gradient(0deg, #4f46e5 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <h3
          className="font-medium text-2xl sm:text-3xl lg:text-4xl z-10 pl-2 pt-2 transform-gpu text-white max-w-[70%]"
          style={{ transform: "translateZ(3rem)" }}
        >
          {project.title}
        </h3>
        
        <div
          className="w-1/2 h-full absolute left-24 top-0 flex items-center hidden sm:flex"
          style={{ transform: "rotate(-22.5deg) translateZ(3rem)" }}
        >
          <div className="flex flex-col pb-8">
            {project.tags.slice(0, 3).map((tag: string, i: number) => {
              const iconSrc = techIconMap[tag];
              if (!iconSrc) return null;
              
              return (
                <img
                  key={tag}
                  className={`${i % 2 === 0 ? "ml-16" : ""} mb-4 w-11 h-11 drop-shadow-md`}
                  src={iconSrc}
                  alt={tag}
                />
              );
            })}
          </div>
        </div>
        
        <p
          className="text-sm sm:text-base lg:text-lg z-10 tracking-wide font-medium text-white/90 transform-gpu max-w-[90%] sm:max-w-[80%] pb-2 pl-2 mt-auto"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
