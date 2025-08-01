"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
}

export default function ParticleField({ count = 1000 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }

    return positions;
  }, [count]);

  // Generate random colors (different shades of blue)
  const particlesColor = useMemo(() => {
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const blueShade = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
      colors[i * 3 + 0] = 0.1; // r
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.4; // g
      colors[i * 3 + 2] = blueShade; // b
    }

    return colors;
  }, [count]);

  // Animate particles with null checks
  useFrame((state) => {
    if (meshRef.current && state?.clock) {
      const time = state.clock.elapsedTime || 0;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.05) * 0.1;
      meshRef.current.rotation.z = Math.sin(time * 0.08) * 0.05;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
      <Points ref={meshRef} positions={particlesPosition}>
        <PointMaterial
          transparent
          vertexColors
          size={0.8}
          sizeAttenuation={true}
          opacity={0.6}
          alphaTest={0.01}
        />
        <bufferAttribute attach="attributes-color" args={[particlesColor, 3]} />
      </Points>
    </Float>
  );
}
