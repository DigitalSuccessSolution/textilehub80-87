import React, { useState } from 'react';
import { Activity, Clock, Gavel, TrendingUp, AlertCircle, RefreshCw, Calendar } from 'lucide-react';

const liveAuctions = [
  {
    id: 'LOT-A492',
    title: 'Premium Egyptian Cotton Shirting',
    desc: '10,000 meters of high-grade, long-staple Egyptian cotton shirting fabric in assorted colors.',
    highestBidder: 'ID-88X',
    timeLeft: '00:45:12',
    bids: 24,
    status: 'ending',
    image: 'https://images.pexels.com/photos/9594940/pexels-photo-9594940.jpeg',
    date: 'Oct 29, 2023',
  },
  {
    id: 'LOT-B811',
    title: 'Silk Blend Festival Kurtas',
    desc: '500 sets of premium silk blend men\'s festival wear with jacquard borders and fine embroidery.',
    highestBidder: 'ID-42A',
    timeLeft: '02:15:00',
    bids: 8,
    status: 'normal',
    image: 'https://images.pexels.com/photos/28113668/pexels-photo-28113668.jpeg',
    date: 'Oct 28, 2023',
  },
  {
    id: 'LOT-C102',
    title: 'Velvet Upholstery Fabric',
    desc: '2,500 meters of luxury heavy-weight velvet upholstery fabric for sofas and curtains.',
    highestBidder: 'ID-99K',
    timeLeft: '00:05:40',
    bids: 42,
    status: 'hot',
    image: 'https://images.pexels.com/photos/35009417/pexels-photo-35009417.jpeg',
    date: 'Oct 27, 2023',
  },
  {
    id: 'LOT-D330',
    title: 'Banarasi Brocade Sarees',
    desc: 'Exclusive lot of 200 handloom Banarasi brocade sarees with gold zari thread work.',
    highestBidder: 'ID-17C',
    timeLeft: '04:00:00',
    bids: 15,
    status: 'normal',
    image: 'https://images.pexels.com/photos/37045290/pexels-photo-37045290.jpeg',
    date: 'Oct 26, 2023',
  },
  {
    id: 'LOT-E504',
    title: 'Royal Chanderi Silk Set',
    desc: '300 pieces of pure Chanderi silk dress material with block print borders, festive grade.',
    highestBidder: 'ID-55F',
    timeLeft: '01:30:20',
    bids: 19,
    status: 'normal',
    image: 'https://images.pexels.com/photos/11840170/pexels-photo-11840170.jpeg',
    date: 'Oct 25, 2023',
  },
  {
    id: 'LOT-F210',
    title: 'Luxury Cotton Bedsheet Set',
    desc: '1,200 sets of 400TC Egyptian cotton bedsheets in king and queen sizes, earth tones.',
    highestBidder: 'ID-30J',
    timeLeft: '03:10:00',
    bids: 11,
    status: 'normal',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop',
    date: 'Oct 24, 2023',
  },
];

const statusBadge = (status) => {
  if (status === 'ending') return 'bg-red-500/10 text-red-400 border border-red-500/30';
  if (status === 'hot') return 'bg-orange-500/10 text-orange-400 border border-orange-500/30';
  return 'bg-slate-700/40 text-slate-400 border border-slate-700';
};

const statusLabel = (status) => {
  if (status === 'ending') return 'Ending Soon';
  if (status === 'hot') return 'Hot Bidding';
  return 'Live';
};

const EAuction = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <div className="bg-[#0B1121] min-h-screen text-slate-300 font-light pb-24">

      {/* Live Ticker */}
      <div className="bg-accent text-primary font-bold text-xs tracking-wider py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>Live e-Auction Server: Connected</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>Total Volume Traded Today: 1.4M Units</span>
          <span>Active Bidders: 342</span>
        </div>
      </div>

      <div className="container-custom max-w-7xl pt-16">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Wholesale e-Auction</h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Bid on premium surplus lots and exclusive factory releases from our 12 Collections in real-time. Unbeatable prices for bulk buyers.
          </p>
        </div>


        {/* Tab Navigation + Cards — shown first */}
        <div className="bg-[#121A2F] border border-slate-800 rounded-xl overflow-hidden mb-12">
          <div className="flex border-b border-slate-800">
            {['live', 'upcoming', 'closed'].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-4 text-xs font-bold tracking-wider capitalize transition-colors ${activeTab === tab ? 'border-b-2 border-accent text-white' : 'text-slate-500 hover:text-slate-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'live' ? 'Live Lots' : tab === 'upcoming' ? 'Upcoming' : 'Recently Closed'}
              </button>
            ))}
          </div>

          {/* Auction Cards Grid */}
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-heading font-bold text-white">
                {activeTab === 'live' ? 'Active Bidding Floor' : activeTab === 'upcoming' ? 'Upcoming Lots' : 'Closed Auctions'}
              </h3>
              <button className="flex items-center gap-2 text-xs tracking-wider text-slate-400 hover:text-white transition-colors">
                <RefreshCw className="w-3.5 h-3.5" /> Refresh
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveAuctions.map((lot, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl overflow-hidden border flex flex-col transition-all hover:scale-[1.02] duration-200 ${lot.status === 'ending' ? 'border-red-500/30' : 'border-slate-800'
                    } bg-[#0E1629]`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img src={lot.image} alt={lot.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${statusBadge(lot.status)}`}>
                      {lot.status === 'ending' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                      {statusLabel(lot.status)}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/60 text-accent text-[10px] font-bold px-2 py-0.5 rounded">
                      {lot.id}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h4 className="font-heading text-base font-bold text-white leading-snug">{lot.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{lot.desc}</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold">
                      <Calendar className="w-3 h-3" /> {lot.date}
                    </div>
                    <div className="border-t border-slate-800 mt-1" />


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Stats — below cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <Activity className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs tracking-wider text-slate-500 font-bold mb-1">Active Bid Volume</p>
              <p className="text-3xl font-heading font-bold text-white">45,280 <span className="text-xs text-slate-500 font-normal">Mtrs</span></p>
            </div>
          </div>

          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs tracking-wider text-slate-500 font-bold mb-1">Average Discount</p>
              <p className="text-3xl font-heading font-bold text-white">24%</p>
            </div>
          </div>

          <div className="bg-[#121A2F] border border-slate-800 p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs tracking-wider text-slate-500 font-bold mb-2">Next Major Drop</p>
              <p className="text-lg font-bold text-white">Silk Collection Release</p>
              <p className="text-sm text-accent mt-1">Tomorrow, 10:00 AM IST</p>
            </div>
            <Clock className="w-8 h-8 text-slate-700" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EAuction;
