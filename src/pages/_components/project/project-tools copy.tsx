"use client";

import { motion } from "framer-motion";

import type { ToolKey, Tool } from "@/types";
import { Tools } from "@/config/validations/project-schema";
import InfiniteLoopSlider from "@/components/ui/InfiniteLoopSlider.astro";

const ROWS: number = 2;
const TOOLS_PER_ROW: number = 5;

interface Props {
  toolKeys: ToolKey[];
}

export function ProjectTools({ toolKeys }: Props) {
  const tools: Tool[] = toolKeys.map((toolKey) => {
    return Tools.find((tool) => tool.key === toolKey);
  });

  return (
    tools.length > 0 && (
      <div class="relative flex max-w-3xl shrink-0 flex-col items-center justify-center gap-y-2 gap-x-0 overflow-hidden pt-12">
        {[...new Array(ROWS)].map((row, i) => {
          return (
            <InfiniteLoopSlider
              duration={random(43000, 45000)}
              reverse={i % 2 == 0}
            >
              {tools.slice(0, TOOLS_PER_ROW).map((tool) => (
                <Tool {...tool} />
              ))}
            </InfiniteLoopSlider>
          );
        })}

        <div className="fade"></div>
      </div>
    )
  );
}

function Tool(tool: Tool) {
  return (
    <img
      className="p-m rounded-xl size-20 border-2 bg-gradient-to-r from-bgColorHero to-netural-700"
      src={tool.icon.src}
      //   src={tailwind.src}
      //   width={tool.width}
    />
  );
}
