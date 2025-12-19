"use client";

import Image from "next/image";
import heroImage from "@/data/Pando_Acc_Encino.jpeg";
import pandoSoCalConnectionsImage from "@/data/PandoDays-Schools-Map_Mar25.jpg";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const sections = useMemo(
    () => [
      {
        id: "about",
        title: "About",
        text:
          "Pando Populus is a community-scale environmental and social resilience platform designed to make climate risk data understandable, actionable, and locally relevant. The project integrates environmental modeling, demographic analysis, and land-use data to evaluate how climate hazards intersect with real community conditions. The platform prioritizes plain-language explanations of technical data, place-based analysis at the neighborhood scale, nature-based and multi-benefit resilience strategies, and accessibility for residents, students, planners, and non-technical users.",
      },
      {
        id: "study",
        title: "Study Area",
        text:
          "The Pando Populus assessment focuses on Census Tract 1397.02 in Los Angeles County, a coastal community characterized by moderate density, high residential stability, and extensive surrounding open space. Key characteristics include a population of approximately 6,447 residents, moderate population density (~686 people per km²), high homeownership (~88.5%), a large elderly population (24% age 65+), and significant protected and undeveloped land (~77%).",
      },
      {
        id: "risks",
        title: "Risks",
        text:
          "Pando Populus identifies interconnected risks including heat (land surface temperatures exceed 110°F; limited tree canopy ~14.8%), air quality (PM2.5 ~10.67 μg/m³), flooding and sea level rise (13.5%–15.3% of properties in current or projected 100-year flood zones), and wildfire (per-home risk low but surrounding landscape hazard high; recurring smoke exposure).",
      },
      {
        id: "solutions",
        title: "Solutions",
        text:
          "Pando Populus emphasizes multi-benefit, nature-based solutions: expanding native tree canopy, installing bioswales/rain gardens/permeable surfaces, creating shaded and accessible pedestrian corridors, using fire-resilient native landscaping, and encouraging clustered development on safer terrain.",
      },
      {
        id: "data",
        title: "Data",
        text:
          "The project integrates publicly available and modeled datasets: U.S. Census demographics and housing, land surface temperature and tree canopy, floodplain and sea level rise projections, wildfire hazard and resilience indices, and transit/roadway connectivity. Methods include geospatial overlay analysis, comparative analysis, hotspot identification, and translating technical indicators into plain-language summaries.",
      },
      {
        id: "impact",
        title: "Impact",
        text:
          "Pando Populus helps residents understand neighborhood risks, helps planners identify high-impact multi-benefit interventions, helps communities prioritize resilience investments, and helps decision-makers balance ecological protection with human needs.",
      },
    ],
    [],
  );

  const [query, setQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id ?? "about");
  const [activeRiskId, setActiveRiskId] = useState<string | null>(null);

  const risks = useMemo(
    () => [
      {
        id: "heat",
        title: "Heat",
        description:
          "High summer land surface temperatures exceed 110°F, driven by impervious surfaces and limited tree canopy (approximately 14.8%). Heat exposure is especially concerning for older adults, who make up nearly one-quarter of the population.",
      },
      {
        id: "air-quality",
        title: "Air Quality",
        description:
          "Annual PM2.5 concentrations average around 10.67 μg/m³, exceeding recommended health guidelines. Heat events and wildfire smoke can intensify respiratory risks, with asthma prevalence already elevated relative to ideal health benchmarks.",
      },
      {
        id: "flooding",
        title: "Flooding & Sea Level Rise",
        description:
          "Between 13.5% and 15.3% of properties fall within current or projected 100-year flood zones. Coastal exposure, watershed connections, and sea level rise increase the likelihood of future flood impacts, particularly during extreme storms.",
      },
      {
        id: "wildfire",
        title: "Wildfire",
        description:
          "While per-home wildfire risk remains relatively low, the surrounding landscape exhibits high wildfire hazard due to vegetation type, regional fire conditions, and Santa Ana wind events. Smoke exposure remains a recurring concern even when structures are not directly threatened.",
      },
    ],
    [],
  );

  const activeRisk = useMemo(() => {
    if (!activeRiskId) return null;
    return risks.find((r) => r.id === activeRiskId) ?? null;
  }, [activeRiskId, risks]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return sections
      .map((s) => {
        const hay = `${s.title} ${s.text}`.toLowerCase();
        const idx = hay.indexOf(q);
        if (idx === -1) return null;
        const snippetStart = Math.max(0, idx - 45);
        const snippetEnd = Math.min(hay.length, idx + q.length + 65);
        const snippet = `${s.title}: ${s.text}`.slice(snippetStart, snippetEnd);
        return { id: s.id, title: s.title, snippet };
      })
      .filter(Boolean) as Array<{ id: string; title: string; snippet: string }>;
  }, [query, sections]);

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = id;
    }
  };

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        if (top?.target?.id) {
          setActiveSectionId(top.target.id);
        }

        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
          }
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.12, 0.25, 0.4, 0.6],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!activeRiskId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveRiskId(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeRiskId]);

  return (
    <div className="page-layout">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-brand">Pando Populus</div>
          <div className="sidebar-search">
            <label className="sidebar-search-label" htmlFor="site-search">
              Search
            </label>
            <input
              id="site-search"
              className="sidebar-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections..."
              type="search"
            />
            {results.length > 0 ? (
              <div className="sidebar-search-results" role="listbox" aria-label="Search results">
                {results.slice(0, 6).map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className="sidebar-search-result"
                    onClick={() => {
                      scrollToSection(r.id);
                      setQuery("");
                    }}
                  >
                    <div className="sidebar-search-result-title">{r.title}</div>
                    <div className="sidebar-search-result-snippet">{r.snippet}</div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <nav className="sidebar-nav" aria-label="Section navigation">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`sidebar-link${activeSectionId === s.id ? " is-active" : ""}`}
                onClick={() => scrollToSection(s.id)}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="content">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Image src={heroImage} alt="" fill priority className="hero-bg-img" />
          </div>
          <div className="container hero-content">
            <h2>Environmental &amp; Social Resilience Intelligence</h2>
            <p>
              Turning climate, infrastructure, and community data into clear, actionable insights for resilient
              neighborhoods.
            </p>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="container">
            <h3>About Pando Populus</h3>
            <p>
              Pando Populus is a community-scale environmental and social resilience platform designed to make climate
              risk data understandable, actionable, and locally relevant. The project integrates environmental
              modeling, demographic analysis, and land-use data to evaluate how climate hazards intersect with real
              community conditions.
            </p>
            <p>
              Rather than treating risks like heat, flooding, wildfire, or air quality in isolation, Pando Populus
              examines how these pressures interact with housing age, mobility, accessibility, and population
              characteristics. This approach supports more effective planning, communication, and decision-making.
            </p>
            <p>The platform prioritizes:</p>
            <ul>
              <li>Plain-language explanations of technical data</li>
              <li>Place-based analysis at the neighborhood scale</li>
              <li>Nature-based and multi-benefit resilience strategies</li>
              <li>Accessibility for residents, students, planners, and non-technical users</li>
            </ul>

            <h4 className="about-subtitle">Pando SoCal Connections</h4>
            <p>
              Pando SoCal is a regional network of school, university, public agency, and special project partners across
              Southern California.
            </p>
            <div className="about-media">
              <Image
                src={pandoSoCalConnectionsImage}
                alt="Map showing Pando SoCal connections across Southern California"
                width={1400}
                height={750}
                className="about-image"
              />
            </div>
          </div>
        </section>

        <section id="study" className="section light reveal">
          <div className="container">
            <h3>Study Area: Census Tract 1397.02</h3>
            <p>
              The Pando Populus assessment focuses on Census Tract 1397.02 in Los Angeles County, a coastal community
              characterized by moderate density, high residential stability, and extensive surrounding open space.
            </p>
            <p>Key characteristics include:</p>
            <ul>
              <li>Population of approximately 6,447 residents</li>
              <li>Moderate population density (~686 people per km²)</li>
              <li>High homeownership (~88.5%), indicating long-term residency</li>
              <li>Large elderly population (24% age 65+)</li>
              <li>Significant protected and undeveloped land (~77%)</li>
            </ul>

            <p>
              The tract’s combination of aging housing stock, coastal exposure, and demographic profile makes it a
              strong case study for understanding how climate risks affect stable but environmentally sensitive
              communities.
            </p>
          </div>
        </section>

        <section id="risks" className="section reveal">
          <div className="container">
            <h3>Environmental &amp; Climate Risks</h3>

            <p>Pando Populus identifies several interconnected environmental risks that shape vulnerability in the study area.</p>

            <div className="grid">
              {risks.map((risk) => (
                <button
                  key={risk.id}
                  type="button"
                  className="card card-button"
                  onClick={() => setActiveRiskId(risk.id)}
                >
                  <h4>{risk.title}</h4>
                  <p>{risk.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="section light reveal">
          <div className="container">
            <h3>Resilience &amp; Mitigation Strategies</h3>
            <p>
              Pando Populus emphasizes multi-benefit, nature-based solutions that reduce risk while improving
              environmental quality and community access.
            </p>

            <p>Key strategies include:</p>
            <div className="grid">
              <div className="card">
                <h4>Tree Canopy</h4>
                <p>Expanding native tree canopy to reduce heat, improve air filtration, and manage stormwater.</p>
              </div>
              <div className="card">
                <h4>Green Stormwater</h4>
                <p>Installing bioswales, rain gardens, and permeable surfaces to reduce runoff and flood impacts.</p>
              </div>
              <div className="card">
                <h4>Shaded Corridors</h4>
                <p>Creating shaded, accessible pedestrian corridors connecting homes, transit stops, and services.</p>
              </div>
              <div className="card">
                <h4>Fire-Resilient Landscaping</h4>
                <p>Using fire-resilient native landscaping to lower fuel continuity while maintaining ecological value.</p>
              </div>
              <div className="card">
                <h4>Clustered Development</h4>
                <p>Encouraging clustered development on safer terrain to minimize exposure and infrastructure strain.</p>
              </div>
            </div>

            <p>
              Each strategy is designed to address multiple hazards simultaneously while enhancing livability and
              long-term resilience.
            </p>
          </div>
        </section>

        <section id="data" className="section reveal">
          <div className="container">
            <h3>Data Sources &amp; Methods</h3>
            <p>
              The project integrates publicly available and modeled datasets to build a comprehensive resilience
              profile.
            </p>

            <p>Primary data sources include:</p>
            <div className="grid">
              <div className="card">
                <h4>Data Sources</h4>
                <ul>
                  <li>U.S. Census Bureau demographic and housing data</li>
                  <li>Land surface temperature and tree canopy datasets</li>
                  <li>Floodplain and sea level rise projections</li>
                  <li>Wildfire hazard and resilience indices</li>
                  <li>Transit access and roadway connectivity data</li>
                </ul>
              </div>
              <div className="card">
                <h4>Methods Used</h4>
                <ul>
                  <li>Geospatial overlay and layering analysis</li>
                  <li>Comparative analysis with similar regional census tracts</li>
                  <li>Identification of risk hotspots and resilience strengths</li>
                  <li>Translation of technical indicators into plain-language summaries</li>
                </ul>
              </div>
            </div>

            <p>
              This approach ensures transparency while keeping the information usable for non-technical audiences.
            </p>
          </div>
        </section>

        <section id="impact" className="section light reveal">
          <div className="container">
            <h3>Why This Matters</h3>
            <p>
              Climate change is increasing the frequency and intensity of heat waves, floods, wildfires, and air
              quality events. Communities need tools that connect data to real-world decisions.
            </p>

            <p>Pando Populus helps:</p>
            <div className="grid">
              <div className="card">
                <h4>Residents</h4>
                <p>Residents understand environmental risks in their neighborhood.</p>
              </div>
              <div className="card">
                <h4>Planners</h4>
                <p>Planners identify high-impact, multi-benefit interventions.</p>
              </div>
              <div className="card">
                <h4>Communities</h4>
                <p>Communities prioritize investments in resilience infrastructure.</p>
              </div>
              <div className="card">
                <h4>Decision-Makers</h4>
                <p>Decision-makers balance ecological protection with human needs.</p>
              </div>
            </div>

            <p>
              By linking environmental data with social context, the platform supports safer, healthier, and more
              climate-ready communities.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>© 2025 Pando Populus · Community Resilience Platform</p>
          </div>
        </footer>
      </main>

      {activeRisk ? (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeRisk.title}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveRiskId(null);
          }}
        >
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">{activeRisk.title}</h3>
              <button type="button" className="modal-close" onClick={() => setActiveRiskId(null)} aria-label="Close">
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{activeRisk.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
