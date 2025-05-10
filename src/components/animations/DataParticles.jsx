import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";

export default function DataParticles() {
  const pointsRef = useRef();

  const particles = Array.from({ length: 5000 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
  }));

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Points ref={pointsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={particles.length}
            array={new Float32Array(particles.flatMap((p) => p.position))}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          attach="material"
          size={0.02}
          color="#9333EA"
          transparent
        />
      </Points>
    </Canvas>
  );
}
