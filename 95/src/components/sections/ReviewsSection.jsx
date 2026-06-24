import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
    const navigate = useNavigate();

    const reviews = [
        { name: "Meera Sen", role: "Shopper", text: "The saree selection here is out of this world! Handloom Banarasis of premium quality at direct prices.", rating: 5 },
        { name: "Rohan Malhotra", role: "Bulk Client", text: "Excellent suiting materials. We ordered bulk shirting and suits for our corporate staff; highly professional management.", rating: 5 },
        { name: "Anjali Das", role: "Interior Designer", text: "I source all my linen and home upholstery from Retail Textile Mall. Their 1000-thread count fabrics are premium.", rating: 5 }
    ];

    return (
        <section className="py-24 px-6 sm:px-10 bg-brand-cream text-brand-plum">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                
                {/* ── Section Header ── */}
                <div className="text-center space-y-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-lavender block">
                        What Our Clients Say
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight">
                        Trusted <span className="font-light italic text-brand-lavender lowercase">by</span> Thousands
                    </h2>
                    <div className="w-12 h-[2px] bg-brand-lavender mx-auto mt-4" />
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, idx) => (
                        <div 
                            key={idx}
                            className="bg-brand-light/90 p-8 border border-brand-gold/12 hover:border-brand-lavender/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 rounded-[2rem] text-left relative shadow-md"
                        >
                            {/* Stars rating in gold */}
                            <div className="flex gap-1 mb-4 text-brand-gold">
                                {[...Array(r.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            
                            <p className="text-stone-500 text-xs leading-relaxed mb-6 font-sans italic">
                                "{r.text}"
                            </p>
                            
                            <div className="pt-4 border-t border-brand-gold/10">
                                <h4 className="text-xs font-serif font-black text-brand-plum uppercase tracking-wider">
                                    {r.name}
                                </h4>
                                <span className="text-[9px] text-brand-lavender uppercase tracking-widest font-bold block mt-0.5">
                                    {r.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/reviews')}
                        className="px-8 py-4 bg-brand-light border border-brand-lavender text-brand-lavender hover:bg-brand-lavender hover:text-brand-cream text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-full shadow-md cursor-pointer"
                    >
                        Read All Testimonials
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;
