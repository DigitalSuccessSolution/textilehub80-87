import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const Blog = () => {
  useSEO("Style Blog", "Discover fashion guides, handloom history, and home decor upholstery tips on our blog at Retail Textile Mall.");

  const posts = [
    {
      id: 1,
      title: "Summer Fabric Guide: Cotton vs Linen",
      desc: "An in-depth look at lightweight materials, thread configurations, and how to choose cool clothing for humid seasons.",
      cat: "Styling Guide",
      author: "Amina Sen",
      date: "June 05, 2026",
      img: "https://images.pexels.com/photos/30982204/pexels-photo-30982204.jpeg"
    },
    {
      id: 2,
      title: "The Renaissance of Handloom Sarees",
      desc: "How younger generations are reviving traditional Banarasi silk weaves, Jamdani, and linen sarees in mainstream fashion.",
      cat: "Heritage",
      author: "Devendra Rao",
      date: "May 30, 2026",
      img: "https://images.pexels.com/photos/35195886/pexels-photo-35195886.jpeg"
    },
    {
      id: 3,
      title: "Upholstery Trends for Modern Showrooms",
      desc: "Make your customer lounges look highly aesthetic. Tips on fabric textures, curtain layering, and cushion cover palettes.",
      cat: "Interior Design",
      author: "Siddharth Roy",
      date: "May 15, 2026",
      img: "https://images.pexels.com/photos/6758358/pexels-photo-6758358.jpeg"
    },
    {
      id: 4,
      title: "Maintaining Silk Sarees: Pro Tips",
      desc: "Prevent moisture damage and preserve zari work. The ultimate guide to storing and dry cleaning pure mulberry silk sarees.",
      cat: "Heritage",
      author: "Devendra Rao",
      date: "May 10, 2026",
      img: "https://images.pexels.com/photos/13155747/pexels-photo-13155747.jpeg"
    },
    {
      id: 5,
      title: "The Perfect Fit: Leggings & Lounge Styling",
      desc: "How to style comfortable stretch wear and kurtis for casual workplace setups without compromising on professional standards.",
      cat: "Styling Guide",
      author: "Amina Sen",
      date: "April 28, 2026",
      img: "https://images.pexels.com/photos/4127497/pexels-photo-4127497.jpeg"
    },
    {
      id: 6,
      title: "Choosing Curtains: Sunlight and Weaves",
      desc: "A structural analysis of curtain fabrics, blackout linings, and matching wall shades for warm living rooms.",
      cat: "Interior Design",
      author: "Siddharth Roy",
      date: "April 14, 2026",
      img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg"
    }
  ];

  const categories = ["All", "Styling Guide", "Heritage", "Interior Design"];
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredPosts = posts.filter(
    (post) => selectedCat === "All" || post.cat === selectedCat
  );

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-20">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Style Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Blog Page
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-brand-light border-b border-brand-gold/15 mb-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all cursor-pointer border ${
                selectedCat === cat
                  ? "bg-brand-lavender text-white border-brand-lavender shadow-md font-bold"
                  : "bg-brand-cream text-brand-plum border-brand-gold/15 hover:border-brand-lavender/40 hover:text-brand-lavender"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white border border-brand-gold/15 rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-md group p-4">
              <div className="aspect-[16/10] overflow-hidden bg-brand-plum rounded-2xl">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] uppercase tracking-widest text-brand-lavender font-bold">{post.cat}</span>
                    <span className="text-[9px] text-stone-500 font-sans italic">By {post.author}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-plum mb-3 leading-snug group-hover:text-brand-lavender transition-colors">{post.title}</h3>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-3">{post.desc}</p>
                  <div className="text-[9px] text-stone-400 font-sans mb-6">Published: {post.date}</div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block text-[9px] uppercase font-bold tracking-wider text-brand-plum hover:text-brand-lavender transition-colors border-b border-brand-lavender/20 hover:border-brand-lavender pb-0.5 self-start font-sans"
                >
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
