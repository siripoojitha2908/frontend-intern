import type { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="Learning summary grid">
      {children}
    </section>
  );
}
