import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site, images } from "@/lib/siteData";
import { ArrowDown, Phone, MapPin, BookOpen } from "lucide-react";
import ChefsNote from "@/components/ChefsNote";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={images.exterior}
            alt="Cuore by Masala Diaries exterior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/75" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream">
          <motion.img
            src={site.logo}
            alt="Cuore"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 h-24 w-24 rounded-full object-cover ring-2 ring-tan/40 sm:h-28 sm:w-28"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-heading text-xs uppercase tracking-[0.45em] text-tan/90"
          >
            by Masala Diaries · Rajkot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-3 font-display text-6xl font-semibold tracking-tight sm:text-8xl"
          >
            Cuore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 max-w-xl font-heading text-lg italic text-cream/90"
          >
            {site.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-maroon-dark"
            >
              <Phone size={15} /> Reserve · {site.phone}
            </a>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-tan/60 px-7 py-3 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-cream hover:text-charcoal"
            >
              <MapPin size={15} /> Find Us
            </a>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            href="https://drive.google.com/file/d/12RDm1yXoSuwT2SC4AuZv5DloucsoXlq8/view"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-tan/60 px-7 py-3 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-cream hover:text-charcoal"
          >
            <BookOpen size={15} /> Menu
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
        >
          <ArrowDown className="animate-bounce" size={22} />
        </motion.div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-maroon">
              {site.cuisine}
            </p>
            <p className="mt-5 font-body text-charcoal/75 leading-relaxed">
              A cylindrical landmark on the 150 Ft. Ring Road, Cuore is a vegetarian
              fine-dining room and non-alcoholic cocktail bar — where sculptural
              pendants, a circular bar and cave-like columns frame a menu imagined
              as more than a recipe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHEF'S NOTE */}
      <ChefsNote />

      {/* INTERIOR SPLIT */}
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <Reveal>
              <div className="group relative h-[440px] overflow-hidden rounded-sm">
                <img
                  src={images.interiorPendants}
                  alt="Sculptural pendant lights"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-center bg-charcoal px-8 py-10 text-cream sm:px-12">
                <p className="font-heading text-xs uppercase tracking-[0.3em] text-tan/80">
                  The Room
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  An architecture of warmth
                </h3>
                <p className="mt-5 font-body text-cream/75 leading-relaxed">
                  Layered conical pendants hang at varying heights above a central
                  circular bar. Sand-toned columns flare into the ceiling like a
                  nomadic tent, while circular windows pour daylight across textured
                  plaster walls.
                </p>
                <Link
                  to="/experience"
                  className="mt-7 inline-flex w-fit items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-tan transition-colors hover:text-cream"
                >
                  Explore the experience →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal className="text-center">
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-maroon">
              Beyond the table
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-charcoal">
              Evenings at Cuore
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[images.interiorBar, images.banquet, images.interiorPendants].map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative h-72 overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt="Cuore experience"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full border border-maroon px-7 py-3 font-heading text-xs uppercase tracking-[0.2em] text-maroon transition-all hover:bg-maroon hover:text-cream"
            >
              View all hosted events
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}