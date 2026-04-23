import { createFileRoute } from "@tanstack/react-router";
import { Play, ExternalLink, Youtube } from "lucide-react";
import { useState } from "react";
import vfxImg from "@/assets/cat-vfx.jpg";
import liveImg from "@/assets/cat-liveaction.jpg";
import animImg from "@/assets/cat-animation.jpg";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/khooni-monday")({
  component: KhooniMonday,
});

const EPISODES = [
  {
    title: "Khooni Monday — Episode 1",
    desc: "The one that started it all. Horror, humour, and a whole lot of dread.",
    img: vfxImg,
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Khooni Monday — Episode 2",
    desc: "Darker, stranger, and somehow funnier. The series finds its voice.",
    img: liveImg,
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Khooni Monday — Episode 3",
    desc: "A slow burn that pays off in the final frame. Fan favourite.",
    img: animImg,
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
];

function KhooniMonday() {
  const [active, setActive] = useState<(typeof EPISODES)[number] | null>(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 lg:pt-36 lg:pb-32">
          <SectionReveal>
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-red-500 mb-6">
              TMV Originals
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight">
              Khooni
              <br />
              <span className="text-red-500 italic font-light">Monday.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/70">
              India's horror anthology series. Every Monday, a new story. Every story, a new kind of dread.
              Produced and directed by TMV Studios.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 rounded-sm bg-red-600 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                Watch on YouTube
              </a>
              <a
                href="https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider hover:border-red-500 hover:text-red-500 transition-colors"
              >
                Subscribe to channel
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <SectionReveal className="lg:col-span-4">
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-red-500">The series</p>
          </SectionReveal>
          <SectionReveal delay={0.1} className="lg:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
              Horror that feels like home.
              <span className="text-red-500"> Rooted in India, universal in dread.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Khooni Monday is TMV's flagship original horror anthology. Each episode is a standalone story
              drawing from Indian folklore, urban legends, and the quiet terror of everyday life.
              New episodes drop every Monday on our YouTube channel.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* EPISODES */}
      <section className="bg-surface border-y border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionReveal>
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-red-500 mb-4">Episodes</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-16">Selected stories.</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {EPISODES.map((ep, i) => (
              <SectionReveal key={ep.title} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => setActive(ep)}
                  className="group w-full text-left"
                  aria-label={`Play ${ep.title}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
                    <img
                      src={ep.img}
                      alt={ep.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl group-hover:text-red-500 transition-colors">{ep.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{ep.desc}</p>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <SectionReveal>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-red-500 mb-6">Every Monday</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight">
            New horror.
            <br />
            <span className="text-red-500 italic font-light">Every week.</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Subscribe to the Khooni Monday YouTube channel and never miss a drop.
          </p>
          <a
            href="https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-red-600 px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
          >
            <Youtube className="h-5 w-5" />
            Subscribe on YouTube
          </a>
        </SectionReveal>
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
