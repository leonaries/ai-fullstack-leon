'use client';

import React, { useEffect, useRef, type ReactNode } from 'react';

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
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
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
