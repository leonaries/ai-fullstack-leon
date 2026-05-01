'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?{}[]<>/\\|~^';
const REVEAL_TEXT = 'Leon';
const DURATION = 2800; // total intro duration in ms

function MatrixRain({ isDone }: { isDone: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Random brightness for each character
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#ffffff';
        } else if (brightness > 0.8) {
          ctx.fillStyle = '#aaaaaa';
        } else {
          ctx.fillStyle = '#333333';
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function ScrambleText({ text, startDelay = 500 }: { text: string; startDelay?: number }) {
  const [display, setDisplay] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    const finalChars = text.split('');
    const totalSteps = 20;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;

      const result = finalChars.map((char, i) => {
        const charProgress = (progress - i * 0.1);
        if (charProgress >= 0.6) return char;
        if (charProgress >= 0) return CHARS[Math.floor(Math.random() * CHARS.length)];
        return ' ';
      }).join('');

      setDisplay(result);

      if (step >= totalSteps) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className="font-mono text-6xl md:text-8xl font-bold text-white tracking-wider">
      {display}
    </span>
  );
}

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 600); // wait for exit animation
    }, DURATION);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <MatrixRain isDone={isDone} />
          <div className="relative z-10 text-center">
            <ScrambleText text={REVEAL_TEXT} startDelay={600} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="mt-4 text-sm font-mono text-white/40 tracking-widest"
            >
              FULL STACK DEVELOPER
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
