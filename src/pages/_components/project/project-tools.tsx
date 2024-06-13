"use client";

import { motion } from "framer-motion";
import tailwind from "@/icons/react.svg";

import type { ToolKey, Tool } from "@/types";
import { Tools } from "@/config/validations/project-schema";

interface Props {
  toolKeys: ToolKey[];
}

export function ProjectTools({ toolKeys }: Props) {
  const tools: Tool[] = toolKeys.map((toolKey) => {
    return Tools.find((tool) => tool.key === toolKey);
  });

  return (
    tools.length > 0 && (
      <motion.ul
        className={"flex flex-row  gap-s h-full p-m "}
      >
        {tools.map((tool, i) => (
          <Tool key={i} {...tool} />
        ))}
        <slot />
      </motion.ul>
    )
  );
}

function Tool(tool: Tool) {
  return (
    <img
      className="p-m rounded-xl size-20 border-2 "
      src={tool.icon.src}
      //   src={tailwind.src}
      //   width={tool.width}
    />
  );
}
