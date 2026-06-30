import React from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      type: 'alert',
      title: 'Warehouse Maintenance Schedule',
      date: 'Oct 15, 2023',
      content: 'Primary dispatch center in Surat will undergo maintenance on Oct 20th. Expect a 24-hour delay in shipments processed on this date.',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'info',
      title: 'New Tax Invoice Format',
      date: 'Oct 05, 2023',
      content: 'As per new government regulations, all B2B invoices will now include the updated HSN codes. Please update your accounting software accordingly.',
      icon: <Info className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'success',
      title: 'Festive Season Dispatch Cleared',
      date: 'Sep 28, 2023',
      content: 'All pre-ordered festive stock (Order IDs starting with FS-23) has been successfully dispatched to regional hubs.',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      id: 4,
      type: 'info',
      title: 'e-auction Portal Update',
      date: 'Sep 15, 2023',
      content: 'The e-auction bidding increment has been standardized to ₹5/meter for all premium silk lots to ensure fairer bidding.',
      icon: <Info className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Notice Board</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Stay informed with the latest updates and operational alerts.
          </p>
        </div>
      </div>
      <div className="container-custom max-w-4xl pb-24">
        
        {/* Board */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-[56px] top-4 bottom-4 w-px bg-border"></div>

          <div className="space-y-8 relative z-10">
            {notices.map((notice) => (
              <div key={notice.id} className="flex flex-col md:flex-row gap-6 group">
                
                {/* Timeline Icon & Date */}
                <div className="flex items-center md:items-start gap-4 md:w-48 shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border-4 border-background z-10 transition-colors
                    ${notice.type === 'alert' ? 'bg-red-50 text-red-500 border-red-100 group-hover:bg-red-500 group-hover:text-white' : 
                      notice.type === 'success' ? 'bg-green-50 text-green-500 border-green-100 group-hover:bg-green-500 group-hover:text-white' : 
                      'bg-blue-50 text-blue-500 border-blue-100 group-hover:bg-blue-500 group-hover:text-white'}`}
                  >
                    {notice.icon}
                  </div>
                  <div className="md:pt-3">
                    <span className="text-xs font-bold text-primary block">{notice.date}</span>
                    <span className="text-sm capitalize tracking-widest text-muted-foreground font-bold">{notice.type}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border flex-1 hover:shadow-md transition-shadow relative">
                  <div className="hidden md:block absolute top-6 -left-3 w-3 h-3 bg-white border-t border-l border-border transform -rotate-45"></div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{notice.title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {notice.content}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-border flex justify-end">
                    <button className="text-xs font-bold capitalize tracking-widest text-accent flex items-center gap-1 hover:text-primary transition-colors">
                      Read Full Notice <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="bg-transparent border border-primary text-primary px-8 py-3 rounded-full text-xs font-bold capitalize tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
            Load Previous Notices
          </button>
        </div>

      </div>
    </div>
  );
};

export default NoticeBoard;
