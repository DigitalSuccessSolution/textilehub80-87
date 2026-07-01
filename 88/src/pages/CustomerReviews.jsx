import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Star, Send } from "lucide-react";

const CustomerReviews = () => {
  useSEO("Customer Reviews", "Read customer testimonials or write your review about Aurora Textile House.");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [feed, setFeed] = useState([
    { name: "Meera Sen", rating: 5, comment: "The saree selection here is out of this world! Handloom Banarasis of premium quality at direct prices." },
    { name: "Rohan Malhotra", rating: 5, comment: "Excellent suiting materials. We ordered bulk shirting and suits for our corporate staff; highly professional management." },
    { name: "Anjali Das", rating: 5, comment: "I source all my linen and home upholstery from Aurora Textile House. Their 1000-thread count fabrics are premium." }
  ]);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    const newRev = {
      name: data.name,
      rating: parseInt(data.rating),
      comment: data.comment
    };
    setFeed(prev => [newRev, ...prev]);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Merchant Feedback</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Customer<br />
              <span className="text-[#C29E6B] font-light italic">Reviews</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Read testimonials from retail shoppers and B2B clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-2xl mx-auto">
        {/* Reviews List */}
        <div className="space-y-6 text-left">
          <h2 className="font-serif text-lg text-[#2E081B] uppercase tracking-wider mb-2 text-center">Client Feed</h2>
          {feed.map((rev, idx) => (
            <div key={idx} className="bg-white border border-[#2E081B]/10 rounded-3xl p-6 shadow-md space-y-3 hover:border-[#C29E6B]/30 transition-colors">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-sm font-bold text-[#2E081B] uppercase tracking-wide">{rev.name}</h4>
                <div className="flex text-[#C29E6B]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-500 font-sans italic leading-relaxed font-light">"{rev.comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
