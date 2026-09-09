"use client";

import { useTypewriter } from "./useTypewriter";

const WORK_ORDER = `MAXIMO 4.1.1  ::  WORK ORDER TRACKING          03/14/1995 07:42
----------------------------------------------------------------
 WO NUM....: 10023          STATUS...: APPR
 ASSET.....: PUMP-101       LOCATION.: BLDG-4 / MECH ROOM
 WORK TYPE.: PM             PRIORITY.: 2
 DESC......: QUARTERLY LUBRICATION + VIBRATION CHECK
 CRAFT.....: MECH           LABOR HRS: 2.0
 PARTS.....: GREASE-EP2 (1) / FILTER-3IN (1)
----------------------------------------------------------------
 F1=HELP  F3=SAVE  F5=ISSUE PARTS  F8=CLOSE WO
> ISSUE PARTS ... OK
> WO 10023 SAVED`;

export function CrtTerminal({ active }: { active: boolean }) {
  const text = useTypewriter(WORK_ORDER, active, 8);

  return (
    <div className="mj-mock mj-crt" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>MXES TERMINAL — PSDI MAXIMO</span>
      </div>
      <div className="mj-crt__screen" aria-label="1995 Maximo work order on a green CRT terminal">
        {text}
        <span className="mj-crt__cursor" aria-hidden="true" />
      </div>
    </div>
  );
}
