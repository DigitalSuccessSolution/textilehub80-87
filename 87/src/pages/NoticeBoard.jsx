import React from "react";
import useSEO from "../hooks/useSEO";
import { AlertCircle, Calendar } from "lucide-react";

const NoticeBoard = () => {
  useSEO("Notice Board", "Read official updates, public notices, and holiday announcements from Aurora Textile House.");

  const notices = [
    {
      id: 1,
      date: "June 14, 2026",
      title: "Store Maintenance Notice",
      content: "Please note that our second floor (Home Furnishing & Upholstery) will be closed for visual renovation on June 18th from 10:00 AM to 2:00 PM. Ground and first floors will operate normally."
    },
    {
      id: 2,
      date: "June 01, 2026",
      title: "Seasonal Holiday Operations",
      content: "Showroom operating hours will remain standard during the monsoon season. Registered B2B trade desk operations will continue 24/7 online via our e-quotation portal."
    },
    {
      id: 3,
      date: "May 20, 2026",
      title: "Notice regarding fake email accounts",
      content: "All trade partners are requested to verify the domain name on incoming emails. Our official email communications only originate from @auroratextile.com domains."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] block">
              PUBLIC BROADCASTS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-none">
              Notice Board
            </h1>
          </div>
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Important announcements, holiday listings, and security advisories from our management team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notices.map((n, idx) => (
            <div 
              key={n.id} 
              className={`bg-white border border-stone-200 hover:border-[#C29E6B] rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${
                idx === 2 ? "md:col-span-2" : ""
              }`}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-stone-200 group-hover:bg-[#C29E6B] transition-colors" />

              <div className="space-y-4 pl-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-stone-400 text-[9px] font-sans font-semibold  tracking-wider">
                    <Calendar size={11} className="text-[#C29E6B]" />
                    <span>{n.date}</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29E6B] group-hover:scale-125 transition-transform" />
                </div>
                
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#10211F]  tracking-wide leading-tight group-hover:text-[#2C443E] transition-colors">
                  {n.title}
                </h3>
                <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                  {n.content}
                </p>
              </div>

              <div className="pl-2 pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[8px] font-sans font-bold  tracking-wider text-stone-400">
                <span>ATH Official Notice</span>
                <span>ID: #00{n.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;
