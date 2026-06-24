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
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Visual Showroom</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Media<br />
              <span className="text-[#C29E6B] font-light italic">Gallery</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Take a visual tour of our premium retail layout, partner handlooms, and seasonal collection exhibitions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="bg-white border border-[#2E081B]/10 rounded-[2rem] overflow-hidden shadow-md cursor-pointer group relative aspect-[4/3] p-3"
            >
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#2E081B]/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-white">
                  <ImageIcon className="text-[#C29E6B] mb-2" size={24} />
                  <h3 className="font-serif text-sm uppercase tracking-wider font-bold">{item.title}</h3>
                  <span className="text-[9px] text-[#C29E6B] uppercase tracking-widest mt-1 font-sans">Click to Expand</span>
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
