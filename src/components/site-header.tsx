"use client";

import { getWorkFlyoutItems } from "@/data/case-studies";
import { assetUrl } from "@/lib/base-path";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const activeClass =
  "text-[#222222] font-medium";
const inactiveClass =
  "text-[#666666] transition hover:text-[#333333]";

const moreLinks = [
  { href: "/playground", label: "Playground" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

const workFlyoutItems = getWorkFlyoutItems();

export function SiteHeader() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const workHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isMoreActive = moreLinks.some((link) => isActive(link.href));
  const isWorkActive = isActive("/work");

  const clearWorkHoverTimeout = () => {
    if (workHoverTimeout.current) {
      clearTimeout(workHoverTimeout.current);
      workHoverTimeout.current = null;
    }
  };

  const scheduleWorkClose = () => {
    clearWorkHoverTimeout();
    workHoverTimeout.current = setTimeout(() => setWorkOpen(false), 150);
  };

  const scheduleWorkOpen = () => {
    clearWorkHoverTimeout();
    workHoverTimeout.current = setTimeout(() => setWorkOpen(true), 150);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setWorkOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearWorkHoverTimeout();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-between px-6 py-5 sm:px-8 sm:py-6">
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="text-base font-medium text-[#222222] hover:text-[#333333]"
        >
          Kyle Boyd
        </Link>
      </div>
      <div className="pointer-events-auto flex items-center gap-4 text-sm sm:gap-8">
        <div
          ref={workRef}
          className="relative"
          onMouseEnter={() => {
            clearWorkHoverTimeout();
            scheduleWorkOpen();
          }}
          onMouseLeave={scheduleWorkClose}
        >
          <button
            type="button"
            onClick={() => setWorkOpen((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center ${isWorkActive || workOpen ? activeClass : inactiveClass}`}
            aria-expanded={workOpen}
            aria-haspopup="true"
          >
            Work
            <svg
              className={`ml-1 inline-block h-3 w-3 transition-transform ${workOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {workOpen && (
            <div className="absolute left-0 top-full z-50 mt-2 min-w-[280px] rounded-2xl border border-neutral-100 bg-[#FAFAFA] py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <nav className="px-2 py-1" aria-label="Work case studies">
                {workFlyoutItems.map((item) => {
                  const isItemActive = pathname === item.href;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-neutral-200/70 ${isItemActive ? "bg-neutral-200/70" : ""}`}
                    >
                      <div
                        className={`relative shrink-0 overflow-hidden rounded-lg ${item.iconGrayscale && item.iconColor ? "flex h-14 w-14 items-center justify-center border border-neutral-200 bg-white" : "h-14 w-14 border border-neutral-200 bg-neutral-200"}`}
                      >
                        {item.iconGrayscale && item.iconColor ? (
                          <div className="relative h-8 w-8">
                            <img
                              src={assetUrl(item.iconGrayscale)}
                              alt=""
                              className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                              aria-hidden
                            />
                            <img
                              src={assetUrl(item.iconColor)}
                              alt=""
                              className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                              aria-hidden
                            />
                          </div>
                        ) : (
                          <Image
                            src={assetUrl(item.image)}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#222222]">
                          {item.title}
                        </p>
                        <p className="truncate text-xs text-[#666666]">
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
        <Link
          href="/playground"
          className={`hidden sm:inline-flex ${isActive("/playground") ? activeClass : inactiveClass}`}
        >
          Playground
        </Link>
        <Link
          href="/writing"
          className={`hidden sm:inline-flex ${isActive("/writing") ? activeClass : inactiveClass}`}
        >
          Writing
        </Link>
        <Link
          href="/about"
          className={`hidden sm:inline-flex ${isActive("/about") ? activeClass : inactiveClass}`}
        >
          About
        </Link>

        <div ref={moreRef} className="relative sm:hidden">
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
            <div className="absolute right-0 top-full mt-2 min-w-[10rem] rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 text-sm ${isActive(link.href) ? "font-medium text-[#222222]" : "text-[#666666] hover:bg-neutral-50 hover:text-[#333333]"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
