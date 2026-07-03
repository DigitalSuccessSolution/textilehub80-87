import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, ArrowRight, ShoppingBag, X } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'All';
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Custom setter for active category to update query param
  const setActiveCategory = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('cat');
    } else {
      newParams.set('cat', cat);
    }
    setSearchParams(newParams);
  };

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
      name: 'Varanasi Gold Zari Katan',
      category: 'Sarees',
      img: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg',
      desc: 'Authentic Banarasi Katan silk with intricate pure gold zari motifs. Ideal for bridal and premium festive wear.',
      threadCount: '240 TC', gsm: '110 GSM', weave: 'Handloom Katan', minOrder: '50 Pieces', composition: 'Pure Mulberry Silk (100%)',
    },
    {
      id: 2,
      name: 'Everyday Comfort Leggings',
      category: 'Leggings',
      img: 'https://images.pexels.com/photos/5262957/pexels-photo-5262957.jpeg',
      desc: 'Four-way stretch premium cotton-spandex leggings for ultimate comfort and durability.',
      threadCount: 'N/A', gsm: '220 GSM', weave: 'Interlock Knit', minOrder: '200 Pieces', composition: '88% Cotton, 12% Spandex',
    },
    {
      id: 3,
      name: 'Festive Kurti Collection',
      category: 'Kurtis',
      img: 'https://images.pexels.com/photos/28949655/pexels-photo-28949655.jpeg',
      desc: 'Elegant kurtis with modern cuts and traditional embroidery. Fast colors and pre-shrunk fabric.',
      threadCount: '140 TC', gsm: '105 GSM', weave: 'Plain loom', minOrder: '80 Sets', composition: 'Soft Cotton-Silk Blend',
    },
    {
      id: 4,
      name: 'Royal Chanderi Silk Set',
      category: 'Dress Suits',
      img: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
      desc: 'Lightweight, sheer texture Chanderi fabric with delicate floral prints. Perfect for summer festive collections.',
      threadCount: '180 TC', gsm: '95 GSM', weave: 'Chanderi Jacquard', minOrder: '40 Sets', composition: 'Chanderi Silk-Cotton Blend',
    },
    {
      id: 5,
      name: 'Egyptian Cotton Royal Set',
      category: 'Bedsheets & Linen',
      img: 'https://images.pexels.com/photos/7765000/pexels-photo-7765000.jpeg',
      desc: 'Ultra-luxurious long-staple Egyptian cotton bedding set. Mercerized finish for exceptional sheen and durability.',
      threadCount: '400 TC', gsm: '160 GSM', weave: 'Sateen Stripe', minOrder: '30 Sets', composition: '100% Giza Egyptian Cotton',
    },
    {
      id: 6,
      name: 'Essential Hosiery Pack',
      category: 'Hosiery Items',
      img: 'https://images.pexels.com/photos/14844499/pexels-photo-14844499.jpeg',
      desc: 'Soft and breathable innerwear made with premium combed cotton for everyday comfort.',
      threadCount: 'N/A', gsm: '160 GSM', weave: 'Single Jersey', minOrder: '500 Packs', composition: '100% Combed Cotton',
    },
    {
      id: 7,
      name: 'Classic Twill Suiting',
      category: 'Suiting',
      img: 'https://images.pexels.com/photos/9834882/pexels-photo-9834882.jpeg',
      desc: 'Premium worsted wool blend for bespoke tailoring. Excellent drape and wrinkle resistance for formal wear.',
      threadCount: '150s Super', gsm: '280 GSM', weave: 'Twill Weave', minOrder: '100 Meters', composition: '80% Merino Wool, 20% Silk',
    },
    {
      id: 8,
      name: 'Premium Cotton Shirting',
      category: 'Shirting',
      img: 'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg',
      desc: 'Crisp, lightweight cotton shirting perfect for corporate and smart casual wear.',
      threadCount: '120s 2-ply', gsm: '120 GSM', weave: 'Poplin', minOrder: '200 Meters', composition: '100% Pure Cotton',
    },
    {
      id: 9,
      name: 'Designer Ethnic Gown',
      category: 'Formal & Ethnic Wear for Women',
      img: 'https://images.pexels.com/photos/20702627/pexels-photo-20702627.jpeg',
      desc: 'Breathtaking ethnic gowns with heavy zari and stone work, perfectly suited for weddings.',
      threadCount: '180 TC', gsm: '150 GSM', weave: 'Georgette', minOrder: '20 Pieces', composition: 'Georgette & Net',
    },
    {
      id: 10,
      name: 'Classic Sherwani Set',
      category: 'Formal & Ethnic Wear for Men',
      img: 'https://images.pexels.com/photos/16761760/pexels-photo-16761760.jpeg',
      desc: 'Royal sherwani set tailored to perfection for modern grooms, featuring intricate embroidery.',
      threadCount: '200 TC', gsm: '250 GSM', weave: 'Brocade Jacquard', minOrder: '10 Sets', composition: 'Silk Brocade Blend',
    },
    {
      id: 11,
      name: 'Party Wear Frock',
      category: 'Formal & Ethnic Wear for Children',
      img: 'https://images.pexels.com/photos/25636353/pexels-photo-25636353.jpeg',
      desc: 'Comfortable and adorable party wear for kids, made from skin-friendly fabrics.',
      threadCount: '150 TC', gsm: '130 GSM', weave: 'Cotton Silk Blend', minOrder: '100 Pieces', composition: 'Cotton & Silk',
    },
    {
      id: 12,
      name: 'Luxury Jacquard Curtains',
      category: 'Home Upholstery & Furnishing',
      img: 'https://images.pexels.com/photos/11295890/pexels-photo-11295890.jpeg',
      desc: 'Heavy jacquard woven curtains that provide excellent light blocking and elegant room decor.',
      threadCount: '300 TC', gsm: '350 GSM', weave: 'Jacquard Weave', minOrder: '50 Pairs', composition: 'Polyester-Cotton Blend',
    }
  ];

  const filteredProducts = products.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
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
                className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold  tracking-widest transition-all snap-start shrink-0 ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-card text-muted-foreground hover:bg-muted border border-border'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {filteredProducts.map((prod, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl md:rounded-2xl overflow-hidden group border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedProduct(prod)}
            >
              <div className="aspect-[4/5] relative overflow-hidden p-2 md:p-3 bg-muted/30">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-full object-cover rounded-lg md:rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating terracotta add button */}
                <div className="absolute bottom-4 right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="p-3 md:p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-1">
                  <span className="text-[9px] md:text-[10px] font-bold text-accent tracking-widest block">{prod.category}</span>
                  <h3 className="font-heading text-sm md:text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">{prod.name}</h3>
                  <p className="hidden md:block text-[11px] text-muted-foreground font-light line-clamp-2 mt-1 leading-relaxed">{prod.desc}</p>
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
          <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto visible-scrollbar rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row border border-border">

            <button
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-border"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-accent mb-2">{selectedProduct.category}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{selectedProduct.name}</h2>
              <p className="text-sm font-light text-muted-foreground mb-8 leading-relaxed">{selectedProduct.desc}</p>
              {/* 
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                <div>
                  <span className="block text-[9px] font-bold tracking-widest text-primary/50 mb-1">Composition</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.composition}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold tracking-widest text-primary/50 mb-1">Weave/Knit</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.weave}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold tracking-widest text-primary/50 mb-1">Weight / GSM</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.gsm}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold tracking-widest text-primary/50 mb-1">Thread Count</span>
                  <span className="text-sm font-medium text-foreground">{selectedProduct.threadCount}</span>
                </div>
              </div> */}

              <div className="bg-muted p-4 md:p-6 rounded-xl border border-border mb-8 flex justify-between items-center">
                <span className="text-[10px] tracking-widest font-bold text-primary/60">Min. Order Qty</span>
                <span className="text-sm font-bold text-primary">{selectedProduct.minOrder}</span>
              </div>

              <div className="mt-auto flex gap-4">
                <a href="/e-quotation" className="flex-1 bg-primary text-white text-center py-3.5 rounded-full text-xs font-bold  tracking-widest hover:bg-primary/90 transition-colors shadow-md">
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
