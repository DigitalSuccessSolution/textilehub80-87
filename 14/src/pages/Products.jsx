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
    'Women Wear', 
    'Men Wear', 
    'Children Wear', 
    'Home Furnishing'
  ];

  const baseProducts = [
    {
      name: 'Varanasi Gold Zari Katan',
      category: 'Sarees',
      img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
      desc: 'Authentic Banarasi Katan silk with intricate pure gold zari motifs. Ideal for bridal and premium festive wear.',
      threadCount: '240 TC', gsm: '110 GSM', weave: 'Handloom Katan', minOrder: '50 Pieces', composition: 'Pure Mulberry Silk (100%)',
    },
    {
      name: 'Everyday Comfort Leggings',
      category: 'Leggings',
      img: 'https://images.unsplash.com/photo-1509631179647-0c37272f912e?q=80&w=800&auto=format&fit=crop',
      desc: 'Four-way stretch premium cotton-spandex leggings for ultimate comfort and durability.',
      threadCount: 'N/A', gsm: '220 GSM', weave: 'Interlock Knit', minOrder: '200 Pieces', composition: '88% Cotton, 12% Spandex',
    },
    {
      name: 'Festive Kurti Collection',
      category: 'Kurtis',
      img: 'https://images.unsplash.com/photo-1605902302302-3861214cc9f7?q=80&w=800&auto=format&fit=crop',
      desc: 'Elegant kurtis with modern cuts and traditional embroidery. Fast colors and pre-shrunk fabric.',
      threadCount: '140 TC', gsm: '105 GSM', weave: 'Plain loom', minOrder: '80 Sets', composition: 'Soft Cotton-Silk Blend',
    },
    {
      name: 'Royal Chanderi Silk Set',
      category: 'Dress Suits',
      img: 'https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=800&auto=format&fit=crop',
      desc: 'Lightweight, sheer texture Chanderi fabric with delicate floral prints. Perfect for summer festive collections.',
      threadCount: '180 TC', gsm: '95 GSM', weave: 'Chanderi Jacquard', minOrder: '40 Sets', composition: 'Chanderi Silk-Cotton Blend',
    },
    {
      name: 'Egyptian Cotton Royal Set',
      category: 'Bedsheets & Linen',
      img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
      desc: 'Ultra-luxurious long-staple Egyptian cotton bedding set. Mercerized finish for exceptional sheen and durability.',
      threadCount: '400 TC', gsm: '160 GSM', weave: 'Sateen Stripe', minOrder: '30 Sets', composition: '100% Giza Egyptian Cotton',
    },
    {
      name: 'Essential Hosiery Pack',
      category: 'Hosiery Items',
      img: 'https://images.unsplash.com/photo-1588145125958-552ebfa40a4e?q=80&w=800&auto=format&fit=crop',
      desc: 'Soft and breathable innerwear made with premium combed cotton for everyday comfort.',
      threadCount: 'N/A', gsm: '160 GSM', weave: 'Single Jersey', minOrder: '500 Packs', composition: '100% Combed Cotton',
    },
    {
      name: 'Classic Twill Suiting',
      category: 'Suiting',
      img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop',
      desc: 'Premium worsted wool blend for bespoke tailoring. Excellent drape and wrinkle resistance for formal wear.',
      threadCount: '150s Super', gsm: '280 GSM', weave: 'Twill Weave', minOrder: '100 Meters', composition: '80% Merino Wool, 20% Silk',
    },
    {
      name: 'Premium Cotton Shirting',
      category: 'Shirting',
      img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop',
      desc: 'Crisp, lightweight cotton shirting perfect for corporate and smart casual wear.',
      threadCount: '120s 2-ply', gsm: '120 GSM', weave: 'Poplin', minOrder: '200 Meters', composition: '100% Pure Cotton',
    },
    {
      name: 'Designer Ethnic Gown',
      category: 'Women Wear',
      img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop',
      desc: 'Breathtaking ethnic gowns with heavy zari and stone work, perfectly suited for weddings.',
      threadCount: '180 TC', gsm: '150 GSM', weave: 'Georgette', minOrder: '20 Pieces', composition: 'Georgette & Net',
    },
    {
      name: 'Classic Sherwani Set',
      category: 'Men Wear',
      img: 'https://images.unsplash.com/photo-1594938298596-70f582004d11?q=80&w=800&auto=format&fit=crop',
      desc: 'Royal sherwani set tailored to perfection for modern grooms, featuring intricate embroidery.',
      threadCount: '200 TC', gsm: '250 GSM', weave: 'Brocade Jacquard', minOrder: '10 Sets', composition: 'Silk Brocade Blend',
    },
    {
      name: 'Party Wear Frock',
      category: 'Children Wear',
      img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop',
      desc: 'Comfortable and adorable party wear for kids, made from skin-friendly fabrics.',
      threadCount: '150 TC', gsm: '130 GSM', weave: 'Cotton Silk Blend', minOrder: '100 Pieces', composition: 'Cotton & Silk',
    },
    {
      name: 'Luxury Jacquard Curtains',
      category: 'Home Furnishing',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      desc: 'Heavy jacquard woven curtains that provide excellent light blocking and elegant room decor.',
      threadCount: '300 TC', gsm: '350 GSM', weave: 'Jacquard Weave', minOrder: '50 Pairs', composition: 'Polyester-Cotton Blend',
    }
  ];

  const products = Array.from({ length: 120 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length];
    return {
      ...base,
      id: i + 1,
      name: `${base.name} - Vol ${Math.floor(i / baseProducts.length) + 1}`,
      img: base.img + `&sig=${i}`
    };
  });

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Our Collections</h1>
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod, idx) => (
            <div key={idx} className="bg-[#FCFBFA] rounded-[30px] overflow-hidden group border border-border/60 hover:shadow-xl hover:border-primary/20 transition-all" onClick={() => setSelectedProduct(prod)}>
              <div className="aspect-[4/5] relative overflow-hidden p-3">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-primary text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Vol {prod.volume}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">{prod.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{prod.name}</h3>
                <div className="w-8 h-8 rounded-full border border-border mx-auto flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
                  <ChevronRight className="w-4 h-4" />
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
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row border border-border">
            
            <button 
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-border"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
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
