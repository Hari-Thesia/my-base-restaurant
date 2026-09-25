import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { nav, site } from "@/lib/siteData";
import { Menu, X } from "lucide-react";

const HERO_ROUTES = ["/", "/experience"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Light (cream) text when we sit over a dark hero image; dark otherwise.
  const overHero = HERO_ROUTES.includes(pathname);
  const light = overHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `relative font-heading text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
      isActive
        ? "text-tan"
        : light
          ? "text-cream/85 hover:text-tan"
          : "text-charcoal/70 hover:text-maroon"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(128,0,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={site.logo}
            alt="Cuore by Masala Diaries"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-tan/40"
          />
          <span
            className={`hidden font-display text-xl font-semibold tracking-wide sm:block ${
              light ? "text-cream" : "text-charcoal"
            }`}
          >
            Cuore<span className="text-maroon"> · </span>
            <span
              className={`font-heading text-xs uppercase tracking-[0.3em] ${
                light ? "text-cream/70" : "text-charcoal/60"
              }`}
            >
              Masala Diaries
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass} end={item.path === "/"}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="rounded-full bg-maroon px-5 py-2.5 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-maroon-dark"
          >
            Reserve
          </a>
        </div>

        <button
          className={`md:hidden ${light ? "text-cream" : "text-charcoal"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-cream/97 backdrop-blur-md transition-all duration-500 ${
          open ? "max-h-[80vh] border-t border-maroon/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 font-heading text-sm uppercase tracking-[0.2em] ${
                  isActive ? "text-maroon" : "text-charcoal/75"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-2 rounded-full bg-maroon px-5 py-3 text-center font-heading text-xs uppercase tracking-[0.2em] text-cream"
          >
            Reserve · {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}