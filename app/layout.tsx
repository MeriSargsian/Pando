import type { Metadata } from "next";
import Link from "next/link";
import MainShell from "./components/MainShell";
import SidebarNav from "./components/SidebarNav";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rebuilding Guide",
  description: "Resilient, equitable, community-oriented rebuilding tools and guide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>        
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary/10 focus:px-3 focus:py-2">Skip to content</a>
        <header className="sticky top-0 z-10 border-b border-yellow-900/30 bg-black/60 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm">
            <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--primary)]">Rebuilding Guide</Link>
            <div className="hidden gap-4 sm:flex">
              <Link href="/guide" className="hover:underline hover:text-[var(--primary)]">Guide</Link>
              <Link href="/tools" className="hover:underline hover:text-[var(--primary)]">Tools</Link>
              <Link href="/tools/map" className="hover:underline hover:text-[var(--primary)]">Map</Link>
              <Link href="/tools/3d" className="hover:underline hover:text-[var(--primary)]">3D Viewer</Link>
            </div>
          </nav>
        </header>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-[300px_1fr]">
          <aside className="h-max rounded-lg border border-yellow-900/30 bg-zinc-950 p-5 shadow-sm">
            <SidebarNav />
          </aside>
          <MainShell>
            {children}
          </MainShell>
        </div>
        <footer className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-6 text-sm text-zinc-600 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Pando Populus</h2>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/programs" className="hover:underline">Programs</Link></li>
                <li><Link href="/accelerator" className="hover:underline">Project Accelerator & Campus</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Community</h2>
              <ul className="space-y-1">
                <li><Link href="/cso-taskforce" className="hover:underline">CSO Taskforce</Link></li>
                <li><Link href="/awards" className="hover:underline">Pando Awards</Link></li>
                <li><Link href="/impact" className="hover:underline">Impact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Media</h2>
              <ul className="space-y-1">
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Get Involved</h2>
              <ul className="space-y-1">
                <li><Link href="/join-give" className="hover:underline">Join / Give</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-zinc-500">
            <p>Placeholder site structure. Content to be added later.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
