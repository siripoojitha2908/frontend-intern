import { DashboardShell } from '@/components/dashboard-shell';

const preferences = [
  { label: 'AI recommendations', description: 'Receive adaptive study prompts when focus is high.' },
  { label: 'Daily digest', description: 'Summaries delivered every evening before sleep.' },
  { label: 'Focus reminders', description: 'Gentle nudges during planned deep work windows.' },
];

export default function SettingsPage() {
  return (
    <DashboardShell>
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Workspace preferences</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-200/70">
          Personalize study flow, notification behavior, and the visual system that frames your learning environment.
        </p>
      </header>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]" aria-label="Settings panels">
        <article className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Profile</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Siri Morgan</h2>
            </div>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-medium text-cyan-100">Premium plan</span>
          </div>

          <ul className="mt-5 space-y-3" aria-label="Profile details">
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm text-slate-200">
              <p className="font-medium text-white">Preferred focus theme</p>
              <p className="mt-1 text-xs text-cyan-100/70">Neon cosmic • adaptive gradients</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm text-slate-200">
              <p className="font-medium text-white">Learning cadence</p>
              <p className="mt-1 text-xs text-cyan-100/70">2 sessions per day · 28 min average</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm text-slate-200">
              <p className="font-medium text-white">Sync status</p>
              <p className="mt-1 text-xs text-cyan-100/70">Supabase live sync connected</p>
            </li>
          </ul>
        </article>

        <article className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">Notifications</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Automation</h2>

          <form className="mt-5 space-y-3" aria-label="Notification preferences">
            {preferences.map((item) => (
              <label key={item.label} className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm text-slate-200">
                <span>
                  <span className="block font-medium text-white">{item.label}</span>
                  <span className="mt-1 block text-xs text-cyan-100/70">{item.description}</span>
                </span>
                <input
                  type="checkbox"
                  defaultChecked={item.label !== 'Focus reminders'}
                  className="mt-1 h-4 w-4 rounded border border-cyan-300/30 bg-slate-950 text-cyan-300 accent-cyan-400"
                  aria-label={`Toggle ${item.label}`}
                />
              </label>
            ))}
          </form>
        </article>
      </section>
    </DashboardShell>
  );
}
