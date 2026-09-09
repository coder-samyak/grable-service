"use client";

import { useEffect, useId, useState } from "react";

const routingOptions = [
  "Sales",
  "Support",
  "Hosting",
  "MAS 9 Upgrade",
  "Storage Services",
  "AI Hosting",
  "IBM Reselling",
  "General"
];

export function ContactForm({ mode = "contact" }: { mode?: "contact" | "newsletter" }) {
  const [mounted, setMounted] = useState(false);
  const id = useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const routeId = `${id}-route`;
  const messageId = `${id}-message`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div aria-hidden="true" className="form-shell form-shell-loading" suppressHydrationWarning />;
  }

  if (mode === "newsletter") {
    return (
      <form autoComplete="off" className="form-shell" data-form-type="other" data-lpignore="true" suppressHydrationWarning>
        <div className="field" suppressHydrationWarning>
          <label htmlFor={emailId}>Work email</label>
          <input
            autoComplete="off"
            data-1p-ignore="true"
            data-form-type="other"
            data-lpignore="true"
            id={emailId}
            name="email"
            placeholder="work email"
            type="email"
          />
        </div>
        <button className="button" type="button">
          Request updates
        </button>
        <p>Share your work email and Grable will route follow-up through the appropriate contact path.</p>
      </form>
    );
  }

  return (
    <form autoComplete="off" className="form-shell" data-form-type="other" data-lpignore="true" suppressHydrationWarning>
      <div className="form-grid">
        <div className="field" suppressHydrationWarning>
          <label htmlFor={nameId}>Name</label>
          <input
            autoComplete="off"
            data-1p-ignore="true"
            data-form-type="other"
            data-lpignore="true"
            id={nameId}
            name="name"
            type="text"
          />
        </div>
        <div className="field" suppressHydrationWarning>
          <label htmlFor={emailId}>Work email</label>
          <input
            autoComplete="off"
            data-1p-ignore="true"
            data-form-type="other"
            data-lpignore="true"
            id={emailId}
            name="email"
            placeholder="work email"
            type="email"
          />
        </div>
      </div>
      <div className="field" suppressHydrationWarning>
        <label htmlFor={routeId}>Inquiry type</label>
        <select
          autoComplete="off"
          data-1p-ignore="true"
          data-form-type="other"
          data-lpignore="true"
          id={routeId}
          name="route"
          defaultValue="General"
        >
          {routingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field" suppressHydrationWarning>
        <label htmlFor={messageId}>Project notes</label>
        <textarea
          autoComplete="off"
          data-1p-ignore="true"
          data-form-type="other"
          data-lpignore="true"
          id={messageId}
          name="message"
          rows={5}
        />
      </div>
      <button className="button" type="button">
        Prepare inquiry
      </button>
      <p>Use this form to prepare the right intake details before a direct conversation with Grable.</p>
    </form>
  );
}

export function GatedDownload({ title }: { title: string }) {
  return (
    <div className="download-shell">
      <h3>{title}</h3>
      <p>Request this asset and Grable will provide the current public version through the right follow-up path.</p>
      <ContactForm mode="newsletter" />
    </div>
  );
}
