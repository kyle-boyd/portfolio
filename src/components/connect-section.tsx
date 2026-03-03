import { assetUrl } from "@/lib/base-path";
import { Section } from "./section";
import { LinkWithPreview } from "./link-with-preview";

export function ConnectLinks() {
  return (
    <p className="flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-base text-[#222222] sm:px-10" style={{ fontFamily: "var(--font-outfit)" }}>
      <LinkWithPreview
        href="https://www.linkedin.com/in/kyle-boyd-design/"
        label="LinkedIn"
        variant="linkedin"
      />
      <LinkWithPreview
        href={assetUrl("/images/kyleboyd_resume.pdf")}
        label="Resume"
        variant="resume"
      />
    </p>
  );
}

export function ConnectSection() {
  return (
    <Section id="connect" title="Connect">
      <div className="space-y-6">
        <p className="text-base text-[#555555]" style={{ fontFamily: "var(--font-outfit)" }}>
          Reach me at{" "}
          <a
            href="mailto:kyle.boyd@gmail.com"
            className="underline decoration-[#888888] underline-offset-4 transition-colors hover:text-[#222222] hover:decoration-[#555555]"
          >
            kyle.boyd@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}
