import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    const heroImages = [
        "/aurora_hero_saree.png",
        "https://images.pexels.com/photos/38246580/pexels-photo-38246580.jpeg",
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIdx(prev => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16 px-6 sm:px-10 lg:px-20 bg-brand-cream text-brand-plum text-left">

            {/* ── Glowing Mesh Background Accents ── */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-lavender/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">

                {/* ── Column 1: Typography & CTAs ── */}
                <div className="lg:col-span-7 space-y-8 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand-gold/15 text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-brand-gold">
                            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                            Premium Sourcing & Weaves
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-[58px] font-serif font-black text-brand-plum leading-[1.08] tracking-tight uppercase">
                            WEAVING <br />
                            <span className="text-brand-lavender font-display font-light italic lowercase">pure elegance</span> <br />
                            INTO EVERY THREAD.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-xs sm:text-sm text-brand-plum/70 font-sans font-light leading-relaxed max-w-xl"
                    >
                        Experience the premium heritage of handcrafted sarees, luxury fabrics, and designer ethnic wear. Crafted with trust, sourced direct from master weavers since 1998.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-5 pt-2"
                    >
                        {/* Explore CTA */}
                        <button
                            onClick={() => navigate('/products')}
                            className="group px-8 py-4 bg-brand-lavender hover:bg-brand-lavender-dark text-white text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 rounded-full shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2.5 border border-brand-gold/10"
                        >
                            Explore Collections
                            <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>

                {/* ── Column 2: Asymmetric Editorial Fashion Frame with Slider ── */}
                <div className="lg:col-span-5 flex justify-center relative min-h-[400px] lg:min-h-[500px]">
                    {/* Glowing backlighting Behind Frame */}
                    <div className="absolute inset-0 bg-radial from-brand-gold/15 via-transparent to-transparent blur-[60px] rounded-full scale-100 pointer-events-none z-0" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="relative z-10 w-full max-w-[380px] aspect-[4/5.2] bg-brand-light border border-brand-gold/15 p-3.5 rounded-[2.5rem] shadow-2xl hover:border-brand-lavender/30 transition-colors duration-500"
                    >
                        <div className="w-full h-full overflow-hidden rounded-[2rem] relative bg-brand-cream">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImgIdx}
                                    src={heroImages[currentImgIdx]}
                                    alt="Premium Saree Drape Model"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full object-cover scale-102 hover:scale-106 transition-transform duration-[4000ms]"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-plum/10 via-transparent to-transparent pointer-events-none" />

                            {/* Slider Navigation Dots */}
                            <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 bg-brand-plum/45 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-brand-gold/15">
                                {heroImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImgIdx(i);
                                        }}
                                        className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${currentImgIdx === i ? 'bg-brand-gold scale-125' : 'bg-brand-light/60 hover:bg-brand-light'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating circular spinning gold badge */}
                        <div className="absolute -bottom-4 -left-6 z-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="w-24 h-24 rounded-full bg-brand-cream/95 backdrop-blur-md text-brand-lavender shadow-2xl flex items-center justify-center p-3 text-center border border-brand-gold/15"
                            >
                                <span className="text-[7px] font-sans font-bold uppercase tracking-[0.18em] leading-normal block">
                                    Premium <span className="font-serif italic text-brand-gold text-[10px] lowercase tracking-normal block mt-0.5">handloom</span> collections
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
