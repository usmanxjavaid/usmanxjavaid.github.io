import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<string, string> = {
  primary: "bg-violet text-white hover:bg-violet-dim",
  secondary: "border border-border text-text hover:border-border-hover hover:bg-surface-2",
  ghost: "text-text-dim hover:text-text",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps & { href?: string } & Omit<ComponentProps<"button">, "className">) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}