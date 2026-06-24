import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MessageSquare } from 'lucide-react';

const ReviewsSection = () => {
    const navigate = useNavigate();

    const reviews = [
        {
            name: "Rajesh Mehta",
            role: "Retailer, Delhi",
            text: "Kaaya Fabrics has been our trusted partner for years. Quality and service are simply unmatched!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
        },
        {
            name: "Priya Shah",
            role: "Boutique Owner, Mumbai",
            text: "Their range, delivery, and customer support are exceptional. Highly recommended for bulk orders.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
        },
        {
            name: "Anil Verma",
            role: "Wholesaler, Jaipur",
            text: "The fabrics are elegant and timeless. Our customers love the designs and feel.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-12 px-6 sm:px-12 bg-[#FDF6F8] border-t border-brand-linen-dark relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto text-center relative z-10">
                
                {/* Header */}
                <div className="mb-16 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#800834]/10 flex items-center justify-center mb-4 text-[#800834]">
                        <MessageSquare className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-sans text-brand-charcoal tracking-tight font-black uppercase">
                        What Our Clients <span className="text-[#800834]">Say</span>
                    </h2>
                    <div className="w-12 h-[1.5px] bg-[#800834]/30 mt-4" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {reviews.map((r, idx) => (
                        <div 
                            key={idx}
                            className="bg-white p-8 border border-[#800834]/5 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl text-left flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-[#800834] text-4xl font-serif leading-none mb-3">“</div>
                                <div className="flex gap-1 mb-4 text-[#E2A838]">
                                    {[...Array(r.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" stroke="none" />
                                    ))}
                                </div>
                                <p className="text-brand-charcoal/80 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                                    {r.text}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4 pt-4 border-t border-brand-linen-dark">
                                <img 
                                    src={r.avatar} 
                                    alt={r.name} 
                                    className="w-10 h-10 rounded-full object-cover border border-brand-gold/25 shrink-0" 
                                />
                                <div>
                                    <h4 className="text-xs font-sans font-black text-brand-charcoal uppercase tracking-wider">
                                        {r.name}
                                    </h4>
                                    <span className="text-[10px] text-brand-charcoal/50 font-sans block">
                                        {r.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => navigate('/reviews')}
                    className="px-8 py-3.5 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors rounded-xl shadow-lg cursor-pointer"
                >
                    Read All Testimonials
                </button>

            </div>
        </section>
    );
};

export default ReviewsSection;
