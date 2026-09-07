import { TopoBackground } from "./TopoBackground";
import { Reveal } from "./Reveal";
import { brand } from "@/content/site";

const keywords = [
  "GIS",
  "Remote Sensing",
  "Data Visualization",
  "Scientific Figures",
  "Web Maps",
  "Research Support",
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Layered scientific background: gradient wash + coordinate grid + contours */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(75%_60%_at_50%_35%,black,transparent)]" aria-hidden="true" />
      <TopoBackground className="-z-10" opacity={0.35} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="label-mono inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {brand.philosophy}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn Complex Research Into <span className="text-gradient">Clear Visual Stories.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {brand.name} helps researchers transform geospatial data, scientific information and complex research
              outputs into accurate, beautiful and publication-ready visuals.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
              {keywords.map((k, i) => (
                <li key={k} className="flex items-center gap-3">
                  {i > 0 && <span className="text-primary/50">•</span>}
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_-8px_var(--color-primary)] active:translate-y-px"
              >
                Start a Project
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Explore My Work
                <span className="ml-2 transition-transform group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Abstract terrain / DEM visual, built from SVG only */}
        <Reveal delay={200} className="relative">
          <TerrainVisual />
        </Reveal>
      </div>
    </section>
  );
}

function TerrainVisual() {
  const rows = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="card-tech glass relative aspect-square w-full overflow-hidden rounded-xl sm:aspect-[5/4]">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <svg viewBox="0 0 400 340" className="relative h-full w-full" role="img" aria-label="Abstract digital elevation surface with contour lines, a coordinate grid and glowing survey points">
        <defs>
          <linearGradient id="mesh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="45%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <rect width="400" height="340" fill="url(#glow)" />

        {/* Wireframe elevation surface */}
        <g stroke="url(#mesh)" fill="none" strokeWidth="0.8">
          {rows.map((r) => {
            const y = 120 + r * 12;
            const amp = 26 - r * 1.1;
            const pts = Array.from({ length: 25 }, (_, c) => {
              const x = 10 + c * 16;
              const h = Math.sin((c + r * 0.7) * 0.55) * amp + Math.cos(c * 0.23 - r * 0.4) * (amp * 0.5);
              return `${x},${(y - h).toFixed(1)}`;
            }).join(" ");
            return <polyline key={r} points={pts} opacity={0.18 + r * 0.045} />;
          })}
        </g>

        {/* Cross-section marker line */}
        <line x1="40" y1="300" x2="360" y2="268" stroke="var(--color-terra)" strokeWidth="1" strokeDasharray="6 5" opacity="0.7" />
        <text x="40" y="316" fill="var(--color-terra)" fontSize="9" fontFamily="monospace" opacity="0.85">
          A—A′ SECTION
        </text>
        <text x="292" y="26" fill="var(--color-primary)" fontSize="9" fontFamily="monospace" opacity="0.7">
          EPSG:4326
        </text>
        <text x="18" y="26" fill="var(--color-primary)" fontSize="9" fontFamily="monospace" opacity="0.7">
          DEM · 30 m
        </text>

        {/* Glowing survey points */}
        <g fill="var(--color-accent)">
          {[
            [96, 176],
            [188, 148],
            [268, 196],
            [330, 160],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="7" fill="var(--color-accent)" opacity="0.12" />
              <circle cx={cx} cy={cy} r="2.6" style={{ animation: `pulse-dot ${2.6 + i * 0.7}s ease-in-out infinite` }} />
            </g>
          ))}
        </g>
      </svg>

      {/* Sweeping scan line */}
      <div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/8 to-transparent"
        style={{ animation: "sweep 7s linear infinite" }}
        aria-hidden="true"
      />
    </div>
  );
}
