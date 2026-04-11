import { Link } from "next-view-transitions";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  hideTopBorder?: boolean;
  viewAllHref?: string;
  /** When true, matches home Hero position (pt-24 sm:pt-32 + mt-24) and renders title first, then subtitle */
  heroStyle?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  subtitle,
  hideTopBorder,
  viewAllHref,
  heroStyle,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        heroStyle
          ? "px-6 pt-24 pb-12 sm:px-10 sm:pt-32 sm:pb-16"
          : "px-6 py-12 sm:px-10 sm:py-16"
      }
    >
      <div className="mx-auto max-w-[800px] space-y-8 text-text-primary">
        <header
          className={
            heroStyle ? "mt-24 space-y-4" : "space-y-4"
          }
        >
          <div className="flex items-center justify-between gap-4">
            <h2
              className="text-[20px] text-text-primary sm:text-[24px]"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {title}
            </h2>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="shrink-0 text-[0.9rem] font-medium text-text-muted transition-colors hover:text-text-primary"
              >
                View All
              </Link>
            )}
          </div>
          {subtitle && (
            <p className="text-[0.8rem] font-medium tracking-[0.14em] text-text-muted">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

