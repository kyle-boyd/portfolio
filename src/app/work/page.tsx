import { getSelectedWork } from "@/data/case-studies";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Kyle Boyd | Work",
  description: "Case studies of projects I have worked on.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#222222]">
      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Section
          id="work"
          title="Work"
          subtitle="See case studies of some projects that I have worked on."
          heroStyle
        >
          <div className="grid grid-cols-1 gap-24 md:grid-cols-1">
            {getSelectedWork().map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
