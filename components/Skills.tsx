'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const skills = [
  {
    category: 'AI 应用工程',
    icon: '🤖',
    items: ['Prompt Engineering', 'Prompt 版本管理', '自动化评测', '负样本优化', 'Pydantic Schema', 'JSON Mode', 'Function Calling', 'Tool Use', 'ReAct', 'Multi-Agent'],
  },
  {
    category: 'RAG 与模型工程',
    icon: '🧠',
    items: ['文档切片', 'Embedding', 'HNSW', '混合检索', 'Cross-Encoder Rerank', 'Metadata 过滤', '权重调优', 'pgvector', 'Milvus', 'SFT', 'QLoRA', 'LoRA'],
  },
  {
    category: 'LLM 性能与工作流',
    icon: '🚀',
    items: ['Prefix Caching', 'KV Cache', 'TTFT 优化', 'Token 分级控制', '多模型动态路由', 'LangGraph', 'LangChain', 'SubGraph', 'Checkpointer', 'LangSmith'],
  },
  {
    category: '全栈开发',
    icon: '🛠️',
    items: ['Next.js', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'asyncio', 'Pydantic', 'Node.js', 'NestJS', 'Express'],
  },
  {
    category: '前端 AI 交互',
    icon: '🎙️',
    items: ['AI 对话界面', 'ReadableStream', 'SSE', 'Markdown 实时解析', 'Agent 工作流可视化', '组件化架构', 'ASR', 'TTS', 'OCR', 'VLM'],
  },
  {
    category: '工程与数据',
    icon: '🔗',
    items: ['PostgreSQL', '向量数据库', 'Docker', 'Linux', 'Git', '结构化日志', 'Request-ID', 'Trace', 'CI/CD', '灰度发布', '回滚机制', '限流降级'],
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
