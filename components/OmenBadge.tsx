import { OMEN_LABEL, type Omen } from "@/lib/dreams";

export default function OmenBadge({ omen, size = "sm" }: { omen: Omen; size?: "sm" | "md" }) {
  const { label, color, bg } = OMEN_LABEL[omen];
  const icon = omen === "tot" ? "🍀" : omen === "xau" ? "⚠️" : "🔮";
  const cls = size === "md" ? "text-sm px-4 py-1.5" : "text-xs px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${bg} ${color} ${cls}`}
    >
      <span>{icon}</span> {label}
    </span>
  );
}
