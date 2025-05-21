import { IconCheck, IconUserOff } from "@tabler/icons-react";
import { createSupabaseServerClient } from "../../../../supabase-utils/server-client";

const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
  {
    name: "Jose X",
    job: "Software Engineer",
    isAvailable: true,
  },
  // ... add as much users as you want
];

export default async function TicketUsersPage({ params }) {
  const { tenant } = await params;
  const supabase = await createSupabaseServerClient();

  const { data: users, error } = await supabase.rpc("get_users_by_tenant", {
    tenant_id: tenant,
  });

  console.log(users, error);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>{" "}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td
              style={{
                display: "flex",
                color: !user.is_available ? "red" : undefined,
              }}
            >
              {user.is_available ? <IconCheck /> : <IconUserOff />}{" "}
              {user.full_name}
            </td>

            <td>{user.job_title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
