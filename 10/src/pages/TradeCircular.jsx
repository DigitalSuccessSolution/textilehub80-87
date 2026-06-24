import React from 'react';
import { FileText, Download, Calendar, ArrowRight, Bell, Eye, Printer } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 'TC-2023-089', date: 'Oct 15, 2023', title: 'Revised Tiered Pricing for Royal Silk Collection', type: 'Pricing Update' },
    { id: 'TC-2023-088', date: 'Oct 02, 2023', title: 'Upcoming Festive Logistics Schedule & Deadlines', type: 'Logistics' },
    { id: 'TC-2023-087', date: 'Sep 28, 2023', title: 'New GST Slab Implementation for Textile Blends', type: 'Tax & Compliance' },
    { id: 'TC-2023-086', date: 'Sep 15, 2023', title: 'Discontinuation of Vintage Weave Series', type: 'Inventory Notice' },
    { id: 'TC-2023-085', date: 'Aug 30, 2023', title: 'e-Auction Portal Maintenance Schedule', type: 'System Alert' },
  ];

  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      <div className="container-custom max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-primary pb-8 mb-12">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block flex items-center gap-2">
              <Bell className="w-3.5 h-3.5" /> Official Communications
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary">Trade Circulars</h1>
          </div>
          <p className="text-slate-500 font-light text-sm max-w-xs md:text-right">
            Stay updated with official B2B notifications, policy changes, and pricing updates.
          </p>
        </div>

        {/* Elegant List */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {/* List Header */}
          <div className="bg-slate-50 grid grid-cols-12 gap-4 p-6 border-b border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-400 hidden md:grid">
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Circular ID</div>
            <div className="col-span-6">Subject</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* List Items */}
          <div className="divide-y divide-slate-100">
            {circulars.map((circ, idx) => (
              <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-slate-50 transition-colors cursor-pointer">
                
                <div className="md:col-span-2 flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4 text-accent md:hidden" />
                  {circ.date}
                </div>
                
                <div className="md:col-span-2">
                  <span className="inline-block bg-primary/5 text-primary text-[10px] font-bold px-2 py-1 rounded">
                    {circ.id}
                  </span>
                </div>
                
                <div className="md:col-span-6">
                  <p className="font-bold text-slate-800 text-lg group-hover:text-accent transition-colors">
                    {circ.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{circ.type}</p>
                </div>
                
                <div className="md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0 gap-2">
                  <button className="flex items-center justify-center p-2 text-slate-500 border border-slate-200 rounded hover:bg-slate-100 transition-all" title="View PDF">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center p-2 text-slate-500 border border-slate-200 rounded hover:bg-slate-100 transition-all" title="Print Circular">
                    <Printer className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center p-2 text-primary border border-primary/20 rounded hover:bg-primary hover:text-white transition-all" title="Download">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Pagination mock */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
            <button className="hover:text-primary transition-colors">← Previous</button>
            <span>Page 1 of 12</span>
            <button className="hover:text-primary transition-colors flex items-center gap-1">Next <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeCircular;
