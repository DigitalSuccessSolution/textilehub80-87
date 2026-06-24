import React from 'react';
import { FileText, Download, Calendar, ArrowRight, Bell, Eye, Printer, Filter } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 'TC-2023-089', date: 'Oct 15, 2023', title: 'Revised Tiered Pricing for Royal Silk Collection', type: 'Pricing Update' },
    { id: 'TC-2023-088', date: 'Oct 02, 2023', title: 'Upcoming Festive Logistics Schedule & Deadlines', type: 'Logistics' },
    { id: 'TC-2023-087', date: 'Sep 28, 2023', title: 'New GST Slab Implementation for Textile Blends', type: 'Tax & Compliance' },
    { id: 'TC-2023-086', date: 'Sep 15, 2023', title: 'Discontinuation of Vintage Weave Series', type: 'Inventory Notice' },
    { id: 'TC-2023-085', date: 'Aug 30, 2023', title: 'e-Auction Portal Maintenance Schedule', type: 'System Alert' },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Trade Circulars</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Important updates, compliance notices, and policy changes.
          </p>
        </div>
      </div>
      <div className="container-custom max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8 mb-12">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-3 flex items-center gap-2">
              <Bell className="w-3.5 h-3.5" /> Official Communications
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">Trade Circulars</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <p className="text-muted-foreground font-light text-sm max-w-xs md:text-right hidden md:block">
              Stay updated with official B2B notifications, policy changes, and pricing updates.
            </p>
            <button className="bg-white border border-border text-primary px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <Filter className="w-3 h-3" /> Filter Circulars
            </button>
          </div>
        </div>

        {/* Elegant List */}
        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          {/* List Header */}
          <div className="bg-muted grid grid-cols-12 gap-4 p-6 border-b border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground hidden md:grid">
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Circular ID</div>
            <div className="col-span-5">Subject</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>

          {/* List Items */}
          <div className="divide-y divide-border">
            {circulars.map((circ, idx) => (
              <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-muted/50 transition-colors">
                
                <div className="md:col-span-2 flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Calendar className="w-4 h-4 text-accent md:hidden" />
                  {circ.date}
                </div>
                
                <div className="md:col-span-2">
                  <span className="inline-block border border-border bg-white text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {circ.id}
                  </span>
                </div>
                
                <div className="md:col-span-5">
                  <p className="font-bold text-primary text-base group-hover:text-accent transition-colors">
                    {circ.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider font-bold">{circ.type}</p>
                </div>
                
                <div className="md:col-span-3 flex justify-start md:justify-end mt-4 md:mt-0 gap-2">
                  <button className="w-10 h-10 flex items-center justify-center text-primary bg-white border border-border rounded-full hover:border-accent hover:text-accent shadow-sm transition-all" title="View PDF">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-primary bg-white border border-border rounded-full hover:border-accent hover:text-accent shadow-sm transition-all" title="Print Circular">
                    <Printer className="w-4 h-4" />
                  </button>
                  <button className="bg-primary text-white border border-primary px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 shadow-sm transition-all flex items-center gap-2" title="Download">
                    <Download className="w-3 h-3" /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Pagination mock */}
          <div className="bg-white p-6 border-t border-border flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <button className="hover:text-primary transition-colors flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5 rotate-180" /> Previous</button>
            <span className="bg-muted px-4 py-1.5 rounded-full">Page 1 of 12</span>
            <button className="hover:text-primary transition-colors flex items-center gap-1">Next <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeCircular;
