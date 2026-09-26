import React, { useState } from "react";
import { site } from "@/lib/siteData";
import Reveal from "@/components/Reveal";
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", date: "", guests: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Reservation request at Cuore by Masala Diaries%0D%0A%0D%0AName: ${encodeURIComponent(
      form.name
    )}%0D%0APreferred date: ${encodeURIComponent(form.date)}%0D%0AGuests: ${encodeURIComponent(
      form.guests
    )}%0D%0AMessage: ${encodeURIComponent(form.message)}`;
    window.location.href = `sms:${site.phoneRaw}?&body=${body}`;
    setSent(true);
  };

  return (
    <div className="overflow-hidden bg-cream pt-24">
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-maroon">
              Reservations · {site.reservation}
            </p>
            <h1 className="mt-3 font-display text-5xl text-charcoal sm:text-6xl">
              Visit Cuore
            </h1>
            <p className="mt-5 font-body text-charcoal/70 leading-relaxed">
              We welcome guests daily from 11 AM to 11 PM, by reservation only.
              Call us — the table is yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-2">
          {/* DETAILS */}
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-sm border border-maroon/10 bg-cream p-7">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-maroon" size={22} strokeWidth={1.5} />
                  <div>
                    <p className="font-heading text-xs uppercase tracking-[0.2em] text-maroon">
                      Address
                    </p>
                    <p className="mt-2 font-body text-charcoal/80 leading-relaxed">
                      {site.address.line1} {site.address.line2} {site.address.city}
                    </p>
                    <a
                      href={site.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex font-heading text-[11px] uppercase tracking-[0.18em] text-maroon hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-maroon/10 bg-cream p-7">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-maroon" size={22} strokeWidth={1.5} />
                  <div>
                    <p className="font-heading text-xs uppercase tracking-[0.2em] text-maroon">
                      Reservations
                    </p>
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="mt-2 block font-display text-2xl text-charcoal hover:text-maroon"
                    >
                      {site.phone}
                    </a>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.18em] text-maroon hover:underline"
                    >
                      <MessageCircle size={13} /> Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-maroon/10 bg-cream p-7">
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-maroon" size={22} strokeWidth={1.5} />
                  <div>
                    <p className="font-heading text-xs uppercase tracking-[0.2em] text-maroon">
                      Hours
                    </p>
                    <p className="mt-2 font-body text-charcoal/80">{site.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-maroon/15 py-4 font-heading text-[11px] uppercase tracking-[0.18em] text-charcoal transition-all hover:bg-maroon hover:text-cream"
                >
                  <Instagram size={16} /> Instagram
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-maroon/15 py-4 font-heading text-[11px] uppercase tracking-[0.18em] text-charcoal transition-all hover:bg-maroon hover:text-cream"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>
          </Reveal>

          {/* MAP + FORM */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-sm border border-maroon/10">
                <iframe
                  title="Cuore by Masala Diaries on Google Maps"
                  src={site.mapsEmbed}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>

              <form
                onSubmit={onSubmit}
                className="flex-1 rounded-sm border border-maroon/10 bg-cream p-7"
              >
                <p className="font-display text-2xl text-charcoal">Request a table</p>
                <p className="mt-1 font-body text-sm text-charcoal/60">
                  This opens your phone&rsquo;s message app pre-filled to our
                  reservation line.
                </p>
                <div className="mt-5 space-y-4">
                  <input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-maroon/20 bg-transparent py-2.5 font-body text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-maroon"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full border-b border-maroon/20 bg-transparent py-2.5 font-body text-charcoal outline-none focus:border-maroon"
                    />
                    <input
                      placeholder="Guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full border-b border-maroon/20 bg-transparent py-2.5 font-body text-charcoal outline-none placeholder:text-charcoal/40 focus:border-maroon"
                    />
                  </div>
                  <textarea
                    placeholder="A note (optional)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none border-b border-maroon/20 bg-transparent py-2.5 font-body text-charcoal outline-none placeholder:text-charcoal/40 focus:border-maroon"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-maroon py-3.5 font-heading text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-maroon-dark"
                >
                  {sent ? "Opening messages…" : "Send request"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}