'use client';
import { useEffect, useState } from 'react';

export function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring - uses CSS transform directly for instant response */}
      <div
        className="fixed pointer-events-none z-[9999] w-10 h-10 rounded-full border border-indigo-400/40 mix-blend-difference"
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
          transition: 'left 0.08s linear, top 0.08s linear',
        }}
      />
      {/* Inner dot - instant */}
      <div
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-indigo-500"
        style={{
          left: pos.x - 3,
          top: pos.y - 3,
        }}
      />
    </>
  );
}
