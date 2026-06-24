import React, { useRef } from 'react';
import { ArrowRight, Star, PlayCircle, Quote, ShieldCheck, Truck, Tag, Headset, CheckCircle2, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Fabrics', img: 'https://images.unsplash.com/photo-1528458909336-e6a0fb461b55?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dress Materials', img: 'https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=400&auto=format&fit=crop' },
    { name: "Men's Wear", img: 'https://images.unsplash.com/photo-1594938298596-70f582004d11?q=80&w=400&auto=format&fit=crop' },
    { name: "Women's Wear", img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Kids Wear', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=400&auto=format&fit=crop' },
    { name: 'Home Furnishing', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Uniforms', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=400&auto=format&fit=crop' },
  ];

  const features = [
    { name: 'Premium Quality', desc: 'Carefully sourced finest textiles.', icon: ShieldCheck },
    { name: 'Nationwide Delivery', desc: 'Fast & reliable delivery across India.', icon: Truck },
    { name: 'Competitive Pricing', desc: 'Best prices for better margins.', icon: Tag },
    { name: '24/7 Support', desc: 'Our team is always here to help you.', icon: Headset },
    { name: 'Secure Transactions', desc: 'Safe, trusted & hassle-free deals.', icon: CheckCircle2 }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Hero Section */}
      <section className="container-custom pt-12 pb-24 relative">
        <div className="absolute top-10 left-10 text-[8px] font-bold tracking-widest text-[#B8860B] uppercase hidden md:block">
          TEXTILE & GARMENT RETAILS | SMALL SCALE BUSINESS | RETAIL MALLS
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-24 gap-12 lg:gap-0">
          
          <div className="lg:w-1/2 z-10">
            <h1 className="font-heading text-5xl lg:text-7xl font-medium text-[#3E2723] leading-[1.1] mb-6">
              Empowering<br />
              Textile Business,<br />
              <span className="text-[#B8860B] font-light italic">Enriching Lives.</span>
            </h1>
            <p className="text-[#3E2723]/80 text-sm lg:text-base mb-10 max-w-md font-medium">
              Your trusted partner for quality fabrics, retail solutions & business growth.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products" className="bg-[#B8860B] text-white hover:bg-[#B8860B]/90 px-8 py-3.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2">
                EXPLORE COLLECTIONS <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/trade-enquiry" className="bg-white border border-[#3E2723] text-[#3E2723] hover:border-[#B8860B] hover:text-[#B8860B] px-8 py-3.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm">
                B2B ENQUIRY
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[500px] w-full flex justify-center lg:justify-end">
            
            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#B8860B]/20 rounded-full border-dashed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#B8860B]/30 rounded-full"></div>
            
            {/* Top Right Circle Image */}
            <div className="absolute top-0 right-10 w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
              <img src="https://images.unsplash.com/photo-1528458909336-e6a0fb461b55?q=80&w=600&auto=format&fit=crop" alt="Textile Store" className="w-full h-full object-cover" />
            </div>
            
            {/* Bottom Left Circle Image */}
            <div className="absolute bottom-0 left-10 w-[240px] h-[240px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-30">
              <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop" alt="Textile Collection" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-12 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <span className="font-heading text-xl font-bold text-[#B8860B]">500+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#3E2723]">Retail Partners</span>
            </div>
            
            <div className="absolute bottom-24 -right-8 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <span className="font-heading text-xl font-bold text-[#3E2723]">1,00,000+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#3E2723]">Happy Customers</span>
            </div>
            
            <div className="absolute bottom-10 left-0 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <MapPin className="w-5 h-5 text-[#B8860B] mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#3E2723]">Pan India<br/>Network</span>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-custom pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer hover:shadow-lg transition-all border border-[#EAE0D5]">
              <div className="w-full aspect-[4/5] rounded-md overflow-hidden mb-4">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-[10px] font-bold text-[#3E2723] mb-3">{cat.name}</h3>
              <div className="w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors mt-auto">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Textile Solutions Grid */}
      <section className="container-custom pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* Left Large Card */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=800&auto=format&fit=crop" alt="Textile Solutions" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-[#2C1E16]/80 to-transparent"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight">
                Textile Solutions<br/>for Retail Businesses
              </h2>
              <div className="w-12 h-0.5 bg-[#B8860B] mb-6"></div>
              <p className="text-white/80 text-sm font-light mb-10 max-w-sm">
                End-to-end textile solutions to help your business grow bigger and stronger.
              </p>
              <Link to="/trade-enquiry" className="border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors w-fit flex items-center gap-2">
                EXPLORE SOLUTIONS <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          
          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top Card (Full Width) */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden group h-[280px]">
              <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1000&auto=format&fit=crop" alt="Bulk Orders" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/90 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-medium text-white mb-3">Bulk Orders<br/>& B2B Supply</h3>
                <p className="text-white/80 text-xs font-light max-w-[200px]">
                  Wide range of fabrics available in bulk for retailers, wholesalers & businesses.
                </p>
              </div>
            </div>
            
            {/* Bottom 3 Cards */}
            <div className="relative rounded-2xl overflow-hidden group bg-[#3E2723] p-8 flex flex-col h-[280px]">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-medium text-white mb-2">Live Textile Auctions</h3>
                <p className="text-white/70 text-xs font-light mb-auto">
                  Bid on premium textiles at unbeatable prices.
                </p>
                <Link to="/e-auction" className="border border-white/30 text-white hover:bg-white hover:text-[#3E2723] px-4 py-2 rounded-sm text-[9px] font-bold uppercase tracking-widest transition-colors w-fit flex items-center gap-2 mt-4">
                  VIEW AUCTIONS <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 opacity-20">
                <img src="/gavel-icon.png" alt="" className="w-full h-full object-contain filter invert" onError={(e) => e.target.style.display='none'} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 h-[280px]">
               <div className="bg-[#F4EFEA] rounded-2xl p-6 relative overflow-hidden group h-[130px]">
                 <h3 className="font-heading text-xl font-medium text-[#3E2723] mb-1">Instant Quotation</h3>
                 <p className="text-[#3E2723]/60 text-[10px] font-light w-2/3">Quick, transparent & reliable quotes.</p>
                 <div className="absolute bottom-4 left-6 w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B]">
                   <ArrowRight className="w-3 h-3" />
                 </div>
                 <div className="absolute right-2 bottom-[-10px] w-16 h-20 opacity-80">
                   <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="Quote" className="w-full h-full object-contain opacity-50" />
                 </div>
               </div>
               
               <div className="bg-[#F4EFEA] rounded-2xl p-6 relative overflow-hidden group h-[130px]">
                 <h3 className="font-heading text-xl font-medium text-[#3E2723] mb-1">Pan India Distribution</h3>
                 <p className="text-[#3E2723]/60 text-[10px] font-light w-2/3">Timely delivery across India.</p>
                 <div className="absolute bottom-4 left-6 w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B]">
                   <ArrowRight className="w-3 h-3" />
                 </div>
                 <div className="absolute right-4 bottom-0 w-20 h-20 opacity-80">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_Map.svg/800px-India_Map.svg.png" alt="India" className="w-full h-full object-contain filter sepia opacity-30" />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Texmart - Timeline Style */}
      <section className="container-custom py-16 border-y border-[#EAE0D5] relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="lg:w-1/4">
            <h2 className="font-heading text-3xl font-medium text-[#3E2723]">
              Why Choose<br/>Texmart?
            </h2>
          </div>
          <div className="lg:w-3/4 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-10 right-10 h-0.5 border-t border-dashed border-[#B8860B]/30 z-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white border border-[#B8860B]/30 flex items-center justify-center mb-4 shadow-sm relative">
                      <Icon className="w-6 h-6 text-[#B8860B]" strokeWidth={1.5} />
                      {idx !== features.length - 1 && <div className="hidden lg:block absolute right-[-50%] top-1/2 w-[50%] h-0 border-t border-[#B8860B]/30 border-dashed z-0"></div>}
                    </div>
                    <h4 className="text-[11px] font-bold text-[#3E2723] mb-2 px-2">{feature.name}</h4>
                    <p className="text-[9px] text-[#3E2723]/60 font-light">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Popular Collections - Hexagon Grid */}
      <section className="container-custom py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/4">
            <h2 className="font-heading text-3xl font-medium text-[#3E2723] mb-4">
              Our Popular<br/>Collections
            </h2>
            <div className="w-4 h-4 rounded-sm border border-[#B8860B] rotate-45 mb-8"></div>
          </div>
          
          <div className="lg:w-3/4">
            {/* Simplistic representation of the honeycomb grid since CSS hexagons are complex */}
            <div className="flex flex-wrap justify-center gap-4 relative">
              
              <div className="flex flex-col gap-4 mt-12">
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold text-center">Dress<br/>Materials</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-4">
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold">Sarees</span>
                     </div>
                   </div>
                 </div>
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold text-center">Home<br/>Furnishing</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-4 mt-12">
                 <div className="relative w-48 h-52 overflow-hidden group clip-hexagon bg-[#B8860B] flex items-center justify-center p-1 z-10 shadow-xl">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative bg-[#2C1E16] flex flex-col items-center justify-center">
                      <h3 className="font-heading text-xl text-[#B8860B] text-center mb-2 px-4 leading-tight">Premium<br/>Fabric<br/>Collection</h3>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-4">
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1594938298596-70f582004d11?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold">Men's Wear</span>
                     </div>
                   </div>
                 </div>
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold text-center">Bedding<br/>Collection</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-4 mt-12">
                 <div className="relative w-40 h-44 overflow-hidden group clip-hexagon bg-white border border-[#EAE0D5] flex items-center justify-center p-1">
                   <div className="w-full h-full clip-hexagon overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     <div className="absolute inset-0 bg-[#3E2723]/40 flex items-end justify-center pb-6">
                       <span className="text-white text-[10px] font-bold">Kids Wear</span>
                     </div>
                   </div>
                 </div>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#EAE0D5] flex items-center justify-center hidden md:flex text-[#B8860B] hover:bg-[#B8860B] hover:text-white cursor-pointer transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global CSS for Hexagon (added dynamically for simplicity, normally would be in index.css) */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}} />

      {/* Stats Banner */}
      <div className="bg-[#2C1E16] py-10 border-y-4 border-[#B8860B]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">20+</div>
                <div className="text-[9px] uppercase tracking-widest font-medium text-white/70">Years of Experience</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">500+</div>
                <div className="text-[9px] uppercase tracking-widest font-medium text-white/70">Retail Partners</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">100+</div>
                <div className="text-[9px] uppercase tracking-widest font-medium text-white/70">Cities Across India</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">1,00,000+</div>
                <div className="text-[9px] uppercase tracking-widest font-medium text-white/70">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* From the Blog */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#3E2723]">Latest From Our Blog</h3>
              <a href="#" className="text-[8px] font-bold uppercase tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</a>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Top 10 Fabric Trends This Season', date: 'May 16, 2025', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&h=100&fit=crop' },
                { title: 'How to Choose the Perfect Fabric', date: 'May 14, 2025', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=100&h=100&fit=crop' },
                { title: 'Sustainable Textiles The Future', date: 'May 08, 2025', img: 'https://images.unsplash.com/photo-1528458909336-e6a0fb461b55?w=100&h=100&fit=crop' }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer border border-[#EAE0D5] p-2 rounded-md hover:border-[#B8860B] transition-colors">
                  <img src={post.img} alt={post.title} className="w-14 h-14 rounded-sm object-cover" />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[10px] font-bold text-[#3E2723] leading-tight mb-1 group-hover:text-[#B8860B] transition-colors">{post.title}</h4>
                    <span className="text-[8px] text-[#3E2723]/60 uppercase tracking-widest">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Love */}
          <div>
            <div className="flex justify-between items-end mb-6">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#3E2723]">Customer Stories</h3>
               <a href="#" className="text-[8px] font-bold uppercase tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</a>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-md border border-[#EAE0D5] shadow-sm relative h-[250px] flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#B8860B] mb-2" />
              <p className="text-[11px] text-[#3E2723]/80 font-medium leading-relaxed mb-4">
                Texmart has been a game-changer for our business. Quality, variety and timely delivery - everything we need under one roof.
              </p>
              <div>
                <div className="flex gap-1 mb-2 text-[#B8860B]">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </div>
                <h5 className="text-[10px] font-bold text-[#3E2723]">Rajesh Patel</h5>
                <span className="text-[9px] text-[#3E2723]/60 italic">Shree Balaji Textiles</span>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#3E2723]">Media Gallery</h3>
              <a href="#" className="text-[8px] font-bold uppercase tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</a>
            </div>
            <div className="grid grid-cols-2 gap-2 h-[250px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-md overflow-hidden relative group cursor-pointer border border-[#EAE0D5] h-full">
                  <img src={`https://images.unsplash.com/photo-1558098329-a11cff621064?w=200&h=150&fit=crop&q=80&sig=${i}`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#3E2723]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Network */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#3E2723] mb-6">Our India Network</h3>
            <div className="h-[250px] bg-white rounded-md flex flex-col items-center justify-center border border-[#EAE0D5] p-4 relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_Map.svg/800px-India_Map.svg.png" alt="India Map" className="w-full h-full object-contain filter sepia opacity-40 mix-blend-multiply" />
              <div className="absolute bottom-6 bg-white border border-[#EAE0D5] px-4 py-2 rounded-sm shadow-md text-center">
                <span className="text-[8px] text-[#3E2723] block leading-tight">Delivering quality textiles<br/>to every corner of India.</span>
              </div>
              <Link to="/trade-enquiry" className="absolute bottom-[-10px] bg-white border border-[#B8860B] text-[#B8860B] px-4 py-1.5 rounded-sm text-[8px] font-bold uppercase tracking-widest hover:bg-[#B8860B] hover:text-white transition-colors">
                EXPLORE NETWORK
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
