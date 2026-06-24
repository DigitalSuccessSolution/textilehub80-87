import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, Video, X } from 'lucide-react';

const MediaGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaItems = [
    { id: 1, type: 'video', title: 'The Making of Katan Silk', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop', desc: 'A behind-the-scenes look at our partner looms in Varanasi.' },
    { id: 2, type: 'image', title: 'Annual Retailers Meet 2023', img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop', desc: 'Aurora Annual Summit in Surat.' },
    { id: 3, type: 'image', title: 'New Arrival: Festive Collection', img: 'https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=800&auto=format&fit=crop', desc: 'Preview of our upcoming festive stock.' },
    { id: 4, type: 'video', title: 'Quality Control Process', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop', desc: 'Understanding our rigorous 5-point QA check.' },
    { id: 5, type: 'image', title: 'Surat Warehouse Expansion', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop', desc: 'Adding 50,000 sq ft to our primary fulfillment center.' },
    { id: 6, type: 'video', title: 'How to use e-Quotation', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop', desc: 'A quick tutorial for new B2B partners.' }
  ];

  const filteredItems = filter === 'all' ? mediaItems : mediaItems.filter(item => item.type === filter);

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Behind the scenes of our textile manufacturing and B2B events.
          </p>
        </div>
      </div>
      
      <div className="container-custom pb-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-primary text-white shadow-md' : 'bg-card text-muted-foreground hover:bg-muted border border-border'}`}
          >
            All Media
          </button>
          <button 
            onClick={() => setFilter('video')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${filter === 'video' ? 'bg-primary text-white shadow-md' : 'bg-card text-muted-foreground hover:bg-muted border border-border'}`}
          >
            <Video className="w-3.5 h-3.5" /> Videos
          </button>
          <button 
            onClick={() => setFilter('image')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${filter === 'image' ? 'bg-primary text-white shadow-md' : 'bg-card text-muted-foreground hover:bg-muted border border-border'}`}
          >
            <ImageIcon className="w-3.5 h-3.5" /> Images
          </button>
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
              
              {/* Center Play Button for Videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white border border-white/20 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
                  {item.type === 'video' ? 'Video' : 'Gallery'}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
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
