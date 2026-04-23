import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, ArrowUpRight, Instagram, Youtube, Twitter } from "lucide-react";
import heroBg from "@/assets/hero.jpg";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.13 0 0 / 0.92), oklch(0.13 0 0 / 0.98)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Let's create
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Have an idea?
              <br />
              <span className="text-primary">We'll make it real.</span>
            </h2>
            <p className="mt-8 max-w-xl text-foreground/70 text-lg">
              Animation, live action, VFX, CGI. Wherever your story lives, we have the craft to bring it to screen.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <SocialLink href="https://in.linkedin.com/company/themadvirus" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://instagram.com/themadvirus" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://youtube.com/@themadvirus" label="YouTube">
                <Youtube className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://twitter.com/themadvirus" label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <ContactCard href="mailto:raman@themadvirus.com" label="Email" value="raman@themadvirus.com" icon={<Mail className="h-5 w-5" />} />
            <ContactCard href="tel:+918447514242" label="Phone" value="+91 844 751 4242" icon={<Phone className="h-5 w-5" />} />
            <ContactCard href="https://in.linkedin.com/company/themadvirus" external label="Social" value="LinkedIn / themadvirus" icon={<Linkedin className="h-5 w-5" />} />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-display text-xl font-bold">
            TMV<span className="text-primary">.</span>
            <span className="ml-2 font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Studios
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms and Conditions</Link>
            <Link to="/about" hash="contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} TMV Studios. Everything you can imagine is real.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground/80 hover:border-primary hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-surface/50 backdrop-blur p-6 hover:border-primary transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
          {icon}
        </span>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className="font-display text-lg">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
    </a>
  );
}
