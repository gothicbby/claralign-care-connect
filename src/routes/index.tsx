import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Monitor, Settings, GitBranch, BarChart3, ShieldCheck, GraduationCap, Wrench, Stethoscope } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import logoUrl from "@/assets/claralign-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claralign Solutions — Aligning Technology with Better Care" },
      { name: "description", content: "Founded by a behavioral health professional, Claralign helps organizations optimize technology, streamline operations, strengthen compliance, and improve care delivery." },
      { property: "og:title", content: "Claralign Solutions — Aligning Technology with Better Care" },
      { property: "og:description", content: "Behavioral health technology, EHR optimization, workflow design, reporting, and compliance consulting." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Monitor, title: "Behavioral Health Technology", desc: "Strategy and selection guidance grounded in how behavioral health teams actually deliver care." },
  { icon: Settings, title: "EHR Optimization", desc: "Tune configuration, build, and integrations so your EHR works with — not against — your clinicians." },
  { icon: GitBranch, title: "Workflow Design", desc: "Reimagine intake, assessment, and care delivery workflows that teams will actually use." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Dashboards and KPIs that executives, clinical leaders, and quality teams can trust and act on." },
  { icon: ShieldCheck, title: "Compliance Consulting", desc: "State, federal, payer, and accreditation requirements translated into audit-ready documentation." },
  { icon: GraduationCap, title: "Staff Training & Adoption", desc: "Role-based training and change management that turn rollouts into lasting adoption." },
  { icon: Wrench, title: "Operational Improvement", desc: "Identify friction, redesign the process, and measure the lift across the organization." },
  { icon: Stethoscope, title: "Clinical Operations Advisory", desc: "Practical guidance from someone who has sat in the chair — intake, documentation, billing, and beyond." },
];

const audiences = [
  "Behavioral Health Executives",
  "Clinical Directors",
  "Program Directors",
  "Operations Leaders",
  "Quality Improvement Teams",
  "EHR Administrators",
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-6 font-medium">
              Behavioral Health · Technology · Operations
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-primary">
              Aligning Technology with <span className="text-secondary">Better Care</span>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Founded by a behavioral health professional, Claralign helps organizations
              optimize technology, streamline operations, strengthen compliance, and
              improve care delivery through practical, experience-driven solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-secondary transition"
              >
                Schedule a Consultation <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="text-sm text-primary hover:text-secondary underline-offset-4 hover:underline">
                Explore our services →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card p-12 flex items-center justify-center shadow-sm">
              <img src={logoUrl} alt="Claralign Solutions logo" className="h-full w-full object-contain" width={600} height={600} />
            </div>
            <p className="mt-4 text-center font-serif italic text-secondary">Trusted Partner. Better Outcomes.</p>
          </div>
        </div>
      </section>

      {/* Belief strip */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-8 text-sm">
          {[
            ["Clinically grounded", "Founded by a behavioral health professional who has lived the workflow — direct care, operations, and administration."],
            ["Technically fluent", "EHR administration, implementation, integrations, analytics, and digital forms — built right."],
            ["Operationally honest", "We measure what matters and only ship what your team will actually use day to day."],
          ].map(([h, p]) => (
            <div key={h}>
              <div className="font-serif text-2xl">{h}</div>
              <p className="mt-2 opacity-80 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">What we do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-2xl">
              Practical consulting across the full behavioral health technology stack.
            </h2>
          </div>
          <Link to="/services" className="text-sm text-primary hover:text-secondary hover:underline">All services →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 hover:bg-muted/60 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Who we serve</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary max-w-3xl">
            A trusted advisor for the leaders shaping behavioral health.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div key={a} className="rounded-xl border border-border bg-card px-5 py-4 text-foreground/90 text-sm">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <p className="font-serif text-3xl md:text-5xl leading-[1.15]">
            "Technology should support care, not complicate it."
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] opacity-70">— Founding principle</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Ready to align your technology and your care?
          </h2>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're selecting an EHR, optimizing an existing system, or tightening
              compliance and reporting — we'd love to hear what you're working on.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-secondary transition"
            >
              Schedule a Consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
