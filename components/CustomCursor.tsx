'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        *,
        *::before,
        *::after,
        html,
        body,
        a,
        button,
        input,
        select,
        textarea,
        [role="button"],
        [cursor="pointer"] {
          cursor: none !important;
        }
      `}</style>
      <div
        className="fixed pointer-events-none z-[99999] transition-transform duration-100 ease-out"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transform: isPointer ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        {/* Robot head cursor */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-md transition-all duration-150 ${isPointer ? 'opacity-90' : 'opacity-70'}`}
        >
          {/* Antenna */}
          <line
            x1="12" y1="1" x2="12" y2="4"
            stroke="var(--primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="1" r="1" fill="var(--primary)" />

          {/* Head */}
          <rect
            x="4" y="4" width="16" height="14" rx="3"
            fill="var(--primary)"
            opacity="0.9"
          />

          {/* Eyes */}
          <circle cx="9" cy="11" r="2" fill="var(--background)" />
          <circle cx="15" cy="11" r="2" fill="var(--background)" />

          {/* Eye pupils */}
          <circle cx="9" cy="11" r="0.8" fill="var(--primary)" />
          <circle cx="15" cy="11" r="0.8" fill="var(--primary)" />

          {/* Mouth */}
          <rect x="8" y="14" width="8" height="1.5" rx="0.75" fill="var(--background)" />

          {/* Ears */}
          <rect x="1" y="8" width="3" height="5" rx="1.5" fill="var(--primary)" opacity="0.7" />
          <rect x="20" y="8" width="3" height="5" rx="1.5" fill="var(--primary)" opacity="0.7" />

          {/* Neck bolt */}
          <rect x="10" y="18" width="4" height="3" rx="1" fill="var(--primary)" opacity="0.6" />

          {/* Highlight on hover */}
          {isPointer && (
            <rect
              x="4" y="4" width="16" height="14" rx="3"
              fill="none"
              stroke="var(--background)"
              strokeWidth="1"
              opacity="0.5"
            />
          )}
        </svg>
      </div>
    </>
  );
}
