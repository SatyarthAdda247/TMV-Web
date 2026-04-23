import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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
