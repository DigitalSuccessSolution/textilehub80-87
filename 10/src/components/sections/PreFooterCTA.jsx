import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Store } from 'lucide-react';

const PreFooterCTA = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-16 border-b border-slate-100 font-light text-slate-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block - 7 cols */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">LET'S GROW TOGETHER</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-snug">
                Partner with WeavesMart <br />
                and take your business to new heights.
              </h3>
            </div>
            
            <Link 
              to="/trade-enquiry"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold py-3 px-6 rounded-md text-xs uppercase tracking-wider transition-colors duration-300"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Block - 5 cols */}
          <div className="lg:col-span-5 bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-primary/20">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Store className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent tracking-[0.25em] uppercase block mb-1">Our Presence</span>
                <h4 className="text-xl font-heading font-bold text-white">1200+ Stores</h4>
                <p className="text-xs text-primary-foreground/75 leading-relaxed font-light mt-1">
                  Across 28 States and major cargo depots.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6">
              <Link 
                to="/contact"
                className="text-xs font-bold uppercase tracking-wider text-accent hover:text-white flex items-center gap-1 transition-colors"
              >
                Reach Out to Us - CONTACT US <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
