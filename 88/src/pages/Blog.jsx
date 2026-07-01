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
      img: "https://images.pexels.com/photos/4794900/pexels-photo-4794900.jpeg"
    },
    {
      id: 2,
      title: "The Renaissance of Handloom Sarees",
      desc: "How younger generations are reviving traditional Banarasi silk weaves, Jamdani, and linen sarees in mainstream fashion.",
      cat: "Heritage",
      date: "May 30, 2026",
      img: "https://images.pexels.com/photos/6634604/pexels-photo-6634604.jpeg"
    },
    {
      id: 3,
      title: "Upholstery Trends for Modern Showrooms",
      desc: "Make your customer lounges look highly aesthetic. Tips on fabric textures, curtain layering, and cushion cover palettes.",
      cat: "Interior Design",
      date: "May 15, 2026",
      img: "https://images.pexels.com/photos/6969830/pexels-photo-6969830.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Style Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Style<br />
              <span className="text-[#C29E6B] font-light italic">Blog</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Read styling suggestions, fabric guides, and handloom history write-ups from our showroom curators.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border border-[#2E081B]/10 rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-md group p-4">
              <div className="aspect-[16/10] overflow-hidden bg-[#2E081B] rounded-2xl">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="pt-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] uppercase tracking-widest text-[#C29E6B] font-bold">{post.cat}</span>
                    <span className="text-[10px] text-stone-400 font-sans">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2E081B] mb-3 leading-snug group-hover:text-[#9C4B6E] transition-colors">{post.title}</h3>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-6 font-light">{post.desc}</p>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block text-[9px] uppercase font-bold tracking-wider text-[#9C4B6E] hover:text-[#C29E6B] transition-colors border-b border-[#9C4B6E]/20 hover:border-[#C29E6B] pb-0.5 self-start font-sans"
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
