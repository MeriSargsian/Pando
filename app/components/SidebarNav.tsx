"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  const base = "block rounded-md px-2 py-1.5 transition-colors";
  const hover = "hover:text-[var(--primary)]";
  const activeCls = active ? "text-[var(--primary)] bg-white/5 ring-1 ring-yellow-900/30" : "";
  return (
    <Link href={href} className={`${base} ${hover} ${activeCls}`}>
      {children}
    </Link>
  );
}

export default function SidebarNav() {
  return (
    <nav aria-label="Primary">
      <div className="mb-4">
        <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Guide</h2>
        <ul className="space-y-1.5 text-sm">
          <li><NavItem href="/guide">Overview</NavItem></li>
          <li><NavItem href="/guide/risk-damage">Risk & Damage</NavItem></li>
          <li><NavItem href="/guide/recovery-hubs">Recovery Hubs</NavItem></li>
          <li><NavItem href="/guide/water-resilience">Water Resilience</NavItem></li>
          <li><NavItem href="/guide/heat-resiliency">Heat Resiliency</NavItem></li>
          <li><NavItem href="/guide/mobility-transit">Mobility & Transit</NavItem></li>
          <li><NavItem href="/guide/green-rebuild">Green & Resilient Rebuild</NavItem></li>
          <li><NavItem href="/guide/equity-housing">Equity & Housing</NavItem></li>
          <li><NavItem href="/guide/monitoring-feedback">Monitoring & Feedback</NavItem></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Tools</h2>
        <ul className="space-y-1.5 text-sm">
          <li><NavItem href="/tools">Tools Overview</NavItem></li>
          <li><NavItem href="/tools/checklist">Home-Hardening Checklist</NavItem></li>
          <li><NavItem href="/tools/tank-sizing">Tank Sizing Estimator</NavItem></li>
          <li><NavItem href="/tools/safety-tester">Wildfire Safety Tester</NavItem></li>
          <li><NavItem href="/tools/adu-explorer">ADU Explorer</NavItem></li>
          <li><NavItem href="/tools/wildfire-events">Wildfire Events</NavItem></li>
          <li><NavItem href="/tools/map">Map</NavItem></li>
          <li><NavItem href="/tools/3d">3D Story Viewer</NavItem></li>
        </ul>
      </div>
    </nav>
  );
}
