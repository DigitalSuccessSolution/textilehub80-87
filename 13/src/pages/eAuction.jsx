import React, { useState } from 'react';
import { Activity, Clock, Gavel, TrendingUp, AlertCircle, RefreshCw, Lock } from 'lucide-react';

const EAuction = () => {
  const [activeTab, setActiveTab] = useState('live');

  const liveAuctions = [
    { id: 'LOT-A492', desc: 'Egyptian Cotton Shirting 10,000 Mtrs', highestBidder: 'ID-88X', timeLeft: '00:45:12', bids: 24, status: 'hot', image: 'https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=400&auto=format&fit=crop', date: 'Oct 28, 2023' },
    { id: 'LOT-B811', desc: 'Silk Blend Festival Kurtas 500 Sets', highestBidder: 'ID-42A', timeLeft: '02:15:00', bids: 8, status: 'normal', image: 'https://images.unsplash.com/photo-1584346808092-23315c138a06?q=80&w=400&auto=format&fit=crop', date: 'Oct 26, 2023' },
    { id: 'LOT-C102', desc: 'Velvet Upholstery Surplus 2,500 Mtrs', highestBidder: 'ID-99K', timeLeft: '00:05:40', bids: 42, status: 'ending', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400&auto=format&fit=crop', date: 'Oct 25, 2023' }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-light pb-24">
      
      {/* Ticker / Status Bar */}
      <div className="bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-[0.2em] py-3 px-4 flex flex-col md:flex-row items-center justify-between border-b border-primary/20 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>Live e-Auction Server: Secured Connection</span>
          <Lock className="w-3 h-3 ml-2 text-white/50" />
        </div>
        <div className="flex items-center gap-6">
          <span>Total Volume Traded Today: 1.4M Units</span>
          <span>Active Bidders: 342</span>
        </div>
      </div>

      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Live e-Auction</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Bid on premium and exclusive textile lots in real-time.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-6xl pt-12 space-y-12">
        <div className="text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">B2B Trade Portal</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Wholesale e-Auction</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm font-light">
            Bid on premium surplus lots and exclusive factory releases from our collections in real-time. Secure and transparent.
          </p>
        </div>

        {/* Live Auction Card Grid - 3-Column Layout (Displayed above stats panel) */}
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <h3 className="text-xl font-heading font-bold text-primary">Active Bidding Floor</h3>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold hover:text-primary transition-colors">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh List
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveAuctions.map((lot, idx) => (
              <div key={idx} className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl hover:border-primary/20">
                {/* Image, Title, Description & Date */}
                <div>
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img src={lot.image} alt={lot.id} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary/95 text-white text-[9px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {lot.id}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider block mb-2">{lot.date}</span>
                    <h4 className="font-heading font-bold text-base text-primary mb-3">{lot.id} - Bidding Lot</h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{lot.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Panels (Displayed below cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-sm border border-border p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Active Lots</p>
              <p className="text-3xl font-heading font-bold text-primary">12</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm border border-border p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Success Rate</p>
              <p className="text-3xl font-heading font-bold text-primary">98%</p>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-sm flex items-center justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Clock className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-2">Next Major Drop</p>
              <p className="text-lg font-bold text-white mb-1">Silk Collection Release</p>
              <p className="text-xs text-accent font-bold tracking-widest uppercase">Tomorrow, 10:00 AM IST</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EAuction;
