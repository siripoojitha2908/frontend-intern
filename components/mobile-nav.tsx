'use client';

import { motion } from 'framer-motion';
import { Activity, BookOpen, Gauge, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { label: 'Courses', href: '/courses', icon: BookOpen },
  { label: 'Analytics', href: '/analytics', icon: Activity },
  { label: 'Settings', href: '/settings', icon: Sparkles },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      aria-label="Bottom navigation"
      className="fixed inset-x-4 bottom-4 z-40 rounded-[26px] border border-white/10 bg-[#020817]/85 p-2 backdrop-blur-xl md:hidden"
    >
      <ul className="grid grid-cols-4 gap-1" aria-label="Quick navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.label} className="relative">
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-active"
                  className="absolute inset-0 rounded-2xl bg-cyan-400/15"
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                />
              )}
              <Link
                href={item.href}
                className="relative z-10 flex w-full flex-col items-center rounded-2xl px-2 py-2 text-[10px] font-medium text-slate-200"
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon className="mb-1 h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
