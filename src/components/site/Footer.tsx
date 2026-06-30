import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/claralign-logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Claralign Solutions" className="h-10 w-auto" width={80} height={80} />
            <span className="font-serif text-xl text-primary">
              Claralign <span className="text-muted-foreground">Solutions</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Aligning technology with better care for behavioral health organizations.
          </p>
          <p className="mt-4 font-serif text-base text-primary italic">
            Trusted Partner. Better Outcomes.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/services" className="text-foreground/80 hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About</Link></li>
            <li><Link to="/resources" className="text-foreground/80 hover:text-primary">Resources</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</div>
          <p className="text-foreground/90">info@claralign.com</p>
          <p className="text-muted-foreground mt-2">By appointment, remote &amp; on-site</p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs hover:bg-secondary transition"
          >
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>

      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Claralign Solutions. All rights reserved.</p>
          <p className="font-serif italic">Aligning Technology with Better Care.</p>
        </div>
      </div>
    </footer>
  );
}
