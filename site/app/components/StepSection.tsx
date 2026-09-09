"use client";

import { ReactNode } from "react";
import Link from "next/link";

type StepProps = {
  stepNumber: number;
  title: string;
  body: string;
  href?: string;
  content?: ReactNode;
  accent?: string;
};

export function StepSection({ stepNumber, title, body, href, content, accent = "#e0b43a" }: StepProps) {
  return (
    <section className="step-section" style={{ "--step-accent": accent } as React.CSSProperties}>
      <div className="step-sticky">
        <div className="step-grid">
          <div className="step-copy">
            <p className="step-number">
              STEP {String(stepNumber).padStart(1, "0")} <span aria-hidden="true">→</span>
            </p>
            <h2 className="step-title">{title}</h2>
            <p className="step-body">{body}</p>
            {href && (
              <Link href={href} className="step-link">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          {content && <div className="step-content">{content}</div>}
        </div>
      </div>
    </section>
  );
}
