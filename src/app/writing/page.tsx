import { WRITING_ARTICLES } from "@/data/writing";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WritingArticle } from "@/components/writing-article";

export default function WritingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#222222]">
      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Section
          id="writing"
          title="Writing"
          subtitle="I find writing to be another way to express creative ideas. I am not a natural writer, but the process of pen to paper is a process that helps to unlock other elements of my design brain."
          heroStyle
        >
          <div className="space-y-2">
            {WRITING_ARTICLES.map((article) => (
              <WritingArticle key={article.title} {...article} />
            ))}
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
