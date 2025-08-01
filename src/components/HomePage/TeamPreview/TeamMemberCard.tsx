import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  roles?: string[];
  image: string | { src: string };
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  totalMembers: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  index,
  totalMembers,
}) => {
  return (
    <div key={`${member.name}-${index}`} className="group relative">
      {/* Modern Square Card */}
      <div
        className="xs:w-20 xs:h-20 relative mx-auto h-16 w-16 transition-all duration-500 hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        style={{ zIndex: totalMembers - index }}
      >
        {/* Static Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

        {/* Card Container */}
        <div className="absolute inset-0.5 overflow-hidden rounded-xl border border-gray-600 bg-gray-800 transition-all duration-300 group-hover:border-transparent">
          {/* Profile Image */}
          <Image
            src={
              typeof member.image === "string"
                ? member.image
                : member.image?.src
            }
            alt={`${member.name} - ${member.roles?.[0] || "Team Member"}`}
            title={member.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder-avatar.jpg";
            }}
          />

          {/* Hover Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

          {/* Digital Scan Line Effect */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60">
            <div
              className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              style={{
                animation: "scan 2s ease-in-out infinite",
                transform: "translateY(-100%)",
              }}
            ></div>
          </div>

          {/* Corner Accents */}
          <div className="absolute left-1 top-1 h-2 w-2 border-l-2 border-t-2 border-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-3 sm:w-3"></div>
          <div className="absolute right-1 top-1 h-2 w-2 border-r-2 border-t-2 border-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-3 sm:w-3"></div>
          <div className="absolute bottom-1 left-1 h-2 w-2 border-b-2 border-l-2 border-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-3 sm:w-3"></div>
          <div className="absolute bottom-1 right-1 h-2 w-2 border-b-2 border-r-2 border-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-3 sm:w-3"></div>
        </div>

        {/* Floating Info Card */}
        <div className="absolute -bottom-8 left-1/2 z-50 -translate-x-1/2 transform opacity-0 transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-100">
          <div className="min-w-max rounded-lg border border-cyan-400/50 bg-gray-900/95 px-2 py-1 backdrop-blur-sm sm:px-3 sm:py-2">
            <p className="text-[10px] font-medium text-white sm:text-xs">
              {member.name}
            </p>
            <p className="font-mono text-[9px] text-cyan-400 sm:text-xs">
              {member.roles?.[0] || "DEV"}
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-gray-800 bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:-right-1 sm:-top-1 sm:h-4 sm:w-4">
          <div className="h-full w-full rounded-full bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};
