import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "../../../supabase-utils/admin-client";
import { getOpenAIEmbedding } from "../../../utils/openai";

export async function GET() {
  const adminSupabase = getSupabaseAdminClient();
  const { data } = await adminSupabase.from("tickets").select("id, title");
  for (const ticket of data) {
    const embedding = await getOpenAIEmbedding(
      "Ticket title = " + ticket.title
    );
    adminSupabase
      .from("tickets")
      .update({
        semantic_embedding: embedding,
      })
      .eq("id", ticket.id)
      .then(console.log);
  }
  return NextResponse.json({ done: true });
}
