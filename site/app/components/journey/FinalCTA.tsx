"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { journeyFinalCta } from "../../data/journey";
import { serviceCards } from "../../data/site";

export function FinalCTA() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -70px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mj-final" aria-label="Work with Grable Services">
      <div className="mj-final__services">
        {serviceCards.map((card, idx) => {
          const fromLeft = idx % 2 === 0;
          return (
            <Link
              key={card.href}
              ref={(node) => {
                cardRefs.current[idx] = node;
              }}
              className={`mj-final__step-section ${fromLeft ? "mj-final__step-section--from-left" : "mj-final__step-section--from-right"}`}
              href={card.href}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="mj-final__step-years">Step {idx + 1} &rarr;</div>
              <h3 className="mj-final__step-title">{card.title}</h3>
              <p className="mj-final__step-body">{card.body}</p>
            </Link>
          );
        })}
      </div>

      <div className="mj-final__inner">
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
