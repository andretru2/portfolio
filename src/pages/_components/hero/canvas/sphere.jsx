import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import {
  Html,
  Icosahedron,
  useTexture,
  useCubeTexture,
  MeshDistortMaterial,
} from "@react-three/drei";

import { motion } from "framer-motion-3d";
// import { useThree } from "@react-three/fiber";

function MainSphere({ material }) {
  const main = useRef();
  const [color, setColor] = useState({
    h: 206.34, // Initial HSL hue
    s: 100, // Initial HSL saturation
    l: 22, // Initial HSL lightness
  });
  const [prevTime, setPrevTime] = useState(null);
  const duration = 3; // Transition duration in seconds

  useFrame(({ clock, mouse }) => {
    if (!prevTime) {
      setPrevTime(clock.getElapsedTime());
    }

    const elapsedTime = clock.getElapsedTime() - prevTime;
    const lerpFactor = Math.min(elapsedTime / duration, 1);

    // const targetColor = { h: 159.72, s: 100, l: 44 }; // Target HSL color
    const targetColor = { h: 147.72, s: 100, l: 37 }; // Target HSL color

    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * Math.PI,
      0.1
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * Math.PI,
      0.1
    );

    const newColor = {
      h: THREE.MathUtils.lerp(
        color.h,
        targetColor.h,
        lerpFactor
      ),
      s: THREE.MathUtils.lerp(
        color.s,
        targetColor.s,
        lerpFactor
      ),
      l: THREE.MathUtils.lerp(
        color.l,
        targetColor.l,
        lerpFactor
      ),
    };

    // if (main.current) {
    //   main.current.material.color.setHSL(
    //     newColor.h / 360,
    //     newColor.s / 100,
    //     newColor.l / 100
    //   );
    // }

    if (elapsedTime >= duration) {
      setPrevTime(null);
    }
  });

  return (
    <motion.mesh
      initial={
        {
          // y: -1,
        }
      }
      animate={{
        y: 0.4,
        x: [0.7, 0.4, 0.7],
        // scale: [1, 1.2, 1],
        scale: [1, 1.4, 1],
        // zIndex: [-10, 10, -10],
        // rotateY: Math.PI * 2,
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        loop: Infinity,
        repeatDelay: 0,
      }}
    >
      <Icosahedron
        ref={main}
        args={[1, 6]}
        material={material}
        position={[-1, 0, 0]}
      />
    </motion.mesh>
  );
}

function Instances({ material }) {
  // we use this array ref to store the spheres after creating them
  const [sphereRefs] = useState(() => []);
  // we use this array to initialize the background spheres
  const initialPositions = [
    [-4, 20, -12],
    [-10, 12, -4],
    [-11, -12, -23],
    [-16, -6, -10],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20],
  ];
  // smaller spheres movement
  // useFrame(() => {
  //   // animate each sphere in the array
  //   sphereRefs.forEach((el) => {
  //     el.position.x += 0.02;
  //     if (el.position.x > 19) el.position.x = -18;
  //     el.rotation.y += 0.06;
  //     el.rotation.x += 0.06;
  //     el.rotation.z += 0.02;
  //   });
  // });

  useFrame(() => {
    // animate each sphere in the array
    sphereRefs.forEach((el) => {
      el.position.x += 0.02;
      if (el.position.x > 19) el.position.x = -18;
      el.rotation.y += 0.06;
      el.rotation.x += 0.06;
      el.rotation.z += 0.02;
    });
  });
  return (
    <>
      <MainSphere material={material} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  );
}

function Scene() {
  const bumpMap = useTexture("/bump.jpg");
  const envMap = useCubeTexture(
    [
      "px.png",
      "nx.png",
      "py.png",
      "ny.png",
      "pz.png",
      "nz.png",
    ],
    { path: "/cube/" }
  );
  // We use `useResource` to be able to delay rendering the spheres until the material is ready
  const [material, set] = useState();

  return (
    <>
      <MeshDistortMaterial
        ref={set}
        envMap={envMap}
        bumpMap={bumpMap}
        color={"#010101"}
        // color={"#004072"}
        // color={"#9ab2d3"}
        roughness={0.1}
        // roughness={0.6}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={0.9}
        // distort={0.9}

        distort={0.4}
      />
      {material && <Instances material={material} />}
    </>
  );
}

export function SphereCanvas() {
  return (
    <Canvas
      // colorManagement
      // className="absolute inset-0 w-full h-full z-0"
      camera={{ position: [0, 0, 3] }}
      gl={{
        powerPreference: "high-performance",
        // alpha: true,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      {/* <color attach="background" args={["#050505"]} /> */}
      {/* <color
        attach="background"
        args={[`hsl(var(--theme-link))`]}
      /> */}
      <fog color="#00e094" attach="fog" near={8} far={30} />
      <Suspense fallback={<Html center>...</Html>}>
        <Scene />
      </Suspense>
      <EffectComposer
        multisampling={0}
        disableNormalPass={true}
      >
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={1.1}
        />
      </EffectComposer>
    </Canvas>
  );
}
