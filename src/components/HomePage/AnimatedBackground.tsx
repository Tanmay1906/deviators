"use client";

import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

// Pre-generate particle positions to avoid hydration issues
const LARGE_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDuration: 8 + Math.floor(Math.random() * 4),
  animationDelay: Math.floor(Math.random() * 10),
}));

const SMALL_PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDuration: 5 + Math.floor(Math.random() * 3),
  animationDelay: Math.floor(Math.random() * 15),
}));

const SHAPES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 90) + 5,
  top: Math.floor(Math.random() * 90) + 5,
  width: 20 + Math.floor(Math.random() * 40),
  height: 20 + Math.floor(Math.random() * 40),
  animationDuration: 20 + Math.floor(Math.random() * 10),
  animationDelay: Math.floor(Math.random() * 20),
  rotation: Math.floor(Math.random() * 360),
}));

/**
 * Pure CSS animated background - no 3D dependencies
 * Professional tech club aesthetic with floating particles
 */
export default function AnimatedBackground({
  className = "fixed inset-0 z-0",
}: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Static grid overlay that's safe for SSR */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Only show animations after mount to prevent hydration issues */}
      {mounted && (
        <>
          {/* Animated particles using CSS */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large particles */}
            {LARGE_PARTICLES.map((particle) => (
              <div
                key={particle.id}
                className="absolute h-1 w-1 rounded-full bg-blue-400 opacity-60"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float-slow ${particle.animationDuration}s ease-in-out infinite`,
                  animationDelay: `${particle.animationDelay}s`,
                }}
              />
            ))}

            {/* Small particles */}
            {SMALL_PARTICLES.map((particle) => (
              <div
                key={`small-${particle.id}`}
                className="absolute h-0.5 w-0.5 rounded-full bg-blue-300 opacity-40"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float-fast ${particle.animationDuration}s ease-in-out infinite`,
                  animationDelay: `${particle.animationDelay}s`,
                }}
              />
            ))}
          </div>

          {/* Geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {SHAPES.map((shape) => (
              <div
                key={`shape-${shape.id}`}
                className="absolute border border-blue-500/20"
                style={{
                  left: `${shape.left}%`,
                  top: `${shape.top}%`,
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  animation: `spin-slow ${shape.animationDuration}s linear infinite`,
                  animationDelay: `${shape.animationDelay}s`,
                  transform: `rotate(${shape.rotation}deg)`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Static glow effects - only animate after mount */}
      {mounted && (
        <>
          <div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
            style={{
              animation: "pulse-slow 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"
            style={{
              animation: "pulse-slow 8s ease-in-out infinite",
              animationDelay: "4s",
            }}
          />
        </>
      )}
    </div>
  );
}
