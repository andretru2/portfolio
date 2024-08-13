import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./canvas-loader";
import { Rings } from "../3d/Rings";

export function RingsCanvas() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Rings />
      </Suspense>
    </Canvas>
  );
}
