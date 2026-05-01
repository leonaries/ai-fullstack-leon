'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/app/projects-data';
import { SpotlightCard } from '@/components/ui/spotlight-card';

// Animated counter for section numbers
function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('00');

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setDisplay(value), delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span ref={ref} className="font-mono text-5xl font-bold text-[var(--primary)]/10 absolute -top-4 -left-2 select-none">
      {display}
    </span>
  );
}

// Typing effect for header subtitle
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

// Staggered tech tags
function TechTags({ tags, delay = 0 }: { tags: string[]; delay?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay + i * 0.05 }}
          className="px-3 py-1.5 text-sm text-[var(--text-secondary)] rounded-lg border border-[var(--card-border)] font-mono hover:border-[var(--primary)] hover:text-[var(--text-primary)] transition-colors cursor-default"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

// Animated highlight item with hover effect
function HighlightItem({ text, index, isInView }: { text: string; index: number; isInView: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-[var(--primary)]/5 transition-colors"
    >
      <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mt-0.5 group-hover:bg-[var(--primary)]/20 transition-colors">
        <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{index + 1}</span>
      </span>
      <span className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
        {text}
      </span>
    </motion.li>
  );
}

// Section component with SpotlightCard and animated number
function Section({
  title,
  icon,
  number,
  delay,
  children,
}: {
  title: string;
  icon: string;
  number: string;
  delay: number;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.5 }}
    >
      <SpotlightCard>
        <div className="p-6 md:p-8 relative">
          <AnimatedNumber value={number} delay={delay * 0.5 + 0.2} />
          <div className="flex items-center gap-3 mb-5 relative">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-mono">{title}</h2>
          </div>
          {children}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, margin: '-60px' });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header with grid background */}
      <div className="relative overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回项目列表
            </Link>
          </motion.div>

          {/* Project title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                {project.name}
              </h1>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-all text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  访问项目
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </div>

            {/* Description with typing effect */}
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-3xl font-mono">
              <TypingText text={project.description} delay={0.4} />
            </p>

            {/* Tech tags with stagger animation */}
            <TechTags tags={project.tech} delay={0.6} />
          </motion.div>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          <Section title="项目概述" icon="📋" number="01" delay={0}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.overview}</p>
          </Section>

          <Section title="我的职责" icon="👨‍💻" number="02" delay={0.2}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.role}</p>
          </Section>

          <Section title="核心业务" icon="💼" number="03" delay={0.4}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.business}</p>
          </Section>

          <Section title="项目亮点" icon="✨" number="04" delay={0.6}>
            <ul ref={highlightsRef} className="space-y-1">
              {project.detail.highlights.map((h, i) => (
                <HighlightItem key={i} text={h} index={i} isInView={highlightsInView} />
              ))}
            </ul>
          </Section>

          <Section title="技术方案" icon="🛠" number="05" delay={0.8}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.techDetail}</p>
          </Section>
        </div>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 pt-8 border-t border-[var(--card-border)] text-center"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--primary)] transition-all font-mono text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回项目列表
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
