import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar } from 'lucide-react';

const BlogHighlights = () => {
    const navigate = useNavigate();

    const blogs = [
        {
            title: "Summer Fabric Guide: Cotton vs Linen",
            cat: "Styling Guide",
            date: "June 05, 2026",
            img: "https://images.pexels.com/photos/30982093/pexels-photo-30982093.jpeg"
        },
        {
            title: "The Renaissance of Handloom Sarees",
            cat: "Heritage Weaves",
            date: "May 30, 2026",
            img: "https://images.pexels.com/photos/14664844/pexels-photo-14664844.jpeg"
        },
        {
            title: "Upholstery Trends for Modern Showrooms",
            cat: "Interior Curations",
            date: "May 15, 2026",
            img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80"
        }
    ];

    return (
        <section className="py-24 px-6 sm:px-10 bg-[#10211F] border-y border-[#C29E6B]/20 overflow-hidden relative">

            {/* Subtle light glow elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#2C443E]/10 blur-3xl pointer-events-none" />

            <div className="max-w-[1600px] mx-auto text-center relative z-10">

                {/* Header */}
                <div className="mb-16 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-[#C29E6B]">
                        <Sparkles size={12} />
                        <span className="text-[10px] font-sans font-bold  tracking-[0.35em]">
                            INSIGHTS & COUTURE TRENDS
                        </span>
                        <Sparkles size={12} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight  leading-none">
                        Latest Articles
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C29E6B] mx-auto"></div>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {blogs.map((b, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate('/blog')}
                            className="group cursor-pointer text-left bg-[#122422] border border-white/5 hover:border-[#C29E6B] rounded-[3.5rem_0.75rem_3.5rem_0.75rem] overflow-hidden shadow-xl transition-all duration-500 hover:translate-y-[-6px] flex flex-col justify-between"
                        >
                            <div>
                                {/* Image Frame */}
                                <div className="aspect-[16/10] overflow-hidden bg-[#10211F] relative rounded-[3.25rem_0.5rem_0rem_0rem]">
                                    <img
                                        src={b.img}
                                        alt={b.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[#10211F]/10 opacity-30 group-hover:opacity-10 transition-opacity" />
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-4">
                                    <span className="inline-block text-[8px] text-[#C29E6B]  tracking-widest font-black font-sans bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        {b.cat}
                                    </span>
                                    <h3 className="text-base font-serif font-bold text-white  tracking-wider group-hover:text-[#C29E6B] transition-colors leading-snug">
                                        {b.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="px-8 pb-8 flex items-center gap-1.5 text-[9px] text-stone-400 font-sans border-t border-white/5 pt-4">
                                <Calendar size={11} className="text-[#C29E6B]" />
                                <span>{b.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate('/blog')}
                    className="px-8 py-4 bg-[#2C443E] hover:bg-[#1B2E2A] text-white text-[9px]  tracking-widest font-black transition-all duration-300 rounded-full shadow-lg hover:shadow-xl cursor-pointer"
                >
                    View All Articles
                </button>

            </div>
        </section>
    );
};

export default BlogHighlights;
