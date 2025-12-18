import Hero from "../components/Hero";

export default function Page() {
  return (
    <section className="space-y-6">
      <Hero
        title="About Pando Populus"
        subtitle="A Los Angeles–based nonprofit producing civic engagement programs for a just and sustainable region."
      />
      <div className="space-y-4">
        <h2 className="section-title text-lg font-semibold">Who we are</h2>
        <p className="text-zinc-300">Pando Populus is a 501(c)(3) accelerating practical sustainability through cross-sector collaboration and project-based work.</p>
        <p className="text-zinc-300">We convene universities, public agencies, and mission-driven organizations to move ideas into action and scale impact where communities live.</p>
        <div className="flex gap-3 pt-2">
          <a href="/programs" className="btn btn-primary">Explore Programs</a>
          <a href="/join-give" className="btn btn-outline">Join / Give</a>
        </div>
      </div>
    </section>
  );
}
