import { cn } from "@/utils/cn";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  return false;
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteorEffect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-accent shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform   before:-translate-y-[50%] before:w-[2px] before:h-[4px] before:bg-gradient-to-r before:from-accent before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "vh",
            left: Math.floor(Math.random() * 100) + "vw",
            animationDelay:
              Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration:
              Math.floor(Math.random() * (20 - 2) + 2) +
              "s",
            transform: `translateZ(${
              Math.random() * 2000
            }px)`, // Set the initial distance
          }}
        ></span>
      ))}
    </>
  );
};
