import Counter from "./counter";

export interface StatProps {
  label: string;
  value: number | string;
  includePercentageSymbol?: boolean;
}

export function Stat({
  label,
  value,
  includePercentageSymbol,
}: StatProps) {
  return (
    <div className="flex flex-col gap-xs items-center *:text-center">
      {typeof value === "number" ? (
        <Counter
          value={value}
          className="fluid:text-sm sm:fluid:text-4xl font-bold text-accent"
          includePercentageSymbol={includePercentageSymbol}
        />
      ) : (
        <h5 className="text-accent">{value}</h5>
      )}

      <span className="text-sm sm:text-base font-light opacity-80 ">
        {label}
      </span>
    </div>
  );
}
