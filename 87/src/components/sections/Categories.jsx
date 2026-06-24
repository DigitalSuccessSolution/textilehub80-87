import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const Categories = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const curatedItems = [
        {
            num: "01",
            name: "KURTIS",
            desc: "Everyday Grace",
            img: "https://images.unsplash.com/photo-1610030470238-6625b169542a?q=80&w=500"
        },
        {
            num: "02",
            name: "SAREES",
            desc: "Timeless Tradition",
            img: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=500"
        },
        {
            num: "03",
            name: "LINEN",
            desc: "Pure. Natural.",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=500"
        },
        {
            num: "04",
            name: "PRINTS",
            desc: "Patterns that Speak",
            img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500"
        },
        {
            num: "05",
            name: "HOME TEXTILES",
            desc: "Comfort Woven Beautifully",
            img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500"
        }
    ];

    const scrollPrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF6F2] font-sans border-b border-[#10211F]/5 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                
                {/* ── Title & Navigation Header ── */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
                    <div className="text-left space-y-2">
                        <div className="flex items-center gap-2 text-[#C29E6B]">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em]">
                                Explore Our
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#10211F] tracking-tight uppercase leading-none">
                            Signature Collections
                        </h2>
                    </div>

                    {/* Slider Arrow Controls (Top Right) */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-[#10211F]/10 flex items-center justify-center text-[#10211F] hover:bg-[#10211F] hover:text-white hover:border-[#10211F] transition-all cursor-pointer shadow-sm active:scale-95 bg-white"
                            title="Previous Department"
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-[#10211F]/10 flex items-center justify-center text-[#10211F] hover:bg-[#10211F] hover:text-white hover:border-[#10211F] transition-all cursor-pointer shadow-sm active:scale-95 bg-white"
                            title="Next Department"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* ── Sliding Horizontal Row of Department Cards ── */}
                <div 
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-8 scroll-smooth no-scrollbar"
                >
                    {curatedItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate('/products')}
                            className="shrink-0 w-[270px] sm:w-[300px] h-[400px] sm:h-[450px] rounded-t-[7rem] rounded-b-[2rem] overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-[#10211F]/5"
                        >
                            {/* Card Image Background */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                            />
                            
                            {/* Dark Gradient Mask overlay (gradually darker at bottom for legibility) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:from-black/90 transition-all duration-300" />

                            {/* Card Content (Overlaid at the bottom) */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-left z-10 space-y-4">
                                <div className="space-y-1">
                                    <span className="text-[11px] font-sans font-bold tracking-wider text-[#C29E6B]">
                                        {item.num}
                                    </span>
                                    <h3 className="text-lg font-serif font-bold text-white tracking-widest uppercase">
                                        {item.name}
                                    </h3>
                                    <p className="text-[11px] text-stone-300 font-sans font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom Left Arrow in Circle */}
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#10211F] group-hover:border-white transition-all duration-300">
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Categories;
