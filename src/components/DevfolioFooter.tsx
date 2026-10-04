'use client';
import Image from "next/image";

export function DevfolioFooter() {
  return (
    <footer
      className="w-full relative select-none bg-cover overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, #7e22ce, #9333ea, #a855f7)`, // Match devfolio purple
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Background City */}
        <div 
          className="absolute bottom-0 w-[200%] md:w-full h-[50%]"
          style={{
            backgroundImage: "url('/footer/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat-x"
          }}
        />
        {/* Cars and Bikes */}
        <div className="absolute bottom-[2%] md:bottom-[5%] left-0 w-full h-[20%] flex items-end justify-around">
          <Image src="/footer/cyclist.gif" alt="cyclist" width={80} height={80} className="w-16 md:w-24 -ml-20 animate-[drive_15s_linear_infinite]" />
          <Image src="/footer/volkswagen.gif" alt="car" width={150} height={80} className="w-32 md:w-48 ml-auto mr-[-200px] animate-[drive-reverse_20s_linear_infinite]" />
        </div>
      </div>

      <div className="w-full h-full pt-32 relative z-10">
        <div className="flex flex-col h-full justify-end z-10 items-center py-12 px-6">
          <p className="font-medium text-3xl md:text-5xl text-center text-white mb-12">
            Feel free to connect on social media.
          </p>
          
          <div className="flex gap-8 mb-12 relative z-50 pointer-events-auto">
            <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="text-white hover:scale-125 transition-transform link pointer-events-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /></svg>
            </a>
            <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="text-white hover:scale-125 transition-transform link pointer-events-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com" target="_blank" rel="noreferrer" className="text-white hover:scale-125 transition-transform link pointer-events-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
          </div>

          <div className="pt-4 text-center relative z-50 pointer-events-auto">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com"
              className="inline-flex link items-center px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-colors font-medium text-lg tracking-wide pointer-events-auto"
            >
              Let's Talk
            </a>
          </div>
          <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-12">
            Developed with <span className="inline-block animate-bounce px-1">❤️</span> by Vishmitha Poojary
          </p>
        </div>
      </div>
      <Image
        src="/footer-curve.svg"
        className="w-full rotate-180 absolute bottom-[-1px] left-0 right-0 z-20 object-cover min-h-[50px]"
        alt="footer curve"
        width={1920}
        height={180}
      />
    </footer>
  );
}
