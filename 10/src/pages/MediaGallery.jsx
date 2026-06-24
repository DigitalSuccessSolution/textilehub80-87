import React, { useState } from 'react';
import { Play, X, ZoomIn } from 'lucide-react';

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'campaigns', label: 'Ad Campaigns' },
    { id: 'bts', label: 'Behind the Loom' },
    { id: 'events', label: 'Trade Shows' }
  ];

  const media = [
    { id: 1, type: 'image', category: 'campaigns', src: 'https://images.unsplash.com/photo-1583391733958-65007bc460bf?q=80&w=800&auto=format&fit=crop', title: 'Royal Silk Winter 2023' },
    { id: 2, type: 'video', category: 'bts', src: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop', title: 'Automated Jacquard Weaving' },
    { id: 3, type: 'image', category: 'events', src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop', title: 'Surat Textile Expo' },
    { id: 4, type: 'image', category: 'campaigns', src: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=800&auto=format&fit=crop', title: 'Banarasi Brocade Highlights' },
    { id: 5, type: 'video', category: 'bts', src: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=800&auto=format&fit=crop', title: 'Dyeing Process' },
    { id: 6, type: 'image', category: 'events', src: 'https://images.unsplash.com/photo-1523580494112-071d1694065c?q=80&w=800&auto=format&fit=crop', title: 'Global B2B Summit Dubai' },
  ];

  const filteredMedia = activeFilter === 'all' ? media : media.filter(m => m.category === activeFilter);

  return (
    <div className="bg-[#0f141e] min-h-screen pt-24 pb-20">
      
      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button 
            onClick={() => setLightbox(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full relative">
            {lightbox.type === 'image' ? (
              <img src={lightbox.src.replace('w=800', 'w=1600')} alt={lightbox.title} className="w-full h-auto max-h-[85vh] object-contain" />
            ) : (
              <div className="w-full aspect-video bg-slate-900 flex flex-col items-center justify-center border border-slate-800">
                <Play className="w-16 h-16 text-accent mb-4" />
                <p className="text-white font-heading text-2xl">{lightbox.title}</p>
                <p className="text-slate-500 text-sm mt-2">Video playback simulation</p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-heading text-2xl">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Visual Archives</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8">Media Gallery</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter.id 
                    ? 'bg-accent text-primary' 
                    : 'border border-white/20 text-slate-300 hover:border-white/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square overflow-hidden bg-slate-900 cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 backdrop-blur-md text-accent">
                  {item.type === 'video' ? <Play className="w-4 h-4 ml-1" /> : <ZoomIn className="w-4 h-4" />}
                </div>
                <h3 className="text-white font-heading font-bold text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MediaGallery;
