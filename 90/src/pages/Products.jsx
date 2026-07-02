import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

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
        img: "https://images.pexels.com/photos/13155748/pexels-photo-13155748.jpeg",
        desc: "Exquisite hand-woven Banarasi silk saree with ornate golden zari borders and classic motifs."
    },
    {
        id: 2,
        name: "Premium Cotton Stretch Leggings",
        cat: "Leggings",
        img: "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg",
        desc: "Ultra-soft, breathable cotton leggings with 4-way stretch for maximum comfort and style."
    },
    {
        id: 3,
        name: "Elegant Embroidered Georgette Kurti",
        cat: "Kurtis",
        img: "https://images.pexels.com/photos/20420565/pexels-photo-20420565.jpeg",
        desc: "Intricately designed floral embroidery on lightweight georgette fabric with a modern silhouette."
    },
    {
        id: 4,
        name: "Royal Designer Anarkali Dress Suit",
        cat: "Dress Suits",
        img: "https://images.pexels.com/photos/13153337/pexels-photo-13153337.jpeg",
        desc: "Stunning flared Anarkali suit set with heavy embellishments, matching dupatta, and pants."
    },
    {
        id: 5,
        name: "Luxury Satin Bedsheet & Linen Set",
        cat: "Bedsheets & Linen",
        img: "https://images.pexels.com/photos/26756401/pexels-photo-26756401.jpeg",
        desc: "Premium high-thread-count satin bedsheet with matching pillow covers for absolute luxury."
    },
    {
        id: 6,
        name: "Super-Soft Premium Hosiery Innerwear",
        cat: "Hosiery Items",
        img: "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg",
        desc: "Premium combed cotton innerwear designed for unmatched daily breathability and comfort."
    },
    {
        id: 7,
        name: "Premium Italian Wool Blend Suiting",
        cat: "Suiting",
        img: "https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg",
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
        img: "https://images.pexels.com/photos/9436776/pexels-photo-9436776.jpeg",
        desc: "Traditional men's ethnic set with premium silk fabric and detailed embroidery on the collar."
    },
    {
        id: 11,
        name: "Cute Festive Ethnic Dress for Children",
        cat: "Formal & Ethnic Wear for Children",
        img: "https://images.pexels.com/photos/4452939/pexels-photo-4452939.jpeg",
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
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filteredProducts = activeCat === "All" 
        ? allProducts 
        : allProducts.filter(p => p.cat === activeCat);

    return (
        <div className="pt-20 min-h-screen bg-brand-linen text-brand-charcoal pb-20">
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
            <div className="max-w-[1600px] mx-auto px-6 py-8 flex justify-center border-b border-brand-charcoal/5 relative z-30">
                <div className="relative w-full max-w-xs text-left">
                    <span className="block text-[9px] tracking-widest uppercase font-black text-brand-charcoal/40 mb-2">
                        Filter by Category
                    </span>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full bg-white border border-brand-gold/30 hover:border-brand-gold transition-all px-4 py-3.5 rounded-xl text-xs text-brand-charcoal font-serif tracking-wide focus:outline-none flex items-center justify-between shadow-sm cursor-pointer"
                        >
                            <span>{activeCat}</span>
                            <ChevronDown size={14} className={`text-brand-gold transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 right-0 mt-2 bg-white border border-brand-gold/15 rounded-xl shadow-xl z-45 max-h-60 overflow-y-auto visible-scrollbar">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setActiveCat(cat);
                                            setDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-xs font-sans transition-colors cursor-pointer flex items-center justify-between ${
                                            activeCat === cat 
                                                ? 'bg-brand-emerald-dark/10 text-brand-emerald-dark font-bold' 
                                                : 'text-brand-charcoal hover:bg-brand-linen'
                                        }`}
                                    >
                                        <span>{cat}</span>
                                        {activeCat === cat && <Check size={12} className="text-brand-emerald-dark" />}
                                    </button>
                                ))}
                            </div>
                        )}
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
