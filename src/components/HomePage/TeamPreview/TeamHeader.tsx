import React from "react";

export const TeamHeader: React.FC = () => {
  return (
    <div className="relative mb-8 text-center sm:mb-12 lg:mb-16">
      {/* Glitch Effect Container */}
      <div className="relative inline-block">
        {/* Main Title */}
        <h2 className="xs:text-3xl relative z-50 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text font-pixelify text-2xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="relative">
            OUR_TEAM.EXE
            {/* Glitch overlay */}
            <span
              className="absolute inset-0 text-cyan-400 opacity-70"
              style={{
                animation: "glitch-1 2s infinite linear alternate-reverse",
              }}
            >
              OUR_TEAM.EXE
            </span>
            <span
              className="absolute inset-0 text-purple-400 opacity-70"
              style={{
                animation: "glitch-2 3s infinite linear alternate-reverse",
              }}
            >
              OUR_TEAM.exe
            </span>
          </span>
        </h2>
      </div>

      {/* Subtitle with Typewriter Effect */}
      <div className="relative z-50 mt-3 sm:mt-4 lg:mt-6">
        <p className="font-mono text-sm text-gray-300 sm:text-lg lg:text-xl">
          <span className="text-cyan-400">{">"}</span> Initializing elite
          developer profiles...
        </p>
        <p className="mt-1 font-mono text-xs text-gray-400 sm:mt-2 sm:text-sm lg:text-base">
          <span className="text-green-400">{"$"}</span> cat
          /team/innovators.json | grep &quot;excellence&quot;
        </p>
      </div>
    </div>
  );
};
