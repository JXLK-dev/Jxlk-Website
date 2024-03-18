import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Sphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef =
    useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>>();

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/path/to/world-map-texture.jpg");

    // Create the sphere geometry
    
    const container = containerRef.current;
    if (container) {
      container.appendChild(renderer.domElement);
    }
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.y += 0.01;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      if (container && renderer) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};
