import Image from "next/image";
import { Section } from "./section";

export type CareerEntry = {
  role: string;
  company: string;
  year: string;
  isCurrent?: boolean;
};

export type AboutSectionProps = {
  /** Big statement lines (one per item, displayed as headlines) */
  narrative: string[];
  /** Optional image (e.g. personal photo) */
  imageSrc?: string;
  /** Caption for the image */
  imageCaption?: string;
  /** Career timeline entries */
  career: CareerEntry[];
  /** Operating system: design review cadence, collaboration model, mentoring */
  operatingSystem?: string[];
};

export function AboutSection({
  narrative,
  imageSrc,
  imageCaption,
  career,
  operatingSystem,
}: AboutSectionProps) {
  return (
    <Section id="about" title="About" heroStyle>
      <div className="space-y-10 sm:space-y-14">
        {/* Narrative + image: text left, image right */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-1 space-y-6 sm:space-y-8">
            {narrative.map((line, i) => (
              <p
                key={i}
                className="text-base text-[#555555]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {line}
              </p>
            ))}
          </div>

          {imageSrc && (
            <figure className="shrink-0 space-y-2 sm:w-[280px]">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                <Image
                  src={imageSrc}
                  alt={imageCaption ?? "Personal photo"}
                  width={400}
                  height={267}
                  className="w-full object-cover"
                  sizes="280px"
                />
              </div>
              {imageCaption && (
                <figcaption className="text-sm text-[#666666]">
                  {imageCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        {/* Career timeline */}
        <div>
          <p
            className="mb-6 text-lg font-extralight text-[#666666] sm:text-xl"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Though I&apos;ve been working for a while, here&apos;s a quick glance
            at the last few years.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {career.map((entry, i) => (
              <div
                key={i}
                className="group flex flex-col gap-1 rounded-[18px] border border-neutral-200 bg-white px-5 py-4 shadow-sm transition-colors hover:bg-neutral-50 hover:shadow-md"
              >
                <span className="text-[0.65rem] font-medium tracking-[0.14em] text-[#666666]">
                  {entry.year}
                  {entry.isCurrent ? " - Present" : ""}
                </span>
                <span
                  className="text-base font-semibold text-[#222222] sm:text-lg"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  {entry.role}
                </span>
                <span className="text-sm text-[#555555]">{entry.company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Operating system / leadership */}
        {operatingSystem && operatingSystem.length > 0 && (
          <div>
            <p
              className="mb-6 text-lg font-extralight text-[#666666] sm:text-xl"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              How I work
            </p>
            <ul
              className="space-y-3 text-base text-[#555555]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {operatingSystem.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#888888]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
