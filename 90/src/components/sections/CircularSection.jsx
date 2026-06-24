import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar } from 'lucide-react';

const CircularSection = () => {
    const navigate = useNavigate();

    const circulars = [
        { title: "Consignment Arrivals - Kanchipuram Silks", date: "June 08, 2026", num: "RT/CIR/2026/14" },
        { title: "Revised Wholesale B2B Commission Structure", date: "June 03, 2026", num: "RT/CIR/2026/13" },
        { title: "Notice of Store Maintenance Schedule", date: "May 28, 2026", num: "RT/CIR/2026/12" }
    ];

    return (
        <section className="py-12 px-6 sm:px-10 bg-[#FCFBF7]">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 gap-16">
                
                {/* Intro Column */}
                <div className="text-left md:col-span-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-4 block">
                        Trade Updates
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight uppercase leading-none mb-6">
                        Official <br />
                        <span className="font-light text-[#C5A880] italic">Circulars</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-[#C5A880] mb-6"></div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-8 font-sans">
                        Access official business bulletins, supply chain announcements, and trade segment updates published by our mall management.
                    </p>
                    <button 
                        onClick={() => navigate('/circular')}
                        className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C5A880] hover:text-[#121212] transition-colors border-b border-[#C5A880]/30 pb-1"
                    >
                        View All Circulars
                    </button>
                </div>

                {/* List Column */}
                <div className="md:col-span-2 flex flex-col gap-6 text-left">
                    {circulars.map((c, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/circular')}
                            className="p-6 bg-white border border-black/5 hover:border-[#C5A880]/30 transition-all rounded-xl flex items-start gap-4 cursor-pointer group shadow-sm hover:shadow-md"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#121212] flex items-center justify-center text-[#C5A880] shrink-0 border border-white/5">
                                <FileText size={18} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[8px] text-gray-400 font-sans tracking-widest block font-bold">
                                    {c.num}
                                </span>
                                <h3 className="text-sm font-sans font-bold text-[#121212] uppercase tracking-wider group-hover:text-[#C5A880] transition-colors">
                                    {c.title}
                                </h3>
                                <div className="flex items-center gap-1 text-[9px] text-gray-500 font-sans">
                                    <Calendar size={10} />
                                    <span>{c.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CircularSection;
