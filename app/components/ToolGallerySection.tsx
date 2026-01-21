"use client";

import { useEffect, useState } from "react";

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
  tags?: string[];
  images?: GalleryImage[];
  toggles?: GalleryToggle[];
};

export default function ToolGallerySection({ section }: { section: ToolSection }) {
  const [openImage, setOpenImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!openImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openImage]);

  return (
    <div className="card gallery-tool" style={{marginBottom: "6%"}}>
      {/* Header */}
      <div className="gallery-tool-header">
        <div>
          <h3 className="gallery-tool-name">{section.tool}</h3>
          <p className="gallery-tool-subtitle">{section.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="gallery-tool-desc">{section.description}</p>

      {/* Image strip */}
      <div className="grid" style={{marginBottom: "3%"}} aria-label={`${section.tool} images`}>
        {(section.images ?? []).map((img, i) => (
          <button
            key={`${section.id}-img-${i}`}
            type="button"
            className="gallery-imgcard"
            // onClick={() => setOpenImage(img)}
          >
            <img className="gallery-img" src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {/* Toggles */}
      <div className="gallery-toggles">
        {(section.toggles ?? []).map((t, i) => (
          <details key={`${section.id}-toggle-${i}`} className="gallery-toggle">
            <summary className="gallery-summary">
              <span>{t.title}</span>
            </summary>

            <ul className="gallery-list">
              {(t.items ?? []).map((item, j) => (
                <li key={`${section.id}-item-${i}-${j}`}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Lightbox */}
      {openImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => e.target === e.currentTarget && setOpenImage(null)}
        >
          <div className="gallery-lightbox-inner">
            <div className="gallery-lightbox-top">
              <div className="gallery-lightbox-title">{openImage.alt}</div>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setOpenImage(null)}
              >
                ×
              </button>
            </div>

            <div className="gallery-lightbox-imgwrap">
              <img src={openImage.src} alt={openImage.alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
