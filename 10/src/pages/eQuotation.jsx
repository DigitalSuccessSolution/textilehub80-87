import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calculator, Info } from 'lucide-react';

const EQuotation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">B2B Procurement</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Request e-Quotation</h1>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Get instant, tiered wholesale pricing for our exclusive 12 collections directly through our automated digital quotation system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Box Left - Form */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Steps Progress */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              {[
                { num: 1, label: 'Select Lots' },
                { num: 2, label: 'Volumes' },
                { num: 3, label: 'Review' }
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= s.num ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`text-xs uppercase tracking-widest font-bold ${step >= s.num ? 'text-primary' : 'text-slate-400'} hidden sm:block`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className="w-8 sm:w-16 h-px bg-slate-200 mx-2" />}
                </div>
              ))}
            </div>

            {/* Step Content Area */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Lot Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Target Collection</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm p-4 focus:border-accent focus:ring-0 outline-none transition-colors">
                    <option>Select from 12 Collections</option>
                    <option>Varanasi Gold Zari Katan</option>
                    <option>Royal Chanderi Silk Set</option>
                    <option>Egyptian Cotton Royal Set</option>
                    <option>Luxury Velvet Upholstery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Order Volume (Pieces/Meters)</label>
                  <input type="number" placeholder="Min. 50" className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm p-4 focus:border-accent focus:ring-0 outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Delivery & Tax Requirements</label>
                <textarea rows="4" placeholder="Mention GST details or specific logistics requests..." className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm p-4 focus:border-accent focus:ring-0 outline-none transition-colors"></textarea>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                <button onClick={() => setStep(2)} className="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-2">
                  Calculate Tier <Calculator className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bento Box Right - Summary & Info */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileText className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 block">System Status</span>
                <h4 className="font-heading text-xl font-bold text-white mb-6">e-Quotation Engine Active</h4>
                <ul className="space-y-4 text-sm font-light text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" /> Generates PDF instantly
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" /> Valid for 72 Hours
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" /> Includes logistics cost estimates
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-3 text-slate-500 text-xs leading-relaxed mb-6">
                <Info className="w-5 h-5 text-accent shrink-0" />
                <p>For custom manufacturing orders exceeding 10,000 units, please contact the Trade Enquiry desk directly instead of using the e-Quotation system.</p>
              </div>
              <a href="/trade-enquiry" className="block text-center border border-slate-200 text-slate-600 hover:border-primary hover:text-primary py-3 text-xs font-bold uppercase tracking-widest transition-colors">
                Go to Trade Enquiry
              </a>
            </div>

            {/* Dummy Past Quotations */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-heading text-lg font-bold text-primary mb-6">Recent Quotations</h4>
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-sm text-slate-800">QUT-2023-8942</h5>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Oct 24, 2023</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    500 Pcs of Royal Chanderi Silk Set.
                  </p>
                  <button className="text-[10px] text-accent font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>
                
                <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-sm text-slate-800">QUT-2023-8811</h5>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Oct 18, 2023</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    1000 Mtrs of Luxury Velvet Upholstery.
                  </p>
                  <button className="text-[10px] text-accent font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;
