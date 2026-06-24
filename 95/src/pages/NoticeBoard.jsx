import React from "react";
import useSEO from "../hooks/useSEO";
import { AlertTriangle, Info, Calendar, ShieldCheck, Bell } from "lucide-react";

const NoticeBoard = () => {
  useSEO("Notice Board", "Read official updates, public notices, and holiday announcements from Retail Textile Mall.");

  const notices = [
    {
      id: 1,
      category: "renovation",
      date: "June 14, 2026",
      title: "Showroom Refurbishment Notice",
      content: "Please note that our second floor (Home Furnishing & Upholstery section) will be closed for a visual layout upgrade on June 18th from 10:00 AM to 2:00 PM. Ground and first floor clothing categories will remain operational normally.",
      icon: <Info className="w-5 h-5 text-amber-600" />,
      colorClass: "border-amber-500/30 bg-amber-500/5"
    },
    {
      id: 2,
      category: "operations",
      date: "June 01, 2026",
      title: "Monsoon Sourcing Calendar",
      content: "Showroom store operational counters will follow standard timings during the monsoon season. Our online trade desk and e-Quotation forms remain online 24/7 for processing all merchant orders.",
      icon: <Bell className="w-5 h-5 text-brand-lavender" />,
      colorClass: "border-brand-lavender/30 bg-brand-lavender/5"
    },
    {
      id: 3,
      category: "security",
      date: "May 20, 2026",
      title: "Security Advisor: Fraud Emails",
      content: "All trade desk partners are requested to verify incoming dispatch emails. Official communication only originates from @retailtextilemall.com domain emails. Do not pay invoices from external domains.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      colorClass: "border-emerald-500/30 bg-emerald-500/5"
    }
  ];
 
  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Public Notifications
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Notice Board
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>
 
      {/* ── Dashboard Grid (Masonry effect on desktop) ── */}
      <section className="py-16 px-6 sm:px-10 max-w-6xl mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {notices.map((n) => (
            <div 
              key={n.id} 
              className={`border rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-500 ${n.colorClass}`}
            >
              <div className="flex justify-between items-start mb-4">
                {/* Category Icon */}
                <div className="p-2.5 bg-brand-light border border-brand-gold/15 rounded-2xl flex items-center justify-center shadow-md shrink-0">
                  {n.icon}
                </div>
                
                {/* Category Badge */}
                <span className="text-[8px] uppercase tracking-widest font-black text-brand-lavender bg-brand-lavender/10 px-2.5 py-1 rounded-full">
                  {n.category}
                </span>
              </div>

              {/* Title & Date */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-stone-400 text-[10px] font-sans">
                  <Calendar size={12} />
                  <span>{n.date}</span>
                </div>
                
                <h3 className="font-serif text-sm font-bold uppercase text-brand-plum tracking-wider leading-snug">
                  {n.title}
                </h3>
                
                <div className="w-8 h-px bg-brand-gold/40" />
                
                <p className="text-stone-500 text-xs font-sans leading-relaxed font-light">
                  {n.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;
