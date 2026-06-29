import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Star, ShoppingBag, X, ChevronRight } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All', 
    'Sarees', 
    'Leggings', 
    'Kurtis', 
    'Dress Suits', 
    'Bedsheets & Linen', 
    'Hosiery Items', 
    'Suiting', 
    'Shirting', 
    'Formal & Ethnic Wear for Women', 
    'Formal & Ethnic Wear for Men', 
    'Formal & Ethnic Wear for Children', 
    'Home Upholstery & Furnishing'
  ];

  const products = [
    {
      id: 1,
      name: 'Varanasi Gold Zari Saree',
      category: 'Sarees',
      img: 'https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg',
      desc: 'Authentic Banarasi Katan silk with intricate pure gold zari motifs. Ideal for bridal and premium festive wear.',
      threadCount: '240 TC', gsm: '110 GSM', weave: 'Handloom Katan', minOrder: '50 Pieces', composition: 'Pure Mulberry Silk (100%)', volume: 1
    },
    {
      id: 2,
      name: 'Everyday Stretch Leggings',
      category: 'Leggings',
      img: 'https://media.istockphoto.com/id/1980806050/photo/full-body-attractive-girl-engage-in-her-pursuit-of-healthy-lifestyle-vigorous.jpg?b=1&s=612x612&w=0&k=20&c=1BXZoiBHgh0EuRe7ywn7sfS4Pt1NNU6V9AQ6IBLzWI0=',
      desc: 'Four-way stretch premium cotton-spandex leggings for ultimate comfort and durability.',
      threadCount: 'N/A', gsm: '220 GSM', weave: 'Interlock Knit', minOrder: '200 Pieces', composition: '88% Cotton, 12% Spandex', volume: 1
    },
    {
      id: 3,
      name: 'Embroidered Slub Kurti',
      category: 'Kurtis',
      img: 'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg',
      desc: 'Elegant kurtis with modern cuts and traditional embroidery. Fast colors and pre-shrunk fabric.',
      threadCount: '140 TC', gsm: '105 GSM', weave: 'Plain loom', minOrder: '80 Sets', composition: 'Soft Cotton-Silk Blend', volume: 1
    },
    {
      id: 4,
      name: 'Royal Chanderi Silk Suit',
      category: 'Dress Suits',
      img: 'https://images.pexels.com/photos/11840170/pexels-photo-11840170.jpeg',
      desc: 'Lightweight, sheer texture Chanderi fabric with delicate floral prints. Perfect for summer festive collections.',
      threadCount: '180 TC', gsm: '95 GSM', weave: 'Chanderi Jacquard', minOrder: '40 Sets', composition: 'Chanderi Silk-Cotton Blend', volume: 1
    },
    {
      id: 5,
      name: 'Egyptian Cotton Bedsheet',
      category: 'Bedsheets & Linen',
      img: 'https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI=',
      desc: 'Ultra-luxurious long-staple Egyptian cotton bedding set. Mercerized finish for exceptional sheen and durability.',
      threadCount: '400 TC', gsm: '160 GSM', weave: 'Sateen Stripe', minOrder: '30 Sets', composition: '100% Giza Egyptian Cotton', volume: 1
    },
    {
      id: 6,
      name: 'Essential Hosiery Pack',
      category: 'Hosiery Items',
      img: 'https://images.pexels.com/photos/11212879/pexels-photo-11212879.jpeg',
      desc: 'Soft and breathable innerwear made with premium combed cotton for everyday comfort.',
      threadCount: 'N/A', gsm: '160 GSM', weave: 'Single Jersey', minOrder: '500 Packs', composition: '100% Combed Cotton', volume: 1
    },
    {
      id: 7,
      name: 'Classic Twill Suiting',
      category: 'Suiting',
      img: 'https://images.pexels.com/photos/31094610/pexels-photo-31094610.jpeg',
      desc: 'Premium worsted wool blend for bespoke tailoring. Excellent drape and wrinkle resistance for formal wear.',
      threadCount: '150s Super', gsm: '280 GSM', weave: 'Twill Weave', minOrder: '100 Meters', composition: '80% Merino Wool, 20% Silk', volume: 1
    },
    {
      id: 8,
      name: 'Premium Cotton Shirting',
      category: 'Shirting',
      img: 'https://images.pexels.com/photos/9594940/pexels-photo-9594940.jpeg',
      desc: 'Crisp, lightweight cotton shirting perfect for corporate and smart casual wear.',
      threadCount: '120s 2-ply', gsm: '120 GSM', weave: 'Poplin', minOrder: '200 Meters', composition: '100% Pure Cotton', volume: 1
    },
    {
      id: 9,
      name: 'Designer Ethnic Gown',
      category: 'Formal & Ethnic Wear for Women',
      img: 'https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcm1hbCUyMCUyNiUyMGV0aG5pYyUyMHdlYXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      desc: 'Breathtaking ethnic gowns with heavy zari and stone work, perfectly suited for weddings.',
      threadCount: '180 TC', gsm: '150 GSM', weave: 'Georgette', minOrder: '20 Pieces', composition: 'Georgette & Net', volume: 1
    },
    {
      id: 10,
      name: 'Classic Sherwani Set',
      category: 'Formal & Ethnic Wear for Men',
      img: 'https://images.pexels.com/photos/37045884/pexels-photo-37045884.jpeg',
      desc: 'Royal sherwani set tailored to perfection for modern grooms, featuring intricate embroidery.',
      threadCount: '200 TC', gsm: '250 GSM', weave: 'Brocade Jacquard', minOrder: '10 Sets', composition: 'Silk Brocade Blend', volume: 1
    },
    {
      id: 11,
      name: 'Party Wear Frock',
      category: 'Formal & Ethnic Wear for Children',
      img: 'https://media.istockphoto.com/id/667900166/photo/smiling-portrait-of-an-indian-boy.jpg?b=1&s=612x612&w=0&k=20&c=SZBNrCgPpqvCosFQhkHXAFfXT4CA0x_6ZXXtuhws2OQ=',
      desc: 'Comfortable and adorable party wear for kids, made from skin-friendly fabrics.',
      threadCount: '150 TC', gsm: '130 GSM', weave: 'Cotton Silk Blend', minOrder: '100 Pieces', composition: 'Cotton & Silk', volume: 1
    },
    {
      id: 12,
      name: 'Luxury Jacquard Curtains',
      category: 'Home Upholstery & Furnishing',
      img: 'https://images.pexels.com/photos/18408858/pexels-photo-18408858.jpeg',
      desc: 'Heavy jacquard woven curtains that provide excellent light blocking and elegant room decor.',
      threadCount: '300 TC', gsm: '350 GSM', weave: 'Jacquard Weave', minOrder: '50 Pairs', composition: 'Polyester-Cotton Blend', volume: 1
    }
  ];

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Product Gallery</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Explore our curated selection of premium textiles, designed for excellence and crafted with passion.
          </p>
        </div>
      </div>

      <div className="container-custom">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories Tab */}
          <div className="flex overflow-x-auto w-full pb-4 gap-3 snap-x visible-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all snap-start shrink-0 ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-muted-foreground hover:bg-muted border border-border'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProducts.map((prod, idx) => (
            <div key={idx} className="bg-[#FCFBFA] rounded-[30px] overflow-hidden group border border-border/60 hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer" onClick={() => setSelectedProduct(prod)}>
              <div className="aspect-[4/5] relative overflow-hidden p-2 md:p-3">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-3 md:p-6 text-center">
                <span className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-widest block mb-1 md:mb-2">{prod.category}</span>
                <h3 className="font-heading text-xs md:text-lg font-bold text-foreground mb-2 md:mb-4 group-hover:text-primary transition-colors line-clamp-2">{prod.name}</h3>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-border mx-auto flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="bg-white w-full max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto visible-scrollbar rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row border border-border">
            
            <button 
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-border"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden shrink-0 bg-slate-100">
              <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{selectedProduct.category}</span>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">{selectedProduct.name}</h2>
              <p className="text-sm font-light text-muted-foreground mb-8 leading-relaxed">{selectedProduct.desc}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-primary/50 mb-1">Composition</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.composition}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-primary/50 mb-1">Weave/Knit</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.weave}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-primary/50 mb-1">Weight / GSM</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.gsm}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-primary/50 mb-1">Thread Count</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.threadCount}</span>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl border border-border mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary/60">Tiered Pricing</span>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">On Request</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary/60">Min. Order Qty</span>
                  <span className="text-sm font-bold text-primary">{selectedProduct.minOrder}</span>
                </div>
              </div>

              <div className="mt-auto flex gap-4">
                <a href="/e-quotation" className="flex-1 bg-primary text-white text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-md">
                  Request Quote
                </a>
                <a href="/contact" className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-primary hover:bg-muted transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Products;
