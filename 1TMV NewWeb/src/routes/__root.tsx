import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary">404</p>
        <h1 className="mt-4 font-display text-6xl">Lost in post.</h1>
        <p className="mt-4 text-muted-foreground">
          The frame you're looking for didn't make the final cut.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-display font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Back to set
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TMV Studios, Everything you can imagine is real." },
      {
        name: "description",
        content:
          "TMV Studios is a creative production company crafting animation, live action, VFX and CGI that turns imagination into reality.",
      },
      { name: "author", content: "TMV Studios" },
      { property: "og:title", content: "TMV Studios, Everything you can imagine is real." },
      {
        property: "og:description",
        content: "Animation, live action, VFX and CGI by TMV Studios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TMV Studios, Everything you can imagine is real." },
      { name: "description", content: "TMV Portfolio" },
      { property: "og:description", content: "TMV Portfolio" },
      { name: "twitter:description", content: "TMV Portfolio" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/953adc11-add7-43ee-9972-320a5781d3f2/id-preview-bf22f950--92fe9479-f34a-419d-bac7-a5c850f0c641.lovable.app-1776957927659.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/953adc11-add7-43ee-9972-320a5781d3f2/id-preview-bf22f950--92fe9479-f34a-419d-bac7-a5c850f0c641.lovable.app-1776957927659.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
