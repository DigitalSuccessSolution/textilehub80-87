import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
    const navigate = useNavigate();
    const [openIdx, setOpenIdx] = useState(null);

    const faqs = [
        { q: "What are the store operating hours?", a: "Our retail mall showroom is open from Monday to Saturday, 10:00 AM to 8:00 PM IST." },
        { q: "Do you offer B2B wholesale ordering?", a: "Yes. Registered merchants can use our Trade Enquiry and e-Quotation portals to place bulk wholesale segment orders directly." },
        { q: "Can I inspect fabrics before bulk purchases?", a: "Yes, you can schedule a showroom visit with our retail management team or trade desk to inspect fabrics and check counts." }
    ];

    return (
        <section className="py-12 px-6 sm:px-10 bg-[#121212] text-white">
            <div className="max-w-[1200px] mx-auto text-left">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
                        Assistance Info
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight uppercase leading-none mb-4">
                        Frequently Asked <span className="font-light text-[#C5A880] italic">Questions</span>
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4 mb-12">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div 
                                key={idx} 
                                className="border-b border-white/5 pb-4 transition-all"
                            >
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="w-full flex justify-between items-center text-xs uppercase font-sans font-bold tracking-widest text-[#C5A880] hover:text-white py-3 transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <span>{isOpen ? <Minus size={14} /> : <Plus size={14} />}</span>
                                </button>
                                {isOpen && (
                                    <p className="text-gray-400 text-xs font-sans leading-relaxed pt-2">
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <button 
                        onClick={() => navigate('/faq')}
                        className="px-8 py-3.5 bg-[#C5A880] hover:bg-white text-[#121212] hover:text-black text-[9px] uppercase tracking-widest font-black transition-colors rounded-xl"
                    >
                        More Support FAQs
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FaqSection;
