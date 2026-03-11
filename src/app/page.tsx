import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MainPageClient } from "@/components/main-page-client";
import { getMainPageWork } from "@/data/case-studies";

export const metadata = {
  title: "Kyle Boyd | Product Portfolio",
  description:
    "Product designer based in Denver, Colorado. Building in product & systems for enterprise solutions.",
};

export default function HomePage() {
  const projects = getMainPageWork();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#222222]">
      <SiteHeader />
      <MainPageClient projects={projects} />
      <SiteFooter />
    </div>
  );
}
