import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();

    const categories = [
        { name: "Sarees", desc: "Handloom silks & Banarasis", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", size: "col-span-1 md:col-span-2" },
        { name: "Kurtis", desc: "Daily & ethnic designer wear", img: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&q=80", size: "col-span-1" },
        { name: "Dress Suits", desc: "Unstitched salwar sets", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80", size: "col-span-1" },
        { name: "Suiting", desc: "Premium fabrics for custom blazers", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", size: "col-span-1" },
        { name: "Bedsheets & Linen", desc: "Fine cottons & Egyptian sheets", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80", size: "col-span-1 md:col-span-2" },
        { name: "Leggings", desc: "Stretchable premium cottons", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80", size: "col-span-1" },
        { name: "Hosiery Items", desc: "Soft, breathable innerwear", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80", size: "col-span-1" },
        { name: "Shirting", desc: "Egyptian cottons & casual prints", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80", size: "col-span-1" },
        { name: "Women's Formal & Ethnic", desc: "Lehengas & festive attire", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", size: "col-span-1 md:col-span-2" },
        { name: "Men's Formal & Ethnic", desc: "Sherwanis & business suits", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80", size: "col-span-1" },
        { name: "Children's Wear", desc: "Cute, soft organic wearables", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80", size: "col-span-1" },
        { name: "Home Upholstery", desc: "Curtains, covers & tapestry", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80", size: "col-span-1" }
    ];

    return (
        <section className="py-20 px-6 sm:px-12 bg-white">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 border-b border-brand-linen-dark pb-6">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-sans text-brand-charcoal tracking-tight font-black uppercase">
                            Shop by <span className="text-[#800834]">Category</span>
                        </h2>
                    </div>
                    <button 
                        onClick={() => navigate('/products')}
                        className="text-[10px] font-sans font-black uppercase tracking-widest text-[#800834] hover:text-[#800834]/80 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
                    >
                        View All Categories <span className="text-brand-gold">&rarr;</span>
                    </button>
                </div>

                {/* Asymmetric Masonry-Like Grid with Natural Image Colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/products')}
                            className={`${cat.size} group cursor-pointer bg-white border border-brand-linen-dark overflow-hidden transition-all duration-700 rounded-2xl relative aspect-[4/3] sm:aspect-auto sm:h-[260px] shadow-sm hover:shadow-xl`}
                        >
                            {/* Graphic background - high opacity, letting true colors shine */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1200ms] opacity-90 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${cat.img})` }}
                            />
                            
                            {/* Soft dark bottom-up fade for high text readability, keeping image body clean */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            {/* Border highlight overlay on hover */}
                            <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500 pointer-events-none m-3 rounded-xl" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-left z-10">
                                <span className="text-[9px] text-brand-gold-light uppercase tracking-widest font-black block mb-1">
                                    {cat.desc}
                                </span>
                                <h3 className="text-base font-serif text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                                    {cat.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Categories;
