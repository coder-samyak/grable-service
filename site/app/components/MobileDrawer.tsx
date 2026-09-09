"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "../data/navigation";
import { AudienceSwitcher } from "./AudienceSwitcher";

export function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="mobile-nav">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
      </button>
      {open ? (
        <>
          <div aria-hidden="true" className="mobile-scrim" onClick={close} />
          <div className="mobile-panel" id="mobile-menu">
            <div className="mobile-audience">
              <span>I am with</span>
              <AudienceSwitcher />
            </div>
            <form action="/resources/" method="GET" className="mobile-search-form" onSubmit={close}>
              <input 
                type="search" 
                name="search" 
                placeholder="Search..." 
                className="mobile-search-input"
                aria-label="Search site"
              />
              <button type="submit" className="mobile-search-button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </form>
            {primaryNav.map((group) => {
              const isOpen = expanded === group.label;
              return (
                <div className="mobile-group" key={`${group.label}-${group.href}`}>
                  <button
                    aria-expanded={isOpen}
                    className="mobile-group-toggle"
                    onClick={() => setExpanded(isOpen ? null : group.label)}
                    type="button"
                  >
                    <span>{group.label}</span>
                    <span aria-hidden="true" className="mobile-chevron">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="mobile-group-body">
                      <Link className="mobile-group-overview" href={group.href} onClick={close}>
                        All {group.label}
                      </Link>
                      {group.sections.map((section) => (
                        <div className="mobile-section" key={section.title}>
                          <span>{section.title}</span>
                          {section.links.map((item) => (
                            <Link href={item.href} key={`${section.title}-${item.label}-${item.href}`} onClick={close}>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div className="mobile-actions-footer">
              <Link href="/contact/support/" className="mobile-support-link" onClick={close}>
                Support
              </Link>
              <Link className="button" href="/contact/" onClick={close}>
                Book a briefing
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
