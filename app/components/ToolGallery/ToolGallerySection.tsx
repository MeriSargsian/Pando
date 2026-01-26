"use client";

import { useEffect, useRef, useState } from "react";
import "./ToolGallerySection.css";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryToggle = {
  title: string;
  items: string[];
};

type ToolSection = {
  id: string;
  tool: string;
  subtitle: string;
  description: string;
  images?: GalleryImage[];
  toggles?: GalleryToggle[];
};

export default function ToolGallerySection({ section }: { section: ToolSection }) {
  const [openImage, setOpenImage] = useState<GalleryImage | null>(null);
  const isOpen = openImage !== null;

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dx: number) => {
    scrollRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div style={{ marginBottom: "6%", maxWidth: "90%" }} className="gallery-section-wrapper">
      {/* ===== NORMAL SECTION ===== */}
      {!isOpen && (
        <div className="card gallery-tool">
          <div className="gallery-tool-header">
            <div>
              <h3 className="gallery-tool-name">{section.tool}</h3>
              <p className="gallery-tool-subtitle">{section.subtitle}</p>
            </div>
          </div>

          <p className="gallery-tool-desc">{section.description}</p>

          {/* ===== 3-visible carousel with arrows ===== */}
         <div className="gallery-scroll-wrapper">
              <div className="gallery-scroll-inner">
                {((section.images?.length ?? 0) > 3) && (
                  <button
                    type="button"
                    className="gallery-scroll-btn left"
                    onClick={() => scrollBy(-388)}
                    aria-label="Scroll left"
                  >
                    ←
                  </button>
                )}
                <div ref={scrollRef} className="gallery-scroll">
                  {(section.images ?? []).map((img, i) => (
                    <button
                      key={`${section.id}-img-${i}`}
                      type="button"
                      className="gallery-imgcard"
                      onClick={() => setOpenImage(img)}
                    >
                      <img className="gallery-img" src={img.src} alt={img.alt} />
                    </button>
                  ))}
                </div>
                 {((section.images?.length ?? 0) > 3) && (
                    <button
                      type="button"
                      className="gallery-scroll-btn right"
                      onClick={() => scrollBy(388)}
                      aria-label="Scroll right">
                      →
                    </button>
                 )}
            </div>
          </div>


          {/* Toggles */}
          <div className="gallery-toggles">
            {(section.toggles ?? []).map((t, i) => (
              <details key={`${section.id}-toggle-${i}`} className="gallery-toggle">
                <summary className="gallery-summary">
                  <span>{t.title}</span>
                  <span className="gallery-chevron" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <ul className="gallery-list">
                  {t.items.map((item, j) => (
                    <li key={`${section.id}-item-${i}-${j}`}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* ===== FULL SECTION IMAGE VIEW ===== */}
      {isOpen && (
        <div
          className="card gallery-fullview"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenImage(null);
          }}
        >
          <button
            type="button"
            className="gallery-fullview-close"
            onClick={() => setOpenImage(null)}
            aria-label="Close image"
          >
            <img src="/icons/closeIcon.svg" alt="" className="close-icon" />
          </button>

          <img
            src={openImage.src}
            alt={openImage.alt}
            className="gallery-fullview-img"
            onMouseDown={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
