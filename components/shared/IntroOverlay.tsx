"use client";

import React, { useEffect, useMemo, useState } from "react";

/**
 * Homepage intro sequence.
 *
 * Network lines converge on a pin, the pin resolves into the MarketMap
 * mark, then the overlay fades to reveal the page.
 *
 * Deliberate constraints:
 *  - Plays once per browser session, not once per navigation. Repeat
 *    visitors are not made to sit through it again.
 *  - Skippable, and skipped entirely under prefers-reduced-motion.
 *  - Renders nothing on the server, so it cannot delay first paint or
 *    trap content behind an overlay if JS fails.
 */

const SESSION_KEY = "mm_intro_seen";
const LINE_COUNT = 14;

type Phase = "idle" | "lines" | "pin" | "mark" | "word" | "exit" | "done";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<Phase>("idle");

  const lines = useMemo(() => {
    const cx = 500;
    const cy = 500;
    const radius = 700;
    return Array.from({ length: LINE_COUNT }, (_, i) => {
      const angle = (i / LINE_COUNT) * Math.PI * 2 + 0.15;
      const x2 = cx + Math.cos(angle) * radius;
      const y2 = cy + Math.sin(angle) * radius;
      return {
        x2,
        y2,
        len: Math.hypot(x2 - cx, y2 - cy),
        delay: i * 0.045,
      };
    });
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Private browsing can throw on storage access; treat as unseen.
    }
    if (seen) return; // "idle" renders nothing

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* non-fatal */
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.style.overflow = "hidden";
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    const start = requestAnimationFrame(() => {
      if (reduce) {
        setPhase("word");
      } else {
        setPhase("lines");
      }
    });

    if (reduce) {
      at(600, () => setPhase("exit"));
      at(1300, finish);
    } else {
      at(750, () => setPhase("pin"));
      at(1450, () => setPhase("mark"));
      at(1750, () => setPhase("word"));
      at(3200, () => setPhase("exit"));
      at(4100, finish);
    }

    function finish() {
      setPhase("done");
      document.body.style.overflow = "";
    }

    return () => {
      cancelAnimationFrame(start);
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  function skip() {
    setPhase("exit");
    document.body.style.overflow = "";
    setTimeout(() => setPhase("done"), 700);
  }

  if (phase === "idle" || phase === "done") return null;

  const pinIn = phase === "pin";
  const pinOut = phase === "mark" || phase === "word" || phase === "exit";
  const markIn = pinOut;
  const wordIn = phase === "word" || phase === "exit";

  return (
    <div
      className={`mm-intro ${phase === "exit" ? "is-exiting" : ""}`}
      role="presentation"
    >
      <svg
        className="mm-lines"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {lines.map((l, i) => (
          <line
            key={i}
            x1={500}
            y1={500}
            x2={l.x2}
            y2={l.y2}
            style={
              {
                strokeDasharray: l.len,
                strokeDashoffset: l.len,
                animationDelay: `${l.delay}s`,
                "--len": l.len,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>

      <svg
        className={`mm-pin ${pinIn ? "is-in" : ""} ${pinOut ? "is-out" : ""}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z"
          fill="#bb0112"
        />
        <circle cx="12" cy="9" r="2.6" fill="#0a0d13" />
      </svg>

      <div className="mm-mark">
        <div className={`mm-grid ${markIn ? "is-in" : ""}`}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className={`mm-word ${wordIn ? "is-in" : ""}`}>
          MarketMap Analytics
        </p>
      </div>

      <button type="button" className="mm-skip" onClick={skip}>
        Skip
      </button>
    </div>
  );
}
