import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { X, Image as ImageIcon } from "lucide-react";

const MediaGallery = () => {
  useSEO("Business Media Gallery", "View photos of our premium textile showrooms, handloom weavers, and event showcases at Retail Textile Mall.");
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
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-20">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Visual Showroom
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Business Media Gallery
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
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
              className="bg-white border border-brand-gold/15 rounded-[2rem] overflow-hidden shadow-md cursor-pointer group relative aspect-[4/3] p-3"
            >
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-lavender/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-brand-cream">
                  <ImageIcon className="text-brand-cream mb-2" size={24} />
                  <h3 className="font-serif text-sm uppercase tracking-wider font-bold">{item.title}</h3>
                  <span className="text-[9px] text-brand-cream/75 uppercase tracking-widest mt-1">Click to Expand</span>
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
              className="absolute top-6 right-6 text-white hover:text-brand-lavender transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
            <div className="max-w-4xl max-h-[80vh] overflow-hidden border border-white/10 rounded-2xl">
              <img src={selectedImg.img} alt={selectedImg.title} className="w-full h-full object-contain max-h-[75vh]" />
            </div>
            <h3 className="text-brand-lavender font-serif text-base uppercase tracking-widest mt-4">{selectedImg.title}</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaGallery;
