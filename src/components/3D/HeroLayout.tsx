"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroLayout({
  children,
  className = "",
}: HeroLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`relative min-h-screen ${className}`}
    >
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>

      {/* Additional visual elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 71, 171, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 71, 171, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Subtle glow effects */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </motion.div>
  );
}
