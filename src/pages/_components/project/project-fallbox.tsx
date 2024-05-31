import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import * as Matter from "matter-js";

gsap.registerPlugin(ScrollTrigger);
let triggered = false;

export const FallboxExample = () => {
  const textRef = useRef(null);

  const splitWords = () => {
    const textNode = textRef.current;
    const text = textNode.textContent;
    const newDomElements = text.split(" ").map((text) => {
      const highlighted =
        text.startsWith('"30under30"') ||
        text.startsWith("CTO") ||
        text.startsWith("Mythrill");
      return `<span  className="word absolute text-green-200 text-2xl cursor-grab ${
        highlighted ? "font-bold text-black" : ""
      }">${text}</span>`;
    });
    textNode.innerHTML = newDomElements.join("");
  };

  const renderCanvas = () => {
    const canvasSize = {
      width: textRef.current?.offsetWidth,
      height: textRef.current?.offsetHeight,
    };

    // Initialize Matter.js engine
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: textRef.current,
      engine: engine,
      options: {
        width: canvasSize.width,
        height: canvasSize.height,
        background: "transparent",
        wireframes: false,
      },
    });

    // Create the floor, walls, and top boundaries of the canvas
    const floor = Matter.Bodies.rectangle(
      canvasSize.width / 2,
      canvasSize.height,
      canvasSize.width,
      50,
      { isStatic: true }
    );
    const wall1 = Matter.Bodies.rectangle(
      0,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      { isStatic: true }
    );
    const wall2 = Matter.Bodies.rectangle(
      canvasSize.width,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      { isStatic: true }
    );
    const top = Matter.Bodies.rectangle(
      canvasSize.width / 2,
      0,
      canvasSize.width,
      50,
      { isStatic: true }
    );

    // Collect the word elements and create Matter.js bodies for each word
    const wordElements =
      textRef.current.querySelectorAll(".word");

    const wordBodies = Array.from(wordElements).map(
      (elem) => {
        const width = elem.offsetWidth;
        const height = elem.offsetHeight;
        return {
          body: Matter.Bodies.rectangle(
            canvasSize.width / 2,
            canvasSize.height / 4,
            width,
            height,
            { isStatic: false }
          ),
          elem: elem,
          render() {
            const { x, y } = this.body.position;
            this.elem.style.top = `${y - 20}px`;
            this.elem.style.left = `${x - width / 2}px`;
            this.elem.style.transform = `rotate(${this.body.angle}rad)`;
          },
        };
      }
    );

    console.log(wordBodies, wordElements);

    // Create mouse and mouse constraint for interactions
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(
      engine,
      {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      }
    );

    // Add all the bodies to the world and start the engine
    Matter.World.add(engine.world, [
      floor,
      ...wordBodies.map((body) => body.body),
      wall1,
      wall2,
      top,
      mouseConstraint,
    ]);
    Matter.Render.run(render);

    // Animation loop to update word positions and Matter.js engine

    // Setup GSAP ScrollTrigger
    ScrollTrigger.create({
      // trigger: triggerElement,
      // start: "50% 50%",

      trigger: "#inner",
      start: "top+=0% top+=20%",

      //end: "+=25%",
      markers: true,
      toggleActions: "play restart play reverse",

      onEnter() {
        console.log("enter");
        if (!triggered) {
          triggered = true;

          Matter.Runner.run(engine);
          Matter.Render.run(render);

          // Animation loop to update word positions and Matter.js engine
          (function rerender() {
            wordBodies.forEach((element) => {
              console.log("wordBodies");
              element.render();
            });
            Matter.Engine.update(engine);
            requestAnimationFrame(rerender);
          })();
        }
      },
    });
  };

  useEffect(() => {
    splitWords();
    renderCanvas();

    // window.addEventListener("DOMContentLoaded", () => {
    //   splitWords();
    //   renderCanvas();
    // });

    // return () => {
    //   window.removeEventListener(
    //     "DOMContentLoaded",
    //     splitWords
    //   );
    //   window.removeEventListener(
    //     "DOMContentLoaded",
    //     renderCanvas
    //   );
    // };
  }, []);

  return (
    <div className=" h-[140vh] border-4 overflow-hidden">
      <div className="  h-[40vh] bg-green-200"></div>
      <div
        id="inner"
        className=" h-[80vh] relative flex flex-col"
      >
        <div ref={textRef} className="h-full w-full p-4">
          software developer with over 9 years of
          experience, I have developed a strong foundation
          in crafting innovative and efficient technology
          solutions. My passion for technology and
          entrepreneurship led me to co-found Mythrill,
          where I currently serve as the CTO. I am proud to
          be recognized as one of the "30under30" Armenians
          in Tech and am constantly driven to push
          boundaries and make a positive impact in the
          industry. When I'm not coding, I enjoy exploring
          my creative side through art, music, and nature
        </div>
      </div>
      <div className="space bottom h-[40vh] bg-green-200"></div>
    </div>
  );
};

interface Circle {
  x: number;
  y: number;
}

export function FallboxExample2() {
  const ref = useRef<HTMLDivElement>(null);
  const dots = useRef<Circle[]>([]);
  const [, setAnim] = useState(0);

  const engine = Matter.Engine.create();
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  useEffect(function init() {
    const width = ref.current?.clientWidth ?? 0;
    const height = ref.current?.clientHeight ?? 0;

    const ground = Matter.Bodies.rectangle(
      width / 2,
      height,
      width,
      50,
      {
        isStatic: true,
      }
    );
    const ceiling = Matter.Bodies.rectangle(
      width / 2,
      0,
      width,
      1,
      {
        isStatic: true,
      }
    );
    const wallL = Matter.Bodies.rectangle(
      0,
      height / 2,
      1,
      height,
      {
        isStatic: true,
      }
    );
    const wallR = Matter.Bodies.rectangle(
      width,
      height / 2,
      50,
      height,
      {
        isStatic: true,
      }
    );

    Matter.Composite.add(engine.world, [
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

      const circ = Matter.Bodies.circle(
        Math.random() * width * 0.75 + 50,
        Math.random() * height * 0.75 + 50,
        25
      );
      circ.friction = 0.05;
      circ.frictionAir = 0.00005;
      circ.restitution = 0.9;

      Matter.Composite.add(engine.world, circ);

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
      for (const dot of Matter.Composite.allBodies(
        engine.world
      )) {
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
