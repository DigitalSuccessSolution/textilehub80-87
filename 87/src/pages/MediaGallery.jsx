import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { X, Image as ImageIcon } from "lucide-react";

const MediaGallery = () => {
  useSEO("Business Media Gallery", "View photos of our premium textile showrooms, handloom weavers, and event showcases at Aurora Textile House.");
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    { id: 1, title: "Showroom Front Lobby", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
    { id: 2, title: "Banarasi Silk Handloom", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80" },
    { id: 3, title: "Linen & Bedsheet Display", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80" },
    { id: 4, title: "Suiting Fabrics Inventory", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80" },
    { id: 5, title: "Designer Ethnic Runway", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80" },
    { id: 6, title: "Upholstery & Home Decor Section", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-[#C29E6B] block">
              VISUAL SHOWROOM
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight uppercase text-white leading-none">
              Media Gallery
            </h1>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Take a visual tour of our premium retail layout, partner handlooms, and seasonal collection exhibitions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="bg-white border border-stone-200 hover:border-[#C29E6B] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer group relative aspect-[4/3] p-3.5 transition-all duration-500 hover:translate-y-[-6px]"
            >
              <div className="w-full h-full overflow-hidden rounded-[1.25rem] relative border border-stone-200/40">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                <div className="absolute inset-0 bg-[#10211F]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                  <ImageIcon className="text-[#C29E6B] mb-2" size={24} />
                  <h3 className="font-serif text-sm uppercase tracking-wider font-bold">{item.title}</h3>
                  <span className="text-[9px] text-[#C29E6B] uppercase tracking-widest mt-1.5 font-sans">Click to Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImg && (
          <div className="fixed inset-0 z-[160] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white hover:text-[#C29E6B] transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
            <div className="max-w-4xl max-h-[80vh] overflow-hidden border border-white/10 rounded-2xl">
              <img src={selectedImg.img} alt={selectedImg.title} className="w-full h-full object-contain max-h-[75vh]" />
            </div>
            <h3 className="text-[#C29E6B] font-serif text-base uppercase tracking-widest mt-4">{selectedImg.title}</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaGallery;
