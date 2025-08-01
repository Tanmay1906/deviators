"use client";

import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ParticleField from "./ParticleField";
import CameraController from "./CameraController";
import GeometricShapes from "./GeometricShapes";
import { PERFORMANCE_CONFIG, getDeviceConfig } from "./config";

interface Background3DProps {
  className?: string;
}

export default function Background3D({
  className = "fixed inset-0 -z-10",
}: Background3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [deviceConfig, setDeviceConfig] = useState(getDeviceConfig());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Prevent hydration errors by ensuring component only renders on client
    if (typeof window === "undefined") return;

    // Small delay to ensure proper initialization
    const timer = setTimeout(() => {
      setIsReady(true);
      setDeviceConfig(getDeviceConfig());
    }, 50);

    // Handle resize events
    const handleResize = () => {
      setDeviceConfig(getDeviceConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Don't render until ready
  if (!isReady) {
    return null;
  }

  return (
    <div className={className}>
      <Canvas
        ref={canvasRef}
        camera={PERFORMANCE_CONFIG.camera}
        dpr={deviceConfig.dpr}
        performance={{ min: 0.5 }}
        frameloop={PERFORMANCE_CONFIG.frameloop}
        gl={{
          antialias: PERFORMANCE_CONFIG.antialias,
          alpha: PERFORMANCE_CONFIG.alpha,
          powerPreference: PERFORMANCE_CONFIG.powerPreference,
        }}
        onCreated={({ gl }) => {
          try {
            // Set transparent background
            gl.setClearColor(
              PERFORMANCE_CONFIG.colors.clearColor,
              PERFORMANCE_CONFIG.colors.clearAlpha,
            );

            // Optimize renderer settings
            gl.shadowMap.enabled = PERFORMANCE_CONFIG.shadowMap;

            // Enable tone mapping for better colors
            gl.toneMapping = PERFORMANCE_CONFIG.toneMapping;
            gl.toneMappingExposure = PERFORMANCE_CONFIG.toneMappingExposure;
          } catch (error) {
            console.warn("3D renderer setup error:", error);
          }
        }}
        onError={(error) => {
          console.warn("3D Canvas error:", error);
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight
            intensity={0.2}
            color={PERFORMANCE_CONFIG.colors.ambientLight}
          />
          <pointLight
            position={[10, 10, 10]}
            intensity={0.3}
            color={PERFORMANCE_CONFIG.colors.pointLight1}
            decay={2}
            distance={50}
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.2}
            color={PERFORMANCE_CONFIG.colors.pointLight2}
            decay={2}
            distance={30}
          />

          {/* Environment for realistic lighting */}
          <Environment preset="city" background={false} />

          {/* 3D Elements */}
          <ParticleField count={deviceConfig.particleCount} />
          <GeometricShapes count={deviceConfig.geometricShapeCount} />

          {/* Camera Animation */}
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}
