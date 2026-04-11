"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import { assetUrl } from "@/lib/base-path";
import type { SelectedWorkItem } from "@/data/case-studies";

const ROTATE_MS = 2500;

type HeroCarouselProps = {
  projects: SelectedWorkItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  /** When true, auto-advance is paused (e.g. user hovering over TOC) */
  externalPaused?: boolean;
};

export function HeroCarousel({
  projects,
  currentIndex,
  onIndexChange,
  externalPaused = false,
}: HeroCarouselProps) {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projects.length <= 1 || paused || externalPaused) return;
    const id = setInterval(() => {
      onIndexChange((currentIndex + 1) % projects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [projects.length, currentIndex, onIndexChange, paused, externalPaused]);

  if (projects.length === 0) return null;

  const current = projects[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Offset tooltip so it doesn't sit right under cursor
  const OFFSET_X = 16;
  const OFFSET_Y = 20;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-neutral-200"
      onMouseEnter={() => { setPaused(true); setHovered(true); }}
      onMouseLeave={() => { setPaused(false); setHovered(false); }}
      onMouseMove={handleMouseMove}
    >
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={project.href}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            pointerEvents: i === currentIndex ? "auto" : "none",
          }}
          tabIndex={i === currentIndex ? 0 : -1}
        >
          <Image
            src={assetUrl(project.image)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </Link>
      ))}

      {/* Cursor-following tooltip */}
      <div
        className="pointer-events-none absolute transition-[opacity,transform] duration-200 ease-out"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.92)",
          transformOrigin: "top left",
          left: mousePos.x + OFFSET_X,
          top: mousePos.y + OFFSET_Y,
        }}
      >
        <div className="max-w-xs rounded-2xl bg-surface-elevated/60 px-4 py-3 shadow-lg ring-1 ring-black/8 backdrop-blur-md">
          <p className="text-[13px] font-semibold leading-snug text-text-primary">
            {current.tocTitle ?? current.title}
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-text-secondary">
            {current.description}
          </p>
        </div>
      </div>
    </div>
  );
}
