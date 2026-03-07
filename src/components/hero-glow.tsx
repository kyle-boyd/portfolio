"use client";

import type { HeroGlowConfig, HeroGlowShadowLayer } from "@/data/case-studies";

const DEFAULT_SIZE = 120;
const DEFAULT_OPACITY = 0.35;
/** Box-shadow mode: max px shift (static when cursor tracking removed) */
const SHADOW_CURSOR_SHIFT = 32;
const SHADOW_TILT = 0.5;

type HeroGlowProps = {
  /** Glow config for the current project; falls back to themeColor if omitted */
  config: HeroGlowConfig | undefined;
  themeColor: string;
  className?: string;
  children: React.ReactNode;
};

function getGlowConfig(
  config: HeroGlowConfig | undefined,
  themeColor: string
): {
  size: number;
  opacity: number;
  colors: string[];
  boxShadows?: HeroGlowShadowLayer[];
  backgroundGradient?: string;
} {
  const size = config?.size ?? DEFAULT_SIZE;
  const opacity = config?.opacity ?? DEFAULT_OPACITY;
  const colors =
    config?.colors?.length
      ? [...config.colors, "transparent"]
      : [config?.color ?? themeColor, config?.colorEnd ?? "transparent"];
  return {
    size,
    opacity,
    colors,
    boxShadows: config?.boxShadows,
    backgroundGradient: config?.backgroundGradient,
  };
}

function buildBoxShadow(
  layers: HeroGlowShadowLayer[],
  cursorNorm: { x: number; y: number }
): string {
  return layers
    .map((layer) => {
      const baseX = layer.x ?? 0;
      const baseY = layer.y ?? 0;
      // Uniform shift: whole glow moves toward cursor
      const shiftX = cursorNorm.x * SHADOW_CURSOR_SHIFT;
      const shiftY = cursorNorm.y * SHADOW_CURSOR_SHIFT;
      // Tilt: each layer's offset scales with cursor so left/right shadows lean that way
      const x =
        baseX * (1 + cursorNorm.x * SHADOW_TILT) + shiftX;
      const y =
        baseY * (1 + cursorNorm.y * SHADOW_TILT) + shiftY;
      const spread = layer.spread ?? 0;
      return `${x}px ${y}px ${layer.blur}px ${spread}px ${layer.color}`;
    })
    .join(", ");
}

const CENTER = { x: 0, y: 0 };

export function HeroGlow({
  config,
  themeColor,
  className = "",
  children,
}: HeroGlowProps) {
  const { size, opacity, colors, boxShadows, backgroundGradient } =
    getGlowConfig(config, themeColor);
  const gradient = `radial-gradient(circle ${size}px at 50% 50%, ${colors.join(", ")})`;
  const boxShadow = boxShadows?.length
    ? buildBoxShadow(boxShadows, CENTER)
    : undefined;

  return (
    <div className={`relative overflow-visible ${className}`}>
      {/* Gradient glow layer behind card — extends past content so it’s visible */}
      {backgroundGradient ? (
        <div className="relative w-fit">
          <div
            className="pointer-events-none absolute -left-16 -right-8 -top-24 -bottom-12 rounded-2xl"
            style={{
              background: backgroundGradient,
              backgroundPosition: "50% 50%",
              opacity: Math.min(1, opacity * 1.5),
              // Wider band (5%–95%) so the glow is more apparent; soft fade at outer edges
              maskImage: `linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)`,
              maskComposite: "intersect",
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)`,
              WebkitMaskComposite: "source-in",
            }}
            aria-hidden
          />
          <div className="relative">{children}</div>
        </div>
      ) : boxShadows?.length ? (
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-0 rounded-2xl"
            style={{ boxShadow, opacity }}
            aria-hidden
          />
          <div className="relative">{children}</div>
        </div>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -inset-8 transition-opacity duration-500"
            style={{ background: gradient, opacity }}
            aria-hidden
          />
          <div className="relative">{children}</div>
        </>
      )}
    </div>
  );
}
