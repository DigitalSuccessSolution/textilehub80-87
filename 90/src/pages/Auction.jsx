import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Gavel, Clock, TrendingUp, Tag, AlertCircle } from "lucide-react";

const mockAuctions = [
  {
    id: "AUC-2026-001",
    item: "Exclusive Banarasi Silk Lot – 50 Sarees",
    basePrice: "₹1,50,000",
    currentBid: "₹1,68,000",
    bidder: "Sharma Textiles",
    timeLeft: "1d 4h 22m",
    bids: 7,
    status: "Live",
  },
  {
    id: "AUC-2026-002",
    item: "Premium Woollen Suiting Fabric – 800 meters",
    basePrice: "₹2,00,000",
    currentBid: "₹2,15,500",
    bidder: "Kapoor & Sons",
    timeLeft: "2d 11h 05m",
    bids: 4,
    status: "Live",
  },
  {
    id: "AUC-2026-003",
    item: "Pure Kanjivaram Silk – 30 Sarees",
    basePrice: "₹3,00,000",
    currentBid: "₹3,40,000",
    bidder: "Gupta Weavers",
    timeLeft: "Ended",
    bids: 12,
    status: "Closed",
  },
];

const Auction = () => {
  useSEO({ title: "Auction | Kaaya Fabrics", description: "Participate in live textile auctions for exclusive bulk lots." });
  const [bidValues, setBidValues] = useState({});
  const [bidSubmitted, setBidSubmitted] = useState({});
  const [filter, setFilter] = useState("All");

  const handleBid = (id) => {
    if (!bidValues[id]) return;
    setBidSubmitted(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setBidSubmitted(prev => ({ ...prev, [id]: false })), 4000);
  };

  const filtered = filter === "All" ? mockAuctions : mockAuctions.filter(a => a.status === filter);

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">Live Auctions</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Textile Auctions
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Bid on exclusive textile lots available in limited quantity. All lots verified for quality and authenticity.
          </p>
        </div>

        {/* Notice */}
        <div className="mb-8 flex items-start gap-3 bg-brand-emerald-dark/[0.03] border border-brand-gold/25 rounded-xl px-5 py-4">
          <AlertCircle size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
          <p className="text-xs text-brand-charcoal/80 font-sans leading-relaxed font-light">
            <strong className="text-brand-charcoal font-bold uppercase tracking-wider block mb-1">Trade Registered Participants Only</strong> 
            Bids are legally binding. Winning bidder must complete payment within 48 hours. <a href="/trade-enquiry" className="underline font-bold text-brand-gold hover:text-brand-gold-dark transition-colors">Register your business</a> to participate.
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8">
          {["All", "Live", "Closed"].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                filter === f 
                  ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark" 
                  : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Auction Cards */}
        <div className="grid gap-6">
          {filtered.map(auction => (
            <div 
              key={auction.id} 
              className={`bg-white border overflow-hidden transition-all rounded-xl ${
                auction.status === "Live" ? "border-brand-gold shadow-md" : "border-brand-linen-dark"
              }`}
            >
              {auction.status === "Live" && (
                <div className="bg-brand-emerald-dark px-6 py-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-brand-terracotta rounded-full animate-pulse" />
                  <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.2em]">Live Auction Lot</span>
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-grow">
                    <p className="text-[10px] text-brand-gold font-mono mb-2">{auction.id}</p>
                    <h3 className="text-lg font-serif font-bold text-brand-charcoal uppercase tracking-wide mb-4">{auction.item}</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Base Price", value: auction.basePrice, icon: Tag },
                        { label: "Current Bid", value: auction.currentBid, icon: TrendingUp },
                        { label: "Time Left", value: auction.timeLeft, icon: Clock },
                        { label: "Total Bids", value: auction.bids, icon: Gavel },
                      ].map(({ label, value, icon: Icon }) => (
                        <div key={label} className="bg-brand-linen/40 rounded-xl p-3 border border-brand-linen-dark/50">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Icon size={12} className="text-brand-gold" />
                            <p className="text-[9px] text-brand-charcoal/40 uppercase tracking-widest font-black">{label}</p>
                          </div>
                          <p className="text-sm font-bold text-brand-charcoal">{value}</p>
                        </div>
                      ))}
                    </div>
                    {auction.status === "Live" && (
                      <p className="mt-4 text-[10px] text-brand-charcoal/50 font-sans font-light">
                        Highest bidder: <span className="font-bold text-brand-charcoal uppercase tracking-wider">{auction.bidder}</span>
                      </p>
                    )}
                  </div>

                  {auction.status === "Live" && (
                    <div className="md:w-56 flex-shrink-0 md:pl-6 md:border-l border-brand-linen-dark">
                      {bidSubmitted[auction.id] ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                          <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">✓ Bid Placed Successfully</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60">Your Bid (₹)</label>
                          <input
                            type="number"
                            placeholder="Enter bid amount"
                            value={bidValues[auction.id] || ""}
                            onChange={e => setBidValues(prev => ({ ...prev, [auction.id]: e.target.value }))}
                            className="w-full border border-brand-linen-dark px-4 py-3 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold transition-all rounded-xl font-sans"
                          />
                          <button
                            onClick={() => handleBid(auction.id)}
                            className="w-full flex items-center justify-center gap-2 bg-brand-emerald-dark hover:bg-brand-emerald-medium text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
                          >
                            <Gavel size={13} className="text-brand-gold" /> Place Bid
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {auction.status === "Closed" && (
                    <div className="md:w-40 flex-shrink-0 text-center md:pl-6 md:border-l border-brand-linen-dark flex items-center justify-center">
                      <span className="inline-block bg-brand-linen-dark/50 text-brand-charcoal/40 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-brand-linen-dark">Auction Ended</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Auction;
