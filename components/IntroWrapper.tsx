'use client';

import { useState, useCallback } from 'react';
import IntroAnimation from './IntroAnimation';

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleComplete} />}
      <div
        className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}
      >
        {children}
      </div>
    </>
  );
}
