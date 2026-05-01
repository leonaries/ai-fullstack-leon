'use client';

import React, { useRef, useEffect, type ReactNode } from 'react';

// Single global pointer tracker shared across all SpotlightCard instances
let globalX = 0;
let globalY = 0;
let listenerAttached = false;
const cards = new Set<HTMLDivElement>();

function syncPointer(e: PointerEvent) {
  globalX = e.clientX;
  globalY = e.clientY;
  // Batch update all cards in one pass
  for (const card of cards) {
    card.style.setProperty('--x', globalX.toFixed(0));
    card.style.setProperty('--y', globalY.toFixed(0));
    card.style.setProperty('--xp', (globalX / window.innerWidth).toFixed(2));
    card.style.setProperty('--yp', (globalY / window.innerHeight).toFixed(2));
  }
}

function ensureListener() {
  if (!listenerAttached) {
    document.addEventListener('pointermove', syncPointer, { passive: true });
    listenerAttached = true;
  }
}

function removeListenerIfEmpty() {
  if (cards.size === 0 && listenerAttached) {
    document.removeEventListener('pointermove', syncPointer);
    listenerAttached = false;
  }
}

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    cards.add(el);
    ensureListener();
    return () => {
      cards.delete(el);
      removeListenerIfEmpty();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-glow
      style={{
        '--base': '0',
        '--spread': '0',
        '--saturation': '0',
        '--lightness': '65',
        '--radius': '16',
        '--border': '1',
        '--backdrop': 'var(--card-bg)',
        '--backup-border': 'var(--card-border)',
        '--size': '250',
        '--outer': '1',
        '--border-size': 'calc(var(--border, 1) * 1px)',
        '--spotlight-size': 'calc(var(--size, 250) * 1px)',
        '--hue': '0',
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(0 0% 50% / var(--bg-spot-opacity, 0.04)), transparent
        )`,
        backgroundColor: 'var(--backdrop, transparent)',
        backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
        border: 'var(--border-size) solid var(--backup-border)',
        position: 'relative',
        touchAction: 'none',
      } as React.CSSProperties}
      className={`rounded-2xl relative ${className}`}
    >
      <div data-glow />
      {children}
    </div>
  );
};

export { SpotlightCard };
