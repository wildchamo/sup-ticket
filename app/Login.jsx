"use client";

import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { FORM_TYPES } from "./formTypes.js";

export const Login = ({ formType = "pw-login" }) => {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const isPasswordLogin = formType === FORM_TYPES.PASSWORD_LOGIN;
  const isMagicLinkLogin = formType === FORM_TYPES.MAGIC_LINK;
  const isPasswordRecovery = formType === FORM_TYPES.PASSWORD_RECOVERY;

  console.log(formType);
  const formAction = isPasswordLogin ? `/auth/pw-login` : `/auth/magic-link`;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        router.push("/tickets");
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const onSubmit = (e) => {
    isPasswordLogin && e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current?.value;

    if (isPasswordLogin) {
      supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then((result) => {
          if (!result.data?.user) {
            alert("Login failed");
          }
        });
    } else {
      //  supabase.auth.signInWithOtp({ email });
      console.log("Logging in with magic link:", { email });
    }
  };

  return (
    <form onSubmit={onSubmit} action={formAction} method="POST">
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>{isPasswordRecovery ? "Recover" : "Login"}</header>
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
          {!isPasswordLogin && (
            <>
              <Link
                href={{
                  pathname: "/",
                  query: { magicLink: "no" },
                }}
              >
                Go to Password Login
              </Link>
              <br />
            </>
          )}
          {!isMagicLinkLogin && (
            <Link
              href={{
                pathname: "/",
                query: { formType: FORM_TYPES.MAGIC_LINK },
              }}
            >
              Go to Magic Link Login
            </Link>
          )}
        </p>
        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>

        {!isPasswordRecovery && (
          <Link
            href={{
              pathname: "/",
              query: { formType: FORM_TYPES.PASSWORD_RECOVERY },
            }}
            style={{
              textAlign: "center",
              display: "block",
            }}
          >
            Go to Password Recovery
          </Link>
        )}
      </article>
    </form>
  );
};
