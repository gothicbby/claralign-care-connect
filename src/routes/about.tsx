import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import logoUrl from "@/assets/claralign-logo.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Claralign Solutions" },
      { name: "description", content: "Claralign was founded by a behavioral health professional with direct care, EHR administration, operations, training, reporting, and compliance experience." },
      { property: "og:title", content: "About — Claralign Solutions" },
      { property: "og:description", content: "The story and principles behind Claralign Solutions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-medium">About</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary">
            Technology should support care, not complicate it.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Claralign was founded on the belief that technology should support care, not
            complicate it. Drawing on experience across clinical services, operations, EHR
            management, staff training, reporting, and regulatory compliance, Claralign
            helps behavioral health organizations bridge the gap between technology and
            day-to-day service delivery.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our approach is practical, collaborative, and focused on creating sustainable
            improvements that benefit staff, leadership, and the individuals they serve.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card p-10 flex items-center justify-center shadow-sm">
            <img src={logoUrl} alt="Claralign Solutions" width={600} height={600} loading="lazy" className="h-full w-full object-contain" />
          </div>
          <p className="mt-4 text-center font-serif italic text-secondary">Trusted Partner. Better Outcomes.</p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">A different starting point</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Founded by a behavioral health professional.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Claralign doesn't approach behavioral health challenges solely from a
              technology perspective. Our founder's experience spans direct care, clinical
              operations, EHR administration, implementation, reporting, training,
              workflow design, and compliance — and that perspective shapes every
              engagement.
            </p>
          </div>
          <div className="space-y-8 text-foreground/85 leading-relaxed">
            <div>
              <h3 className="font-serif text-xl text-primary mb-2">Clinicians come first.</h3>
              <p>Every workflow, form, and report should reduce — not add to — the cognitive load on the people delivering care.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary mb-2">Compliance is a byproduct of clarity.</h3>
              <p>When documentation reflects the actual work, audits get easier and care quality improves at the same time.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary mb-2">Data should be honest.</h3>
              <p>If a dashboard can't be trusted, it won't be used. We build reporting that holds up to scrutiny.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Who we work with", "Behavioral health executives, clinical and program directors, operations leaders, quality teams, and EHR administrators."],
            ["How we engage", "Short discovery, scoped projects, and longer-term partnerships — fully remote or on-site as needed."],
            ["Where we focus", "Outpatient, residential, community-based, and integrated behavioral health programs across the U.S."],
          ].map(([h, p]) => (
            <div key={h}>
              <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3 font-medium">{h}</div>
              <p className="text-foreground/85 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-secondary transition"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
