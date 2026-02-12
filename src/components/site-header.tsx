"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const activeClass =
  "rounded-full bg-zinc-100/10 px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-50 transition hover:bg-zinc-100/16";
const inactiveClass =
  "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white";

const moreLinks = [
  { href: "/playground", label: "Playground" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isMoreActive = moreLinks.some((link) => isActive(link.href));

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-40 flex justify-center sm:top-7">
      <div className="pointer-events-auto inline-flex rounded-full bg-gradient-to-tr from-zinc-700/35 via-zinc-600/20 to-zinc-600/45 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
        <nav className="flex items-center gap-1 rounded-full bg-black/55 px-1 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
          <Link href="/" className={isActive("/") ? activeClass : inactiveClass}>
            Home
          </Link>
          <Link href="/work" className={isActive("/work") ? activeClass : inactiveClass}>
            Work
          </Link>

          {/* Desktop only: show all links */}
          <Link
            href="/playground"
            className={`hidden min-[501px]:inline-flex ${isActive("/playground") ? activeClass : inactiveClass}`}
          >
            Playground
          </Link>
          <Link
            href="/writing"
            className={`hidden min-[501px]:inline-flex ${isActive("/writing") ? activeClass : inactiveClass}`}
          >
            Writing
          </Link>
          <Link
            href="/about"
            className={`hidden min-[501px]:inline-flex ${isActive("/about") ? activeClass : inactiveClass}`}
          >
            About
          </Link>

          {/* Mobile only: More dropdown */}
          <div ref={moreRef} className="relative min-[501px]:hidden">
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`cursor-pointer ${isMoreActive || moreOpen ? activeClass : inactiveClass}`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <svg
                className={`ml-1 inline-block h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[10rem] rounded-2xl bg-gradient-to-tr from-zinc-700/35 via-zinc-600/20 to-zinc-600/45 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
                <div className="flex flex-col gap-1 rounded-2xl bg-black/55 px-1 py-1 backdrop-blur-md">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={isActive(link.href) ? activeClass : inactiveClass}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
