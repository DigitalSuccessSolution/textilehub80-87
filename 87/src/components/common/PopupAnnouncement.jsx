import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupAnnouncement = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenRetailPopup3');
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // Popup appears after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenRetailPopup3', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#10211F] border border-[#C29E6B]/30 max-w-lg w-full relative p-8 text-center rounded-[2.5rem] shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-stone-300 hover:text-white transition-colors cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        {/* Image */}
                        <div className="w-full h-40 bg-white/5 rounded-2xl overflow-hidden mb-6 relative">
                            <img src="https://images.pexels.com/photos/15488394/pexels-photo-15488394.jpeg" alt="Popup Image" className="w-full h-full object-cover" />
                        </div>

                        {/* Top Line decoration */}
                        <div className="w-12 h-[1px] bg-[#C29E6B] mx-auto mb-6"></div>

                        {/* Subtitle */}
                        <span className="text-[10px] font-sans font-bold  tracking-[0.3em] text-[#C29E6B] mb-3 block">
                            Luxury Campaign
                        </span>

                        {/* Heading */}
                        <h3 className="text-2xl font-serif text-white tracking-tight  mb-4">
                            Grand Festive Weave
                        </h3>

                        {/* Main Message */}
                        <p className="text-stone-300 text-xs leading-relaxed mb-6 font-sans font-light">
                            Discover our <span className="text-[#C29E6B] font-bold">exclusive collection</span> of custom bulk orders for designer sarees, suiting fabrics, and upholstery at Aurora Textile House. Register your trade enquiry today.
                        </p>

                        {/* Button Action */}
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 bg-[#2C443E] hover:bg-[#1B2E2A] text-white font-bold  text-[9px] tracking-[0.2em] transition-all duration-300 rounded-full shadow-lg cursor-pointer"
                        >
                            View Collection
                        </button>

                        {/* Bottom Line decoration */}
                        <div className="w-12 h-[1px] bg-[#C29E6B] mx-auto mt-8"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupAnnouncement;
