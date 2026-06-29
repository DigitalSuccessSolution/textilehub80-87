import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calculator, Info, ShieldCheck, ArrowRight } from 'lucide-react';

const EQuotation = () => {
  const [step, setStep] = useState(1);

  const recentQuotations = [
    { title: 'Quotation QUT-2023-8942', desc: '500 Pcs of Varanasi Gold Zari Saree. Instant estimation for bulk handloom lots.', date: 'Oct 24, 2023' },
    { title: 'Quotation QUT-2023-8811', desc: '1000 Mtrs of Premium Cotton Shirting. Custom corporate color dye order.', date: 'Oct 18, 2023' },
    { title: 'Quotation QUT-2023-8756', desc: '200 Sets of Royal Chanderi Silk Suit. Bulk wedding boutique order.', date: 'Oct 10, 2023' }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">e-Quotation</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Get instant, reliable, and transparent digital quotations for bulk orders.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-6xl pb-20 space-y-12">
        
        {/* Recent Quotation Cards (Displayed above the form) */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">Recent Quotations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentQuotations.map((quote, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider block mb-2">{quote.date}</span>
                  <h4 className="font-heading font-bold text-base text-primary mb-3">{quote.title}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">{quote.desc}</p>
                </div>
                <button className="text-[10px] text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1.5 mt-auto pt-4 border-t border-slate-50 w-full justify-start">
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* main Form columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8 space-y-6">
            
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
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s.num ? 'text-primary' : 'text-muted-foreground'}`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className="w-8 sm:w-16 h-px bg-border mx-2" />}
                </div>
              ))}
            </div>

            {/* Step Content Area */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10"></div>
              
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Lot Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-2">Target Collection</label>
                  <select className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none">
                    <option>Select from 12 Collections</option>
                    <option>Sarees</option>
                    <option>Leggings</option>
                    <option>Kurtis</option>
                    <option>Dress Suits</option>
                    <option>Bedsheets & Linen</option>
                    <option>Hosiery Items</option>
                    <option>Suiting</option>
                    <option>Shirting</option>
                    <option>Formal & Ethnic Wear for Women</option>
                    <option>Formal & Ethnic Wear for Men</option>
                    <option>Formal & Ethnic Wear for Children</option>
                    <option>Home Upholstery & Furnishing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-2">Order Volume (Pieces/Meters)</label>
                  <input type="number" placeholder="Min. 50" className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-2">Delivery & Specific Requirements</label>
                <textarea rows="4" placeholder="Mention GST details or specific logistics requests..." className="w-full bg-muted border border-border text-foreground text-sm p-4 rounded-md focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"></textarea>
              </div>

              <div className="mt-10 pt-6 border-t border-border flex justify-end">
                <button onClick={() => setStep(2)} className="bg-primary text-white px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                  Calculate Quotation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* System Status */}
            <div className="bg-[#FAF4E8] text-primary p-8 rounded-2xl shadow-sm border border-accent/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 p-4 opacity-5 text-accent">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 block">System Status</span>
                <h4 className="font-heading text-xl font-bold mb-6">Engine Active</h4>
                <ul className="space-y-4 text-xs font-light text-primary/80">
                  <li className="flex gap-3 items-center">
                    <CheckCircle className="w-4.5 h-4.5 text-accent shrink-0" /> Generates PDF instantly
                  </li>
                  <li className="flex gap-3 items-center">
                    <CheckCircle className="w-4.5 h-4.5 text-accent shrink-0" /> Valid for 72 Hours
                  </li>
                  <li className="flex gap-3 items-center">
                    <CheckCircle className="w-4.5 h-4.5 text-accent shrink-0" /> Fast processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-start gap-3 text-muted-foreground text-xs leading-relaxed mb-6">
                <Info className="w-5 h-5 text-accent shrink-0" />
                <p>For custom manufacturing orders exceeding 10,000 units, please contact the Trade Enquiry desk directly instead of using the e-Quotation system.</p>
              </div>
              <a href="/trade-enquiry" className="block text-center border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors">
                Go to Trade Enquiry
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;
