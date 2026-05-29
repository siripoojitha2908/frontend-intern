'use client';

import { motion } from 'framer-motion';
import { Flame, Sparkles, Zap } from 'lucide-react';

interface HeroTileProps {
  className?: string;
}

const statItems = [
  { label: 'Power hour', value: '24 min', icon: Zap },
  { label: 'Focus streak', value: '12 days', icon: Flame },
  { label: 'AI notes', value: '14', icon: Sparkles },
];

export function HeroTile({ className = '' }: HeroTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),transparent_22%),radial-gradient(circle_at_center,_rgba(99,102,241,0.18),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(6,10,30,0.88))] p-6 text-white shadow-glow backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.05))]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(14,116,144,0.55),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.35),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_20%)]" aria-hidden="true" />

      <header className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Adaptive learning</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Welcome back, Siri</h1>
          <p className="mt-2 max-w-xl text-sm text-slate-200/75 md:text-base">
            Your AI learning path is tuned for calm, focused progress across coding, design, and research.
          </p>
        </div>

        <div className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-right backdrop-blur">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/70">Daily streak</p>
          <p className="mt-1 text-2xl font-semibold text-white">18</p>
        </div>
      </header>

      <section className="relative z-10 mt-6 grid gap-3 md:grid-cols-3" aria-label="Quick learning stats">
        {statItems.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index + 0.2, type: 'spring', stiffness: 320, damping: 20 }}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-300/70">{item.label}</p>
              <item.icon className="h-4 w-4 text-cyan-200" />
            </div>
            <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
          </motion.article>
        ))}
      </section>
    </motion.article>
  );
}
