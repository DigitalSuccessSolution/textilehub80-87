import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Gavel, Clock } from "lucide-react";

const Auction = () => {
  useSEO("e-auction Portal", "Bid on surplus fabrics, stock clearances, and yarn bundles online at Aurora Textile House.");
  const [bids, setBids] = useState({ 1: 45000, 2: 120000 });
  const [userBids, setUserBids] = useState({ 1: "", 2: "" });

  const handlePlaceBid = (itemId) => {
    const entered = parseFloat(userBids[itemId]);
    if (!entered || entered <= bids[itemId]) {
      alert("Bid must be higher than current bid!");
      return;
    }
    setBids(prev => ({ ...prev, [itemId]: entered }));
    setUserBids(prev => ({ ...prev, [itemId]: "" }));
    alert("Bid placed successfully!");
  };

  const auctions = [
    {
      id: 1,
      title: "Surplus Pure Banarasi Weaves (50 Pcs Lot)",
      desc: "Clearing out seasonal design trials in vibrant hues. 100% genuine silk fibers.",
      startBid: 35000,
      currentBid: bids[1],
      timeLeft: "2 Hours, 15 Mins",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    },
    {
      id: 2,
      title: "Italian Wool Suiting Fabric (120 Meters Roll)",
      desc: "Premium grade woolen threads. Ideal for designer boutiques or premium suit manufacturing.",
      startBid: 90000,
      currentBid: bids[2],
      timeLeft: "5 Hours, 40 Mins",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Section - Dark Bidding Room Style */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#C29E6B] text-[9px] font-sans font-bold  tracking-[0.35em] block">
                Live Stock Bidding
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[8px] font-bold  tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Room
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-none">
              <span className="" style={{ textTransform: '' }}>e-Auction</span>
            </h1>
          </div>
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Real-time transparent bidding for surplus fabric rolls, cleared stock lots, and premium yarn bundles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto">
        {/* Live List */}
        <div className="grid grid-cols-1 gap-8">
          {auctions.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[2rem] border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-2xl hover:border-[#C29E6B] transition-all duration-500 relative overflow-hidden group"
            >
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-neutral-900 border border-stone-200/40 flex-shrink-0 relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                <span className="absolute top-4 left-4 bg-[#10211F]/90 text-[#C29E6B] text-[8px] font-sans font-bold  tracking-widest px-3 py-1.5 rounded-full border border-white/10 shadow-md">
                  Lot #{item.id}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold  text-[#10211F] leading-tight tracking-wide group-hover:text-[#2C443E] transition-colors">{item.title}</h3>
                    <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#C29E6B]/15 text-[#C29E6B] text-[9px]  font-bold flex items-center gap-1.5 border border-[#C29E6B]/25">
                      <Clock size={11} /> {item.timeLeft}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light mb-6">{item.desc}</p>
                </div>

                <div className="border-t border-stone-100 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="space-y-0.5">
                    <p className="text-[9px] text-stone-400  tracking-widest font-sans font-bold">Current Active Bid</p>
                    <p className="text-2xl font-bold text-[#C29E6B] font-sans">₹{item.currentBid.toLocaleString()}</p>
                    <p className="text-[9px] text-stone-400 font-sans">Starting Bid: ₹{item.startBid.toLocaleString()}</p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="number"
                      placeholder="Enter higher bid"
                      value={userBids[item.id]}
                      onChange={(e) => setUserBids(prev => ({ ...prev, [item.id]: e.target.value }))}
                      className="border border-stone-200 rounded-2xl px-4 py-3 text-xs w-full sm:w-32 bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] transition-all font-sans font-light"
                    />
                    <button
                      onClick={() => handlePlaceBid(item.id)}
                      className="px-6 py-3 bg-[#10211F] hover:bg-[#C29E6B] text-white rounded-full text-[10px]  font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-md font-sans"
                    >
                      <Gavel size={12} /> Bid Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Auction;
