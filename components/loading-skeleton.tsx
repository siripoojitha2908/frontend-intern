'use client';

import { motion } from 'framer-motion';

const skeletonBlocks = [1, 2, 3];

export function LoadingSkeleton() {
  return (
    <section className="space-y-6" aria-label="Loading dashboard" aria-busy="true">
      <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl" aria-hidden="true">
        <div className="mb-4 h-4 w-32 rounded-full bg-white/10" />
        <div className="mb-3 h-8 w-72 rounded-full bg-white/10" />
        <div className="h-4 w-56 rounded-full bg-white/10" />
      </article>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
        {skeletonBlocks.map((block) => (
          <motion.article
            key={block}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="h-10 w-10 rounded-2xl bg-white/10" />
              <div className="h-5 w-20 rounded-full bg-white/10" />
            </div>
            <div className="mb-3 h-5 w-40 rounded-full bg-white/10" />
            <div className="mb-2 h-3 w-32 rounded-full bg-white/10" />
            <div className="mt-6 h-2.5 w-full rounded-full bg-white/10" />
            <div className="absolute inset-0 shimmer" />
          </motion.article>
        ))}
      </section>
    </section>
  );
}
