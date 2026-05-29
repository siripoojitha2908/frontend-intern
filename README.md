# Nova Learn Dashboard

A premium dark-mode student learning command center built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Supabase, and Lucide React.

## Overview

This submission showcases a polished futuristic dashboard with responsive layout, server-side Supabase integration, animated glass UI, and production-grade component structure.

## Architecture

- **Framework:** Next.js 15 App Router for streaming, route-level rendering, and efficient server/client split.
- **Styling:** Tailwind utility classes with dark-only gradients, glassmorphism, rounded surfaces, and grain textures.
- **Animation:** Framer Motion for spring-based entrance, hover, sidebar highlight, and mobile transitions. All motion uses transform/opacity only.
- **Data:** Supabase SSR client in `lib/supabase/server.ts` fetches course data from the `courses` table.
- **Semantic HTML:** `aside`, `nav`, `main`, `section`, `article`, and `header` are used throughout.

## Component split

- **Server-driven route:** `app/dashboard/page.tsx` fetches course data and composes the dashboard layout.
- **Interactive UI:** `components/sidebar.tsx`, `components/mobile-nav.tsx`, `components/hero-tile.tsx`, `components/course-card.tsx`, and `components/activity-tile.tsx` provide animation and control logic.
- **Shared types:** `types/course.ts` contains the typed `Course` interface.

## Animation strategy

- Staggered page load and card entrances use Framer Motion spring transitions.
- Course cards scale and glow on hover using transform-based motion.
- Sidebar tabs animate with `layoutId` for smooth selection highlighting.
- Loading skeleton uses shimmer and pulse while avoiding layout shift.

## Supabase integration

The server-side Supabase client uses `@supabase/ssr` and reads `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from environment variables.

### Supabase schema

```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text,
  progress integer,
  icon_name text,
  created_at timestamp default now()
);
```

### Mock rows

```sql
insert into courses (title, progress, icon_name) values
('Advanced React Patterns', 75, 'Code2'),
('UI Motion Design', 58, 'Sparkles'),
('Database Architecture', 89, 'Database'),
('TypeScript Mastery', 42, 'FileCode');
```

## Responsive strategy

- **Desktop:** fixed sidebar with a multi-column bento grid.
- **Tablet:** icon-only collapsed sidebar with responsive grid shift.
- **Mobile:** stacked content and fixed bottom navigation.

## Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://iasnhaurchqbciaeofck.supabase.co/rest/v1/
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhc25oYXVyY2hxYmNpYWVvZmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODE5MDMsImV4cCI6MjA5NTU1NzkwM30.0NJ6t1eDbr1C0X0SUnRnduf0BzmfBEhsCa9W79j3x4g
```

## Build and deploy

```bash
npm run build
npm run start
```

### Vercel deployment

1. Create a Vercel project from the GitHub repository.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` under Project Settings → Environment Variables.
3. Deploy the project.

## Deliverables

- Premium glassmorphism dashboard UI
- Server-side Supabase integration
- Fully animated responsive layout
- Professional loading and error handling
- Production-ready deployment notes
