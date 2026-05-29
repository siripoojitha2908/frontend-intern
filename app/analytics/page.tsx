import { DashboardShell } from '@/components/dashboard-shell';

const analyticsCards = [
  { label: 'Study streak', value: '18 days', insight: '+5.2% week-over-week' },
  { label: 'Focus blocks', value: '24', insight: 'Deep work completed' },
  { label: 'Completion rate', value: '89%', insight: 'Across all active tracks' },
];

const chartWeeks = [
  { label: 'Mon', value: 4 },
  { label: 'Tue', value: 6 },
  { label: 'Wed', value: 5 },
  { label: 'Thu', value: 8 },
  { label: 'Fri', value: 7 },
  { label: 'Sat', value: 9 },
  { label: 'Sun', value: 6 },
];

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Analytics</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Learning intelligence</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-200/70">
          Monitor momentum, deep focus, and long-term completion patterns with premium insight panels.
        </p>
      </header>

      <section className="mb-6 grid gap-3 md:grid-cols-3" aria-label="Performance metrics">
        {analyticsCards.map((card) => (
          <article key={card.label} className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300/70">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-cyan-100/80">{card.insight}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]" aria-label="Analytics panels">
        <article className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Weekly consistency</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Focus rhythm</h2>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-200">+12%</span>
          </div>

          <div className="mt-5 grid h-56 grid-cols-7 items-end gap-2" aria-label="Activity bars">
            {chartWeeks.map((week) => (
              <div key={week.label} className="flex h-full flex-col justify-end gap-2">
                <div
                  className="rounded-t-2xl bg-gradient-to-t from-cyan-500/90 via-blue-500/60 to-violet-500/60"
                  style={{ height: `${Math.max(week.value * 10, 18)}%` }}
                />
                <p className="text-[10px] text-slate-300">{week.label}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Completion insights</p>
          <h2 className="mt-1 text-xl font-semibold text-white">Performance snapshot</h2>

          <ul className="mt-5 space-y-3" aria-label="Insight list">
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-medium text-white">Peak focus time</p>
              <p className="mt-1 text-xs text-cyan-100/70">6:30 PM — highest consistency of the week</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-medium text-white">Best performing track</p>
              <p className="mt-1 text-xs text-cyan-100/70">Database Architecture at 89% completion</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-medium text-white">Recovery recommendation</p>
              <p className="mt-1 text-xs text-cyan-100/70">Reduce visual load before 8 PM to preserve depth</p>
            </li>
          </ul>
        </article>
      </section>
    </DashboardShell>
  );
}
