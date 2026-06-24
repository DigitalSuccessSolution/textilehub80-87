import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const banners = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop", // Saree
    "https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=800&auto=format&fit=crop", // Suiting
    "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop"  // Bedsheets
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAF8F5] py-12 md:py-20 relative overflow-hidden font-light text-slate-600 border-b border-slate-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #053B1F 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Content Column - 6 Cols */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="bg-[#053B1F] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-md inline-block">
              Premium Quality
            </span>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-colors hover:text-primary ${
                    idx === currentSlide ? 'text-primary border-b-2 border-accent pb-0.5' : ''
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
            All Types of Textile & <br />
            Garment Products
          </h1>

          <p className="text-base leading-relaxed text-slate-500 font-medium">
            One-Stop Destination for All Your Textile Needs.
          </p>

          {/* Features List with Green Checkmarks */}
          <ul className="space-y-2.5 pt-2">
            <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#0C6C3E]" /> Best Quality Products
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#0C6C3E]" /> Competitive Price
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#0C6C3E]" /> Trusted by Thousands
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/products"
              className="bg-[#0C6C3E] hover:bg-[#053B1F] text-white font-bold py-3 px-8 rounded-md text-xs uppercase tracking-wider transition-colors duration-300 shadow-md inline-flex items-center gap-2"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/trade-enquiry"
              className="border border-[#0C6C3E] text-[#0C6C3E] hover:bg-[#0C6C3E] hover:text-white font-bold py-3 px-8 rounded-md text-xs uppercase tracking-wider transition-colors duration-300 inline-flex items-center"
            >
              Trade Enquiry
            </Link>
          </div>
        </div>

        {/* Right Slider Image Column - 6 Cols */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center p-2">
            {banners.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`Slide ${index + 1}`} 
                className={`absolute w-[96%] h-[96%] object-cover rounded-xl transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
