import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  type FC,
  type ReactNode,
  Suspense,
  useEffect,
} from "react";

import { Pie } from "@/components/3d/Pie";
import { Stagger } from "@/components/3d/Stagger";
import { Pulse } from "@/components/3d/Pulse";
import { Core } from "@/components/3d/Core";
import { Rubik } from "@/components/3d/Rubik";
import { Coins } from "@/components/3d/Coins";
import CanvasLoader from "@/components/canvas/canvas-loader";

interface Item {
  component: FC;
  title: string;
  description: string[];
}

const items: Item[] = [
  {
    component: Pie,
    title: "Financial Impact",
    description: [
      "Saved hundreds of thousands in software licensing fees",
      "Reduced operational costs through process automation by 40%",
      "Improved cash flow management with real-time financial insights",
    ],
  },
  {
    component: Stagger,
    title: "Operational Efficiency",
    description: [
      "Achieved 99.9% system uptime, ensuring uninterrupted global operations",
      "Reduced order processing time by 60%",
      "Decreased data entry errors by 85%",
      "Increased on-time deliveries by 25%",
      "Reduced inventory levels by 30% through improved forecasting",
    ],
  },
  {
    component: Pulse,
    title: "Environmental Impact",
    description: [
      "DocuSign integration reduced paper usage by 75%, saving approximately 500,000 sheets annually",
      "Lowered carbon footprint by eliminating the need for physical document shipping",
    ],
  },
  {
    component: Core,
    title: "Global Collaboration",
    description: [
      "Unified 100+ staff across 4 countries on a single platform",
      "Improved communication and coordination between departments and international offices",
    ],
  },
  {
    component: Rubik,
    title: "Scalability and Growth",
    description: [
      "Supported BHF's expansion into new markets and product lines",
      "Easily accommodated a 200% increase in transaction volume over 3 years",
    ],
  },
  {
    component: Coins,
    title: "Customer Satisfaction",
    description: [
      "Improved order accuracy led to a 30% reduction in customer complaints",
      "Faster response times to customer inquiries and issues",
      "Increased customer satisfaction ratings by 25%",
    ],
  },
];

const Wrapper = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative rounded-md cursor-pointer bg-white/10 card p-[1px]">
      <View className="flex z-[2] bg-[#171717]  aspect-square  relative rounded-t-md">
        {children}
      </View>

      <div className="relative z-20 flex items-center mt-[1px] justify-between  w-full px-4 py-2 bg-[#171717] rounded-b-md">
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
        <span className="">{name}</span>
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-md opacity-0 group-hover:opacity-100 z-1"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(255, 255, 255, 0.3),transparent 40%)`,
        }}
      ></div>
    </div>
  );
};

export function ImpactGrid() {
  useEffect(() => {
    const cards =
      document.querySelectorAll<HTMLDivElement>(".card");

    const handlePointerMove = (e: PointerEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document
      .querySelector<HTMLDivElement>("[data-grid]")
      ?.addEventListener("pointermove", handlePointerMove);

    return () => {
      document
        .querySelector<HTMLDivElement>("[data-grid]")
        ?.removeEventListener(
          "pointermove",
          handlePointerMove
        );
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#0c0c0c] select-none background">
      <div className="container p-5 pb-20 mx-auto ">
        <div className="relative mt-5 overflow-hidden">
          <div
            className="grid h-full gap-5 overflow-hidden group grid-clos-1 md:grid-cols-2 lg:grid-cols-4 border-4"
            data-grid
          >
            {items.map((item, index) => (
              <Wrapper key={index} name={item.title}>
                <item.component />
              </Wrapper>
            ))}
          </div>

          <div className="fixed top-0 left-0 z-20 w-full h-full pointer-events-none ">
            <Canvas
              camera={{
                zoom: 0.8,
              }}
              className="fixed"
              //   eventSource={document.getElementById("root")!}
            >
              <Suspense fallback={<CanvasLoader />}>
                <View.Port />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
