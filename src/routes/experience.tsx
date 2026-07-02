import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight, Briefcase, Info } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Claralign Solutions" },
      { name: "description", content: "Professional experience bridging clinical operations and technology in behavioral health: intake modernization, EHR optimization, documentation improvement, and staff training." },
      { property: "og:title", content: "Experience — Claralign Solutions" },
      { property: "og:description", content: "Professional experience in behavioral health technology, operations, and clinical workflows from Claralign Solutions." },
    ],
  }),
  component: Experience,
});

const examples = [
  {
    title: "Representative Experience: Behavioral Health Intake Modernization",
    expertise: "Workflow Design · Digital Forms · Operational Improvement",
    challenge:
      "Many behavioral health organizations still rely on paper intake packets and manual data entry, creating long wait times, duplicate documentation, and inconsistent client experiences across programs and sites.",
    approach:
      "Working with clinical, admissions, and billing stakeholders to map the end-to-end intake journey, identify redundant steps, close compliance gaps, and consolidate forms into a single digital workflow within the existing EHR.",
    solution:
      "Redesign intake forms, build structured digital assessments, and implement standardized intake workflows with role-based tasks, automated routing, and clear handoffs between admissions and clinical teams.",
    outcome:
      "Organizations can expect reduced intake completion times, elimination of duplicate data entry, and improved first-appointment readiness — with a consistent experience across every program and site.",
  },
  {
    title: "Representative Experience: EHR Workflow Optimization",
    expertise: "EHR Optimization · Clinical Workflows · Adoption",
    challenge:
      "Clinicians across behavioral health organizations often report excessive time in the EHR, workarounds outside the system, and inconsistent documentation practices that make reporting unreliable and audits stressful.",
    approach:
      "Conducting workflow observations across programs, reviewing configuration and templates, and working directly with clinical leaders to align system behavior with real day-to-day service delivery.",
    solution:
      "Streamlining note templates, refining required fields, reorganizing clinician dashboards, and retraining supervisors on best-practice workflows — with clear documentation standards tied to compliance expectations.",
    outcome:
      "Meaningful reduction in documentation time per encounter, higher note-completion rates within policy timeframes, and cleaner data feeding downstream reporting.",
  },
  {
    title: "Representative Experience: Documentation & Compliance Improvement",
    expertise: "Regulatory Compliance · Documentation · Quality Improvement",
    challenge:
      "Organizations preparing for audits often discover inconsistent documentation practices, missing required elements, and unclear ownership between clinical, quality improvement, and compliance teams.",
    approach:
      "Performing documentation gap analyses against regulatory and payer requirements, benchmarking internal policies, and partnering with QI leaders to design sustainable review-and-remediation processes.",
    solution:
      "Updating documentation standards, refreshing EHR templates to prompt required elements, deploying chart-review workflows, and training supervisors on ongoing oversight.",
    outcome:
      "Closing identified gaps ahead of audits, establishing repeatable QI review cadences, and giving leadership real-time visibility into documentation health.",
  },
  {
    title: "Representative Experience: Staff Training & Change Management",
    expertise: "Staff Training · Change Management · EHR Implementation",
    challenge:
      "Following major EHR rollouts, adoption frequently stalls: staff revert to old habits, super-users burn out, and leadership lacks a clear picture of where training is most needed.",
    approach:
      "Assessing adoption by role and program, interviewing super-users and frontline staff, and identifying the specific workflows where confidence and consistency are lowest.",
    solution:
      "Building role-based training curricula, refreshing job aids, coaching supervisors on reinforcement, and setting up lightweight adoption-metrics dashboards for leadership.",
    outcome:
      "Sustained lift in correct workflow usage, fewer support tickets, and renewed clinician confidence — with leaders finally able to see adoption trends instead of guessing.",
  },
];

const expertiseAreas = [
  "Behavioral Health",
  "Clinical Operations",
  "EHR Implementation",
  "Workflow Optimization",
  "Documentation Improvement",
  "Regulatory Compliance",
  "Staff Training",
  "Technology Adoption",
  "Project Leadership",
];

function Experience() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-medium">Experience</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary max-w-3xl">
          Experience That Bridges Clinical Operations and Technology
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          My consulting approach is built on years of experience working at the intersection of
          behavioral health, technology, compliance, clinical operations, and workflow improvement.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The examples below represent the types of challenges I have experience solving throughout
          my professional career. They are illustrative examples designed to demonstrate my approach,
          problem-solving methodology, and areas of expertise. They do not describe work performed for
          any specific client, employer, or organization, and all details have been intentionally
          generalized to protect confidentiality.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4 font-medium">Professional foundation</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-foreground/85">
            {expertiseAreas.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-8 flex flex-col hover:border-primary/40 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 text-primary mb-5">
                <Briefcase size={18} />
              </div>
              <h2 className="font-serif text-2xl text-primary leading-snug">{c.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-secondary font-medium">{c.expertise}</p>

              <dl className="mt-6 space-y-5 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Common Industry Challenge</dt>
                  <dd className="text-foreground/85">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Approach</dt>
                  <dd className="text-foreground/85">{c.approach}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Specialized Solutions</dt>
                  <dd className="text-foreground/85">{c.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Expected Outcomes</dt>
                  <dd className="text-foreground/85">{c.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 text-primary shrink-0 mt-0.5">
              <Info size={18} />
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary">Professional Experience Notice</h2>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Claralign is an independent consulting practice founded on years of professional experience
                supporting behavioral health organizations through technology, workflow optimization,
                documentation improvement, and operational excellence.
              </p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                The examples presented on this page are representative illustrations of the types of work
                performed throughout my professional career. They have been intentionally generalized and
                anonymized to protect confidentiality and are not intended to describe services performed
                under the Claralign name for any specific client or employer.
              </p>
            </div>
          </div>
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
