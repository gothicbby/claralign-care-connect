import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Monitor, Settings, GitBranch, BarChart3, ShieldCheck, GraduationCap, Wrench, Stethoscope, HeartPulse, Building2, Users2, HandHeart, Database, FileText, UserCheck, AlertTriangle, Network, Activity } from "lucide-react";
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

const whoWeHelp = [
  { icon: HeartPulse, title: "Behavioral Health Providers", desc: "Outpatient, residential, and integrated programs working to align clinical care with technology." },
  { icon: HandHeart, title: "Substance Use Treatment Programs", desc: "SUD programs balancing regulatory rigor with day-to-day clinical realities." },
  { icon: Users2, title: "Community Mental Health Centers", desc: "CMHCs juggling complex service lines, payer mixes, and reporting requirements." },
  { icon: Building2, title: "Nonprofit Healthcare Organizations", desc: "Mission-driven organizations stretching limited resources without compromising care quality." },
  { icon: Database, title: "Organizations Implementing or Optimizing EHRs", desc: "Teams selecting, launching, stabilizing, or modernizing an electronic health record." },
];

const challenges = [
  { icon: GitBranch, title: "Inefficient Clinical Workflows", desc: "Steps that don't match how care is actually delivered — slowing teams and frustrating clinicians." },
  { icon: FileText, title: "Documentation Burden", desc: "Forms and notes that consume clinical time without improving care or compliance." },
  { icon: Database, title: "EHR Implementation Challenges", desc: "Stalled rollouts, scope creep, and configuration that doesn't fit the clinical model." },
  { icon: UserCheck, title: "User Adoption & Staff Training", desc: "Systems that launch but never fully land with the people who use them every day." },
  { icon: BarChart3, title: "Reporting & Data Quality Issues", desc: "Dashboards leadership can't trust — and metrics that don't reflect reality." },
  { icon: ShieldCheck, title: "Compliance Documentation Concerns", desc: "Audit findings, payer requests, and accreditation gaps that surface late." },
  { icon: Network, title: "Clinical & Technical Disconnects", desc: "Teams talking past each other — clinical needs lost in translation to IT." },
  { icon: Activity, title: "Operational Inefficiencies", desc: "Scheduling, intake, billing, and utilization processes that quietly drain capacity." },
];

const audiences = [
  "Behavioral Health Executives",
  "Clinical Directors",
  "Program Directors",
  "Operations Leaders",
  "Quality Improvement Teams",
  "EHR Administrators",
];

const strengths = [
  "Founded by a behavioral health professional",
  "Real-world clinical experience",
  "Technology and operations expertise",
  "EHR implementation experience",
  "Workflow optimization",
  "Documentation improvement",
  "Staff training & change management",
  "Reporting, analytics & compliance",
];

function CtaButton({ children = "Schedule a Free 30-Minute Consultation" }: { children?: React.ReactNode }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-secondary transition shadow-sm"
    >
      {children} <ArrowUpRight size={16} />
    </Link>
  );
}

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
              <CtaButton />
              <Link to="/services" className="text-sm text-primary hover:text-secondary underline-offset-4 hover:underline">
                Explore our services →
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-lg leading-relaxed">
              Let's discuss your workflows, technology, and operational goals — and explore practical solutions together.
            </p>
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

      {/* Who We Help */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Who we help</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Built for the organizations on the front line of behavioral health.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Claralign specializes in helping behavioral health organizations improve
            technology, workflows, documentation, and operational efficiency — meeting
            you in the realities of how your teams actually deliver care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeHelp.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Challenges */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Common challenges we solve</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              The friction points that quietly hold organizations back.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {challenges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-7">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 font-serif text-lg text-primary leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
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

      {/* Mid-page CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-muted/60 via-background to-muted/40 p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Let's talk</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
              A 30-minute conversation is usually all it takes to find the next move.
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Let's discuss your workflows, technology, and operational goals — and explore
              practical solutions together. No pressure, no pitch deck.
            </p>
            <div className="mt-6">
              <CtaButton />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Why Claralign */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Why Claralign</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                A rare combination of clinical, technical, and operational fluency.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Claralign was founded by a behavioral health professional with direct care
                experience and deep technology and operations expertise — the same person
                who has sat across from a client and across from an EHR build screen.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {strengths.map((s) => (
                <div key={s} className="rounded-xl border border-border bg-card px-5 py-4 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-6xl px-6 py-24">
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
      </section>

      {/* Success Stories placeholder */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">Success stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Client outcomes, coming soon.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-dashed border-border bg-card/60 p-8 min-h-[220px] flex flex-col justify-between">
                <AlertTriangle size={20} className="text-secondary opacity-60" />
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Case study</p>
                  <p className="mt-2 font-serif text-lg text-primary leading-snug">
                    Case studies and client success stories will be added as projects are completed.
                  </p>
                </div>
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

      {/* Final CTA */}
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
            <div className="mt-6">
              <CtaButton />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
