import { createClient } from "@supabase/supabase-js";

const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseProjectUrl,
  supabaseAnonKey
);
