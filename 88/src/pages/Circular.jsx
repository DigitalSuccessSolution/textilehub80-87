import React from "react";
import useSEO from "../hooks/useSEO";
import { FileText, Download, Calendar } from "lucide-react";

const Circular = () => {
  useSEO("Trade Circulars", "Read official trade circulars and policy updates for retail textile merchants at Aurora Textile House.");

  const circulars = [
    {
      id: 1,
      title: "GST Rate Restructuring on Handloom Sarees",
      ref: "ATH/TC/2026/089",
      date: "June 10, 2026",
      desc: "Detailed circular regarding the implementation of the updated taxation slabs on hand-weaved pure silk segments."
    },
    {
      id: 2,
      title: "Updated Credit terms for Wholesalers & Exporters",
      ref: "ATH/TC/2026/087",
      date: "May 25, 2026",
      desc: "Information detailing billing guidelines, discount structures, and credit cycles for the FY 2026-27."
    },
    {
      id: 3,
      title: "Monsoon Trade Fair Showcase Invitation",
      ref: "ATH/TC/2026/083",
      date: "May 12, 2026",
      desc: "Notice of our upcoming designer expo in Kolkata featuring winter/monsoon ethnic suiting and shirting catalogs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Merchant Communications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Trade<br />
              <span className="text-[#C29E6B] font-light italic">Circulars</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Official business updates, tax guidelines, and logistics circulars for our registered business partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">

        {/* Circulars List */}
        <div className="space-y-6">
          {circulars.map((circ) => (
            <div key={circ.id} className="bg-white rounded-3xl border border-[#2E081B]/10 p-6 flex items-start gap-5 shadow-md hover:border-[#C29E6B]/30 transition-all duration-300">
              <div className="p-3 bg-[#2E081B] text-[#C29E6B] rounded-2xl flex-shrink-0">
                <FileText size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C29E6B]">{circ.ref}</span>
                  <span className="text-stone-300 text-[10px]">•</span>
                  <span className="text-xs text-stone-400 font-sans flex items-center gap-1"><Calendar size={11} /> {circ.date}</span>
                </div>
                <h3 className="font-serif text-base md:text-lg font-bold text-[#2E081B] mb-2 leading-snug">{circ.title}</h3>
                <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">{circ.desc}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert("Opening PDF Document in browser view...")}
                    className="flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-wider text-[#9C4B6E] hover:text-white border border-[#C29E6B]/30 hover:bg-[#9C4B6E] px-3.5 py-1.5 rounded-full bg-[#FAF5F0]/40 cursor-pointer shadow-sm font-sans transition-colors"
                  >
                    View PDF
                  </button>
                  <button
                    onClick={() => alert("Initiating PDF Print dialog...")}
                    className="flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-wider text-stone-500 hover:text-white border border-stone-200 hover:bg-stone-500 px-3.5 py-1.5 rounded-full bg-[#FAF5F0]/40 cursor-pointer shadow-sm font-sans transition-colors"
                  >
                    Print PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Circular;
