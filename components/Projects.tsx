'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CardHoverEffect from './CardHoverEffect';

const projects = [
  {
    name: 'Phoenix DeFi Dapp',
    description: '稳定币生态平台，提供借贷、质押等 DeFi 服务。通过优化 RPC 调用策略，将性能提升 2-5 倍。',
    tech: ['React 19', 'Wagmi2', 'Viem', 'TypeScript', 'Tailwind CSS'],
    link: 'https://dapp.phnx.finance',
  },
  {
    name: 'Phoenix Website',
    description: '品牌官网，采用 Three.js 打造火凤凰 3D 动画和星空特效，结合 Framer Motion 实现流畅交互。',
    tech: ['Next.js 15', 'Three.js', 'Framer Motion', 'TypeScript'],
    link: 'https://phnx.finance',
  },
  {
    name: 'DappLink MPC 资管系统',
    description: 'Web3 商户全链路门户，提供 MPC 钱包、资产管理、交易监控。Monorepo 架构提升代码复用效率。',
    tech: ['React 18', 'Wagmi', 'Monorepo', 'TypeScript', 'Ant Design'],
    link: null,
  },
  {
    name: '物流通',
    description: '物流管理平台，集成 Echarts 实现复杂数据可视化。组件化和工程化实践将开发效率提升 100%。',
    tech: ['React', 'TypeScript', 'Echarts', 'Ant Design', 'Webpack'],
    link: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">项目经验</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHoverEffect className="h-full">
                <div className="relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{project.name}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors shrink-0 ml-3"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-[var(--background)] text-[var(--primary)] rounded-full border border-[var(--card-border)]"
                      >
                        {t}
                      </span>
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
