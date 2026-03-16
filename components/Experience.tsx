'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2024 - 至今',
    company: '椭圆曲线科技',
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
    company: '中交车旺',
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

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
        className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-lg shadow-[var(--primary)]/50"
      />

      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-all duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--accent)]/0 group-hover:from-[var(--primary)]/5 group-hover:to-[var(--accent)]/5 rounded-2xl transition-all duration-300" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                {experience.company}
              </h3>
              <p className="text-lg text-[var(--primary)] font-medium">
                {experience.position}
              </p>
            </div>
            <span className="text-sm text-[var(--text-secondary)] bg-[var(--background)] px-4 py-2 rounded-full border border-[var(--card-border)] mt-2 md:mt-0 inline-block">
              {experience.period}
            </span>
          </div>

          <ul className="space-y-3">
            {experience.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 + idx * 0.1 }}
                className="flex items-start text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--accent)] mr-3 mt-1">▹</span>
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            工作经历
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
