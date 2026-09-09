"use client";

import Link from "next/link";
import { journeyHero } from "../../data/journey";
import { TypewriterText } from "../TypewriterText";

export function JourneyHero() {
  return (
    <section className="mj-hero" aria-label="Grable Services — IBM Maximo consulting">
      <div className="mj-hero__inner grid md:grid-cols-2 gap-12 items-center overflow-visible">
        <div>
          <p className="mj-mono mj-hero__eyebrow animate-slide-in-left drop-shadow-sm">
            {journeyHero.eyebrow}
          </p>
          <h1 className="mj-hero__title drop-shadow-md">
            <TypewriterText text={journeyHero.titleLead} delay={1800} speed={40} />
            <br />
            <em><TypewriterText text={journeyHero.titleEmphasis} delay={3000} speed={40} /></em>
          </h1>
          <p className="mj-hero__subhead animate-slide-in-left animate-delay-200 drop-shadow-sm">
            {journeyHero.subhead}
          </p>
          <div className="mj-hero__ctas animate-slide-in-left animate-delay-300">
            <Link className="mj-btn mj-btn--primary" href={journeyHero.primaryCta.href}>
              {journeyHero.primaryCta.label}
            </Link>
            <Link className="mj-btn mj-btn--ghost" href={journeyHero.secondaryCta.href}>
              {journeyHero.secondaryCta.label}
            </Link>
          </div>
          <p className="mj-mono mj-hero__scrollhint mt-12 animate-slide-in-left animate-delay-300" aria-hidden="true" style={{ position: "relative", left: "0", bottom: "0" }}>
            {journeyHero.scrollHint}
          </p>
        </div>
        
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500 hero-graphic-container hero-graphic-glow animate-slide-in-right animate-delay-200 mt-8 md:mt-0">
          <img 
            src="/images/hero_graphic.png" 
            alt="AI Enterprise Asset Management" 
            className="object-cover w-full h-full hero-graphic-pulse"
          />
        </div>
      </div>
    </section>
  );
}
