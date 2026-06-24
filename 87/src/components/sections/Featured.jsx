import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Featured = () => {
    const navigate = useNavigate();

    const signatureCollections = [
        { id: "I", name: "KURTIS", sub: "Everyday Grace", img: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400" },
        { id: "II", name: "SAREES", sub: "Timeless Tradition", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400" },
        { id: "III", name: "SUITS", sub: "Style Redefined", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=400" },
        { id: "IV", name: "DRESS MATERIALS", sub: "Unmatched Elegance", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400" },
        { id: "V", name: "LINEN", sub: "Pure. Natural.", img: "https://images.unsplash.com/photo-1626497746447-ad25e1d40ff0?q=80&w=400" },
        { id: "VI", name: "COTTONS", sub: "Soft. Breathable.", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=400" },
        { id: "VII", name: "SILKS", sub: "Luxury in Every Thread", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400" },
        { id: "VIII", name: "PRINTS", sub: "Patterns that Speak", img: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=400" },
        { id: "IX", name: "JACQUARD", sub: "Woven Grandeur", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400" },
        { id: "X", name: "VELVETS", sub: "Plush & Premium", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400" },
        { id: "XI", name: "FUSION WEAR", sub: "Trendy & Versatile", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400" },
        { id: "XII", name: "ACCESSORIES", sub: "Completing Styles", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400" }
    ];

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF6F2] font-sans border-b border-[#10211F]/5">
            <div className="max-w-[1600px] mx-auto">
                
                {/* ── Title Header ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div className="text-left space-y-2">
                        <div className="flex items-center gap-2 text-[#2C443E]">
                            <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#C29E6B]">
                                SIGNATURE DESIGNER SUITES
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#10211F] tracking-tight uppercase leading-none">
                            12 Signature Collections
                        </h2>
                    </div>

                    <button 
                        onClick={() => navigate('/products')}
                        className="group inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C29E6B] hover:text-[#10211F] transition-all duration-300 pb-1 cursor-pointer border-b border-[#C29E6B]/20 hover:border-[#10211F]"
                    >
                        Browse Full Archive <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* ── Staggered Layout Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    {signatureCollections.map((col, idx) => {
                        // Alternate height styling for staggered masonry card effect
                        const isEven = idx % 2 === 0;
                        const staggerClass = isEven ? "lg:translate-y-4" : "";

                        return (
                            <div
                                key={col.id}
                                onClick={() => navigate('/products')}
                                className={`group w-full aspect-[3/4.5] rounded-[2rem] overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer ${staggerClass}`}
                            >
                                {/* Card Image */}
                                <img
                                    src={col.img}
                                    alt={col.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                                />
                                
                                {/* Dark Gradient Mask Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#10211F]/90 via-[#10211F]/40 to-black/10 group-hover:from-[#10211F]/95 group-hover:via-[#10211F]/55 transition-all duration-500" />
                                
                                {/* Roman Numeral (Top Left) */}
                                <span className="absolute top-6 left-6 font-serif text-2xl font-light italic text-[#C29E6B] opacity-90 group-hover:scale-110 transition-transform duration-500 z-20">
                                    {col.id}
                                </span>

                                {/* Corner dot accent */}
                                <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-[#C29E6B] opacity-70 group-hover:opacity-100 transition-opacity z-20" />

                                {/* Collection Labels (Bottom Left) */}
                                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 z-10">
                                    <span className="text-[9px] text-[#C29E6B] font-sans font-bold uppercase tracking-wider block">
                                        {col.sub}
                                    </span>
                                    <h3 className="text-xs sm:text-sm font-serif font-bold text-white tracking-widest uppercase group-hover:text-[#C29E6B] transition-colors leading-tight">
                                        {col.name}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Featured;
