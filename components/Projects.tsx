'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    name: 'Phoenix DeFi Dapp',
    description: '稳定币生态平台，提供借贷、质押等 DeFi 服务。通过优化 RPC 调用策略，将性能提升 2-5 倍，显著改善用户体验。',
    tech: ['React 19', 'Wagmi2', 'Viem', 'TypeScript', 'Tailwind CSS'],
    link: 'https://dapp.phnx.finance',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Phoenix Website',
    description: '品牌官网，采用 Three.js 打造火凤凰 3D 动画和星空特效，结合 Framer Motion 实现流畅的交互体验。',
    tech: ['Next.js 15', 'Three.js', 'Framer Motion', 'TypeScript'],
    link: 'https://phnx.finance',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'DappLink MPC 资管系统',
    description: 'Web3 商户全链路门户，提供 MPC 钱包、资产管理、交易监控等功能。采用 Monorepo 架构，提升代码复用和维护效率。',
    tech: ['React 18', 'Wagmi', 'Monorepo', 'TypeScript', 'Ant Design'],
    link: null,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: '物流通',
    description: '物流管理平台，集成 Echarts 实现复杂数据可视化。通过组件化和工程化实践，将开发效率提升 100%。',
    tech: ['React', 'TypeScript', 'Echarts', 'Ant Design', 'Webpack'],
    link: null,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${project.gradient} border border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 h-full flex flex-col`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--accent)]/0 group-hover:from-[var(--primary)]/10 group-hover:to-[var(--accent)]/10 rounded-2xl transition-all duration-300" />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
              {project.name}
            </h3>
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + idx * 0.05 }}
                className="px-3 py-1 text-sm bg-[var(--background)] text-[var(--primary)] rounded-full border border-[var(--card-border)] group-hover:border-[var(--primary)] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            项目经验
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
