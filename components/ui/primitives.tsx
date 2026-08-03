import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "violet" | "amber";
}) {
  const tones = {
    default: "border-border text-text-dim",
    violet: "border-violet/30 text-violet bg-violet/10",
    amber: "border-amber/30 text-amber bg-amber/10",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-colors duration-200 hover:border-border-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-text-dim">{description}</p>}
    </div>
  );
}