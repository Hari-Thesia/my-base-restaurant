import React, { useState } from "react";
import { events, images } from "@/lib/siteData";
import Reveal from "@/components/Reveal";
import { Calendar, Tag } from "lucide-react";

const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

const imageMap = {
  exterior: images.exterior,
  interiorBar: images.interiorBar,
  interiorPendants: images.interiorPendants,
  banquet: images.banquet,
};

export default function Events() {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="overflow-hidden bg-cream pt-24">
      {/* HEADER */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-maroon">
              Hosted & Curated
            </p>
            <h1 className="mt-3 font-display text-5xl text-charcoal sm:text-6xl">
              Events at Cuore
            </h1>
            <p className="mt-5 font-body text-charcoal/70 leading-relaxed">
              A researched chronicle of the evenings, launches and celebrations
              hosted at Cuore by Masala Diaries — gathered from the restaurant&rsquo;s
              own social record. From the grand opening gala to live music weeks,
              each event is a chapter of the Cuore story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 font-heading text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  filter === c
                    ? "bg-maroon text-cream"
                    : "border border-maroon/25 text-charcoal/70 hover:border-maroon hover:text-maroon"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((ev, i) => (
              <Reveal key={ev.id} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-maroon/10 bg-cream transition-shadow hover:shadow-[0_24px_60px_-34px_rgba(128,0,32,0.45)]">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imageMap[ev.image] || images.interiorPendants}
                      alt={ev.title}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.18em] text-maroon">
                      {ev.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 font-body text-xs text-charcoal/55">
                      <Calendar size={13} />
                      <span>{ev.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-charcoal">
                      {ev.title}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal/70">
                      {ev.description}
                    </p>
                    <p className="mt-4 flex items-center gap-1.5 font-heading text-[11px] uppercase tracking-[0.15em] text-tan">
                      <Tag size={12} /> {ev.tag}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Host your evening at Cuore
            </h2>
            <p className="mt-4 font-body text-charcoal/70">
              Private dining, banquets and curated experiences — all by
              reservation.
            </p>
            <a
              href="https://wa.me/919099031031"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-maroon-dark"
            >
              Enquire now
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}