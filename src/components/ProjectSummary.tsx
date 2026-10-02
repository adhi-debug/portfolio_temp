import Image from 'next/image';

interface ProjectSummaryProps {
  index: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  alternate?: boolean;
}

export function ProjectSummary({ index, title, description, buttonText, buttonLink, imageSrc, alternate = false }: ProjectSummaryProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center py-20 px-6 md:px-20 ${alternate ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} flex-wrap md:flex-nowrap gap-10 md:gap-20 max-w-7xl mx-auto w-full z-10 relative`}>
      <div className="w-full md:w-[45%] flex flex-col items-start text-left z-10 pointer-events-auto">
        <div className="text-cyan-400 font-bold tracking-widest uppercase mb-6 text-sm flex items-center gap-4">
          <span className="w-12 h-[2px] bg-cyan-400"></span>
          0{index}
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h3>
        <p className="text-lg text-neutral-400 mb-10 max-w-md leading-relaxed">{description}</p>
        <a href={buttonLink} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-neutral-950 font-bold hover:bg-cyan-300 transition-colors shadow-lg hover:shadow-xl shadow-cyan-400/20">
          {buttonText}
        </a>
      </div>
      
      <div className="w-full md:w-[55%] h-[300px] sm:h-[400px] md:h-[600px] bg-[#111] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto group">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
      </div>
    </section>
  );
}
