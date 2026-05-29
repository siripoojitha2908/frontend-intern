'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  BookOpen,
  Code2,
  Database,
  FileCode,
  Microscope,
  Rocket,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Course } from '@/types/course';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  FileCode,
  Microscope,
  Rocket,
  Sparkles,
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? BookOpen;
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimatedProgress(course.progress));
    return () => cancelAnimationFrame(frame);
  }, [course.progress]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, type: 'spring', stiffness: 320, damping: 20 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(76,29,149,0.32),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(160deg,rgba(14,116,144,0.12),transparent_30%,rgba(76,29,149,0.12))]" aria-hidden="true" />

      <header className="relative z-10 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium text-cyan-100">
          Active
        </span>
      </header>

      <section className="relative z-10 mt-5">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Course</p>
        <h2 className="mt-2 text-xl font-semibold text-white">{course.title}</h2>
      </section>

      <section className="relative z-10 mt-5" aria-label="Progress details">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span>Completion</span>
          <span className="font-medium text-cyan-100">{course.progress}%</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-950/80">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: animatedProgress / 100 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            className="h-full origin-left rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500"
          />
        </div>
      </section>
    </motion.article>
  );
}
