import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Claralign" },
      { name: "description", content: "Get in touch with Claralign to discuss EHR, workflow, compliance, or operations consulting for your behavioral health organization." },
      { property: "og:title", content: "Contact — Claralign" },
      { property: "og:description", content: "Start a conversation with Claralign." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Contact</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground max-w-3xl">
          Tell us what you're working on.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Share a little context and we'll get back within two business days to set up a
          short discovery call.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          <div className="flex items-start gap-4">
            <Mail size={18} className="text-primary mt-1" />
            <div>
              <div className="font-serif text-xl text-foreground">Email</div>
              <p className="text-muted-foreground">hello@claralign.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={18} className="text-primary mt-1" />
            <div>
              <div className="font-serif text-xl text-foreground">Response time</div>
              <p className="text-muted-foreground">Within two business days.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={18} className="text-primary mt-1" />
            <div>
              <div className="font-serif text-xl text-foreground">Location</div>
              <p className="text-muted-foreground">Remote engagements nationwide. On-site by arrangement.</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <p className="font-serif text-2xl text-foreground leading-snug">
              "Aligning Technology with Better Care."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Our north star, on every engagement.</p>
          </div>
        </div>

        <div className="md:col-span-7">
          {sent ? (
            <div className="rounded-2xl border border-border bg-card p-10">
              <h2 className="font-serif text-3xl text-foreground">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">
                Your message is on its way. We'll be in touch shortly to schedule a call.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Organization" name="org" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Role" name="role" placeholder="e.g. Director of Operations, EHR Administrator" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                  placeholder="Tell us about your EHR, workflow, compliance, or reporting challenge."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
