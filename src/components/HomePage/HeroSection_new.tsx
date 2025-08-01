"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activities } from "@/data/heroSection";
import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % activities.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <>
      {/* 3D Background */}
      <ClientBackground3D />

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-10 text-white"
      >
        <div
          className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-full border border-[#0047AB] bg-[#0047AB] px-4 py-1">
                  <span className="text-black-400 text-sm sm:text-base">
                    Code. Create. Deviate.
                  </span>
                </div>
                <h1
                  className="bg-white bg-clip-text font-pixelify text-4xl font-black text-transparent sm:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Deviators Club
                </h1>
                <p className="max-w-xl text-xl text-gray-300 sm:text-2xl">
                  Welcome to Deviators – The coolest tech haven on the campus!
                </p>
                <p className="max-w-xl text-xl text-gray-400 sm:text-xl">
                  Whether you&apos;re a newbie or seasoned coder, we provide a
                  platform full of innovation, learnings, and fun. Let&apos;s
                  build and push the boundaries of what&apos;s possible
                  together!
                </p>
              </motion.div>
            </div>

            {/* Right Content - Activity Showcase */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                {activities.map(
                  (activity, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={activity.title}
                        className="absolute inset-0 rounded-2xl bg-black/60 p-6 backdrop-blur-md sm:p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="inline-flex rounded-xl bg-[#0047AB] p-4">
                          <activity.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3
                          className="mt-4 font-pixelify text-xl font-bold sm:text-3xl"
                          style={{
                            textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          {activity.title}
                        </h3>
                        <p className="text-md sm:text-md mt-2 text-gray-400">
                          {activity.description}
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="text-white-300 rounded-full bg-[#0047AB] px-3 py-1 text-sm">
                            {activity.stats}
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 text-gray-500">
                          {index + 1}/{activities.length}
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {activities.map((_, index) => (
                  <motion.button
                    name="activity"
                    title="Activity"
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      index === activeIndex
                        ? "bg-[#0047AB]"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
