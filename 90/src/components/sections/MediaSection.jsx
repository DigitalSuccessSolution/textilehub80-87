import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaSection = () => {
    const navigate = useNavigate();

    const images = [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80"
    ];

    return (
        <section className="py-12 px-6 sm:px-10 bg-[#FCFBF7]">
            <div className="max-w-[1600px] mx-auto text-center">
                
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
                        Our Showroom
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight uppercase leading-none mb-4">
                        Media <span className="font-light text-[#C5A880] italic">Gallery</span>
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
                </div>

                {/* 3-Column Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {images.map((img, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/media-gallery')}
                            className="group cursor-pointer overflow-hidden border border-black/5 rounded-xl relative aspect-[4/3]"
                        >
                            <img
                                src={img}
                                alt="Showroom Preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => navigate('/media-gallery')}
                    className="px-8 py-3 bg-[#121212] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#121212] text-[9px] uppercase tracking-widest font-black transition-colors rounded-xl border border-[#C5A880]/20"
                >
                    Open Media Vault
                </button>

            </div>
        </section>
    );
};

export default MediaSection;
