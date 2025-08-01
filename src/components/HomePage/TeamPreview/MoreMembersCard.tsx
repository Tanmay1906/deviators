import React from "react";

interface MoreMembersCardProps {
  count: number;
}

export const MoreMembersCard: React.FC<MoreMembersCardProps> = ({ count }) => {
  return (
    <div className="group relative">
      <div
        className="xs:w-20 xs:h-20 relative mx-auto h-16 w-16 cursor-pointer transition-all duration-500 hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        role="button"
        aria-label={`${count} more lead members`}
      >
        {/* Terminal Window Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-gray-600 bg-gray-800 transition-all duration-300 group-hover:border-cyan-400"></div>

        {/* Terminal Content */}
        <div className="absolute inset-1 flex flex-col items-center justify-center rounded-lg bg-black font-mono sm:inset-2">
          {/* Terminal Prompt */}
          <div className="xs:text-[9px] mb-0.5 text-[8px] text-green-400 sm:mb-1 sm:text-xs">
            $
          </div>

          {/* Command */}
          <div className="xs:text-[8px] mb-0.5 text-[7px] text-white sm:mb-1 sm:text-xs">
            ls -la
          </div>

          {/* Output */}
          <div className="xs:text-[9px] text-center text-[8px] text-cyan-400 sm:text-xs">
            <div>+{count}</div>
            <div className="xs:text-[7px] text-[6px] text-gray-400 sm:text-[10px]">
              more
            </div>
          </div>

          {/* Cursor Blink */}
          <div className="xs:text-[9px] mt-0.5 text-[8px] text-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:mt-1 sm:text-xs">
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};
