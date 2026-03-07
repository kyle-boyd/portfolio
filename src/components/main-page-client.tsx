"use client";

import { useState } from "react";
import { HeroCarousel } from "@/components/hero-carousel";
import { HeroGlow } from "@/components/hero-glow";
import { MainPageTOC } from "@/components/main-page-toc";
import { HomeHeroText } from "@/components/home-hero-text";
import type { SelectedWorkItem } from "@/data/case-studies";

type MainPageClientProps = {
  projects: SelectedWorkItem[];
};

export function MainPageClient({ projects }: MainPageClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tocHovered, setTocHovered] = useState(false);
  const current = projects[currentIndex];

  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      {/* Hero: full width above two columns */}
      <section className="px-6 pb-8 md:px-10 lg:pb-36 lg:pl-40 lg:pr-0 lg:pt-20">
        <HomeHeroText />
      </section>

      {/* Two columns: Case studies sidebar (gray panel) + app mockup card */}
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside
          className="shrink-0 px-6 pb-10 pt-6 md:px-10 lg:w-[320px] lg:px-8 lg:pt-6"
          onMouseEnter={() => setTocHovered(true)}
          onMouseLeave={() => setTocHovered(false)}
        >
          <MainPageTOC
            projects={projects}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
        </aside>

        <main className="hidden flex-1 lg:flex lg:min-h-[70vh] lg:overflow-visible lg:px-8 lg:pb-20 lg:pl-20 lg:pt-20">
          <HeroGlow
            config={current?.heroGlow}
            themeColor={current?.themeColor ?? "#71717a"}
            className="relative -ml-16 -mb-16 -mt-16 p-2"
          >
            <div className="h-[1120px] w-[1800px] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <HeroCarousel
                projects={projects}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                externalPaused={tocHovered}
              />
            </div>
          </HeroGlow>
        </main>
      </div>
    </div>
  );
}
