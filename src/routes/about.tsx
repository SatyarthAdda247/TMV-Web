import { createFileRoute } from "@tanstack/react-router";
import liveImg from "@/assets/cat-liveaction.jpg";
import animImg from "@/assets/cat-animation.jpg";
import vfxImg from "@/assets/cat-vfx.jpg";
import { SectionReveal } from "@/components/SectionReveal";
import { ContactForm } from "@/components/ContactForm";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, TMV Studios" },
      { name: "description", content: "TMV Studios is a creative production company. Meet the team and our process." },
      { property: "og:title", content: "About, TMV Studios" },
      { property: "og:description", content: "Craft, curiosity and collaboration." },
      { property: "og:image", content: liveImg },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  { n: "01", t: "Curiosity first", d: "We chase questions before we chase shots. The film is better for it." },
  { n: "02", t: "Craft over flash", d: "Every department obsesses over the small things nobody is meant to notice." },
  { n: "03", t: "Collaboration always", d: "The best ideas don't have authors, they have rooms." },
  { n: "04", t: "Ship with feeling", d: "If it doesn't move us, we don't ship it. Simple as that." },
];

const TEAM = [
  { name: "Divay Agarwal", role: "Co-Founder, TMV", bio: "Started visiting Delhi's haunted sites at 15. Co-founded Khooni Monday at 26 after spotting a gap in India's horror content landscape. Now leads TMV's creative vision and the HorrorCon event IP.", img: liveImg },
  { name: "Raman Bhalla", role: "Co-Founder, TMV", bio: "The marketing and performance-led storytelling brain behind TMV. Drives brand partnerships with Netflix, Amazon, Krafton and more. Based in Mumbai.", img: animImg },
  { name: "Ujjwal", role: "Head of Growth", bio: "Connects TMV's creative output with the right audiences and brand partners. Leads growth strategy across platforms and channels.", img: vfxImg },
  { name: "Hemanya Dua", role: "Leading Horror Con", bio: "Leads HorrorCon — India's premier horror fan event held annually in Delhi. Brings together horror creators, filmmakers, cosplayers and fans under one roof.", img: liveImg },
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 lg:pt-32 lg:pb-32">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
          The studio
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          A creative collective
          <br />
          for stories that <span className="text-primary italic font-light">dare.</span>
        </h1>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <SectionReveal className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <img
                src={liveImg}
                alt="TMV Studios team on set"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1} className="lg:col-span-6">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              We started with a single rule.
              <span className="text-primary"> Make work we'd want to watch.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-foreground/75 leading-relaxed">
              <p>
                TMV (The Mad Virus) is a creative agency founded by Divay Agarwal and Raman Bhalla, based in Mumbai and Delhi. What started as an animation studio in 2019 has grown into a full-fledged production and creative powerhouse.
              </p>
              <p>
                We own and run multiple YouTube channels — our biggest property, Khooni Monday, has 6.34M subscribers and 1.2B+ views. We also run India's #1 horror podcast on Spotify: The Horror Show by Khooni Monday. Our community spans 10M+ followers across platforms.
              </p>
              <p>
                We partner with brands like Netflix, Amazon, Prime Video, JioHotstar, Krafton, HDFC Bank, Casio, Lenskart, Delhivery, and Hell Energy.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionReveal>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">The people</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Faces behind the frames.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <SectionReveal key={m.name} delay={i * 0.05}>
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <article className="group hover-card rounded-sm cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface">
                      <img
                        src={m.img}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                      <div className="absolute inset-0 p-5 flex flex-col justify-end">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-accent">
                          {m.role}
                        </p>
                        <h3 className="mt-1 font-display text-2xl">{m.name}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{m.bio}</p>
                  </article>
                </HoverCardTrigger>
                <HoverCardContent
                  side="top"
                  className="w-72 border-border bg-surface/95 backdrop-blur-md p-5"
                >
                  <div className="flex items-start gap-4">
                    <img src={m.img} alt={m.name} className="h-14 w-14 rounded-sm object-cover grayscale" />
                    <div>
                      <p className="font-display text-lg leading-tight">{m.name}</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-accent mt-0.5">{m.role}</p>
                      <p className="mt-2 text-xs text-foreground/70 leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <SectionReveal>
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
              How we work
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
              Four principles. Zero compromise.
            </h2>
          </SectionReveal>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {PRINCIPLES.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 0.05}>
                <div className="bg-background p-10 h-full">
                  <p className="font-accent text-sm uppercase tracking-[0.4em] text-primary">
                    {p.n}
                  </p>
                  <h3 className="mt-4 font-display text-3xl">{p.t}</h3>
                  <p className="mt-3 text-foreground/70">{p.d}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Start a project
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1]">
              Tell us the
              <br />
              <span className="text-primary italic font-light">whole idea.</span>
            </h2>
            <p className="mt-6 text-foreground/70 max-w-md">
              Quick questions, big ambitions, half formed dreams. We read every message and respond
              within two working days.
            </p>

            <div className="mt-10 space-y-3 text-sm">
              <a href="mailto:raman@themadvirus.com" className="block text-foreground/80 hover:text-primary transition-colors">
                raman@themadvirus.com
              </a>
              <a href="tel:+918447514242" className="block text-foreground/80 hover:text-primary transition-colors">
                +91 844 751 4242
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-surface/40 backdrop-blur p-8 lg:p-10">
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
