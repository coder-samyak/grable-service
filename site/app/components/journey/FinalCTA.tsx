"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsapConfig";
import { journeyFinalCta } from "../../data/journey";
import { serviceCards } from "../../data/site";

export function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const services = scrollRef.current;
    const cta = ctaRef.current;
    if (!services || !cta) return;

    const stepSections = gsap.utils.toArray<HTMLElement>(".mj-final__step-section", services);

    // Position all step sections absolutely in the center
    gsap.set(stepSections, {
      position: "absolute",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      rotation: 0,
    });

    // Set all steps except the first to be invisible and offset to the right with scale and tilt
    gsap.set(stepSections.slice(1), {
      opacity: 0,
      xPercent: 150,
      yPercent: -50,
      scale: 0.85,
      rotation: 12,
    });

    // Create the pinned timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1.2,
        start: "top 12%", // Pins the section safely below the sticky header
        end: () => `+=${window.innerHeight * 6.5}`, // Slower scroll length
        invalidateOnRefresh: true,
      }
    });

    // Animate step sections one-by-one by sliding them horizontally with scale and tilt
    stepSections.forEach((step, idx) => {
      if (idx < stepSections.length - 1) {
        const nextStep = stepSections[idx + 1];

        // 1. Hold current step in center for readability
        tl.to({}, { duration: 0.6 });

        // 2. Active step slides out to the left and fades out
        tl.fromTo(step,
          { xPercent: -50, yPercent: -50, scale: 1, rotation: 0, opacity: 1 },
          { xPercent: -250, yPercent: -50, scale: 0.85, rotation: -12, opacity: 0, duration: 1, ease: "power2.inOut" }
        );

        // 3. Next step slides in from the right to the center and fades in
        tl.fromTo(nextStep,
          { xPercent: 150, yPercent: -50, scale: 0.85, rotation: 12, opacity: 0 },
          { xPercent: -50, yPercent: -50, scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
          "-=1"
        ); // Animate simultaneously
      }
    });

    // Hold the last step
    tl.to({}, { duration: 0.6 });

    // After all steps slide, animate the last step moving left and fading out
    const lastStep = stepSections[stepSections.length - 1];
    tl.fromTo(lastStep,
      { xPercent: -50, yPercent: -50, scale: 1, rotation: 0, opacity: 1 },
      { xPercent: -250, yPercent: -50, scale: 0.85, rotation: -12, opacity: 0, duration: 0.8, ease: "power2.inOut" }
    );

    // Fade in the final CTA inner content
    tl.fromTo(cta,
      {
        xPercent: -50,
        yPercent: -20,
        opacity: 0,
      },
      {
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.8,
        ease: "power2.out",
      },
      ">"
    );

  }, { scope: containerRef });

  return (
    <section className="mj-final" aria-label="Work with Grable Services" ref={containerRef}>
      {/* 1. Services Steps Stack Container */}
      <div ref={scrollRef} className="mj-final__services">
        {serviceCards.map((card, idx) => (
          <Link key={card.href} className="mj-final__step-section" href={card.href}>
            <div className="mj-final__step-years">Step {idx + 1} &rarr;</div>
            <h3 className="mj-final__step-title">{card.title}</h3>
            <p className="mj-final__step-body">{card.body}</p>
          </Link>
        ))}
      </div>

      {/* 2. Final CTA content */}
      <div ref={ctaRef} className="mj-final__inner" style={{ opacity: 0, pointerEvents: "none" }}>
        <p className="mj-mono mj-final__eyebrow">{journeyFinalCta.eyebrow}</p>
        <h2 className="mj-final__title">
          {journeyFinalCta.titleLead}
          <br />
          {journeyFinalCta.titleEmphasis}
        </h2>
        <p className="mj-final__body">{journeyFinalCta.body}</p>
        <div className="mj-final__chips-marquee">
          <div className="mj-final__chips-track">
            <ul className="mj-final__chips-list">
              {journeyFinalCta.proofChips.map((chip) => (
                <li key={chip} className="mj-final__chip">
                  {chip}
                </li>
              ))}
            </ul>
            <ul className="mj-final__chips-list" aria-hidden="true">
              {journeyFinalCta.proofChips.map((chip) => (
                <li key={`${chip}-clone`} className="mj-final__chip">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mj-final__ctas">
          <Link className="mj-btn mj-btn--primary" href={journeyFinalCta.primaryCta.href}>
            {journeyFinalCta.primaryCta.label}
          </Link>
          <Link className="mj-btn mj-btn--ghost" href={journeyFinalCta.secondaryCta.href}>
            {journeyFinalCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
