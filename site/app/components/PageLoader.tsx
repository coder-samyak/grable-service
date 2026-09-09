"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let currentProgress = 1;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
        setFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 500); // Wait for the 500ms transition
      }
    }, 15); // Counts to 100 in about 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--surface)] transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer track */}
        <div className="w-24 h-24 border-4 border-[var(--soft)] rounded-full absolute"></div>
        {/* Spinning indicator */}
        <div className="w-24 h-24 border-4 border-transparent border-t-[var(--gold)] rounded-full animate-spin absolute"></div>
        {/* Logo in the center */}
        <img src="/images/grable-mark.png" alt="Grable Services" className="w-10 h-10 object-contain z-10 animate-pulse" />
      </div>
      <div className="mt-6 text-[var(--gold)] font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-1">
        <span className="animate-pulse">Loading...</span>
        <span className="font-bold text-lg">{progress}%</span>
      </div>
    </div>
  );
}
