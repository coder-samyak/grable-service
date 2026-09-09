import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContactForm, GatedDownload } from "./Forms";

type Card = {
  title: string;
  body: string;
  href?: string;
};

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: string;
  primaryHref?: string;
  primaryCtaClass?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  secondaryCtaClass?: string;
  cards?: Card[];
  sections?: Card[];
  faqs?: Card[];
  route?: string;
  template?: "standard" | "service" | "federal" | "resource" | "contact" | "legal";
  backgroundImage?: string;
  processBackgroundImage?: string;
};

const templateFocus = {
  standard: [
    ["Discover", "Clarify goals, constraints, stakeholders, and the current operating model."],
    ["Prioritize", "Sequence the work by business value, risk, dependencies, and readiness."],
    ["Move", "Execute with practical acceptance criteria and clean handoff points."]
  ],
  service: [
    ["Scope", "Define the environment, integrations, data, users, controls, and ownership model."],
    ["Deliver", "Implement the agreed work with validation, documentation, and stakeholder checkpoints."],
    ["Support", "Prepare day-two operations, support paths, monitoring, and future change control."]
  ],
  federal: [
    ["Qualify", "Confirm procurement path, security expectations, stakeholders, and public-release constraints."],
    ["Package", "Prepare capability, compliance, hosting, and proposal-support materials."],
    ["Coordinate", "Route sensitive details through direct channels and keep public claims verifiable."]
  ],
  resource: [
    ["Orient", "Help buyers understand the decision, risk, or operating model before they commit scope."],
    ["Compare", "Frame practical options, trade-offs, prerequisites, and next-step questions."],
    ["Act", "Point readers to the matching service, assessment, or intake path."]
  ],
  contact: [
    ["Route", "Capture the request type, organization context, environment, and urgency."],
    ["Qualify", "Identify the right subject-matter owner and any protected details."],
    ["Respond", "Move the conversation into the right direct channel."]
  ],
  legal: [
    ["Transparent", "Plain-language explanation of what we collect, use, and share, and why."],
    ["In your control", "Clear choices over your information and how to exercise them."],
    ["Current", "Reviewed and updated as our practices and obligations change."]
  ]
} as const;

const templateLabels = {
  standard: { cards: "Priority paths", details: "Details", cardsTitle: "Structured paths for federal and commercial buyers." },
  service: { cards: "Service paths", details: "Delivery detail", cardsTitle: "What Grable delivers." },
  federal: { cards: "Federal paths", details: "Governance", cardsTitle: "Public-sector routes and controlled proof points." },
  resource: { cards: "Library", details: "Resource structure", cardsTitle: "Useful resources for evaluation and planning." },
  contact: { cards: "Contact paths", details: "Intake detail", cardsTitle: "Route the request to the right conversation." },
  legal: { cards: "Policy paths", details: "On this page", cardsTitle: "Legal information and policies." }
} as const;

function cleanText(value: string) {
  return value
    .replace(/\[[A-Z]+[^\]]*\]/g, "")
    .replace(/^\s*[—-]\s*/g, "")
    .replace(/\s+—\s*$/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function crumbsFromRoute(route?: string) {
  if (!route || route === "/") return [];
  const segments = route.split("/").filter(Boolean);

  return [
    { name: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      name: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      href: `/${segments.slice(0, index + 1).join("/")}/`
    }))
  ];
}

export function PageShell({
  eyebrow,
  title,
  intro,
  primaryCta = "Schedule a consultation",
  primaryHref = "/contact/",
  primaryCtaClass = "button",
  secondaryCta = "Explore services",
  secondaryHref = "/services/",
  secondaryCtaClass = "button secondary",
  cards = [],
  sections = [],
  faqs = [],
  route,
  template = "standard",
  backgroundImage,
  processBackgroundImage
}: PageShellProps) {
  const labels = templateLabels[template];
  const focusItems = templateFocus[template];
  const safeTitle = cleanText(title);
  const safeIntro = cleanText(intro);
  const safeEyebrow = cleanText(eyebrow);
  const safeCards = cards.map((card) => ({
    ...card,
    title: cleanText(card.title),
    body: cleanText(card.body)
  }));
  const safeSections = sections.map((section) => ({
    ...section,
    title: cleanText(section.title),
    body: cleanText(section.body)
  }));
  const safeFaqs = faqs.map((faq) => ({
    ...faq,
    title: cleanText(faq.title),
    body: cleanText(faq.body)
  }));

  return (
    <>
      <Breadcrumbs items={crumbsFromRoute(route)} />
      <section className={`page-hero ${backgroundImage ? 'relative' : ''}`}>
        {backgroundImage && (
          <img
            className="absolute inset-0 w-full h-full object-cover blur-[8px] opacity-60 z-0"
            src={backgroundImage}
            alt="Hero Background"
            style={{ pointerEvents: 'none' }}
          />
        )}
        <div className={`wrap hero-grid ${backgroundImage ? 'relative z-10' : ''}`}>
          <div className="hero-copy">
            <p className="eyebrow" style={backgroundImage ? { color: 'var(--mj-gold, #e0b43a)' } : {}}>{safeEyebrow}</p>
            <h1 style={backgroundImage ? { color: '#fdfbf7' } : {}}>{safeTitle}</h1>
            <p className="lead" style={backgroundImage ? { color: '#ffffff' } : {}}>{safeIntro}</p>
            <div className="cta-row">
              <Link className={primaryCtaClass} href={primaryHref}>
                {primaryCta}
              </Link>
              <Link className={secondaryCtaClass} href={secondaryHref}>
                {secondaryCta}
              </Link>
            </div>
          </div>
          <aside className="capability-panel" style={backgroundImage ? { background: 'transparent', borderColor: 'var(--mj-gold, #e0b43a)' } : {}}>
            <p className="panel-label" style={backgroundImage ? { color: '#ffffff' } : {}}>{template === "resource" ? "Reader path" : "Page focus"}</p>
            <div className="capability-list">
              {focusItems.map(([label, body]) => (
                <div key={label} style={backgroundImage ? { background: 'transparent', borderColor: 'var(--mj-gold, #e0b43a)' } : {}}>
                  <strong style={backgroundImage ? { color: '#fdfbf7' } : {}}>{label}</strong>
                  <span style={backgroundImage ? { color: '#ffffff' } : {}}>{body}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {safeCards.length > 0 ? (
        <section className="section">
          <p className="eyebrow">{labels.cards}</p>
          <h2>{labels.cardsTitle}</h2>
          <div className="card-grid">
            {safeCards.map((card) => {
              const content = (
                <>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {card.href ? <span>Learn more</span> : null}
                </>
              );

              return card.href ? (
                <Link className="card" href={card.href} key={card.title}>
                  {content}
                </Link>
              ) : (
                <div className="card" key={card.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {safeSections.length > 0 ? (
        <section className="section split-section">
          <div>
            <p className="eyebrow">{labels.details}</p>
            <h2>{template === "legal" ? "What this page covers." : "How the work is organized."}</h2>
          </div>
          <div className="component-stack">
            {safeSections.map((section) => (
              <article className="component-row" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {template !== "legal" ? (
        <section className={`section process-section ${processBackgroundImage ? 'relative' : ''}`}>
          {processBackgroundImage && (
            <img
              className="absolute inset-0 w-full h-full object-cover blur-[8px] opacity-60 z-0"
              src={processBackgroundImage}
              alt="Process Background"
              style={{ pointerEvents: 'none' }}
            />
          )}
          <div className={`section-heading ${processBackgroundImage ? 'relative z-10' : ''}`}>
            <p className="eyebrow" style={processBackgroundImage ? { color: 'var(--mj-gold, #e0b43a)' } : {}}>Process</p>
            <h2 style={processBackgroundImage ? { color: '#fdfbf7' } : {}}>Clear phases from assessment through operations.</h2>
          </div>
          <div className={`process-grid ${processBackgroundImage ? 'relative z-10' : ''}`}>
            {[
              { step: "Assess", body: "Clarify goals, environment, integrations, data, and constraints so scope reflects how you actually operate." },
              { step: "Plan", body: "Sequence the work by business value, risk, and dependencies, with clear acceptance criteria and owners." },
              { step: "Implement", body: "Execute the technical work with validation, documentation, and stakeholder checkpoints throughout." },
              { step: "Operate", body: "Hand off cleanly, then support day-two operations, monitoring, and future change control." }
            ].map(({ step, body }, index) => (
              <article className="process-card" key={step} style={processBackgroundImage ? { background: 'transparent', borderColor: 'var(--mj-gold, #e0b43a)' } : {}}>
                <span style={processBackgroundImage ? { color: 'var(--mj-gold, #e0b43a)' } : {}}>{String(index + 1).padStart(2, "0")}</span>
                <h3 style={processBackgroundImage ? { color: '#fdfbf7' } : {}}>{step}</h3>
                <p style={processBackgroundImage ? { color: '#ffffff' } : {}}>{body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {template === "federal" ? (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Procurement support</p>
            <h2>Current federal materials are available through direct request.</h2>
            <p>
              Procurement identifiers, certification details, partner information, contract paths, references, and
              performance materials can be shared through the appropriate direct channel when they are relevant to an
              engagement or evaluation.
            </p>
          </div>
          <GatedDownload title="Capability statement" />
        </section>
      ) : null}

      {safeFaqs.length > 0 ? (
        <section className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions.</h2>
          </div>
          {safeFaqs.map((faq) => (
            <details className="faq-item" key={faq.title}>
              <summary>{faq.title}</summary>
              <p>{faq.body}</p>
            </details>
          ))}
        </section>
      ) : null}

      {template === "contact" ? (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Intake</p>
            <h2>Route the request without exposing secrets or external IDs.</h2>
          </div>
          <div className="contact-layout">
            <ContactForm />
            <aside className="contact-aside">
              <div>
                <h3>What happens next</h3>
                <p>
                  We review your inquiry, route it to the right owner — sales, support, or federal programs — and
                  follow up to confirm scope, timeline, and next steps.
                </p>
              </div>
              <div>
                <h3>Prefer a direct route?</h3>
                <ul>
                  <li>
                    <Link href="/contact/sales/">Sales &amp; new engagements</Link>
                  </li>
                  <li>
                    <Link href="/contact/support/">Existing customer support</Link>
                  </li>
                  <li>
                    <Link href="/federal/">Federal &amp; public sector</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Who we are</h3>
                <p>
                  An SDVOSB delivering IBM Maximo migration, hosting, storage, AI infrastructure, and managed
                  operations for federal and commercial teams.
                </p>
              </div>
            </aside>
          </div>
        </section>
      ) : null}

      <section className="cta-section" style={{ background: 'var(--surface, #eae9df)' }}>
        <div className="wrap cta-panel">
          <div>
            <p className="eyebrow" style={{ color: 'var(--mj-gold, var(--gold))' }}>Next step</p>
            <h2 style={{ color: 'var(--ink, #2b2927)' }}>{template === "legal" ? "Questions about this policy?" : "Start with a practical scoping conversation."}</h2>
          </div>
          <Link className={primaryCtaClass} href={primaryHref}>
            {primaryCta}
          </Link>
        </div>
      </section>
    </>
  );
}
