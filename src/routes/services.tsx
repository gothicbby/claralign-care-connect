import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Claralign" },
      { name: "description", content: "EHR implementation, workflow design, regulatory compliance, analytics, digital forms, and operational improvement for behavioral health." },
      { property: "og:title", content: "Services — Claralign" },
      { property: "og:description", content: "Consulting services across behavioral health technology and operations." },
    ],
  }),
  component: Services,
});

const offerings = [
  {
    kicker: "01",
    title: "Behavioral Health Technology",
    body: "Strategy, vendor evaluation, and selection guidance grounded in how behavioral health teams actually deliver care — not generic healthcare IT advice.",
    bullets: ["Tech strategy & roadmap", "Vendor evaluation & RFPs", "Selection scorecards"],
  },
  {
    kicker: "02",
    title: "EHR Optimization",
    body: "Tune configuration, build, integrations, and workflows so your existing EHR investment works with — not against — your clinicians and operations teams.",
    bullets: ["Configuration & build", "Integration design", "Go-live & stabilization"],
  },
  {
    kicker: "03",
    title: "Workflow Design",
    body: "Map current state, redesign for the clinician, document for compliance, and operationalize so the new workflow actually sticks across teams and shifts.",
    bullets: ["Intake to discharge mapping", "Role-based workflow design", "Adoption planning"],
  },
  {
    kicker: "04",
    title: "Reporting & Analytics",
    body: "From operational dashboards to outcomes reporting, we build the views that executives, clinical leaders, and quality teams can act on.",
    bullets: ["KPI design", "Executive dashboards", "Outcomes & quality reporting"],
  },
  {
    kicker: "05",
    title: "Compliance Consulting",
    body: "Translate state, federal, payer, and accreditation requirements into the documentation, forms, and audit trails your teams need on the ground.",
    bullets: ["State & federal requirements", "Payer & accreditation alignment", "Audit-ready documentation"],
  },
  {
    kicker: "06",
    title: "Staff Training & Adoption",
    body: "Role-based training, super-user programs, and change management that turn rollouts into durable adoption — not one-time launches.",
    bullets: ["Role-based curricula", "Super-user programs", "Change management"],
  },
  {
    kicker: "07",
    title: "Operational Improvement",
    body: "Find the friction, redesign the process, measure the lift — across scheduling, intake, billing, utilization, and clinical operations.",
    bullets: ["Process diagnostics", "Redesign & rollout", "Outcome measurement"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Services</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground max-w-3xl">
          Consulting that meets behavioral health where it actually lives.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Each engagement is shaped around your organization — its clinical model, its
          tech stack, and the regulatory environment you operate in.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="divide-y divide-border border-y border-border">
          {offerings.map((o) => (
            <article key={o.kicker} className="grid md:grid-cols-12 gap-6 py-12 group">
              <div className="md:col-span-2 text-sm text-muted-foreground font-mono">{o.kicker}</div>
              <div className="md:col-span-6">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                  {o.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{o.body}</p>
              </div>
              <ul className="md:col-span-4 space-y-2 text-sm text-foreground/80 md:pt-2">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
            Not sure where to start? A short call usually clarifies the next move.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm hover:opacity-90 transition"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
