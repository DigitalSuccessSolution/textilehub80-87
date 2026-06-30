import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Columns, Sparkles, SlidersHorizontal, ArrowRight, MessageCircle, X, Check } from 'lucide-react';

// Exact 12 categories as requested
const categoryImages = {
    "Sarees": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    "Leggings": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&q=80",
    "Kurtis": "https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&q=80",
    "Dress Suits": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80",
    "Bedsheets & Linen": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80",
    "Hosiery Items": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80",
    "Suiting": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    "Shirting": "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80",
    "Formal & Ethnic Wear for Women": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
    "Formal & Ethnic Wear for Men": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    "Formal & Ethnic Wear for Children": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80",
    "Home Upholstery & Furnishing": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80"
};

const categoryMeta = {
    "Sarees": { material: "Mulberry Silk, Georgette, Zari", tag: "Handloom Heritage" },
    "Leggings": { material: "Lycra Cotton Blend, Breathable", tag: "Comfort Wear" },
    "Kurtis": { material: "Chanderi Silk, Rayon, Linen", tag: "Casual & Formal" },
    "Dress Suits": { material: "Anarkali Sets, Kurta Pajama Sets", tag: "Festive Exclusive" },
    "Bedsheets & Linen": { material: "100% Giza Cotton, 400 TC", tag: "Luxury Bedding" },
    "Hosiery Items": { material: "Super Combed Cotton, Stretchable", tag: "Daily Comfort" },
    "Suiting": { material: "Fine Italian Wool, Cashmere Blend", tag: "Bespoke Tailoring" },
    "Shirting": { material: "Pure Linen, Egyptian Cotton", tag: "Premium Weave" },
    "Formal & Ethnic Wear for Women": { material: "Lehengas, Anarkalis, Gowns", tag: "Bridal Signature" },
    "Formal & Ethnic Wear for Men": { material: "Sherwanis, Bandhgalas, Kurtas", tag: "Groom Signature" },
    "Formal & Ethnic Wear for Children": { material: "Soft Silk blends, Organic cottons", tag: "Kid's Festive" },
    "Home Upholstery & Furnishing": { material: "Jacquard, Velvet, Damask Weaves", tag: "Artisanal Decor" }
};

// Generates exactly 1 product per collection (12 total)
const generateProducts = () => {
    const list = [];
    const categories = Object.keys(categoryImages);
    let id = 1;
    
    categories.forEach(cat => {
        const meta = categoryMeta[cat] || { material: "Premium Fiber", tag: "Selected Wear" };
        list.push({
            id: id++,
            sku: `ATH-${cat.slice(0, 3).toUpperCase()}-101`,
            name: `${cat} Signature Collection`,
            cat: cat,
            img: categoryImages[cat],
            material: meta.material,
            badge: meta.tag,
            desc: `Exquisite ${cat} woven with high precision, offering unmatched texture profile, color fastness, and premium drape comfort.`
        });
    });
    return list;
};

const allProducts = generateProducts();

const Products = () => {
    const location = useLocation();
    
    useSEO(
        'Premium Collections',
        'Explore our catalog of premium sarees, kurtis, dress suits, bedsheets, and suiting shirting fabrics at Aurora Textile House.',
        'textile showroom collections, premium fabrics catalog, surat boutique'
    );

    const categories = ["All", ...Object.keys(categoryImages)];
    
    // States
    const [activeCat, setActiveCat] = useState(location.state?.category || "All");
    const [layoutMode, setLayoutMode] = useState("grid"); // "grid" (symmetric) or "lookbook" (asymmetric editorial)
    const [selectedProduct, setSelectedProduct] = useState(null); // for Quick View Modal
    const [filterBadge, setFilterBadge] = useState("All"); // extra badge filters

    // If navigated from home page, update category
    useEffect(() => {
        if (location.state?.category) {
            setActiveCat(location.state.category);
        }
    }, [location.state]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            const matchesCategory = activeCat === "All" || p.cat === activeCat;
            const matchesBadge = filterBadge === "All" || p.badge === filterBadge;
            return matchesCategory && matchesBadge;
        });
    }, [activeCat, filterBadge]);

    // Unique badges found in filtered list
    const availableBadges = ["All", ...new Set(allProducts.map(p => p.badge))];

    const handleWhatsAppEnquiry = (prod) => {
        const text = encodeURIComponent(`Hello Aurora Textile House, I am interested in details and availability of:\nProduct: ${prod.name}\nSKU: ${prod.sku}\nCategory: ${prod.cat}\nMaterial: ${prod.material}`);
        window.open(`https://wa.me/916353778329?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24 font-sans">
            
            {/* ── Premium Editorial Header ── */}
            <section className="pt-40 pb-16 bg-[#FAF6F2] border-b border-[#10211F]/10 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-left relative flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-[8px]">✦</span>
              <span className="text-[9px] font-sans font-bold  tracking-[0.3em] text-[#2C443E]">
                CHRONICLE OF WEAVES
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-14 bg-[#C29E6B] rounded-full shrink-0" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight  text-[#10211F] leading-none">
                Our Premium <span className="text-[#C29E6B] italic font-light">Collections</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/30 pl-6 py-2">
            <p className="text-stone-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Discover 100+ fine garments, hand-spun heritage sarees, luxurious home upholstery, and high-performance suiting fabrics.
            </p>
          </div>
          
        </div>
      </section>

            {/* ── Visual Circular Category Selectors ── */}
            <section className="py-12 bg-white border-b border-[#10211F]/5 overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px]  tracking-widest font-black text-[#C29E6B]">Select Department</span>
                        {activeCat !== "All" && (
                            <button 
                                onClick={() => setActiveCat("All")} 
                                className="text-[9px]  tracking-widest font-bold text-[#10211F] hover:text-[#C29E6B] flex items-center gap-1 cursor-pointer"
                            >
                                Reset Category <X size={10} />
                            </button>
                        )}
                    </div>
                    
                    {/* Visual image slider list */}
                    <div className="flex gap-6 overflow-x-auto pb-4 custom-horizontal-scrollbar scroll-smooth">
                        {/* 'All' option */}
                        <div 
                            onClick={() => setActiveCat("All")}
                            className="flex flex-col items-center gap-3 cursor-pointer shrink-0 group"
                        >
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                activeCat === "All" ? 'border-[#C29E6B] scale-105 shadow-md bg-[#10211F] text-white' : 'border-stone-200 bg-[#FAF6F2] text-[#10211F] group-hover:border-[#C29E6B]/50'
                            }`}>
                                <Sparkles size={22} className={activeCat === "All" ? "animate-pulse" : ""} />
                            </div>
                            <span className={`text-[9px] sm:text-[10px] font-sans font-bold  tracking-wider transition-colors ${
                                activeCat === "All" ? 'text-[#C29E6B]' : 'text-stone-500 group-hover:text-[#10211F]'
                            }`}>
                                All Collections
                            </span>
                        </div>

                        {/* Image mapped categories */}
                        {Object.entries(categoryImages).map(([catName, imgUrl]) => {
                            const isSelected = activeCat === catName;
                            return (
                                <div 
                                    key={catName}
                                    onClick={() => setActiveCat(catName)}
                                    className="flex flex-col items-center gap-3 cursor-pointer shrink-0 group"
                                >
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 relative ${
                                        isSelected ? 'border-[#C29E6B] scale-105 shadow-md' : 'border-stone-200 group-hover:border-[#C29E6B]/50'
                                    }`}>
                                        <img 
                                            src={imgUrl} 
                                            alt={catName} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <div className={`absolute inset-0 bg-[#10211F]/30 transition-opacity ${isSelected ? 'opacity-0' : 'opacity-30 group-hover:opacity-10'}`} />
                                    </div>
                                    <span className={`text-[9px] sm:text-[10px] font-sans font-bold  tracking-wider text-center max-w-[100px] truncate transition-colors ${
                                        isSelected ? 'text-[#C29E6B]' : 'text-stone-500 group-hover:text-[#10211F]'
                                    }`}>
                                        {catName}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Sub-filters & Layout Toggle Strip ── */}
            <section className="py-6 px-6 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#10211F]/5">
                
                {/* Secondary Tag Badges */}
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[9px] font-bold  tracking-wider text-[#C29E6B] mr-2 flex items-center gap-1.5">
                        <SlidersHorizontal size={10} /> Filter By:
                    </span>
                    {availableBadges.map((bg) => (
                        <button
                            key={bg}
                            onClick={() => setFilterBadge(bg)}
                            className={`px-3 py-1 rounded-full text-[9px] font-bold  tracking-wider border transition-all cursor-pointer ${
                                filterBadge === bg 
                                    ? 'bg-[#10211F] text-white border-[#10211F]' 
                                    : 'bg-white text-stone-500 border-stone-200 hover:border-[#C29E6B]'
                            }`}
                        >
                            {bg}
                        </button>
                    ))}
                </div>

                {/* Layout switch controls */}
                <div className="flex items-center gap-4">
                    <span className="text-[10px] text-stone-400  tracking-widest font-sans">
                        Showing {filteredProducts.length} Results
                    </span>
                    <div className="w-px h-4 bg-stone-300" />
                    
                    <div className="flex bg-white rounded-lg p-0.5 border border-stone-200">
                        <button
                            onClick={() => setLayoutMode("grid")}
                            className={`p-1.5 rounded transition-all cursor-pointer ${layoutMode === "grid" ? "bg-[#FAF6F2] text-[#C29E6B]" : "text-stone-400 hover:text-[#10211F]"}`}
                            title="Symmetric Grid"
                        >
                            <Grid size={14} />
                        </button>
                        <button
                            onClick={() => setLayoutMode("lookbook")}
                            className={`p-1.5 rounded transition-all cursor-pointer ${layoutMode === "lookbook" ? "bg-[#FAF6F2] text-[#C29E6B]" : "text-stone-400 hover:text-[#10211F]"}`}
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
                        <h3 className="font-serif text-lg text-[#10211F]  tracking-wider font-bold">No collections found</h3>
                        <p className="text-xs text-stone-500 max-w-sm mx-auto font-sans leading-relaxed">
                            We couldn't find items matching your filters. Try selecting 'All Collections'.
                        </p>
                        <button 
                            onClick={() => { setActiveCat("All"); setFilterBadge("All"); }}
                            className="mt-4 px-6 py-2.5 bg-[#10211F] text-white text-[10px] font-bold  tracking-widest rounded-full hover:bg-[#C29E6B] transition-colors cursor-pointer"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <motion.div 
                        layout 
                        className={`grid ${
                            layoutMode === "grid" 
                                ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" 
                                : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-10 sm:gap-y-16"
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
                                        className={`group cursor-pointer bg-white p-3.5 rounded-[2rem] border border-stone-200 hover:border-[#C29E6B] shadow-sm hover:shadow-2xl hover:translate-y-[-6px] transition-all duration-500 flex flex-col justify-between ${offsetClass}`}
                                    >
                                        {/* Image Display Frame */}
                                        <div className="w-full aspect-[4/5] overflow-hidden bg-[#10211F] mb-4 rounded-[1.5rem] relative flex-grow border border-stone-200/40">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                                            />
                                            {/* Gradient dark shade */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#10211F]/50 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                                            
                                            {/* Tag badge inside image frame */}
                                            <span className="absolute top-4 left-4 bg-[#10211F]/90 backdrop-blur-sm text-[#C29E6B] text-[7px] font-sans font-bold  tracking-widest px-3 py-1.5 rounded-full shadow-sm border border-white/10">
                                                {p.badge}
                                            </span>
 
                                            {/* Hover CTA overlays */}
                                            <div className="absolute inset-0 bg-[#10211F]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                <span className="bg-[#C29E6B] text-white text-[8px]  tracking-widest font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                                                    Quick View <ArrowRight size={10} />
                                                </span>
                                            </div>
                                        </div>
 
                                        {/* Label Details */}
                                        <div className="space-y-2 mt-auto text-left px-1.5 pb-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[8px] sm:text-[9px] text-[#C29E6B] font-sans font-black  tracking-widest">
                                                    {p.cat}
                                                </span>
                                                <span className="text-[9px] text-stone-400 font-sans tracking-tight">
                                                    {p.sku}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-xs sm:text-sm font-serif font-bold text-[#10211F]  tracking-wider group-hover:text-[#C29E6B] transition-colors leading-tight truncate">
                                                {p.name}
                                            </h3>
 
                                            <div className="border-t border-[#10211F]/5 pt-2.5 flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span className="text-[7px]  tracking-wide text-stone-400">Fabric Type</span>
                                                    <span className="text-[9px] text-stone-600 font-sans truncate max-w-[110px] font-light">
                                                        {p.material}
                                                    </span>
                                                </div>
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
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-[#10211F]/80 backdrop-blur-sm"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="bg-white rounded-[2.5rem] border border-[#C29E6B]/30 shadow-2xl overflow-hidden max-w-3xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-6 top-6 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-[#10211F] hover:bg-[#C29E6B] hover:text-white transition-colors z-20 cursor-pointer shadow"
                            >
                                <X size={15} />
                            </button>

                            {/* Left: Product Image */}
                            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden bg-[#10211F]">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#10211F]/40 to-transparent" />
                                <span className="absolute bottom-6 left-6 bg-[#C29E6B] text-white text-[9px] font-sans font-bold  tracking-widest px-4 py-2 rounded-full border border-white/20">
                                    {selectedProduct.badge}
                                </span>
                            </div>

                            {/* Right: Details & Call to Action */}
                            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                                <div className="space-y-4">
                                    <span className="text-[9px] text-[#C29E6B] font-sans font-black  tracking-widest block">
                                        {selectedProduct.cat}
                                    </span>
                                    <h4 className="font-serif text-xl  tracking-wide text-[#10211F] font-bold leading-tight">
                                        {selectedProduct.name}
                                    </h4>
                                    
                                    <div className="flex gap-4 text-xs font-sans text-stone-500 pb-2 border-b border-[#10211F]/5">
                                        <p><strong>SKU:</strong> {selectedProduct.sku}</p>
                                        <p><strong>Showroom Location:</strong> Surat</p>
                                    </div>

                                    <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                                        {selectedProduct.desc}
                                    </p>

                                    {/* Specifications */}
                                    <div className="bg-[#FAF6F2] p-4 rounded-2xl space-y-2 border border-[#10211F]/5 text-xs text-[#182220]">
                                        <div className="flex justify-between">
                                            <span className="text-stone-400  tracking-wider text-[8px] font-bold">Fabric Material</span>
                                            <span className="font-medium text-[#10211F]">{selectedProduct.material}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-stone-400  tracking-wider text-[8px] font-bold">Quality Standard</span>
                                            <span className="font-medium text-emerald-600 flex items-center gap-1">
                                                <Check size={12} strokeWidth={3} /> Certified ISO-105
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* B2B / Trade Enquiry WhatsApp Button */}
                                <div className="space-y-3 pt-2">
                                    <button
                                        onClick={() => handleWhatsAppEnquiry(selectedProduct)}
                                        className="w-full bg-[#2C443E] hover:bg-[#1B2E2A] text-white py-3.5 rounded-full font-bold text-[10px]  tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <MessageCircle size={14} /> Send WhatsApp Enquiry
                                    </button>
                                    <p className="text-[9px] text-stone-400 text-center font-sans">
                                        Trade inquiries are routed directly to our wholesale desk coordinator.
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
