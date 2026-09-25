import React from "react";
import { site } from "@/lib/siteData";
import DecorativeBorder from "@/components/DecorativeBorder";
import { UtensilsCrossed } from "lucide-react";

export default function ChefsNote() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      {/* Decorative right-side maze border */}
      <DecorativeBorder className="absolute right-0 top-0 h-full w-16 sm:w-24 opacity-80" />

      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <UtensilsCrossed
            className="mb-6 text-maroon"
            size={44}
            strokeWidth={1.25}
          />
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-charcoal">
            Chef&rsquo;s Note
          </h2>
          <p className="mt-3 font-heading text-lg sm:text-xl font-semibold uppercase tracking-[0.25em] text-maroon">
            {site.tagline}
          </p>

          <p className="mt-8 max-w-2xl text-justify font-body text-base sm:text-lg leading-relaxed text-charcoal/80">
            {site.chefNote}
          </p>
        </div>
      </div>
    </section>
  );
}