"use client";

import { useEffect, useState } from "react";

export type CaseStudyTOCEntry = {
  id: string;
  label: string;
};

type CaseStudyTOCProps = {
  entries: CaseStudyTOCEntry[];
};

export function CaseStudyTOC({ entries }: CaseStudyTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null);

  useEffect(() => {
    if (entries.length === 0) return;

    const rootMargin = "-20% 0px -70% 0px";
    const observers = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          observers.set(entry.target.id, entry);
        }
        const visible = entries
          .map((e) => observers.get(e.id))
          .filter((e): e is IntersectionObserverEntry => Boolean(e?.isIntersecting));
        const byRatio = [...visible].sort(
          (a, b) => (b?.intersectionRatio ?? 0) - (a?.intersectionRatio ?? 0)
        );
        if (byRatio[0]) {
          setActiveId(byRatio[0].target.id);
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    for (const { id } of entries) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav
      className="fixed left-0 top-0 z-30 hidden h-full w-[200px] flex-col justify-center pl-6 pr-4 lg:flex xl:w-[220px]"
      aria-label="On this page"
    >
      <ul className="space-y-2">
        {entries.map((entry) => (
          <li key={entry.id} className="flex items-baseline gap-2">
            <span
              className={`flex h-1.5 w-1.5 shrink-0 rounded-full ${
                activeId === entry.id ? "bg-[#222222]" : "bg-[#888888]"
              }`}
              aria-hidden
            />
            <a
              href={`#${entry.id}`}
              className={`block text-left text-sm transition-colors ${
                activeId === entry.id
                  ? "font-semibold text-[#222222]"
                  : "text-[#888888] hover:text-[#555555]"
              }`}
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
