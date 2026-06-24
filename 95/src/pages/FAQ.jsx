import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { ChevronDown, ChevronUp, HelpCircle, Store, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  useSEO("FAQ", "Read frequently asked questions about bulk ordering, custom styling, shipping, and store details at Retail Textile Mall.");
  const [openIdx, setOpenIdx] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'showroom', 'procure'

  const faqs = [
    {
      q: "Where is the showroom located, and what are the operational hours?",
      a: "Our boutique retail showroom is located in Kolkata, West Bengal, India. We operate Monday through Saturday, from 10:00 AM to 8:00 PM. Our B2B e-Quotation portal accepts online requests 24/7.",
      category: "showroom"
    },
    {
      q: "What is the minimum order quantity (MOQ) for B2B wholesale pricing?",
      a: "Minimum order quantities vary by product category. Generally, fabric rolls (suiting/shirting/upholstery) require a 50-meter MOQ per design, while sarees require a minimum of 10-20 pieces per lot. Complete the Trade Enquiry form to verify specific items.",
      category: "procure"
    },
    {
      q: "How does the e-Auction portal work, and how can we place active bids?",
      a: "The e-Auction page displays live surplus fabric rolls and cleared stock lots. Registered merchants can enter their bids in the input field. Bids must be higher than the current active bid to be processed.",
      category: "procure"
    },
    {
      q: "Are custom dimensions available for curtains and home upholstery?",
      a: "Yes! Our design and sourcing teams accommodate custom lengths and stitching requests for residential and commercial spaces. Please specify dimensions on our e-Quotation request sheet.",
      category: "procure"
    },
    {
      q: "Is the digital portal secure, and does it hold SSL certification?",
      a: "Yes! Our entire database and website use industry-standard 256-bit SSL secure socket layers to encrypt your trade details, registration data, and communication records.",
      category: "showroom"
    }
  ];

  const filteredFaqs = faqs.filter(
    (faq) => activeTab === "all" || faq.category === activeTab
  );

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Customer Support
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              FAQ
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* ── Main Layout (Left tabs, Right content grid) ── */}
      <section className="py-16 px-6 sm:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel Filters (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 text-left">
            <h3 className="font-serif text-sm font-bold uppercase text-brand-plum tracking-wider mb-2 hidden lg:block">
              Support Categories
            </h3>
            <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 no-scrollbar shrink-0">
              <button
                onClick={() => { setActiveTab("all"); setOpenIdx(null); }}
                className={`px-5 py-3.5 rounded-2xl border text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 shrink-0 ${
                  activeTab === "all"
                    ? "bg-brand-lavender text-brand-cream border-brand-lavender shadow-lg scale-102"
                    : "bg-brand-light text-brand-plum border-brand-gold/15 hover:border-brand-lavender/50"
                }`}
              >
                <HelpCircle size={14} />
                All FAQs
              </button>
              
              <button
                onClick={() => { setActiveTab("showroom"); setOpenIdx(null); }}
                className={`px-5 py-3.5 rounded-2xl border text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 shrink-0 ${
                  activeTab === "showroom"
                    ? "bg-brand-lavender text-brand-cream border-brand-lavender shadow-lg scale-102"
                    : "bg-brand-light text-brand-plum border-brand-gold/15 hover:border-brand-lavender/50"
                }`}
              >
                <Store size={14} />
                Showroom & Security
              </button>
              
              <button
                onClick={() => { setActiveTab("procure"); setOpenIdx(null); }}
                className={`px-5 py-3.5 rounded-2xl border text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 shrink-0 ${
                  activeTab === "procure"
                    ? "bg-brand-lavender text-brand-cream border-brand-lavender shadow-lg scale-102"
                    : "bg-brand-light text-brand-plum border-brand-gold/15 hover:border-brand-lavender/50"
                }`}
              >
                <Briefcase size={14} />
                B2B Procurement
              </button>
            </div>
          </div>

          {/* Right Accordions List */}
          <div className="lg:col-span-8 w-full text-left">
            <div className="space-y-4 font-sans text-xs">
              <AnimatePresence mode="wait">
                {filteredFaqs.map((faq, idx) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-brand-light/95 border border-brand-gold/12 hover:border-brand-lavender/30 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="w-full px-6 py-4.5 flex justify-between items-center text-left text-brand-plum hover:bg-brand-cream/5 transition-colors font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span className="leading-snug pr-4">{faq.q}</span>
                      {openIdx === idx ? (
                        <ChevronUp size={14} className="text-brand-gold shrink-0" />
                      ) : (
                        <ChevronDown size={14} className="text-brand-gold shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2 text-stone-500 leading-relaxed font-sans font-light border-t border-brand-gold/10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQ;
