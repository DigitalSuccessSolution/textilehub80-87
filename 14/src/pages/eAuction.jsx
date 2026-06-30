import React, { useState } from 'react';
import { Activity, Clock, Gavel, TrendingUp, AlertCircle, RefreshCw, Lock } from 'lucide-react';

const EAuction = () => {
  const [activeTab, setActiveTab] = useState('live');

  const liveAuctions = [
    {
      title: 'LOT-A492: Egyptian Cotton Shirting',
      desc: '10,000 Mtrs of premium quality Egyptian cotton.',
      date: 'Ends: Oct 30, 2023',
      status: 'hot',
      image: 'https://images.pexels.com/photos/11546650/pexels-photo-11546650.jpeg'
    },
    {
      title: 'LOT-B811: Silk Blend Festival Kurtas',
      desc: '500 Sets of festival ready Silk Blend Kurtas.',
      date: 'Ends: Nov 05, 2023',
      status: 'normal',
      image: 'https://images.pexels.com/photos/30891941/pexels-photo-30891941.jpeg'
    },
    {
      title: 'LOT-C102: Velvet Upholstery Surplus',
      desc: '2,500 Mtrs of high-quality Velvet Upholstery.',
      date: 'Ends: Oct 28, 2023',
      status: 'ending',
      image: 'https://images.pexels.com/photos/6843226/pexels-photo-6843226.jpeg'
    }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-light pb-24">

      {/* Ticker / Status Bar */}


      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4 ">Live e-auction</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Bid on premium and exclusive textile lots in real-time.
          </p>
        </div>
      </div>

      <div className="container-custom max-w-6xl pt-4">

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          <div className="bg-white shadow-sm border border-border p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs capitalize tracking-widest text-muted-foreground font-bold mb-1">Active Lots</p>
              <p className="text-3xl font-heading font-bold text-primary">12</p>
            </div>
          </div>

          <div className="bg-white shadow-sm border border-border p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs capitalize tracking-widest text-muted-foreground font-bold mb-1">Success Rate</p>
              <p className="text-3xl font-heading font-bold text-primary">98%</p>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-sm flex items-center justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Clock className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <p className="text-xs capitalize tracking-widest text-white/60 font-bold mb-2">Next Major Drop</p>
              <p className="text-lg font-bold text-white mb-1">Silk Collection Release</p>
              <p className="text-xs text-accent font-bold tracking-widest capitalize">Tomorrow, 10:00 AM IST</p>
            </div>
          </div>

        </div>

        {/* Live Auction Table/Grid */}
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="flex border-b border-border bg-muted/30 overflow-x-auto hide-scrollbar">
            <button
              className={`px-8 py-5 text-xs font-bold capitalize tracking-widest transition-colors whitespace-nowrap ${activeTab === 'live' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('live')}
            >
              Live Lots
            </button>
            <button
              className={`px-8 py-5 text-xs font-bold capitalize tracking-widest transition-colors whitespace-nowrap ${activeTab === 'upcoming' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`px-8 py-5 text-xs font-bold capitalize tracking-widest transition-colors whitespace-nowrap ${activeTab === 'closed' ? 'border-b-2 border-primary text-primary bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white/50'}`}
              onClick={() => setActiveTab('closed')}
            >
              Recently Closed
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
              <h3 className="text-xl font-heading font-bold text-primary capitalize">Active Bidding Floor</h3>
              <button className="flex items-center gap-2 text-xs capitalize tracking-widest text-muted-foreground font-bold hover:text-primary transition-colors">
                <RefreshCw className="w-3.5 h-3.5" /> Refresh List
              </button>
            </div>

            <div className="space-y-6">
              {liveAuctions.map((lot, idx) => (
                <div key={idx} className={`border rounded-xl p-4 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:shadow-md ${lot.status === 'ending' ? 'border-red-200 bg-red-50/30' : 'border-border hover:border-primary/20'
                  }`}>

                  <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:items-center">
                    <img src={lot.image} alt={lot.title} className="w-24 h-24 object-cover rounded-lg shadow-sm border border-border shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {lot.status === 'ending' && <span className="flex items-center gap-1 text-xs font-bold capitalize tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3" /> Ending Soon</span>}
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2 capitalize">{lot.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{lot.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto bg-muted/30 p-4 rounded-xl border border-border/50">
                    <div className="text-left md:text-right min-w-[100px]">
                      <p className="text-sm capitalize tracking-widest text-muted-foreground font-bold mb-1">Date</p>
                      <p className={`text-sm font-bold ${lot.status === 'ending' ? 'text-red-600' : 'text-primary'}`}>{lot.date}</p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-bold capitalize tracking-widest hover:bg-primary/90 transition-all shadow-md ml-auto lg:ml-4 flex items-center gap-2">
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
