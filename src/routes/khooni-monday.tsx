import { createFileRoute } from "@tanstack/react-router";
import { Play, ExternalLink, Youtube } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/khooni-monday")({
  component: KhooniMonday,
});

// Real YouTube thumbnail CDN — no hosting needed
const yt = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

// Real Khooni Monday episodes with confirmed view counts from public data
const EPISODES = [
  {
    title: "Summer Vacation — E304",
    views: "4.4M views",
    year: "Jul 2025",
    desc: "The channel's biggest 2025 episode. A summer trip turns into something no one comes back from the same.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Holi Horror Compilation",
    views: "4.2M views",
    year: "Mar 2024",
    desc: "Festival horror at its most unsettling. Stories set during Holi that you won't forget.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Smile — E274",
    views: "3.2M views",
    year: "Oct 2024",
    desc: "A Hindi horror story drawing on the Smile urban legend, reimagined in an Indian setting.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "School Horror Stories",
    views: "2.5M views",
    year: "Sep 2024",
    desc: "School-set horror drawn from real submissions and Indian folklore.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Odisha Horror Story — E293",
    views: "1.9M views",
    year: "Apr 2025",
    desc: "Regional horror rooted in Odishan folklore. Atmospheric and deeply unsettling.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
  },
  {
    title: "Nainital Haunted Trip — E295",
    views: "1.8M views",
    year: "May 2025",
    desc: "Mountain horror from the hills of Uttarakhand. A trip that goes very wrong.",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
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
              Khooni Monday is TMV's flagship original horror anthology — India's biggest horror content channel with <strong className="text-foreground">6.34M subscribers</strong> and <strong className="text-foreground">1.2 billion+ views</strong>. Launched in August 2018, the channel has published 850+ episodes drawing from Indian mythology, folklore, urban legends, and the quiet terror of everyday life.
            </p>
            <p className="mt-4 text-lg text-foreground/70">
              New episodes drop every Monday. We also run <strong className="text-foreground">The Horror Show by Khooni Monday</strong> — India's #1 horror podcast on Spotify — and host <strong className="text-foreground">HorrorCon</strong>, India's premier annual horror fan event in Delhi.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: "6.34M", l: "Subscribers" },
                { v: "1.2B+", l: "Total views" },
                { v: "850+", l: "Episodes" },
              ].map(s => (
                <div key={s.l} className="border-l border-red-500/40 pl-4">
                  <p className="font-display text-3xl text-red-500">{s.v}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EPISODES.map((ep, i) => (
              <SectionReveal key={ep.title} delay={i * 0.07}>
                <button
                  type="button"
                  onClick={() => setActive(ep)}
                  className="group w-full text-left"
                  aria-label={`Play ${ep.title}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface">
                    <img
                      src={ep.img}
                      alt={ep.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault not available
                        const t = e.currentTarget;
                        if (t.src.includes("maxresdefault")) {
                          t.src = t.src.replace("maxresdefault", "hqdefault");
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </span>
                    </span>
                    <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-accent tracking-wider">
                      {ep.views}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-red-500">{ep.year}</p>
                    <h3 className="mt-1 font-display text-lg group-hover:text-red-500 transition-colors">{ep.title}</h3>
                    <p className="mt-1 text-sm text-foreground/60 line-clamp-2">{ep.desc}</p>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="mt-12 text-center">
              <a
                href="https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                Watch all 850+ episodes on YouTube
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* HORRORCON */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <SectionReveal className="lg:col-span-5">
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-red-500 mb-4">Live event</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">HorrorCon.</h2>
            <p className="mt-6 text-lg text-foreground/70">
              India's premier horror fan convention, held annually in Delhi. Horror creators, filmmakers, cosplayers, and fans — all under one roof. The 2nd edition took place on October 25–26, 2025.
            </p>
            <p className="mt-4 text-foreground/70">
              Featuring storytelling sessions, horror cosplay competitions, short film screenings, and panels with India's top horror content creators.
            </p>
            <a
              href="https://www.youtube.com/channel/UCz67TNWBqU38S8VRvjDO2wg"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-red-500 hover:underline"
            >
              Follow for HorrorCon 2026 updates <ExternalLink className="h-4 w-4" />
            </a>
          </SectionReveal>
          <SectionReveal delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "2nd", l: "Edition (2025)" },
                { v: "Delhi", l: "Location" },
                { v: "2 days", l: "Duration" },
                { v: "Annual", l: "Frequency" },
              ].map(s => (
                <div key={s.l} className="border border-border rounded-sm p-6 bg-surface/50 hover-card">
                  <p className="font-display text-4xl text-red-500">{s.v}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
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
