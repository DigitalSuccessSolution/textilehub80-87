import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('General');

  const categories = ['General', 'B2B Portal', 'Shipping', 'Returns'];

  const faqs = {
    'General': [
      { q: "What is Texmart's core business model?", a: "We are a premier B2B textile retail mall bridging the gap between mills and retailers. We specialize in bulk trading of ethnic wear, suitings, shirtings, and home furnishings." },
      { q: "Where are you located?", a: "Our headquarters and primary warehouse are located in the Surat Textile Hub, Gujarat, India. We supply Pan India and internationally." },
      { q: "Do you sell directly to consumers (B2C)?", a: "No, Texmart operates exclusively on a B2B model, catering to wholesalers, boutique owners, and retail chains." }
    ],
    'B2B Portal': [
      { q: "How does the e-Quotation system work?", a: "Once registered, you can browse collections, select volumes, and instantly generate a PDF quotation valid for 72 hours via our automated engine." },
      { q: "What is the Live e-Auction?", a: "Our e-Auction platform allows verified buyers to bid on premium surplus lots and factory direct releases in real-time, securing the best market rates." },
      { q: "How do I get an RMS (Retail Management System) account?", a: "RMS access is granted to long-term partners with a minimum quarterly order volume. Contact your account manager for provisioning." }
    ],
    'Shipping': [
      { q: "What are your delivery timelines?", a: "Standard dispatch takes 24-48 hours. Pan-India delivery typically takes 3-7 business days depending on the logistics partner and location." },
      { q: "Do you offer international shipping?", a: "Yes, we handle export documentation and international freight for bulk orders. Timelines vary by destination." }
    ],
    'Returns': [
      { q: "What is your return policy for wholesale orders?", a: "Returns are only accepted in cases of manufacturing defects or incorrect dispatch. Claims must be filed within 7 days of delivery with proper photographic evidence." },
      { q: "How are refunds processed?", a: "Approved returns are typically credited to your Texmart Ledger against future purchases, or refunded to the original payment method within 14 working days." }
    ]
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Find answers to common queries about our products, shipping, and B2B services.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-4xl">
        
        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="flex overflow-x-auto w-full pb-4 hide-scrollbar gap-3 snap-x">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all snap-start shrink-0 ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          {faqs[activeCategory].map((faq, index) => (
            <div key={index} className="border-b border-border last:border-b-0">
              <button 
                className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none hover:bg-muted/30 transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className={`font-bold text-sm md:text-base pr-8 ${openIndex === index ? 'text-accent' : 'text-primary group-hover:text-accent'} transition-colors`}>
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${openIndex === index ? 'border-accent text-accent bg-accent/5' : 'border-border text-muted-foreground'}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 md:p-8 pt-0 text-muted-foreground text-sm font-light leading-relaxed border-t border-border/50 bg-muted/10">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-primary mb-4">Can't find what you're looking for?</p>
          <a href="/contact" className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
