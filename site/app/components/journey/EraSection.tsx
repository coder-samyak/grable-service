"use client";

import type { JourneyEra } from "../../data/journey";
import { mockupRegistry } from "./mockups";
import { EraBackdrop } from "./EraBackdrop";

type Props = {
  era: JourneyEra;
  active: boolean;
};

export function EraSection({ era, active }: Props) {
  const Mockup = mockupRegistry[era.mockup];

  return (
    <section
      className="mj-era"
      id={era.id}
      data-era-index={era.index}
      style={{ "--mj-era-accent": era.accent } as React.CSSProperties}
      aria-label={`${era.years} — ${era.title}`}
    >
      <div className="mj-era__sticky">
        <EraBackdrop base={era.media.base} active={active} label={`${era.years} era background`} />
        <div className="mj-era__grid">
          <div className="mj-era__copy" data-era-copy="">
            <p className="mj-mono mj-era__eyebrow">{era.eyebrow}</p>
            <p className="mj-era__years" aria-hidden="true">
              {era.years}
            </p>
            <h2 className="mj-era__title">{era.title}</h2>
            {era.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mj-era__body">
                {paragraph}
              </p>
            ))}
            <ul className="mj-era__facts">
              {era.facts.map((fact) => (
                <li key={fact} className="mj-era__fact">
                  {fact}
                </li>
              ))}
            </ul>
            <p className="mj-era__note">
              <strong>Grable was there</strong>
              <span>{era.grableNote}</span>
            </p>
          </div>
          <div className="mj-era__mockup mockup-animate" data-era-mockup="" style={{ color: "#FAF9F6" }}>
            <Mockup active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
