"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (projects.length <= 1 || paused || externalPaused) return;
    const id = setInterval(() => {
      onIndexChange((currentIndex + 1) % projects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [projects.length, currentIndex, onIndexChange, paused, externalPaused]);

  if (projects.length === 0) return null;

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-neutral-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {projects.map((project, i) => (
        <div
          key={project.slug}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            pointerEvents: i === currentIndex ? "auto" : "none",
          }}
        >
          <Image
            src={assetUrl(project.image)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
