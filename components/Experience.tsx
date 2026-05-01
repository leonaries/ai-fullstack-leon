'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2024 - 至今',
    company: 'DappLink',
    position: '高级全栈开发',
    responsibilities: [
      '主导团队 AI 工程化提效，落地 Multi-Agent + Skills + RAG 与自动化流程，覆盖产品调研、开发、测试和运营场景，显著提升跨团队协作效率',
      '参与多个项目从 0 到 1 的搭建，负责前端技术选型、架构设计和核心模块开发，重点关注可维护性、扩展性与性能表现',
      '参与需求评审、项目规划与任务拆分，协同产品、设计、后端推进需求高质量交付，并处理关键性能问题与技术难点',
      '为团队提供技术支持与方案建议，推动复杂业务在前端侧稳定落地',
    ],
  },
  {
    period: '2021.09 - 2024.12',
    company: '北京中交车旺科技有限公司',
    position: '高级前端开发',
    responsibilities: [
      '参与项目的需求评审，以及项目开发和部署，负责 PC、移动、小程序等前端开发工作',
      '参与项目从 0-1 构建，项目通用组件的设计和维护，确保前端应用的可维护性、可扩展性和可重用性',
      '登录服务器，针对各类线上运维问题进行日志分析、排查、追踪、定位并解决问题',
      '调研最新 AI 技术应用于实际工作，大幅提高研发效率',
    ],
  },
  {
    period: '2019.06 - 2021.09',
    company: '智汇安新科技有限公司',
    position: '前端组长',
    responsibilities: [
      '参与项目从 0 到 1 的搭建与交付，负责核心业务开发、测试配合、部署检查及线上问题处理',
      '维护低代码配置化报表组件库，参与通用能力抽象，提升复杂业务页面的复用性与交付速度',
      '推动前端团队代码规范、工作流规范和 npm 私仓建设，改善团队协作效率与项目工程质量',
      '承担前端组长职责，通过技术分享和一对一沟通带动成员成长，并参与技术方案讨论与问题攻坚',
    ],
  },
  {
    period: '2017.07 - 2019.04',
    company: '新潮传媒集团股份有限公司',
    position: '前端工程师',
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

      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/40 transition-all duration-300">
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
