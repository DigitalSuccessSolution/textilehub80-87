import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { X, Camera, Building2, Users, Layers } from "lucide-react";

const mediaItems = [
  { id: 1, type: "image", category: "Showroom", title: "Main Showroom Floor", src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop" },
  { id: 2, type: "image", category: "Collection", title: "Premium Silk Collection Display", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" },
  { id: 3, type: "image", category: "Showroom", title: "Fabric Display Racks", src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop" },
  { id: 4, type: "image", category: "Events", title: "Annual Trade Expo 2026", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
  { id: 5, type: "image", category: "Collection", title: "Cotton & Linen Summer Range", src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop" },
  { id: 6, type: "image", category: "Showroom", title: "Luxury Saree Section", src: "https://images.unsplash.com/photo-1594938298603-c8148c4b6c3e?w=600&h=400&fit=crop" },
  { id: 7, type: "image", category: "Events", title: "Award Ceremony – Best Retailer 2026", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" },
  { id: 8, type: "image", category: "Collection", title: "Banarasi Wedding Collection", src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop" },
  { id: 9, type: "image", category: "Showroom", title: "Customer Service Desk", src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop" },
  { id: 10, type: "image", category: "Events", title: "Product Launch – Spring 2026", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop" },
  { id: 11, type: "image", category: "Collection", title: "Designer Fabric Swatches", src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop" },
  { id: 12, type: "image", category: "Showroom", title: "Wholesale Counter", src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop" },
];

const catIcons = { All: Camera, Showroom: Building2, Collection: Layers, Events: Users };

const MediaGallery = () => {
  useSEO({ title: "Media Gallery | Kaaya Fabrics", description: "Explore our showroom, collections, and events through our media gallery." });
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const categories = ["All", "Showroom", "Collection", "Events"];
  const filtered = filter === "All" ? mediaItems : mediaItems.filter(m => m.category === filter);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal text-left">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">Visual Journey</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Media Gallery
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            A glimpse into our showrooms, collections, and milestones.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2.5 mb-12 flex-wrap justify-center">
          {categories.map(c => {
            const Icon = catIcons[c];
            return (
              <button 
                key={c} 
                onClick={() => setFilter(c)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                  filter === c 
                    ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark" 
                    : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
                }`}
              >
                <Icon size={12} className="text-brand-gold" /> {c}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl relative border border-brand-emerald-accent/5 hover:border-brand-gold/40 transition-all duration-300 shadow-sm bg-white p-1.5"
              onClick={() => openLightbox(item)}
            >
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-[800ms] rounded-xl ${idx % 3 === 1 ? "h-72" : "h-56"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-xl">
                  <div>
                    <p className="text-white text-sm font-serif uppercase tracking-wide font-bold">{item.title}</p>
                    <p className="text-brand-gold text-[10px] uppercase tracking-widest font-black mt-1">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-brand-emerald-dark/60 backdrop-blur-sm rounded-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={14} className="text-brand-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[150] bg-brand-emerald-dark/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-brand-linen/60 hover:text-brand-gold transition-colors cursor-pointer" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="bg-white border border-brand-gold/15 p-2 rounded-xl shadow-2xl">
                <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-xl max-h-[70vh] object-contain bg-brand-linen" />
              </div>
              <div className="mt-5 text-center space-y-1">
                <p className="text-white font-serif text-xl uppercase tracking-wider font-bold">{lightbox.title}</p>
                <p className="text-brand-gold text-xs uppercase tracking-widest font-black">{lightbox.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
