import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Gavel, Clock } from "lucide-react";

const Auction = () => {
  useSEO("e-Auction Portal", "Bid on surplus fabrics, stock clearances, and yarn bundles online at Retail Textile Mall.");
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
      img: "https://images.pexels.com/photos/8711176/pexels-photo-8711176.jpeg"
    },
    {
      id: 2,
      title: "Italian Wool Suiting Fabric (120 Meters Roll)",
      desc: "Premium grade woolen threads. Ideal for designer boutiques or premium suit manufacturing.",
      startBid: 90000,
      currentBid: bids[2],
      timeLeft: "5 Hours, 40 Mins",
      img: "https://images.pexels.com/photos/4614119/pexels-photo-4614119.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-20">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Clearance Lot
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              <span className="lowercase font-serif text-brand-lavender">e</span>-Auction
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">

        {/* Live List */}
        <div className="space-y-8">
          {auctions.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-brand-gold/15 p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-md hover:shadow-lg hover:border-brand-lavender/30 transition-all duration-300">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-stone-100 flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-brand-plum leading-tight">{item.title}</h3>
                    <span className="shrink-0 px-3 py-1 rounded bg-brand-lavender/10 text-brand-lavender text-[10px] uppercase font-bold flex items-center gap-1.5">
                      <Clock size={11} /> {item.timeLeft}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="border-t border-stone-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest font-sans font-medium">Current Active Bid</p>
                    <p className="text-xl font-bold text-brand-lavender font-sans">₹{item.currentBid.toLocaleString()}</p>
                    <p className="text-[9px] text-stone-400 font-sans">Starting Bid: ₹{item.startBid.toLocaleString()}</p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="number"
                      placeholder="Enter higher bid"
                      value={userBids[item.id]}
                      onChange={(e) => setUserBids(prev => ({ ...prev, [item.id]: e.target.value }))}
                      className="border border-stone-200 rounded-xl px-3 py-2 text-xs w-28 bg-brand-cream/40 focus:outline-none focus:ring-2 focus:ring-[#7C5C9E] transition-all"
                    />
                    <button
                      onClick={() => handlePlaceBid(item.id)}
                      className="px-4 py-2 bg-brand-lavender hover:bg-brand-lavender text-white hover:text-brand-plum rounded-full text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
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
