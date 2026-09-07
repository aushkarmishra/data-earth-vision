import { useMemo, useState } from "react";
import {
  Map,
  BarChart3,
  Database,
  FileText,
  Globe2,
  Layers,
  LifeBuoy,
  Check,
  Plus,
  Minus,
  Mountain,
  Compass,
  Sparkles,
  ScanSearch,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./Reveal";
import { TopoBackground } from "./TopoBackground";
import { LogoMark } from "./Nav";
import {
  advantages,
  brand,
  contact,
  faqs,
  navLinks,
  portfolioFilters,
  pricing,
  processSteps,
  projects,
  services,
  specializations,
  stats,
  tools,
  type Project,
  type Service,
} from "@/content/site";
import { cn } from "@/lib/utils";

const serviceIcons = [Map, BarChart3, Database, FileText, Globe2, Layers, LifeBuoy];
const advantageIcons = [ScanSearch, Sparkles, Database, Compass, Users];

/* ============ TRUST / SPECIALIZATION STRIP ============ */
export function TrustStrip() {
  return (
    <section aria-label="Specializations" className="border-y border-border/70 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
          {specializations.map((s, i) => (
            <li key={s} className="flex items-center gap-6">
              {i > 0 && <span className="hidden h-4 w-px bg-border sm:block" />}
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold text-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
          <Reveal className="text-center sm:text-left">
            <p className="font-mono text-sm text-foreground">QGIS • ArcGIS • Python • Remote Sensing</p>
            <p className="mt-1 text-sm text-muted-foreground">Tools & Workflows</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
const expertise = [
  "GIS",
  "Remote Sensing",
  "Spatial Analysis",
  "Geological Mapping",
  "Data Processing",
  "Scientific Visualization",
  "Research Documentation",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <TopoBackground className="-z-10 opacity-40" opacity={0.25} />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="label-mono">About the studio</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Where Research Meets <span className="text-gradient">Visual Intelligence.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <div className="card-tech glass relative overflow-hidden rounded-xl p-6">
              <Mountain className="h-8 w-8 text-primary" aria-hidden="true" />
              <p className="mt-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                About the Researcher
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {/* EDIT: replace with your own profile / CV summary */}
                [Add your short profile here — background, degrees, research interests and a link to your CV.]
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
              >
                Get in touch →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-16">
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {brand.name} is a research-focused digital studio dedicated to helping researchers communicate complex
              scientific information with clarity and precision.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              From geospatial datasets and geological surveys to scientific figures and research reports, the goal is
              simple: transform raw information into outputs that are accurate, understandable and visually compelling.
            </p>
          </Reveal>
          <Reveal delay={160} className="mt-8">
            <p className="label-mono">Expertise</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Help You Build."
          subtitle="From raw research data to publication-ready outputs."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]!;
            return (
              <Reveal as="li" key={s.id} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="card-tech group h-full w-full overflow-hidden rounded-xl p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary/60 text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{s.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/85">
                    {s.summary}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View details →
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} eyebrow={`Service ${active?.number ?? ""}`}>
        {active && (
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
            <div>
              <p className="label-mono">Possible deliverables</p>
              <ul className="mt-3 space-y-2">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-mono">Typical workflow</p>
              <ol className="mt-3 space-y-2">
                {active.workflow.map((w, i) => (
                  <li key={w} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {w}
                  </li>
                ))}
              </ol>
            </div>
            <a
              href="#contact"
              onClick={() => setActive(null)}
              className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--color-primary)]"
            >
              Request This Service →
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}

/* ============ TOOLS ============ */
export function Tools() {
  return (
    <section className="relative border-y border-border/70 bg-surface/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Toolbox" title="Tools I Work With." />
        <ul className="mt-10 flex flex-wrap gap-3">
          {tools.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 40}>
              <span className="glass group inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/45 hover:text-foreground hover:shadow-[0_0_28px_-14px_var(--color-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70 transition-transform group-hover:scale-150" />
                {t}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ PORTFOLIO ============ */
export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work."
          subtitle="A glimpse into how research data can become meaningful visual communication."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-md border px-4 py-2 text-xs font-medium tracking-wide transition-all",
                filter === f
                  ? "border-primary/50 bg-primary/12 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <li key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="card-tech group flex h-full w-full flex-col overflow-hidden rounded-xl text-left"
              >
                <ProjectVisual seed={i} />
                <div className="flex flex-1 flex-col p-5">
                  <span className="label-mono">{p.category}</span>
                  <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <span className="mt-4 inline-flex text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                    View Project →
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} eyebrow={active?.category ?? ""}>
        {active && (
          <div className="space-y-5">
            <ProjectVisual seed={3} tall />
            <p className="text-sm leading-relaxed text-muted-foreground">{active.detail}</p>
            <ul className="flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <li key={t} className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setActive(null)}
              className="inline-flex rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Discuss a similar project →
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}

/** Placeholder scientific visual — swap for your own <img loading="lazy" /> later. */
function ProjectVisual({ seed, tall = false }: { seed: number; tall?: boolean }) {
  const lines = Array.from({ length: 9 }, (_, i) => i);
  return (
    <div className={cn("relative overflow-hidden border-b border-border bg-surface", tall ? "h-56 rounded-lg border" : "h-40")}>
      <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
      <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Abstract geospatial visual placeholder">
        <g fill="none" stroke="var(--color-primary)" strokeWidth="0.9" opacity="0.55">
          {lines.map((i) => (
            <path
              key={i}
              d={`M -10 ${40 + i * 12} Q ${70 + seed * 12} ${10 + i * 14}, 160 ${52 + i * 10} T 330 ${34 + i * 12}`}
              opacity={0.85 - i * 0.07}
            />
          ))}
        </g>
        <circle cx={90 + seed * 15} cy={70} r="3" fill="var(--color-accent)" />
        <circle cx={210 - seed * 10} cy={96} r="3" fill="var(--color-terra)" />
      </svg>
    </div>
  );
}

/* ============ PROCESS ============ */
export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-y border-border/70 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Process" title="From Raw Data to Research-Ready Output." />
        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 140} className="relative">
              <div className="card-tech h-full rounded-xl p-6">
                <span className="font-mono text-4xl font-semibold text-primary/25">{s.number}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
              {i < processSteps.length - 1 && (
                <span className="hairline absolute top-1/2 -right-2 hidden w-4 md:block" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ WHY ============ */
export function Why() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Why work together" title={`Why ${brand.name}?`} />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = advantageIcons[i % advantageIcons.length]!;
            return (
              <Reveal as="li" key={a.title} delay={i * 70}>
                <div className="card-tech h-full rounded-xl p-6">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ============ PRICING ============ */
export function Pricing() {
  return (
    <section id="pricing" className="relative border-y border-border/70 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose What You Need."
          subtitle="All prices shown are placeholders and can be edited in one place (src/content/site.ts)."
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90}>
              <div
                className={cn(
                  "card-tech relative flex h-full flex-col rounded-xl p-7",
                  p.featured && "border-primary/45 shadow-[0_0_60px_-30px_var(--color-primary)]",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-md border border-primary/50 bg-background px-3 py-1 font-mono text-[0.62rem] tracking-widest text-primary uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <p className="mt-6 font-mono text-3xl font-semibold text-foreground">{p.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-all",
                    p.featured
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_-8px_var(--color-primary)]"
                      : "border border-border text-foreground hover:border-primary/40 hover:bg-secondary",
                  )}
                >
                  {p.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-y border-border/70 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="FAQ" title="Common Questions." />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-primary"
                  >
                    {f.q}
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div
                  className={cn(
                    "grid transition-all duration-400",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * FORM SUBMISSION — currently non-functional (demo only).
   * To connect it later, pick ONE of these:
   *   • Formspree      -> <form action="https://formspree.io/f/XXXX" method="POST">
   *   • Netlify Forms  -> add: netlify name="contact" to the <form> tag
   *   • EmailJS        -> call emailjs.sendForm(...) inside handleSubmit
   *   • Custom backend -> POST the form data to your own endpoint
   * Never paste private API keys directly into this file.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <TopoBackground className="-z-10" opacity={0.22} />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have a Research Problem?"
            subtitle="Let's turn your data into something people can understand."
          />
          {/* EDIT YOUR CONTACT DETAILS IN src/content/site.ts */}
          <Reveal delay={100} className="mt-10 space-y-5">
            <ContactRow label="Email" value={contact.email} />
            <ContactRow label="Phone" value={contact.phone} />
            <ContactRow label="Location" value={contact.location} />
            <div>
              <p className="label-mono">Social</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {contact.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="inline-flex rounded-md border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form onSubmit={handleSubmit} className="card-tech glass rounded-xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" />
              <Field id="email" label="Email" type="email" />
              <Field id="subject" label="Project / Subject" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label htmlFor="service" className="label-mono">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Describe your dataset, output needed and deadline."
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="file" className="label-mono">
                  Attach a file (optional)
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="mt-2 w-full rounded-md border border-dashed border-input bg-background/60 px-4 py-3 text-sm text-muted-foreground file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:text-foreground"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_-8px_var(--color-primary)] active:translate-y-px"
            >
              Send Project Enquiry →
            </button>
            <p aria-live="polite" className="mt-3 text-center text-xs text-muted-foreground">
              {sent
                ? "Thanks — this demo form isn't connected yet. Add your form service to start receiving enquiries."
                : "This form is a placeholder until a form service is connected."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label-mono">{label}</p>
      <p className="mt-1 text-base text-foreground">{value}</p>
    </div>
  );
}

function Field({ id, label, type = "text", className }: { id: string; label: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-mono">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground"
      />
    </div>
  );
}

/* ============ FINAL CTA ============ */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border/70 py-28 sm:py-36">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
      <TopoBackground className="-z-10" opacity={0.4} />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            Your Research Has a Story. <span className="text-gradient">Let's Visualize It.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Maps, data, figures, analysis and research support — built around your project.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex rounded-md bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_44px_-10px_var(--color-primary)] active:translate-y-px"
          >
            Start Your Project →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <LogoMark />
              <span className="font-mono text-xs font-semibold tracking-[0.22em] text-foreground uppercase">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">Complex research. Clear visual stories.</p>
          </div>
          <nav aria-label="Footer">
            <p className="label-mono">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks
                .filter((l) => l.label !== "Process")
                .map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
          <div>
            <p className="label-mono">Connect</p>
            <ul className="mt-4 space-y-2">
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>Built for researchers. Designed for clarity.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============ SHARED MODAL ============ */
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-scale-in glass max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-xl p-6 sm:rounded-xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && <p className="label-mono">{eyebrow}</p>}
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
