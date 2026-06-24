import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const signatureCollections = [
    { id: 'I',    name: 'KURTIS',       sub: 'Everyday Grace',          img: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400' },
    { id: 'II',   name: 'SAREES',       sub: 'Timeless Tradition',      img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400' },
    { id: 'III',  name: 'SUITS',        sub: 'Style Redefined',         img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=400' },
    { id: 'IV',   name: 'DRESS MATERIALS', sub: 'Unmatched Elegance',   img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400' },
    { id: 'V',    name: 'LINEN',        sub: 'Pure. Natural.',          img: 'https://images.unsplash.com/photo-1626497746447-ad25e1d40ff0?q=80&w=400' },
    { id: 'VI',   name: 'COTTONS',      sub: 'Soft. Breathable.',       img: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=400' },
    { id: 'VII',  name: 'SILKS',        sub: 'Luxury in Every Thread',  img: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400' },
    { id: 'VIII', name: 'PRINTS',       sub: 'Patterns that Speak',     img: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=400' },
    { id: 'IX',   name: 'JACQUARD',     sub: 'Woven Grandeur',          img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400' },
    { id: 'X',    name: 'VELVETS',      sub: 'Plush & Premium',         img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400' },
    { id: 'XI',   name: 'FUSION WEAR',  sub: 'Trendy & Versatile',      img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400' },
    { id: 'XII',  name: 'ACCESSORIES',  sub: 'Completing Styles',       img: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400' },
];

const Featured = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF5F0] font-sans">
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
                    <div className="space-y-2 text-left">
                        <div className="flex items-center gap-2">
                            <Sparkles size={13} className="text-[#C29E6B] animate-spin" style={{ animationDuration: '6s' }} />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29E6B]">Signature Designer Suites</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-serif text-[#2E081B] tracking-tight leading-none">
                            12 Signature<br /><span className="text-[#9C4B6E] font-light italic">Collections</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/products')}
                        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C29E6B] hover:text-[#2E081B] transition-colors border-b border-[#C29E6B]/20 hover:border-[#2E081B] pb-0.5 cursor-pointer"
                    >
                        Browse Full Archive <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Magazine List Layout */}
                <div className="space-y-0 border-t border-[#2E081B]/10">
                    {signatureCollections.map((col, idx) => (
                        <div
                            key={col.id}
                            onClick={() => navigate('/products')}
                            className="group flex items-center gap-6 py-4 px-4 border-b border-[#2E081B]/6 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer rounded-2xl"
                        >
                            {/* Number */}
                            <span className="text-xs font-serif font-black italic text-[#C29E6B]/60 group-hover:text-[#C29E6B] transition-colors w-8 shrink-0 text-right">
                                {col.id}
                            </span>

                            {/* Image thumbnail */}
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-[#2E081B]/8 group-hover:border-[#C29E6B] transition-colors">
                                <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Name */}
                            <h3 className="flex-1 text-sm font-serif font-extrabold text-[#2E081B] tracking-wider uppercase group-hover:text-[#9C4B6E] transition-colors text-left">
                                {col.name}
                            </h3>

                            {/* Sub */}
                            <p className="hidden sm:block text-[10px] text-stone-400 font-sans font-light w-40 text-left shrink-0">
                                {col.sub}
                            </p>

                            {/* Divider dot */}
                            <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#2E081B]/15 group-hover:bg-[#9C4B6E] transition-colors shrink-0" />

                            {/* Arrow */}
                            <ArrowRight
                                size={14}
                                className="text-stone-300 group-hover:text-[#9C4B6E] group-hover:translate-x-1 transition-all duration-300 shrink-0"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Featured;
