import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Star, Send } from "lucide-react";

const CustomerReviews = () => {
  useSEO("Customer Reviews", "Read customer testimonials or write your review about Retail Textile Mall.");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [feed, setFeed] = useState([
    { name: "Meera Sen", rating: 5, comment: "The saree selection here is out of this world! Handloom Banarasis of premium quality at direct prices." },
    { name: "Rohan Malhotra", rating: 5, comment: "Excellent suiting materials. We ordered bulk shirting and suits for our corporate staff; highly professional management." },
    { name: "Anjali Das", rating: 5, comment: "I source all my linen and home upholstery from Retail Textile Mall. Their 1000-thread count fabrics are premium." }
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
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-20">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Merchant Feedback
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Customer Review
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reviews List */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-lg text-brand-plum uppercase tracking-wider mb-2">Client Feed</h2>
            {feed.map((rev, idx) => (
              <div key={idx} className="bg-white border border-brand-gold/15 rounded-3xl p-6 shadow-md space-y-3 hover:border-brand-lavender/30 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-sm font-bold text-brand-plum uppercase tracking-wide">{rev.name}</h4>
                  <div className="flex text-brand-lavender">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-500 font-sans italic leading-relaxed">"{rev.comment}"</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-5 bg-white border border-brand-gold/15 rounded-3xl p-6 shadow-md">
            <h2 className="font-serif text-lg text-brand-plum uppercase tracking-wider mb-6">Write Review</h2>
            
            {submitted && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded px-4 py-3 text-center text-xs font-medium">
                ✓ Thank you! Review added to the active feed.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                />
                {errors.name && <p className="mt-1 text-[10px] text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">Rating (Stars)</label>
                <select
                  {...register("rating", { required: "Rating is required" })}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                >
                  <option value="5">5 Stars (Excellent)</option>
                  <option value="4">4 Stars (Good)</option>
                  <option value="3">3 Stars (Average)</option>
                  <option value="2">2 Stars (Poor)</option>
                  <option value="1">1 Star (Very Poor)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">Review Comment</label>
                <textarea
                  rows={4}
                  placeholder="Share details of your experience in our showroom..."
                  {...register("comment", { required: "Comment is required" })}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender resize-none transition-all"
                />
                {errors.comment && <p className="mt-1 text-[10px] text-red-500">{errors.comment.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-lavender hover:bg-brand-lavender text-white hover:text-brand-plum py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md"
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
