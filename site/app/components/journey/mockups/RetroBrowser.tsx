"use client";

export function RetroBrowser({ active }: { active: boolean }) {
  return (
    <div className="mj-mock mj-retro" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>MRO Software — Maximo 6 — Microsoft Internet Explorer</span>
      </div>
      <div className="mj-retro__toolbar">
        <span aria-hidden="true">⬅︎ ➡︎ ⟳</span>
        <span className="mj-retro__addr">http://maximo.intranet:9080/maximo/ui/?event=loadapp&amp;value=wotrack</span>
        <span aria-hidden="true">Go</span>
      </div>
      <div className="mj-retro__page">
        <div className="mj-retro__banner">MAXIMO® — Work Order Tracking</div>
        <div className="mj-retro__loading" aria-hidden="true" />
        <table>
          <thead>
            <tr>
              <th>Work Order</th>
              <th>Description</th>
              <th>Asset</th>
              <th>Status</th>
              <th>Target Start</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>20114</td><td>Replace air handler belt</td><td>AHU-07</td><td>INPRG</td><td>06/12/2006</td></tr>
            <tr><td>20115</td><td>Chiller 2 quarterly PM</td><td>CH-02</td><td>APPR</td><td>06/14/2006</td></tr>
            <tr><td>20118</td><td>Generator load bank test</td><td>GEN-01</td><td>WAPPR</td><td>06/20/2006</td></tr>
            <tr><td>20121</td><td>Roof exhaust fan bearing</td><td>EF-12</td><td>APPR</td><td>06/22/2006</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: "10.5px", color: "#555", marginTop: "0.6rem" }}>
          4 records found — no client install required. One URL for every planner and technician.
        </p>
      </div>
    </div>
  );
}
