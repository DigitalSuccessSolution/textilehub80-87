import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Bell, FileText, ChevronDown, ChevronUp, Download, Calendar } from "lucide-react";

const circulars = [
  {
    id: "CIR-2026-018",
    title: "Summer Collection 2026 – Advance Booking Now Open",
    date: "08 Jun 2026",
    category: "Product Launch",
    excerpt: "We are pleased to announce early access bookings for our exclusive Summer Collection 2026. Premium cotton and linen varieties available in 60+ colour options.",
    body: "Kaaya Fabrics is proud to launch our most anticipated Summer Collection 2026, featuring 120+ premium fabric varieties in cotton, linen, and cotton-linen blends. Advance booking is now open for all registered trade partners with a minimum order of 100 meters. Special early-bird pricing valid until 20 June 2026. Contact your dedicated trade manager or write to trade@api.example.com for the full catalogue.",
    hasAttachment: true,
  },
  {
    id: "CIR-2026-017",
    title: "Updated GST Invoice Format – Effective 1 June 2026",
    date: "28 May 2026",
    category: "Compliance",
    excerpt: "In accordance with GST council guidelines, all invoices issued from 01 June 2026 onwards will follow the revised format.",
    body: "All wholesale and retail invoices will now include the updated HSN code fields and e-invoice QR codes as mandated by GSTN. Customers are advised to ensure their ERP systems are compatible with the new format. For assistance, contact accounts@api.example.com.",
    hasAttachment: false,
  },
  {
    id: "CIR-2026-016",
    title: "Showroom Renovation – Temporary Floor Closure (F3)",
    date: "20 May 2026",
    category: "Operations",
    excerpt: "Floor 3 of our main showroom will remain closed for renovation from 22 May to 05 June 2026. All saree collections temporarily moved to Floor 2.",
    body: "We regret the inconvenience caused due to planned renovation activities on Floor 3. All product categories from Floor 3 have been relocated temporarily to Floor 2. Our staff will be available to assist you throughout this period. We expect the renovated floor to reopen by 06 June 2026 with enhanced display infrastructure.",
    hasAttachment: false,
  },
  {
    id: "CIR-2026-015",
    title: "Payment Policy Update – Trade Credit Terms",
    date: "10 May 2026",
    category: "Finance",
    excerpt: "Revised credit and payment terms for B2B trade accounts, effective from 01 June 2026.",
    body: "Following a review of our trade credit policies, the following updated terms will apply from 01 June 2026: standard credit period extended to 45 days for Silver and above tier partners; new credit limit enhancement process available online; all PDC payments to be replaced by NACH mandates. Please contact your account manager for account-specific details.",
    hasAttachment: true,
  },
];

const categoryColors = {
  "Product Launch": "bg-brand-emerald-dark text-brand-gold",
  "Compliance": "bg-brand-charcoal/10 text-brand-charcoal",
  "Operations": "bg-brand-terracotta/10 text-brand-terracotta",
  "Finance": "bg-brand-gold/20 text-brand-gold-dark",
};

const Circular = () => {
  useSEO({ title: "Circulars | Kaaya Fabrics", description: "Official company circulars, notices, and announcements from Kaaya Fabrics." });
  const [expanded, setExpanded] = useState(null);

  const filtered = circulars;

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">Official Communications</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Company Circulars
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Stay informed with the latest official announcements, policy updates, and operational notices.
          </p>
        </div>

        {/* Circular List */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-brand-charcoal/40 bg-white border border-brand-emerald-accent/5 rounded-xl shadow-sm">
              <Bell size={32} className="mx-auto mb-3 opacity-40 text-brand-gold" />
              <p className="text-xs uppercase font-bold tracking-widest">No circulars found.</p>
            </div>
          )}
          {filtered.map(c => (
            <div key={c.id} className="bg-white border border-brand-emerald-accent/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <button
                className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                onClick={() => setExpanded(expanded === c.id ? null : c.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-linen rounded-xl mt-0.5"><FileText size={18} className="text-brand-gold" /></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xl ${categoryColors[c.category]}`}>{c.category}</span>
                      <span className="text-[10px] text-brand-charcoal/40 flex items-center gap-1 font-bold uppercase tracking-wider"><Calendar size={11} className="text-brand-gold" /> {c.date}</span>
                      <span className="text-[10px] text-brand-charcoal/40 font-mono">{c.id}</span>
                    </div>
                    <p className="text-base font-serif font-bold text-brand-charcoal uppercase tracking-wide">{c.title}</p>
                    <p className="text-xs text-brand-charcoal/60 font-sans leading-relaxed font-light">{c.excerpt}</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-3 flex-shrink-0">
                  {c.hasAttachment && (
                    <span className="text-[9px] text-brand-gold flex items-center gap-1 font-black uppercase tracking-widest"><Download size={12} /> PDF</span>
                  )}
                  {expanded === c.id ? <ChevronUp size={18} className="text-brand-charcoal/40" /> : <ChevronDown size={18} className="text-brand-charcoal/40" />}
                </div>
              </button>
              {expanded === c.id && (
                <div className="border-t border-brand-linen-dark px-6 md:px-16 py-6 bg-brand-linen/30 text-left">
                  <p className="text-xs md:text-sm text-brand-charcoal/80 leading-relaxed font-sans font-light">{c.body}</p>
                  {c.hasAttachment && (
                    <button className="mt-4 flex items-center gap-2 text-[9px] font-black text-brand-gold hover:text-brand-charcoal uppercase tracking-widest transition-colors cursor-pointer">
                      <Download size={14} /> Download Attachment (PDF)
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Circular;
