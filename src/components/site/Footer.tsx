import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-serif text-xl text-foreground">Claralign</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Aligning technology with better care for behavioral health organizations.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</div>
          <p className="text-foreground/80">hello@claralign.com</p>
          <p className="text-muted-foreground mt-2">By appointment, remote &amp; on-site</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Claralign Consulting. All rights reserved.</p>
          <p className="font-serif italic">Aligning Technology with Better Care.</p>
        </div>
      </div>
    </footer>
  );
}
