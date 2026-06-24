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
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Public Notices</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Notice<br />
              <span className="text-[#C29E6B] font-light italic">Board</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Important announcements, holiday listings, and security advisories from our management team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto text-left">

        {/* Notices */}
        <div className="space-y-6">
          {notices.map((n) => (
            <div key={n.id} className="bg-white border border-[#2E081B]/10 rounded-3xl p-6 shadow-md flex gap-4 items-start hover:border-[#C29E6B]/40 transition-colors">
              <div className="p-2.5 bg-[#C29E6B]/10 text-[#C29E6B] rounded-full shrink-0">
                <AlertCircle size={18} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 text-xs font-sans">
                  <Calendar size={12} />
                  <span>{n.date}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#2E081B] uppercase tracking-wide leading-tight">{n.title}</h3>
                <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">{n.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;
