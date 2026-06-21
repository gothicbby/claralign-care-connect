import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Stethoscope, Workflow, ShieldCheck, BarChart3, FileText, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claralign — Aligning Technology with Better Care" },
      { name: "description", content: "Behavioral health technology and operations consulting. We help organizations align EHRs, workflows, and compliance to improve care." },
      { property: "og:title", content: "Claralign — Aligning Technology with Better Care" },
      { property: "og:description", content: "Behavioral health technology and operations consulting." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Stethoscope, title: "Clinical Operations", desc: "Reimagine intake, assessment, and care delivery workflows that clinicians actually want to use." },
  { icon: Workflow, title: "EHR Implementation", desc: "From selection through go-live and optimization, with deep behavioral health configuration expertise." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "State, federal, and payer requirements translated into clean documentation and audit-ready processes." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Dashboards and KPIs that surface what matters — for executives, clinicians, and quality teams." },
  { icon: FileText, title: "Digital Forms & Documentation", desc: "Form libraries and templates designed for clinical accuracy, billing integrity, and clinician sanity." },
  { icon: Wrench, title: "Operational Improvement", desc: "Identify friction, redesign the workflow, and measure the lift across the organization." },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grain opacity-60" aria-hidden />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Behavioral Health · Technology · Operations
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-foreground">
              Aligning technology with <em className="text-primary">better care</em>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Claralign helps behavioral health organizations connect their EHR,
              documentation, and day-to-day operations — so clinicians can focus on
              clients and leaders can trust their data.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
              >
                Start a conversation <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="text-sm text-foreground/80 hover:text-primary underline-offset-4 hover:underline">
                Explore the work →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 bg-muted">
              <img src={heroImg} alt="Abstract aligned shapes" className="h-full w-full object-cover" width={1600} height={1200} />
            </div>
          </div>
        </div>
      </section>

      {/* Belief strip */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          {[
            ["Clinically grounded", "Founded by a behavioral health professional who has lived the workflow."],
            ["Technically fluent", "EHR configuration, integrations, analytics, and digital forms — built right."],
            ["Operationally honest", "We measure what matters and only ship what your team will actually use."],
          ].map(([h, p]) => (
            <div key={h}>
              <div className="font-serif text-2xl text-foreground">{h}</div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">What we do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl">
              Practical consulting across the full clinical-tech stack.
            </h2>
          </div>
          <Link to="/services" className="text-sm text-primary hover:underline">All services →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 hover:bg-accent/40 transition-colors">
              <Icon size={22} className="text-primary" />
              <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <p className="font-serif text-3xl md:text-5xl leading-[1.15]">
            “Technology should disappear into the work — so clinicians can stay present
            with the people they serve.”
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] opacity-70">— Founding principle</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Ready to align your tech and your care?
          </h2>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're selecting an EHR, recovering from a rough implementation, or
              tightening compliance and reporting — we'd love to hear what you're working on.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
            >
              Book a discovery call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
