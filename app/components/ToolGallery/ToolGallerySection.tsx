"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div style={{ marginBottom: "6%" }} className="gallery-section-wrapper">

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

          <div className="grid" style={{ marginBottom: "3%",
            }}>
            {(section.images ?? []).map((img, i) => (
              <button
                style={{aspectRatio: 4/3, padding:10, overflow:"hidden" }}
                key={`${section.id}-img-${i}`}
                type="button"
                className="gallery-imgcard"
                onClick={() => setOpenImage(img)}
              >
                <img className="gallery-img" style={{width:"100%", height:"100%", objectFit: "cover", display:"block"}} src={img.src} alt={img.alt} />
              </button>
            ))}
          </div>

          <div className="gallery-toggles">
            {(section.toggles ?? []).map((t, i) => (
              <details key={`${section.id}-toggle-${i}`} className="gallery-toggle">
                <summary className="gallery-summary">{t.title}</summary>
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



      {isOpen && (
        <div
          className="card gallery-fullview"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenImage(null);
          }}
          style={{position: "relative",}}
        >
          <button
            type="button"
            className="sidebar-search-result"
            onClick={() => setOpenImage(null)}
            aria-label="Close image"
            style={{ position: "absolute", right: "8%", padding:"3px", paddingBottom:"0",  }}
          >
           <img src="/icons/closeIcon.svg" alt="" className="close-icon"/>
          </button>

          <img
            src={openImage.src}
            alt={openImage.alt}
            onMouseDown={(e) => e.stopPropagation()}
            style={{ width: "70%", maxHeight: "70vh",
                    objectFit: "contain", display: "block", margin: "0 auto" }}
          />
        </div>
      )}

    </div>
  );
}
