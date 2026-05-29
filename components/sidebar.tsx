'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BookOpen,
  BrainCircuit,
  Gauge,
  Layers3,
  Menu,
  MoonStar,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { label: 'Courses', href: '/courses', icon: BookOpen },
  { label: 'Analytics', href: '/analytics', icon: Activity },
  { label: 'Settings', href: '/settings', icon: Sparkles },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const update = () => setCollapsed(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`fixed inset-y-0 left-0 z-30 flex flex-col border-r border-white/10 bg-[#020817]/85 backdrop-blur-xl ${collapsed ? 'w-20' : 'w-72'} transition-all duration-300`}
      aria-label="Primary sidebar"
    >
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-5">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
            <BrainCircuit className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold text-white">Nova Learn</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-300/65">Future school OS</p>
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setCollapsed((value) => !value)}
          className="rounded-full border border-white/10 bg-slate-950/85 p-2 text-slate-200"
        >
          <Menu className="h-4 w-4" />
        </button>
      </header>

      <section className="px-3 py-4" aria-label="Workspace overview">
        <article className={`rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-3 text-white ${collapsed ? 'hidden' : 'block'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/70">Focus mode</p>
              <p className="mt-2 text-sm font-medium">Deep work session</p>
            </div>
            <MoonStar className="h-5 w-5 text-cyan-100" />
          </div>
        </article>
      </section>

      <nav className="px-2" aria-label="Sidebar navigation">
        <ul className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.label} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-2xl border border-cyan-300/40 bg-cyan-400/10"
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`relative z-10 flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${collapsed ? 'justify-center' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-cyan-100' : 'text-slate-300'}`} />
                  {!collapsed && <span className={isActive ? 'text-cyan-50' : 'text-slate-200'}>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="mt-auto border-t border-white/10 px-3 py-4" aria-label="Sidebar footer">
        <article className={`rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-3 ${collapsed ? 'hidden' : 'block'}`}>
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-violet-200" />
            <p className="text-xs font-medium text-white">System ready</p>
          </div>
          <p className="mt-2 text-[10px] text-slate-300/70">Simulated learning sync healthy.</p>
        </article>
      </section>
    </motion.aside>
  );
}
