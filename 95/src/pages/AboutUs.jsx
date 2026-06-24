import React from 'react';
import useSEO from '../hooks/useSEO';
import { Calendar, Award, ShieldCheck, Milestone } from 'lucide-react';

const AboutUs = () => {
    useSEO(
        'About Us',
        'Learn about Retail Textile Mall - Over 40 years of trust in providing premium sarees, fabrics, and home linen.',
        'about retail textile, store history, quality textile mall, boutique mall'
    );

    const milestones = [
        {
            year: "1998",
            title: "The Legacy Begins",
            desc: "Established our first handloom retail counter in Kolkata, focusing on heritage cotton and pure silk sarees.",
            icon: <Milestone className="w-5 h-5" />
        },
        {
            year: "2008",
            title: "Weaver Empowerment Sourcing",
            desc: "Bypassed intermediate brokers, forming direct trade contracts with 300+ master weavers across West Bengal, Banaras, and Kanchipuram.",
            icon: <Award className="w-5 h-5" />
        },
        {
            year: "2016",
            title: "Modern Showroom & Logistics",
            desc: "Expanded showroom space to a state-of-the-art facility, adding premium suiting, shirting, linen bedsheets, and designer upholstery under one roof.",
            icon: <ShieldCheck className="w-5 h-5" />
        },
        {
            year: "2026",
            title: "Digital Procurement Launch",
            desc: "Digitizing B2B operations with standard e-Quotation sheets, transparent e-Auctions, and real-time Trade Circular notifications.",
            icon: <Calendar className="w-5 h-5" />
        }
    ];

    return (
        <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Our Heritage
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Weaving Excellence, <br />
                            <span className="font-light text-brand-lavender italic lowercase">redefining</span> Style
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

            {/* ── Visual split content ── */}
            <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left: Premium offset media showcase with glass info strip */}
                    <div className="lg:col-span-6 relative aspect-[4/5] w-full">
                        <div className="absolute inset-0 bg-brand-light border border-brand-gold/15 rounded-[2.5rem] p-3.5 shadow-2xl">
                            <div className="w-full h-full overflow-hidden rounded-[2rem] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                                    alt="Showroom Legacy"
                                    className="w-full h-full object-cover scale-102 hover:scale-108 transition-transform duration-[4000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                
                                {/* Bottom Floating Meta Strip */}
                                <div className="absolute bottom-6 left-6 right-6 p-5 bg-brand-cream/90 backdrop-blur-md rounded-2xl border border-brand-gold/15 flex justify-between items-center shadow-lg">
                                    <div className="text-left space-y-0.5">
                                        <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-lavender">Est. Showrooms</p>
                                        <p className="text-sm font-serif font-black text-brand-plum uppercase leading-none">Kolkata, India</p>
                                    </div>
                                    <span className="text-[9px] font-sans font-bold tracking-widest text-brand-gold bg-brand-light px-3.5 py-2 rounded-xl uppercase border border-brand-gold/10">
                                        Since 1998
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Core narrative content */}
                    <div className="lg:col-span-6 text-left space-y-6 lg:pl-6">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-lavender block">
                            Our Mission & Craft
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-plum tracking-tight uppercase leading-snug">
                            Bridging Heritage Weaves <span className="font-light italic text-brand-lavender lowercase font-serif">and</span> Modern Sourcing
                        </h2>
                        <div className="w-12 h-[1px] bg-brand-lavender"></div>
                        
                        <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                            Retail Textile Mall is designed with a single goal: to make premium weaves and fine fabrics accessible to bulk and retail buyers. We collaborate directly with master weavers and state-of-the-art mills to ensure our sarees, suiting, and shirting fabrics represent the pinnacle of design and comfort.
                        </p>
                        
                        <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                            From beautiful bridal lehengas to premium Egyptian linen bedsheets, our inventory undergoes meticulous quality testing so that every thread delivers durability, luxury texture, and unmatched color fastness.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── Dynamic Timeline Grid Layout ── */}
            <section className="py-24 border-t border-brand-gold/12 bg-brand-light/30">
                <div className="max-w-6xl mx-auto px-6 sm:px-10">
                    <div className="text-center mb-20 space-y-3">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-lavender block">Roadmap</span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight">
                            Our Journey <span className="text-brand-lavender font-light italic lowercase font-serif">since</span> 1998
                        </h2>
                    </div>

                    {/* Vertical Timeline Container */}
                    <div className="relative border-l border-brand-gold/15 ml-4 sm:ml-8 md:mx-auto md:border-l-0 md:max-w-4xl space-y-12">
                        {/* Center line for large screen */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-gold/15" />

                        {milestones.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div 
                                    key={item.year}
                                    className={`relative flex flex-col md:flex-row items-start md:justify-between ${
                                        isEven ? 'md:flex-row-reverse' : ''
                                    }`}
                                >
                                    {/* Timeline Circle Node */}
                                    <div className="absolute -left-[17px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-brand-light border border-brand-gold/15 flex items-center justify-center text-brand-gold z-10 shadow-md group-hover:scale-105 transition-transform duration-300">
                                        {item.icon}
                                    </div>

                                    {/* Timeline Card Content */}
                                    <div className="w-full md:w-[45%] pl-8 md:pl-0 text-left">
                                        <div className="bg-brand-light border border-brand-gold/12 p-6 rounded-3xl shadow-lg hover:border-brand-lavender/30 transition-all duration-500">
                                            <span className="font-serif text-2xl font-black text-brand-gold block mb-1">
                                                {item.year}
                                            </span>
                                            <h4 className="font-serif text-xs font-bold uppercase text-brand-plum tracking-wider mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-stone-500 text-[11px] font-sans leading-relaxed font-light">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty spacer block to balance the columns on desktop */}
                                    <div className="hidden md:block w-[45%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
