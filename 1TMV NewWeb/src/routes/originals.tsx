import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import animImg from "@/assets/cat-animation.jpg";
import liveImg from "@/assets/cat-liveaction.jpg";
import vfxImg from "@/assets/cat-vfx.jpg";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/originals")({
  head: () => ({
    meta: [
      { title: "Originals, TMV Studios" },
      { name: "description", content: "Original short films and series produced by TMV Studios." },
      { property: "og:title", content: "Originals, TMV Studios" },
      { property: "og:description", content: "Stories we couldn't wait to be hired to tell." },
      { property: "og:image", content: animImg },
    ],
  }),
  component: Originals,
});

const ORIGINALS = [
  {
    title: "Paper Lanterns",
    type: "Short Film, 12 min",
    year: "2024",
    img: animImg,
    desc: "A grandmother's last festival, told one paper lantern at a time.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    title: "Static",
    type: "Series, 6 episodes",
    year: "2023",
    img: vfxImg,
    desc: "Six strangers, one frequency, an entire city listening.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    title: "Salt Roads",
    type: "Documentary, 38 min",
    year: "2023",
    img: liveImg,
    desc: "A road trip along India's forgotten salt routes.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];

function Originals() {
  const [active, setActive] = useState<(typeof ORIGINALS)[number] | null>(null);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
          TMV Originals
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          Stories we couldn't wait
          <br />
          to be hired to <span className="text-primary italic font-light">tell.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70">
          Between client work, we produce our own films and series. Passion projects that push our
          craft and prove what's possible when curiosity gets a budget.
        </p>
      </section>

      <section className="bg-surface border-y border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
          {ORIGINALS.map((o, i) => (
            <SectionReveal key={o.title}>
              <article
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(o)}
                  className="lg:col-span-7 group relative aspect-video overflow-hidden rounded-sm border border-border block"
                  aria-label={`Play ${o.title}`}
                >
                  <img
                    src={o.img}
                    alt={o.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse-glow group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 fill-current ml-1" />
                    </span>
                  </span>
                </button>
                <div className="lg:col-span-5">
                  <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary">
                    {o.type} · {o.year}
                  </p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
                    {o.title}
                  </h2>
                  <p className="mt-4 text-lg text-foreground/70">{o.desc}</p>
                  <button
                    type="button"
                    onClick={() => setActive(o)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-primary hover:underline"
                  >
                    Watch the film
                  </button>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <VideoModal
        open={!!active}
        onClose={() => setActive(null)}
        src={active?.videoUrl ?? ""}
        title={active?.title ?? ""}
      />
    </div>
  );
}
