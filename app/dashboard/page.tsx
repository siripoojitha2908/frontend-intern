import { ActivityTile } from '@/components/activity-tile';
import { BentoGrid } from '@/components/bento-grid';
import { CourseCard } from '@/components/course-card';
import { DashboardShell } from '@/components/dashboard-shell';
import { HeroTile } from '@/components/hero-tile';
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

export default async function DashboardPage() {
  let courses: Course[] = [];

  try {
    courses = await getCourses();
  } catch {
    courses = fallbackCourses;
  }

  const safeCourses = courses.length > 0 ? courses : fallbackCourses;

  return (
    <DashboardShell>
      <header className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Learning command center</p>
          <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Student dashboard</h1>
        </div>
        <p className="hidden rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100 md:block">
          Live study rhythm synced
        </p>
      </header>

      <BentoGrid>
        <div className="xl:col-span-2">
          <HeroTile className="h-full" />
        </div>

        {safeCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}

        <div className="md:col-span-2 xl:col-span-1">
          <ActivityTile className="h-full" />
        </div>
      </BentoGrid>
    </DashboardShell>
  );
}
