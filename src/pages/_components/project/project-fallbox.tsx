// import {
//   Bodies,
//   Composite,
//   Engine,
//   Runner,
// } from "matter-js";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Runner = Matter.Runner;
const engine = Engine.create();
const runner = Runner.create();
Runner.run(runner, engine);

interface Circle {
  x: number;
  y: number;
}

export function FallboxExample() {
  const ref = useRef<HTMLDivElement>(null);
  const dots = useRef<Circle[]>([]);
  const [, setAnim] = useState(0);

  useEffect(function init() {
    const width = ref.current?.clientWidth ?? 0;
    const height = ref.current?.clientHeight ?? 0;

    const ground = Bodies.rectangle(
      width / 2,
      height,
      width,
      50,
      {
        isStatic: true,
      }
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      0,
      width,
      1,
      {
        isStatic: true,
      }
    );
    const wallL = Bodies.rectangle(
      0,
      height / 2,
      1,
      height,
      {
        isStatic: true,
      }
    );
    const wallR = Bodies.rectangle(
      width,
      height / 2,
      50,
      height,
      {
        isStatic: true,
      }
    );

    Composite.add(engine.world, [
      ground,
      ceiling,
      wallL,
      wallR,
    ]);
  }, []);

  useEffect(() => {
    let unsubscribe: any;

    function addDot() {
      const width = ref.current?.clientWidth ?? 0;
      const height = ref.current?.clientHeight ?? 0;

      const circ = Bodies.circle(
        Math.random() * width * 0.75 + 50,
        Math.random() * height * 0.75 + 50,
        25
      );
      circ.friction = 0.05;
      circ.frictionAir = 0.00005;
      circ.restitution = 0.9;

      Composite.add(engine.world, circ);

      if (dots.current.length < 100)
        setTimeout(addDot, 300);
    }

    addDot();

    return () => {
      clearTimeout(unsubscribe);
    };
  }, []);

  useEffect(function triggerAnimation() {
    let unsubscribe: number;

    function animate() {
      let i = 0;
      for (const dot of Composite.allBodies(engine.world)) {
        if (dot.isStatic) continue;
        dots.current[i] = {
          x: dot.position.x,
          y: dot.position.y,
        };
        i += 1;
      }
      setAnim((x) => x + 1);
      unsubscribe = requestAnimationFrame(animate);
    }

    unsubscribe = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(unsubscribe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-screen h-screen relative bg-gray-500"
    >
      {dots.current.map((dot, key) => (
        <div
          key={key}
          className="bg-yellow-500 rounded-full shadow-md absolute w-12 h-12"
          style={{ top: dot.y, left: dot.x }}
        />
      ))}
    </div>
  );
}
