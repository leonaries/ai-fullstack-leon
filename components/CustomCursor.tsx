'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const pointerRef = useRef(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (!visibleRef.current) {
        visibleRef.current = true;
        cursor.style.opacity = '1';
      }

      // Check clickable via event target data attribute or tag
      const target = e.target as HTMLElement;
      const clickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null;

      if (clickable !== pointerRef.current) {
        pointerRef.current = clickable;
        cursor.style.transform = clickable
          ? 'translate(-12px, -12px) scale(1.3)'
          : 'translate(-12px, -12px) scale(1)';
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      cursor.style.opacity = '0';
    };

    // Use rAF for smooth position updates
    const tick = () => {
      cursor.style.left = `${posRef.current.x}px`;
      cursor.style.top = `${posRef.current.y}px`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on SSR
  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          *, *::before, *::after,
          a, button, input, select, textarea,
          [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[99999] will-change-transform"
        style={{
          opacity: 0,
          transform: 'translate(-12px, -12px) scale(1)',
          transition: 'transform 0.1s ease-out, opacity 0.15s',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md opacity-80"
        >
          <line x1="12" y1="1" x2="12" y2="4" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="1" r="1" fill="var(--primary)" />
          <rect x="4" y="4" width="16" height="14" rx="3" fill="var(--primary)" opacity="0.9" />
          <circle cx="9" cy="11" r="2" fill="var(--background)" />
          <circle cx="15" cy="11" r="2" fill="var(--background)" />
          <circle cx="9" cy="11" r="0.8" fill="var(--primary)" />
          <circle cx="15" cy="11" r="0.8" fill="var(--primary)" />
          <rect x="8" y="14" width="8" height="1.5" rx="0.75" fill="var(--background)" />
          <rect x="1" y="8" width="3" height="5" rx="1.5" fill="var(--primary)" opacity="0.7" />
          <rect x="20" y="8" width="3" height="5" rx="1.5" fill="var(--primary)" opacity="0.7" />
          <rect x="10" y="18" width="4" height="3" rx="1" fill="var(--primary)" opacity="0.6" />
        </svg>
      </div>
    </>
  );
}
