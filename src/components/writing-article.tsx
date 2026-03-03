import { Link } from "next-view-transitions";

export type WritingArticleProps = {
  date: string;
  title: string;
  description: string;
  href?: string;
};

export function WritingArticle({ date, title, description, href }: WritingArticleProps) {
  const content = (
    <div className="space-y-2">
      <h3
        className={`text-lg font-semibold text-[#222222] leading-tight ${
          href ? "transition-colors group-hover:text-[#333333]" : ""
        }`}
        style={{ fontFamily: "var(--font-crimson)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-[#666666] leading-relaxed">
        {description}
      </p>
    </div>
  );

  const wrapperClassName = `group flex-1 rounded-lg px-4 py-3 transition-colors ${
    href ? "cursor-pointer" : ""
  } hover:bg-neutral-50`;

  return (
    <div className="flex gap-3 items-center sm:gap-8">
      <div className="flex w-16 flex-shrink-0 items-center self-stretch text-sm text-[#666666] sm:w-24">
        {date}
      </div>
      {href ? (
        <Link href={href} className={wrapperClassName}>
          {content}
        </Link>
      ) : (
        <div className={wrapperClassName}>{content}</div>
      )}
    </div>
  );
}
