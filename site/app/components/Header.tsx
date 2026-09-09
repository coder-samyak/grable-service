"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { primaryNav, utilityNav } from "../data/navigation";
import { AudienceSwitcher } from "./AudienceSwitcher";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = usePathname() === "/";

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function open(groupHref: string) {
    cancelClose();
    setOpenMenu(groupHref);
  }

  function closeSoon() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }

  function closeNow() {
    cancelClose();
    setOpenMenu(null);
  }

  return (
    <header className={isHome ? "site-header site-header--home" : "site-header"}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="utility-actions">
        <div className="wrap utility-actions-inner">
          <AudienceSwitcher />
          <form action="/resources/" method="GET" className="nav-search-form">
            <input 
              type="search" 
              name="search" 
              placeholder="Search..." 
              className="nav-search-input"
              aria-label="Search site"
            />
            <button type="submit" className="nav-search-button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>
          {utilityNav.map((item) => (
            <Link href={item.href} key={`${item.label}-${item.href}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <Image
            alt=""
            aria-hidden
            className="brand-mark"
            height={128}
            priority
            src="/images/grable-mark.png"
            width={204}
          />
          <span className="brand-name">Grable Services</span>
        </Link>
        <div className="nav-center">
          {primaryNav.map((group) => (
            <div
              className={openMenu === group.href ? "mega open" : "mega"}
              key={`${group.label}-${group.href}`}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) closeNow();
              }}
              onFocus={() => open(group.href)}
              onKeyDown={(event) => {
                if (event.key === "Escape") closeNow();
              }}
              onMouseEnter={() => open(group.href)}
              onMouseLeave={closeSoon}
            >
              <Link aria-expanded={openMenu === group.href} href={group.href} onClick={closeNow}>
                {group.label}
              </Link>
              <div className="mega-panel rich-mega" onMouseEnter={cancelClose}>
                <div className="mega-intro">
                  <p className="panel-label">{group.label}</p>
                  <strong>{group.summary}</strong>
                  <Link href={group.href} onClick={closeNow}>
                    {group.seeAllLabel}
                  </Link>
                </div>
                <div className="mega-columns">
                  {group.sections.map((section) => (
                    <div className="mega-section" key={section.title}>
                      <h2>{section.title}</h2>
                      {section.links.map((item) => (
                        <Link href={item.href} key={`${section.title}-${item.label}-${item.href}`} onClick={closeNow}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                {group.featured ? (
                  <Link className="mega-featured" href={group.featured.href} onClick={closeNow}>
                    <span>{group.featured.label}</span>
                    <small>{group.featured.description}</small>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="button" href="/contact/">
            Book a briefing
          </Link>
          <MobileDrawer />
        </div>
      </nav>
    </header>
  );
}
