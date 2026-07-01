import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    "All",
    "Sarees",
    "Leggings",
    "Kurtis",
    "Dress Suits",
    "Bedsheets & Linen",
    "Hosiery Items",
    "Suiting",
    "Shirting",
    "Formal & Ethnic Wear for Women",
    "Formal & Ethnic Wear for Men",
    "Formal & Ethnic Wear for Children",
    "Home Upholstery & Furnishing"
];

const allProducts = [
    {
        id: 1,
        name: "Classic Banarasi Silk Saree",
        cat: "Sarees",
        img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        desc: "Exquisite hand-woven Banarasi silk saree with ornate golden zari borders and classic motifs."
    },
    {
        id: 2,
        name: "Premium Cotton Stretch Leggings",
        cat: "Leggings",
        img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80",
        desc: "Ultra-soft, breathable cotton leggings with 4-way stretch for maximum comfort and style."
    },
    {
        id: 3,
        name: "Elegant Embroidered Georgette Kurti",
        cat: "Kurtis",
        img: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&q=80",
        desc: "Intricately designed floral embroidery on lightweight georgette fabric with a modern silhouette."
    },
    {
        id: 4,
        name: "Royal Designer Anarkali Dress Suit",
        cat: "Dress Suits",
        img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
        desc: "Stunning flared Anarkali suit set with heavy embellishments, matching dupatta, and pants."
    },
    {
        id: 5,
        name: "Luxury Satin Bedsheet & Linen Set",
        cat: "Bedsheets & Linen",
        img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        desc: "Premium high-thread-count satin bedsheet with matching pillow covers for absolute luxury."
    },
    {
        id: 6,
        name: "Super-Soft Premium Hosiery Innerwear",
        cat: "Hosiery Items",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
        desc: "Premium combed cotton innerwear designed for unmatched daily breathability and comfort."
    },
    {
        id: 7,
        name: "Premium Italian Wool Blend Suiting",
        cat: "Suiting",
        img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        desc: "Fine wool-blend suiting fabric offering structured drape, comfort, and sophisticated style."
    },
    {
        id: 8,
        name: "Luxury Giza Cotton Shirting Fabric",
        cat: "Shirting",
        img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
        desc: "Breathable Giza cotton shirting fabric with a silky texture and high durability."
    },
    {
        id: 9,
        name: "Designer Floral Banarasi Lehenga for Women",
        cat: "Formal & Ethnic Wear for Women",
        img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
        desc: "Premium hand-woven ethnic lehenga choli set styled for weddings and special occasions."
    },
    {
        id: 10,
        name: "Classic Silk Kurta Pyjama & Nehru Vest for Men",
        cat: "Formal & Ethnic Wear for Men",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
        desc: "Traditional men's ethnic set with premium silk fabric and detailed embroidery on the collar."
    },
    {
        id: 11,
        name: "Cute Festive Ethnic Dress for Children",
        cat: "Formal & Ethnic Wear for Children",
        img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",
        desc: "Comfortable, premium cotton-blend ethnic wear set for kids, designed for celebrations."
    },
    {
        id: 12,
        name: "Premium Jacquard Upholstery & Sofa Fabric",
        cat: "Home Upholstery & Furnishing",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
        desc: "Heavy-duty jacquard weave fabric with elegant patterns, perfect for sofas and curtains."
    }
];

const Products = () => {
    useSEO(
        'Product Catalog',
        'Explore our catalog of premium sarees, leggings, kurtis, dress suits, bedsheets, and garments.',
        'textile showroom collections, premium fabrics catalog'
    );

    const [activeCat, setActiveCat] = useState("All");

    const filteredProducts = activeCat === "All" 
        ? allProducts 
        : allProducts.filter(p => p.cat === activeCat);

    return (
        <div className="pt-24 min-h-screen bg-brand-linen text-brand-charcoal pb-20">
            {/* Header */}
            <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-15 scale-105" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
                        Collection Catalog
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
                        Products
                    </h1>
                    <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
                </div>
            </section>

            {/* Filter Dropdown */}
            <div className="max-w-[1600px] mx-auto px-6 py-8 flex justify-center border-b border-brand-charcoal/5">
                <div className="relative w-full max-w-xs text-left">
                    <label className="block text-[9px] tracking-widest uppercase font-black text-brand-charcoal/40 mb-2">
                        Filter by Category
                    </label>
                    <div className="relative">
                        <select
                            value={activeCat}
                            onChange={(e) => setActiveCat(e.target.value)}
                            className="w-full bg-white border border-brand-gold/30 hover:border-brand-gold transition-colors px-4 py-3.5 rounded-xl text-xs text-brand-charcoal font-serif tracking-wide focus:outline-none focus:border-brand-gold shadow-sm cursor-pointer appearance-none"
                        >
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-16 px-6 sm:px-10 max-w-[1600px] mx-auto">
                <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="group cursor-pointer bg-white border border-brand-emerald-accent/5 p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="aspect-[4/5] overflow-hidden bg-brand-emerald-dark/5 rounded-xl mb-5 relative">
                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-brand-emerald-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="space-y-1.5 px-1">
                                        <span className="text-[9px] text-brand-gold uppercase tracking-widest font-bold block">
                                            {p.cat}
                                        </span>
                                        <h3 className="text-sm font-serif font-medium text-brand-charcoal tracking-wide group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                                            {p.name}
                                        </h3>
                                        <p className="text-xs text-brand-charcoal/60 font-sans font-light mt-2 line-clamp-2">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-brand-linen-dark/60 flex justify-between items-center px-1">
                                    <span className="text-[9px] font-sans font-black text-brand-gold group-hover:text-brand-charcoal tracking-wider transition-all">
                                        Enquire Now &rarr;
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default Products;
