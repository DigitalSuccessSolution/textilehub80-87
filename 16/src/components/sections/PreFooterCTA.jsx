import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Store, MapPin, Phone } from 'lucide-react';

const PreFooterCTA = () => {
  return (
    <section className="bg-background py-20 border-y border-border relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block */}
          <div className="lg:col-span-7 bg-card p-10 md:p-14 rounded-3xl shadow-xl shadow-primary/5 flex flex-col justify-between items-start space-y-10 border border-border/50">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-[10px]  tracking-widest border border-accent/20">
                ✦ Let's Grow Together ✦
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight">
                Partner with <span className="text-accent italic font-normal font-cursive">Aurora</span><br/>
                and take your business<br/>to new heights.
              </h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                Join thousands of retailers who trust Aurora Textile Mall for B2B wholesale deals, factory-direct pricing, and pan-India delivery.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-full text-xs  tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3.5 px-8 rounded-full text-xs  tracking-wider transition-all duration-300"
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-5 bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-primary/20 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
            
            <div className="space-y-5 relative z-10">
              <div className="w-12 h-12 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center">
                <Store className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent tracking-[0.25em]  block mb-1">Our Presence</span>
                <h3 className="text-2xl font-heading font-bold text-white">1200+ Stores</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light mt-2">
                  Across 28 states and all major cargo depot locations in India.
                </p>
              </div>

              {/* Quick contact */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Aurora Textile Mall, Surat, Gujarat – 395002</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>Helpline: 1800 123 4567</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 mt-5 relative z-10">
              <Link 
                to="/contact"
                className="text-xs font-bold  tracking-wider text-accent hover:text-white flex items-center gap-1 transition-colors"
              >
                Contact Us Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
