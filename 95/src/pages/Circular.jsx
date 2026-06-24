import React from "react";
import useSEO from "../hooks/useSEO";
import { FileText, Download, Calendar, Layers } from "lucide-react";

const Circular = () => {
  useSEO("Trade Circulars", "Read official trade circulars and policy updates for retail textile merchants at Retail Textile Mall.");

  const circulars = [
    {
      id: 1,
      title: "GST Rate Restructuring on Handloom Segments",
      ref: "RT/TC/2026/089",
      date: "June 10, 2026",
      desc: "Detailed circular explaining updated taxation slabs applied on pure silk and hand-loomed saree imports."
    },
    {
      id: 2,
      title: "Revised Credit Cycles for Wholesale Accounts",
      ref: "RT/TC/2026/087",
      date: "May 25, 2026",
      desc: "Comprehensive trade update detailing credit parameters, delayed invoice cycles, and prompt payment discounts for FY 2026-27."
    },
    {
      id: 3,
      title: "Monsoon Trade Exposition Showcase Invitation",
      ref: "RT/TC/2026/083",
      date: "May 12, 2026",
      desc: "Invitation and catalogs checklist for our boutique exposition in Kolkata, showcasing monsoon fabrics collections."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Merchant Communications
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Trade Circular
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* ── Visual Grid Layout ── */}
      <section className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {circulars.map((circ) => (
            <div 
              key={circ.id} 
              className="bg-brand-light rounded-3xl border border-brand-gold/12 p-6 flex flex-col justify-between gap-5 shadow-lg hover:border-brand-lavender/30 transition-all duration-500"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  {/* Fixed Icon contrast from bg-brand-lavender text-brand-lavender to bg-brand-lavender/10 text-brand-lavender */}
                  <div className="p-3 bg-brand-lavender/10 text-brand-lavender rounded-2xl flex-shrink-0">
                    <FileText size={20} />
                  </div>
                  
                  <span className="text-[8.5px] uppercase font-bold tracking-widest text-brand-lavender bg-brand-lavender/5 px-2.5 py-1 rounded-full border border-brand-lavender/10">
                    {circ.ref}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-400 text-[10px] font-sans">
                    <Calendar size={11} /> 
                    <span>{circ.date}</span>
                  </div>
                  
                  <h3 className="font-serif text-sm font-bold uppercase text-brand-plum tracking-wider leading-snug">
                    {circ.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                  {circ.desc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => alert("Downloading PDF Circular Document...")}
                  className="w-full flex items-center justify-center gap-1.5 text-[9px] uppercase font-bold tracking-widest text-brand-cream bg-brand-lavender hover:bg-brand-lavender-dark px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-sm font-sans"
                >
                  <Download size={11} /> Download PDF Notice
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Circular;
