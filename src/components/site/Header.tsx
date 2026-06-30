import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/claralign-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;


export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoUrl} alt="Claralign Solutions" className="h-10 w-auto" width={80} height={80} />
          <span className="font-serif text-xl tracking-tight text-primary hidden sm:inline">
            Claralign <span className="text-muted-foreground">Solutions</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:bg-secondary transition"
          >
            Schedule a Consultation
          </Link>
        </nav>
        <button
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
