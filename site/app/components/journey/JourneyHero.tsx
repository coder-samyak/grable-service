"use client";

import Link from "next/link";
import { journeyHero } from "../../data/journey";
import { TypewriterText } from "../TypewriterText";

export function JourneyHero() {
  return (
    <section className="mj-hero relative" aria-label="Grable Services — IBM Maximo consulting">
      <img
        className="absolute inset-0 w-full h-full object-cover blur-[8px] opacity-60 z-0"
        src="/images/Background-image-home.jpg"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Gradient to blend with the era section below */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#071120] to-transparent z-10 pointer-events-none" />
      
      <div className="mj-hero__inner flex flex-col items-center justify-center text-center relative z-10 w-full min-h-[80vh]">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <p className="mj-mono mj-hero__eyebrow animate-slide-in-left drop-shadow-sm">
            {journeyHero.eyebrow}
          </p>
          <h1 className="mj-hero__title drop-shadow-md flex flex-col items-center text-center mx-auto max-w-full px-2" data-cursor="zoom" style={{ color: '#fdfbf7' }}>
            <span style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', flexWrap: 'wrap', gap: '0.25em', lineHeight: '1.1' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                <TypewriterText text="Thirty years" delay={1800} speed={40} />
              </span>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                <TypewriterText text="of" delay={2400} speed={40} />
              </span>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                <TypewriterText text="Maximo." delay={2600} speed={40} />
              </span>
            </span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1em', lineHeight: '1.1', marginTop: '0.2em' }}>
              <TypewriterText text="One partner for the AI era." delay={3000} speed={40} />
            </span>
          </h1>
          <p className="mj-hero__subhead animate-slide-in-left animate-delay-200 drop-shadow-sm mx-auto text-white" data-cursor="zoom" style={{ color: '#ffffff' }}>
            {journeyHero.subhead.split('Grable Services')[0]}
            <span style={{ backgroundColor: '#d4a017', color: 'black', padding: '0 4px', borderRadius: '2px' }}>Grable Services</span>
            {journeyHero.subhead.split('Grable Services')[1]}
          </p>
          <div className="mj-hero__ctas animate-slide-in-left animate-delay-300 justify-center">
            <Link className="mj-btn mj-btn--primary" href={journeyHero.primaryCta.href}>
              {journeyHero.primaryCta.label}
            </Link>
            <Link className="mj-btn mj-btn--ghost" href={journeyHero.secondaryCta.href}>
              {journeyHero.secondaryCta.label}
            </Link>
          </div>
          <p className="mj-mono mj-hero__scrollhint mt-12 animate-slide-in-left animate-delay-300 justify-center w-full text-white font-bold italic" aria-hidden="true" style={{ position: "relative", left: "auto", bottom: "auto", color: "#ffffff", fontWeight: "bold", fontStyle: "italic" }}>
            {journeyHero.scrollHint}
          </p>
        </div>
      </div>
    </section>
  );
}
