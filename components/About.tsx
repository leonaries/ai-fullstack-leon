'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const aboutCards = [
  {
    icon: '📍',
    title: '基本信息',
    content: '求职意向：AI 应用开发 / AI 全栈开发',
    className: 'md:col-span-1',
  },
  {
    icon: '💼',
    title: '当前方向',
    content: 'AI 应用技术负责人 / 全栈工程交付',
    className: 'md:col-span-1',
  },
  {
    icon: '🧠',
    title: 'AI 应用落地',
    content: '私域销售 / 电商售前 / 内容生产 / 直播复用 / 销售培训 / 知识库治理',
    className: 'md:col-span-1',
  },
  {
    icon: '🛠',
    title: '技术栈',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'Milvus', 'Docker'],
    className: 'md:col-span-2',
  },
  {
    icon: '🤖',
    title: 'Agent 能力',
    content: 'LangGraph / 多智能体状态机 / Checkpointer / Tool Calling / SSE 流式网关 / MCP Server',
    className: 'md:col-span-1',
  },
  {
    icon: '⚙️',
    title: 'RAG 与模型工程',
    content: '混合检索 / 语义切片 / Metadata Filter / Cross-Encoder Rerank / pgvector / Milvus / SFT',
    className: 'md:col-span-1',
  },
  {
    icon: '🚀',
    title: '工程优势',
    content: '9 年 Web 全栈经验，熟悉高并发接口、日志追踪、灰度回滚、服务降级、性能优化与线上治理',
    className: 'md:col-span-2',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative">
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
          <span className="text-sm font-mono text-[var(--text-secondary)] tracking-widest uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">关于我</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={card.className}
            >
              <SpotlightCard className="h-full">
                <div className="p-6 h-full">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 font-mono">{card.title}</h3>
                  {card.tags ? (
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-[var(--text-secondary)] rounded-full border border-[var(--card-border)] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[var(--text-secondary)] leading-relaxed">{card.content}</p>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
