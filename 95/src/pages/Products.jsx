import React, { useState, useMemo } from 'react';
import useSEO from '../hooks/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Columns, Sparkles, SlidersHorizontal, ArrowRight, MessageCircle, X, Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Category mapping with high-quality fashion / textile images
const categoryImages = {
    "Sarees": "https://images.pexels.com/photos/13155748/pexels-photo-13155748.jpeg",
    "Leggings": "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg",
    "Kurtis": "https://images.pexels.com/photos/20420565/pexels-photo-20420565.jpeg",
    "Dress Suits": "https://images.pexels.com/photos/13153337/pexels-photo-13153337.jpeg",
    "Bedsheets & Linen": "https://images.pexels.com/photos/26756401/pexels-photo-26756401.jpeg",
    "Hosiery Items": "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg",
    "Suiting": "https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg",
    "Shirting": "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    "Formal & Ethnic Wear for Women": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    "Formal & Ethnic Wear for Men": "https://images.pexels.com/photos/9436776/pexels-photo-9436776.jpeg",
    "Formal & Ethnic Wear for Children": "https://images.pexels.com/photos/4452939/pexels-photo-4452939.jpeg",
    "Home Upholstery & Furnishing": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
};

const categoryGalleries = {
    "Sarees": [
        "https://images.pexels.com/photos/13155748/pexels-photo-13155748.jpeg",
        "https://images.pexels.com/photos/13155747/pexels-photo-13155747.jpeg",
        "https://images.pexels.com/photos/38246580/pexels-photo-38246580.jpeg"
    ],
    "Leggings": [
        "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg",
        "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg",
        "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg"
    ],
    "Kurtis": [
        "https://images.pexels.com/photos/20420565/pexels-photo-20420565.jpeg",
        "https://images.pexels.com/photos/20420561/pexels-photo-20420561.jpeg",
        "https://images.pexels.com/photos/13153337/pexels-photo-13153337.jpeg"
    ],
    "Dress Suits": [
        "https://images.pexels.com/photos/13153337/pexels-photo-13153337.jpeg",
        "https://images.pexels.com/photos/20420565/pexels-photo-20420565.jpeg",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
    ],
    "Bedsheets & Linen": [
        "https://images.pexels.com/photos/26756401/pexels-photo-26756401.jpeg",
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
    ],
    "Hosiery Items": [
        "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg",
        "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg",
        "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg"
    ],
    "Suiting": [
        "https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg",
        "https://images.pexels.com/photos/3775163/pexels-photo-3775163.jpeg",
        "https://images.pexels.com/photos/36029/pexels-photo-36029.jpg"
    ],
    "Shirting": [
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
        "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg",
        "https://images.pexels.com/photos/4622224/pexels-photo-4622224.jpeg"
    ],
    "Formal & Ethnic Wear for Women": [
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
        "https://images.pexels.com/photos/13155748/pexels-photo-13155748.jpeg",
        "https://images.pexels.com/photos/13155747/pexels-photo-13155747.jpeg"
    ],
    "Formal & Ethnic Wear for Men": [
        "https://images.pexels.com/photos/9436776/pexels-photo-9436776.jpeg",
        "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg",
        "https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg"
    ],
    "Formal & Ethnic Wear for Children": [
        "https://images.pexels.com/photos/4452939/pexels-photo-4452939.jpeg",
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
        "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg"
    ],
    "Home Upholstery & Furnishing": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
        "https://images.pexels.com/photos/26756401/pexels-photo-26756401.jpeg"
    ]
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

// Generates 108 products (12 categories * 1 styles = 12 products) with enriched mock information
const generateProducts = () => {
    const list = [];
    const categories = Object.keys(categoryImages);
    let id = 1;

    const styleTags = ["Bestseller", "New Arrival", "Limited Edition", "Traditional Weave", "Premium Selection", "Designer Choice"];

    categories.forEach(cat => {
        const meta = categoryMeta[cat] || { material: "Premium Fiber", price: "₹1,500", tag: "Selected Wear" };
        for (let i = 1; i <= 1; i++) {
            list.push({
                id: id++,
                sku: `RTM-${cat.slice(0, 3).toUpperCase()}-${100 + i}`,
                name: `Premium Handcrafted ${cat}`,
                cat: cat,
                img: categoryImages[cat],
                gallery: categoryGalleries[cat] || [categoryImages[cat]],
                material: meta.material,
                price: meta.price,
                badge: styleTags[(id + i) % styleTags.length],
                desc: `Exquisite ${cat} item woven with high precision, offering unmatched texture profile, color fastness, and premium drape comfort.`
            });
        }
    });
    return list;
};

const allProducts = generateProducts();

const Products = () => {
    useSEO(
        'Premium Collections',
        'Explore our catalog of premium sarees, kurtis, dress suits, bedsheets, and suiting shirting fabrics at Retail Textile Mall.',
        'textile showroom collections, premium fabrics catalog, Retail Textile products'
    );

    const categories = ["All", ...Object.keys(categoryImages)];

    // States
    const [activeCat, setActiveCat] = useState("All");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [layoutMode, setLayoutMode] = useState("grid"); // "grid" or "lookbook"
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
        const text = encodeURIComponent(`Hello Retail Textile Mall, I am interested in details and availability of:\nProduct: ${prod.name}\nSKU: ${prod.sku}\nCategory: ${prod.cat}\nMaterial: ${prod.material}`);
        window.open(`https://wa.me/916353778329?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 font-sans">      {/* ── Page Hero Header ── */}
            <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
                    <div className="space-y-3">
                        <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
                            CHRONICLE OF WEAVES
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
                            Our Signature <span className="text-brand-lavender italic font-light lowercase font-serif">gallery</span>
                        </h1>
                        <div className="w-12 h-0.5 bg-brand-lavender" />
                    </div>
                    <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
                        SINCE 1998 • PREMIUM WEAVES
                    </div>
                </div>
            </section>

            {/* Custom Categories Dropdown Selector */}
            <section className="py-8 bg-brand-light border-b border-brand-gold/15 relative z-30">
                <div className="max-w-7xl mx-auto px-6 flex justify-center">
                    <div className="relative w-full max-w-xs text-left">
                        <span className="block text-[10px] uppercase tracking-widest font-black text-brand-lavender mb-2">
                            Select Category
                        </span>
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full bg-brand-cream border border-brand-gold/30 hover:border-brand-lavender transition-all px-4 py-3 rounded-xl text-xs text-brand-plum font-serif tracking-wide focus:outline-none flex items-center justify-between shadow-sm cursor-pointer"
                            >
                                <span>{activeCat}</span>
                                <ChevronDown size={14} className={`text-brand-lavender transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 right-0 mt-2 bg-brand-cream border border-brand-gold/15 rounded-xl shadow-xl z-45 max-h-60 overflow-y-auto visible-scrollbar">
                                    {categories.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setActiveCat(cat);
                                                setDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-xs font-sans transition-colors cursor-pointer flex items-center justify-between ${activeCat === cat
                                                ? 'bg-brand-lavender/10 text-brand-lavender font-bold'
                                                : 'text-brand-plum hover:bg-brand-light'
                                                }`}
                                        >
                                            <span>{cat}</span>
                                            {activeCat === cat && <Check size={12} className="text-brand-lavender" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            {/* ── Main Catalog Grid ── */}
            <section className="py-12 px-6 sm:px-10 max-w-7xl mx-auto min-h-[400px]">

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-24 space-y-4">
                        <span className="text-3xl">🪡</span>
                        <h3 className="font-serif text-lg text-brand-plum uppercase tracking-wider font-bold">No collections found</h3>
                        <p className="text-xs text-stone-500 max-w-sm mx-auto font-sans leading-relaxed">
                            We couldn't find items matching your filters. Try resetting category selection or filter badges.
                        </p>
                        <button
                            onClick={() => { setActiveCat("All"); setFilterBadge("All"); }}
                            className="mt-4 px-6 py-2.5 bg-brand-lavender text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#463354] transition-colors cursor-pointer"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className={`grid ${layoutMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
                            }`}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((p, idx) => {
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
                                        className={`group cursor-pointer bg-brand-light p-5 rounded-[2rem] border border-brand-gold/12 shadow-md hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col justify-between hover:border-brand-lavender/30 ${offsetClass}`}
                                    >
                                        {/* Image Display Frame */}
                                        <div className="w-full aspect-[4/5] overflow-hidden bg-brand-cream mb-5 rounded-2xl relative flex-grow">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                                            />
                                            {/* Gradient shade */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                            {/* Tag badge inside image frame */}
                                            <span className="absolute top-4 left-4 bg-brand-light/90 backdrop-blur-md text-brand-plum text-[8px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md border border-brand-gold/12">
                                                {p.badge}
                                            </span>

                                            {/* Hover CTA overlays */}
                                            <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                <span className="bg-brand-lavender text-white text-[9px] uppercase tracking-widest font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                                                    Quick View <ArrowRight size={10} />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Label Details */}
                                        <div className="space-y-2 mt-auto text-left">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[9px] text-brand-lavender font-sans font-black uppercase tracking-widest">
                                                    {p.cat}
                                                </span>
                                                <span className="text-[9px] text-stone-400 font-sans tracking-tight">
                                                    {p.sku}
                                                </span>
                                            </div>

                                            <h3 className="text-xs sm:text-sm font-serif font-bold text-brand-plum uppercase tracking-wider group-hover:text-brand-lavender transition-colors leading-tight truncate">
                                                {p.name}
                                            </h3>

                                            <div className="border-t border-brand-gold/10 pt-2 flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] uppercase tracking-wide text-stone-400">Fabric Type</span>
                                                    <span className="text-[10px] text-stone-600 font-sans truncate max-w-[200px]">
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
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="bg-brand-light rounded-[2.5rem] border border-brand-gold/15 shadow-2xl overflow-y-auto max-h-[90vh] max-w-3xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 visible-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-6 top-6 w-9 h-9 rounded-full bg-brand-light/95 border border-brand-gold/15 flex items-center justify-center text-brand-plum hover:bg-brand-lavender hover:text-white transition-colors z-25 cursor-pointer shadow-lg"
                            >
                                <X size={15} />
                            </button>

                            {/* Left: Product Image */}
                            <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-brand-cream min-h-[250px] md:min-h-[380px]">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                                {/* Badge */}
                                <span className="absolute bottom-4 left-4 bg-brand-lavender text-white text-[9px] font-sans font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 z-20 shadow-md">
                                    {selectedProduct.badge}
                                </span>

                                {/* Scroll down bouncing indicator on mobile */}
                                <div className="absolute bottom-4 right-4 bg-black/40 text-white text-[8px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none md:hidden flex items-center gap-1 animate-bounce z-20">
                                    <span>Scroll down ↓</span>
                                </div>
                            </div>

                            {/* Right: Details & Call to Action */}
                            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                                <div className="space-y-4">
                                    <span className="text-[9px] text-brand-lavender font-sans font-black uppercase tracking-widest block">
                                        {selectedProduct.cat}
                                    </span>
                                    <h4 className="font-serif text-xl uppercase tracking-wide text-brand-plum font-bold leading-tight">
                                        {selectedProduct.name}
                                    </h4>

                                    <div className="flex gap-4 text-xs font-sans text-stone-500 pb-2 border-b border-stone-100">
                                        <p><strong>SKU:</strong> {selectedProduct.sku}</p>
                                        <p><strong>Showroom Location:</strong> Surat HQ</p>
                                    </div>

                                    <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                                        {selectedProduct.desc}
                                    </p>

                                    {/* Specifications */}
                                    <div className="bg-brand-cream/50 p-4 rounded-2xl space-y-2 border border-brand-gold/10 text-xs text-brand-plum">
                                        <div className="flex justify-between">
                                            <span className="text-stone-400 uppercase tracking-wider text-[8px] font-bold">Fabric Material</span>
                                            <span className="font-medium text-brand-plum">{selectedProduct.material}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-stone-400 uppercase tracking-wider text-[8px] font-bold">Quality Standard</span>
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
                                        className="w-full bg-brand-lavender hover:bg-[#463354] text-white py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <MessageCircle size={14} /> Send WhatsApp Enquiry
                                    </button>
                                    <p className="text-[9px] text-stone-400 text-center font-sans">
                                        Trade enquiries are routed directly to our wholesale desk coordinator.
                                    </p>
                                    <div className="text-center text-[8px] text-stone-400 font-sans tracking-wide animate-pulse block md:hidden mt-1">
                                        Scroll modal for more details
                                    </div>
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
