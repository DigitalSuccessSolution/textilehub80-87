import React from 'react';
import useSEO from '../hooks/useSEO';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const members = [
    { name: 'Dipesh Solanki', role: 'Chairman & Director', desc: '40+ years of textile industry experience driving our corporate growth and strategic vision.', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80' },
    { name: 'Rishi Baraskar', role: 'Managing Director', desc: 'Overseeing operations, supply chain logistics, and showroom planning across all our locations.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { name: 'Amit K. Sen', role: 'Chief Sourcing Officer', desc: 'Leading vendor tie-ups and direct handloom sourcing across Indian weaver hubs and clusters.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

const pillars = [
    { title: 'Direct Weaver Sourcing', desc: 'We eliminate middlemen by integrating directly with master weavers and modern fabric mills.' },
    { title: 'Multi-Tier Quality Review', desc: 'Standard operating parameters for thread counts, fiber checks, and chemical-free dye testing.' },
    { title: 'B2B Price Benefits', desc: 'Direct integration passes on competitive pricing to our trade partners and retail buyers.' },
    { title: 'Transparent Operations', desc: 'Our management team maintains full transparency in supply chain and commercial decisions.' },
];

const Management = () => {
    const navigate = useNavigate();
    useSEO(
        'Our Retail Management',
        'Learn about the Aurora Textile House structure and operational excellence team.',
        'aurora textile management, board members, management team'
    );

    return (
        <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20 font-sans">

            {/* ── Hero Banner ── */}
            <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
                <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-5 text-left">
                        <div className="flex items-center gap-2">
                            <span className="text-[#C29E6B] text-xs">✦</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Operational Leadership</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
                            Our Retail<br />
                            <span className="text-[#C29E6B] font-light italic">Management</span>
                        </h1>
                        <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
                            A team of experienced textile industry leaders driving efficiency, quality, and innovation at every level of our operations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[['40+', 'Years Industry Exp.'], ['3', 'Leadership Members'], ['100%', 'Direct Sourcing'], ['ISO', 'Certified Standards']].map(([n, l], i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left hover:bg-white/8 transition-colors">
                                <span className="text-2xl font-serif font-bold text-white block">{n}</span>
                                <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400 mt-1 block">{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Operational Pillars ── */}
            <section className="py-20 px-6 sm:px-12 lg:px-16">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <Sparkles size={12} className="text-[#C29E6B]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Enterprise Standards</span>
                        <div className="flex-1 h-px bg-[#2E081B]/8" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                        {pillars.map((p, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-7 border border-[#2E081B]/8 hover:border-[#C29E6B] hover:shadow-lg transition-all duration-300 text-left">
                                <span className="text-4xl font-serif font-black text-[#C29E6B]/15 block mb-3">0{i + 1}</span>
                                <h3 className="text-sm font-serif font-bold text-[#2E081B] mb-2">{p.title}</h3>
                                <p className="text-[10px] text-stone-500 font-light leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Quality mandate */}
                    <div className="bg-[#2E081B] rounded-[2.5rem] p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-white/5 shadow-xl">
                        <div className="text-left space-y-4">
                            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Quality Mandate</span>
                            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                Efficient Supply Chains &<br />
                                <span className="text-[#C29E6B] font-light italic">Direct Weaver Sourcing</span>
                            </h2>
                        </div>
                        <p className="text-sm text-stone-300 font-light leading-relaxed text-left">
                            At Aurora Textile House, our operations are optimized to eliminate middlemen margins. Our management team focuses on direct integration with master weavers and modern fabric mills, passing on direct price benefits to our B2B trade partners and retail buyers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Leadership Board ── */}
            <section className="pb-16 px-6 sm:px-12 lg:px-16">
                <div className="max-w-[1600px] mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <div className="flex items-center justify-center gap-2">
                            <Sparkles size={12} className="text-[#C29E6B]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Meet The Team</span>
                            <Sparkles size={12} className="text-[#C29E6B]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#2E081B] tracking-tight">Leadership Board</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {members.map((m, idx) => (
                            <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-[#2E081B]/8 hover:border-[#C29E6B] shadow-sm hover:shadow-2xl transition-all duration-500">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden bg-stone-100">
                                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/50 to-transparent" />
                                    <div className="absolute bottom-4 left-5 bg-[#C29E6B] text-white text-[7px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                        {m.role}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-7 text-left space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="text-[9px] font-bold text-[#C29E6B] tracking-wider block">0{idx + 1}</span>
                                            <h3 className="text-lg font-serif font-bold text-[#2E081B] uppercase tracking-wide">{m.name}</h3>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[#FAF5F0] border border-[#2E081B]/10 flex items-center justify-center group-hover:bg-[#9C4B6E] group-hover:border-[#9C4B6E] transition-colors">
                                            <ChevronRight size={14} className="text-[#2E081B] group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <div className="w-8 h-[1px] bg-[#C29E6B]" />
                                    <p className="text-[11px] text-stone-500 font-light leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Management;
