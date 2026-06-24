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
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-[#C29E6B] block">
              MERCHANT CHANNELS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight uppercase text-white leading-none">
              <span className="lowercase" style={{ textTransform: 'lowercase' }}>e-Circular</span>
            </h1>
          </div>
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Official business updates, tax guidelines, and logistics circulars for our registered business partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Grid layout of folder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {circulars.map((circ, idx) => (
            <div 
              key={circ.id} 
              className="bg-white rounded-tl-[3.5rem] rounded-tr-[1rem] rounded-b-[2rem] p-8 border border-stone-200 hover:border-[#C29E6B] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-left group min-h-[360px]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#C29E6B] bg-[#FAF4EE] px-3.5 py-1.5 rounded-full border border-[#C29E6B]/15">
                    {circ.ref}
                  </span>
                  <div className="p-2.5 bg-[#FAF6F2] text-[#10211F] rounded-xl group-hover:bg-[#10211F] group-hover:text-white transition-all duration-300 border border-stone-200/50">
                    <FileText size={16} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[9px] text-stone-400 font-sans font-semibold uppercase tracking-wider">
                    <Calendar size={11} className="text-[#C29E6B]" />
                    <span>{circ.date}</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#10211F] uppercase tracking-wider leading-snug group-hover:text-[#2C443E] transition-colors">
                    {circ.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-sans font-light leading-relaxed pt-1">
                    {circ.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-6">
                <button
                  onClick={() => alert("Downloading PDF Notice...")}
                  className="w-full flex items-center justify-center gap-2 text-[9px] font-sans font-bold uppercase tracking-widest text-white bg-[#10211F] hover:bg-[#C29E6B] py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Download size={12} /> Download PDF Notice
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
