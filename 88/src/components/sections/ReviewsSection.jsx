import React, { useState } from 'react';
import { Award, Truck, ShieldCheck, Leaf, Heart, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
    { icon: <Award size={15} className="text-[#C29E6B]" />, title: 'Premium Quality', desc: 'Finest materials & attention to detail.' },
    { icon: <Truck size={15} className="text-[#C29E6B]" />, title: 'Pan-India Delivery', desc: 'Fast, reliable shipping to all cities.' },
    { icon: <ShieldCheck size={15} className="text-[#C29E6B]" />, title: 'Ethical Sourcing', desc: 'Responsibly sourced from trusted weavers.' },
    { icon: <Leaf size={15} className="text-[#C29E6B]" />, title: 'Sustainable Future', desc: 'Eco-friendly & sustainable practices.' },
    { icon: <Heart size={15} className="text-[#C29E6B]" />, title: 'Client Centric', desc: 'Your satisfaction is our priority.' },
];

const testimonials = [
    {
        quote: 'The consistency and luxury drape that Aurora provides is absolutely unmatched. Highly recommended B2B partner.',
        author: 'Meena Collections',
        city: 'Delhi Boutique',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150',
        stars: 5,
    },
    {
        quote: 'Stunning collections, accurate thread counts, and extremely professional team support. Simply exceptional!',
        author: 'Sagar Ethnic House',
        city: 'Mumbai Boutique',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
        stars: 5,
    },
    {
        quote: 'A styling partner we rely on for every wedding season. Excellent quality and outstanding customer service.',
        author: 'Rajesh Silk Traders',
        city: 'Surat Market',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
        stars: 5,
    },
];

const ReviewsSection = () => {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
    const next = () => setActive((a) => (a + 1) % testimonials.length);

    const t = testimonials[active];

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF5F0] font-sans">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                {/* ── Left: Why Partner With Us ── */}
                <div className="bg-[#2E081B] rounded-[2.5rem] p-10 flex flex-col justify-between shadow-xl border border-white/5 relative overflow-hidden">

                    <div className="space-y-8 z-10 relative">
                        <div className="space-y-2 text-left">
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B] block">Why Partner With Us?</span>
                            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                Built on Trust,<br />
                                <span className="text-[#C29E6B] font-light italic">Driven by Excellence.</span>
                            </h2>
                        </div>

                        <div className="space-y-1">
                            {reasons.map((item, idx) => (
                                <div key={idx} className="group flex items-start gap-4 py-3.5 border-b border-white/5 last:border-0 hover:bg-white/3 rounded-xl px-2 transition-colors">
                                    <div className="w-9 h-9 rounded-xl bg-[#3E0F26] border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-serif font-bold text-white">{item.title}</p>
                                        <p className="text-[10px] text-stone-400 font-sans font-light mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact stats */}
                    <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-3 gap-4 z-10 relative">
                        {[['100+', 'Vendor Clusters'], ['1M+', 'Yards Handed'], ['2001', 'Est.']].map(([n, l], i) => (
                            <div key={i} className="text-left">
                                <span className="text-xl font-serif font-bold text-white block">{n}</span>
                                <span className="text-[8px] uppercase tracking-widest text-stone-400 font-sans">{l}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#9C4B6E]/10 blur-2xl pointer-events-none" />
                </div>

                {/* ── Right: Testimonials ── */}
                <div className="flex flex-col justify-between gap-8">

                    {/* Testimonial Card */}
                    <div className="flex-1 bg-white rounded-[2.5rem] p-10 border border-[#2E081B]/8 shadow-md flex flex-col justify-between">
                        <div className="text-left space-y-6">
                            <div className="flex items-center justify-between">
                                <Quote size={32} className="text-[#C29E6B]/40" />
                                <div className="flex gap-1">
                                    {Array(t.stars).fill(0).map((_, i) => (
                                        <Star key={i} size={12} className="text-[#C29E6B] fill-[#C29E6B]" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-base md:text-lg font-serif font-light italic text-[#2E081B]/80 leading-relaxed transition-all duration-300">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-[#2E081B]/5">
                                <img
                                    src={t.img}
                                    alt={t.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C29E6B]/20 shadow-sm shrink-0"
                                />
                                <div className="text-left">
                                    <p className="text-sm font-serif font-bold text-[#2E081B]">{t.author}</p>
                                    <p className="text-[10px] text-stone-400 font-sans">• {t.city}</p>
                                </div>
                            </div>
                        </div>

                        {/* Nav */}
                        <div className="flex items-center gap-4 mt-8">
                            <button onClick={prev} className="w-10 h-10 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B] hover:text-white hover:border-[#2E081B] transition-all cursor-pointer">
                                <ChevronLeft size={15} />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`transition-all duration-300 rounded-full cursor-pointer ${i === active ? 'w-5 h-2 bg-[#C29E6B]' : 'w-2 h-2 bg-[#2E081B]/15'}`}
                                    />
                                ))}
                            </div>
                            <button onClick={next} className="w-10 h-10 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B] hover:text-white hover:border-[#2E081B] transition-all cursor-pointer">
                                <ChevronRight size={15} />
                            </button>
                        </div>
                    </div>

                    {/* Eco Impact card */}
                    <div className="bg-[#9C4B6E] rounded-[2.5rem] p-8 text-white flex items-center gap-6 shadow-lg border border-white/5">
                        <div className="space-y-1 text-left">
                            <span className="text-[9px] uppercase tracking-widest text-[#C29E6B] font-bold">Sustainable Impact</span>
                            <h3 className="text-lg font-serif font-bold leading-tight">Eco Choices,<br />Enduring Quality.</h3>
                        </div>
                        <div className="ml-auto text-right shrink-0">
                            <span className="text-3xl font-serif font-bold block">100+</span>
                            <span className="text-[8px] uppercase tracking-widest text-stone-200 font-sans">Ethical Vendors</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;
