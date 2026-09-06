import React from "react";

/**
 * Inline SVG icons.
 *
 * These replace the Material Symbols web font. That font was loaded from a
 * render-blocking <link> in <head>, and until it finished downloading the
 * browser painted the ligature text instead of the glyph — so a slow or
 * blocked connection showed visitors the literal words "arrow_forward" and
 * "check_circle" inside buttons. Inline SVG has no such failure mode, adds
 * no network request, and inherits currentColor.
 */

export type IconName =
  | "menu"
  | "close"
  | "arrowRight"
  | "check"
  | "checkCircle"
  | "send"
  | "spinner"
  | "map"
  | "barChart"
  | "pin"
  | "explore"
  | "storefront"
  | "groups"
  | "trendingUp"
  | "radar";

const PATHS: Record<IconName, React.ReactNode> = {
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  close: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  check: <polyline points="4 12.5 9 17.5 20 6.5" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12.5 11 15.5 16 9.5" />
    </>
  ),
  send: (
    <>
      <line x1="21" y1="3" x2="10.5" y2="13.5" />
      <polygon points="21 3 14.5 21 10.5 13.5 3 9.5 21 3" />
    </>
  ),
  spinner: (
    <>
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" />
    </>
  ),
  map: (
    <>
      <polygon points="2 6 9 3 15 6 22 3 22 18 15 21 9 18 2 21 2 6" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </>
  ),
  barChart: (
    <>
      <line x1="3" y1="21" x2="21" y2="21" />
      <rect x="5" y="12" width="3.5" height="6" />
      <rect x="10.25" y="7" width="3.5" height="11" />
      <rect x="15.5" y="10" width="3.5" height="8" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  explore: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="16 8 13.5 13.5 8 16 10.5 10.5 16 8" />
    </>
  ),
  storefront: (
    <>
      <path d="M3.5 9.5V20h17V9.5" />
      <path d="M2.5 9.5 4.5 4h15l2 5.5a3 3 0 0 1-5.75 1 3 3 0 0 1-5.5 0 3 3 0 0 1-5.75-1Z" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8.5" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.5a3.5 3.5 0 0 1 0 6.9" />
      <path d="M17.5 14.2A6.5 6.5 0 0 1 21.5 20" />
    </>
  ),
  trendingUp: (
    <>
      <polyline points="3 17 9.5 10.5 13.5 14.5 21 7" />
      <polyline points="15.5 7 21 7 21 12.5" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
      <line x1="12" y1="12" x2="19" y2="6.5" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`inline-block shrink-0 ${className ?? ""}`}
    >
      {PATHS[name]}
    </svg>
  );
}
