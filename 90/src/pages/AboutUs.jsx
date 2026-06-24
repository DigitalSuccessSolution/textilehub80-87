import React from 'react';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const AboutUs = () => {
    useSEO(
        'About Us',
        'Learn about Kaaya Fabrics - Over 30 years of trust in providing premium sarees, fabrics, and home linen.',
        'about Kaaya Fabrics, store history, quality textile mall'
    );

    return (
        <div className="pt-20 min-h-screen bg-[#FAF8F5] text-brand-charcoal pb-20">
            {/* Short Header (Reduced Top Space) */}
            <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 scale-105" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
                
                <div className="max-w-4xl mx-auto relative z-10 space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
                        Our Heritage
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif tracking-tight uppercase leading-tight text-white">
                        Crafting Comfort, <br />
                        <span className="font-light text-brand-gold italic">Inspiring Styles</span>
                    </h1>
                    <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
                </div>
            </section>

            {/* Redesigned Content Card Wrapper */}
            <section className="py-12 px-6 sm:px-12 max-w-[1200px] mx-auto">
                <div className="bg-white border border-brand-gold/15 rounded-3xl p-8 sm:p-12 shadow-xl grid md:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Image with Arched shape (Columns 1-5) */}
                    <div className="md:col-span-5 w-full flex justify-center">
                        <div className="w-full max-w-sm aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl border border-brand-gold/20 p-1.5 bg-[#FAF8F5] shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="Kaaya Fabrics Loom"
                                className="w-full h-full object-cover rounded-t-[90px] rounded-b-xl"
                            />
                        </div>
                    </div>

                    {/* Right Column: Copy text (Columns 6-12) */}
                    <div className="md:col-span-7 text-left space-y-6">
                        <div className="space-y-2">
                            <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#800834] block">
                                Our Mission
                            </span>
                            <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal tracking-tight uppercase font-extrabold leading-tight">
                                Bridging Tradition and Modern Sourcing
                            </h2>
                            <div className="w-12 h-[2px] bg-[#800834]" />
                        </div>
                        
                        <p className="text-brand-charcoal/70 text-xs md:text-sm leading-relaxed font-sans font-light">
                            Kaaya Fabrics is planned with a single-minded goal: to make premium weaves and high-quality fabrics accessible to designers, boutique owners, and retail clients under a single luxury roof. We work directly with master artisans across India to secure authentic Banarasi, Kanchipuram, and Pochampally silks, while also stocking elite international suiting fabrics.
                        </p>
                        
                        <p className="text-brand-charcoal/70 text-xs md:text-sm leading-relaxed font-sans font-light">
                            Whether you're sourcing for designer collections, ordering custom uniform fabrics, or picking linen sets, we ensure rigorous check parameters for counts, dye durability, and thread quality. We are dedicated to maintaining the finest standard in Indian textiles.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;
