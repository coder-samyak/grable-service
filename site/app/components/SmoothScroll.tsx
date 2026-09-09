"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsapConfig";

export function SmoothScroll() {
  useEffect(() => {
    const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Make it globally available so other components like MaximoJourney can use lenis.scrollTo
    (window as any).lenis = lenis;

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
