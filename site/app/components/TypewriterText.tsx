"use client";
import { useState, useEffect } from "react";

export function TypewriterText({ text, delay = 0, speed = 40, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, started, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!isDone && started && (
        <span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-pulse align-middle" style={{ marginTop: '-0.1em' }}></span>
      )}
    </span>
  );
}
