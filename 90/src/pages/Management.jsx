import React from 'react';
import useSEO from '../hooks/useSEO';

const Management = () => {
    useSEO(
        'Our Management',
        'Meet the directors and executive leadership driving Kaaya Fabrics.',
        'executive board, management directors'
    );

    const leaders = [
        { name: "Devendra Singh", role: "Managing Director", desc: "Over 35 years of experience in the textile weaving and garment manufacturing sectors.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" },
        { name: "Rajesh Pal", role: "Director of Operations", desc: "Manages day-to-day showroom mechanics, supply chains, and customer relations.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" }
    ];

    return (
        <div className="pt-20 min-h-screen bg-brand-linen text-brand-charcoal pb-20">
            {/* Header */}
            <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 scale-105"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
                        Management
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
                        Our Retail Management
                    </h1>
                    <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
                </div>
            </section>

            {/* Leaders Section */}
            <section className="py-16 px-6 sm:px-10 max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto">
                    {leaders.map((m, idx) => (
                        <div
                            key={idx}
                            className="editorial-card p-10 text-center relative group"
                        >
                            {/* Hover gold border stripe */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-sm" />

                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-brand-gold/25 p-1 bg-white">
                                <img
                                    src={m.img}
                                    alt={m.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            <h3 className="text-xl font-serif font-black text-brand-charcoal uppercase tracking-wider mb-1">
                                {m.name}
                            </h3>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-black block mb-5">
                                {m.role}
                            </span>
                            <p className="text-brand-charcoal/70 text-xs leading-relaxed font-sans font-light max-w-sm mx-auto">
                                {m.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Management;
