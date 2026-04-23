import { useState } from "react";
import { Send, Check } from "lucide-react";
import { toast } from "sonner";

const SERVICES = ["Animation", "Live Action", "VFX & CGI", "Post", "Originals", "Other"] as const;
const BUDGETS = ["Under 5L", "5L to 25L", "25L to 1Cr", "1Cr+"] as const;

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "" as string,
    budget: "" as string,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const subject = encodeURIComponent(`New enquiry from ${form.name || "TMV website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\n${form.message}`,
    );
    window.location.href = `mailto:raman@themadvirus.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("Message sent!", {
        description: "We'll get back to you within two working days.",
        duration: 5000,
      });
    }, 600);
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            className="input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            className="input"
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field label="Company">
        <input
          type="text"
          value={form.company}
          onChange={update("company")}
          className="input"
          placeholder="Where do you work?"
        />
      </Field>

      <Field label="What do you need?">
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setForm((f) => ({ ...f, service: s }))}
              className={`px-4 py-2 rounded-sm border text-sm font-display uppercase tracking-wider transition-colors ${
                form.service === s
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Budget range">
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setForm((f) => ({ ...f, budget: b }))}
              className={`px-4 py-2 rounded-sm border text-sm font-display uppercase tracking-wider transition-colors ${
                form.budget === b
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Tell us about it" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="input resize-none"
          placeholder="The project, the timeline, the dream version of it."
        />
      </Field>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={sending || sent}
          className="group inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:scale-[1.03] transition-transform disabled:opacity-70 disabled:hover:scale-100"
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" /> Sent, talk soon
            </>
          ) : (
            <>
              {sending ? "Sending" : "Send enquiry"}
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          Or email
          <a href="mailto:raman@themadvirus.com" className="text-primary"> raman@themadvirus.com</a>
          {" "}directly.
        </p>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 0.25rem;
          padding: 0.875rem 1rem;
          color: var(--foreground);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground font-accent mb-3">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
