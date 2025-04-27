const response = await supabase.auth.getUser();

console.log(response.data.user.id);

const response2 = await supabase
  .from("service_users")
  .select("*")
  .eq("supabase_user", response.data.user.id)
  .single();

console.log(response2);

const response33 = await supabase
  .from("tenant_permissions")
  .select("*")
  .eq("service_user", response2.data.id);

console.log(response33);
