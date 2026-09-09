"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    // Show the CTA by default so it doesn't get hidden by accident
    setShow(true);


    // Step aside when the footer scrolls into view so it never covers it.
    const footer = document.querySelector("footer.footer");
    let observer: IntersectionObserver | undefined;
    if (footer) {
      observer = new IntersectionObserver(
        (entries) => setAtFooter(entries[0]?.isIntersecting ?? false),
        { rootMargin: "0px 0px -15% 0px" }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener("grable-cookie-accepted", onAccepted);
      observer?.disconnect();
    };
  }, []);

  if (!show || atFooter) return null;

  return (
    <aside className="sticky-cta" aria-label="Primary contact action">
      <span>Need migration, hosting, storage, or AI infrastructure help?</span>
      <Link href="/contact/">Book a briefing</Link>
      <button
        aria-label="Dismiss"
        className="sticky-cta-close"
        onClick={() => {
          window.localStorage.setItem("grable-cta-dismissed", "1");
          setShow(false);
        }}
        type="button"
      >
        <span aria-hidden>×</span>
      </button>
    </aside>
  );
}
