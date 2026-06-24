import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';

// Mapped unsplash templates for realistic graphics
const categoryImages = {
    "Sarees": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    "Leggings": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&q=80",
    "Kurtis": "https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&q=80",
    "Dress Suits": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80",
    "Bedsheets & Linen": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80",
    "Hosiery Items": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80",
    "Suiting": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    "Shirting": "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80",
    "Women's Ethnic": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
    "Men's Ethnic": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    "Children's Wear": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80",
    "Home Upholstery": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80"
};

// Generate 100+ products (12 categories * 9 items = 108 products)
const generateProducts = () => {
    const list = [];
    const categories = Object.keys(categoryImages);
    let id = 1;
    
    categories.forEach(cat => {
        for (let i = 1; i <= 9; i++) {
            list.push({
                id: id++,
                name: `${cat} Collection - Design ${100 + i}`,
                cat: cat,
                img: categoryImages[cat]
            });
        }
    });
    return list;
};

const allProducts = generateProducts();

const Products = () => {
    useSEO(
        'Products',
        'Explore our catalog of 100+ premium sarees, kurtis, dress suits, bedsheets, and garments.',
        'textile showroom collections, premium fabrics catalog'
    );

    const categories = ["All", ...Object.keys(categoryImages)];
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
                <div className="max-w-4xl mx-auto relative z-10 space-y-4">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.35em] text-brand-gold block">
                        Mall Catalog
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight uppercase text-white">
                        Our Collections
                    </h1>
                    <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-6"></div>
                </div>
            </section>

            {/* Filter Tabs */}
            <div className="max-w-[1600px] mx-auto px-6 py-12 flex justify-center border-b border-brand-charcoal/5">
                <div className="flex gap-x-8 gap-y-3 overflow-x-auto custom-horizontal-scrollbar py-3 max-w-full">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCat(cat)}
                            className={`text-[10px] uppercase tracking-widest font-bold whitespace-nowrap pb-2.5 border-b relative focus:outline-none transition-colors duration-200 ${
                                activeCat === cat ? 'text-brand-gold' : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                            }`}
                        >
                            {cat}
                            {activeCat === cat && (
                                <motion.div layoutId="underlineTab" className="absolute -bottom-[1px] left-0 w-full h-[1.5px] bg-brand-gold" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-16 px-6 sm:px-10 max-w-[1600px] mx-auto">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                                        <h3 className="text-sm font-serif font-medium text-brand-charcoal uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                                            {p.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-brand-linen-dark/60 flex justify-between items-center px-1">
                                    <span className="text-[9px] font-sans font-black uppercase text-brand-gold group-hover:text-brand-charcoal tracking-wider transition-all">
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
