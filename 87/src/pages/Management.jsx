import React from 'react';
import useSEO from '../hooks/useSEO';

const Management = () => {
    useSEO(
        'Our Retail Management',
        'Learn about the Aurora Textile House structure and operational excellence team.',
        'aurora textile management, board members, management team'
    );

    const members = [
        { name: "H. C. Parekh", role: "Chairman & Director", desc: "40+ years of textile industry experience driving our corporate growth.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80" },
        { name: "Suresh Parekh", role: "Managing Director", desc: "Overseeing operations, supply chain logistics, and showroom planning.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" },
        { name: "Amit K. Sen", role: "Chief Sourcing Officer", desc: "Leading vendor tie-ups and direct handloom sourcing across Indian weaver hubs.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" }
    ];

    return (
        <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-20">
            {/* Hero Section */}
            <section className="pt-40 pb-16 bg-[#FAF6F2] border-b border-[#10211F]/10 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-left relative flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-[8px]">✦</span>
              <span className="text-[9px] font-sans font-bold  tracking-[0.3em] text-[#2C443E]">
                Operational Leadership
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-14 bg-[#C29E6B] rounded-full shrink-0" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight  text-[#10211F] leading-none">
                Our Retail <span className="text-[#C29E6B] italic font-light">Management</span>
              </h1>
            </div>
          </div>
          
        </div>
      </section>

            {/* Content Section */}
            <section className="py-20 px-6 sm:px-10 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-6 text-left">
                        <span className="text-[10px] font-sans font-bold  tracking-[0.3em] text-[#C29E6B] block">
                            Enterprise Standards
                        </span>
                        <h2 className="text-2xl md:text-4xl font-serif text-[#10211F] tracking-tight  leading-tight">
                            Efficient Supply Chains & Direct Weaver Sourcing
                        </h2>
                        <div className="w-12 h-[1px] bg-[#C29E6B]"></div>
                        <p className="text-[#182220]/80 text-xs md:text-sm leading-relaxed font-sans font-light">
                            At Aurora Textile House, our operations are optimized to eliminate middlemen margins. Our management team focuses on direct integration with master weavers and modern fabric mills, passing on direct price benefits to our B2B trade partners and retail buyers.
                        </p>
                    </div>
                    <div className="p-8 bg-[#10211F] text-white text-left rounded-3xl border border-[#C29E6B]/20 shadow-md">
                        <h3 className="font-serif text-lg text-[#C29E6B]  mb-4 font-bold">Quality Mandate</h3>
                        <p className="text-xs text-stone-200 leading-relaxed font-sans font-light">
                            We follow standard operating parameters for cotton thread counts, fiber checks, and chemical-free dyes. Our multi-tier management reviews keep customer satisfaction at the heart of our commercial success.
                        </p>
                    </div>
                </div>

                {/* Team Members Grid - Redesigned Editorial Portrait Card Layout */}
                <div className="border-t border-[#10211F]/10 pt-20">
                    <h2 className="text-2xl md:text-3xl font-serif text-[#10211F]  tracking-wide text-center mb-16">
                        Leadership Board
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {members.map((m, idx) => {
                            return (
                                <div 
                                    key={idx} 
                                    className="bg-white rounded-[2rem] p-4 border border-stone-200 hover:border-[#C29E6B] shadow-sm hover:shadow-2xl transition-all duration-500 text-left group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-full aspect-[4/5] rounded-[1.75rem] rounded-t-[7rem] overflow-hidden bg-stone-100 mb-6 relative border border-stone-200/50">
                                            <img 
                                                src={m.img} 
                                                alt={m.name} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" 
                                            />
                                            <div className="absolute top-4 left-4 bg-[#10211F] text-white text-[9px] font-sans font-bold px-3 py-1.5 rounded-full border border-white/10 shadow-md">
                                                0{idx + 1}
                                            </div>
                                        </div>
                                        <div className="space-y-2 px-3 pb-3">
                                            <p className="text-[9px] text-[#C29E6B] font-sans font-bold  tracking-[0.25em]">{m.role}</p>
                                            <h3 className="font-serif text-lg font-bold text-[#10211F]  tracking-wider leading-tight">{m.name}</h3>
                                            <p className="text-xs text-stone-500 font-sans font-light leading-relaxed pt-1">{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="mx-3 pt-4 pb-1 border-t border-stone-100 flex items-center justify-between text-[9px] font-sans font-bold  tracking-wider text-[#C29E6B]">
                                        <span>Corporate Board</span>
                                        <span>✦</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Management;
