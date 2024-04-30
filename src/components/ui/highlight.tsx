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
        "font-semibold underline underline-offset-2 decoration-green-400    text-textColor   px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
