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
        "font-bold  text-green-500  px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
