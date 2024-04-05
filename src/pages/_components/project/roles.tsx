"use client";

import { type Role } from "@/types";
import { Roles as RolesMap } from "@/config/project-schema";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface Props {
  roles: Role[];
  className?: string;
}

export function Roles(props: Props) {
  const { roles, className } = props;

  return (
    roles.length > 0 && (
      <motion.div
        className={cn(
          " flex flex-col justify-center align-center  gap-s  ",
          className
        )}
      >
        {roles.slice(0, 3).map((role) => (
          <motion.span
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: [
                "0%",
                "0%",
                "50%",
                "50%",
                "0%",
              ],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="p-s bg-accent-2/30 text-white rounded-xl px-m py-2"
          >
            {RolesMap.get(role) || role}
          </motion.span>
        ))}
      </motion.div>
    )
  );
}
