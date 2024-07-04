import Counter from "./counter";
interface Props {
  label: string;
  value: number;
}

export function Stat({ label, value }: Props) {
  return (
    <div className="flex flex-col gap-xs items-center">
      <Counter
        value={value}
        className="fluid:text-4xl font-bold text-accent"
        includePercentageSymbol
      />

      <span className="text-s font-light opacity-80">
        {label}
      </span>
    </div>
  );
}
