import React from 'react';
import { Send, Building2, Package, Globe, MessageSquare } from 'lucide-react';

const TradeEnquiry = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        
        {/* Left Side: Information & Vibe */}
        <div className="w-full lg:w-1/2 bg-primary text-primary-foreground p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop" 
              alt="Tailoring" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          
          <div className="relative z-10 max-w-lg">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block">B2B Portal</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">Trade Enquiry</h1>
            <p className="text-slate-300 font-light text-lg mb-12 leading-relaxed">
              Join a network of over 1,200 premium retailers worldwide. Submit your business credentials below to initiate a wholesale partnership and access our exclusive 12 Collections catalog.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Factory Direct Access</h4>
                  <p className="text-sm text-slate-400 font-light mt-1">Bypass intermediaries and source directly from our advanced looms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Custom Manufacturing</h4>
                  <p className="text-sm text-slate-400 font-light mt-1">Submit technical specs for private label production (MOQ 5,000 units).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <h3 className="font-heading text-3xl font-bold text-primary mb-2">Submit Your Profile</h3>
              <p className="text-slate-500 font-light text-sm">Our B2B verification team typically responds within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">First Name</label>
                  <input type="text" className="w-full border-b-2 border-slate-200 text-primary py-2 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b-2 border-slate-200 text-primary py-2 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Company / Retail Store Name</label>
                <div className="relative">
                  <Globe className="absolute left-0 top-2.5 w-4 h-4 text-slate-300" />
                  <input type="text" className="w-full border-b-2 border-slate-200 text-primary py-2 pl-7 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="Acme Textiles Ltd." />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">GSTIN / Registration Number</label>
                <input type="text" className="w-full border-b-2 border-slate-200 text-primary py-2 focus:border-accent focus:outline-none transition-colors bg-transparent uppercase" placeholder="22AAAAA0000A1Z5" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Nature of Enquiry</label>
                <select className="w-full border-b-2 border-slate-200 text-primary py-2 focus:border-accent focus:outline-none transition-colors bg-transparent appearance-none">
                  <option>Wholesale Order (Ready Stock)</option>
                  <option>Custom Manufacturing</option>
                  <option>Dealership / Distributorship</option>
                  <option>Export / International Trade</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Message & Requirements</label>
                <div className="relative">
                  <MessageSquare className="absolute left-0 top-2.5 w-4 h-4 text-slate-300" />
                  <textarea rows="3" className="w-full border-b-2 border-slate-200 text-primary py-2 pl-7 focus:border-accent focus:outline-none transition-colors bg-transparent resize-none" placeholder="Briefly describe your estimated volume and specific interests..."></textarea>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeEnquiry;
