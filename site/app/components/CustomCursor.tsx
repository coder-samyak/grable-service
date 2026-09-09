"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="zoom"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9998] rounded-full flex items-center justify-center"
        style={{
          width: '32px',
          height: '32px',
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHovering ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 255, 255, 0.2)',
          border: isHovering ? '1px solid rgba(255, 215, 0, 0.8)' : '1px solid rgba(255, 255, 255, 0.5)',
          transform: `translate(-50%, -50%) scale(${isHovering ? 3.5 : 1})`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, border 0.3s',
          willChange: 'transform, left, top'
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: '8px',
          height: '8px',
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHovering ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)',
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s',
          willChange: 'transform, left, top'
        }}
      />
    </>
  );
}
