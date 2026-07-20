'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const skills = [
  {
    category: 'AI 应用工程',
    icon: '🤖',
    items: ['LangGraph', 'LangChain', 'Multi-Agent', 'Tool Calling', 'Checkpointer', 'SSE 流式网关', 'MCP Server', 'Prompt 管理', 'LLM-as-a-Judge', 'JSON Mode', 'Pydantic Schema'],
  },
  {
    category: 'RAG 与模型工程',
    icon: '🧠',
    items: ['混合检索', '语义切片', 'BM25', 'HNSW', 'Cross-Encoder Rerank', 'pgvector', 'Milvus', 'Embedding', 'SFT', 'QLoRA', 'LoRA', 'KV Cache', 'Prefix Caching'],
  },
  {
    category: '全栈开发',
    icon: '🚀',
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'asyncio', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Linux'],
  },
  {
    category: '工程化',
    icon: '🛠️',
    items: ['结构化日志', 'Request-ID', 'Trace', '灰度发布', '回滚机制', '限流降级', '内存泄漏分析', 'CI/CD', 'Git', 'Monorepo', 'OpenAPI-TypeScript'],
  },
  {
    category: '实时语音与多模态',
    icon: '🎙️',
    items: ['ASR', 'TTS', '声音复刻', 'RTC', 'FEC 前向纠错', 'Jitter Buffer', 'OCR', 'VLM', 'ASR 转写', '素材中心', '直播切片'],
  },
  {
    category: '前端与 Web3',
    icon: '🔗',
    items: ['React Hooks', 'Vue', 'Ant Design', 'Tailwind CSS', 'ECharts', 'Wagmi', 'Viem', 'Ethers.js', 'Reown AppKit', '钱包接入', '链上数据'],
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
