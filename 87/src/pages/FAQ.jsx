import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  useSEO("FAQ", "Read frequently asked questions about bulk ordering, custom styling, shipping, and store details at Aurora Textile House.");
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Where is the showroom located, and what are the operational hours?",
      a: "Our boutique retail showroom is located in Surat, Gujarat, India. We operate Monday through Saturday, from 10:00 AM to 8:00 PM. Our B2B e-quotation portal accepts online requests 24/7."
    },
    {
      q: "What is the minimum order quantity (MOQ) for B2B wholesale pricing?",
      a: "Minimum order quantities vary by product category. Generally, fabric rolls (suiting/shirting/upholstery) require a 50-meter MOQ per design, while sarees require a minimum of 10-20 pieces per lot. Complete the Trade Enquiry form to verify specific items."
    },
    {
      q: "How does the e-auction portal work, and how can we place active bids?",
      a: "The e-auction page displays live surplus fabric rolls and cleared stock lots. Registered merchants can enter their bids in the input field. Bids must be higher than the current active bid to be processed."
    },
    {
      q: "Are custom dimensions available for curtains and home upholstery?",
      a: "Yes! Our design and sourcing teams accommodate custom lengths and stitching requests for residential and commercial spaces. Please specify dimensions on our e-quotation request sheet."
    },
    {
      q: "Is the digital portal secure, and does it hold SSL certification?",
      a: "Yes! Our entire database and website use industry-standard 256-bit SSL secure socket layers to encrypt your trade details, registration data, and communication records."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-20">
      {/* Hero Header */}
      <section className="pt-40 pb-16 bg-[#FAF6F2] border-b border-[#10211F]/10 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-left relative flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-[8px]">✦</span>
              <span className="text-[9px] font-sans font-bold  tracking-[0.3em] text-[#2C443E]">
                Customer Support
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-14 bg-[#C29E6B] rounded-full shrink-0" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight  text-[#10211F] leading-none">
                FAQ
              </h1>
            </div>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/30 pl-6 py-2">
            <p className="text-stone-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Quick answers regarding bulk trade accounts, shipping, e-auctions, and boutique collection updates.
            </p>
          </div>
          
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto text-left">

        {/* Accordions */}
        <div className="space-y-4 font-sans text-xs">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#C29E6B]/50 transition-colors duration-300">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4.5 flex justify-between items-center text-left text-[#10211F] hover:bg-[#FAF6F2]/40 transition-colors font-bold  tracking-wider cursor-pointer"
              >
                <span className="pr-4">{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={14} className="text-[#C29E6B]" /> : <ChevronDown size={14} className="text-[#C29E6B]" />}
              </button>
              
              {openIdx === idx && (
                <div className="px-6 pb-5 pt-2 text-stone-500 leading-relaxed font-sans font-light border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
