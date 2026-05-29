import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Course } from '@/types/course';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

type SupabaseCookieOptions = {
  path?: string;
  maxAge?: number;
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
};

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    supabaseUrl ?? '',
    supabaseAnonKey ?? '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options: SupabaseCookieOptions }>) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
}

export async function getCourses(): Promise<Course[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return [];
  }

  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Course[];
}
