import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, Video, X } from 'lucide-react';

const MediaGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaItems = [
    { id: 1, category: 'Manufacturing', title: 'The Making of Katan Silk', img: 'https://images.pexels.com/photos/6876955/pexels-photo-6876955.jpeg', desc: 'A behind-the-scenes look at our partner looms in Varanasi.', date: 'Oct 24, 2023' },
    { id: 2, category: 'Events', title: 'Annual Retailers Meet 2023', img: 'https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg', desc: 'Texmart Annual Summit in Surat.', date: 'Oct 15, 2023' },
    { id: 3, category: 'Product Shoots', title: 'New Arrival: Festive Collection', img: 'https://images.pexels.com/photos/36104905/pexels-photo-36104905.jpeg', desc: 'Preview of our upcoming festive stock.', date: 'Sep 29, 2023' },
    { id: 4, category: 'Manufacturing', title: 'Quality Control Process', img: 'https://images.pexels.com/photos/31030919/pexels-photo-31030919.jpeg', desc: 'Understanding our rigorous 5-point QA check.', date: 'Sep 12, 2023' },
    { id: 5, category: 'Events', title: 'Surat Warehouse Expansion', img: 'https://images.pexels.com/photos/31199539/pexels-photo-31199539.jpeg', desc: 'Adding 50,000 sq ft to our primary fulfillment center.', date: 'Aug 24, 2023' },
    { id: 6, category: 'Product Shoots', title: 'Premium Shirting Catalogue', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop', desc: 'Photoshoot for the classic corporate line.', date: 'Jul 15, 2023' }
  ];

  const filteredItems = filter === 'all' ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Behind the scenes of our textile manufacturing and B2B events.
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
          >
            All Categories
          </button>
          <button
            onClick={() => setFilter('Events')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === 'Events' ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
          >
            Events
          </button>
          <button
            onClick={() => setFilter('Manufacturing')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === 'Manufacturing' ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
          >
            Manufacturing
          </button>
          <button
            onClick={() => setFilter('Product Shoots')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === 'Product Shoots' ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
          >
            Product Shoots
          </button>
        </div>

        {/* Gallery Grid - Image, Title, Category, Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] overflow-hidden group border border-border hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedMedia(item)}
            >
              <div>
                <div className="aspect-[4/3] relative overflow-hidden p-2">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{item.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors">View Details →</span>
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
              {selectedMedia.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </div>
              )}
            </div>
            <div className="mt-6 text-center">
              <div className="flex justify-center items-center gap-3 text-xs mb-3">
                <span className="bg-white/20 text-white font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">{selectedMedia.category}</span>
                <span className="text-white/60 font-bold">{selectedMedia.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h2>
              <p className="text-white/60 font-light text-sm max-w-2xl mx-auto">{selectedMedia.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MediaGallery;
