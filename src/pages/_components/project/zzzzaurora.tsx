"use client";

import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Aurora({ children, className }: Props) {
  return (
    <AuroraBackground className={className}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "relative flex flex-col gap-m items-center justify-center px-m rounded-full"
        )}
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
