"use client";

import React from "react";
import Link from "next/link";
import team from "@/data/team";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TeamPreview() {
  const [visibleMembers, setVisibleMembers] = useState(4);
  const totalMembers = team.length;

  useEffect(() => {
    const updateVisibleMembers = () => {
      if (window.innerWidth < 640) {
        setVisibleMembers(3);
      } else if (window.innerWidth < 1024) {
        setVisibleMembers(5);
      } else {
        setVisibleMembers(8);
      }
    };

    updateVisibleMembers();

    window.addEventListener("resize", updateVisibleMembers);

    return () => window.removeEventListener("resize", updateVisibleMembers);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 sm:space-y-8">
          <div>
            <h2
              className="text-white-400 font-pixelify text-3xl font-bold sm:text-5xl"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              Our Team
            </h2>
            <p className="mt-1 text-base text-gray-400 sm:mt-2 sm:text-lg">
              Meet the innovators behind Deviators Club
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="xs:-space-x-6 flex flex-wrap -space-x-4 sm:flex-nowrap sm:-space-x-8">
              {team
                .sort(() => Math.random() - 0.5)
                .slice(0, visibleMembers)
                .map((member, index) => (
                  <div
                    key={index}
                    className="xs:h-20 xs:w-20 relative h-16 w-16 transition-all duration-300 hover:z-10 hover:scale-110 sm:h-24 sm:w-24"
                    style={{ zIndex: team.length - index }}
                  >
                    <img
                      src={member.image.src}
                      alt={member.name}
                      title={member.name}
                      className="sm:border-3 size-full rounded-full border-2 border-black object-cover shadow-lg ring-2 ring-white sm:ring-2"
                    />
                    <div className="xs:block absolute -bottom-1 left-1/2 hidden -translate-x-1/2">
                      <span className="xs:px-2 xs:py-1 xs:text-xs bg-black-500/90 whitespace-nowrap rounded-full px-1.5 py-0.5 text-[10px] font-medium text-white">
                        {member.roles[0]}
                      </span>
                    </div>
                  </div>
                ))}
              {totalMembers > visibleMembers && (
                <div
                  className="xs:h-20 xs:w-20 xs:text-xl bg-black-500/20 text-black-300 relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0047AB] text-base font-bold shadow-lg transition-all duration-300 hover:scale-110 sm:h-24 sm:w-24 sm:border-2"
                  style={{ zIndex: 0 }}
                >
                  +{totalMembers - visibleMembers}
                </div>
              )}
            </div>
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-all duration-300 hover:gap-3 hover:bg-[#0047AB] sm:text-base"
            >
              <span className="xs:inline hidden">View All Team Members</span>
              <span className="xs:hidden">View All</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
