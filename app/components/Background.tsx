import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
export const Background = ({ label }: { label: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef =
    useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>>();
  const torusRef =
    useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>>();
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    camera.position.x = 0;
    camera.position.y = 0;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, -1);
    rendererRef.current = renderer;

    // Create cube
    // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    // const material = new THREE.MeshBasicMaterial({
    //   color: "red",
    // });
    // const cube = new THREE.Mesh(geometry, material);
    // cubeRef.current = cube;
    // scene.add(cube);

    // Add text
    // const fontLoader = new FontLoader();
    // // fontLoader.load("fonts/helvetiker_regular.typeface.json", (font) => {
    // const textGeometry = new TextGeometry("Hello, World!", {
    //   size: 1,
    //   height: 1,
    // });
    // const textMaterial = new THREE.MeshBasicMaterial({ color: "white" });
    // const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    // textMesh.position.set(0, 0, 0);
    // cube.attach(textMesh);
    // scene.add(cube);
    // });

    const torusGeometry = new THREE.TorusGeometry(1, 0.2, 16, 100);

    // Create the material with the texture
    const torusMaterial = new THREE.PointsMaterial({
      color: "#BDFFFE",
      size: 0.01,
    });
    const particleMaterial = new THREE.PointsMaterial({
      color: "#BDFFFE",
      size: 0.005,
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    // Create the mesh with the geometry and material
    const torus = new THREE.Points(torusGeometry, torusMaterial);

    torusRef.current = torus;
    // Add the torus to the scene
    const particlesMesh = new THREE.Points(particlesGeometry, torusMaterial);
    scene.add(torus, particlesMesh);

    // Add renderer to container
    const container = containerRef.current;
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.y += 0.001;
      torus.rotation.x += 0.001;
      // Render scene with camera
      if (scene && camera && renderer) {
        renderer.render(scene, camera);
      }
    };

    // Start animation loop
    animate();

    // Clean up
    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed bg-gradient-to-bl">
      <div className="fixed -z-0 md:text-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-800 dark:bg-gradient-to-r dark:from-indigo-800 dark:to-cyan-800 inline-block text-transparent bg-clip-text font-extrabold opacity-50">
        {label}
      </div>
    </div>
  );
};
// export const Background = ({ label }: { label: string }) => {
//   return (
//     <div className="fixed -z-0 md:text-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-800 dark:bg-gradient-to-r dark:from-indigo-800 dark:to-cyan-800 inline-block text-transparent bg-clip-text font-extrabold opacity-30">
//       {label}
//     </div>
//   );
// };
