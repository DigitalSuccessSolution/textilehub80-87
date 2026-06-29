import React from 'react';
import { Megaphone, AlertCircle, Calendar, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, date: 'Oct 24, 2023', type: 'urgent', title: 'Diwali Dispatch Deadlines', desc: 'All orders for the festive season must be confirmed by Nov 5th to guarantee delivery before Diwali.' },
    { id: 2, date: 'Oct 18, 2023', type: 'info', title: 'New Surat Warehouse Opening', desc: 'We are expanding our logistics capacity. A new 50,000 sq ft warehouse will be operational next month.' },
    { id: 3, date: 'Sep 30, 2023', type: 'update', title: 'e-Quotation Engine Upgrade', desc: 'Version 2.0 of the pricing engine is now live. Expect 40% faster PDF generation and real-time shipping estimates.' },
    { id: 4, date: 'Sep 12, 2023', type: 'info', title: 'Winter Collection Preview', desc: 'The exclusive 12 Collections Winter line will be available for VIP B2B partners starting Oct 1st.' }
  ];

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container-custom max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Megaphone className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">Notice Board</h1>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-12 pb-8">
          
          {notices.map((notice) => (
            <div key={notice.id} className="relative pl-8 md:pl-16">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                notice.type === 'urgent' ? 'bg-red-500' : 
                notice.type === 'update' ? 'bg-accent' : 'bg-primary'
              }`} />
              
              {/* Content Card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-400">
                    <Calendar className="w-3.5 h-3.5" /> {notice.date}
                  </span>
                  {notice.type === 'urgent' && (
                    <span className="bg-red-50 text-red-600 text-[9px] font-bold tracking-wider px-2 py-1 rounded flex items-center gap-1 w-max">
                      <AlertCircle className="w-3 h-3" /> Urgent Action Required
                    </span>
                  )}
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {notice.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">
                  {notice.desc}
                </p>
                
                <button className="text-xs font-bold tracking-wider text-primary flex items-center gap-2 hover:gap-3 transition-all">
                  Read Full Notice <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border border-slate-200 text-slate-500 hover:border-primary hover:text-primary px-8 py-3 rounded-full text-xs font-bold tracking-wider transition-colors">
            Load Older Notices
          </button>
        </div>

      </div>
    </div>
  );
};

export default NoticeBoard;
