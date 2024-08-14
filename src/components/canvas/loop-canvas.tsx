import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./canvas-loader";
import { Loop } from "../3d/Loop";

export function LoopCanvas() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Loop />
      </Suspense>
    </Canvas>
  );
}
