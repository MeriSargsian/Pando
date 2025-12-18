import Hero from "../components/Hero";

export default function Page() {
  return (
    <section className="space-y-6">
      <Hero
        title="Project Accelerator & Campus"
        subtitle="An 11-acre Encino campus with meeting, event, and project space — hosted by the Sisters of Social Service."
        image="https://images.unsplash.com/photo-1519683102470-6d2824a8c7da?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="space-y-4">
        <h2 className="section-title text-lg font-semibold">Campus vision</h2>
        <p className="text-zinc-300">Reimagined around Pope Francis’s “integral ecology,” the campus pairs spiritual heritage with practical sustainability — featuring one of California’s largest private residential solar installations.</p>
      </div>
      <div className="space-y-3">
        <h2 className="section-title text-lg font-semibold">Highlights</h2>
        <ul className="list-disc pl-5 text-zinc-300">
          <li><span className="font-medium">Community partnerships office:</span> A hub connecting universities, public agencies, and NGOs for collaborative projects.</li>
          <li><span className="font-medium">Biophilia Treehouse:</span> Public art and biodiversity landmark led by designer Rebeca Méndez.</li>
          <li><span className="font-medium">LACI offsite lab:</span> Testbed for cleantech pilots, including ePave’s cool-pavement solutions.</li>
        </ul>
        <div className="flex gap-3 pt-2">
          <a href="/programs" className="btn btn-primary">See Programs</a>
          <a href="/join-give" className="btn btn-outline">Visit / Get Involved</a>
        </div>
      </div>
    </section>
  );
}
