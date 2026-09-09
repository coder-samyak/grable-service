"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    // Select the main content elements that should animate on scroll
    const selector = "p, h1, h2, h3, ul, .capability-panel, img, .mj-btn";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            entry.target.classList.remove("reveal-hidden");
          } else {
            entry.target.classList.remove("reveal-visible");
            entry.target.classList.add("reveal-hidden");
          }
        });
      },
      {
        rootMargin: "-2% 0px -2% 0px",
        threshold: 0.05
      }
    );

    // Initialize elements
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      // Prevent conflicts with GSAP animations in the journey timeline
      if (el.closest('.mj-era') || el.closest('.nav') || el.closest('header') || el.closest('.utility')) return;
      
      el.classList.add("reveal-hidden");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
