"use client";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../supabase-utils/browser-client";

export function AssigneeSelect({
  tenant,
  onValueChanged,
  initialValue = null,
}) {
  const [users, setUsers] = useState(null);
  const supabase = createSupabaseBrowserClient();
  useEffect(() => {
    supabase
      .rpc("get_users_by_tenant", {
        tenant_id: tenant,
      })
      .then(({ data }) => {
        setUsers(data ?? []);
      });
  }, []);
  return (
    <select
      name="assignee"
      value={initialValue === null ? "" : initialValue}
      disabled={users === null}
      onChange={(e) => {
        const v = e.target.value;
        onValueChanged(v === "" ? null : v);
      }}
    >
      <option value="">{users === null ? "Loading..." : "No assignee"}</option>
      {users &&
        users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.full_name}
            </option>
          );
        })}
    </select>
  );
}
