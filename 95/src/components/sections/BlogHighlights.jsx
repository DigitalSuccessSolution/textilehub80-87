import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogHighlights = () => {
    const navigate = useNavigate();

    const blogs = [
        {
            title: "Summer Fabric Guide: Cotton vs Linen",
            cat: "Styling Guide",
            date: "June 05, 2026",
            img: "https://images.pexels.com/photos/30982204/pexels-photo-30982204.jpeg"
        },
        {
            title: "The Renaissance of Handloom Sarees",
            cat: "Heritage Craft",
            date: "May 30, 2026",
            img: "https://images.pexels.com/photos/35195886/pexels-photo-35195886.jpeg"
        },
        {
            title: "Upholstery Trends for Modern Showrooms",
            cat: "Interior Design",
            date: "May 15, 2026",
            img: "https://images.pexels.com/photos/6758358/pexels-photo-6758358.jpeg"
        }
    ];

    return (
        <section className="py-24 px-6 sm:px-10 bg-brand-cream text-brand-plum border-t border-brand-gold/15">
            <div className="max-w-7xl mx-auto text-center space-y-12">

                {/* ── Section Header ── */}
                <div className="text-center space-y-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-lavender block">
                        Insights & Updates
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight">
                        Stay <span className="font-light italic text-brand-lavender lowercase">inspired</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-brand-lavender mx-auto mt-4" />
                </div>

                {/* 3 Columns Grid (Staggered Offset Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
                    {blogs.map((b, idx) => {
                        const staggerClass = idx === 1 ? 'md:translate-y-6' : 'translate-y-0';
                        return (
                            <div
                                key={idx}
                                onClick={() => navigate('/blog')}
                                className={`group cursor-pointer text-left bg-brand-light border border-brand-gold/12 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ${staggerClass}`}
                            >
                                {/* Graphic Frame */}
                                <div className="aspect-[16/10] overflow-hidden bg-[#1f1625]">
                                    <img
                                        src={b.img}
                                        alt={b.title}
                                        className="w-full h-full object-cover scale-102 group-hover:scale-108 transition-transform duration-[2000ms]"
                                    />
                                </div>

                                {/* Details Info */}
                                <div className="p-6 space-y-2">
                                    <span className="text-[9px] text-brand-lavender uppercase tracking-widest font-bold block">
                                        {b.cat}
                                    </span>
                                    <h3 className="text-sm font-serif font-black text-brand-plum uppercase tracking-wide group-hover:text-brand-lavender transition-colors leading-snug">
                                        {b.title}
                                    </h3>
                                    <span className="text-[9px] text-stone-500 font-sans block mt-1">
                                        {b.date}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="pt-8">
                    <button
                        onClick={() => navigate('/blog')}
                        className="px-8 py-4 bg-brand-light border border-brand-lavender text-brand-lavender hover:bg-brand-lavender hover:text-white text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-full shadow-md cursor-pointer"
                    >
                        View All Articles
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BlogHighlights;
