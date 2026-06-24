import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Users, Smile, MapPin, ArrowRight, Leaf, Sparkles, Palette, Handshake } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

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
            
            {/* Full Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-95"
                style={{ backgroundImage: "url('/91-hero.png')" }}
            />
            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F2]/98 via-[#FAF6F2]/80 to-transparent/10 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F2] via-transparent to-transparent z-0 pointer-events-none" />

            <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 py-10 flex-grow">
                
                {/* ── Left Column: Editorial Typography ── */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#10211F]/5 border border-[#10211F]/10 text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-[#2C443E]">
                            Premium Textiles
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#10211F] leading-[1.05] tracking-tight uppercase">
                            Threads that <br />
                            Connect Stories, <br />
                            <span className="text-[#C29E6B] font-light italic lowercase font-serif normal-case">crafted</span> to last.
                        </h1>
                        
                        <p className="text-xs sm:text-sm font-sans font-light text-stone-600 max-w-md leading-relaxed">
                            Timeless fabrics. Thoughtful designs. Made for comfort. Made to last. Preserving heritage weaving traditions since 1998.
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                        <button
                            onClick={() => navigate('/products')}
                            className="group flex items-center gap-2.5 px-8 py-4 bg-[#10211F] hover:bg-[#2C443E] text-white text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Explore Collections
                            <span className="w-5 h-5 rounded-full bg-[#2C443E] group-hover:bg-[#10211F] flex items-center justify-center text-white text-[11px] transition-colors font-bold">+</span>
                        </button>
                    </div>
                </div>
                
                {/* ── Right Column: Floating Stats Overlay over Background Image ── */}
                <div className="lg:col-span-6 relative flex justify-end items-center h-[350px] md:h-[450px] w-full">
                    {/* Dark Floating Stats Box (Matches Aurora mockup) */}
                    <div className="w-[190px] bg-[#10211F] rounded-3xl p-6 shadow-2xl text-white border border-white/10 flex flex-col gap-4 text-left mr-4 sm:mr-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col space-y-1.5 pb-3 border-b border-dashed border-white/10 last:border-b-0 last:pb-0">
                                <div className="flex items-center gap-2">
                                    <span className="shrink-0 text-[#C29E6B]">{stat.icon}</span>
                                    <span className="text-sm font-sans font-bold tracking-wider">{stat.number}</span>
                                </div>
                                <span className="text-[8px] text-stone-300 font-sans tracking-widest uppercase font-semibold">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
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
                            <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#10211F]">
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
