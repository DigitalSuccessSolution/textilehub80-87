import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Columns, Sparkles, SlidersHorizontal, ArrowRight, MessageCircle, X, Check } from 'lucide-react';

// Exact 12 categories as requested
const categoryImages = {
    "Sarees": "https://images.pexels.com/photos/17113983/pexels-photo-17113983.jpeg",
    "Leggings": "https://images.pexels.com/photos/34178834/pexels-photo-34178834.jpeg",
    "Kurtis": "https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg",
    "Dress Suits": "https://images.pexels.com/photos/27687923/pexels-photo-27687923.jpeg",
    "Bedsheets & Linen": "https://images.pexels.com/photos/9616714/pexels-photo-9616714.jpeg",
    "Hosiery Items": "https://images.pexels.com/photos/9594141/pexels-photo-9594141.jpeg",
    "Suiting": "https://images.pexels.com/photos/6065984/pexels-photo-6065984.jpeg",
    "Shirting": "https://images.pexels.com/photos/35415004/pexels-photo-35415004.jpeg",
    "Formal & Ethnic Wear for Women": "https://images.pexels.com/photos/34688014/pexels-photo-34688014.jpeg",
    "Formal & Ethnic Wear for Men": "https://images.pexels.com/photos/3998093/pexels-photo-3998093.jpeg",
    "Formal & Ethnic Wear for Children": "https://images.pexels.com/photos/11254168/pexels-photo-11254168.jpeg",
    "Home Upholstery & Furnishing": "https://images.pexels.com/photos/27535711/pexels-photo-27535711.jpeg"
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

    // If navigated from home page, update category
    useEffect(() => {
        if (location.state?.category) {
            setActiveCat(location.state.category);
        }
    }, [location.state]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            return activeCat === "All" || p.cat === activeCat;
        });
    }, [activeCat]);

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

            {/* ── Sub-filters Strip ── */}
            <section className="py-6 px-6 max-w-[1600px] mx-auto border-b border-[#10211F]/5">
                
                {/* Category Badges */}
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    <span className="text-[9px] font-bold  tracking-wider text-[#C29E6B] mr-2 flex items-center gap-1.5">
                        <SlidersHorizontal size={10} /> Filter By:
                    </span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-3 py-1 rounded-full text-[9px] font-bold  tracking-wider border transition-all cursor-pointer ${
                                activeCat === cat 
                                    ? 'bg-[#10211F] text-white border-[#10211F]' 
                                    : 'bg-white text-stone-500 border-stone-200 hover:border-[#C29E6B]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
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
                            onClick={() => { setActiveCat("All"); }}
                            className="mt-4 px-6 py-2.5 bg-[#10211F] text-white text-[10px] font-bold  tracking-widest rounded-full hover:bg-[#C29E6B] transition-colors cursor-pointer"
                        >
                            Reset Category
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
                            className="bg-white rounded-[2.5rem] border border-[#C29E6B]/30 shadow-2xl overflow-hidden max-w-2xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[480px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-6 top-6 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-[#10211F] hover:bg-[#C29E6B] hover:text-white transition-colors z-20 cursor-pointer shadow"
                            >
                                <X size={15} />
                            </button>

                            {/* Left: Product Image */}
                            <div className="relative aspect-square md:aspect-auto md:h-[480px] overflow-hidden bg-[#10211F]">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#10211F]/40 to-transparent" />
                                <span className="absolute bottom-4 left-4 bg-[#C29E6B] text-white text-[8px] font-sans font-bold  tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                                    {selectedProduct.badge}
                                </span>
                            </div>

                            {/* Right: Details & Call to Action */}
                            <div className="p-6 flex flex-col justify-between space-y-4 text-left overflow-y-auto max-h-[480px]">
                                <div className="space-y-3">
                                    <span className="text-[9px] text-[#C29E6B] font-sans font-black  tracking-widest block">
                                        {selectedProduct.cat}
                                    </span>
                                    <h4 className="font-serif text-lg  tracking-wide text-[#10211F] font-bold leading-tight">
                                        {selectedProduct.name}
                                    </h4>
                                    
                                    <div className="flex gap-4 text-[10px] font-sans text-stone-500 pb-2 border-b border-[#10211F]/5">
                                        <p><strong>SKU:</strong> {selectedProduct.sku}</p>
                                        <p><strong>Location:</strong> Surat</p>
                                    </div>

                                    <p className="text-[11px] text-stone-600 leading-relaxed font-sans font-light">
                                        {selectedProduct.desc}
                                    </p>

                                    {/* Specifications */}
                                    <div className="bg-[#FAF6F2] p-3 rounded-2xl space-y-1.5 border border-[#10211F]/5 text-[11px] text-[#182220]">
                                        <div className="flex justify-between">
                                            <span className="text-stone-400  tracking-wider text-[8px] font-bold">Fabric Material</span>
                                            <span className="font-medium text-[#10211F]">{selectedProduct.material}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-stone-400  tracking-wider text-[8px] font-bold">Quality Standard</span>
                                            <span className="font-medium text-emerald-600 flex items-center gap-1">
                                                <Check size={11} strokeWidth={3} /> Certified ISO-105
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* B2B / Trade Enquiry WhatsApp Button */}
                                <div className="space-y-2 pt-1">
                                    <button
                                        onClick={() => handleWhatsAppEnquiry(selectedProduct)}
                                        className="w-full bg-[#2C443E] hover:bg-[#1B2E2A] text-white py-3 rounded-full font-bold text-[10px]  tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <MessageCircle size={13} /> Send WhatsApp Enquiry
                                    </button>
                                    <p className="text-[8px] text-stone-400 text-center font-sans">
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
