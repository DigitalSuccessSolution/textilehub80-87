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
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Customer Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Frequently<br />
              <span className="text-[#C29E6B] font-light italic">Asked</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
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
            <div key={idx} className="bg-white border border-[#2E081B]/10 rounded-3xl overflow-hidden shadow-md">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left text-[#2E081B] hover:bg-stone-50 transition-colors font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={14} className="text-[#C29E6B]" /> : <ChevronDown size={14} className="text-[#C29E6B]" />}
              </button>
              
              {openIdx === idx && (
                <div className="px-6 pb-5 pt-1 text-stone-500 leading-relaxed font-sans font-light border-t border-stone-100">
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
