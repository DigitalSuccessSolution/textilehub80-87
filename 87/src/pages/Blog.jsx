import React from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const Blog = () => {
  useSEO("Style Blog", "Discover fashion guides, handloom history, and home decor upholstery tips on our blog at Aurora Textile House.");

  const posts = [
    {
      id: 1,
      title: "Summer Fabric Guide: Cotton vs Linen",
      desc: "An in-depth look at lightweight materials, thread configurations, and how to choose cool clothing for humid seasons.",
      cat: "Styling Guide",
      date: "June 05, 2026",
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80"
    },
    {
      id: 2,
      title: "The Renaissance of Handloom Sarees",
      desc: "How younger generations are reviving traditional Banarasi silk weaves, Jamdani, and linen sarees in mainstream fashion.",
      cat: "Heritage",
      date: "May 30, 2026",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    },
    {
      id: 3,
      title: "Upholstery Trends for Modern Showrooms",
      desc: "Make your customer lounges look highly aesthetic. Tips on fabric textures, curtain layering, and cushion cover palettes.",
      cat: "Interior Design",
      date: "May 15, 2026",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-[#C29E6B] block">
              STYLE INSIGHTS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight uppercase text-white leading-none">
              Blog Page
            </h1>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Read styling suggestions, fabric guides, and handloom history write-ups from our showroom curators.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white border border-stone-200 hover:border-[#C29E6B] rounded-[2rem] p-4 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#10211F] rounded-[1.25rem] rounded-t-[5rem] relative border border-stone-200/40">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] opacity-95" />
                </div>
                <div className="pt-6 px-3 text-left space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-sans font-bold uppercase tracking-wider text-[#C29E6B]">
                    <span>{post.cat}</span>
                    <span className="text-stone-400 font-light">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#10211F] uppercase tracking-wider leading-snug group-hover:text-[#2C443E] transition-colors">{post.title}</h3>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">{post.desc}</p>
                </div>
              </div>

              <div className="pt-6 px-3 pb-2">
                <Link
                  to={`/blog/${post.id}`}
                  className="w-full flex items-center justify-center gap-2 text-[9px] font-sans font-bold uppercase tracking-widest text-white bg-[#10211F] hover:bg-[#C29E6B] py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                >
                  Read Article →
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
