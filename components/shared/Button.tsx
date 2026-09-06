import React from "react";
import Link from "next/link";

/**
 * The site's CTA styling lives here and nowhere else.
 *
 * Before this existed, the same primary-button class string was pasted
 * into five components with three different padding values, so buttons
 * on Home, Services, Demo and Contact were subtly different sizes.
 */

type Variant = "primary" | "secondary" | "onDark";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold text-label-md font-label-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none";

const SIZES: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-secondary hover:bg-[#93000b] text-white shadow-[0_4px_14px_0_rgba(187,1,18,0.39)] hover:shadow-[0_6px_20px_rgba(187,1,18,0.5)] hover:-translate-y-px",
  secondary:
    "border border-outline text-on-surface hover:bg-on-surface/5 hover:border-on-surface",
  onDark: "border border-white/40 text-white hover:bg-white/10",
};

function classesFor(variant: Variant, size: Size, className?: string) {
  return [BASE, SIZES[size], VARIANTS[variant], className]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={classesFor(variant, size, className)}>
      {children}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={classesFor(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
