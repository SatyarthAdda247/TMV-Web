import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions, TMV Studios" },
      { name: "description", content: "Terms and conditions for using TMV Studios services and website." },
      { property: "og:title", content: "Terms and Conditions, TMV Studios" },
      { property: "og:description", content: "The terms that govern our work and website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24 lg:py-32">
      <p className="font-accent text-xs uppercase tracking-[0.4em] text-primary mb-6">Legal</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">Terms and Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>

      <div className="mt-12 space-y-10 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">1. Acceptance</h2>
          <p>
            By accessing this website or engaging TMV Studios for production services, you agree
            to these terms. If you do not agree, please stop using the site or services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">2. Services</h2>
          <p>
            TMV Studios provides creative production services including animation, live action,
            VFX and CGI. Specific deliverables, timelines and fees are agreed in writing on a
            project by project basis through a separate statement of work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">3. Intellectual property</h2>
          <p>
            All content on this website, including imagery, copy, branding and showreels, is the
            property of TMV Studios or its clients and is protected by copyright. You may not
            reuse it without written permission. Project deliverables are licensed as agreed in
            the relevant statement of work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">4. Payment</h2>
          <p>
            Project fees, milestones and payment terms are defined in each statement of work.
            Late payment may delay delivery and incur a service charge as outlined in the
            agreement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">5. Confidentiality</h2>
          <p>
            We treat all client briefs, scripts and unreleased work as confidential. We expect
            the same care for any creative ideas, treatments or pricing we share with you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">6. Limitation of liability</h2>
          <p>
            TMV Studios is not liable for indirect, incidental or consequential damages arising
            from your use of this website. Our total liability for project work is limited to
            fees paid for that project in the previous twelve months.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">7. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Disputes will be resolved in the
            courts of New Delhi.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground mb-3">8. Contact</h2>
          <p>
            Questions about these terms? Email
            <a href="mailto:raman@themadvirus.com" className="text-primary"> raman@themadvirus.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
