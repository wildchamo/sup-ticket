"use client";

import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import { useRef } from "react";

export default function ChangePasswordPage() {
  const passwordRef = useRef(null);
  const supabase = createSupabaseBrowserClient();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const value = (passwordRef.current.value || "").trim();

        supabase.auth.updateUser({ password: value }).then((result) => {
          if (result.error) {
            alert(result.error.message);
          } else {
            alert("Password updated!");
            passwordRef.current.value = "";
          }
        });
      }}
    >
      <fieldset>
        <label htmlFor="password">
          New Password{" "}
          <input
            ref={passwordRef}
            name="password"
            type="password"
            id="password"
            required
          />
        </label>
      </fieldset>

      <button type="submit">Reset Password</button>
    </form>
  );
}
