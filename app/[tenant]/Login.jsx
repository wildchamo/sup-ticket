"use client";

import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { FORM_TYPES } from "./formTypes.js";
import { urlPath } from "../../utils/url-helpers.js";

export const Login = ({ formType = "pw-login", tenant }) => {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const isPasswordLogin = formType === FORM_TYPES.PASSWORD_LOGIN;
  const isMagicLinkLogin = formType === FORM_TYPES.MAGIC_LINK;
  const isPasswordRecovery = formType === FORM_TYPES.PASSWORD_RECOVERY;

  const getPath = (subPath) => urlPath(subPath ?? "", tenant);

  console.log(formType);
  let formAction;
  switch (formType) {
    case FORM_TYPES.PASSWORD_LOGIN:
      formAction = getPath("/auth/pw-login");
      break;
    case FORM_TYPES.MAGIC_LINK:
      formAction = getPath("/auth/magic-link");
      break;
    case FORM_TYPES.PASSWORD_RECOVERY:
      formAction = getPath("/auth/magic-link?type=recovery");
      break;
    default:
      formAction = getPath("/auth/pw-login");
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        console.log(getPath("/tickets"));
        router.push(getPath("/tickets"));
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
          {isPasswordRecovery
            ? "Recover Password"
            : `Sign in with
              ${isPasswordLogin ? " Password" : " Magic Link"}`}
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
