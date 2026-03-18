'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2024 - 至今',
    company: 'Dapplink',
    position: '高级全栈开发',
    responsibilities: [
      '负责 Phoenix DeFi 平台的全栈开发，使用 React 19 + Wagmi2 + Viem 构建高性能 DApp',
      '优化 RPC 调用性能，提升 2-5 倍响应速度，显著改善用户体验',
      '开发 MPC 资管系统，实现 Web3 商户全链路门户解决方案',
      '使用 Three.js 和 Framer Motion 打造沉浸式品牌官网体验',
    ],
  },
  {
    period: '2021 - 2024',
    company: '北京中交车旺科技有限公司',
    position: '高级前端开发',
    responsibilities: [
      '主导物流通平台开发，使用 React + TypeScript 构建企业级应用',
      '通过组件化和工程化实践，将开发效率提升 100%',
      '集成 Echarts 实现复杂数据可视化，提升业务决策效率',
      '建立前端规范和最佳实践，提升团队代码质量',
    ],
  },
  {
    period: '2019 - 2021',
    company: '智汇安新',
    position: '前端组长',
    responsibilities: [
      '带领前端团队完成多个企业级项目交付',
      '制定前端技术选型和架构设计方案',
      '推动团队技术升级，引入现代化前端工程化工具',
      '负责代码审查和技术培训，提升团队整体能力',
    ],
  },
  {
    period: '2017 - 2019',
    company: '新潮传媒',
    position: '前端工程师',
    responsibilities: [
      '参与公司核心产品的前端开发工作',
      '使用 Vue.js 和 React 构建多个业务系统',
      '与设计师和后端工程师紧密协作，确保产品质量',
      '持续学习新技术，为团队引入最佳实践',
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
        <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-lg shadow-[var(--primary)]/40" />
        {/* Pulse ring */}
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
      {/* Timeline line segment */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/60 to-[var(--card-border)]" />

      <TimelineDot index={index} isInView={isInView} />

      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{experience.company}</h3>
            <p className="text-lg text-[var(--primary)] font-medium">{experience.position}</p>
          </div>
          <span className="text-sm text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full border border-[var(--accent)]/20 mt-2 md:mt-0 inline-block font-medium">
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
              <span className="text-[var(--accent)] mr-3 mt-1 shrink-0">▹</span>
              <span>{resp}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">工作经历</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
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
