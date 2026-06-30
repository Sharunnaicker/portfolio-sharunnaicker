'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const SHAPE_COUNT = 10;

interface ShapeConfig {
  id: number;
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  floatAmplitude: number;
  floatPhase: number;
  colorIndex: number;
  geoType: number;
  scale: number;
}

function useShapeConfigs(): ShapeConfig[] {
  return useMemo(() => {
    const rng = (min: number, max: number) => min + Math.random() * (max - min);
    return Array.from({ length: SHAPE_COUNT }, (_, i) => ({
      id: i,
      position: [rng(-7, 7), rng(-4, 4), rng(-3, 1)] as [number, number, number],
      rotationSpeed: [rng(-0.008, 0.008), rng(-0.008, 0.008), rng(-0.004, 0.004)],
      floatSpeed: rng(0.25, 0.6),
      floatAmplitude: rng(0.15, 0.35),
      floatPhase: rng(0, Math.PI * 2),
      colorIndex: i % 3,
      geoType: i % 4,
      scale: rng(0.28, 0.55),
    }));
  }, []);
}

function Shape({
  config,
  mouseRef,
  isMenuOpen,
  colors,
}: {
  config: ShapeConfig;
  mouseRef: React.RefObject<[number, number]>;
  isMenuOpen: boolean;
  colors: string[];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const clock = useRef(Math.random() * 100);
  const currentPos = useRef(new THREE.Vector3(...config.position));
  const targetPos = useRef(new THREE.Vector3(...config.position));

  const geometry = useMemo(() => {
    switch (config.geoType) {
      case 0: return new THREE.IcosahedronGeometry(1, 0);
      case 1: return new THREE.OctahedronGeometry(1, 0);
      case 2: return new THREE.TetrahedronGeometry(1, 0);
      default: return new THREE.DodecahedronGeometry(1, 0);
    }
  }, [config.geoType]);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    clock.current += delta;

    meshRef.current.rotation.x += config.rotationSpeed[0];
    meshRef.current.rotation.y += config.rotationSpeed[1];
    meshRef.current.rotation.z += config.rotationSpeed[2];

    const [mx, my] = mouseRef.current ?? [0, 0];
    const depth = 1 + config.position[2] * 0.15;
    const floatY = Math.sin(clock.current * config.floatSpeed + config.floatPhase) * config.floatAmplitude;

    if (isMenuOpen) {
      const angle = (config.id / SHAPE_COUNT) * Math.PI * 2;
      targetPos.current.set(Math.cos(angle) * 9, Math.sin(angle) * 6, config.position[2]);
    } else {
      targetPos.current.set(
        config.position[0] + mx * 0.6 * depth,
        config.position[1] + floatY - my * 0.35 * depth,
        config.position[2]
      );
    }

    currentPos.current.lerp(targetPos.current, isMenuOpen ? 0.04 : 0.03);
    meshRef.current.position.copy(currentPos.current);
  });

  return (
    <mesh ref={meshRef} scale={config.scale} geometry={geometry}>
      <meshBasicMaterial color={colors[config.colorIndex]} wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function Scene({ isMenuOpen, darkMode }: { isMenuOpen: boolean; darkMode: boolean }) {
  const mouseRef = useRef<[number, number]>([0, 0]);
  const configs = useShapeConfigs();
  const { gl } = useThree();

  const colors = darkMode
    ? ['#7b6cf6', '#4ecdc4', '#ff6b9d']
    : ['#5b4cd4', '#2ea8a0', '#e0508a'];

  useEffect(() => {
    void gl;
    const onMove = (e: MouseEvent) => {
      mouseRef.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2,
      ];
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [gl]);

  return (
    <>
      {configs.map((cfg) => (
        <Shape
          key={cfg.id}
          config={cfg}
          mouseRef={mouseRef}
          isMenuOpen={isMenuOpen}
          colors={colors}
        />
      ))}
    </>
  );
}

export default function ShapesCanvas({ isMenuOpen }: { isMenuOpen: boolean }) {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme !== 'light';

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene isMenuOpen={isMenuOpen} darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
