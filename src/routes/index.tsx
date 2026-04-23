import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import animImg from "@/assets/cat-animation.jpg";
import liveImg from "@/assets/cat-liveaction.jpg";
import vfxImg from "@/assets/cat-vfx.jpg";
import { SectionReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TMV Studios, Everything you can imagine is real." },
      {
        name: "description",
        content:
          "Creative production studio specializing in animation, live action, VFX and CGI. Discover our work.",
      },
      { property: "og:title", content: "TMV Studios" },
      { property: "og:description", content: "Everything you can imagine is real." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const CATEGORIES = [
  { to: "/portfolio/animation", title: "Animation", img: animImg, tag: "01" },
  { to: "/portfolio/live-action", title: "Live Action", img: liveImg, tag: "02" },
  { to: "/portfolio/vfx-cgi", title: "VFX & CGI", img: vfxImg, tag: "03" },
] as const;

const STATS = [
  { v: "120+", l: "Projects shipped" },
  { v: "40+", l: "Brand partners" },
  { v: "12", l: "Awards" },
  { v: "9 yrs", l: "Of craft" },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [reelOpen, setReelOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="-mt-20">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[640px] overflow-hidden flex items-end"
      >
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
          aria-hidden
        >
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover scale-110"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-20 lg:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-accent text-xs uppercase tracking-[0.4em] text-primary inline-flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Welcome to TMV
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-shadow-soft"
          >
            Everything
            <br />
            you can <span className="text-primary italic font-light">imagine</span>
            <br />
            is <span className="underline decoration-primary decoration-[6px] underline-offset-[10px]">real.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:scale-[1.03] transition-transform"
            >
              Discover more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              type="button"
              onClick={() => setReelOpen(true)}
              className="group inline-flex items-center gap-3 rounded-sm border border-border bg-background/30 backdrop-blur px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider hover:border-primary transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch reel
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground text-[10px] uppercase tracking-[0.4em]"
        >
          scroll
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-surface">
        <div className="flex gap-16 marquee whitespace-nowrap font-display text-3xl md:text-5xl uppercase tracking-tight">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0">
              {["Animation", "Live Action", "VFX", "CGI", "Originals", "Direction", "Post"].map((w, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-16">
                  {w}
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <SectionReveal className="lg:col-span-4">
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary">
              About the studio
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1} className="lg:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              We're a creative production studio for brands and storytellers who believe
              <span className="text-primary"> imagination is a craft</span>, and craft is everything.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-foreground/70">
              From hand drawn frames to photoreal CGI, from intimate documentary to high octane commercial,
              every project starts with a story and ends with a feeling.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-surface border-y border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionReveal className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-3">
                What we make
              </p>
              <h2 className="font-display text-4xl md:text-6xl">Selected work</h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 font-display uppercase tracking-wider text-sm hover:text-primary transition-colors"
            >
              All projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {CATEGORIES.map((c, i) => (
              <SectionReveal key={c.to} delay={i * 0.1}>
                <Link
                  to={c.to}
                  className="group block relative aspect-[3/4] overflow-hidden rounded-sm border border-border hover-lift"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <span className="font-accent text-xs uppercase tracking-[0.4em] text-primary">
                      {c.tag}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">{c.title}</h3>
                      <p className="mt-2 text-sm text-foreground/70 inline-flex items-center gap-2 group-hover:text-primary transition-colors">
                        Explore <ArrowRight className="h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s) => (
              <div key={s.l} className="border-l border-border pl-6">
                <p className="font-display text-5xl md:text-6xl text-primary">{s.v}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <VideoModal
        open={reelOpen}
        onClose={() => setReelOpen(false)}
        src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
        title="TMV Studios Showreel"
      />
    </div>
  );
}
