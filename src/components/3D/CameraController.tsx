"use client";

import { useFrame, useThree } from "@react-three/fiber";

export default function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    if (!state?.clock || !camera) return;

    const time = state.clock.elapsedTime || 0;

    // Smooth orbital camera movement
    const radius = 12;
    const x = Math.sin(time * 0.1) * radius * 0.3;
    const z = Math.cos(time * 0.1) * radius;
    const y = Math.sin(time * 0.05) * 2;

    // Update camera position safely
    if (camera.position) {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;

      // Always look at center
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}
