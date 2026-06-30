import React, { useState } from 'react';
import { ImageIcon, X } from 'lucide-react';

export const mediaCategories = ['All', 'Events', 'Store Visit', 'Products'];

export const mediaItems = [
  { id: 1, category: 'Store Visit', title: 'The Making of Katan Silk', img: 'https://images.pexels.com/photos/6276000/pexels-photo-6276000.jpeg', desc: 'A behind-the-scenes look at our partner looms in Varanasi.' },
  { id: 2, category: 'Events', title: 'Annual Retailers Meet 2023', img: 'https://images.pexels.com/photos/8483480/pexels-photo-8483480.jpeg', desc: 'Texmart Annual Summit in Surat.' },
  { id: 3, category: 'Products', title: 'New Arrival: Festive Collection', img: 'https://images.pexels.com/photos/20614158/pexels-photo-20614158.jpeg', desc: 'Preview of our upcoming festive stock.' },
  { id: 4, category: 'Store Visit', title: 'Quality Control Process', img: 'https://images.pexels.com/photos/14331475/pexels-photo-14331475.jpeg', desc: 'Understanding our rigorous 5-point QA check.' },
  { id: 5, category: 'Store Visit', title: 'Surat Warehouse Expansion', img: 'https://images.pexels.com/photos/17935776/pexels-photo-17935776.jpeg', desc: 'Adding 50,000 sq ft to our primary fulfillment center.' },
  { id: 6, category: 'Events', title: 'Trade Expo 2023', img: 'https://images.pexels.com/photos/34191411/pexels-photo-34191411.jpeg', desc: 'Showcasing our latest blends at the national trade expo.' }
];

const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems = mediaItems.filter(item => activeCategory === 'All' || item.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4 capitalize">Business Media Gallery</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Behind the scenes of our textile manufacturing and B2B events.
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">

        {/* Categories Tab */}
        <div className="flex overflow-x-auto w-full pb-8 gap-3 snap-x visible-scrollbar mb-8">
          {mediaCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold capitalize tracking-widest transition-all snap-start shrink-0 ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[30px] overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all border border-border/50"
              onClick={() => setSelectedMedia(item)}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white border border-white/20 text-sm font-bold capitalize tracking-widest px-2 py-1 rounded mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-accent transition-colors capitalize">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" onClick={() => setSelectedMedia(null)}></div>

          <button
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 w-full max-w-5xl">
            <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-white/10">
              <img src={selectedMedia.img} alt={selectedMedia.title} className="w-full h-full object-contain opacity-80" />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2 capitalize">{selectedMedia.title}</h2>
              <p className="text-white/60 font-light text-sm max-w-2xl mx-auto">{selectedMedia.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MediaGallery;
