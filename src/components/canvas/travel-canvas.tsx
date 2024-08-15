import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./canvas-loader";
import { Travel } from "../3d/Travel";

export function TravelCanvas() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Travel />
      </Suspense>
    </Canvas>
  );
}
