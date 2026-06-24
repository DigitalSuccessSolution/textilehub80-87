import React, { useState } from 'react';
import { Activity, Clock, Gavel, TrendingUp, AlertCircle, RefreshCw, Lock } from 'lucide-react';

const EAuction = () => {
  const [activeTab, setActiveTab] = useState('live');

  const liveAuctions = [
    { id: 'LOT-A492', desc: 'Egyptian Cotton Shirting 10,000 Mtrs', highestBidder: 'ID-88X', timeLeft: '00:45:12', bids: 24, status: 'hot', image: 'https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=200&auto=format&fit=crop' },
    { id: 'LOT-B811', desc: 'Silk Blend Festival Kurtas 500 Sets', highestBidder: 'ID-42A', timeLeft: '02:15:00', bids: 8, status: 'normal', image: 'https://images.unsplash.com/photo-1584346808092-23315c138a06?q=80&w=200&auto=format&fit=crop' },
    { id: 'LOT-C102', desc: 'Velvet Upholstery Surplus 2,500 Mtrs', highestBidder: 'ID-99K', timeLeft: '00:05:40', bids: 42, status: 'ending', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=200&auto=format&fit=crop' }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-light pb-24 pt-20">
      
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

      <div className="container-custom max-w-6xl pt-12">
        <div className="text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">B2B Trade Portal</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Wholesale e-Auction</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm">
            Bid on premium surplus lots and exclusive factory releases from our collections in real-time. Secure and transparent.
          </p>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
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

        {/* Live Auction Table/Grid */}
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="flex border-b border-border bg-muted/30 overflow-x-auto hide-scrollbar">
            <button 
              className={`px-8 py-5 text-[10px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'live' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('live')}
            >
              Live Lots
            </button>
            <button 
              className={`px-8 py-5 text-[10px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'upcoming' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-8 py-5 text-[10px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'closed' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('closed')}
            >
              Recently Closed
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
              <h3 className="text-xl font-heading font-bold text-primary">Active Bidding Floor</h3>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold hover:text-primary transition-colors">
                <RefreshCw className="w-3.5 h-3.5" /> Refresh List
              </button>
            </div>

            <div className="space-y-6">
              {liveAuctions.map((lot, idx) => (
                <div key={idx} className={`border rounded-xl p-4 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:shadow-md ${
                  lot.status === 'ending' ? 'border-red-200 bg-red-50/30' : 'border-border hover:border-primary/20'
                }`}>
                  
                  <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:items-center">
                    <img src={lot.image} alt="Lot Image" className="w-24 h-24 object-cover rounded-lg shadow-sm border border-border shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-muted px-3 py-1 rounded-full border border-border">{lot.id}</span>
                        {lot.status === 'ending' && <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3" /> Ending Soon</span>}
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2">{lot.desc}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{lot.bids} Bids Placed</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto bg-muted/30 p-4 rounded-xl border border-border/50">
                    <div className="text-left md:text-right min-w-[100px]">
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Time Left</p>
                      <p className={`text-xl font-heading font-bold ${lot.status === 'ending' ? 'text-red-600' : 'text-primary'}`}>{lot.timeLeft}</p>
                    </div>
                    <div className="w-px h-10 bg-border hidden md:block"></div>
                    <div className="text-left md:text-right min-w-[100px]">
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Highest Bidder</p>
                      <p className="text-xl font-heading font-bold text-accent">{lot.highestBidder}</p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-md ml-auto lg:ml-4 flex items-center gap-2">
                      <Gavel className="w-4 h-4" /> Place Bid
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EAuction;
