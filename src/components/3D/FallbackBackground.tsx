"use client";

import { useState, useEffect } from "react";

interface FallbackBackgroundProps {
  className?: string;
}

// Pre-generate particle positions to avoid hydration issues
const LARGE_PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDelay: Math.floor(Math.random() * 10),
  animationDuration: 8 + Math.floor(Math.random() * 4),
}));

const SMALL_PARTICLES = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDelay: Math.floor(Math.random() * 15),
  animationDuration: 5 + Math.floor(Math.random() * 3),
}));

const SHAPES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 90) + 5,
  top: Math.floor(Math.random() * 90) + 5,
  width: 20 + Math.floor(Math.random() * 40),
  height: 20 + Math.floor(Math.random() * 40),
  animationDelay: Math.floor(Math.random() * 20),
  animationDuration: 20 + Math.floor(Math.random() * 10),
  rotation: Math.floor(Math.random() * 360),
}));

/**
 * CSS-only animated background fallback when WebGL/3D fails
 * Uses pure CSS animations for particles and geometric shapes
 */
export default function FallbackBackground({
  className = "fixed inset-0 -z-10",
}: FallbackBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated particles using CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large particles */}
        {LARGE_PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="animate-float-slow absolute h-1 w-1 rounded-full bg-blue-400 opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}

        {/* Small particles */}
        {SMALL_PARTICLES.map((particle) => (
          <div
            key={`small-${particle.id}`}
            className="animate-float-fast absolute h-0.5 w-0.5 rounded-full bg-blue-300 opacity-40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {SHAPES.map((shape) => (
          <div
            key={`shape-${shape.id}`}
            className="animate-spin-slow absolute border border-blue-500/20"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              animationDelay: `${shape.animationDelay}s`,
              animationDuration: `${shape.animationDuration}s`,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
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

      {/* Subtle glow effects */}
      <div className="animate-pulse-slow absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div
        className="animate-pulse-slow absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
}
