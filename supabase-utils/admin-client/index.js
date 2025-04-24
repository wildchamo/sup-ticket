import { createClient } from "@supabase/supabase-js";

// dont use in use client components
export const getSupabaseAdminClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_API_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
};
