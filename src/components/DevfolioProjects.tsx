'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectTile } from "./ProjectTile";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export function DevfolioProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 767);
    const handleResize = () => setIsDesktop(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let projectsScrollTrigger: any;
    let projectsTimeline: any;

    if (isDesktop && sectionRef.current && wrapperRef.current && sectionTitleRef.current) {
      const timeline = gsap.timeline({ defaults: { ease: "none" } });
      
      // Calculate exact dimensions using bounding client rect to account for responsive padding
      const leftOffset = wrapperRef.current.getBoundingClientRect().left;
      const elementWidth = wrapperRef.current.clientWidth + leftOffset * 2;
      
      sectionRef.current.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      
      // The exact distance we need to scrub translates exactly to the elementWidth to maintain 1:1 scroll speed
      timeline
        .to(sectionRef.current, { x: width })
        .to(sectionTitleRef.current, { x: -width }, "<");

      projectsScrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${elementWidth}`,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: "margin",
      });
      projectsTimeline = timeline;
    } else if (!isDesktop && wrapperRef.current) {
      wrapperRef.current.style.width = "calc(100vw - 1rem)";
      wrapperRef.current.style.overflowX = "scroll";
    }

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`${isDesktop ? "min-h-screen" : ""} w-full relative select-none transform-gpu bg-black overflow-hidden`}
    >
      <div className="flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-24">
        <div
          className="flex flex-col transform-gpu max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl pt-8 lg:pt-12"
          ref={sectionTitleRef}
        >
          <div className="flex items-center gap-2 uppercase tracking-widest text-white/50 font-mono text-sm mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2l8.5 17H3.5L12 2z" />
            </svg>
            PROJECTS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#b400ff] w-fit tracking-tight">
            My Projects
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mt-4 text-white/80">
            Some things I've built with love, expertise and a pinch of magical ingredients.
          </p>
        </div>
        
        <div
          ref={wrapperRef}
          className="mt-8 lg:mt-12 flex project-wrapper no-scrollbar w-fit pb-8"
          style={{ width: "max-content" }}
        >
          {projects.map((project, index) => (
            <div key={project.slug} className="mr-8 xs:mr-10 sm:mr-12">
              <ProjectTile
                project={project}
                isDesktop={isDesktop}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
