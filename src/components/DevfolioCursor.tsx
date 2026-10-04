'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function DevfolioCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.body.clientWidth > 767) {
      follower.current?.classList.remove("hidden");
      cursor.current?.classList.remove("hidden");

      const moveCircle = (e: MouseEvent) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
      };

      const hover = () => {
        gsap.to(cursor.current, { scale: 0.5, duration: 0.3 });
        gsap.to(follower.current, { scale: 3, duration: 0.3 });
      };

      const unHover = () => {
        gsap.to(cursor.current, { scale: 1, duration: 0.3 });
        gsap.to(follower.current, { scale: 1, duration: 0.3 });
      };

      document.addEventListener("mousemove", moveCircle);

      // Attach to any interactive elements
      const attachHover = () => {
        document.querySelectorAll("a, button, .link").forEach((el) => {
          el.addEventListener("mouseenter", hover);
          el.addEventListener("mouseleave", unHover);
        });
      };
      
      attachHover();
      // Re-attach if DOM changes
      const observer = new MutationObserver(attachHover);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener("mousemove", moveCircle);
        observer.disconnect();
        document.querySelectorAll("a, button, .link").forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, []);

  return (
    <>
      <div
        ref={cursor}
        className="bg-white rounded-full mix-blend-difference fixed w-4 h-4 select-none pointer-events-none z-50 hidden"
        style={{ top: '-8px', left: '-8px' }}
      />
      <div
        ref={follower}
        className="bg-white/[0.05] border border-white/[0.3] rounded-full fixed w-10 h-10 select-none pointer-events-none z-50 hidden"
        style={{ top: '-20px', left: '-20px' }}
      />
    </>
  );
}
