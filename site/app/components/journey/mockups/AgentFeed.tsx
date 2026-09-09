"use client";

type FeedEvent = {
  time: string;
  led: string;
  text: React.ReactNode;
};

const EVENTS: FeedEvent[] = [
  {
    time: "02:14:07",
    led: "#f87171",
    text: (
      <span>
        <strong>Anomaly detected</strong> — AHU-07 motor vibration exceeds model baseline (σ 4.2)
      </span>
    )
  },
  {
    time: "02:14:11",
    led: "#e0b43a",
    text: (
      <span>
        <strong>Diagnosis</strong> — probable bearing wear · confidence 0.94 · RUL est. 19 days
      </span>
    )
  },
  {
    time: "02:14:16",
    led: "#22d3ee",
    text: (
      <span>
        <strong>Prescriptive WO drafted</strong> — WO 61042, priority 2, crew MECH-A
        <span className="mj-agent__tag">AUTONOMOUS</span>
      </span>
    )
  },
  {
    time: "02:14:19",
    led: "#22d3ee",
    text: (
      <span>
        <strong>Parts reserved</strong> — BRG-6204 ×2 @ Central Stores · PO not required
      </span>
    )
  },
  {
    time: "06:58:41",
    led: "#34d399",
    text: (
      <span>
        <strong>Planner approved</strong> — scheduled Tue 07:00 · downtime window confirmed
      </span>
    )
  }
];

export function AgentFeed({ active }: { active: boolean }) {
  return (
    <div className="mj-mock mj-agent" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Grable Ops — Agentic Maintenance Feed</span>
      </div>
      <div className="mj-agent__body">
        {EVENTS.map((e, i) => (
          <div key={e.time} className="mj-agent__row" style={{ "--mj-i": i } as React.CSSProperties}>
            <span className="mj-agent__led" style={{ background: e.led }} aria-hidden="true" />
            <span className="mj-agent__time">{e.time}</span>
            {e.text}
          </div>
        ))}
      </div>
    </div>
  );
}
