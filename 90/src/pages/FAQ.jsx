import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    category: "Products",
    q: "What fabric categories do you carry?",
    a: "We stock an extensive range including cotton, silk, linen, wool, synthetic blends, and speciality fabrics such as Banarasi silk, Kanjivaram silk, Chanderi, and handloom varieties. Our collection covers apparel fabrics, suiting/shirting, sarees, dress materials, and home textiles.",
  },
  {
    id: 2,
    category: "Products",
    q: "Do you offer fabric samples before ordering?",
    a: "Yes. Trade-registered customers can request sample swatches of up to 10 fabric types per request. Sample packs are dispatched within 3–5 business days. Please submit a Trade Enquiry to initiate a sample request.",
  },
  {
    id: 3,
    category: "B2B / Wholesale",
    q: "What is the minimum order quantity for wholesale?",
    a: "Minimum order quantities vary by fabric category. Generally: woven apparel fabrics – 50 meters, sarees/dress materials – 20 pieces, ready-made garments – 24 pieces per colour per size. Please contact our trade team for category-specific MOQs.",
  },
  {
    id: 4,
    category: "B2B / Wholesale",
    q: "How do I register as a trade buyer?",
    a: "Complete the Trade Enquiry form on our website with your business details, GSTIN, and requirements. Our trade team will verify your details and set up a trade account within 2 business days, giving you access to wholesale pricing and extended credit terms.",
  },
  {
    id: 5,
    category: "B2B / Wholesale",
    q: "Do you offer credit terms to wholesale customers?",
    a: "Yes. Trade accounts in good standing are eligible for credit periods of 30 to 60 days depending on their account tier. New trade accounts start with a 15-day credit period, which is extended based on transaction history.",
  },
  {
    id: 6,
    category: "Ordering & Delivery",
    q: "How can I place an order?",
    a: "Orders can be placed in-store at our showroom, through your assigned trade manager, or by submitting a Quotation Request on our website. For large bulk orders, we recommend calling your trade manager directly to confirm pricing and availability before finalising.",
  },
  {
    id: 7,
    category: "Ordering & Delivery",
    q: "What are your delivery timelines?",
    a: "Local delivery (Kolkata city) – 1–2 business days. Pan-India – 4–7 business days via courier. Large bulk orders may require 7–14 days depending on order size and stock availability. Custom or made-to-order items may take 3–4 weeks.",
  },
  {
    id: 8,
    category: "Ordering & Delivery",
    q: "Do you ship internationally?",
    a: "Yes, we cater to export orders. International shipments are handled on a minimum order basis and subject to applicable customs duties and export regulations. Please contact us at export@retailtextile.com for international enquiries.",
  },
  {
    id: 9,
    category: "Returns & Quality",
    q: "What is your return and exchange policy?",
    a: "We accept returns of undamaged, uncut fabric within 7 days of purchase for retail customers, provided the original packaging is intact. Ready-made garments may be exchanged (not refunded) within 3 days. Wholesale orders are final once dispatched unless there is a verified quality defect.",
  },
  {
    id: 10,
    category: "Returns & Quality",
    q: "How do you ensure fabric quality consistency?",
    a: "All incoming stock is inspected at our warehouse against predefined quality parameters including GSM, width, colour fastness, and weave integrity. We source only from certified mills and weavers with established quality track records. Trade partners may also request third-party quality certificates for premium lots.",
  },
  {
    id: 11,
    category: "Showroom & Services",
    q: "What are your showroom hours?",
    a: "Our showroom is open Monday to Saturday, 10:00 AM to 8:00 PM. We are closed on Sundays and major national holidays. Extended hours may apply during festive seasons — check our Notice Board for announcements.",
  },
  {
    id: 12,
    category: "Showroom & Services",
    q: "Do you offer design consultation services?",
    a: "Yes. Our experienced merchandise staff can assist retail customers with fabric selection, colour matching, and draping advice. For trade buyers and large orders, we offer dedicated product consultation sessions by appointment. Contact us to schedule.",
  },
];

const categories = ["All", ...new Set(faqs.map(f => f.category))];

const FAQ = () => {
  useSEO({ title: "FAQ | Kaaya Fabrics", description: "Answers to frequently asked questions about products, wholesale, orders, and policies at Kaaya Fabrics." });
  const [expanded, setExpanded] = useState(null);
  const [catFilter, setCatFilter] = useState("All");

  const filtered = faqs.filter(f =>
    catFilter === "All" || f.category === catFilter
  );

  return (
    <div className="pt-20 min-h-screen bg-brand-linen pb-20 text-brand-charcoal text-left">
      {/* Header Banner */}
      <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-105" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
            Help Centre
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 mt-12">

        {/* Category Filter */}
        <div className="flex gap-2.5 mb-8 flex-wrap">
          {categories.map(c => (
            <button 
              key={c} 
              onClick={() => setCatFilter(c)}
              className={`px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest border transition-all cursor-pointer ${
                catFilter === c 
                  ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark" 
                  : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-brand-charcoal/40 bg-white border border-brand-emerald-accent/5 rounded-xl shadow-sm">
              <HelpCircle size={32} className="mx-auto mb-3 opacity-40 text-brand-gold" />
              <p className="text-xs font-bold tracking-widest">No questions found in this category.</p>
            </div>
          )}
          {filtered.map(faq => (
            <div 
              key={faq.id} 
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                expanded === faq.id ? "border-brand-gold shadow-md" : "border-brand-linen-dark hover:border-brand-gold/40"
              }`}
            >
              <button
                className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-brand-gold mt-0.5 flex-shrink-0"><HelpCircle size={16} /></span>
                  <p className="text-sm font-serif font-bold text-brand-charcoal leading-snug">{faq.q}</p>
                </div>
                <span className="flex-shrink-0 mt-0.5 text-brand-charcoal/40">
                  {expanded === faq.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {expanded === faq.id && (
                <div className="px-6 pb-6 pt-0 ml-7 border-t border-brand-linen/40 pt-4 text-left">
                  <p className="text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-sans font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-white border border-brand-emerald-accent/5 rounded-xl p-8 shadow-sm">
          <p className="text-lg font-serif font-bold text-brand-emerald-dark mb-2">Still have questions?</p>
          <p className="text-brand-charcoal/60 text-xs font-sans font-light mb-6">Our team is ready to assist you with any specific queries.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white text-[10px] font-black tracking-widest rounded-xl transition-all text-center"
            >
              Contact Us
            </a>
            <a 
              href="/trade-enquiry" 
              className="px-6 py-3 border border-brand-linen-dark text-brand-charcoal hover:border-brand-gold text-[10px] font-black tracking-widest rounded-xl transition-all text-center"
            >
              Trade Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
