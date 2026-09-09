"use client";

import { ReactNode, useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsapConfig";

type StepProps = {
  stepNumber: number;
  title: string;
  body: string;
  href?: string;
  content?: ReactNode;
  accent?: string;
  backgroundImage?: string;
  isDarkTheme?: boolean;
};

export function StepSection({ stepNumber, title, body, href, content, accent = "#e0b43a", backgroundImage, isDarkTheme }: StepProps) {
  const isDark = isDarkTheme || !!backgroundImage;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!sectionRef.current) return;
        
        const copy = sectionRef.current.querySelector(".step-copy");
        const mockup = sectionRef.current.querySelector(".step-content");

        if (copy) {
          gsap.fromTo(copy, 
            { y: 60, opacity: 0 }, 
            { 
              y: 0, 
              opacity: 1, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: true
              }
            }
          );
        }

        if (mockup) {
          gsap.fromTo(mockup, 
            { y: 100, opacity: 0, scale: 0.94 }, 
            { 
              y: 0, 
              opacity: 1, 
              scale: 1, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: true
              }
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`step-section ${backgroundImage ? 'relative' : ''}`} style={{ "--step-accent": accent } as React.CSSProperties}>
      {backgroundImage && (
        <img
          className="absolute inset-0 w-full h-full object-cover blur-[8px] opacity-60 z-0"
          src={backgroundImage}
          alt="Step Background"
          style={{ pointerEvents: 'none' }}
        />
      )}
      <div className="step-sticky">
        <div className={`step-grid ${backgroundImage ? 'relative z-10' : ''}`}>
          <div className="step-copy">
            <p className="step-number">
              STEP {String(stepNumber).padStart(1, "0")} <span aria-hidden="true">→</span>
            </p>
            <h2 className="step-title" style={isDark ? { color: '#fdfbf7' } : {}}>{title}</h2>
            <p className="step-body" style={isDark ? { color: '#ffffff' } : {}}>{body}</p>
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
