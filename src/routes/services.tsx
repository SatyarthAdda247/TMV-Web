import { createFileRoute, Link } from "@tanstack/react-router";
import { Film, Sparkles, Camera, Wand2, PenTool, Music4, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services, TMV Studios" },
      { name: "description", content: "Animation, live action, VFX/CGI, design and post services by TMV Studios." },
      { property: "og:title", content: "Services, TMV Studios" },
      { property: "og:description", content: "End to end production. From concept to delivery." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Sparkles,
    title: "Animation",
    desc: "2D, 3D, motion design and stop motion. Characters, explainers, broadcast graphics.",
    bullets: ["Character design", "Rigging & animation", "Motion design", "Storyboarding"],
    example: { label: "The Wandering Pixel", slug: "the-wandering-pixel" },
  },
  {
    icon: Camera,
    title: "Live Action",
    desc: "Direction, production and cinematography for commercials, films and brand content.",
    bullets: ["Direction", "DOP & lighting", "Production", "Casting"],
    example: { label: "Night Shift", slug: "night-shift" },
  },
  {
    icon: Wand2,
    title: "VFX & CGI",
    desc: "Photoreal CGI, FX simulations, compositing and finishing for screens of all sizes.",
    bullets: ["3D modeling", "FX & sims", "Compositing", "Color & finish"],
    example: { label: "Edge of Atmosphere", slug: "edge-of-atmosphere" },
  },
  {
    icon: Film,
    title: "Post Production",
    desc: "Edit, sound design, color grade and online. Bringing every project home.",
    bullets: ["Editorial", "Sound design", "Color grading", "Mastering"],
    example: { label: "After Hours", slug: "after-hours" },
  },
  {
    icon: PenTool,
    title: "Concept & Design",
    desc: "Pre production thinking. Concepts, scripts, art direction, look development.",
    bullets: ["Creative strategy", "Scripts", "Art direction", "Look dev"],
    example: { label: "Made of Lines", slug: "made-of-lines" },
  },
  {
    icon: Music4,
    title: "Sound & Music",
    desc: "Original score, sound design and audio post production crafted for picture.",
    bullets: ["Original score", "SFX", "Voice over", "Mix & master"],
    example: { label: "Echo Echo", slug: "echo-echo" },
  },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We start with a call. Brief, ambition, references, the dream version of it." },
  { n: "02", t: "Concept", d: "Treatments, scripts, look frames. We agree on the soul of the film before anything else." },
  { n: "03", t: "Production", d: "Cameras roll, frames render. Daily check ins, weekly cuts, no surprises." },
  { n: "04", t: "Delivery", d: "Final masters, every format you need, archive of every asset, calmly handed over." },
];

const PRICING = [
  {
    tier: "Spark",
    price: "From 5L",
    desc: "Short form social, brand films and motion projects with focused scope.",
    inc: ["Single deliverable", "Two rounds of revision", "4 to 6 week timeline", "Original sound or library"],
  },
  {
    tier: "Studio",
    price: "From 25L",
    desc: "Anthem films, campaigns and multi format launches with fuller production.",
    inc: ["Full crew shoot or CG build", "Three rounds of revision", "8 to 12 week timeline", "Original score, full mix"],
    featured: true,
  },
  {
    tier: "Originals",
    price: "Bespoke",
    desc: "Long form, episodic and feature work. We build the team and budget around the story.",
    inc: ["Custom team and timeline", "Festival and broadcast delivery", "Co production possible", "End to end ownership"],
  },
];

function Services() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
          What we do
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          End to end.
          <br />
          <span className="text-primary">Idea to delivery.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70">
          One studio, every department in house. Less hand off, more momentum, better work.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <SectionReveal
                key={s.title}
                delay={i * 0.05}
                className={`border-b border-border ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""}`}
              >
                <div className="p-8 lg:p-10 h-full group hover:bg-surface transition-colors flex flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-3xl">{s.title}</h2>
                  <p className="mt-3 text-foreground/70">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="h-px w-4 bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: s.example.slug }}
                    className="mt-auto pt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-display text-primary hover:underline"
                  >
                    See: {s.example.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <SectionReveal>
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
              How a project runs
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
              A process that protects the work.
            </h2>
          </SectionReveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 0.05}>
                <div className="border-l border-primary pl-6">
                  <p className="font-accent text-sm uppercase tracking-[0.4em] text-primary">{p.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{p.t}</h3>
                  <p className="mt-3 text-foreground/70 text-sm leading-relaxed">{p.d}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionReveal className="text-center max-w-3xl mx-auto">
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">Investment</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">
            Honest tiers. Custom quotes.
          </h2>
          <p className="mt-6 text-foreground/70">
            Every project is different. These ranges are a starting point, not a price list. Final
            number depends on scope, scale and ambition.
          </p>
        </SectionReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PRICING.map((tier, i) => (
            <SectionReveal key={tier.tier} delay={i * 0.05}>
              <div
                className={`relative h-full rounded-sm p-8 border ${
                  tier.featured
                    ? "border-primary bg-primary/5"
                    : "border-border bg-surface/40"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-accent">
                    Most popular
                  </span>
                )}
                <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary">{tier.tier}</p>
                <p className="mt-4 font-display text-4xl">{tier.price}</p>
                <p className="mt-3 text-sm text-foreground/70">{tier.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.inc.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/85">
                      <span className="mt-2 h-px w-3 bg-primary shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 text-center">
        <SectionReveal>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Let's build it
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Bring us your <span className="text-primary italic font-light">impossible</span>.
          </h2>
          <Link
            to="/about"
            hash="contact"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:scale-[1.03] transition-transform"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
