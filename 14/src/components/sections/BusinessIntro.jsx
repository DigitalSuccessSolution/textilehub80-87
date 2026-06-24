import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BusinessIntro = () => {
  const stats = [
    { num: '1000+', label: 'Happy Customers' },
    { num: '5000+', label: 'Products' },
    { num: '25+', label: 'Years Experience' },
    { num: '38', label: 'Business Domains' }
  ];

  return (
    <section className="bg-white py-16 font-light text-slate-600 border-b border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Store Image with overlaid badge */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop" 
                alt="Store Interior" 
                className="w-full h-full object-cover animate-pulse-slow"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 w-28 h-28 rounded-full bg-[#0C6C3E] text-white flex flex-col justify-center items-center text-center p-3 shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <span className="font-heading font-extrabold text-lg leading-none">25+</span>
                <span className="text-[8px] font-bold uppercase tracking-wider leading-tight mt-1">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#0C6C3E] uppercase tracking-widest block">Welcome to WeavesMart</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight">
                Your Trusted Textile & Garment <br />
                Retail Partner
              </h2>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 font-light max-w-2xl">
              WeavesMart is a complete B2B textile and garment retail mall, offering a wide range of quality products for the entire family. We are committed to high B2B quality, factory-direct wholesale pricing, and verified dispatch operations to support retail outlets across 28 states.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100/80 text-center shadow-xs">
                  <span className="block text-xl font-heading font-extrabold text-[#0C6C3E]">{item.num}</span>
                  <span className="block text-[9px] text-slate-400 uppercase font-bold tracking-wider mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                to="/about"
                className="bg-[#0C6C3E] hover:bg-[#053B1F] text-white font-bold py-3 px-8 rounded-md text-xs uppercase tracking-wider transition-colors duration-300 shadow-md inline-flex items-center gap-2"
              >
                Know More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessIntro;
