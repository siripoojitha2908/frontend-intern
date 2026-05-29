'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { MobileNav } from './mobile-nav';
import { Sidebar } from './sidebar';

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <section className="min-h-screen bg-transparent text-white">
      <Sidebar />

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        className="min-h-screen md:pl-20 lg:pl-72"
        aria-label="Dashboard content"
      >
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-5 sm:px-6 lg:px-8">
          {children}
        </section>
      </motion.main>

      <MobileNav />
    </section>
  );
}
