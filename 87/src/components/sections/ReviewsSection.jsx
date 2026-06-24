import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
    const testimonials = [
        {
            quote: "The quality and consistency Aurora provides is unmatched. Highly recommended!",
            author: "Meena Collection",
            city: "Delhi",
            stars: 5,
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
        },
        {
            quote: "Best variety, best prices and a very professional team. Great experience!",
            author: "Sagar Textiles",
            city: "Mumbai",
            stars: 5,
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
        },
        {
            quote: "A partner we can rely on for every season and every trend.",
            author: "Rajesh Traders",
            city: "Surat",
            stars: 5,
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
        }
    ];

    return (
        <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF6F2] font-sans border-b border-[#10211F]/5 relative overflow-hidden">
            
            {/* Background elements to match mockup circles */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#10211F]/5 blur-3xl pointer-events-none" />

            <div className="max-w-[1600px] mx-auto text-center relative z-10">
                
                {/* ── Title Flanked by Decorative Leaf Accents ── */}
                <div className="mb-16 space-y-3">
                    <div className="flex items-center justify-center gap-3 text-[#C29E6B]">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em]">
                            What Our Clients Say
                        </span>
                    </div>
                    <div className="w-12 h-[1px] bg-[#C29E6B] mx-auto"></div>
                </div>

                {/* ── 3 Column Testimonials Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FAF4EE] rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-sm hover:shadow-xl hover:border-[#C29E6B]/30 hover:bg-white transition-all duration-500 flex flex-col justify-between text-left group min-h-[260px] relative overflow-hidden"
                        >
                            {/* Decorative quotes background mark */}
                            <div className="absolute right-6 top-6 text-stone-200/40 group-hover:text-[#C29E6B]/10 transition-colors pointer-events-none">
                                <Quote size={40} strokeWidth={1} />
                            </div>

                            <div className="space-y-5 relative z-10">
                                {/* Stars */}
                                <div className="flex items-center gap-0.5">
                                    {[...Array(test.stars)].map((_, i) => (
                                        <Star key={i} size={10} fill="#C29E6B" strokeWidth={0} />
                                    ))}
                                </div>

                                {/* Quote Content */}
                                <p className="text-xs sm:text-sm font-sans font-light text-[#10211F]/90 leading-relaxed italic pr-4">
                                    "{test.quote}"
                                </p>
                            </div>

                            {/* Author details with image at bottom */}
                            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#10211F]/5 relative z-10">
                                <img
                                    src={test.img}
                                    alt={test.author}
                                    className="w-10 h-10 rounded-t-xl rounded-b-[1.5rem] object-cover border border-stone-200/40 shadow-sm"
                                />
                                <div className="space-y-0.5">
                                    <h4 className="text-[11px] font-sans font-bold text-[#10211F] uppercase tracking-wider">
                                        {test.author}
                                    </h4>
                                    <p className="text-[9px] text-stone-500 font-sans font-light tracking-wide">
                                        {test.city}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;
