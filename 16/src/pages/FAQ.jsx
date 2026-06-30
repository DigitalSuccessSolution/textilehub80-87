import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What are the minimum order quantities (MOQ)?',
      answer: 'Our MOQs vary by product category. Generally, for unstitched fabrics it is 50 meters, and for ready-made garments it is 20 pieces. Contact our sales team for specific product details.'
    },
    {
      question: 'Do you offer custom manufacturing?',
      answer: 'Yes, we provide extensive custom manufacturing services including custom prints, weaves, and white-label garment production for bulk orders.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Domestic shipping within India typically takes 3-7 business days. International shipping times vary based on location and shipping method, usually ranging from 7-14 business days.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept RTGS/NEFT transfers, Letters of Credit (L/C) for international orders, and major credit cards for sample orders.'
    },
    {
      question: 'Can I request fabric samples?',
      answer: 'Yes, we provide swatch books and sample yardage for our regular clients. New buyers can request specific samples subject to availability and shipping charges.'
    }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground pb-24">
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-accent mb-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Find answers to common questions about our products, services, and policies.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary/30' : 'hover:border-primary/20'}`}
            >
              <button
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${openIndex === index ? 'bg-primary/5 text-primary' : 'bg-white text-foreground hover:bg-muted/50'}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-sm md:text-base">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-white text-muted-foreground text-sm font-light leading-relaxed border-t border-border">
                  {faq.answer}
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
