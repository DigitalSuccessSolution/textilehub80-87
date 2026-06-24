import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, Layers, Globe, Clock } from 'lucide-react';

const Intro = () => {
    const navigate = useNavigate();

    const stats = [
        {
            icon: <Leaf className="text-[#C29E6B]" size={22} />,
            number: "100+",
            title: "Ethical Vendors",
            desc: "Sourced directly from certified artisan clusters."
        },
        {
            icon: <Layers className="text-[#C29E6B]" size={22} />,
            number: "1M+",
            title: "Meters of Fabric",
            desc: "Premium quality threads delivered with care."
        },
        {
            icon: <Globe className="text-[#C29E6B]" size={22} />,
            number: "Global Reach",
            title: "International Shipping",
            desc: "Connecting boutique buyers around the globe."
        },
        {
            icon: <Clock className="text-[#C29E6B]" size={22} />,
            number: "Timely Delivery",
            title: "Guaranteed Schedule",
            desc: "Your business deadlines are our absolute priority."
        }
    ];

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF6F2] font-sans border-b border-[#10211F]/5">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                
                {/* ── Column 1: Our Story Card (93-b.png Background) ── */}
                <div className="lg:col-span-6 rounded-[2.5rem] overflow-hidden relative shadow-xl min-h-[500px] border border-stone-200/50 flex flex-col justify-end p-10 group">
                    {/* Background image */}
                    <img 
                        src="/93-b.png" 
                        alt="Heritage pottery and fabrics setup" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                    <div className="space-y-4 z-10 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29E6B]">
                            Our Story
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight uppercase">
                            Heritage in every weave. <br />
                            Passion in every thread.
                        </h2>
                        <p className="text-xs text-stone-300 font-sans font-light leading-relaxed max-w-md">
                            We blend heritage with innovation to create textiles that inspire and endure. Sourced directly from local weavers across India.
                        </p>

                        <div className="pt-4">
                            <button
                                onClick={() => navigate('/about')}
                                className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C29E6B] hover:text-white transition-colors"
                            >
                                KNOW OUR STORY
                                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Column 2: 2x2 Stats & Impact Grid ── */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
                    <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29E6B]">
                            OUR VALUES & IMPACT
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#10211F] uppercase mt-2">
                            Sustained Quality, Built on Trust
                        </h3>
                        <p className="text-xs text-stone-500 font-sans font-light mt-2 max-w-lg leading-relaxed">
                            Every thread speaks of unmatched craftsmanship. We enforce rigorous quality controls to ensure premium finish for global boutiques.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200/60 rounded-[2.5rem] overflow-hidden p-0.5 border border-stone-200/30">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 sm:p-10 transition-all duration-300 text-left space-y-4 hover:bg-[#FAF6F2]/30 relative group"
                            >
                                {/* Top right tiny gold dot */}
                                <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-[#C29E6B] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />

                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FAF6F2] border border-[#2C443E]/5 shadow-sm group-hover:bg-[#10211F] group-hover:text-white transition-colors duration-300">
                                    <span className="group-hover:text-[#C29E6B] transition-colors">{stat.icon}</span>
                                </div>
                                <div className="space-y-1.5">
                                    <span className="text-xl sm:text-2xl font-serif font-light text-[#10211F] block leading-none">
                                        {stat.number}
                                    </span>
                                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C29E6B]">
                                        {stat.title}
                                    </h4>
                                    <p className="text-[11px] text-stone-500 font-sans leading-relaxed font-light">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Intro;
