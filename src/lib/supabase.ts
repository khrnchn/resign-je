import { createClient } from '@supabase/supabase-js';

// supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// create supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);