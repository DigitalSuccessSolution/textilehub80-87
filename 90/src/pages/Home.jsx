import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { ArrowRight, FileText, Gavel, Calendar } from 'lucide-react';

// Component Sections
import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import Categories from '../components/sections/Categories';
import BlogHighlights from '../components/sections/BlogHighlights';
import ReviewsSection from '../components/sections/ReviewsSection';

const Home = () => {
    const navigate = useNavigate();

    useSEO(
        'Home',
        'Kaaya Fabrics - Premium Fabrics & Garment Boutique. Discover luxury sarees, cotton leggings, designer kurtis, bedsheets, and suiting shirting fabrics.',
        'textiles, sarees, garment retail mall, linen, suiting, shirting, kids wear, Kaaya Fabrics'
    );

    const b2bServices = [
        {
            title: <><span className="lowercase font-serif">e</span>-<span className="uppercase font-serif">quotation</span></>,
            desc: "Fast & easy quotation for your B2B needs.",
            path: "/quotation",
            icon: <FileText className="w-5 h-5 text-[#800834]" />
        },
        {
            title: <><span className="lowercase font-serif">e</span>-<span className="uppercase font-serif">auction</span></>,
            desc: "Transparent bidding for the best prices.",
            path: "/auction",
            icon: <Gavel className="w-5 h-5 text-[#800834]" />
        },
        {
            title: "Trade Circular",
            desc: "Stay updated with latest offers & market circulars.",
            path: "/circular",
            icon: <Calendar className="w-5 h-5 text-[#800834]" />
        }
    ];

    return (
        <main className="overflow-x-hidden pt-0 bg-[#FDFBF7] text-brand-charcoal transition-colors duration-500">
            
            {/* 1. Hero Banner Slider */}
            <Hero />

            {/* 2. Shop By Category */}
            <Categories />

            {/* 3. Journey of Excellence */}
            <Intro />

            {/* 5. Trade Services B2B Section */}
            <section className="py-24 px-6 sm:px-10 bg-[#FAF8F5] border-t border-brand-gold/15 transition-colors duration-500">
                <div className="max-w-7xl mx-auto space-y-12">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                        <div className="text-left space-y-2">
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#800834] block">
                                Trade Services
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif text-brand-charcoal uppercase tracking-tight">
                                Partnerships <span className="font-light italic text-[#800834] lowercase">that</span> Grow Together
                            </h2>
                        </div>
                        <button 
                            onClick={() => navigate('/trade-enquiry')}
                            className="px-6 py-3 border border-[#800834] text-[#800834] hover:bg-[#800834] hover:text-white text-[9px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full cursor-pointer flex items-center gap-2"
                        >
                            View All Services
                            <ArrowRight size={10} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {b2bServices.map((service, idx) => (
                            <div 
                                key={idx}
                                onClick={() => navigate(service.path)}
                                className="group cursor-pointer bg-white border border-brand-gold/12 hover:border-[#800834]/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-8 rounded-[2rem] flex flex-col justify-between items-start text-left shadow-md h-full"
                            >
                                <div className="space-y-4 w-full">
                                    <div className="w-11 h-11 rounded-2xl bg-[#FAF8F5]/10 border border-brand-gold/15 flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base font-serif font-black text-brand-charcoal uppercase tracking-wide group-hover:text-[#800834] transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-stone-500 font-sans font-light leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="w-7 h-7 rounded-full bg-[#FAF8F5]/10 border border-brand-gold/15 group-hover:bg-[#800834] group-hover:text-white transition-all duration-300 flex items-center justify-center mt-6 text-[#800834] shadow-sm">
                                    <ArrowRight size={12} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 6. Insights & Updates */}
            <BlogHighlights />

            {/* 7. Customer Reviews */}
            <ReviewsSection />

        </main>
    );
};

export default Home;
