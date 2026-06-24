import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThreeCTAs = () => {
    const navigate = useNavigate();

    const ctas = [
        {
            label: "live e-Auction",
            title: "Bid. Win. Grow.",
            desc: "Participate in live auctions and win the best deals on premium fabrics.",
            buttonText: "Join Live Auctions",
            link: "/auction",
            img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80"
        },
        {
            label: "e-Quotation",
            title: "Get Instant Quotes.",
            desc: "Request a quote and get the best pricing for wholesale and bulk orders.",
            buttonText: "Request Quote",
            link: "/quotation",
            img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=400&q=80"
        },
        {
            label: "Trade Services",
            title: "Everything You Need, All in One Place.",
            desc: "End-to-end custom textile solutions matching your business requirements.",
            buttonText: "Explore Services",
            link: "/trade-enquiry",
            img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80"
        }
    ];

    return (
        <section className="py-20 px-6 sm:px-12 bg-white border-t border-brand-linen-dark">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {ctas.map((c, idx) => (
                        <div 
                            key={idx}
                            className="bg-[#FDF6F8] border border-[#800834]/5 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-stretch gap-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                        >
                            {/* Left Side of Card: Details */}
                            <div className="flex-grow flex flex-col justify-between text-left space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-[#800834] block">
                                        {c.label}
                                    </span>
                                    <h3 className="text-xl font-serif font-black text-brand-charcoal uppercase leading-tight group-hover:text-[#800834] transition-colors">
                                        {c.title}
                                    </h3>
                                    <p className="text-[11px] text-brand-charcoal/70 leading-relaxed font-sans font-light">
                                        {c.desc}
                                    </p>
                                </div>
                                <button
                                    onClick={() => navigate(c.link)}
                                    className="self-start py-2.5 px-5 bg-[#800834] hover:bg-[#800834]/90 text-white text-[9px] font-sans font-black uppercase tracking-widest transition-colors rounded-xl shadow-md cursor-pointer inline-flex items-center gap-1.5"
                                >
                                    {c.buttonText} &rarr;
                                </button>
                            </div>

                            {/* Right Side of Card: Arch Image representation */}
                            <div className="w-24 md:w-32 aspect-[3/4] shrink-0 overflow-hidden rounded-t-full rounded-b-xl border border-brand-gold/15 shadow-md">
                                <img 
                                    src={c.img} 
                                    alt={c.label} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeCTAs;
