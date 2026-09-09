"use client";

import { useTypewriter } from "./useTypewriter";

const ANSWER =
  "P-4402 shows a vibration spike (14:02) consistent with early bearing wear. Similar signature on 3 prior failures. Recommended: create PM work order, priority 2, est. 2.5h mech labor. Parts on hand: BRG-6204 (qty 4, Central Stores). Shall I draft the work order?";

export function CopilotChat({ active }: { active: boolean }) {
  const answer = useTypewriter(ANSWER, active, 14);

  return (
    <div className="mj-mock mj-chat" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>MAS 9 — Maximo Copilot</span>
      </div>
      <div className="mj-chat__body">
        <div className="mj-chat__msg mj-chat__msg--user">
          <span className="mj-chat__who">Technician</span>
          Why is pump P-4402 flagged this morning?
        </div>
        <div className="mj-chat__msg mj-chat__msg--ai">
          <span className="mj-chat__who">Maximo Copilot</span>
          {answer}
          <div className="mj-chat__chips">
            <span className="mj-chat__chip">WO 51230 · 2024</span>
            <span className="mj-chat__chip">WO 48822 · 2023</span>
            <span className="mj-chat__chip">SENSOR VIB-P4402-01</span>
          </div>
        </div>
      </div>
    </div>
  );
}
