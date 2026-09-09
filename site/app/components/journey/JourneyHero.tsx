"use client";

import Link from "next/link";
import { journeyHero } from "../../data/journey";

export function JourneyHero() {
  return (
    <section className="mj-hero" aria-label="Grable Services — IBM Maximo consulting">
      <div className="mj-hero__inner">
        <p className="mj-mono mj-hero__eyebrow" data-hero-stagger="">
          {journeyHero.eyebrow}
        </p>
        <h1 className="mj-hero__title" data-hero-stagger="">
          {journeyHero.titleLead}
          <br />
          <em>{journeyHero.titleEmphasis}</em>
        </h1>
        <p className="mj-hero__subhead" data-hero-stagger="">
          {journeyHero.subhead}
        </p>
        <div className="mj-hero__ctas" data-hero-stagger="">
          <Link className="mj-btn mj-btn--primary" href={journeyHero.primaryCta.href}>
            {journeyHero.primaryCta.label}
          </Link>
          <Link className="mj-btn mj-btn--ghost" href={journeyHero.secondaryCta.href}>
            {journeyHero.secondaryCta.label}
          </Link>
        </div>
        <p className="mj-mono mj-hero__scrollhint" aria-hidden="true">
          {journeyHero.scrollHint}
        </p>
      </div>
    </section>
  );
}
