'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutCards = [
  {
    icon: '📍',
    title: '基本信息',
    content: '西南财经大学 / 2017届 / 成都',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: '💼',
    title: '当前职位',
    content: '高级全栈开发 @ 椭圆曲线科技',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: '🔗',
    title: 'Web3 专长',
    content: 'DeFi / Wagmi / Solidity / EVM',
    gradient: 'from-indigo-500/10 to-purple-500/10',
  },
  {
    icon: '🛠',
    title: '技术栈',
    content: 'React / Next.js / TypeScript / Node.js',
    gradient: 'from-cyan-500/10 to-teal-500/10',
  },
  {
    icon: '🤖',
    title: 'AI 工具',
    content: 'Cursor / Claude Code / MCP',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    icon: '📚',
    title: '兴趣爱好',
    content: '量化交易 / 区块链经济模型 / 读书 / 运动',
    gradient: 'from-orange-500/10 to-red-500/10',
  },
];

function AboutCard({ card, index }: { card: typeof aboutCards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.gradient} border border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 group`}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--accent)]/0 group-hover:from-[var(--primary)]/5 group-hover:to-[var(--accent)]/5 rounded-2xl transition-all duration-300" />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{card.icon}</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
          {card.title}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {card.content}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
