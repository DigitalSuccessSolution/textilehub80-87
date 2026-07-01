import React from 'react';
import { useNavigate } from 'react-router-dom';

const Featured = () => {
    const navigate = useNavigate();

    const featuredItems = [
        {
            name: "Bridal Banarasi Silk Saree",
            cat: "Sarees",
            price: "₹18,500",
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
        },
        {
            name: "Comfort Stretch Leggings",
            cat: "Leggings",
            price: "₹899",
            img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80"
        },
        {
            name: "Designer Floral Anarkali",
            cat: "Kurtis",
            price: "₹2,499",
            img: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&q=80"
        },
        {
            name: "Embroidered Georgette Suit",
            cat: "Dress Suits",
            price: "₹4,599",
            img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
        },
        {
            name: "1000 TC Egyptian Linen Set",
            cat: "Bedsheets & Linen",
            price: "₹7,800",
            img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80"
        },
        {
            name: "Premium Breathable Hosiery Pack",
            cat: "Hosiery Items",
            price: "₹1,200",
            img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80"
        },
        {
            name: "Italian Merino Wool Suiting",
            cat: "Suiting",
            price: "₹4,200 / Meter",
            img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
        },
        {
            name: "Premium Giza Cotton Shirting",
            cat: "Shirting",
            price: "₹1,500 / Meter",
            img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80"
        },
        {
            name: "Luxury Embroidered Lehenga",
            cat: "Formal & Ethnic Wear for Women",
            price: "₹34,000",
            img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
        },
        {
            name: "Royal Velvet Sherwani Set",
            cat: "Formal & Ethnic Wear for Men",
            price: "₹28,500",
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
        },
        {
            name: "Festive Silk Lehenga & Kurta",
            cat: "Formal & Ethnic Wear for Children",
            price: "₹3,999",
            img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80"
        },
        {
            name: "Luxury Jacquard Upholstery",
            cat: "Home Upholstery & Furnishing",
            price: "₹8,500",
            img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
        }
    ];

    return (
        <section className="py-16 px-6 sm:px-10 bg-brand-linen relative overflow-hidden">
            {/* Elegant outline leaf background */}
            <div className="absolute left-0 bottom-10 pointer-events-none z-[1] opacity-[0.05] hidden md:block select-none transform -translate-x-12">
                <svg width="250" height="350" viewBox="0 0 250 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-emerald-dark">
                    <path d="M30 320 C 50 250, 100 150, 200 50" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M70 270 C 50 250, 20 250, 35 280 C 50 310, 70 300, 70 270 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M90 230 C 60 210, 40 220, 50 245 C 65 270, 90 255, 90 230 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            </div>

            <div className="max-w-[1600px] mx-auto text-center relative z-10">
                
                {/* Header */}
                <div className="mb-20">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.35em] text-brand-gold mb-3 block">
                        Curated Highlights
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-charcoal tracking-tight uppercase leading-none mb-5">
                        Signature <span className="font-light text-brand-gold italic">Collections</span>
                    </h2>
                    <div className="w-16 h-[1.5px] bg-brand-gold mx-auto"></div>
                </div>

                {/* 4-Item Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {featuredItems.map((item, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/products')}
                            className="group cursor-pointer text-left flex flex-col justify-between h-full bg-white border border-brand-emerald-accent/5 p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div>
                                {/* Graphic with elegant inner spacing */}
                                <div className="aspect-[4/5] overflow-hidden bg-brand-emerald-dark/5 mb-6 rounded-xl relative">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-emerald-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Label */}
                                <div className="space-y-2 px-1">
                                    <span className="text-[9px] text-brand-gold font-sans font-bold uppercase tracking-widest block">
                                        {item.cat}
                                    </span>
                                    <h3 className="text-sm font-serif font-medium text-brand-charcoal uppercase tracking-wide group-hover:text-[#800834] transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                            
                            <div className="pt-4 px-1 border-t border-brand-linen-dark/60 mt-4 flex justify-between items-center w-full">
                                <span className="text-[10px] text-brand-charcoal/60 uppercase font-sans font-bold tracking-wider">
                                    Premium Range
                                </span>
                                <span className="text-[10px] font-sans font-black uppercase text-[#800834] group-hover:text-brand-charcoal tracking-wider transition-colors">
                                    Enquire Now &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Featured;
