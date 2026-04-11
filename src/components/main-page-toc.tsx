"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { assetUrl } from "@/lib/base-path";
import type { SelectedWorkItem } from "@/data/case-studies";

type MainPageTOCProps = {
  projects: SelectedWorkItem[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
};

function TOCIcon({ project, isSelected }: { project: SelectedWorkItem; isSelected: boolean }) {
  const hasSvgIcons = project.iconGrayscale && project.iconColor;

  if (hasSvgIcons) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-surface-bg">
        <div className="relative h-8 w-8">
          <img
            src={assetUrl(project.iconGrayscale!)}
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-0 group-data-[selected=true]:opacity-0"
            aria-hidden
          />
          <img
            src={assetUrl(project.iconColor!)}
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100 group-data-[selected=true]:opacity-100"
            aria-hidden
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
      <Image
        src={assetUrl(project.image)}
        alt=""
        fill
        className="object-cover"
        sizes="40px"
      />
    </div>
  );
}

export function MainPageTOC({
  projects,
  currentIndex,
  onIndexChange,
}: MainPageTOCProps) {
  return (
    <nav className="space-y-4" aria-label="Case studies">
      <h2 className="text-[11px] font-light tracking-wide text-text-primary">
        Case studies
      </h2>
      <ul className="space-y-2">
        {projects.map((project, i) => {
          const isSelected = i === currentIndex;
          const itemClass =
            "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-neutral-200/60 data-[selected=true]:bg-neutral-200/60";
          const displayTitle = project.tocTitle ?? project.title;
          const displaySubtitle = project.tocSubtitle ?? project.scope;
          const content = (
            <>
              <TOCIcon project={project} isSelected={isSelected} />
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm font-semibold ${
                    isSelected ? "text-text-primary" : "text-text-hover"
                  }`}
                >
                  {displayTitle}
                </p>
                <p className="truncate text-xs text-text-muted">
                  {displaySubtitle}
                </p>
              </div>
            </>
          );
          return (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                onMouseEnter={() => onIndexChange?.(i)}
                className={itemClass}
                data-selected={isSelected}
              >
                {content}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
