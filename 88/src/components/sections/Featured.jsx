import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const signatureCollections = [
    { id: 'I',    name: 'KURTIS',       sub: 'Everyday Grace',          img: 'https://images.pexels.com/photos/34155079/pexels-photo-34155079.jpeg' },
    { id: 'II',   name: 'SAREES',       sub: 'Timeless Tradition',      img: 'https://images.pexels.com/photos/37054322/pexels-photo-37054322.jpeg' },
    { id: 'III',  name: 'SUITS',        sub: 'Style Redefined',         img: 'https://images.pexels.com/photos/19581248/pexels-photo-19581248.jpeg' },
    { id: 'IV',   name: 'DRESS MATERIALS', sub: 'Unmatched Elegance',   img: 'https://images.pexels.com/photos/31443911/pexels-photo-31443911.jpeg' },
    { id: 'V',    name: 'LINEN',        sub: 'Pure. Natural.',          img: 'https://images.pexels.com/photos/3847588/pexels-photo-3847588.jpeg' },
    { id: 'VI',   name: 'COTTONS',      sub: 'Soft. Breathable.',       img: 'https://images.pexels.com/photos/5746079/pexels-photo-5746079.jpeg' },
    { id: 'VII',  name: 'SILKS',        sub: 'Luxury in Every Thread',  img: 'https://images.pexels.com/photos/37987847/pexels-photo-37987847.jpeg' },
    { id: 'VIII', name: 'PRINTS',       sub: 'Patterns that Speak',     img: 'https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg' },
    { id: 'IX',   name: 'JACQUARD',     sub: 'Woven Grandeur',          img: 'https://images.pexels.com/photos/34688015/pexels-photo-34688015.jpeg' },
    { id: 'X',    name: 'VELVETS',      sub: 'Plush & Premium',         img: 'https://images.pexels.com/photos/5724384/pexels-photo-5724384.jpeg' },
    { id: 'XI',   name: 'FUSION WEAR',  sub: 'Trendy & Versatile',      img: 'https://images.pexels.com/photos/16089631/pexels-photo-16089631.jpeg' },
    { id: 'XII',  name: 'ACCESSORIES',  sub: 'Completing Styles',       img: 'https://images.pexels.com/photos/8135277/pexels-photo-8135277.jpeg' },
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
