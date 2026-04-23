import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy, TMV Studios" },
      { name: "description", content: "How TMV Studios collects, uses and protects your information." },
      { property: "og:title", content: "Privacy Policy, TMV Studios" },
      { property: "og:description", content: "How we handle your data at TMV Studios." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24 lg:py-32">
      <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">Legal</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>

      <div className="mt-12 space-y-10 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">1. Information we collect</h2>
          <p>
            When you contact TMV Studios through our website, email or phone, we collect the
            information you choose to share with us. That usually includes your name, email
            address, company, phone number and any project details you send our way.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">2. How we use it</h2>
          <p>
            We use your information to respond to enquiries, scope projects, send proposals and
            keep you informed about the work we do together. We do not sell your data and we do
            not share it with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">3. Cookies and analytics</h2>
          <p>
            Our website uses minimal cookies to keep the experience smooth. We may use privacy
            respecting analytics to understand which pages get visited so we can improve them.
            No personally identifying tracking is used.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">4. Data retention</h2>
          <p>
            Project related correspondence is kept for as long as we have an active or potential
            relationship. You can ask us to delete your data at any time by emailing
            <a href="mailto:raman@themadvirus.com" className="text-primary"> raman@themadvirus.com</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">5. Your rights</h2>
          <p>
            You have the right to access, correct or delete the personal information we hold
            about you. Reach out and we will respond within thirty days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">6. Contact</h2>
          <p>
            Questions about this policy? Email
            <a href="mailto:raman@themadvirus.com" className="text-primary"> raman@themadvirus.com</a>
            {" "}or call +91 844 751 4242.
          </p>
        </section>
      </div>
    </div>
  );
}
