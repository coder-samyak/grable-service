import Link from "next/link";
import { footerGroups } from "../data/navigation";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img alt="" aria-hidden className="brand-mark" height={128} src="/images/grable-mark.png" width={204} />
            <span className="brand-name">Grable Services</span>
          </Link>
          <p>
            IT consulting and IBM infrastructure services for organizations planning Maximo modernization,
            hosting, storage, AI infrastructure, integration, and managed operations.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link href={link.href} key={link.href} data-cursor="zoom">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 Grable Services. All rights reserved.</p>
        <p className="footer-tagline">Technology. Solutions. Results.</p>
      </div>
    </footer>
  );
}
