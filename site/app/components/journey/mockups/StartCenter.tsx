"use client";

const BARS = [0.45, 0.7, 0.55, 0.9, 0.62, 0.8];

export function StartCenter({ active }: { active: boolean }) {
  return (
    <div className="mj-mock mj-start" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>IBM Maximo Asset Management 7.6 — Start Center</span>
      </div>
      <div className="mj-start__grid">
        <div className="mj-start__portlet">
          <h4>Result Set: My Open Work Orders</h4>
          <div className="mj-start__pad">
            <div className="mj-start__kpirow"><span>Corrective — overdue</span><strong>12</strong></div>
            <div className="mj-start__kpirow"><span>PM due this week</span><strong>38</strong></div>
            <div className="mj-start__kpirow"><span>Awaiting approval</span><strong>7</strong></div>
            <div className="mj-start__kpirow"><span>In progress</span><strong>54</strong></div>
          </div>
        </div>
        <div className="mj-start__portlet">
          <h4>KPI Graph: PM Compliance %</h4>
          <div className="mj-start__pad">
            <div className="mj-start__bars" aria-label="PM compliance trending upward across six months">
              {BARS.map((v, i) => (
                <div key={i} className="mj-start__bar" style={{ "--mj-bar": v } as React.CSSProperties} />
              ))}
            </div>
          </div>
        </div>
        <div className="mj-start__portlet">
          <h4>Inbox / Assignments</h4>
          <div className="mj-start__pad">
            <div className="mj-start__kpirow"><span>WO 44872 — approve estimate</span><strong>Route</strong></div>
            <div className="mj-start__kpirow"><span>PR 1181 — parts reorder</span><strong>Route</strong></div>
            <div className="mj-start__kpirow"><span>WO 44901 — safety plan review</span><strong>Route</strong></div>
          </div>
        </div>
        <div className="mj-start__portlet">
          <h4>Favorite Applications</h4>
          <div className="mj-start__pad">
            <div className="mj-start__kpirow"><span>Work Order Tracking</span><strong>›</strong></div>
            <div className="mj-start__kpirow"><span>Preventive Maintenance</span><strong>›</strong></div>
            <div className="mj-start__kpirow"><span>Assets</span><strong>›</strong></div>
            <div className="mj-start__kpirow"><span>Inventory</span><strong>›</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
