"use client";

import { useEffect, useState } from "react";

const audiences = ["Federal & public sector", "Commercial enterprise"];

export function AudienceSwitcher() {
  const [audience, setAudience] = useState(audiences[0]);

  useEffect(() => {
    const saved = window.localStorage.getItem("grable-audience");
    if (saved && audiences.includes(saved)) setAudience(saved);
  }, []);

  function choose(nextAudience: string) {
    setAudience(nextAudience);
    window.localStorage.setItem("grable-audience", nextAudience);
    document.cookie = `grable_audience=${encodeURIComponent(nextAudience)}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <div className="audience-switcher" aria-label="Audience switcher">
      {audiences.map((item) => (
        <button
          aria-pressed={audience === item}
          className={audience === item ? "active" : ""}
          key={item}
          onClick={() => choose(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
