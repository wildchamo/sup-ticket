"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import { useEffect } from "react";
import { urlPath } from "../../../utils/url-helpers";

export default function Nav({ tenant }) {
  const pathname = usePathname();

  const router = useRouter();

  const supabase = createSupabaseBrowserClient();

  const activeProps = { className: "contrast" };

  const inactiveProps = { className: "secondary outline" };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push("/" + tenant);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link
            role="button"
            href={urlPath("/tickets", tenant)}
            {...(pathname === urlPath("/tickets", tenant)
              ? activeProps
              : inactiveProps)}
          >
            Ticket List
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href={urlPath("/tickets/new", tenant)}
            {...(pathname === urlPath("/tickets/new", tenant)
              ? activeProps
              : inactiveProps)}
          >
            Create new Ticket
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href={urlPath("/tickets/users", tenant)}
            {...(pathname === urlPath("/tickets/users")
              ? activeProps
              : inactiveProps)}
          >
            User List
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            role="button"
            href={urlPath("/logout", tenant)}
            prefetch={false}
            className="secondary"
            onClick={async (e) => {
              e.preventDefault();
              await supabase.auth.signOut();
            }}
          >
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
