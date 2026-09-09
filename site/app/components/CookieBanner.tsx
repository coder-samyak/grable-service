"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem("grable-cookie-ok") !== "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Privacy notice">
      <p>We use essential site storage for preferences. Analytics and marketing integrations are disabled until configured.</p>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem("grable-cookie-ok", "1");
          setVisible(false);
          window.dispatchEvent(new Event("grable-cookie-accepted"));
        }}
      >
        Accept
      </button>
    </div>
  );
}
