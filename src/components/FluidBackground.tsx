"use client";
import { useEffect, useRef } from 'react';
import webGLFluid from 'webgl-fluid';

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      try {
        webGLFluid(canvasRef.current, {
          IMMEDIATE: true, 
          TRIGGER: 'hover',
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 1,
          VELOCITY_DISSIPATION: 0.2,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.25,
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 10,
          BACK_COLOR: { r: 255, g: 255, b: 255 },
          TRANSPARENT: false,
          BLOOM: false,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.8,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 1.0,
        });
      } catch (e) {
        console.error("Fluid simulation failed to initialize:", e);
      }
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 h-screen w-screen pointer-events-none">
      <canvas 
        ref={canvasRef} 
        id="fluid" 
        className="h-full w-full pointer-events-auto"
      ></canvas>
    </div>
  );
}
