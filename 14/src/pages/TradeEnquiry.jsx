import React from 'react';
import { Send, Building2, Package, Globe, MessageSquare, ArrowRight, PhoneCall } from 'lucide-react';

const TradeEnquiry = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Trade Enquiry</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Partner with us to grow your retail business.
          </p>
        </div>
      </div>

      <div className="container-custom pb-24">
        <div className="flex flex-col lg:flex-row flex-1 border border-border rounded-[30px] overflow-hidden shadow-sm">

          {/* Left Side - Info */}
          <div className="lg:w-5/12 bg-primary text-primary-foreground p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="relative z-10">
              <span className="text-accent font-bold capitalize tracking-[0.2em] text-xs mb-4 block">B2B Partnership</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Partner with India's Most Trusted Retail Mall</h2>
              <p className="text-white/80 text-sm font-light leading-relaxed max-w-md mb-12">
                For bulk orders exceeding 10,000 units, custom manufacturing, and long-term supply contracts, please fill out the trade enquiry form. Our B2B specialists will contact you within 24 hours.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Corporate & Retail</h4>
                  <p className="text-xs text-white/60">Dedicated account managers for large retail chains.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Export enquiries</h4>
                  <p className="text-xs text-white/60">Seamless logistics and documentation for global shipping.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <PhoneCall className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Direct Helpline</h4>
                  <p className="text-xs text-white/60">Call us at 1800 123 4567 for immediate assistance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-7/12 bg-white p-8 md:p-16 flex items-center justify-center relative">
            <div className="w-full max-w-2xl relative z-10">
              <h3 className="font-heading text-3xl font-bold text-primary mb-2">Submit Trade Enquiry</h3>
              <p className="text-muted-foreground text-sm font-light mb-8">Please provide your business details to help us serve you better.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Contact Person *</label>
                    <input type="text" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Company Name *</label>
                    <input type="text" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="XYZ Retailers Pvt Ltd" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Email Address *</label>
                    <input type="email" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Phone / WhatsApp *</label>
                    <input type="tel" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">GST/VAT Number (Optional)</label>
                    <input type="text" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="24AAAAA0000A1Z5" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Enquiry Type *</label>
                    <select className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none">
                      <option>Bulk Order (&gt;10,000 units)</option>
                      <option>Custom Manufacturing</option>
                      <option>Export / International</option>
                      <option>Franchise / Retail Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold capitalize tracking-widest text-muted-foreground">Specific Requirements *</label>
                  <textarea rows="4" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Tell us about the collections you are interested in, estimated volumes, etc."></textarea>
                </div>

                <button className="bg-primary text-white w-full py-4 rounded-full text-xs font-bold capitalize tracking-widest hover:bg-primary/90 transition-all shadow-md flex justify-center items-center gap-2">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TradeEnquiry;
