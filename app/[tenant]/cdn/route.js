import { createSupabaseServerClient } from "../../../supabase-utils/server-client";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const image = searchParams.get("image");
  const supabase = await createSupabaseServerClient();

  const { data: cdnImage, error } = await supabase
    .from("comment_attachments")
    .select("file_path")
    .eq("file_path", image)
    .single();

  if (error) {
    return new Response("Error fetching image", { status: 500 });
  } else {
    const cdnPath = cdnImage.file_path;

    const { data: bucketInfo, error: bucketError } =
      await supabase.storage.getBucket("comment-attachments");

    console.log(bucketInfo, bucketError);

    const { data, error } = await supabase.storage
      .from("comment-attachments")
      .download("packt/14/07153ea84f0638/factura1.jpg", {
        transform: {
          width: 100,
          height: 100,
          quality: 80,
        },
      });

    return new Response(data);
  }
}
