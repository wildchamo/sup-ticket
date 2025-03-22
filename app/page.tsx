import { createSupabaseServerClient } from "@/supabase-utils/server-client";

export default async function Home() {
  const supabase = await createSupabaseServerClient();

  const buckets = await supabase.storage.listBuckets();

  return <main className="container">{JSON.stringify(buckets, null, 2)}</main>;
}
