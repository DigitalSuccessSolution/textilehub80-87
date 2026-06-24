import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const BlogHighlights = () => {
    const navigate = useNavigate();

    const blogs = [
        {
            title: "The Art of Handloom – Keeping Tradition Alive",
            excerpt: "Discover the deep history behind Indian handlooms and why Kaaya Fabrics supports artisans.",
            date: "20 May 2026",
            img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80"
        },
        {
            title: "How to Choose the Perfect Fabric",
            excerpt: "A comprehensive B2B buyer's guide for choosing thread count, weaves, and fibers.",
            date: "15 May 2026",
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
        },
        {
            title: "Sustainable Textiles for a Better Tomorrow",
            excerpt: "Learn how organic cotton and low-impact dyes are transforming the modern fashion landscape.",
            date: "10 May 2026",
            img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
        }
    ];

    return (
        <section className="py-20 px-6 sm:px-12 bg-white">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 border-b border-brand-linen-dark pb-6">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-sans text-brand-charcoal tracking-tight font-black uppercase">
                            From Our <span className="text-[#800834]">Blog</span>
                        </h2>
                    </div>
                    <button 
                        onClick={() => navigate('/blog')}
                        className="text-[10px] font-sans font-black uppercase tracking-widest text-[#800834] hover:text-[#800834]/80 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
                    >
                        View All Articles <span className="text-brand-gold">&rarr;</span>
                    </button>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((b, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/blog')}
                            className="group cursor-pointer text-left bg-[#FAF8F5] border border-brand-gold/10 hover:border-brand-gold/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
                        >
                            {/* Image */}
                            <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                                <img
                                    src={b.img}
                                    alt={b.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                <div className="space-y-2">
                                    <span className="text-[9px] text-[#800834] font-sans font-extrabold uppercase tracking-widest block">
                                        {b.date}
                                    </span>
                                    <h3 className="text-base font-serif font-bold text-brand-charcoal uppercase tracking-wider group-hover:text-[#800834] transition-colors leading-snug">
                                        {b.title}
                                    </h3>
                                    <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-sans font-light">
                                        {b.excerpt}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-brand-linen-dark mt-4">
                                    <span className="text-[10px] font-sans font-black uppercase text-brand-gold group-hover:text-brand-charcoal tracking-widest transition-colors flex items-center gap-1">
                                        Read More &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogHighlights;
