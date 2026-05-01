'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

function GridBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
    </div>
  );
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const isDark = document.documentElement.classList.contains('dark');
    const particleColor = isDark ? '255, 255, 255' : '0, 0, 0';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${0.04 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <GridBackground />
      <Particles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Name + Title + Intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--card-border)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-sm text-[var(--text-secondary)] font-mono">AVAILABLE FOR WORK</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[var(--text-primary)]">
                Leon
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[var(--primary)]" />
                <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium font-mono">
                  全栈开发工程师
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
            >
              8 年全栈开发经验，以 React、TypeScript、Node.js 为核心技术栈。从传统互联网到 Web3 DeFi 再到 AI 驱动开发，持续探索技术边界。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-lg font-bold text-lg hover:opacity-90 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看项目
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-[var(--card-border)] text-[var(--text-primary)] rounded-lg font-medium text-lg hover:border-[var(--primary)] transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                联系我
              </motion.a>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {['React', 'TypeScript', 'Web3', 'AI', 'Node.js'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-[var(--text-secondary)] border border-[var(--card-border)] rounded"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Robot Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="rgba(150, 150, 150, 0.12)"
              size={300}
            />
            <div className="w-full h-full dark:invert dark:brightness-110 dark:contrast-90 transition-[filter] duration-500">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute top-4 right-4 w-24 h-24 border-t border-r border-[var(--card-border)] rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border-b border-l border-[var(--card-border)] rounded-bl-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--card-border)] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[var(--text-secondary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
