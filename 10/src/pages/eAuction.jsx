import React, { useState } from 'react';
import { Activity, Clock, Gavel, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react';

const EAuction = () => {
  const [activeTab, setActiveTab] = useState('live');

  const liveAuctions = [
    { id: 'LOT-A492', desc: 'Egyptian Cotton Shirting 10,000 Mtrs', highestBidder: 'ID-88X', timeLeft: '00:45:12', bids: 24, status: 'hot', image: 'https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=200&auto=format&fit=crop' },
    { id: 'LOT-B811', desc: 'Silk Blend Festival Kurtas 500 Sets', highestBidder: 'ID-42A', timeLeft: '02:15:00', bids: 8, status: 'normal', image: 'https://images.unsplash.com/photo-1584346808092-23315c138a06?q=80&w=200&auto=format&fit=crop' },
    { id: 'LOT-C102', desc: 'Velvet Upholstery Surplus 2,500 Mtrs', highestBidder: 'ID-99K', timeLeft: '00:05:40', bids: 42, status: 'ending', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=200&auto=format&fit=crop' }
  ];

  return (
    <div className="bg-[#0B1121] min-h-screen text-slate-300 font-light pb-24">
      {/* Header / Ticker Area */}
      <div className="bg-accent text-primary font-bold text-xs uppercase tracking-[0.2em] py-2 px-4 flex items-center justify-between border-b border-primary/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>Live e-Auction Server: Connected</span>
        </div>
        <div className="flex items-center gap-4 hidden sm:flex">
          <span>Total Volume Traded Today: 1.4M Units</span>
          <span>Active Bidders: 342</span>
        </div>
      </div>

      <div className="container-custom max-w-6xl pt-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">Wholesale e-Auction</h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Bid on premium surplus lots and exclusive factory releases from our 12 Collections in real-time. Unbeatable prices for bulk buyers.
          </p>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <Activity className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Active Lots</p>
              <p className="text-3xl font-heading font-bold text-white">12</p>
            </div>
          </div>
          
          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Average Discount</p>
              <p className="text-3xl font-heading font-bold text-white">24%</p>
            </div>
          </div>

          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Next Major Drop</p>
              <p className="text-lg font-bold text-white">Silk Collection Release</p>
              <p className="text-sm text-accent mt-1">Tomorrow, 10:00 AM IST</p>
            </div>
            <Clock className="w-8 h-8 text-slate-700" />
          </div>

        </div>

        {/* Live Auction Table/Grid */}
        <div className="bg-[#121A2F] border border-slate-800 rounded-xl overflow-hidden">
          <div className="flex border-b border-slate-800">
            <button 
              className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'live' ? 'border-b-2 border-accent text-white' : 'text-slate-500 hover:text-slate-300'}`}
              onClick={() => setActiveTab('live')}
            >
              Live Lots
            </button>
            <button 
              className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'upcoming' ? 'border-b-2 border-accent text-white' : 'text-slate-500 hover:text-slate-300'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'closed' ? 'border-b-2 border-accent text-white' : 'text-slate-500 hover:text-slate-300'}`}
              onClick={() => setActiveTab('closed')}
            >
              Recently Closed
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-heading font-bold text-white">Active Bidding Floor</h3>
              <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                <RefreshCw className="w-3.5 h-3.5" /> Refresh List
              </button>
            </div>

            <div className="space-y-4">
              {liveAuctions.map((lot, idx) => (
                <div key={idx} className={`border rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all hover:bg-slate-800/30 ${
                  lot.status === 'ending' ? 'border-red-500/30 bg-red-500/5' : 'border-slate-800'
                }`}>
                  <div className="flex-1 flex flex-col md:flex-row gap-4 md:items-center">
                    <img src={lot.image} alt={lot.desc} className="w-20 h-20 object-cover rounded shadow-md border border-slate-700 shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded">{lot.id}</span>
                        {lot.status === 'ending' && <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-400"><AlertCircle className="w-3 h-3" /> Ending Soon</span>}
                      </div>
                      <h4 className="text-lg font-bold text-white">{lot.desc}</h4>
                      <p className="text-xs text-slate-500 mt-1">{lot.bids} Bids Placed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 w-full md:w-auto">
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Time Left</p>
                      <p className={`text-xl font-heading font-bold ${lot.status === 'ending' ? 'text-red-400' : 'text-white'}`}>{lot.timeLeft}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Highest Bidder</p>
                      <p className="text-2xl font-heading font-bold text-accent">{lot.highestBidder}</p>
                    </div>
                    <button className="bg-accent text-primary px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                      <Gavel className="w-4 h-4" /> Bid Now
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
