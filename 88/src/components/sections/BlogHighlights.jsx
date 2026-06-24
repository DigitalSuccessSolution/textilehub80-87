import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: 'Summer Fabric Guide: Cotton vs Linen',
        cat: 'Styling Guide',
        date: 'June 05, 2026',
        img: 'https://images.unsplash.com/photo-1626497746447-ad25e1d40ff0?w=700&q=80',
        big: true,
    },
    {
        title: 'The Renaissance of Handloom Sarees',
        cat: 'Heritage Weaves',
        date: 'May 30, 2026',
        img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80',
    },
    {
        title: 'Upholstery Trends for Modern Showrooms',
        cat: 'Interior Curations',
        date: 'May 15, 2026',
        img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80',
    },
];

const BlogHighlights = () => {
    const navigate = useNavigate();

    const [featured, ...rest] = blogs;

    return (
        <section className="py-24 px-6 sm:px-10 bg-[#2E081B] relative overflow-hidden font-sans">

            {/* Ambient glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[#C29E6B]/5 blur-3xl pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[#C29E6B]">
                            <Sparkles size={12} />
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em]">
                                Insights & Couture Trends
                            </span>
                            <Sparkles size={12} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-none">
                            Latest <span className="text-[#C29E6B] font-light italic">Articles</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/blog')}
                        className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C29E6B] hover:text-white transition-colors border-b border-[#C29E6B]/30 hover:border-white pb-0.5 cursor-pointer"
                    >
                        View All <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Asymmetric 2+1 Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Featured large article */}
                    <div
                        onClick={() => navigate('/blog')}
                        className="lg:col-span-7 group cursor-pointer relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 hover:border-[#C29E6B]/40 transition-all duration-500"
                        style={{ minHeight: '420px' }}
                    >
                        <img
                            src={featured.img}
                            alt={featured.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/90 via-[#2E081B]/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                            <span className="inline-block text-[8px] text-[#C29E6B] uppercase tracking-widest font-black bg-white/8 border border-white/10 px-3 py-1 rounded-full mb-4">
                                {featured.cat}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-wide group-hover:text-[#C29E6B] transition-colors leading-snug mb-3">
                                {featured.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[9px] text-stone-400 font-sans">
                                <Calendar size={11} className="text-[#C29E6B]" />
                                <span>{featured.date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Two smaller articles stacked */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {rest.map((b, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate('/blog')}
                                className="group cursor-pointer flex gap-5 items-start bg-[#3D0C22] border border-white/5 hover:border-[#C29E6B]/40 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:translate-x-1"
                            >
                                <div className="w-36 shrink-0 overflow-hidden bg-[#2E081B]" style={{ height: '140px' }}>
                                    <img
                                        src={b.img}
                                        alt={b.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="flex-1 py-5 pr-5 text-left space-y-2">
                                    <span className="inline-block text-[7px] text-[#C29E6B] uppercase tracking-widest font-black bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                                        {b.cat}
                                    </span>
                                    <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wide group-hover:text-[#C29E6B] transition-colors leading-snug">
                                        {b.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-[9px] text-stone-400 font-sans pt-1">
                                        <Calendar size={10} className="text-[#C29E6B]" />
                                        <span>{b.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogHighlights;
