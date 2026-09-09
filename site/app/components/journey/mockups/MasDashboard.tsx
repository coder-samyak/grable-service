"use client";

type Card = {
  name: string;
  score: string;
  state?: "warn" | "crit";
  meta: string;
  path: string;
  stroke: string;
};

const CARDS: Card[] = [
  {
    name: "Pump P-4402",
    score: "HEALTH 91",
    meta: "VIBRATION · TEMP · FLOW — NOMINAL",
    path: "M0,34 C20,30 34,26 52,28 S90,20 118,22 S160,16 200,14",
    stroke: "#34d399"
  },
  {
    name: "Compressor C-118",
    score: "HEALTH 67",
    state: "warn",
    meta: "BEARING TEMP TRENDING +4°C / WK",
    path: "M0,26 C24,24 40,28 60,30 S104,26 130,32 S170,36 200,40",
    stroke: "#e0b43a"
  },
  {
    name: "AHU-07 Motor",
    score: "HEALTH 38",
    state: "crit",
    meta: "ANOMALY: VIBRATION SPIKE — PREDICT: 21D TO FAILURE",
    path: "M0,18 C24,20 44,16 64,22 S100,30 128,36 S168,40 200,44",
    stroke: "#f87171"
  },
  {
    name: "Chiller CH-02",
    score: "HEALTH 88",
    meta: "MONITOR: 1.2K SENSOR READINGS / MIN",
    path: "M0,30 C28,28 48,24 72,26 S120,22 148,20 S180,18 200,16",
    stroke: "#22d3ee"
  }
];

export function MasDashboard({ active }: { active: boolean }) {
  return (
    <div className="mj-mock mj-mas" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Maximo Application Suite — Asset Health</span>
      </div>
      <div className="mj-mas__tabs" aria-hidden="true">
        <span data-on="">Monitor</span>
        <span>Health</span>
        <span>Predict</span>
        <span>Visual Inspection</span>
      </div>
      <div className="mj-mas__grid">
        {CARDS.map((c) => (
          <div key={c.name} className="mj-mas__card" data-state={c.state}>
            <h4>
              {c.name}
              <span className="mj-mas__score">{c.score}</span>
            </h4>
            <svg className="mj-spark" viewBox="0 0 200 52" preserveAspectRatio="none" aria-hidden="true">
              <path d={c.path} stroke={c.stroke} />
            </svg>
            <div className="mj-mas__meta">{c.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
