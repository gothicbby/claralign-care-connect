import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Claralign" },
      { name: "description", content: "Claralign is founded by a behavioral health professional with deep clinical and technical expertise across EHR, compliance, and operations." },
      { property: "og:title", content: "About — Claralign" },
      { property: "og:description", content: "The story and principles behind Claralign." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">About</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground">
            Clinical experience meets technical fluency.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Claralign was founded by a behavioral health professional with extensive
            experience in clinical services, EHR implementation, workflow design,
            regulatory compliance, reporting and analytics, digital forms, and
            operational improvement.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            That combination is rare — and it shapes everything we do. We've sat with
            clients, written the notes, configured the systems, run the reports, and
            answered to the auditors. We bring that lived perspective to every
            engagement.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 bg-muted">
            <img src={aboutImg} alt="Founder illustration" width={1200} height={1400} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            What we believe.
          </h2>
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Clinicians come first.</h3>
              <p>Every workflow, form, and report should reduce — not add to — the cognitive load on the people delivering care.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Compliance is a byproduct of clarity.</h3>
              <p>When documentation reflects the actual work, audits get easier and care quality improves at the same time.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Data should be honest.</h3>
              <p>If a dashboard can't be trusted, it won't be used. We build reporting that holds up to scrutiny.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Who we work with", "Behavioral health executives, clinical leaders, operations managers, quality teams, and EHR administrators."],
            ["How we engage", "Short discovery, scoped projects, and longer-term partnerships — fully remote or on-site as needed."],
            ["Where we focus", "Outpatient, residential, community-based, and integrated behavioral health programs across the U.S."],
          ].map(([h, p]) => (
            <div key={h}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{h}</div>
              <p className="text-foreground/85 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
          >
            Work with Claralign →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
