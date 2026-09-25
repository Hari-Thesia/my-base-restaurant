import React from "react";
import { site, images } from "@/lib/siteData";
import ChefsNote from "@/components/ChefsNote";
import Reveal from "@/components/Reveal";
import { Leaf, Wine, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Vegetarian, limitless",
    text: "A menu that treats plant-led cookery as a language of endless possibility — memory, emotion, colour and craft on every plate.",
  },
  {
    icon: Wine,
    title: "Non-alcoholic cocktail bar",
    text: "A central circular bar pouring composed zero-proof cocktails — sweetness meeting fire, built to be sipped slowly.",
  },
  {
    icon: Sparkles,
    title: "Designed with detail",
    text: "Sculptural pendants, cave-like columns and circular windows. A room composed with intent, for the senses.",
  },
  {
    icon: Users,
    title: "Made to gather",
    text: "From intimate private dining to large-format banquets — a setting built for both ceremony and celebration.",
  },
];

export default function Experience() {
  return (
    <div className="overflow-hidden bg-cream pt-24">
      {/* HEADER */}
      <section className="relative flex h-[60svh] items-end overflow-hidden">
        <img
          src={images.interiorBar}
          alt="Cuore interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-tan">
              The Experience
            </p>
            <h1 className="mt-2 font-display text-5xl text-cream sm:text-7xl">
              A room that stays with you
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-sm border border-maroon/10 bg-cream p-8 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(128,0,32,0.4)]">
                  <p.icon className="text-maroon" size={30} strokeWidth={1.25} />
                  <h3 className="mt-5 font-display text-xl text-charcoal">{p.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-sm sm:h-[560px]">
              <img
                src={images.interiorPendants}
                alt="Pendant cluster"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ChefsNote />

      {/* BANQUET BAND */}
      <section className="bg-charcoal py-24 text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={images.banquet}
                alt="Cuore banquet hall"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-tan/80">
              Celebrations & Banquets
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              A venue that turns moments into memories
            </h2>
            <p className="mt-5 font-body text-cream/75 leading-relaxed">
              A high-ceilinged hall dressed for ceremony — long tables, tiered
              chandeliers and a wide, open floor. Built for weddings, corporate
              gatherings and milestone celebrations, with private dining for
              intimate occasions.
            </p>
            <p className="mt-6 font-heading text-sm italic text-tan/70">
              {site.reservation} · {site.hours}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}