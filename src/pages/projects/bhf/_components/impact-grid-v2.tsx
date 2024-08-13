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

interface ImpactItem {
  component: FC;
  title: string;
  description: string[];
}

const impactItems: ImpactItem[] = [
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

function ImpactCard({ item }: { item: ImpactItem }) {
  return (
    <div className="grid grid-cols-9 gap-m relative rounded-xl cursor-pointer  card p-xl shadow-sm border border-white/20">
      <div className="col-span-3 relative z-[2] bg-[#171717] aspect-square rounded-md">
        <View className="w-full h-full">
          <item.component />
        </View>
      </div>

      <div className="col-span-3 flex flex-col justify-center items-center p-m">
        <h5 className="  ">{item.title}</h5>
      </div>

      <div className="col-span-3 flex flex-col justify-center items-center p-m">
        <ul className="space-y-2">
          {item.description.map((desc, index) => (
            <li key={index} className="prose-md">
              <span className="text-accent">•</span> {desc}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-md opacity-0 group-hover:opacity-100 z-1"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(255, 255, 255, 0.3),transparent 40%)`,
        }}
      ></div>
    </div>
  );
}

function handlePointerMove(e: PointerEvent) {
  const cards =
    document.querySelectorAll<HTMLDivElement>(".card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}

function useCardEffect() {
  useEffect(() => {
    const grid =
      document.querySelector<HTMLDivElement>("[data-grid]");
    grid?.addEventListener(
      "pointermove",
      handlePointerMove
    );

    return () => {
      grid?.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);
}

function Canvas3DOverlay() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full h-full pointer-events-none">
      <Canvas camera={{ zoom: 0.8 }} className="fixed">
        <Suspense fallback={<CanvasLoader />}>
          <View.Port />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function ImpactGrid() {
  useCardEffect();

  return (
    <div className="min-h-screen  bg-bgColor select-none background">
      <div
        className="grid gap-5 overflow-hidden group grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
        data-grid
      >
        {impactItems.map((item, index) => (
          <ImpactCard key={index} item={item} />
        ))}
      </div>

      <Canvas3DOverlay />
    </div>
  );
}
