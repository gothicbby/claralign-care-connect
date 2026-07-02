import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Claralign Solutions" },
      { name: "description", content: "Practical articles and resources on behavioral health technology, EHR implementation, workflow design, documentation, reporting, and operational improvement." },
      { property: "og:title", content: "Insights — Claralign Solutions" },
      { property: "og:description", content: "Practical articles and resources from Claralign Solutions for behavioral health leaders." },
    ],
  }),
  component: Insights,
});

const articles = [
  {
    category: "EHR Implementation",
    title: "Preparing Your Organization for an EHR Implementation",
    summary: "What to line up in the months before kickoff so go-live isn't the hard part — governance, data, workflows, and staff readiness.",
  },
  {
    category: "Documentation",
    title: "Reducing Documentation Burden Without Sacrificing Compliance",
    summary: "Where clinical documentation actually breaks down, and which template and workflow changes give clinicians time back.",
  },
  {
    category: "Workflow Design",
    title: "Improving Behavioral Health Workflows From Intake to Discharge",
    summary: "Practical workflow patterns for admissions, clinical, and billing teams that hold up across programs and shifts.",
  },
  {
    category: "Reporting & Analytics",
    title: "Common Reporting Mistakes in Behavioral Health Organizations",
    summary: "Why dashboards lose leadership trust — and how to design reports leaders actually use to make decisions.",
  },
  {
    category: "Staff Adoption",
    title: "Staff Adoption Strategies for New Technology Rollouts",
    summary: "Change management approaches that turn a launch into lasting adoption across roles and programs.",
  },
  {
    category: "Strategy",
    title: "Technology Best Practices for Behavioral Health Organizations",
    summary: "Principles for selecting, configuring, and maintaining a healthy behavioral health technology stack.",
  },
];

function Insights() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-medium">Insights</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary max-w-3xl">
          Practical articles for behavioral health leaders.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A growing library of articles, guides, and field notes on behavioral health
          technology, EHR implementation, workflows, documentation, reporting, and operations.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="group rounded-2xl border border-border bg-card p-8 flex flex-col hover:border-primary/40 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 text-primary mb-5">
                <BookOpen size={18} />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-secondary mb-2 font-medium">{a.category}</p>
              <h2 className="font-serif text-xl text-primary leading-snug">{a.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{a.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-primary/80">
                Read more <ArrowUpRight size={14} />
                <span className="ml-2 normal-case tracking-normal text-muted-foreground">Coming soon</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl">Have a topic you'd like us to cover?</h2>
            <p className="mt-3 opacity-85 leading-relaxed">
              Let's discuss your workflows, technology, and operational goals — and explore practical solutions together.
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
