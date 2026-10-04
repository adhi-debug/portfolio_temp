'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-[60] flex justify-end items-center pointer-events-none mix-blend-difference">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto relative z-[60] w-12 h-12 flex flex-col justify-center items-end gap-2 link focus:outline-none group"
          aria-label="Toggle menu"
        >
          <motion.div 
            animate={{ 
              rotate: isOpen ? -45 : 0, 
              y: isOpen ? 10 : 0,
              width: isOpen ? 32 : 32
            }}
            transition={{ duration: 0.3 }}
            className="h-[2px] bg-white origin-center"
            style={{ width: '32px' }}
          />
          <motion.div 
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-[2px] bg-white"
          />
          <motion.div 
            animate={{ 
              rotate: isOpen ? 45 : 0, 
              y: isOpen ? -10 : 0,
              width: isOpen ? 32 : 24
            }}
            transition={{ duration: 0.3 }}
            className="h-[2px] bg-white origin-center group-hover:w-8 transition-all"
            style={{ width: isOpen ? '32px' : '24px' }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] bg-black/90 flex flex-col items-center justify-center pointer-events-auto"
          >
            <ul className="flex flex-col gap-8 text-center">
              {menuItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
                >
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-mono font-bold text-white hover:text-purple-400 transition-all duration-300 link block"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
