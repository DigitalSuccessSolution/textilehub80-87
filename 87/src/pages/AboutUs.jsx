import React from 'react';
import useSEO from '../hooks/useSEO';

const AboutUs = () => {
    useSEO(
        'About Us',
        'Learn about Aurora Textile House - Over 25 years of trust in providing premium sarees, fabrics, and home linen.',
        'about aurora textile, store history, quality textile house, boutique mall'
    );

    const milestones = [
        {
            year: "2001",
            title: "Founding & Vision",
            desc: "Established in Surat with the goal of connecting traditional Indian weavers directly to global boutique designers, eliminating intermediaries."
        },
        {
            year: "2008",
            title: "Weaver Hub Expansion",
            desc: "Connected with over 50 artisan clusters across Banaras, Kanchipuram, and Bhagalpur, introducing quality control standards for handloom fabrics."
        },
        {
            year: "2016",
            title: "Digital B2B Portals",
            desc: "Pioneered transparent e-Quotation and e-Auction portals for wholesale textile clearance and bidding, enhancing global supply chain speed."
        },
        {
            year: "2024",
            title: "Sustainable Heritage",
            desc: "Initiated 100% eco-friendly coloring and organic cotton options, ensuring our legacy of premium fabrics is preserved for a sustainable future."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
            
            {/* Header */}
            <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
                    <div className="space-y-4">
                        <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] block">
                            OUR LEGACY
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-[1.1]">
                            Crafting Comfort, <br />
                            <span className="font-light text-[#C29E6B] italic  font-serif normal-case">weaving</span> stories
                        </h1>
                    </div>
                    <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
                        <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                            For over two decades, we have stood at the intersection of heritage handloom weaving and modern fabric testing standards, supplying retail boutiques worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Editorial Split Layout */}
            <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-8 text-left">
                        <span className="text-[10px] font-sans font-bold  tracking-[0.3em] text-[#C29E6B] block">
                            PHILOSOPHY
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#10211F]  leading-tight">
                            Preserving tradition, <br />
                            ensuring precision.
                        </h2>
                        
                        <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                            Every batch of linen, saree weave, and suiting fabric in our catalogs represents weeks of manual design, shade matching, and tensile validation. We hold our products to the highest standards because we know they are crafted to last.
                        </p>

                        {/* Visual Image Card with curved corners */}
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden bg-stone-100 shadow-md border border-[#10211F]/5">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                                alt="Boutique Fabric Roll Display"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Timeline Column */}
                    <div className="lg:col-span-7 space-y-12 text-left pl-0 lg:pl-12 border-l border-stone-200/60 lg:border-stone-200/60">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="relative pl-8 group">
                                {/* Bullet indicator on the line */}
                                <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-[#C29E6B] border-2 border-[#FAF6F2] group-hover:bg-[#10211F] group-hover:scale-125 transition-all duration-300" />
                                
                                <div className="space-y-3">
                                    <span className="text-xl font-serif font-black text-[#C29E6B] block leading-none">
                                        {item.year}
                                    </span>
                                    <h3 className="text-base font-serif font-bold text-[#10211F]  tracking-wider">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-stone-500 font-sans font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default AboutUs;
