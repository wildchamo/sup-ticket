import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const session = await supabase.auth.getSession();


  const sessionUser = session.data?.session?.user;



  const requestedPath = request.nextUrl.pathname;

  const [tenant, ...restOfPath] = requestedPath.substr(1).split("/");

  const applicationPath = "/" + restOfPath.join("/");


  if (!/[a-z0-9-_]+/.test(tenant)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }


  // protected routes
  if (applicationPath.startsWith("/tickets")) {
    if (!sessionUser) {
      return NextResponse.redirect(new URL(`/${tenant}/`, request.url));
    } else if (!sessionUser.app_metadata?.tenants.includes(tenant)) {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }

  } else if (applicationPath === "/") {
    if (sessionUser) {
      return NextResponse.redirect(new URL(`/${tenant}/tickets`,
        request.url));
    }
  }

  return response;
};
