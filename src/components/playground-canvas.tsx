"use client";

import { assetUrl } from "@/lib/base-path";
import { useCallback, useEffect, useRef, useState } from "react";
import { PLAYGROUND_PROJECTS } from "@/data/playground";
import { SiteHeader } from "@/components/site-header";

const FILTERS = ["All", "AI", "Tool", "Game", "Fun"] as const;
type Filter = (typeof FILTERS)[number];

const CARD_W = 252;
const CARD_GAP = 20;

// [xPct, yPct, rotateDeg] — percentages of viewport width/height, clustered near center
const SCATTER: [number, number, number][] = [
  [14, 32, -6],
  [57, 12, 4],
  [58, 47, -3],
  [17, 57, 8],
  [39, 57, -5],
];

type Pos = { x: number; y: number; rotate: number };
type Project = (typeof PLAYGROUND_PROJECTS)[number];

const SHADOW_DEFAULT =
  "0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.05)";

function CardFace({ project }: { project: Project }) {
  const hexToRgb = (hex: string) => {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r
      ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
      : { r: 255, g: 161, b: 0 };
  };
  const rgb = hexToRgb(project.themeColor ?? "#ffa100");
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col gap-3 rounded-[16px] bg-surface-bg ring-1 ring-neutral-200/80 transition-[box-shadow] duration-300"
      style={{ boxShadow: SHADOW_DEFAULT }}
      onMouseEnter={() => {
        if (cardRef.current)
          cardRef.current.style.boxShadow = `${SHADOW_DEFAULT}, 0 0 18px rgba(${rgb.r},${rgb.g},${rgb.b},0.4), 0 0 36px rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`;
      }}
      onMouseLeave={() => {
        if (cardRef.current) cardRef.current.style.boxShadow = SHADOW_DEFAULT;
      }}
    >
      {/* Image */}
      <div className="relative rounded-[12px] bg-neutral-100 p-1.5 border border-neutral-200">
        <div className="relative aspect-[2880/1808] overflow-hidden rounded-[8px]">
          <img
            src={assetUrl(project.image ?? "/case-study-image.png")}
            alt={project.title}
            className="size-full object-cover transition-transform duration-300 border border-neutral-200 rounded-[8px] group-hover:scale-[1.02]"
            draggable={false}
          />
        </div>
      </div>

      {/* Text */}
      <div className="space-y-1 px-3 text-text-primary">
        <h3
          className="text-[18px] font-semibold leading-tight"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs text-text-secondary line-clamp-2 leading-snug">
          {project.description}
        </p>
      </div>

      {/* Visit button */}
      {project.href && (
        <div className="px-3 pb-3">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-text-secondary ring-1 ring-neutral-200 hover:bg-neutral-200 transition-colors"
            onPointerDown={(e) => e.stopPropagation()}
          >
            Visit
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden
            >
              <path
                d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

export function PlaygroundCanvas() {
  const [positions, setPositions] = useState<Pos[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [draggingCard, setDraggingCard] = useState<number | null>(null);

  const titleBlockRef = useRef<HTMLDivElement>(null);
  const initialScatter = useRef<Pos[]>([]);
  const positionsRef = useRef<Pos[]>([]);
  const draggingIdx = useRef<number | null>(null);
  const dragStart = useRef({ mx: 0, my: 0, cx: 0, cy: 0 });
  const hasDragged = useRef(false);

  useEffect(() => {
    positionsRef.current = positions;
  }, [positions]);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scatter = SCATTER.map(([xPct, yPct, rotate]) => ({
      x: (xPct / 100) * w,
      y: (yPct / 100) * h,
      rotate,
    }));
    initialScatter.current = scatter;
    setPositions(scatter);
  }, []);

  const handleFilter = useCallback((filter: Filter) => {
    setActiveFilter(filter);

    if (filter === "All") {
      setPositions(
        initialScatter.current.map((p, i) => ({ ...p, rotate: SCATTER[i][2] }))
      );
      return;
    }

    setPositions(() => {
      if (!titleBlockRef.current) return positionsRef.current;
      const rect = titleBlockRef.current.getBoundingClientRect();
      const startY = rect.bottom + 40;

      const matching = PLAYGROUND_PROJECTS.filter((p) => p.scope === filter);
      const numCols = Math.min(matching.length, 3);
      const totalW = numCols * CARD_W + (numCols - 1) * CARD_GAP;
      const startX = (window.innerWidth - totalW) / 2;

      const next = [...positionsRef.current];
      let matchIdx = 0;
      PLAYGROUND_PROJECTS.forEach((project, i) => {
        if (project.scope === filter) {
          const col = matchIdx % numCols;
          const row = Math.floor(matchIdx / numCols);
          next[i] = {
            x: startX + col * (CARD_W + CARD_GAP),
            y: startY + row * (240 + CARD_GAP),
            rotate: 0,
          };
          matchIdx++;
        } else {
          // Return non-matching cards to their original scatter position
          next[i] = { ...initialScatter.current[i] };
        }
      });
      return next;
    });
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, index: number) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      draggingIdx.current = index;
      hasDragged.current = false;
      setDraggingCard(index);
      dragStart.current = {
        mx: e.clientX,
        my: e.clientY,
        cx: positionsRef.current[index]?.x ?? 0,
        cy: positionsRef.current[index]?.y ?? 0,
      };
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent, index: number) => {
      if (draggingIdx.current !== index) return;
      const dx = e.clientX - dragStart.current.mx;
      const dy = e.clientY - dragStart.current.my;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasDragged.current = true;
      if (!hasDragged.current) return;

      setPositions((prev) => {
        const next = [...prev];
        next[index] = {
          ...next[index],
          x: dragStart.current.cx + dx,
          y: dragStart.current.cy + dy,
        };
        return next;
      });
    },
    []
  );

  const handlePointerUp = useCallback(
    (_e: React.PointerEvent, _index: number, project: Project) => {
      const wasDrag = hasDragged.current;
      draggingIdx.current = null;
      hasDragged.current = false;
      setDraggingCard(null);

      if (!wasDrag && project.href) {
        window.open(project.href, "_blank", "noopener,noreferrer");
      }
    },
    []
  );

  const dotBg = {
    backgroundColor: "var(--surface-bg)",
    backgroundImage: "radial-gradient(circle, var(--color-neutral-200, #e2e2e2) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  };

  const filterChips = (
    <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
            activeFilter === filter
              ? "bg-text-primary text-white shadow-sm"
              : "bg-surface-bg text-text-secondary ring-1 ring-neutral-300 hover:ring-neutral-400 hover:text-text-hover"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* ── Mobile layout: scrollable grid (< lg) ── */}
      <div className="lg:hidden min-h-screen select-none" style={dotBg}>
        <SiteHeader />
        <div className="px-6 pt-24 pb-12 sm:px-8 sm:pt-28">
          <div className="text-center mb-8">
            <h1
              className="text-[24px] leading-tight text-text-primary sm:text-[28px]"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Exploration & Side Projects
            </h1>
            <p className="mt-2 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-text-muted">
              Snapshots, explorations, and side-projects.
            </p>
            {filterChips}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {PLAYGROUND_PROJECTS.map((project) => {
              const isFiltered = activeFilter !== "All" && project.scope !== activeFilter;
              return (
                <div
                  key={project.title}
                  className="transition-opacity duration-300"
                  style={{ opacity: isFiltered ? 0.2 : 1 }}
                >
                  <CardFace project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Desktop layout: scatter canvas (lg+) ── */}
      <div
        className="hidden lg:block fixed inset-0 overflow-hidden select-none"
        style={dotBg}
      >
        <SiteHeader />

        {/* Title + filters block */}
        <div
          ref={titleBlockRef}
          className="absolute left-1/2 -translate-x-1/2 z-30 text-center"
          style={{ top: 108 }}
        >
          <h1
            className="text-[34px] text-text-primary leading-tight"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Exploration & Side Projects
          </h1>
          <p className="mt-2 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-text-muted">
            Snapshots, explorations, and side-projects.
          </p>
          {filterChips}
        </div>

        {/* Draggable cards */}
        {positions.length > 0 &&
          PLAYGROUND_PROJECTS.map((project, i) => {
            const isFiltered =
              activeFilter !== "All" && project.scope !== activeFilter;
            const isDragging = draggingCard === i;

            return (
              <div
                key={project.title}
                style={{
                  position: "absolute",
                  left: positions[i].x,
                  top: positions[i].y,
                  width: CARD_W,
                  transform: `rotate(${positions[i].rotate}deg)`,
                  opacity: isFiltered ? 0.18 : 1,
                  transition: isDragging
                    ? "opacity 0.2s"
                    : "left 0.55s cubic-bezier(0.4,0,0.2,1), top 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
                  cursor: isDragging ? "grabbing" : "grab",
                  zIndex: isDragging ? 100 : isFiltered ? 5 : 20,
                  touchAction: "none",
                }}
                onPointerDown={(e) => handlePointerDown(e, i)}
                onPointerMove={(e) => handlePointerMove(e, i)}
                onPointerUp={(e) => handlePointerUp(e, i, project)}
              >
                <CardFace project={project} />
              </div>
            );
          })}
      </div>
    </>
  );
}
