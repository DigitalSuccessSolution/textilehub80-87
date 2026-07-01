import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import heroMaroon from '../../assets/hero_saree_maroon.png';
import heroCream from '../../assets/hero_saree_cream.png';
import heroPink from '../../assets/hero_saree_pink.png';

const slideData = [
    {
        subtitle: "Heritage. Craft. Culture.",
        title: (
            <>
                Timeless Textiles, <br />
                Woven for <span className="font-light text-[#800834] italic font-serif">Generations.</span>
            </>
        ),
        desc: "Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance. Hand-curated collections representing the pinnacle of Indian weaving.",
        images: [heroMaroon, heroCream, heroPink]
    },
    {
        subtitle: "Tradition. Comfort. Style.",
        title: (
            <>
                Crafted Elegance, <br />
                Styled for <span className="font-light text-[#800834] italic font-serif">Modernity.</span>
            </>
        ),
        desc: "Premium sarees, leggings, and ethnic wear designed for everyday grace and comfort. Made from selected quality materials for lasting luxury.",
        images: [heroCream, heroPink, heroMaroon]
    },
    {
        subtitle: "Elegance. Design. Premium.",
        title: (
            <>
                Luxurious Living, <br />
                Woven for <span className="font-light text-[#800834] italic font-serif">Comfort.</span>
            </>
        ),
        desc: "Explore our exquisite bedsheets, linens, and home upholstery that redefine cozy home living with rich colors and premium textures.",
        images: [heroPink, heroMaroon, heroCream]
    }
];

const Hero = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slideData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = slideData[currentIndex];

    return (
        <section className="relative min-h-[90vh] md:min-h-screen w-full bg-[#FDFBF7] flex items-center pt-[90px] pb-16 px-6 sm:px-12 md:px-20 overflow-hidden">
            
            {/* Soft decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#800834]/5 rounded-full blur-2xl -z-10 pointer-events-none" />

            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left side content (Columns 1-6) */}
                <div className="lg:col-span-6 space-y-8 text-left z-10">
                    
                    <div className="space-y-4">
                        <span className="text-[11px] font-sans font-extrabold uppercase tracking-[0.3em] text-[#800834] block">
                            {activeSlide.subtitle}
                        </span>
                        
                        <h1 className="text-4xl sm:text-6xl font-serif text-brand-charcoal tracking-tight leading-tight font-extrabold">
                            {activeSlide.title}
                        </h1>
                        
                        <div className="w-16 h-[2px] bg-brand-gold mt-4" />
                    </div>

                    <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed font-sans font-light max-w-lg">
                        {activeSlide.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button
                            onClick={() => navigate('/products')}
                            className="px-8 py-4 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white text-[10px] uppercase tracking-widest font-black transition-all rounded-xl shadow-md hover:shadow-xl cursor-pointer flex items-center gap-2.5"
                        >
                            Explore Collections <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                </div>

                {/* Right side staggered arched images (Columns 7-12) */}
                <div className="lg:col-span-6 relative flex items-center justify-center select-none pt-8 lg:pt-0 w-full">
                    
                    {/* Navigation Prev Button */}
                    <button 
                        onClick={handlePrev} 
                        className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-brand-gold hover:text-white text-brand-charcoal rounded-full flex items-center justify-center shadow-lg border border-brand-gold/15 transition-all cursor-pointer focus:outline-none active:scale-95"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* 3 Arched slots */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl px-12 lg:px-4">
                        
                        {/* Image 1 (Left arched panel) */}
                        <div className="translate-y-8 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/15 p-1 bg-white shadow-lg overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={activeSlide.images[0]}
                                        src={activeSlide.images[0]} 
                                        alt="Silk Saree Left Panel" 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    />
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Image 2 (Middle arched panel - taller) */}
                        <div className="translate-y-0 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/20 p-1 bg-white shadow-xl overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={activeSlide.images[1]}
                                        src={activeSlide.images[1]} 
                                        alt="Silk Saree Middle Panel" 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    />
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Image 3 (Right arched panel) */}
                        <div className="translate-y-12 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/15 p-1 bg-white shadow-lg overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={activeSlide.images[2]}
                                        src={activeSlide.images[2]} 
                                        alt="Silk Saree Right Panel" 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    />
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>

                    {/* Navigation Next Button */}
                    <button 
                        onClick={handleNext} 
                        className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-brand-gold hover:text-white text-brand-charcoal rounded-full flex items-center justify-center shadow-lg border border-brand-gold/15 transition-all cursor-pointer focus:outline-none active:scale-95"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Hero;
