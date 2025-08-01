"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ParticleField from "./ParticleField";
import GeometricShapes from "./GeometricShapes";

/**
 * Test component for debugging 3D elements
 * Use this component to test individual 3D elements in isolation
 */
export default function Test3D() {
  return (
    <div className="fixed inset-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Debug Controls */}
        <OrbitControls enablePan enableZoom enableRotate />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {/* Environment */}
        <Environment preset="city" background={false} />

        {/* Test Elements */}
        <ParticleField count={100} />
        <GeometricShapes count={10} />

        {/* Reference Grid */}
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
      </Canvas>

      {/* Debug Info */}
      <div className="absolute left-4 top-4 rounded bg-black/50 p-4 font-mono text-sm text-white">
        <h3 className="mb-2 text-green-400">3D Debug Mode</h3>
        <p>• Use mouse to orbit around scene</p>
        <p>• Scroll to zoom in/out</p>
        <p>• Particles: 100 (reduced for testing)</p>
        <p>• Shapes: 10 (reduced for testing)</p>
      </div>
    </div>
  );
}
