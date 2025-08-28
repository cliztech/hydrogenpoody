import { Links, LiveReload, Outlet } from "@remix-run/react";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Poody Toons</title>
        <Links />
      </head>
      <body className="min-h-screen bg-white text-black">
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
