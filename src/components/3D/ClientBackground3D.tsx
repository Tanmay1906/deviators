"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ThreeErrorBoundary from "./ThreeErrorBoundary";
import NoSSR from "./NoSSR";
import FallbackBackground from "./FallbackBackground";

// Dynamically import the 3D component to prevent SSR issues
const Background3DDynamic = dynamic(() => import("./Background3D"), {
  ssr: false,
  loading: () => null,
});

interface ClientBackground3DProps {
  className?: string;
}

export default function ClientBackground3D({
  className,
}: ClientBackground3DProps) {
  const [use3D, setUse3D] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Detect WebGL support
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        console.warn("WebGL not supported, using fallback background");
        setUse3D(false);
      }
    } catch {
      console.warn("WebGL detection failed, using fallback background");
      setUse3D(false);
    }
  }, []);

  // Handle 3D errors
  const handleError = () => {
    console.warn("3D background failed, switching to fallback");
    setHasError(true);
    setUse3D(false);
  };

  // If 3D is disabled or errored, use fallback
  if (!use3D || hasError) {
    return <FallbackBackground className={className} />;
  }

  return (
    <NoSSR>
      <ThreeErrorBoundary
        fallback={<FallbackBackground className={className} />}
        onError={handleError}
      >
        <Background3DDynamic className={className} />
      </ThreeErrorBoundary>
    </NoSSR>
  );
}
