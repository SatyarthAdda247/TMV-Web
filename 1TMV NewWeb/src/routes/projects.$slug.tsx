import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { getProject, PROJECTS, type Project } from "@/lib/projects";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project, TMV Studios" }] };
    return {
      meta: [
        { title: `${p.title}, TMV Studios` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title}, TMV Studios` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.img },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary">404</p>
      <h1 className="mt-4 font-display text-5xl">Project not found.</h1>
      <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
    </div>
  ),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const [open, setOpen] = useState(false);

  const related = PROJECTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  const categoryHref =
    p.category === "animation"
      ? "/portfolio/animation"
      : p.category === "live-action"
        ? "/portfolio/live-action"
        : "/portfolio/vfx-cgi";

  return (
    <div>
      <section className="relative h-[80svh] min-h-[520px] overflow-hidden -mt-20 flex items-end">
        <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-16">
          <Link
            to={categoryHref}
            className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> {p.categoryLabel}
          </Link>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-4">
            {p.client} · {p.year}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-5xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{p.summary}</p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-10 group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:scale-[1.03] transition-transform"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <Play className="h-3 w-3 fill-current ml-0.5" />
            </span>
            Watch the film
          </button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { l: "Client", v: p.client },
            { l: "Year", v: p.year },
            { l: "Role", v: p.role },
            { l: "Length", v: p.duration },
          ].map((m) => (
            <div key={m.l}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-accent">{m.l}</p>
              <p className="mt-2 font-display text-lg">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <SectionReveal className="lg:col-span-7">
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-4">The brief</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">{p.brief}</h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="lg:col-span-5">
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-4">Craft</p>
          <ul className="space-y-3">
            {p.craft.map((c) => (
              <li key={c} className="flex items-center gap-3 text-foreground/85">
                <span className="h-px w-6 bg-primary" />
                {c}
              </li>
            ))}
          </ul>

          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mt-10 mb-4">Credits</p>
          <ul className="space-y-2">
            {p.credits.map((c) => (
              <li key={c.name} className="flex justify-between text-sm border-b border-border py-2">
                <span className="text-muted-foreground">{c.role}</span>
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <h2 className="font-display text-3xl md:text-5xl">More {p.categoryLabel}</h2>
              <Link
                to={categoryHref}
                className="group inline-flex items-center gap-2 font-display uppercase tracking-wider text-sm hover:text-primary transition-colors"
              >
                See all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/projects/$slug"
                  params={{ slug: r.slug }}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-sm border border-border"
                >
                  <img src={r.img} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-accent">{r.client} · {r.year}</p>
                    <h3 className="mt-2 font-display text-2xl">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <VideoModal open={open} onClose={() => setOpen(false)} src={p.videoUrl} title={p.title} />
    </div>
  );
}
