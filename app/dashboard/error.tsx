'use client';

import { useEffect } from 'react';

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10" aria-label="Dashboard error" role="alert">
      <article className="max-w-xl rounded-[28px] border border-rose-400/20 bg-white/5 p-6 text-center backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.24em] text-rose-200">Dashboard issue</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-200/75">
          The dashboard failed to load. Please retry, or check your Supabase connection details.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          aria-label="Retry dashboard"
          className="mt-5 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950"
        >
          Retry
        </button>
      </article>
    </section>
  );
}
