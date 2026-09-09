"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsapConfig";
import { journeyEras } from "../../data/journey";
import { JourneyHero } from "./JourneyHero";
import { EraSection } from "./EraSection";
import { TimelineRail } from "./TimelineRail";
import { FinalCTA } from "./FinalCTA";
import "../../journey.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function MaximoJourney() {
  const pageRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const erasContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [railVisible, setRailVisible] = useState(false);

  // --- Active era + rail visibility via IntersectionObserver ---------------
  // Works identically with or without Lenis/GSAP (reduced-motion safe).
  useEffect(() => {
    const journey = journeyRef.current;
    const erasContainer = erasContainerRef.current;
    if (!journey || !erasContainer) return;

    const sections = Array.from(journey.querySelectorAll<HTMLElement>("[data-era-index]"));
    const eraObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-era-index"));
            if (!Number.isNaN(index)) setActiveIndex(index);
          }
        }
      },
      // A section becomes "active" when it crosses the vertical center band.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((section) => eraObserver.observe(section));

    const railObserver = new IntersectionObserver(
      ([entry]) => setRailVisible(entry.isIntersecting),
      { rootMargin: "-10% 0px -10% 0px", threshold: 0 }
    );
    railObserver.observe(erasContainer);

    return () => {
      eraObserver.disconnect();
      railObserver.disconnect();
    };
  }, []);

  // --- Scroll choreography (motion-preference gated) -----------------------
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const journey = journeyRef.current;
        const erasContainer = erasContainerRef.current;
        if (!journey || !erasContainer) return;

        // Hero intro
        gsap.from("[data-hero-stagger]", {
          y: 26,
          opacity: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "transform,opacity"
        });

        // Rail progress — desktop (scaleY) + mobile bar (scaleX), one trigger
        const setDesktop = gsap.quickSetter("[data-rail-progress]", "scaleY");
        const setMobile = gsap.quickSetter("[data-rail-progress-mobile]", "scaleX");
        ScrollTrigger.create({
          trigger: erasContainer,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            setDesktop(self.progress);
            setMobile(self.progress);
          }
        });

        // Per-era: copy/mockup entrance scrub + backdrop parallax
        const eras = gsap.utils.toArray<HTMLElement>(".mj-era", journey);
        for (const era of eras) {
          const copy = era.querySelector("[data-era-copy]");
          const mockup = era.querySelector("[data-era-mockup]");
          const backdrop = era.querySelector("[data-parallax]");

          if (copy && mockup) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: era,
                  start: "top 70%",
                  end: "top 15%",
                  scrub: true
                }
              })
              .from(copy, { y: 56, opacity: 0, ease: "none" }, 0)
              .from(mockup, { y: 80, opacity: 0, scale: 0.96, ease: "none" }, 0.06);

            // Exit scrub rides the unpin/scroll-away only — content stays fully
            // readable while pinned, then fades as it physically leaves and the
            // next era's entrance (top 70%) overlaps it into a crossfade.
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: era,
                  start: "bottom 100%",
                  end: "bottom 35%",
                  scrub: true
                }
              })
              .fromTo(copy, { y: 0, opacity: 1 }, { y: -32, opacity: 0, ease: "none", immediateRender: false }, 0)
              .fromTo(mockup, { y: 0, opacity: 1, scale: 1 }, { y: -40, opacity: 0, scale: 0.98, ease: "none", immediateRender: false }, 0.06);
          }

          if (backdrop) {
            gsap.fromTo(
              backdrop,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: era,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              }
            );
          }
        }
      });

      return () => mm.revert();
    },
    { scope: pageRef }
  );

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <div className="mj-page" ref={pageRef}>
      <JourneyHero />
      <TimelineRail
        eras={journeyEras}
        activeIndex={activeIndex}
        visible={railVisible}
        onNavigate={handleNavigate}
      />
      <div className="mj-journey" ref={journeyRef} style={{ position: "relative" }}>
        {/* Global Continuous Background Video */}
        <div style={{ position: "sticky", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 0, overflow: "hidden" }}>
          <div className="mj-era__gradient" style={{ position: "absolute", inset: 0 }} />
          <video
            className="mj-era__video is-playing"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.95 }}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
          >
            <source src="/journey/Homesection.mp4" type="video/mp4" />
          </video>
          <div className="mj-era__scrim" style={{ position: "absolute", inset: 0 }} />
          {/* Gradient to blend with the hero section above */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#071120] to-transparent z-[2] pointer-events-none" />
        </div>
        {/* Era sections rendered on top */}
        <div style={{ position: "relative", zIndex: 1, marginTop: "-100vh" }}>
          <div ref={erasContainerRef}>
            {journeyEras.map((era) => (
              <EraSection key={era.id} era={era} active={activeIndex === era.index && railVisible} />
            ))}
          </div>
          <FinalCTA />
        </div>
      </div>
    </div>
  );
}
