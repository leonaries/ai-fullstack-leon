'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const aboutCards = [
  {
    icon: '📍',
    title: '基本信息',
    content: '求职意向：AI 全栈开发',
    className: 'md:col-span-1',
  },
  {
    icon: '💼',
    title: '当前方向',
    content: 'AI 应用架构师 / 全栈工程交付',
    className: 'md:col-span-1',
  },
  {
    icon: '🧠',
    title: 'AI 应用落地',
    content: 'Prompt 版本管理 / 自动化评测 / 负样本优化 / 结构化输出 / 业务闭环落地',
    className: 'md:col-span-1',
  },
  {
    icon: '🛠',
    title: '技术栈',
    tags: ['Next.js', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'asyncio', 'Pydantic', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Milvus', 'Docker'],
    className: 'md:col-span-2',
  },
  {
    icon: '🤖',
    title: 'Agent 能力',
    content: 'Function Calling / Tool Use / ReAct / Multi-Agent / LangGraph / LangSmith / Checkpointer',
    className: 'md:col-span-1',
  },
  {
    icon: '⚙️',
    title: 'RAG 与模型工程',
    content: '文档切片 / Embedding / HNSW 混合检索 / Cross-Encoder Rerank / Metadata 过滤 / 权重调优',
    className: 'md:col-span-1',
  },
  {
    icon: '🚀',
    title: '工程优势',
    content: '熟悉 AI 对话界面、ReadableStream / SSE 流式渲染、Markdown 实时解析、Agent 工作流可视化与全链路交付',
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
