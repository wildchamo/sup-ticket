import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { TENANT_MAP } from "../../tenant-map";
import { buildUrl, getHostnameAndPort } from "../../utils/url-helpers";

export const updateSession = async (request) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_API_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
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

  const [hostname] = getHostnameAndPort(request);

  if (hostname in TENANT_MAP === false) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  const requestedPath = request.nextUrl.pathname;

  const sessionUser = session.data?.session?.user;

  const tenant = TENANT_MAP[hostname];

  const applicationPath = requestedPath;

  if (!/[a-z0-9-_]+/.test(tenant)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  // protected routes
  if (applicationPath.startsWith("/tickets")) {
    if (!sessionUser) {
      return NextResponse.redirect(buildUrl(`/`, tenant, request));
    } else if (!sessionUser.app_metadata?.tenants.includes(tenant)) {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }
  } else if (applicationPath === "/") {
    if (sessionUser) {
      return NextResponse.redirect(buildUrl("/", tenant, request));
    }
  }

  const newURL = `/${tenant}${applicationPath}${request.nextUrl.search}`;
  console.log("newURL", newURL);
  const rewrittenResponse = NextResponse.rewrite(new URL(newURL, request.url), {
    request,
  });

  const cookiesToSet = response.value?.cookies?.getAll();

  if (cookiesToSet) {
    cookiesToSet.forEach(({ name, value, options }) => {
      rewrittenResponse.cookies.set(name, value, options);
    });
  }
  return rewrittenResponse;
};
