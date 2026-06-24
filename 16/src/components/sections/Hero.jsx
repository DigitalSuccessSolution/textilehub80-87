import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const sidebarCategories = [
    { name: 'Sarees', path: '/products?cat=Sarees' },
    { name: 'Leggings', path: '/products?cat=Leggings' },
    { name: 'Kurtis', path: '/products?cat=Kurtis' },
    { name: 'Dress Suits', path: '/products?cat=Dress%20Suits' },
    { name: 'Bedsheets & Linen', path: '/products?cat=Bedsheets%20%26%20Linen' },
    { name: 'Hosiery Items', path: '/products?cat=Hosiery%20Items' },
    { name: 'Suiting', path: '/products?cat=Suiting' },
    { name: 'Shirting', path: '/products?cat=Shirting' },
    { name: 'Formal & Ethnic Wear for Women', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Women' },
    { name: 'Formal & Ethnic Wear for Men', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Men' },
    { name: 'Formal & Ethnic Wear for Children', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Children' },
    { name: 'Home Upholstery & Furnishing', path: '/products?cat=Home%20Upholstery%20%26%20Furnishing' }
  ];

  const banners = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-8 md:py-14 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-2xl -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Categories Sidebar */}
          <div className="hidden lg:flex lg:col-span-3 flex-col bg-primary text-white rounded-3xl p-6 justify-between shadow-xl relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2 pb-4 border-b border-white/20">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-sm tracking-wide">All Categories</span>
              </div>

              <nav className="flex flex-col gap-2">
                {sidebarCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={cat.path}
                    className="flex items-center justify-between text-xs font-semibold text-white/75 hover:text-accent tracking-wide transition-colors group py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Offer box */}
            <div className="mt-6 bg-accent/15 border border-accent/30 p-5 rounded-2xl relative overflow-hidden z-10">
              <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-1">Exclusive Offer</span>
              <h4 className="font-heading font-bold text-white text-sm leading-snug">GET 10% OFF</h4>
              <p className="text-[10px] text-white/60 mt-1">On your first bulk order today.</p>
              <Link to="/products" className="text-[9px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors flex items-center gap-1 mt-3">
                Shop Now <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Text content */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest border border-accent/20">
                  <Award className="w-3.5 h-3.5" /> Premium Quality Fabrics
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                  Weave <span className="text-accent italic font-normal font-cursive normal-case">Elegance</span><br />
                  Into Every Moment
                </h1>

                <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed font-light">
                  Discover our exquisite range of premium textiles & garments crafted for timeless beauty and unmatched B2B wholesale quality. Pan-India delivery.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                  <Link 
                    to="/products"
                    className="bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/trade-enquiry"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Trade Enquiry
                  </Link>
                </div>
              </div>

              {/* Circular image collage */}
              <div className="md:col-span-5 flex justify-center items-center relative">
                <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full scale-110 pointer-events-none animate-spin-slow"></div>
                <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[380px] rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-primary/20">
                  {banners.map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`Textile Collection ${index + 1}`} 
                      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`} 
                    />
                  ))}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-primary text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-border/50 whitespace-nowrap">
                    ✦ Premium Quality ✦
                  </div>
                </div>
                {/* Slide dots */}
                <div className="absolute -bottom-4 flex gap-2 left-1/2 -translate-x-1/2">
                  {banners.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-accent w-4' : 'bg-border'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="bg-primary rounded-3xl p-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-2">
              {[
                { val: '25+', label: 'Years of Trust' },
                { val: '10K+', label: 'Happy Customers' },
                { val: '100+', label: 'Premium Fabrics' },
                { val: 'Pan India', label: 'Fast Delivery' },
              ].map((s, i) => (
                <div key={i} className={`space-y-1 ${i > 0 ? 'border-l border-white/15' : ''}`}>
                  <span className="block text-2xl font-heading font-extrabold text-accent">{s.val}</span>
                  <span className="block text-[10px] text-white/70 font-bold uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
