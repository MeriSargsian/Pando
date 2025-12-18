"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function MainShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const compact = pathname?.startsWith("/tools");
  const padding = compact ? "p-4 sm:p-5" : "p-6 md:p-8";

  return (
    <main
      id="main"
      className={`min-h-[60vh] rounded-lg border bg-white/90 shadow-sm backdrop-blur dark:bg-zinc-950/60 ${padding}`}
    >
      {children}
    </main>
  );
}
