import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calculator, Info, Clock, Tag, AlertCircle } from 'lucide-react';

const quotations = [
  {
    id: 'QUT-2024-1042',
    title: 'Varanasi Gold Zari Katan',
    desc: '250 pieces of premium Zari Katan sarees, assorted colors, festive grade weave.',
    date: 'Jun 20, 2024',
    status: 'Active',
  },
  {
    id: 'QUT-2024-0988',
    title: 'Royal Chanderi Silk Set',
    desc: '500 pieces of pure Chanderi silk dress material with block print border.',
    date: 'Jun 14, 2024',
    status: 'Active',
  },
  {
    id: 'QUT-2023-8942',
    title: 'Egyptian Cotton Shirting',
    desc: '2,000 meters of long-staple Egyptian cotton shirting in white and pastels.',
    date: 'Oct 24, 2023',
    status: 'Expired',
  },
  {
    id: 'QUT-2023-8811',
    title: 'Luxury Velvet Upholstery',
    desc: '1,000 meters of heavy-weight velvet upholstery suitable for premium furnishings.',
    date: 'Oct 18, 2023',
    status: 'Expired',
  },
  {
    id: 'QUT-2023-7650',
    title: 'Banarasi Brocade Fabric',
    desc: '300 meters of handloom Banarasi brocade with gold thread detailing.',
    date: 'Sep 5, 2023',
    status: 'Expired',
  },
  {
    id: 'QUT-2023-7010',
    title: 'Silk Blend Festival Kurtas',
    desc: '500 sets of silk blend men\'s festival wear with jacquard borders and fine embroidery.',
    date: 'Aug 22, 2023',
    status: 'Expired',
  },
];

const EQuotation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container-custom max-w-6xl">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">e-Quotation Portal</h1>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Get instant, tiered wholesale pricing for our exclusive 12 Collections directly through our automated digital quotation system.
          </p>
        </div>

        {/* Quotation Cards Section */}
        <div className="mb-16">
          <div className="flex items-end justify-between border-b border-slate-200 pb-4 mb-10">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Recent Quotations</h2>
              <p className="text-slate-400 text-xs font-light mt-1">Your submitted quotation requests and their current status.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotations.map((q, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">

                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-accent tracking-wider">{q.id}</span>
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${
                    q.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}>
                    {q.status}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-heading text-base font-bold text-primary leading-snug">{q.title}</h4>

                {/* Description */}
                <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-2">{q.desc}</p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold">
                    <Clock className="w-3 h-3" /> {q.date}
                  </div>
                  <button className="flex items-center gap-1 text-[10px] text-accent font-bold tracking-wider hover:text-primary transition-colors">
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Main Grid — Form Left, Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Form */}
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
                  <span className={`text-xs tracking-widest font-bold ${step >= s.num ? 'text-primary' : 'text-slate-400'} hidden sm:block`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className="w-8 sm:w-16 h-px bg-slate-200 mx-2" />}
                </div>
              ))}
            </div>

            {/* Form Content */}
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
                    <option>Banarasi Brocade Fabric</option>
                    <option>Silk Blend Festival Kurtas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Order Volume (Pcs/Mtrs)</label>
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

          {/* Right: Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileText className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <span className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2 block">System Status</span>
                <h4 className="font-heading text-xl font-bold text-white mb-6">e-Quotation Engine Active</h4>
                <ul className="space-y-4 text-sm font-light text-slate-300">
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /> Generates PDF instantly</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /> Valid for 72 Hours</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /> Includes logistics cost estimates</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-3 text-slate-500 text-xs leading-relaxed mb-6">
                <Info className="w-5 h-5 text-accent shrink-0" />
                <p>For custom manufacturing orders exceeding 10,000 units, please contact the Trade Enquiry desk directly instead of using the e-Quotation system.</p>
              </div>
              <a href="/trade-enquiry" className="block text-center border border-slate-200 text-slate-600 hover:border-primary hover:text-primary py-3 text-xs font-bold tracking-wider transition-colors">
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
