import React from "react";
import { Link } from "react-router-dom";
import { site, nav } from "@/lib/siteData";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

const VENTURES_IMAGE =
  "https://media.base44.com/images/public/6aafd97e404fb5670a4ee572/d9ed84068_Screenshot2026-09-2053141PM.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={site.logo}
                alt="Cuore"
                className="h-14 w-14 rounded-full object-cover ring-1 ring-tan/40"
              />
              <div>
                <p className="font-display text-xl text-cream">Cuore</p>
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-tan/70">
                  by Masala Diaries
                </p>
              </div>
            </div>
            <p className="mt-5 font-heading text-sm italic text-tan/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-tan/60">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-cream/70 transition-colors hover:text-tan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-tan/60">
              Visit
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream/70">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-tan/80" />
                <span>
                  {site.address.line1} {site.address.line2} {site.address.city}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-tan/80" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-tan">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-tan/80" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-tan/60">
              Follow
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-tan transition-all hover:bg-tan hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-tan transition-all hover:bg-tan hover:text-charcoal"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="mt-5 font-body text-xs text-cream/50">{site.reservation}</p>
          </div>
        </div>

        {/* Our Ventures */}
        <div className="mt-14 flex justify-center">
          <div className="overflow-hidden rounded-xl bg-white px-6 py-5 shadow-sm ring-1 ring-tan/20">
            <img
              src={VENTURES_IMAGE}
              alt="Cuore by Masala Diaries and Downtown Restro Café"
              className="h-24 w-auto sm:h-28"
            />
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 text-center font-body text-xs text-cream/40">
          © {new Date().getFullYear()} Cuore by Masala Diaries · Rajkot, Gujarat · Crafted with
          intention.
        </div>
      </div>
    </footer>
  );
}