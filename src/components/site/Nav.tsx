import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

/** Minimal logo mark: a globe meridian + contour + data node. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("h-8 w-8", className)}>
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="16" cy="16" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <path d="M3.6 12.5h24.8M3.6 19.5h24.8" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500 sm:px-5",
          scrolled
            ? "glass border-border/80 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.9)]"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <span className="text-primary transition-transform duration-500 group-hover:rotate-12">
            <LogoMark />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-mono text-[0.72rem] font-semibold tracking-[0.22em] uppercase sm:text-xs">
              {brand.name}
            </span>
            <span className="hidden text-[0.62rem] tracking-wide text-muted-foreground sm:block">
              Geospatial · Scientific Visualization
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_24px_-6px_var(--color-primary)] sm:inline-flex"
          >
            Start a Project →
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "glass mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg transition-all duration-400 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col p-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary"
            >
              Start a Project →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
