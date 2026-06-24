import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-emerald-dark overflow-hidden">
            
            {/* Elegant Background Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-brand-gold" />
                    ))}
                </div>
            </div>

            <div className="relative flex flex-col items-center max-w-md px-6">
                
                {/* Modern Monogram & Logo Container */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                    
                    {/* Golden decorative outer frame */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        className="absolute inset-0 border border-dashed border-brand-gold/30 rounded-full"
                    />
                    
                    {/* Inner glowing spinner */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute inset-2 border-t border-b border-brand-gold rounded-full"
                    />
                    
                    {/* Elegant KF Monogram in Serif */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl font-serif tracking-widest font-black select-none z-10"
                    >
                        KF
                    </motion.div>
                </div>

                {/* Brand Name Text Animation */}
                <div className="mt-8 text-center overflow-hidden">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-white font-serif text-3xl tracking-[0.25em] uppercase font-bold"
                    >
                        KAAYA <span className="font-light text-brand-gold font-sans">FABRICS</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-2 text-[9px] text-brand-gold-light font-sans font-bold uppercase tracking-[0.45em]"
                    >
                        Timeless Textiles & Weaves
                    </motion.p>
                </div>

                {/* Premium Progress Bar */}
                <div className="mt-8 w-56 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute left-0 top-0 h-full bg-brand-gold rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "easeInOut" }}
                    />
                </div>
                
                <span className="text-[10px] text-brand-gold/60 font-mono mt-2 tracking-widest">
                    {progress}%
                </span>

            </div>

            {/* Faded Watermark background */}
            <div className="absolute inset-x-0 bottom-10 flex justify-center pointer-events-none opacity-[0.02] select-none">
                <h1 className="text-[15vw] font-serif font-black text-brand-gold uppercase tracking-[0.2em]">
                    KAAYA
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
