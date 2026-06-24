import React from 'react';
import useSEO from '../hooks/useSEO';
import { Shield, Sparkles, Award } from 'lucide-react';

const Management = () => {
    useSEO(
        'Our Retail Management',
        'Learn about the Retail Textile Mall structure and operational excellence team.',
        'retail textile management, board members, management team'
    );

    const members = [
        { 
            name: "H. C. Parekh", 
            role: "Chairman & Director", 
            desc: "Over 40 years of pioneering textile retail leadership. Visionary behind our network distribution framework.", 
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" 
        },
        { 
            name: "Suresh Parekh", 
            role: "Managing Director", 
            desc: "Spearheads operational logistics, supply networks, and physical store expansion strategies.", 
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" 
        },
        { 
            name: "Amit K. Sen", 
            role: "Chief Sourcing Officer", 
            desc: "Directs direct handloom weaver alliances, ensuring premium cotton and silk thread quality at the source.", 
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" 
        }
    ];

    return (
        <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Operational Leadership
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Our Retail <span className="text-brand-lavender italic font-light lowercase">management</span>
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

            {/* ── Content Section ── */}
            <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    
                    {/* Left Copy */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-lavender block">
                            Enterprise Standards
                        </span>
                        <h2 className="text-2xl md:text-4xl font-serif text-brand-plum tracking-tight uppercase leading-snug">
                            Efficient Supply Chains & Direct Sourcing
                        </h2>
                        <div className="w-12 h-[1px] bg-brand-lavender"></div>
                        <p className="text-brand-plum/85 text-xs md:text-sm leading-relaxed font-sans font-light">
                            At Retail Textile Mall, our operations are optimized to eliminate middlemen margins. Our management team focuses on direct integration with master weavers and modern fabric mills, passing on direct price benefits to our B2B trade partners and retail buyers.
                        </p>
                    </div>
                    
                    {/* Right Card: Fixed Contrast Mandate Card */}
                    <div className="lg:col-span-5 p-8 bg-brand-lavender-dark text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                        <div className="relative z-10 space-y-4 text-left">
                            <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold">
                                <Shield className="w-5.5 h-5.5" />
                            </div>
                            <h3 className="font-serif text-lg text-white uppercase tracking-wide font-black">
                                Quality Mandate
                            </h3>
                            <p className="text-xs text-stone-200 leading-relaxed font-sans font-light">
                                We follow standard operating parameters for cotton thread counts, fiber checks, and chemical-free dyes. Our multi-tier management reviews keep customer satisfaction at the heart of our commercial success.
                            </p>
                        </div>
                    </div>

                </div>

                {/* ── Staggered Leader Offset Portrait Section ── */}
                <div className="border-t border-brand-gold/15 pt-20">
                    <div className="text-center mb-16 space-y-3">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-lavender block">Founders & Directors</span>
                        <h2 className="text-2xl md:text-3xl font-serif text-brand-plum uppercase tracking-wide">
                            Board of Directors
                        </h2>
                    </div>

                    {/* Staggered Vertical List */}
                    <div className="space-y-12 max-w-5xl mx-auto">
                        {members.map((m, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div 
                                    key={m.name} 
                                    className={`bg-white border border-brand-gold/10 p-6 sm:p-10 rounded-[2.5rem] shadow-md hover:border-brand-lavender/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 text-left ${
                                        isEven ? '' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Offset portrait frame */}
                                    <div className="w-40 h-40 rounded-full sm:rounded-[2rem] overflow-hidden shrink-0 border-4 border-brand-cream shadow-xl rotate-1 group-hover:rotate-0 transition-transform duration-300">
                                        <img src={m.img} alt={m.name} className="w-full h-full object-cover scale-102 hover:scale-108 transition-all duration-700" />
                                    </div>

                                    {/* Copy details */}
                                    <div className="flex-grow space-y-3">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-serif text-xl font-black text-brand-plum uppercase tracking-wider">{m.name}</h3>
                                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                            <p className="text-[10px] text-brand-lavender uppercase tracking-widest font-black">{m.role}</p>
                                        </div>
                                        <div className="w-12 h-px bg-brand-lavender/30" />
                                        <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">{m.desc}</p>
                                        
                                        {/* micro icon badge */}
                                        <div className="flex items-center gap-1.5 pt-2 text-[8px] uppercase font-bold tracking-widest text-brand-gold">
                                            <Award size={10} className="text-brand-lavender" />
                                            <span>Certified Administrator</span>
                                        </div>
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
