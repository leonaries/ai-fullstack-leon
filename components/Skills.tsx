'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CardHoverEffect from './CardHoverEffect';

const skills = [
  {
    category: '前端基础',
    icon: '⚛️',
    items: ['React', 'Vue', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Web3',
    icon: '🔗',
    items: ['Wagmi', 'Viem', 'Ethers.js', 'Solidity', 'DeFi', 'Smart Contracts'],
  },
  {
    category: '后端 & DevOps',
    icon: '🚀',
    items: ['Node.js', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Supabase', 'Docker', 'K8S', 'AWS', 'PM2', 'Nginx'],
  },
  {
    category: '工程化',
    icon: '🛠️',
    items: ['Webpack', 'Vite', 'CI/CD', 'Git', 'Monorepo', 'ESLint'],
  },
  {
    category: 'AI 工具 & 应用',
    icon: '🤖',
    items: ['Cursor', 'Claude Code', 'Codex', 'Gemini', 'OpenClaw', 'MCP', 'AI Agent', 'RAG', 'LangChain', 'Workflow'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">技能专长</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHoverEffect className="h-full">
                <div className="relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{skill.icon}</span>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + idx * 0.05 }}
                        className="px-4 py-2 text-sm bg-[var(--background)] text-[var(--text-primary)] rounded-lg border border-[var(--card-border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
