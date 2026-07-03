import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Gavel, Clock, Calendar, AlertCircle } from "lucide-react";

const mockAuctions = [
  {
    id: "AUC-2026-001",
    item: "Exclusive Banarasi Silk Lot – 50 Sarees",
    desc: "A premium assortment of hand-woven Banarasi silk sarees, featuring detailed zari borders, traditional motifs, and rich festive colors.",
    date: "Closing: 17 Jun 2026",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop",
    status: "Live",
  },
  {
    id: "AUC-2026-002",
    item: "Premium Woollen Suiting Fabric – 800 meters",
    desc: "High-grade Italian blend wool fabric rolls in charcoal, navy, and black, perfect for custom blazers and business uniforms.",
    date: "Closing: 20 Jun 2026",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
    status: "Live",
  },
  {
    id: "AUC-2026-003",
    item: "Pure Kanjivaram Silk – 30 Sarees",
    desc: "Exquisite pure mulberry silk Kanjivaram sarees with heavy golden brocade, originating directly from weavers.",
    date: "Ended: 04 Jun 2026",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop",
    status: "Closed",
  },
];

const Auction = () => {
  useSEO({ title: "e-Auction | Kaaya Fabrics", description: "Participate in live B2B textile auctions for exclusive fabric lots." });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? mockAuctions : mockAuctions.filter(a => a.status === filter);

  return (
    <div className="pt-20 min-h-screen bg-brand-linen pb-20 text-brand-charcoal">
      {/* Header Banner */}
      <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
            Live Auctions
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
            e-Auction
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-12">


        {/* Filter */}
        <div className="flex gap-2 mb-8">
          {["All", "Live", "Closed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer ${filter === f
                  ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark"
                  : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Auction Cards */}
        <div className="grid gap-6">
          {filtered.map(auction => (
            <div
              key={auction.id}
              className={`bg-white border overflow-hidden transition-all rounded-xl text-left flex flex-col md:flex-row items-stretch ${auction.status === "Live" ? "border-brand-gold shadow-md" : "border-brand-linen-dark"
                }`}
            >
              {/* Card Image */}
              <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden bg-brand-linen flex-shrink-0">
                <img
                  src={auction.img}
                  alt={auction.item}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[10px] text-brand-gold font-mono">{auction.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${auction.status === "Live"
                        ? "bg-brand-emerald-dark text-brand-gold"
                        : "bg-brand-linen-dark/50 text-brand-charcoal/40"
                      }`}>
                      {auction.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-charcoal leading-snug mb-2">{auction.item}</h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed font-sans font-light mb-4">{auction.desc}</p>
                </div>

                <div className="border-t border-brand-linen-dark/60 pt-4 flex flex-wrap justify-between items-center gap-4">
                  <span className="text-[10px] text-brand-charcoal/50 flex items-center gap-1 font-bold">
                    <Clock size={11} className="text-brand-gold" /> {auction.date}
                  </span>

                  {auction.status === "Live" ? (
                    <a
                      href="/trade-enquiry"
                      className="inline-flex items-center gap-2 bg-[#800834] hover:bg-[#800834]/85 text-white px-5 py-2.5 rounded-xl text-[9px] font-black tracking-widest transition-all cursor-pointer focus:outline-none"
                    >
                      <Gavel size={13} className="text-brand-gold" /> Bid Registration
                    </a>
                  ) : (
                    <span className="text-brand-charcoal/40 text-[9px] font-black tracking-widest">Ended</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
