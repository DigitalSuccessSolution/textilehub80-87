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
      img: "https://images.pexels.com/photos/5504775/pexels-photo-5504775.jpeg"
    },
    {
      id: 2,
      title: "Italian Wool Suiting Fabric (120 Meters Roll)",
      desc: "Premium grade woolen threads. Ideal for designer boutiques or premium suit manufacturing.",
      startBid: 90000,
      currentBid: bids[2],
      timeLeft: "5 Hours, 40 Mins",
      img: "https://images.pexels.com/photos/6766359/pexels-photo-6766359.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Live Stock Bidding</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              <span className="lowercase">e-auction</span><br />
              <span className="text-[#C29E6B] font-light italic text-3xl">Portal</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Bid on premium surplus materials, roll-ends, and clearout batches. Direct transparent B2B e-auctions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[['Live', 'Active Auctions'], ['Transparent', 'Open Bidding'], ['B2B', 'Verified Buyers']].map(([v, l], i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-left hover:bg-white/8 transition-colors">
                <span className="text-sm font-serif font-bold text-white block">{v}</span>
                <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400 mt-0.5 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">

        {/* Live List */}
        <div className="space-y-8">
          {auctions.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-[#2E081B]/10 p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-md hover:shadow-lg hover:border-[#C29E6B]/30 transition-all duration-300">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-stone-100 flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-[#2E081B] leading-tight">{item.title}</h3>
                    <span className="shrink-0 px-3 py-1 rounded bg-[#C29E6B]/10 text-[#C29E6B] text-[10px] uppercase font-bold flex items-center gap-1.5">
                      <Clock size={11} /> {item.timeLeft}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="border-t border-stone-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest font-sans font-medium">Current Active Bid</p>
                    <p className="text-xl font-bold text-[#C29E6B] font-sans">₹{item.currentBid.toLocaleString()}</p>
                    <p className="text-[9px] text-stone-400 font-sans">Starting Bid: ₹{item.startBid.toLocaleString()}</p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="number"
                      placeholder="Enter higher bid"
                      value={userBids[item.id]}
                      onChange={(e) => setUserBids(prev => ({ ...prev, [item.id]: e.target.value }))}
                      className="border border-stone-200 rounded-xl px-3 py-2 text-xs w-28 bg-[#FAF5F0]/40 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
                    />
                    <button
                      onClick={() => handlePlaceBid(item.id)}
                      className="px-4 py-2 bg-[#9C4B6E] hover:bg-[#803856] text-white rounded-full text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md font-sans"
                    >
                      <Gavel size={12} /> Place Bid
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
