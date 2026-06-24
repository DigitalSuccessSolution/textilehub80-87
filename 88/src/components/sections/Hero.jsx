import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Users, Smile, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        img: '/88-hero.png',
        badge: '100% Pure Yarn',
        tagline: 'New Collection',
        headline: ['Elegance Woven in', 'Every', 'Thread'],
        accentWord: 'Every',
        sub: 'Discover our premium range of kurtis, sarees & fabrics crafted with love, tradition, and modern design sensibility.',
    },
    {
        img: '/88-hero2.png',
        badge: 'Heritage Quality',
        tagline: 'Exclusive Designs',
        headline: ['Textiles that', 'breathe', 'life into design.'],
        accentWord: 'breathe',
        sub: 'Curation of premium drapes, handloom silks, bespoke suiting, and interior fabrics designed to stand the test of time.',
    },
];

const stats = [
    { icon: <Crown size={16} />, number: '25+', label: 'Years Legacy' },
    { icon: <Users size={16} />, number: '500+', label: 'B2B Partners' },
    { icon: <Smile size={16} />, number: '1L+', label: 'Clients Served' },
    { icon: <MapPin size={16} />, number: '20+', label: 'Cities Linked' },
];

const Hero = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => goTo((current + 1) % slides.length), 5500);
        return () => clearInterval(timer);
    }, [current]);

    const goTo = (idx) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 350);
    };

    const slide = slides[current];

    return (
        <section className="relative min-h-screen bg-[#FAF5F0] overflow-hidden flex flex-col">

            {/* ── Decorative blobs ── */}
            <div className="absolute top-[-15%] right-[-8%] w-[50vw] h-[50vw] rounded-full bg-[#FAF0E6] blur-3xl pointer-events-none opacity-70" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#F5EBE6] blur-3xl pointer-events-none opacity-60" />

            {/* ── Main Grid ── */}
            <div className="flex-1 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 pt-28 pb-12 px-6 sm:px-12 lg:px-16 gap-0 items-stretch relative z-10">

                {/* ── Left: Text Content ── */}
                <div className="flex flex-col justify-center space-y-8 py-12 lg:pr-12 order-2 lg:order-1">

                    {/* Tag */}
                    <div
                        key={`tag-${current}`}
                        className="flex items-center gap-3"
                        style={{ animation: animating ? 'none' : 'fadeSlideUp 0.5s ease both' }}
                    >
                        <span className="w-6 h-[1.5px] bg-[#C29E6B]" />
                        <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-[#9C4B6E]">
                            {slide.tagline}
                        </span>
                    </div>

                    {/* Headline */}
                    <div
                        key={`h1-${current}`}
                        style={{ animation: animating ? 'none' : 'fadeSlideUp 0.55s ease 0.05s both' }}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#2E081B] leading-[1.05] tracking-tight">
                            {slide.headline.map((word, i) =>
                                word === slide.accentWord ? (
                                    <span key={i} className="block text-[#C29E6B] font-light italic normal-case">{word}</span>
                                ) : (
                                    <span key={i} className="block">{word}</span>
                                )
                            )}
                        </h1>
                    </div>

                    {/* Sub */}
                    <p
                        key={`sub-${current}`}
                        className="text-xs sm:text-sm font-sans font-light text-stone-600 max-w-md leading-relaxed"
                        style={{ animation: animating ? 'none' : 'fadeSlideUp 0.6s ease 0.1s both' }}
                    >
                        {slide.sub}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-5">
                        <button
                            onClick={() => navigate('/products')}
                            className="group flex items-center gap-2.5 px-8 py-3.5 bg-[#2E081B] hover:bg-[#9C4B6E] text-white text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            View Collection
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="group text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#2E081B] hover:text-[#9C4B6E] transition-colors border-b border-[#2E081B]/20 hover:border-[#9C4B6E] pb-0.5 cursor-pointer"
                        >
                            Our Story
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[#2E081B]/8">
                        {stats.map((s, i) => (
                            <div key={i} className="space-y-1 text-left">
                                <div className="flex items-center gap-1.5 text-[#C29E6B]">
                                    {s.icon}
                                    <span className="text-lg font-serif font-bold text-[#2E081B]">{s.number}</span>
                                </div>
                                <p className="text-[9px] text-stone-500 font-sans tracking-wider uppercase font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Slide Dots */}
                    <div className="flex items-center gap-3">
                        <button onClick={() => goTo((current - 1 + slides.length) % slides.length)} className="w-8 h-8 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B]/5 transition-colors cursor-pointer">
                            <ChevronLeft size={14} className="text-[#2E081B]" />
                        </button>
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => goTo(i)} className={`transition-all duration-300 rounded-full cursor-pointer ${i === current ? 'w-6 h-2 bg-[#C29E6B]' : 'w-2 h-2 bg-[#2E081B]/20 hover:bg-[#C29E6B]/50'}`} />
                        ))}
                        <button onClick={() => goTo((current + 1) % slides.length)} className="w-8 h-8 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B]/5 transition-colors cursor-pointer">
                            <ChevronRight size={14} className="text-[#2E081B]" />
                        </button>
                    </div>
                </div>

                {/* ── Right: Image Panel ── */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center min-h-[340px] lg:min-h-0">

                    {/* Main curved image */}
                    <div
                        key={`img-${current}`}
                        className="relative w-full h-full max-h-[85vh] min-h-[320px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
                        style={{ animation: animating ? 'none' : 'fadeIn 0.6s ease both' }}
                    >
                        <img
                            src={slide.img}
                            alt="Aurora Textile Collection"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/30 via-transparent to-transparent pointer-events-none" />

                        {/* Frosted glass badge */}
                        <div className="absolute top-6 right-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-4 py-3 text-white shadow-lg">
                            <p className="text-[8px] font-sans font-bold uppercase tracking-widest opacity-80">{slide.badge}</p>
                        </div>

                        {/* Bottom pill */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#2E081B]/80 backdrop-blur-sm text-white rounded-full px-6 py-3 shadow-xl border border-white/10">
                            <span className="text-[#C29E6B] text-xs">✦</span>
                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Aurora Textile House</span>
                            <span className="text-[#C29E6B] text-xs">✦</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
