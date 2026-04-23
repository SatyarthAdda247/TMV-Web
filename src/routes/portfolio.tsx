import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import animImg from "@/assets/cat-animation.jpg";
import liveImg from "@/assets/cat-liveaction.jpg";
import vfxImg from "@/assets/cat-vfx.jpg";
import { SectionReveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio, TMV Studios" },
      { name: "description", content: "Animation, live action and VFX/CGI work by TMV Studios." },
      { property: "og:title", content: "Portfolio, TMV Studios" },
      { property: "og:description", content: "Selected projects across animation, live action and VFX." },
      { property: "og:image", content: animImg },
    ],
  }),
  component: PortfolioIndex,
});

const CATS = [
  { to: "/portfolio/animation", title: "Animation", img: animImg, desc: "2D, 3D, motion design, characters that breathe." },
  { to: "/portfolio/live-action", title: "Live Action", img: liveImg, desc: "Films, commercials and documentary craft." },
  { to: "/portfolio/vfx-cgi", title: "VFX & CGI", img: vfxImg, desc: "Photoreal worlds, simulations and post." },
] as const;

function PortfolioIndex() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
          The work
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          A reel of moments,
          <br />
          made with <span className="text-primary">obsession.</span>
        </h1>
      </section>

      <section className="border-t border-border">
        {CATS.map((c, i) => (
          <SectionReveal key={c.to}>
            <Link
              to={c.to}
              className="group block border-b border-border bg-surface/30 hover:bg-surface transition-colors hover-card"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-14 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden rounded-sm">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-7 flex items-center justify-between gap-6">
                  <div>
                    <span className="font-accent text-xs uppercase tracking-[0.4em] text-primary">
                      0{i + 1}
                    </span>
                    <h2 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight">
                      {c.title}
                    </h2>
                    <p className="mt-4 text-foreground/70 max-w-md">{c.desc}</p>
                  </div>
                  <ArrowRight className="hidden md:block h-12 w-12 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all shrink-0" />
                </div>
              </div>
            </Link>
          </SectionReveal>
        ))}
      </section>
    </div>
  );
}
