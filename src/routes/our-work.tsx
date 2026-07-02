import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight, Briefcase } from "lucide-react";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — Claralign Solutions" },
      { name: "description", content: "Anonymized case studies from Claralign Solutions: behavioral health intake modernization, EHR workflow optimization, documentation compliance, and staff training." },
      { property: "og:title", content: "Our Work — Claralign Solutions" },
      { property: "og:description", content: "Anonymized behavioral health consulting case studies from Claralign Solutions." },
    ],
  }),
  component: OurWork,
});

const cases = [
  {
    title: "Behavioral Health Intake Modernization",
    expertise: "Workflow Design · Digital Forms · Operational Improvement",
    challenge:
      "A multi-site behavioral health organization relied on paper intake packets and manual data entry, creating long wait times, duplicate documentation, and inconsistent client experiences across programs.",
    approach:
      "Mapped the end-to-end intake journey with clinical, admissions, and billing stakeholders. Identified redundant steps, compliance gaps, and opportunities to consolidate forms into a single digital workflow within the existing EHR.",
    solution:
      "Redesigned intake forms, built structured digital assessments, and rolled out a standardized intake workflow with role-based tasks, automated routing, and clear handoffs between admissions and clinical teams.",
    outcome:
      "Reduced intake completion time significantly, eliminated duplicate data entry, and improved first-appointment readiness — with a consistent experience across every program and site.",
  },
  {
    title: "EHR Workflow Optimization",
    expertise: "EHR Optimization · Clinical Workflows · Adoption",
    challenge:
      "Clinicians reported excessive time in the EHR, workarounds outside the system, and inconsistent documentation practices that made reporting unreliable and audits stressful.",
    approach:
      "Conducted workflow observations across programs, reviewed configuration and templates, and worked directly with clinical leaders to align system behavior with real day-to-day service delivery.",
    solution:
      "Streamlined note templates, refined required fields, reorganized clinician dashboards, and retrained supervisors on best-practice workflows — with clear documentation standards tied to compliance expectations.",
    outcome:
      "Meaningful reduction in documentation time per encounter, higher note-completion rates within policy timeframes, and cleaner data feeding downstream reporting.",
  },
  {
    title: "Documentation & Compliance Support",
    expertise: "Regulatory Compliance · Documentation · Quality Improvement",
    challenge:
      "An organization preparing for a state audit had inconsistent documentation practices, missing required elements, and unclear ownership between clinical, QI, and compliance teams.",
    approach:
      "Performed a documentation gap analysis against regulatory and payer requirements, benchmarked internal policies, and partnered with QI to design a sustainable review-and-remediation process.",
    solution:
      "Updated documentation standards, refreshed EHR templates to prompt required elements, deployed a chart-review workflow, and trained supervisors on ongoing oversight.",
    outcome:
      "Closed identified gaps ahead of the audit, established a repeatable QI review cadence, and gave leadership real-time visibility into documentation health.",
  },
  {
    title: "Staff Training & System Adoption",
    expertise: "Staff Training · Change Management · EHR Implementation",
    challenge:
      "Following a major EHR rollout, adoption stalled: staff reverted to old habits, super-users burned out, and leadership lacked a clear picture of where training was needed.",
    approach:
      "Assessed adoption by role and program, interviewed super-users and frontline staff, and identified the specific workflows where confidence and consistency were lowest.",
    solution:
      "Built a role-based training curriculum, refreshed job aids, coached supervisors on reinforcement, and set up a lightweight adoption-metrics dashboard for leadership.",
    outcome:
      "Sustained lift in correct workflow usage, fewer support tickets, and renewed clinician confidence — with leaders finally able to see adoption trends instead of guessing.",
  },
];

function OurWork() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-medium">Our Work</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary max-w-3xl">
          Anonymized case studies from the field.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A look at how Claralign partners with behavioral health organizations to align
          technology, documentation, and operations — with client details anonymized to
          protect confidentiality.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-8 flex flex-col hover:border-primary/40 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 text-primary mb-5">
                <Briefcase size={18} />
              </div>
              <h2 className="font-serif text-2xl text-primary leading-snug">{c.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-secondary font-medium">{c.expertise}</p>

              <dl className="mt-6 space-y-5 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Challenge</dt>
                  <dd className="text-foreground/85">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Approach</dt>
                  <dd className="text-foreground/85">{c.approach}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Solution</dt>
                  <dd className="text-foreground/85">{c.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Outcome</dt>
                  <dd className="text-foreground/85">{c.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl">Facing a similar challenge?</h2>
            <p className="mt-3 opacity-85 leading-relaxed">
              Let's talk through your workflows, technology, and goals — and explore practical, experience-driven solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm hover:opacity-90 transition shrink-0"
          >
            Schedule a Free 30-Minute Consultation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
