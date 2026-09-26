import React, { useState } from "react";
import { gallery, images } from "@/lib/siteData";
import Reveal from "@/components/Reveal";
import { X } from "lucide-react";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const items = [
    ...gallery,
    { src: images.interiorBar, caption: "The circular bar at the heart of the room", span: "wide" },
    { src: images.banquet, caption: "Chandeliers over the long tables", span: "tall" },
  ];

  return (
    <div className="overflow-hidden bg-cream pt-24">
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-maroon">
              Inside & Out
            </p>
            <h1 className="mt-3 font-display text-5xl text-charcoal sm:text-6xl">
              Gallery
            </h1>
            <p className="mt-5 font-body text-charcoal/70 leading-relaxed">
              The cylinder, the pendants, the circular bar and the banquet hall —
              a visual walkthrough of the spaces that make Cuore.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid auto-rows-[240px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.06}
                className={item.span === "tall" ? "row-span-2" : ""}
              >
                <button
                  onClick={() => setActive(item)}
                  className="group relative h-full w-full overflow-hidden rounded-sm"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="p-4 text-left font-heading text-xs uppercase tracking-[0.15em] text-cream">
                      {item.caption}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream/80 hover:text-cream"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption}
              className="max-h-[78vh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center font-heading text-xs uppercase tracking-[0.2em] text-tan">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}