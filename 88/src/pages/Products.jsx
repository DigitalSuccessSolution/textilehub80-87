import React, { useState, useMemo } from 'react';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Columns, Sparkles, SlidersHorizontal, ArrowRight, MessageCircle, X, Check, ChevronDown } from 'lucide-react';

// Category mapping with high-quality fashion / textile images
const categoryImages = {
    "Sarees": "https://images.pexels.com/photos/37054322/pexels-photo-37054322.jpeg",
    "Leggings": "https://images.pexels.com/photos/31443911/pexels-photo-31443911.jpeg",
    "Kurtis": "https://images.pexels.com/photos/34155079/pexels-photo-34155079.jpeg",
    "Dress Suits": "https://images.pexels.com/photos/19581248/pexels-photo-19581248.jpeg",
    "Bedsheets & Linen": "https://images.pexels.com/photos/3847588/pexels-photo-3847588.jpeg",
    "Hosiery Items": "https://images.pexels.com/photos/5746079/pexels-photo-5746079.jpeg",
    "Suiting": "https://images.pexels.com/photos/37987847/pexels-photo-37987847.jpeg",
    "Shirting": "https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg",
    "Formal & Ethnic Wear for Women": "https://images.pexels.com/photos/34688015/pexels-photo-34688015.jpeg",
    "Formal & Ethnic Wear for Men": "https://images.pexels.com/photos/5724384/pexels-photo-5724384.jpeg",
    "Formal & Ethnic Wear for Children": "https://images.pexels.com/photos/16089631/pexels-photo-16089631.jpeg",
    "Home Upholstery & Furnishing": "https://images.pexels.com/photos/8135277/pexels-photo-8135277.jpeg"
};

// Category metadata for styling & materials
const categoryMeta = {
    "Sarees": { material: "Mulberry Silk, Georgette, Zari", price: "₹4,500 - ₹35,000", tag: "Handloom Heritage" },
    "Leggings": { material: "Lycra Cotton Blend, Breathable", price: "₹699 - ₹1,499", tag: "Comfort Wear" },
    "Kurtis": { material: "Chanderi Silk, Rayon, Linen", price: "₹1,200 - ₹5,999", tag: "Casual & Formal" },
    "Dress Suits": { material: "Anarkali Sets, Kurta Pajama Sets", price: "₹2,500 - ₹12,000", tag: "Festive Exclusive" },
    "Bedsheets & Linen": { material: "100% Giza Cotton, 400 TC", price: "₹1,800 - ₹8,500", tag: "Luxury Bedding" },
    "Hosiery Items": { material: "Super Combed Cotton, Stretchable", price: "₹450 - ₹1,800", tag: "Daily Comfort" },
    "Suiting": { material: "Fine Italian Wool, Cashmere Blend", price: "₹1,200 - ₹6,500 / Mtr", tag: "Bespoke Tailoring" },
    "Shirting": { material: "Pure Linen, Egyptian Cotton", price: "₹650 - ₹2,500 / Mtr", tag: "Premium Weave" },
    "Formal & Ethnic Wear for Women": { material: "Lehengas, Anarkalis, Gowns", price: "₹12,500 - ₹75,000", tag: "Bridal Signature" },
    "Formal & Ethnic Wear for Men": { material: "Sherwanis, Bandhgalas, Kurtas", price: "₹8,500 - ₹55,000", tag: "Groom Signature" },
    "Formal & Ethnic Wear for Children": { material: "Soft Silk blends, Organic cottons", price: "₹1,200 - ₹7,500", tag: "Kid's Festive" },
    "Home Upholstery & Furnishing": { material: "Jacquard, Velvet, Damask Weaves", price: "₹850 - ₹5,200 / Mtr", tag: "Artisanal Decor" }
};

// Generates exactly 1 product per collection (12 total)
const generateProducts = () => {
    const list = [];
    const categories = Object.keys(categoryImages);
    let id = 1;

    categories.forEach(cat => {
        const meta = categoryMeta[cat] || { material: "Premium Fiber", price: "Premium", tag: "Signature Wear" };
        list.push({
            id: id++,
            sku: `ATH-${cat.slice(0, 3).toUpperCase()}-101`,
            name: `${cat} Signature Collection`,
            cat: cat,
            img: categoryImages[cat],
            material: meta.material,
            price: meta.price,
            badge: meta.tag,
            desc: `Exquisite ${cat} item woven with high precision, offering unmatched texture profile, color fastness, and premium drape comfort.`
        });
    });
    return list;
};

const allProducts = generateProducts();

const Products = () => {
    useSEO(
        'Premium Collections',
        'Explore our catalog of 100+ premium sarees, kurtis, dress suits, bedsheets, and suiting shirting fabrics at Aurora Textile House.',
        'textile showroom collections, premium fabrics catalog, surat boutique'
    );

    const categories = ["All", ...Object.keys(categoryImages)];

    // States
    const [activeCat, setActiveCat] = useState("All");
    const [layoutMode, setLayoutMode] = useState("grid"); // "grid" (symmetric) or "lookbook" (asymmetric editorial)
    const [selectedProduct, setSelectedProduct] = useState(null); // for Quick View Modal
    const [filterBadge, setFilterBadge] = useState("All"); // extra badge filters

    // Filter logic
    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            const matchesCategory = activeCat === "All" || p.cat === activeCat;
            const matchesBadge = filterBadge === "All" || p.badge === filterBadge;
            return matchesCategory && matchesBadge;
        });
    }, [activeCat, filterBadge]);

    // Unique badges found in filtered list
    const availableBadges = ["All", "Bestseller", "New Arrival", "Limited Edition", "Traditional Weave"];

    const handleWhatsAppEnquiry = (prod) => {
        const text = encodeURIComponent(`Hello Aurora Textile House, I am interested in details and availability of:\nProduct: ${prod.name}\nSKU: ${prod.sku}\nCategory: ${prod.cat}\nMaterial: ${prod.material}\nPrice Range: ${prod.price}`);
        window.open(`https://wa.me/916353778329?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-24 font-sans">

            {/* ── Premium Editorial Header ── */}
            <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
                <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-5 text-left">
                        <div className="flex items-center gap-2">
                            <span className="text-[#C29E6B] text-xs">✦</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Chronicle of Weaves</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
                            Our Premium<br />
                            <span className="text-[#C29E6B] font-light italic">Collections</span>
                        </h1>
                        <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
                            Discover 100+ fine garments, hand-spun heritage sarees, luxurious home upholstery, and high-performance suiting fabrics.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[['100+', 'SKUs Available'], ['12', 'Collections'], ['B2B', 'Wholesale Pricing']].map(([v, l], i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-left hover:bg-white/8 transition-colors">
                                <span className="text-sm font-serif font-bold text-white block">{v}</span>
                                <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400 mt-0.5 block">{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Category Dropdown Selector ── */}
            <section className="py-12 bg-white border-b border-[#2E081B]/5">
                <div className="max-w-md mx-auto px-4 sm:px-6 text-left space-y-2 w-full overflow-hidden">
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C29E6B]">
                        Select Category Department
                    </label>
                    <div className="relative w-full">
                        <select
                            value={activeCat}
                            onChange={(e) => setActiveCat(e.target.value)}
                            className="w-full bg-white border border-[#2E081B]/15 hover:border-[#C29E6B] rounded-2xl px-5 py-4 text-xs font-serif font-bold uppercase tracking-wider text-[#2E081B] focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all cursor-pointer appearance-none max-w-full"
                        >
                            <option value="All">All Collections</option>
                            {Object.keys(categoryImages).map((catName) => {
                                const shortNames = {
                                    "Formal & Ethnic Wear for Women": "Women's Formal",
                                    "Formal & Ethnic Wear for Men": "Men's Formal",
                                    "Formal & Ethnic Wear for Children": "Kids' Formal",
                                    "Home Upholstery & Furnishing": "Home Furnishing"
                                };
                                const displayName = shortNames[catName] || catName;
                                return (
                                    <option key={catName} value={catName}>
                                        {displayName}
                                    </option>
                                );
                            })}
                        </select>
                        {/* Custom Dropdown Chevron Icon */}
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#C29E6B]">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Sub-filters & Layout Toggle Strip ── */}
            <section className="py-6 px-6 max-w-[1600px] mx-auto flex items-center justify-end gap-6 border-b border-[#2E081B]/5">
                {/* Layout switch controls */}
                <div className="flex items-center gap-4">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-sans">
                        Showing {filteredProducts.length} Results
                    </span>
                    <div className="w-px h-4 bg-stone-300" />

                    <div className="flex bg-white rounded-lg p-0.5 border border-stone-200">
                        <button
                            onClick={() => setLayoutMode("grid")}
                            className={`p-1.5 rounded transition-all cursor-pointer ${layoutMode === "grid" ? "bg-[#FAF5F0] text-[#C29E6B]" : "text-stone-400 hover:text-[#2E081B]"}`}
                            title="Symmetric Grid"
                        >
                            <Grid size={14} />
                        </button>
                        <button
                            onClick={() => setLayoutMode("lookbook")}
                            className={`p-1.5 rounded transition-all cursor-pointer ${layoutMode === "lookbook" ? "bg-[#FAF5F0] text-[#C29E6B]" : "text-stone-400 hover:text-[#2E081B]"}`}
                            title="Editorial Lookbook"
                        >
                            <Columns size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Main Catalog Grid ── */}
            <section className="py-12 px-6 sm:px-10 max-w-[1600px] mx-auto min-h-[400px]">

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-24 space-y-4">
                        <span className="text-3xl">🪡</span>
                        <h3 className="font-serif text-lg text-[#2E081B] uppercase tracking-wider font-bold">No collections found</h3>
                        <p className="text-xs text-stone-500 max-w-sm mx-auto font-sans leading-relaxed">
                            We couldn't find items matching your filters. Try selecting 'All Collections'.
                        </p>
                        <button
                            onClick={() => { setActiveCat("All"); setFilterBadge("All"); }}
                            className="mt-4 px-6 py-2.5 bg-[#2E081B] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#C29E6B] transition-colors cursor-pointer"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className={`grid ${layoutMode === "grid"
                            ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                            : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-16"
                            }`}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((p, idx) => {
                                // Dynamic lookbook layout offsets
                                const isLookbook = layoutMode === "lookbook";
                                const offsetClass = isLookbook && (idx % 3 === 1) ? "lg:mt-12" : isLookbook && (idx % 3 === 2) ? "lg:mt-6" : "";

                                return (
                                    <motion.div
                                        key={p.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        onClick={() => setSelectedProduct(p)}
                                        className={`group cursor-pointer bg-white p-3 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] border border-[#2E081B]/10 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col justify-between hover:border-[#C29E6B]/30 ${offsetClass}`}
                                    >
                                        {/* Image Display Frame */}
                                        <div className="w-full aspect-[4/5] overflow-hidden bg-[#2E081B] mb-3 sm:mb-5 rounded-xl sm:rounded-2xl relative flex-grow">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                                            />
                                            {/* Gradient dark shade */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                            {/* Tag badge inside image frame */}
                                            <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 backdrop-blur-md text-[#2E081B] text-[7px] sm:text-[8px] font-sans font-bold uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm border border-stone-200/50">
                                                {p.badge}
                                            </span>

                                            {/* Hover CTA overlays */}
                                            <div className="absolute inset-0 bg-[#2E081B]/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                <span className="bg-[#C29E6B] text-white text-[9px] uppercase tracking-widest font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                                                    Quick View <ArrowRight size={10} />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Label Details */}
                                        <div className="space-y-1.5 sm:space-y-2 mt-auto text-left">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[7px] sm:text-[9px] text-[#C29E6B] font-sans font-black uppercase tracking-widest">
                                                    {p.cat}
                                                </span>
                                                <span className="text-[8px] sm:text-[9px] text-stone-400 font-sans tracking-tight">
                                                    {p.sku}
                                                </span>
                                            </div>

                                            <h3 className="text-xs sm:text-sm font-serif font-bold text-[#2E081B] uppercase tracking-wider group-hover:text-[#C29E6B] transition-colors leading-tight truncate">
                                                {p.name}
                                            </h3>

                                            <div className="border-t border-[#2E081B]/5 pt-2 text-left">
                                                <span className="text-[7px] sm:text-[8px] uppercase tracking-wide text-stone-400 block font-sans">Fabric Type</span>
                                                <span className="text-[9px] sm:text-[10px] text-stone-600 font-sans truncate block font-light">
                                                    {p.material}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                )}
            </section>

            {/* ── Premium Quick View / Trade Enquiry Modal ── */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .custom-modal-scrollbar {
                                scrollbar-width: auto !important;
                                scrollbar-color: #C29E6B rgba(46, 8, 27, 0.05) !important;
                            }
                            .custom-modal-scrollbar::-webkit-scrollbar {
                                width: 8px !important;
                                height: 8px !important;
                                display: block !important;
                            }
                            .custom-modal-scrollbar::-webkit-scrollbar-track {
                                background: rgba(46, 8, 27, 0.05) !important;
                                display: block !important;
                            }
                            .custom-modal-scrollbar::-webkit-scrollbar-thumb {
                                background-color: #C29E6B !important;
                                border: 2px solid white !important;
                                border-radius: 4px !important;
                                display: block !important;
                            }
                        `}} />
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-[#2E081B]/80 backdrop-blur-sm"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="bg-white rounded-[2rem] border border-[#C29E6B]/30 shadow-2xl max-h-[85vh] overflow-y-auto max-w-xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 custom-modal-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-6 top-6 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-[#2E081B] hover:bg-[#C29E6B] hover:text-white transition-colors z-20 cursor-pointer shadow"
                            >
                                <X size={15} />
                            </button>

                            {/* Left: Product Image */}
                            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden bg-[#2E081B]">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/40 to-transparent" />
                                <span className="absolute bottom-6 left-6 bg-[#C29E6B] text-white text-[9px] font-sans font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
                                    {selectedProduct.badge}
                                </span>
                            </div>

                            {/* Right: Details & Call to Action */}
                            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                                <div className="space-y-4">
                                    <span className="text-[9px] text-[#C29E6B] font-sans font-black uppercase tracking-widest block">
                                        {selectedProduct.cat}
                                    </span>
                                    <h4 className="font-serif text-xl uppercase tracking-wide text-[#2E081B] font-bold leading-tight">
                                        {selectedProduct.name}
                                    </h4>

                                    <div className="flex gap-4 text-xs font-sans text-stone-500 pb-2 border-b border-[#2E081B]/5">
                                        <p><strong>SKU:</strong> {selectedProduct.sku}</p>
                                        <p><strong>Showroom Location:</strong> Surat</p>
                                    </div>

                                    <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                                        {selectedProduct.desc}
                                    </p>

                                    {/* Specifications */}

                                </div>

                                {/* B2B / Trade Enquiry WhatsApp Button */}
                                <div className="space-y-3 pt-2">
                                    <button
                                        onClick={() => handleWhatsAppEnquiry(selectedProduct)}
                                        className="w-full bg-[#9C4B6E] hover:bg-[#803856] text-white py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <MessageCircle size={14} /> Send WhatsApp Enquiry
                                    </button>
                                    <p className="text-[9px] text-stone-400 text-center font-sans">
                                        Trade enquiries are routed directly to our wholesale desk coordinator.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Products;
