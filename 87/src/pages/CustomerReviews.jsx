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
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] block">
              MERCHANT FEEDBACK
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-none">
              Customer Reviews
            </h1>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Read testimonials from retail shoppers and B2B clients, or submit your own store review at Aurora Textile House.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reviews List */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-serif text-xl text-[#10211F]  tracking-wider mb-2">Client Feed</h2>
            {feed.map((rev, idx) => (
              <div key={idx} className="bg-white border border-stone-200 hover:border-[#C29E6B] rounded-[2rem] p-8 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300 relative group">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-sm font-bold text-[#10211F]  tracking-wide group-hover:text-[#2C443E] transition-colors">{rev.name}</h4>
                  <div className="flex text-[#C29E6B] gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-500 font-sans italic leading-relaxed font-light">"{rev.comment}"</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-5 bg-white border border-[#10211F]/5 rounded-[2.5rem] p-8 shadow-xl text-left">
            <h2 className="font-serif text-xl text-[#10211F]  tracking-wider mb-6">Write Review</h2>
            
            {submitted && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl px-4 py-3 text-center text-xs font-medium shadow-sm font-sans">
                ✓ Thank you! Review added to the active feed.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-xs font-sans">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold  tracking-wider text-[#10211F]">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-light"
                />
                {errors.name && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold  tracking-wider text-[#10211F]">Rating (Stars)</label>
                <select
                  {...register("rating", { required: "Rating is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-light"
                >
                  <option value="5">5 Stars (Excellent)</option>
                  <option value="4">4 Stars (Good)</option>
                  <option value="3">3 Stars (Average)</option>
                  <option value="2">2 Stars (Poor)</option>
                  <option value="1">1 Star (Very Poor)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold  tracking-wider text-[#10211F]">Review Comment</label>
                <textarea
                  rows={4}
                  placeholder="Share details of your experience in our showroom..."
                  {...register("comment", { required: "Comment is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] resize-none transition-all font-light"
                />
                {errors.comment && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.comment.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#10211F] hover:bg-[#C29E6B] text-white py-3.5 rounded-full font-bold text-xs  tracking-widest transition-all duration-300 cursor-pointer shadow-md font-sans"
              >
                <Send size={13} /> Add Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
