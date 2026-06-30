import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calculator, Info, ShieldCheck, ArrowRight } from 'lucide-react';

const EQuotation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">e-quotation</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Get instant, reliable, and transparent digital quotations for bulk orders.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-6xl pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Cards (Formerly Sidebar) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* System Status */}
            <div className="bg-[#FAF4E8] text-primary p-6 md:p-8 rounded-2xl shadow-sm border border-accent/20 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute -top-4 -right-4 p-4 opacity-5 text-accent pointer-events-none">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <span className="text-accent text-xs capitalize font-bold tracking-widest mb-2 block">System Status</span>
                <h4 className="font-heading text-xl font-bold mb-4">Engine Active</h4>
                <ul className="space-y-3 text-xs font-light text-primary/80">
                  <li className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Generates PDF instantly
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Valid for 72 Hours
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fast processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col justify-center">
              <div className="flex items-start gap-3 text-muted-foreground text-xs leading-relaxed mb-6">
                <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p>For custom manufacturing orders exceeding 10,000 units, please contact the Trade Enquiry desk directly instead of using the e-quotation system.</p>
              </div>
              <a href="/trade-enquiry" className="block text-center border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-full text-xs font-bold capitalize tracking-widest transition-colors mt-auto">
                Go to Trade Enquiry
              </a>
            </div>

            {/* Recent Quotes */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col justify-center">
              <h4 className="font-heading text-lg font-bold text-primary mb-4">Recent Quotations</h4>
              <div className="space-y-4">
                <div className="border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm text-foreground">QUT-2023-8942</h5>
                    <span className="text-sm text-muted-foreground font-bold capitalize tracking-wider">Oct 24</span>
                  </div>
                  <button className="text-xs text-accent font-bold capitalize tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>
                
                <div className="border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm text-foreground">QUT-2023-8811</h5>
                    <span className="text-sm text-muted-foreground font-bold capitalize tracking-wider">Oct 18</span>
                  </div>
                  <button className="text-xs text-accent font-bold capitalize tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-12 space-y-6">
            
            {/* Steps Progress */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-center justify-between overflow-x-auto hide-scrollbar">
              {[
                { num: 1, label: 'Select Lots' },
                { num: 2, label: 'Volumes' },
                { num: 3, label: 'Review' }
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= s.num ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground'}`}>
                    {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`text-xs capitalize tracking-widest font-bold ${step >= s.num ? 'text-primary' : 'text-muted-foreground'}`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className="w-8 sm:w-16 md:w-32 lg:w-48 h-px bg-border mx-2" />}
                </div>
              ))}
            </div>

            {/* Step Content Area */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10"></div>
              
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Lot Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs capitalize tracking-widest font-bold text-primary/60 mb-2">Target Collection</label>
                  <select className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none">
                    <option>Select from 12 Collections</option>
                    <option>Varanasi Gold Zari Katan</option>
                    <option>Royal Chanderi Silk Set</option>
                    <option>Egyptian Cotton Royal Set</option>
                    <option>Luxury Velvet Upholstery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs capitalize tracking-widest font-bold text-primary/60 mb-2">Order Volume (Pieces/Meters)</label>
                  <input type="number" placeholder="Min. 50" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs capitalize tracking-widest font-bold text-primary/60 mb-2">Delivery & Specific Requirements</label>
                <textarea rows="4" placeholder="Mention GST details or specific logistics requests..." className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"></textarea>
              </div>

              <div className="mt-10 pt-6 border-t border-border flex justify-end">
                <button onClick={() => setStep(2)} className="bg-primary text-white px-8 py-3.5 rounded-full text-xs font-bold capitalize tracking-widest hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                  Calculate Quotation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;
