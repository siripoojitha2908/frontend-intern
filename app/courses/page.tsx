import { CourseCard } from '@/components/course-card';
import { DashboardShell } from '@/components/dashboard-shell';
import { getCourses } from '@/lib/supabase/server';
import type { Course } from '@/types/course';

const fallbackCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'Code2',
    created_at: '2026-05-01T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'UI Motion Design',
    progress: 58,
    icon_name: 'Sparkles',
    created_at: '2026-05-03T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Database Architecture',
    progress: 89,
    icon_name: 'Database',
    created_at: '2026-05-06T10:00:00.000Z',
  },
  {
    id: '4',
    title: 'TypeScript Mastery',
    progress: 42,
    icon_name: 'FileCode',
    created_at: '2026-05-08T10:00:00.000Z',
  },
];

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    courses = await getCourses();
  } catch {
    courses = fallbackCourses;
  }

  const safeCourses = courses.length > 0 ? courses : fallbackCourses;

  return (
    <DashboardShell>
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Course library</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Learning pathways</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-200/70">
          Track every module, milestone, and learning sprint from one curated command center.
        </p>
      </header>

      <section className="mb-6 grid gap-3 md:grid-cols-3" aria-label="Course metrics">
        <article className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-300/70">Active tracks</p>
          <p className="mt-3 text-3xl font-semibold text-white">12</p>
        </article>
        <article className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-300/70">Avg. completion</p>
          <p className="mt-3 text-3xl font-semibold text-white">71%</p>
        </article>
        <article className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-300/70">Focus score</p>
          <p className="mt-3 text-3xl font-semibold text-white">9.4/10</p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-2" aria-label="Course list">
        {safeCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </section>
    </DashboardShell>
  );
}
