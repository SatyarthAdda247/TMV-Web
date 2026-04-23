import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import type { Project } from "@/lib/projects";

export function CategoryPage({
  eyebrow,
  title,
  intro,
  cover,
  projects,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  cover: string;
  projects: Project[];
}) {
  return (
    <div>
      <section className="relative h-[60svh] min-h-[420px] overflow-hidden -mt-20 flex items-end">
        <img
          src={cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <SectionReveal className="max-w-3xl text-xl md:text-2xl leading-relaxed text-foreground/80 font-display font-normal">
          {intro}
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
          {projects.map((p, i) => (
            <SectionReveal
              key={p.slug}
              delay={i * 0.05}
              className={
                p.span === "wide"
                  ? "lg:col-span-4 row-span-2"
                  : p.span === "tall"
                    ? "lg:col-span-2 row-span-2"
                    : "lg:col-span-2"
              }
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block h-full overflow-hidden rounded-sm border border-border bg-surface hover-lift"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-accent">
                    {p.client} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70 line-clamp-2">{p.summary}</p>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
