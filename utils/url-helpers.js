export function urlPath(applicationPath, tenant) {
  return applicationPath;
}
export function buildUrl(applicationPath, tenant, request) {
  const [hostname, port] = getHostnameAndPort(request);
  const portSuffix = port && port != "443" ? `:${port}` : "";
  const { protocol } = request.nextUrl;
  const tenantUrl = `${protocol}//${hostname}${portSuffix}/`;
  return new URL(urlPath(applicationPath, tenant), tenantUrl);
}
export const getHostnameAndPort = (request) => {
  const hostnameWithPort = request.headers.get("host");
  const [realHostname, port] = hostnameWithPort?.split(":") ?? [];
  let hostname;
  if (process.env.OVERRIDE_TENANT_DOMAIN) {
    hostname = process.env.OVERRIDE_TENANT_DOMAIN;
  } else {
    hostname = realHostname;
  }
  return [hostname, port];
};
