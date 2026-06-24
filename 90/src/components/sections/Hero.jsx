import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroMaroon from '../../assets/hero_saree_maroon.png';
import heroCream from '../../assets/hero_saree_cream.png';
import heroPink from '../../assets/hero_saree_pink.png';

const Hero = () => {
    const navigate = useNavigate();

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
                            HERITAGE. CRAFT. CULTURE.
                        </span>
                        
                        <h1 className="text-4xl sm:text-6xl font-serif text-brand-charcoal tracking-tight uppercase leading-tight font-extrabold">
                            Timeless Textiles, <br />
                            Woven for <span className="font-light text-[#800834] italic font-serif">Generations.</span>
                        </h1>
                        
                        <div className="w-16 h-[2px] bg-brand-gold mt-4" />
                    </div>

                    <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed font-sans font-light max-w-lg">
                        Discover the finest fabrics that blend tradition, craftsmanship, and contemporary elegance. Hand-curated collections representing the pinnacle of Indian weaving.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button
                            onClick={() => navigate('/products')}
                            className="px-8 py-4 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white text-[10px] uppercase tracking-widest font-black transition-all rounded-xl shadow-md hover:shadow-xl cursor-pointer flex items-center gap-2.5"
                        >
                            Explore Collections <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        
                        <button
                            onClick={() => navigate('/media-gallery')}
                            className="px-8 py-4 border border-brand-charcoal/20 text-brand-charcoal hover:border-brand-emerald-dark hover:text-brand-emerald-dark text-[10px] uppercase tracking-widest font-black transition-all rounded-xl flex items-center gap-2 cursor-pointer"
                        >
                            <span className="w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center mr-1 text-[#800834]">
                                <Play className="w-2.5 h-2.5 fill-current" />
                            </span>
                            Watch Video
                        </button>
                    </div>

                    {/* Timeline slider pagination */}
                    <div className="pt-8 flex items-center gap-4 text-xs font-mono font-bold text-brand-charcoal/30 select-none">
                        <span className="text-[#800834] border-b-2 border-[#800834] pb-1 cursor-pointer">01</span>
                        <div className="w-8 h-[1px] bg-brand-charcoal/10" />
                        <span className="hover:text-brand-charcoal transition-colors cursor-pointer">02</span>
                        <div className="w-8 h-[1px] bg-brand-charcoal/10" />
                        <span className="hover:text-brand-charcoal transition-colors cursor-pointer">03</span>
                    </div>

                </div>

                {/* Right side staggered arched images (Columns 7-12) */}
                <div className="lg:col-span-6 relative flex items-center justify-center select-none pt-8 lg:pt-0">
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl">
                        
                        {/* Image 1 (Left arched panel) */}
                        <div className="translate-y-8 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/15 p-1 bg-white shadow-lg overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <img 
                                    src={heroMaroon} 
                                    alt="Maroon Silk Saree" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>

                        {/* Image 2 (Middle arched panel - taller) */}
                        <div className="translate-y-0 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/20 p-1 bg-white shadow-xl overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <img 
                                    src={heroCream} 
                                    alt="Cream Embroidered Fabric" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>

                        {/* Image 3 (Right arched panel) */}
                        <div className="translate-y-12 flex flex-col justify-end aspect-[1/2.8] rounded-t-full border border-brand-gold/15 p-1 bg-white shadow-lg overflow-hidden group">
                            <div className="w-full h-full rounded-t-full overflow-hidden">
                                <img 
                                    src={heroPink} 
                                    alt="Pink Traditional Suit" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
