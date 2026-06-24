import React from 'react';
import useSEO from '../hooks/useSEO';
import { ArrowRight, CheckCircle2, Globe, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const milestones = [
    { year: '2001', title: 'Founded in Surat', desc: 'Aurora Textile House was established with a vision to deliver premium fabrics across India.' },
    { year: '2008', title: 'B2B Expansion', desc: 'Grew our wholesale network to 100+ boutiques across Gujarat, Maharashtra, and Rajasthan.' },
    { year: '2015', title: 'Pan-India Reach', desc: 'Extended operations to 20+ cities with automated shipping and dedicated trade portals.' },
    { year: '2024', title: 'Digital Transformation', desc: 'Launched e-quotation, e-auction, and online trade enquiry platforms for seamless B2B service.' },
];

const AboutUs = () => {
    const navigate = useNavigate();
    useSEO(
        'About Us',
        'Learn about Aurora Textile House - Over 25 years of trust in providing premium sarees, fabrics, and home linen.',
        'about aurora textile, store history, quality textile house, boutique'
    );

    return (
        <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20 font-sans">

            {/* ── Hero Banner ── */}
            <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-[#C29E6B]/5 blur-3xl pointer-events-none" />

                <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[#C29E6B] text-xs">✦</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Our Heritage</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
                            Weaving Excellence,<br />
                            <span className="text-[#C29E6B] font-light italic">Redefining Style</span>
                        </h1>
                        <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
                            Aurora Textile House is a legacy of craftsmanship, quality, and trust. For over two decades, we have connected India's finest weaver clusters with boutiques, retailers, and designers across the country.
                        </p>
                        <button
                            onClick={() => navigate('/products')}
                            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#C29E6B] hover:bg-[#9C4B6E] text-white text-[10px] font-bold uppercase tracking-[0.25em] rounded-full transition-all shadow-lg cursor-pointer"
                        >
                            Explore Collections <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[['25+', 'Years of Excellence'], ['500+', 'B2B Partners'], ['1L+', 'Clients Served'], ['20+', 'Cities Linked']].map(([n, l], i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/8 transition-colors">
                                <span className="text-3xl font-serif font-bold text-white block">{n}</span>
                                <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400 mt-1 block">{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3-Column Content ── */}
            <section className="py-20 px-6 sm:px-12 lg:px-16">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Col 1: Image */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white" style={{ minHeight: '400px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                            alt="Aurora Showroom"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 bg-[#C29E6B] text-white text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                            Established 2001
                        </div>
                    </div>

                    {/* Col 2: Journey */}
                    <div className="text-left flex flex-col justify-between bg-white border border-[#2E081B]/8 rounded-[2.5rem] p-8 shadow-sm">
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29E6B] block">Our Journey</span>
                            <h2 className="text-2xl font-serif text-[#2E081B] uppercase tracking-tight leading-snug">
                                Collaborative Weaver Hubs
                            </h2>
                            <div className="w-10 h-[1px] bg-[#C29E6B]" />
                            <p className="text-xs text-[#24151D]/75 leading-relaxed font-light">
                                Aurora Textile House is built with a commitment to B2B and B2C excellence. We collaborate directly with weaver clusters across the Indian sub-continent to preserve traditional handloom techniques while implementing modern quality controls.
                            </p>
                            <div className="space-y-2 pt-2">
                                {['Handloom silk weaving heritage', 'ISO-certified quality standards', 'Sustainable packaging processes', 'Direct farmer & artisan support'].map((t, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <CheckCircle2 size={13} className="text-[#C29E6B] shrink-0" />
                                        <span className="text-[11px] text-stone-600 font-light">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-6 border-t border-[#2E081B]/5 mt-6">
                            <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Presence</span>
                            <span className="text-sm font-serif text-[#2E081B] font-bold">12+ Weaver Clusters Connected</span>
                        </div>
                    </div>

                    {/* Col 3: Quality */}
                    <div className="text-left flex flex-col justify-between bg-[#FAF4EE] border border-[#2E081B]/8 rounded-[2.5rem] p-8 shadow-sm">
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29E6B] block">Quality Testing</span>
                            <h2 className="text-2xl font-serif text-[#2E081B] uppercase tracking-tight leading-snug">
                                Rigorous Thread Standards
                            </h2>
                            <div className="w-10 h-[1px] bg-[#C29E6B]" />
                            <p className="text-xs text-[#24151D]/75 leading-relaxed font-light">
                                From premium Italian suiting fabrics to pure Egyptian cotton sheets, our inventory goes through dynamic testing. We verify texture profiles, color fastness, and tensile strength so that every meter delivers long-lasting comfort.
                            </p>
                        </div>
                        <div className="pt-6 border-t border-[#2E081B]/5 mt-6">
                            <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Verification</span>
                            <span className="text-sm font-serif text-[#2E081B] font-bold">Certified ISO-105 Color Fastness</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="py-16 px-6 sm:px-12 lg:px-16 bg-white">
                <div className="max-w-[1600px] mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <div className="flex items-center justify-center gap-2">
                            <Sparkles size={12} className="text-[#C29E6B]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Our Milestones</span>
                            <Sparkles size={12} className="text-[#C29E6B]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#2E081B] tracking-tight">Journey Through Time</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((m, i) => (
                            <div key={i} className="relative text-left bg-[#FAF5F0] rounded-[2rem] p-7 border border-[#2E081B]/8 hover:border-[#C29E6B] hover:shadow-lg transition-all duration-300">
                                <span className="text-3xl font-serif font-bold text-[#C29E6B]/30 block mb-3">{m.year}</span>
                                <h3 className="text-sm font-serif font-bold text-[#2E081B] mb-2">{m.title}</h3>
                                <p className="text-[10px] text-stone-500 font-light leading-relaxed">{m.desc}</p>
                                {i < milestones.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-[#C29E6B]/30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
