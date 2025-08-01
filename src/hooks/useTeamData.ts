import { useMemo, useCallback, useEffect, useState } from "react";
import team from "@/data/team";

export const useTeamData = () => {
  const [visibleMembers, setVisibleMembers] = useState(4);
  const [mounted, setMounted] = useState(false);

  // Filter and sort leads
  const leadsTeam = useMemo(() => {
    const leads = team.filter((member) =>
      member.roles?.some((role) => role.toLowerCase().includes("lead")),
    );

    return leads.sort((a, b) => {
      const aRole = a.roles?.[0]?.toLowerCase() || "";
      const bRole = b.roles?.[0]?.toLowerCase() || "";

      if (aRole.includes("club lead")) return -1;
      if (bRole.includes("club lead")) return 1;
      if (aRole.includes("co lead")) return -1;
      if (bRole.includes("co lead")) return 1;

      return aRole.localeCompare(bRole);
    });
  }, []);

  // Responsive breakpoint handler
  const updateVisibleMembers = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    if (width < 480) {
      setVisibleMembers(2);
    } else if (width < 640) {
      setVisibleMembers(3);
    } else if (width < 768) {
      setVisibleMembers(4);
    } else if (width < 1024) {
      setVisibleMembers(6);
    } else if (width < 1280) {
      setVisibleMembers(8);
    } else {
      setVisibleMembers(10);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    updateVisibleMembers();

    window.addEventListener("resize", updateVisibleMembers, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleMembers);
  }, [updateVisibleMembers]);

  const displayedMembers = useMemo(() => {
    return leadsTeam.slice(0, visibleMembers);
  }, [leadsTeam, visibleMembers]);

  return {
    leadsTeam,
    displayedMembers,
    totalMembers: leadsTeam.length,
    visibleMembers,
    mounted,
  };
};
