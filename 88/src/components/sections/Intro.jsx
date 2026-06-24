import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Hammer, BookOpen, Tag, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <FileText className="text-[#9C4B6E]" size={20} />,
        title: 'e-quotation',
        desc: 'Fast & easy quotation for your business needs.',
        path: '/quotation',
        num: '01',
    },
    {
        icon: <Hammer className="text-[#9C4B6E]" size={20} />,
        title: 'e-auction',
        desc: 'Transparent bidding for the best prices.',
        path: '/auction',
        num: '02',
    },
    {
        icon: <BookOpen className="text-[#9C4B6E]" size={20} />,
        title: 'Trade Circular',
        desc: 'Stay updated with latest offers & market circulars.',
        path: '/circular',
        num: '03',
    },
    {
        icon: <Tag className="text-[#9C4B6E]" size={20} />,
        title: 'Private Label',
        desc: 'Custom branding tailored for your brand identity.',
        path: '/trade-enquiry',
        num: '04',
    },
];

const Intro = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF5F0] font-sans">
            <div className="max-w-[1600px] mx-auto space-y-16">

                {/* ── Top: About Banner ── */}
                <div className="relative bg-[#2E081B] rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[260px] shadow-2xl border border-white/5">

                    {/* Left text */}
                    <div className="lg:col-span-7 p-10 md:p-14 flex flex-col justify-between space-y-6 z-10 text-left">
                        <div className="space-y-3">
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">
                                Our Committed Legacy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                Crafted with Passion. <br />
                                <span className="text-[#C29E6B] font-light italic">Delivered with Pride.</span>
                            </h2>
                            <p className="text-xs text-stone-300 font-sans font-light leading-relaxed max-w-lg">
                                At Aurora, we blend generational heritage with forward innovation, crafting premium fabrics directly sourced from weaver clusters across the Indian subcontinent.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/about')}
                            className="group self-start flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C29E6B] hover:text-white transition-colors cursor-pointer"
                        >
                            Know More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right stats pills */}
                    <div className="lg:col-span-5 p-10 flex flex-wrap gap-4 items-center justify-center lg:justify-end z-10">
                        {[['25+', 'Years of Excellence'], ['500+', 'B2B Partners'], ['1L+', 'Clients Served'], ['20+', 'Cities Linked']].map(([n, l], i) => (
                            <div key={i} className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4 min-w-[110px] text-center hover:bg-white/10 transition-colors">
                                <span className="text-2xl font-serif font-bold text-white">{n}</span>
                                <span className="text-[8px] font-sans uppercase tracking-widest text-stone-400 mt-1">{l}</span>
                            </div>
                        ))}
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
                    <div className="absolute -top-10 left-[40%] w-40 h-40 rounded-full bg-[#C29E6B]/5 blur-2xl pointer-events-none" />
                </div>

                {/* ── Bottom: Trade Services Row ── */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <Sparkles size={12} className="text-[#C29E6B]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">
                            Our Trade Portals & Services
                        </span>
                        <div className="flex-1 h-px bg-[#2E081B]/8" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((srv, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(srv.path)}
                                className="group relative bg-white rounded-[2rem] p-7 border border-[#2E081B]/8 shadow-sm hover:shadow-xl hover:border-[#C29E6B] transition-all duration-400 cursor-pointer overflow-hidden text-left"
                            >
                                {/* Number */}
                                <span className="absolute top-5 right-6 text-5xl font-serif font-black text-[#2E081B]/4 group-hover:text-[#C29E6B]/10 transition-colors select-none">
                                    {srv.num}
                                </span>

                                <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#FAF5F0] border border-[#9C4B6E]/10 mb-5 group-hover:bg-[#9C4B6E]/8 transition-colors">
                                    {srv.icon}
                                </div>

                                <h3 className="text-sm font-serif font-bold text-[#2E081B] mb-2 group-hover:text-[#9C4B6E] transition-colors">
                                    {srv.title.startsWith('e-') ? (
                                        <span className="lowercase">{srv.title}</span>
                                    ) : srv.title}
                                </h3>
                                <p className="text-[10px] text-stone-500 font-sans leading-relaxed">{srv.desc}</p>

                                <div className="mt-5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#9C4B6E] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore <ArrowRight size={10} />
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
