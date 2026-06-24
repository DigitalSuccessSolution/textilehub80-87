import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupAnnouncement = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenKaayaPopup');
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // Popup appears after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenKaayaPopup', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-[#FAF8F5] border border-brand-gold/30 max-w-md w-full relative p-8 text-center rounded-2xl shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-brand-charcoal/60 hover:text-brand-emerald-dark transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        {/* Top Icon Badge decoration */}
                        <div className="w-12 h-12 rounded-full bg-brand-emerald-dark flex items-center justify-center shrink-0 mx-auto mb-5 text-brand-gold">
                            <Sparkles size={20} />
                        </div>

                        {/* Subtitle */}
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold mb-2.5 block">
                            Special Announcement
                        </span>

                        {/* Heading */}
                        <h3 className="text-2xl font-serif text-brand-emerald-dark tracking-tight uppercase mb-4">
                            Welcome to Kaaya Fabrics
                        </h3>

                        {/* Main Message */}
                        <p className="text-brand-charcoal/70 text-xs leading-relaxed mb-6 font-sans">
                            Discover our newly curated collection of wedding sarees, designer kurtis, and premium textiles. Enjoy an unmatched B2B direct sourcing experience crafted for designers and boutique partners.
                        </p>

                        {/* Button Action */}
                        <button
                            onClick={handleClose}
                            className="w-full py-3.5 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors rounded-xl shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Explore Our Catalog &rarr;
                        </button>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupAnnouncement;
