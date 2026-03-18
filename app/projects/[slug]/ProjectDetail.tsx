'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/app/projects-data';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {project.name}
              </h1>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
                >
                  访问项目
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-[var(--primary)]/10 text-[var(--primary)] rounded-full border border-[var(--primary)]/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8">
          <Section title="项目概述" icon="📋" delay={0.2}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.overview}</p>
          </Section>

          <Section title="我的职责" icon="👨‍💻" delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.role}</p>
          </Section>

          <Section title="核心业务" icon="💼" delay={0.4}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.business}</p>
          </Section>

          <Section title="项目亮点" icon="✨" delay={0.5}>
            <ul className="space-y-3">
              {project.detail.highlights.map((h, i) => (
                <li key={i} className="flex items-start text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--accent)] mr-3 mt-1 shrink-0">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="技术方案" icon="🛠" delay={0.6}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detail.techDetail}</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, delay, children }: { title: string; icon: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 md:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-bold text-[var(--text-primary)]">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
