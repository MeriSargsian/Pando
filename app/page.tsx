import Link from "next/link";
import Image from "next/image";
import logo from "@/data/Pando_Acc_Encino.jpeg";

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-md border border-yellow-900/30 bg-white">
          <Image src={logo} alt="Pando Accelerator at Encino" fill className="object-contain p-2" priority />
        </div>
        <h1 className="text-3xl font-semibold">Rebuilding Guide</h1>
      </div>
      <div>
        <Link
          href="/guide"
          className="block rounded-md px-2 py-1.5 transition-colors hover:text-[var(--primary)] text-[var(--primary)] bg-white/5 ring-1 ring-yellow-900/30"
        >
          Overview
        </Link>
      </div>
      <p className="text-zinc-600">Skeleton site with navigation and empty pages. Add your content later.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">Guide</h2>
          <ul className="list-disc pl-5 text-sm">
            <li><Link href="/guide">Overview</Link></li>
            <li><Link href="/guide/risk-damage">Risk & Damage</Link></li>
            <li><Link href="/guide/recovery-hubs">Recovery Hubs</Link></li>
            <li><Link href="/guide/water-resilience">Water Resilience</Link></li>
            <li><Link href="/guide/heat-resiliency">Heat Resiliency</Link></li>
            <li><Link href="/guide/mobility-transit">Mobility & Transit</Link></li>
            <li><Link href="/guide/green-rebuild">Green & Resilient Rebuild</Link></li>
            <li><Link href="/guide/equity-housing">Equity & Housing</Link></li>
            <li><Link href="/guide/monitoring-feedback">Monitoring & Feedback</Link></li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">Tools</h2>
          <ul className="list-disc pl-5 text-sm">
            <li><Link href="/tools">Tools Overview</Link></li>
            <li><Link href="/tools/checklist">Home-Hardening Checklist</Link></li>
            <li><Link href="/tools/tank-sizing">Tank Sizing Estimator</Link></li>
            <li><Link href="/tools/safety-tester">Wildfire Safety Tester</Link></li>
            <li><Link href="/tools/adu-explorer">ADU Explorer</Link></li>
            <li><Link href="/tools/wildfire-events">Wildfire Events</Link></li>
            <li><Link href="/tools/map">Map</Link></li>
            <li><Link href="/tools/3d">3D Story Viewer</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
