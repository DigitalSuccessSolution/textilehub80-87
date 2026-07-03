import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Categories = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Exact list of 12 categories in sequence:
    const categories = [
        { name: "Sarees", desc: "Timeless Elegance", img: "https://images.pexels.com/photos/13155748/pexels-photo-13155748.jpeg" },
        { name: "Leggings", desc: "Premium Stretch", img: "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg" },
        { name: "Kurtis", desc: "Everyday Grace", img: "https://images.pexels.com/photos/20420565/pexels-photo-20420565.jpeg" },
        { name: "Dress Suits", desc: "Style Redefined", img: "https://images.pexels.com/photos/13153337/pexels-photo-13153337.jpeg" },
        { name: "Bedsheets & Linen", desc: "Luxury Comfort", img: "https://images.pexels.com/photos/26756401/pexels-photo-26756401.jpeg" },
        { name: "Hosiery Items", desc: "Softness that Fits", img: "https://images.pexels.com/photos/5746051/pexels-photo-5746051.jpeg" },
        { name: "Suiting", desc: "Bespoke Tailoring", img: "https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg" },
        { name: "Shirting", desc: "Premium Weave", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80" },
        { name: "Formal & Ethnic Wear for Women", desc: "Elegant Couture", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80" },
        { name: "Formal & Ethnic Wear for Men", desc: "Classic Sherwanis", img: "https://images.pexels.com/photos/9436776/pexels-photo-9436776.jpeg" },
        { name: "Formal & Ethnic Wear for Children", desc: "Cute & Festive", img: "https://images.pexels.com/photos/4452939/pexels-photo-4452939.jpeg" },
        { name: "Home Upholstery & Furnishing", desc: "Comfort Decor", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80" }
    ];

    return (
        <section className="py-24 px-6 sm:px-10 bg-brand-cream text-brand-plum transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                
                {/* ── Section Header ── */}
                <div className="flex flex-col items-start text-left relative mb-16 space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
                        Shop By Department
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
                        Curated <span className="font-light italic text-brand-lavender lowercase font-serif">collections</span>
                        <span className="hidden md:inline-block font-cursive text-brand-lavender text-3xl normal-case font-normal ml-3 select-none">
                            of handcrafted textiles
                        </span>
                    </h2>
                </div>

                {/* ── Staggered Asymmetrical Editorial Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 pb-10">
                    {categories.map((cat, idx) => {
                        // Alternate top margins to create a staggered card catalog flow
                        const isOffset = idx % 2 !== 0;
                        const staggerClass = isOffset ? 'lg:mt-8' : 'mt-0';
                        return (
                            <div 
                                key={idx}
                                onClick={() => navigate('/products')}
                                className={`flex flex-col group cursor-pointer transition-all duration-500 ${staggerClass}`}
                            >
                                {/* Arched/Rounded Image Card */}
                                <div className="w-full aspect-[4/5.2] rounded-[2rem] overflow-hidden bg-brand-light border border-brand-gold/15 relative shadow-md group-hover:border-brand-lavender group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="w-full h-full object-cover scale-102 group-hover:scale-110 transition-transform duration-[2000ms]"
                                    />
                                    {/* Dark overlay that fades out on hover */}
                                    <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-500" />
                                    
                                    {/* Glassmorphic Info Card Overlay at the Bottom */}
                                    <div className="absolute inset-x-4 bottom-4 bg-brand-cream/90 backdrop-blur-md border border-brand-gold/15 p-4 rounded-2xl text-left flex justify-between items-center group-hover:bg-brand-cream transition-all duration-300 shadow-lg">
                                        <div className="space-y-0.5 max-w-[80%]">
                                            <h3 className="text-xs font-serif font-black text-brand-plum uppercase tracking-wider truncate">
                                                {cat.name}
                                            </h3>
                                            <p className="text-[9px] text-stone-500 font-sans tracking-wide leading-none truncate">
                                                {cat.desc}
                                            </p>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-brand-lavender text-brand-cream flex items-center justify-center opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shadow shrink-0">
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Categories;
