'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    icon: '⚛️',
    items: ['React', 'Vue', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    category: 'Web3',
    icon: '🔗',
    items: ['Wagmi', 'Viem', 'Ethers.js', 'Solidity', 'DeFi', 'Smart Contracts'],
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    category: 'Backend & DevOps',
    icon: '🚀',
    items: ['Node.js', 'Docker', 'K8S', 'AWS', 'PM2', 'Nginx'],
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    category: 'Engineering & AI',
    icon: '🛠️',
    items: ['Webpack', 'Vite', 'CI/CD', 'Cursor', 'Claude Code', 'Git'],
    gradient: 'from-orange-500/10 to-red-500/10',
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.gradient} border border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 h-full`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--accent)]/0 group-hover:from-[var(--primary)]/5 group-hover:to-[var(--accent)]/5 rounded-2xl transition-all duration-300" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{skill.icon}</span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              {skill.category}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + idx * 0.05 }}
                className="px-4 py-2 text-sm bg-[var(--background)] text-[var(--text-primary)] rounded-lg border border-[var(--card-border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            技能专长
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
