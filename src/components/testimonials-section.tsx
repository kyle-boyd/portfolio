import { Section } from "./section";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section id="testimonials" title="What people say">
      <div className="space-y-8">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-xl border border-neutral-200 bg-white px-6 py-5 shadow-sm"
          >
            <p
              className="text-base italic text-[#555555]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm font-semibold text-[#222222]">{t.name}</p>
              <p className="text-sm text-[#666666]">
                {t.title}
                {t.company && ` · ${t.company}`}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
