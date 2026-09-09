"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hydration-safe typewriter: server and first client render show the FULL text
 * (crawlers + no-JS + reduced-motion always see everything). After mount, when
 * `active` first becomes true, the text is retyped character by character.
 */
export function useTypewriter(text: string, active: boolean, speed = 22) {
  const [display, setDisplay] = useState(text);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    startedRef.current = true;

    let i = 0;
    setDisplay("");
    const timer = window.setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [active, text, speed]);

  return display;
}
