"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface GeometricShapesProps {
  count?: number;
}

export default function GeometricShapes({ count = 50 }: GeometricShapesProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Generate random positions and properties for geometric shapes
  const shapes = useMemo(() => {
    const shapeArray = [];

    for (let i = 0; i < count; i++) {
      shapeArray.push({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.2,
        type: Math.floor(Math.random() * 3), // 0: box, 1: sphere, 2: octahedron
        color: new THREE.Color().setHSL(
          0.6 + Math.random() * 0.2, // Blue-ish hue
          0.7 + Math.random() * 0.3,
          0.4 + Math.random() * 0.4,
        ),
      });
    }

    return shapeArray;
  }, [count]);

  // Animate the group with null checks
  useFrame((state) => {
    if (meshRef.current && state?.clock) {
      const time = state.clock.elapsedTime || 0;
      meshRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.03) * 0.1;
    }
  });

  return (
    <Float speed={0.2} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={meshRef}>
        {shapes.map((shape, index) => (
          <mesh
            key={index}
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 1 && <sphereGeometry args={[0.8, 8, 8]} />}
            {shape.type === 2 && <octahedronGeometry args={[0.8]} />}
            <meshStandardMaterial
              color={shape.color}
              transparent
              opacity={0.1}
              wireframe
              emissive={shape.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
