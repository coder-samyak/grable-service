"use client";

import type { JourneyEra } from "../../data/journey";

type Props = {
  eras: JourneyEra[];
  activeIndex: number;
  visible: boolean;
  onNavigate: (id: string) => void;
};

export function TimelineRail({ eras, activeIndex, visible, onNavigate }: Props) {
  return (
    <>
      <nav className={`mj-rail${visible ? " is-visible" : ""}`} aria-label="Maximo timeline">
        <div className="mj-rail__track" aria-hidden="true">
          <div className="mj-rail__progress" data-rail-progress="" />
        </div>
        <ol className="mj-rail__list">
          {eras.map((era) => (
            <li key={era.id}>
              <a
                className="mj-rail__link"
                href={`#${era.id}`}
                aria-current={activeIndex === era.index ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(era.id);
                }}
              >
                <span className="mj-rail__label">{era.markerLabel}</span>
                <span className="mj-rail__dot" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className={`mj-rail-mobile${visible ? " is-visible" : ""}`} aria-hidden="true">
        <div className="mj-rail__progress" data-rail-progress-mobile="" />
      </div>
    </>
  );
}
