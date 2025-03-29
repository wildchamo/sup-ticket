"use client";

import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const Login = ({ isPasswordLogin }) => {
  const router = useRouter();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current?.value;

    const supabase = createSupabaseBrowserClient();

    if (isPasswordLogin) {
      supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then((result) => {
          if (result.data?.user) {
            router.push("/tickets");
          } else {
            alert("Login failed");
          }
        });
    } else {
      console.log("Logging in with magic link:", { email });
    }
  };

  return (
    <form onSubmit={onSubmit} action={"/auth/pw-login"} method="POST">
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>Login</header>
        <fieldset>
          <label htmlFor="email">
            Email
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          {isPasswordLogin && (
            <label htmlFor="password">
              Password
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
              />
            </label>
          )}
        </fieldset>
        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>
        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </article>
    </form>
  );
};
