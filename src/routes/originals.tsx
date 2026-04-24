import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/originals")({
  component: Originals,
});

const KM_THUMB = "https://img.youtube.com/vi/UCz67TNWBqU38S8VRvjDO2wg/maxresdefault.jpg";
const KM_CHANNEL = "https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg";

const ORIGINALS = [
  {
    title: "Khooni Monday",
    type: "Horror Anthology Series",
    year: "2018 — Ongoing",
    img: KM_THUMB,
    desc: "India's biggest horror content channel. 6.34M subscribers, 1.2B+ views, 850+ episodes. New horror every Monday.",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    channelUrl: KM_CHANNEL,
    slug: "/khooni-monday" as "/khooni-monday" | null,
  },
  {
    title: "The Horror Show Podcast",
    type: "Podcast — India's #1 on Spotify",
    year: "2023 — Ongoing",
    img: KM_THUMB,
    desc: "Divay Agarwal interviews horror creators, filmmakers, and paranormal investigators. India's top horror podcast on Spotify.",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    channelUrl: "https://music.amazon.in/podcasts/785a6d3a-b10d-498c-86a9-08a54a325d54/the-horror-show-by-khooni-monday",
    slug: null as "/khooni-monday" | null,
  },
  {
    title: "HorrorCon",
    type: "Live Event — Annual, Delhi",
    year: "2024 — Ongoing",
    img: KM_THUMB,
    desc: "India's premier horror fan convention. Cosplay, short film competitions, creator panels, and storytelling sessions.",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    channelUrl: KM_CHANNEL,
    slug: "/khooni-monday" as "/khooni-monday" | null,
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(o)}
                      className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-primary hover:underline"
                    >
                      Watch the film
                    </button>
                    {o.slug && (
                      <Link
                        to={o.slug as "/khooni-monday"}
                        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-foreground/60 hover:text-primary transition-colors"
                      >
                        Explore series <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {o.channelUrl && (
                      <a
                        href={o.channelUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-foreground/60 hover:text-primary transition-colors"
                      >
                        YouTube channel <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
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
