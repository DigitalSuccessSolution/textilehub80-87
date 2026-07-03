import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Selecting Premium Banarasi Silk",
    excerpt: "A comprehensive guide to identifying authentic Banarasi silk – from the weave to the weight. What every discerning buyer should know.",
    date: "05 Jun 2026",
    category: "Fabric Guide",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/10317113/pexels-photo-10317113.jpeg",
  },
  {
    id: 2,
    title: "Summer 2026 Fabric Trends: Cotton Meets Linen",
    excerpt: "Industry insights on the most sought-after fabric combinations this season. Lightweight, breathable, and stylish.",
    date: "28 May 2026",
    category: "Trends",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "How to Care for Your Silk & Woollen Garments",
    excerpt: "Expert laundry, storage, and care tips for premium textiles. Extend the life of your finest fabrics with these proven methods.",
    date: "20 May 2026",
    category: "Care Guide",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "B2B Textile Sourcing: A Guide for Retailers",
    excerpt: "Everything you need to know about sourcing premium textiles at wholesale prices. Key questions to ask your supplier.",
    date: "12 May 2026",
    category: "Business",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Traditional Indian Handlooms: A Living Heritage",
    excerpt: "Explore the rich tradition of Indian handloom weaving – from Chanderi to Kanjivaram – and why it matters in modern fashion.",
    date: "01 May 2026",
    category: "Heritage",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/26729577/pexels-photo-26729577.jpeg",
  },
  {
    id: 6,
    title: "Understanding GST on Textile Products in India",
    excerpt: "A simplified breakdown of GST slabs applicable to various textile categories. Essential reading for trade buyers and retailers.",
    date: "22 Apr 2026",
    category: "Business",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
  },
];

const categoryColors = {
  "Fabric Guide": "bg-brand-emerald-dark text-brand-gold",
  "Trends": "bg-brand-terracotta/15 text-brand-terracotta",
  "Care Guide": "bg-brand-charcoal/10 text-brand-charcoal",
  "Business": "bg-brand-gold/20 text-brand-gold-dark",
  "Heritage": "bg-brand-emerald-accent/15 text-brand-emerald-accent",
};

const Blog = () => {
  useSEO({ title: "Blog | Kaaya Fabrics", description: "Insights, trends, and guides from the world of premium textiles and garment retail." });
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map(p => p.category))];
  const filtered = blogPosts.filter(p =>
    category === "All" || p.category === category
  );

  return (
    <div className="pt-20 min-h-screen bg-brand-linen text-brand-charcoal pb-20">
      {/* Header Banner */}
      <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
            Insights & Knowledge
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-white">
            Blog
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">

        {/* Filters */}
        <div className="mb-10 flex justify-center">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest border transition-all cursor-pointer ${category === c
                  ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark"
                  : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white border border-brand-emerald-accent/5 rounded-xl overflow-hidden hover:shadow-xl hover:border-brand-gold/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden h-48 bg-brand-emerald-dark/5">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms]" />
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center gap-3 mb-3.5">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xl ${categoryColors[post.category]}`}>{post.category}</span>
                    <span className="text-[10px] text-brand-charcoal/40 font-bold tracking-wider">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-serif font-bold text-brand-charcoal mb-2 leading-snug group-hover:text-brand-gold transition-colors duration-300 leading-tight">{post.title}</h2>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed font-sans font-light line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-brand-linen-dark/50 pt-4 text-left">
                <span className="text-[10px] text-brand-charcoal/40 flex items-center gap-1 font-bold tracking-wider"><Calendar size={11} className="text-brand-gold" /> {post.date}</span>
                <span className="text-[9px] font-black text-brand-gold flex items-center gap-1 group-hover:gap-2 transition-all tracking-widest">Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-brand-charcoal/40 bg-white border border-brand-emerald-accent/5 rounded-xl shadow-sm">
            <p className="text-xs uppercase font-bold tracking-widest mb-1">No articles found</p>
            <p className="text-[11px] font-sans font-light">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
