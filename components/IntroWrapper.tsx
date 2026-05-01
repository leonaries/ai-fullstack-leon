'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

const IntroAnimation = dynamic(() => import('./IntroAnimation'), { ssr: false });

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introExited, setIntroExited] = useState(false);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
    // Small delay to let exit animation finish before unmounting
    requestAnimationFrame(() => setIntroExited(true));
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleComplete} />}
      <div
        style={{
          opacity: introExited ? 1 : 0,
          transition: 'opacity 0.5s ease',
          // Prevent layout/paint of hidden content
          visibility: introExited ? 'visible' : 'hidden',
        }}
      >
        {children}
      </div>
    </>
  );
}
