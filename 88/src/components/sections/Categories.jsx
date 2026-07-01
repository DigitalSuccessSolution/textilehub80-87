import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

const Categories = () => {
    const crafts = [
        {
            icon: <Compass className="text-[#C29E6B]" size={20} />,
            title: "Traditional Handloom",
            desc: "Preserving generational weaving clusters across Varanasi and Surat."
        },
        {
            icon: <ShieldCheck className="text-[#C29E6B]" size={20} />,
            title: "Certified Integrity",
            desc: "100% genuine fibers verified under ISO quality standards."
        },
        {
            icon: <Heart className="text-[#C29E6B]" size={20} />,
            title: "Artisanal Sourcing",
            desc: "Sourcing directly from weavers to ensure fair wage cycles."
        }
    ];

    return (
        <section className="py-24 bg-white font-sans border-b border-[#2E081B]/5 overflow-hidden">
            <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left side: Content description */}
                <div className="space-y-8 text-left">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles size={12} className="text-[#C29E6B]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Weaving Heritage</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-serif text-[#2E081B] tracking-tight leading-none">
                            The Spirit of <br />
                            <span className="text-[#9C4B6E] font-light italic">Artisanal Craft</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-lg">
                            Every thread tells a story of patience, skill, and cultural heritage. Our showroom showcases fabrics that are curated directly from weaver clusters, combining traditional drapes with modern silhouettes.
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        {crafts.map((c, i) => (
                            <div key={i} className="flex gap-4 items-start max-w-md">
                                <div className="w-10 h-10 rounded-full bg-[#FAF5F0] flex items-center justify-center shrink-0 border border-[#C29E6B]/20">
                                    {c.icon}
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-serif font-bold text-[#2E081B] uppercase tracking-wide">{c.title}</h4>
                                    <p className="text-[11px] text-stone-500 font-sans leading-relaxed">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side: Editorial Craft Grid */}
                <div className="grid grid-cols-2 gap-4 relative">
                    <div className="space-y-4">
                        <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] border-4 border-[#FAF5F0] shadow-xl">
                            <img 
                                src="https://images.pexels.com/photos/37054322/pexels-photo-37054322.jpeg" 
                                alt="Saree Weaving Details" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden aspect-square border-4 border-[#FAF5F0] shadow-xl">
                            <img 
                                src="https://images.pexels.com/photos/3847588/pexels-photo-3847588.jpeg" 
                                alt="Linen Weaving Details" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 pt-12">
                        <div className="rounded-[2.5rem] overflow-hidden aspect-square border-4 border-[#FAF5F0] shadow-xl">
                            <img 
                                src="https://images.pexels.com/photos/8135277/pexels-photo-8135277.jpeg" 
                                alt="Furnishing Weaving Details" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] border-4 border-[#FAF5F0] shadow-xl">
                            <img 
                                src="https://images.pexels.com/photos/34155079/pexels-photo-34155079.jpeg" 
                                alt="Kurtis Weaving Details" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Decorative badge floating */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2E081B] text-white rounded-full p-6 border-4 border-[#FAF5F0] shadow-2xl flex flex-col items-center justify-center w-24 h-24 select-none">
                        <span className="text-[#C29E6B] text-[8px] font-sans font-bold uppercase tracking-widest">Est.</span>
                        <span className="text-base font-serif font-bold text-white leading-none">1998</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Categories;
