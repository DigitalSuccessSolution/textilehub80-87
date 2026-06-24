import React from "react";
import useSEO from "../hooks/useSEO";
import { Megaphone, Calendar, ExternalLink, AlertCircle, Info, CheckCircle } from "lucide-react";

const notices = [
  {
    id: "NB-2026-012",
    title: "Extended Store Hours – Festive Season",
    date: "08 Jun 2026",
    type: "Announcement",
    icon: Megaphone,
    borderClass: "border-l-4 border-l-brand-gold",
    badgeClass: "bg-brand-emerald-dark text-brand-gold",
    body: "All showroom floors will remain open until 10:00 PM daily from 12 June to 20 June 2026 in observance of the festive season. Additional staff deployed across all counters.",
  },
  {
    id: "NB-2026-011",
    title: "New Parking Arrangement at Main Gate",
    date: "05 Jun 2026",
    type: "Notice",
    icon: AlertCircle,
    borderClass: "border-l-4 border-l-brand-terracotta",
    badgeClass: "bg-brand-terracotta/20 text-brand-terracotta",
    body: "Due to road widening work near the main entrance, customer parking has been temporarily shifted to the rear parking facility (Gate B, 2nd entrance). Signage has been placed for easy navigation. The arrangement is effective from 06 June 2026 until further notice.",
  },
  {
    id: "NB-2026-010",
    title: "Kaaya Fabrics Wins 'Best Textile Retailer' at National Trade Expo",
    date: "01 Jun 2026",
    type: "Press Release",
    icon: CheckCircle,
    borderClass: "border-l-4 border-l-brand-emerald-accent",
    badgeClass: "bg-brand-emerald-accent/20 text-brand-emerald-dark",
    body: "We are honoured to announce that Kaaya Fabrics has been awarded the prestigious 'Best Textile Retailer of the Year 2026' at the National Trade & Textile Expo held in New Delhi. This recognition reflects our commitment to quality, innovation, and customer service. We thank our valued customers and trade partners for their continued trust.",
    link: "#",
  },
  {
    id: "NB-2026-009",
    title: "Stock Clearance – Up to 40% Off Selected Items",
    date: "25 May 2026",
    type: "Announcement",
    icon: Info,
    borderClass: "border-l-4 border-l-brand-gold",
    badgeClass: "bg-brand-emerald-dark text-brand-gold",
    body: "Stock clearance sale now on! Avail discounts of 20%–40% on select fabric categories including polyester blends, printed cotton, and ready-made garments. Offer valid in-store and online from 25 May to 05 June 2026. While stocks last.",
  },
  {
    id: "NB-2026-008",
    title: "Water Supply Interruption – 03 Jun 2026 (10 AM – 2 PM)",
    date: "01 Jun 2026",
    type: "Notice",
    icon: AlertCircle,
    borderClass: "border-l-4 border-l-brand-terracotta",
    badgeClass: "bg-brand-terracotta/20 text-brand-terracotta",
    body: "Scheduled municipal water supply maintenance will affect water availability at our premises from 10:00 AM to 2:00 PM on 03 June 2026. Adequate water reserves have been arranged. Inconvenience is regretted.",
  },
];

const NoticeBoard = () => {
  useSEO({ title: "Notice Board | Kaaya Fabrics", description: "Public notices, press releases, and official announcements from Kaaya Fabrics." });

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal text-left">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">Public Notices</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Notice Board
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Official press releases, seasonal announcements, and operational notices from Kaaya Fabrics.
          </p>
        </div>

        {/* Notice List */}
        <div className="space-y-5">
          {notices.map(n => {
            const Icon = n.icon;
            return (
              <div key={n.id} className={`bg-white border-y border-r border-brand-emerald-accent/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${n.borderClass}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-linen/60 flex-shrink-0 mt-0.5 text-brand-gold">
                    <Icon size={18} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xl ${n.badgeClass}`}>{n.type}</span>
                        <span className="text-[10px] text-brand-charcoal/40 font-mono">{n.id}</span>
                      </div>
                      <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                        <Calendar size={11} className="text-brand-gold" /> {n.date}
                      </span>
                    </div>
                    <h2 className="text-lg font-serif font-bold text-brand-charcoal uppercase tracking-wide mb-2">{n.title}</h2>
                    <p className="text-xs md:text-sm leading-relaxed text-brand-charcoal/70 font-sans font-light">{n.body}</p>
                    {n.link && (
                      <a href={n.link} className="inline-flex items-center gap-1.5 mt-4 text-[9px] font-black text-brand-gold hover:text-brand-charcoal uppercase tracking-widest transition-colors">
                        <ExternalLink size={12} /> Read Full Press Release
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-xs text-brand-charcoal/40 text-center mt-12 font-bold uppercase tracking-wider">
          For media enquiries, contact: <a href="mailto:media@retailtextile.com" className="text-brand-gold hover:underline">media@retailtextile.com</a>
        </p>
      </div>
    </section>
  );
};

export default NoticeBoard;
