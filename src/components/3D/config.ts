import * as THREE from "three";

export const PERFORMANCE_CONFIG = {
  // Canvas settings
  dpr: [1, 2] as [number, number],
  antialias: false,
  alpha: true,
  powerPreference: "high-performance" as const,

  // Render settings
  shadowMap: false,
  toneMapping: THREE.ACESFilmicToneMapping,
  toneMappingExposure: 1.2,

  // Animation settings
  frameloop: "demand" as const,

  // Particle settings
  particleCount: 800,
  geometricShapeCount: 30,

  // Camera settings
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: [0, 0, 10] as [number, number, number],
  },

  // Animation speeds
  animationSpeeds: {
    particles: {
      rotation: 0.1,
      float: 0.5,
    },
    camera: {
      orbit: 0.1,
      vertical: 0.05,
    },
    geometry: {
      rotation: 0.05,
      float: 0.2,
    },
  },

  // Colors
  colors: {
    clearColor: "#000000",
    clearAlpha: 0,
    ambientLight: "#4A90E2",
    pointLight1: "#ffffff",
    pointLight2: "#0047AB",
  },
};

export const RESPONSIVE_CONFIG = {
  // Reduce particles on mobile
  mobile: {
    particleCount: 400,
    geometricShapeCount: 15,
    dpr: [1, 1.5] as [number, number],
  },

  // Standard config for desktop
  desktop: {
    particleCount: 800,
    geometricShapeCount: 30,
    dpr: [1, 2] as [number, number],
  },
};

// Utility function to detect mobile
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

// Get configuration based on device
export const getDeviceConfig = () => {
  return isMobile() ? RESPONSIVE_CONFIG.mobile : RESPONSIVE_CONFIG.desktop;
};
