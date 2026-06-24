import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Featured = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');

    // Exact list of 12 categories requested:
    const categories = [
        'All',
        'Sarees',
        'Leggings',
        'Kurtis',
        'Dress Suits',
        'Bedsheets & Linen',
        'Hosiery Items',
        'Suiting',
        'Shirting',
        'Formal & Ethnic Wear for Women',
        'Formal & Ethnic Wear for Men',
        'Formal & Ethnic Wear for Children',
        'Home Upholstery & Furnishing'
    ];

    const collections = [
        {
            id: 1,
            name: "Luxurious Sarees",
            subtitle: "Grace in every weave. Pure handloom Banarasis & silks.",
            category: "Sarees",
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        },
        {
            id: 2,
            name: "Premium Leggings",
            subtitle: "Lycra cotton stretch, breathable, comfort daily wear.",
            category: "Leggings",
            img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&q=80",
        },
        {
            id: 3,
            name: "Elegant Kurtis",
            subtitle: "Everyday, effortless styling in fine cotton & rayon blends.",
            category: "Kurtis",
            img: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&q=80",
        },
        {
            id: 4,
            name: "Dress Suits",
            subtitle: "Embroidered festive sets & salwar suits for special occasions.",
            category: "Dress Suits",
            img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
        },
        {
            id: 5,
            name: "Bedsheets & Linen",
            subtitle: "Luxurious 1000 thread-count Giza cotton sheetings.",
            category: "Bedsheets & Linen",
            img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
        },
        {
            id: 6,
            name: "Soft Hosiery",
            subtitle: "Daily essentials made of super-combed cotton fibers.",
            category: "Hosiery Items",
            img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
        },
        {
            id: 7,
            name: "Woolen Suiting",
            subtitle: "Bespoke Italian wool fabrics designed for custom tailors.",
            category: "Suiting",
            img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        },
        {
            id: 8,
            name: "Giza Cotton Shirting",
            subtitle: "Egyptian long-staple cotton offering high breathability.",
            category: "Shirting",
            img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
        },
        {
            id: 9,
            name: "Women's Couture",
            subtitle: "Formal lehengas & bridal gowns intricately hand-crafted.",
            category: "Formal & Ethnic Wear for Women",
            img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
        },
        {
            id: 10,
            name: "Men's Ethnic wear",
            subtitle: "Sherwanis & Bandhgalas designed with heritage patterns.",
            category: "Formal & Ethnic Wear for Men",
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
        },
        {
            id: 11,
            name: "Kids Festive clothing",
            subtitle: "Cute and comfortable designer clothes for children.",
            category: "Formal & Ethnic Wear for Children",
            img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",
        },
        {
            id: 12,
            name: "Home Upholstery",
            subtitle: "Premium heavy-weight jacquard curtains & sofa fabrics.",
            category: "Home Upholstery & Furnishing",
            img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
        }
    ];

    const filteredCollections = activeTab === 'All' 
        ? collections 
        : collections.filter(item => item.category === activeTab);

    return (
        <section className="py-24 px-6 sm:px-10 bg-brand-cream text-brand-plum">
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* ── Section Header ── */}
                <div className="text-center space-y-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-lavender block">
                        Explore Our Collections
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight">
                        Visual <span className="font-light italic text-brand-lavender lowercase font-serif">curations</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-brand-lavender mx-auto mt-4" />
                </div>

                {/* ── Tabs List ── */}
                <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto pb-6 overflow-x-auto no-scrollbar">
                    {categories.map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                    isActive 
                                        ? 'bg-brand-lavender text-brand-cream shadow-lg scale-105' 
                                        : 'bg-brand-light text-brand-plum border border-brand-gold/15 hover:border-brand-lavender hover:text-brand-lavender'
                                }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {/* ── Cards Grid (Magazine / Editorial Staggered Layout) ── */}
                <motion.div 
                    layout 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 pt-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCollections.map((item, idx) => {
                            // Assign varied aspect ratios based on index for a dynamic editorial flow
                            const aspectClass = (idx % 3 === 0) 
                                ? 'aspect-[4/5.2]' 
                                : (idx % 3 === 1) 
                                ? 'aspect-[4/4.6]' 
                                : 'aspect-[4/5.8]';
                            
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ duration: 0.5 }}
                                    key={item.id}
                                    onClick={() => navigate('/products')}
                                    className="group cursor-pointer flex flex-col bg-brand-light rounded-[2.2rem] border border-brand-gold/12 overflow-hidden shadow-md hover:shadow-2xl hover:border-brand-lavender/30 transition-all duration-500 text-left"
                                >
                                    <div className={`overflow-hidden bg-[#1f1625] relative ${aspectClass}`}>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-cover scale-102 group-hover:scale-108 transition-transform duration-[2000ms]"
                                        />
                                        <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                                        <div className="space-y-1">
                                            <span className="text-[9px] uppercase tracking-wider text-brand-lavender font-bold">
                                                {item.category}
                                            </span>
                                            <h3 className="text-base font-serif font-black text-brand-plum uppercase tracking-wide group-hover:text-brand-lavender transition-colors leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-[11px] text-stone-500 font-sans font-light leading-relaxed">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        
                                        <div className="pt-4 flex justify-between items-center border-t border-brand-gold/10 mt-4">
                                            <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand-plum/50 group-hover:text-brand-lavender transition-colors">
                                                View Details
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-brand-cream border border-brand-gold/12 flex items-center justify-center text-brand-lavender group-hover:bg-brand-lavender group-hover:text-brand-cream transition-all duration-300 shadow-sm">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {filteredCollections.length === 0 && (
                    <div className="py-16 text-center text-stone-400 font-sans">
                        We are adding more visual curations to this category soon.
                    </div>
                )}

            </div>
        </section>
    );
};

export default Featured;
