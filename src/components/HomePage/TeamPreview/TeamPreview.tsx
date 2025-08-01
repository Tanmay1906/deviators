"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTeamData } from "../../../hooks/useTeamData";
import { TeamHeader } from "./TeamHeader";
import { TeamMemberCard } from "./TeamMemberCard";
import { MoreMembersCard } from "./MoreMembersCard";
import "./TeamPreview.css";

export default function TeamPreview() {
  const { displayedMembers, totalMembers, visibleMembers } = useTeamData();

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header Section */}
        <TeamHeader />

        {/* Terminal Container */}
        <div className="relative">
          <div className="rounded-lg border border-cyan-500/30 bg-gray-900/80 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between rounded-t-lg border-b border-cyan-500/20 bg-gray-800/50 px-3 py-2 sm:px-4 sm:py-3">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
              </div>
              <div className="font-mono text-[10px] text-gray-400 sm:text-xs">
                team@deviators:~
              </div>
              <div className="w-12 sm:w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
              {/* Terminal Command Line */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center font-mono text-xs text-gray-300 sm:text-sm">
                  <span className="text-green-400">deviators@localhost:</span>
                  <span className="text-blue-400">~/team$</span>
                  <span className="ml-1 sm:ml-2">show --leads --active</span>
                  <span className="ml-1 animate-pulse sm:ml-2">_</span>
                </div>
              </div>

              {/* Team Grid */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:flex-row xl:items-center xl:justify-between">
                {/* Members Display */}
                <div className="flex-1">
                  <div className="xs:grid-cols-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-4 xl:grid-cols-8 2xl:grid-cols-10">
                    {displayedMembers.map((member, index) => (
                      <TeamMemberCard
                        key={`${member.name}-${index}`}
                        member={member}
                        index={index}
                        totalMembers={displayedMembers.length}
                      />
                    ))}

                    {totalMembers > visibleMembers && (
                      <MoreMembersCard count={totalMembers - visibleMembers} />
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="xl:ml-8">
                  <Link
                    href="/team"
                    className="group relative z-50 inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-gray-900/50 px-4 py-3 font-mono text-xs text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 sm:gap-3 sm:px-6 sm:py-4 sm:text-sm"
                    aria-label="View all team members page"
                  >
                    {/* Button Background Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <span className="relative">
                      <span className="hidden sm:inline">
                        ./view_all_team.sh
                      </span>
                      <span className="sm:hidden">./team.sh</span>
                    </span>

                    <ArrowRightIcon className="relative h-3 w-3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:h-4 sm:w-4" />

                    {/* Static Scanning Line Effect */}
                    <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
