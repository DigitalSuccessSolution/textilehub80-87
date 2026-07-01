import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  { 
    id: 1, 
    name: "Rekha Sharma", 
    location: "Mumbai", 
    rating: 5, 
    date: "04 Jun 2026", 
    category: "Fabric Quality", 
    review: "Absolutely stunning Banarasi silk collection. The fabric quality is exceptional and the staff were incredibly knowledgeable. Will definitely return for all future purchases.", 
    helpful: 24,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  { 
    id: 2, 
    name: "Vinod Kapoor", 
    location: "Delhi", 
    rating: 5, 
    date: "29 May 2026", 
    category: "B2B Service", 
    review: "As a wholesale buyer, the trade team's professionalism and prompt response to quotation requests is outstanding. Pricing is competitive and delivery is always on time.", 
    helpful: 18,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  { 
    id: 3, 
    name: "Sunita Patel", 
    location: "Ahmedabad", 
    rating: 4, 
    date: "22 May 2026", 
    category: "Shopping Experience", 
    review: "Wonderful showroom with excellent variety. Visited for wedding trousseau and was pleasantly surprised by the range. Staff could be slightly faster during rush hours but overall a great experience.", 
    helpful: 11,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  { 
    id: 4, 
    name: "Ankit Mehta", 
    location: "Surat", 
    rating: 5, 
    date: "14 May 2026", 
    category: "Fabric Quality", 
    review: "Best linen fabric collection in Surat, without doubt. The 40s count linen I purchased was exactly as described. Consistency in quality across orders is what makes me a repeat customer.", 
    helpful: 31,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  { 
    id: 5, 
    name: "Priya Nair", 
    location: "Kochi", 
    rating: 4, 
    date: "07 May 2026", 
    category: "Online Enquiry", 
    review: "Placed a trade enquiry online and received a detailed response with samples within 2 days. The process was smooth. Will finalise my order this month.", 
    helpful: 8,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  { 
    id: 6, 
    name: "Mohammed Aziz", 
    location: "Hyderabad", 
    rating: 5, 
    date: "01 May 2026", 
    category: "B2B Service", 
    review: "Partnered with Kaaya Fabrics for over 3 years now. Consistent quality, fair pricing, and a trade team that genuinely understands the market. Highly recommended to fellow retailers.", 
    helpful: 42,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
];

const CustomerReviews = () => {
  useSEO({ title: "Customer Reviews | Kaaya Fabrics", description: "Read genuine reviews from our customers and trade partners." });
  const [helpful, setHelpful] = useState({});

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const renderStars = (rating, size = 14) => Array.from({ length: 5 }, (_, i) => (
    <Star key={i} size={size} className={i < rating ? "text-brand-gold fill-brand-gold" : "text-brand-linen-dark"} />
  ));

  return (
    <div className="pt-20 min-h-screen bg-brand-linen pb-20 text-brand-charcoal text-left">
      {/* Header Banner */}
      <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-105" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
            Social Proof
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
            Customer Reviews
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-12">

        {/* Rating Summary */}
        <div className="mb-12 bg-white border border-brand-emerald-accent/5 rounded-xl p-8 text-center md:text-left md:flex md:items-center md:gap-12 shadow-sm">
          <div className="text-center flex-shrink-0">
            <p className="text-7xl font-serif font-black text-brand-charcoal">{avgRating}</p>
            <div className="flex justify-center mt-3 gap-0.5">{renderStars(Math.round(avgRating), 20)}</div>
            <p className="text-[10px] text-brand-charcoal/40 font-bold mt-2">Based on {reviews.length} reviews</p>
          </div>
          <div className="flex-grow mt-6 md:mt-0 space-y-2">
            {[5, 4, 3, 2, 1].map(star => {
              const count = reviews.filter(r => r.rating === star).length;
              const pct = (count / reviews.length) * 100;
              return (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-brand-charcoal/60 w-8 text-right font-mono">{star} ★</span>
                  <div className="flex-grow bg-brand-linen rounded-full h-1.5">
                    <div className="bg-brand-gold h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-brand-charcoal/40 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reviews.map(r => (
            <div key={r.id} className="bg-white border border-brand-emerald-accent/5 rounded-xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4 text-left">
                  {/* Reviewer Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold/20 flex-shrink-0">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-serif font-bold text-brand-charcoal text-sm">{r.name}</p>
                    <p className="text-[10px] text-brand-charcoal/40 font-bold">{r.location} · {r.date}</p>
                  </div>
                  <span className="text-[9px] font-black bg-brand-linen text-brand-emerald-dark px-3 py-1 rounded-xl">{r.category}</span>
                </div>
                <div className="flex gap-0.5 mb-4">{renderStars(r.rating)}</div>
                <p className="text-xs md:text-sm text-brand-charcoal/70 leading-relaxed mb-6 font-sans font-light italic">"{r.review}"</p>
              </div>
              <button
                onClick={() => setHelpful(prev => ({ ...prev, [r.id]: true }))}
                className={`flex items-center gap-1.5 text-[10px] font-bold transition-colors cursor-pointer w-fit ${
                  helpful[r.id] ? "text-brand-gold" : "text-brand-charcoal/40 hover:text-brand-gold"
                }`}
              >
                <ThumbsUp size={12} className="text-brand-gold" /> Helpful ({helpful[r.id] ? r.helpful + 1 : r.helpful})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
