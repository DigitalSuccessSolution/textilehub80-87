import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Users, Smile, MapPin, ArrowRight, Leaf, Sparkles, Palette, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const bgImages = [
        "/91-hero.png",
        "https://images.pexels.com/photos/15488394/pexels-photo-15488394.jpeg",
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [bgImages.length]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + bgImages.length) % bgImages.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    };

    const stats = [
        {
            icon: <Crown className="text-[#C29E6B]" size={20} />,
            number: "25+",
            label: "Years of Legacy"
        },
        {
            icon: <Users className="text-[#C29E6B]" size={20} />,
            number: "500+",
            label: "Retail Partners"
        },
        {
            icon: <Smile className="text-[#C29E6B]" size={20} />,
            number: "1L+",
            label: "Happy Customers"
        },
        {
            icon: <MapPin className="text-[#C29E6B]" size={20} />,
            number: "20+",
            label: "Cities Connected"
        }
    ];

    const features = [
        {
            icon: <Leaf className="text-[#C29E6B]" size={24} />,
            title: "Sustainable",
            desc: "Eco-friendly processes for a better tomorrow."
        },
        {
            icon: <Sparkles className="text-[#C29E6B]" size={24} />,
            title: "Premium Quality",
            desc: "Finest materials & attention to detail."
        },
        {
            icon: <Palette className="text-[#C29E6B]" size={24} />,
            title: "Unique Designs",
            desc: "Blending tradition with contemporary trends."
        },
        {
            icon: <Handshake className="text-[#C29E6B]" size={24} />,
            title: "Trusted Partner",
            desc: "Built on transparency, delivered with pride."
        }
    ];

    return (
        <section className="relative min-h-screen pt-32 pb-16 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden text-left bg-white">
            
            {/* Full Background Image Slider */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
                    style={{ backgroundImage: `url('${bgImages[currentSlide]}')` }}
                />
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20">
                <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 bg-white/50 backdrop-blur border border-white/40 rounded-full flex items-center justify-center text-[#10211F] hover:bg-[#10211F] hover:text-white transition-all shadow-md">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20">
                <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 bg-white/50 backdrop-blur border border-white/40 rounded-full flex items-center justify-center text-[#10211F] hover:bg-[#10211F] hover:text-white transition-all shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F2]/85 via-[#FAF6F2]/40 to-transparent/5 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F2]/90 via-transparent to-transparent z-0 pointer-events-none" />

            <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-10 flex-grow">
                
                {/* ── Editorial Typography ── */}
                <div className="lg:col-span-8 lg:col-start-2 xl:col-start-2 xl:pl-16 flex flex-col justify-center space-y-8 text-left">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#10211F]/5 border border-[#10211F]/10 text-[9px] font-sans font-bold tracking-[0.3em] text-[#2C443E]">
                            Premium Textiles
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#10211F] leading-[1.05] tracking-tight">
                            Threads that <br />
                            Connect Stories, <br />
                            <span className="text-[#C29E6B] font-light italic font-serif normal-case">crafted</span> to last.
                        </h1>
                        
                        <p className="text-xs sm:text-sm font-sans font-light text-stone-600 max-w-md leading-relaxed">
                            Timeless fabrics. Thoughtful designs. Made for comfort. Made to last. Preserving heritage weaving traditions since 1998.
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                        <button
                            onClick={() => navigate('/products')}
                            className="group flex items-center gap-2.5 px-8 py-4 bg-[#10211F] hover:bg-[#2C443E] text-white text-[10px] font-bold tracking-[0.25em] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Explore Collections
                            <span className="w-5 h-5 rounded-full bg-[#2C443E] group-hover:bg-[#10211F] flex items-center justify-center text-white text-[11px] transition-colors font-bold">+</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Bottom Feature Banner (Horizontal layout matching screenshot) ── */}
            <div className="w-full max-w-[1600px] mx-auto border-t border-[#10211F]/10 pt-12 pb-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-left group">
                        <div className="w-12 h-12 rounded-full bg-white/85 backdrop-blur border border-[#C29E6B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#10211F] group-hover:text-white transition-all shadow-sm">
                            {feat.icon}
                        </div>
                        <div className="space-y-0.5">
                            <h4 className="text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">
                                {feat.title}
                            </h4>
                            <p className="text-[9px] text-stone-500 font-sans leading-relaxed max-w-[200px]">
                                {feat.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Hero;
