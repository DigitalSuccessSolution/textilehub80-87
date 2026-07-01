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
    { id: 1, type: 'image', category: 'campaigns', src: 'https://images.pexels.com/photos/18976984/pexels-photo-18976984.jpeg', title: 'Royal Silk Winter 2023', date: 'Oct 24, 2023' },
    { id: 2, type: 'image', category: 'bts', src: 'https://images.pexels.com/photos/34506225/pexels-photo-34506225.jpeg', title: 'Automated Jacquard Weaving', date: 'Oct 18, 2023' },
    { id: 3, type: 'image', category: 'events', src: 'https://images.pexels.com/photos/34191411/pexels-photo-34191411.jpeg', title: 'Surat Textile Expo', date: 'Oct 12, 2023' },
    { id: 4, type: 'image', category: 'campaigns', src: 'https://images.pexels.com/photos/6167463/pexels-photo-6167463.jpeg', title: 'Banarasi Brocade Highlights', date: 'Sep 30, 2023' },
    { id: 5, type: 'image', category: 'bts', src: 'https://images.pexels.com/photos/6851133/pexels-photo-6851133.jpeg', title: 'Dyeing Process', date: 'Sep 15, 2023' },
    { id: 6, type: 'image', category: 'events', src: 'https://images.pexels.com/photos/18506891/pexels-photo-18506891.jpeg', title: 'Global B2B Summit Dubai', date: 'Sep 05, 2023' },
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
              <p className="text-xs text-accent mt-1 capitalize">{lightbox.category} • {lightbox.date}</p>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">Media Gallery</h1>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === filter.id
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
                <span className="text-[10px] text-accent font-semibold mb-1 block capitalize">{item.category}</span>
                <h3 className="text-white font-heading font-bold text-xl">{item.title}</h3>
                <p className="text-slate-400 text-xs mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MediaGallery;
