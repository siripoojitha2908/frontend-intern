'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface ActivityTileProps {
  className?: string;
}

const activityChart = [
  [0, 1, 2, 3, 4],
  [1, 2, 0, 3, 5],
  [2, 1, 4, 3, 6],
  [1, 3, 2, 4, 5],
  [0, 2, 1, 4, 6],
  [1, 2, 3, 4, 5],
];

export function ActivityTile({ className = '' }: ActivityTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.20),transparent_24%)]" aria-hidden="true" />

      <header className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Study rhythm</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Activity</h2>
        </div>
        <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-100">
          87% focus
        </div>
      </header>

      <section className="relative z-10 mt-5" aria-label="Contribution chart">
        <ul className="grid grid-cols-5 gap-1.5" aria-label="Weekly activity grid">
          {activityChart.flat().map((value, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02, type: 'spring', stiffness: 320, damping: 20 }}
              className={`aspect-square rounded-md ${
                value >= 5 ? 'bg-cyan-300/90' :
                value >= 4 ? 'bg-cyan-300/60' :
                value >= 3 ? 'bg-cyan-400/40' :
                value >= 2 ? 'bg-cyan-500/25' : 'bg-white/10'
              }`}
            />
          ))}
        </ul>
      </section>

      <footer className="relative z-10 mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-200">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-cyan-200" />
          <span>Consistency rising</span>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-200">+12%</span>
      </footer>
    </motion.article>
  );
}
