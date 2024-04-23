import { cn } from "@/utils/cn";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-accent/20 text-accent  px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
