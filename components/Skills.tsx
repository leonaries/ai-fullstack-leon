'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const skills = [
  {
    category: '前端开发',
    icon: '⚛️',
    items: ['React', 'Vue', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SSR', '响应式布局', '国际化', '多端适配'],
  },
  {
    category: 'Web3',
    icon: '🔗',
    items: ['Wagmi', 'Viem', 'Ethers.js', 'Reown AppKit', '钱包接入', '合约调用', '事件监听', '链上数据读取', '交易生命周期', 'Gas/Nonce'],
  },
  {
    category: '后端开发',
    icon: '🚀',
    items: ['Node.js', 'NestJS', 'TypeORM', 'Python', 'FastAPI', 'SQLAlchemy', 'LangChain', 'PostgreSQL', 'Supabase', 'Docker'],
  },
  {
    category: '工程化',
    icon: '🛠️',
    items: ['Webpack', 'Vite', 'pnpm', 'Lerna', 'Storybook', 'Biome', 'Jenkins', 'OpenAPI-TypeScript', 'CI/CD', 'Git', 'Monorepo'],
  },
  {
    category: 'AI 能力',
    icon: '🤖',
    items: ['Claude Code', 'Codex', 'Gemini', 'Dify', 'Coze', 'Multi-Agent', 'Skills', 'RAG', 'MCP', 'LangChain', 'Workflow', 'LLM 应用集成'],
  },
  {
    category: '性能与基建',
    icon: '📐',
    items: ['浏览器渲染机制', 'HTTP 协议', '缓存策略', '首屏优化', '构建优化', '通用组件封装', '低代码报表', '接口层抽象', '规范治理'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-[var(--text-secondary)] tracking-widest uppercase mb-2 block">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">技能专长</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <div className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{skill.icon}</span>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] font-mono">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + idx * 0.05 }}
                        className="px-4 py-2 text-sm text-[var(--text-secondary)] rounded-lg border border-[var(--card-border)] hover:border-[var(--primary)] hover:text-[var(--text-primary)] transition-all cursor-default font-mono"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
