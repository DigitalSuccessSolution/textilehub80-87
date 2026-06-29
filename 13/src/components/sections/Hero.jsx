import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const banners = [
    "https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg", // Saree
    "https://images.pexels.com/photos/28949643/pexels-photo-28949643.jpeg", // Suiting
    "https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI="  // Bedsheets
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
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
                  className={`transition-colors hover:text-primary ${idx === currentSlide ? 'text-primary border-b-2 border-accent pb-0.5' : ''
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
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center p-2 group">
            {banners.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute w-[96%] h-[96%] object-cover rounded-xl transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}

            {/* Prev and Next navigation buttons */}
            <button
              onClick={(e) => { e.preventDefault(); prevSlide(); }}
              className="absolute left-6 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-primary hover:text-accent flex items-center justify-center shadow-lg transition-all focus:outline-none hover:scale-105 border border-slate-100 opacity-80 group-hover:opacity-100"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); nextSlide(); }}
              className="absolute right-6 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-primary hover:text-accent flex items-center justify-center shadow-lg transition-all focus:outline-none hover:scale-105 border border-slate-100 opacity-80 group-hover:opacity-100"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
