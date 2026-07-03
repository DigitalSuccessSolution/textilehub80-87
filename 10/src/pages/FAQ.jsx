import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for the 12 Collections?',
      a: 'The MOQ varies by collection. For premium sarees and suits, it is typically 50 pieces. For running fabrics like shirting and suiting, the MOQ is 100 meters. Please refer to the specific product catalog for exact details.'
    },
    {
      q: 'How does the e-Quotation system work?',
      a: 'Our e-Quotation system is an automated pricing engine. Once you input your firm details and desired volume, it instantly calculates tiered discounts and generates a PDF valid for 72 hours, including estimated logistics costs.'
    },
    {
      q: 'Can I participate in the e-Auctions without a registered B2B account?',
      a: 'No. To maintain the integrity of our wholesale pricing and protect our retail partners, e-Auction access is strictly limited to verified B2B accounts with a valid GSTIN.'
    },
    {
      q: 'Do you offer custom manufacturing or private labeling?',
      a: 'Yes, we offer custom weaving and private labeling for orders exceeding 5,000 units. You can submit your technical specifications through the Trade Enquiry portal for a custom consultation.'
    },
    {
      q: 'What are your standard payment terms for wholesale orders?',
      a: 'For new partners, we require a 50% advance with the balance due before dispatch. Established partners with an approved credit history may access 30-day or 60-day credit cycles.'
    }
  ];

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container-custom max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h1>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border rounded-lg transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-primary shadow-md' : 'border-slate-200 bg-white hover:border-accent/50'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white"
              >
                <span className={`font-bold pr-8 ${openIndex === idx ? 'text-primary' : 'text-slate-700'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
