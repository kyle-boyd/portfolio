"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Extend Window to include gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsEvents({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", measurementId, { page_path: url });
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsEvents measurementId={measurementId} />
    </Suspense>
  );
}
