import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/originals", label: "Originals" },
  { to: "/khooni-monday", label: "Khooni Monday" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="TMV Studios home">
          <span className="font-display text-2xl font-bold tracking-tight">
            TMV<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:inline font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
            Studios
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm uppercase tracking-wider font-display font-medium text-foreground/80 hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
          <Link
            to="/about"
            hash="contact"
            className="ml-3 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-display font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Let's talk
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="py-3 text-lg font-display uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/about"
                hash="contact"
                className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-display font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Let's talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
