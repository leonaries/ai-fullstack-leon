'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from './ui/spotlight-card';

const experiences = [
  {
    period: '2024.12 - 至今',
    company: '深圳市翌升科技有限公司',
    position: 'AI 应用架构师',
    responsibilities: [
      '负责电商 AI 应用体系从 0 到 1 建设，覆盖私域销售、独立站售前、内容生产、直播复用、商品素材与销售培训',
      '主导 AI 销售辅助与知识库建设，结合会话记忆、意向识别、混合检索、素材推荐与人工接管，提升复杂商品咨询的稳定性',
      '建立销售语料治理、Prompt 评测与反馈闭环，将可信数据复用于 RAG、模型微调、销售培训和质量评测',
      '将 LLM、RAG、记忆、Prompt、Embedding / Rerank 等能力服务化，完善日志、告警、灰度与回滚机制',
    ],
  },
  {
    period: '2019.06 - 2024.12',
    company: '北京中交兴路信息科技有限公司',
    position: '前端架构师 / 全栈开发',
    responsibilities: [
      '负责物流业务 Web 系统的前端架构与 0 到 1 交付，完成技术选型、应用骨架、状态与接口规范设计',
      '建设通用组件与工程化体系，统一构建配置、代码规范、质量检查和发布流程，降低多团队协作成本',
      '攻克复杂数据渲染、跨模块状态协同和页面性能瓶颈，为团队提供架构评审与疑难问题定位支持',
      '参与线上稳定性治理，通过服务器日志、接口链路和运行状态完成故障追踪与修复',
    ],
  },
  {
    period: '2017.07 - 2019.04',
    company: '新潮传媒集团',
    position: '高级前端工程师',
    responsibilities: [
      '参与网站项目需求讨论、研发时间评估、测试用例评审',
      '负责网站业务逻辑代码的编辑以及前端页面实现和数据渲染',
      '负责项目工程化搭建/调优、开发和页面性能调优',
      '负责 Web 前端新技术的研究与开发',
    ],
  },
];

function TimelineDot({ index, isInView }: { index: number; isInView: boolean }) {
  return (
    <div className="absolute left-0 top-3 -ml-[9px] z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.1, type: 'spring', stiffness: 300 }}
        className="relative"
      >
        <div className="w-[18px] h-[18px] rounded-full bg-[var(--primary)] shadow-sm" />
        {index === 0 && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--primary)]"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
    </div>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10 pb-14 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--card-border)]" />

      <TimelineDot index={index} isInView={isInView} />

      <SpotlightCard>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{experience.company}</h3>
              <p className="text-lg text-[var(--text-primary)] font-medium font-mono">{experience.position}</p>
            </div>
            <span className="text-sm text-[var(--text-secondary)] bg-[var(--card-bg)] px-4 py-1.5 rounded-full border border-[var(--card-border)] mt-2 md:mt-0 inline-block font-mono">
              {experience.period}
            </span>
          </div>

          <ul className="space-y-3">
            {experience.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 + idx * 0.08 }}
                className="flex items-start text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--primary)] mr-3 mt-1 shrink-0">▹</span>
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-[var(--text-secondary)] tracking-widest uppercase mb-2 block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">工作经历</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
