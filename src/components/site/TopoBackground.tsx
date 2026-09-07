import { cn } from "@/lib/utils";

/**
 * Animated topographic contour motif drawn purely with SVG.
 * Used as a subtle background behind hero, section headings and the final CTA.
 */
export function TopoBackground({ className, opacity = 0.5 }: { className?: string; opacity?: number }) {
  const rings = Array.from({ length: 11 }, (_, i) => i);
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="animate-contour h-full w-full"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="topo-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.55" />
            <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.32" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#topo-stroke)" strokeWidth="1">
          {rings.map((i) => {
            const k = 1 + i * 0.16;
            return (
              <path
                key={i}
                d={`M ${120 - i * 16} 330
                   C ${210 + i * 6} ${240 - i * 14}, ${300 - i * 8} ${180 - i * 10}, ${400} ${190 - i * 12}
                   C ${510 + i * 9} ${200 - i * 13}, ${590 + i * 12} ${268 - i * 9}, ${690 + i * 16} ${318 - i * 6}`}
                style={{ transform: `scale(${k}) translate(${-i * 6}px, ${i * 4}px)`, transformOrigin: "400px 260px" }}
                opacity={0.9 - i * 0.06}
              />
            );
          })}
          {rings.slice(0, 7).map((i) => (
            <ellipse
              key={`e-${i}`}
              cx="620"
              cy="120"
              rx={30 + i * 26}
              ry={16 + i * 13}
              opacity={0.5 - i * 0.05}
            />
          ))}
        </g>
        <g fill="var(--color-primary)">
          {[
            [180, 300],
            [340, 200],
            [520, 250],
            [640, 150],
            [420, 360],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" style={{ animation: `pulse-dot ${3 + i}s ease-in-out infinite` }} />
          ))}
        </g>
      </svg>
    </div>
  );
}
