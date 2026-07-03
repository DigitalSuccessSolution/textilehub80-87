import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Info, ShoppingCart, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();

  const categories = [
    'All', 'Sarees', 'Leggings', 'Kurtis', 'Dress Suits',
    'Bedsheets & Linen', 'Hosiery Items', 'Suiting', 'Shirting',
    'Formal & Ethnic Wear for Women', 'Formal & Ethnic Wear for Men',
    'Formal & Ethnic Wear for Children', 'Home Upholstery & Furnishing'
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) {
      const decodedCat = decodeURIComponent(cat);
      if (categories.includes(decodedCat)) {
        setSelectedCategory(decodedCat);
      }
    } else {
      setSelectedCategory('All');
    }
  }, [location.search]);

  // The 12 Collections
  const products = [
    {
      id: 1, name: 'Varanasi Gold Zari Katan', category: 'Sarees',
      image: 'https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg',
      threadCount: '240 TC', gsm: '110 GSM', weave: 'Handloom Katan', pricing: '₹1,850 - ₹2,400 / Piece', minOrder: '50 Pieces', composition: 'Pure Mulberry Silk (100%)',
      desc: 'The epitome of traditional luxury woven with real gold zari threads.'
    },
    {
      id: 2, name: 'Royal Chanderi Silk Set', category: 'Dress Suits',
      image: 'https://images.pexels.com/photos/5718614/pexels-photo-5718614.jpeg',
      threadCount: '180 TC', gsm: '95 GSM', weave: 'Chanderi Jacquard', pricing: '₹850 - ₹1,100 / Set', minOrder: '40 Sets', composition: 'Chanderi Silk-Cotton Blend',
      desc: 'Sheer texture, lightweight, and luxurious drape for high-end fashion.'
    },
    {
      id: 3, name: 'Egyptian Cotton Royal Set', category: 'Bedsheets & Linen',
      image: 'https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI=',
      threadCount: '400 TC', gsm: '160 GSM', weave: 'Sateen Stripe', pricing: '₹950 - ₹1,350 / Set', minOrder: '30 Sets', composition: '100% Giza Egyptian Cotton',
      desc: 'Hotel-grade luxury linens crafted from the finest long-staple cotton.'
    },
    {
      id: 4, name: 'Luxury Velvet Upholstery', category: 'Home Upholstery & Furnishing',
      image: 'https://images.pexels.com/photos/18408858/pexels-photo-18408858.jpeg',
      threadCount: '300 TC', gsm: '380 GSM', weave: 'Cut Pile Velvet', pricing: '₹280 - ₹360 / Meter', minOrder: '150 Meters', composition: 'Polyester-Chenille Blend',
      desc: 'Rich, dense velvet designed for premium furniture and interior drapery.'
    },
    {
      id: 5, name: 'Classic Merino Wool Suiting', category: 'Suiting',
      image: 'https://images.pexels.com/photos/31094610/pexels-photo-31094610.jpeg',
      threadCount: '150s Super', gsm: '280 GSM', weave: 'Twill Weave', pricing: '₹650 - ₹880 / Meter', minOrder: '100 Meters', composition: '80% Merino Wool, 20% Silk',
      desc: 'Impeccable drape and temperature regulation for bespoke tailoring.'
    },
    {
      id: 6, name: 'Premium Oxford Giza Shirting', category: 'Shirting',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
      threadCount: '100s Double', gsm: '125 GSM', weave: 'Oxford Basketweave', pricing: '₹220 - ₹290 / Meter', minOrder: '200 Meters', composition: '100% Giza Cotton',
      desc: 'Crisp, breathable, and perfectly structured for executive formal wear.'
    },
    {
      id: 7, name: 'Banarasi Brocade Sherwani', category: 'Formal & Ethnic Wear for Women',
      image: 'https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcm1hbCUyMCUyNiUyMGV0aG5pYyUyMHdlYXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      threadCount: '200 TC', gsm: '180 GSM', weave: 'Zari Brocade', pricing: '₹2,100 - ₹2,800 / Suit', minOrder: '20 Suits', composition: 'Silk and Gold Thread Brocade',
      desc: 'Opulent patterns and rich metallic textures for bridal collections.'
    },
    {
      id: 8, name: 'Pure Linen White Kurta', category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.pexels.com/photos/37045884/pexels-photo-37045884.jpeg',
      threadCount: '60 Lea', gsm: '135 GSM', weave: 'Plain Linen', pricing: '₹340 - ₹420 / Meter', minOrder: '100 Meters', composition: '100% Belgian Flax Linen',
      desc: 'Sophisticated, breathable summer linen with a natural textured finish.'
    },
    {
      id: 9, name: 'Embroidered Slub Kurti', category: 'Kurtis',
      image: 'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg',
      threadCount: '120 TC', gsm: '140 GSM', weave: 'Solid Plain Loom', pricing: '₹320 - ₹450 / Piece', minOrder: '100 Pieces', composition: 'Premium Slub Cotton',
      desc: 'Everyday elegance combining comfort with intricate artisan embroidery.'
    },
    {
      id: 10, name: 'Four-Way Stretch Leggings', category: 'Leggings',
      image: 'https://media.istockphoto.com/id/1980806050/photo/full-body-attractive-girl-engage-in-her-pursuit-of-healthy-lifestyle-vigorous.jpg?b=1&s=612x612&w=0&k=20&c=1BXZoiBHgh0EuRe7ywn7sfS4Pt1NNU6V9AQ6IBLzWI0=',
      threadCount: 'N/A', gsm: '220 GSM', weave: 'Interlock Knit', pricing: '₹140 - ₹180 / Piece', minOrder: '200 Pieces', composition: '88% Cotton, 12% Spandex',
      desc: 'High-performance stretch fabric retaining shape and color wash after wash.'
    },
    {
      id: 11, name: 'Combed Cotton Hosiery', category: 'Hosiery Items',
      image: 'https://images.pexels.com/photos/11212879/pexels-photo-11212879.jpeg',
      threadCount: '80 TC', gsm: '160 GSM', weave: 'Rib Knit', pricing: '₹120 - ₹180 / Pack', minOrder: '150 Packs', composition: '100% Combed Cotton',
      desc: 'Ultra-soft undergarments engineered for all-day comfort and durability.'
    },
    {
      id: 12, name: 'Silk Blend Festival Kurta', category: 'Formal & Ethnic Wear for Children',
      image: 'https://media.istockphoto.com/id/667900166/photo/smiling-portrait-of-an-indian-boy.jpg?b=1&s=612x612&w=0&k=20&c=SZBNrCgPpqvCosFQhkHXAFfXT4CA0x_6ZXXtuhws2OQ=',
      threadCount: '140 TC', gsm: '105 GSM', weave: 'Plain loom', pricing: '₹250 - ₹380 / Set', minOrder: '80 Sets', composition: 'Soft Cotton-Silk Blend',
      desc: 'Gentle on skin yet festively vibrant for the youngest connoisseurs.'
    }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen">

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">The 12 Collections</h1>
        <p className="text-slate-400 font-light max-w-2xl mx-auto text-base">
          Explore our meticulously curated selection of premium textiles. Direct from the finest mills to your luxury retail shelves.
        </p>
      </section>

      {/* Horizontal Scroll Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[60px] md:top-[60px] z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center gap-2 py-4 overflow-x-auto visible-scrollbar whitespace-nowrap">
            <Filter className="w-4 h-4 text-accent shrink-0 mr-2" />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all shrink-0 ${selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Products Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer flex flex-col justify-between h-full bg-white p-3 border border-slate-100 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/5] bg-slate-100 mb-3 md:mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-primary px-4 py-2.5 text-xs font-bold tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-bold tracking-wider text-primary rounded-xs">
                    {product.category}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base md:text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-light text-slate-500 line-clamp-2 leading-relaxed">{product.desc}</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100 mt-4">
                <span className="text-[10px] font-bold tracking-wider text-slate-400">Wholesale Available</span>
                <span className="text-accent font-bold tracking-wider text-[10px]">On Request</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 bg-primary/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl h-[85vh] md:h-auto md:max-h-[85vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/50 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-scroll modal-scroll flex flex-col justify-start">
                <span className="text-accent text-[10px] font-bold tracking-[0.2em] mb-4 block">
                  {selectedProduct.category}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  {selectedProduct.name}
                </h2>
                <p className="text-slate-600 font-light text-lg mb-8">
                  {selectedProduct.desc}
                </p>

                {/* <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-8">
                  <div>
                    <p className="text-[10px] tracking-widest text-slate-400 font-bold mb-1">Composition</p>
                    <p className="text-sm font-semibold text-primary">{selectedProduct.composition}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-slate-400 font-bold mb-1">Thread Count</p>
                    <p className="text-sm font-semibold text-primary">{selectedProduct.threadCount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-slate-400 font-bold mb-1">Weight</p>
                    <p className="text-sm font-semibold text-primary">{selectedProduct.gsm}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-slate-400 font-bold mb-1">Weave</p>
                    <p className="text-sm font-semibold text-primary">{selectedProduct.weave}</p>
                  </div>
                </div> */}

                <div className="flex gap-4">
                  <a
                    href="/trade-enquiry"
                    className="flex-1 bg-primary text-white text-center py-4 text-xs font-bold tracking-widest hover:bg-accent transition-colors"
                  >
                    Send Enquiry
                  </a>
                  <a
                    href="/e-quotation"
                    className="flex-1 border border-primary text-primary text-center py-4 text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-colors"
                  >
                    e-Quotation
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Products;
