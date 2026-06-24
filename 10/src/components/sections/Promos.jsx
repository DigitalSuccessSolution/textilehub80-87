import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Receipt, Gavel, FileText } from 'lucide-react';

const Promos = () => {
  return (
    <section className="bg-slate-50 py-12 border-b border-slate-100 font-light text-slate-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Summer Edit - lg:col-span-3 */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">New Collection</span>
              <h4 className="font-heading text-2xl font-bold text-primary leading-tight">Summer <br />Edit 2025</h4>
              <p className="text-slate-400 text-xs">Light. Elegant. Effortless.</p>
            </div>
            {/* Arch Model Image */}
            <div className="w-full h-40 bg-slate-100 rounded-t-full overflow-hidden border border-slate-50 relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=400&auto=format&fit=crop" 
                alt="Model pink saree" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
              />
            </div>
            <Link 
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Premium Fabrics - lg:col-span-3 */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Quality Looms</span>
                <h4 className="font-heading text-lg font-bold text-primary leading-snug">PREMIUM FABRICS FOR EVERY CREATION</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2"><span>&bull;</span> Luxurious Textures</li>
                <li className="flex items-center gap-2"><span>&bull;</span> Rich Dye Colors</li>
                <li className="flex items-center gap-2"><span>&bull;</span> Latest Jacquard Designs</li>
                <li className="flex items-center gap-2"><span>&bull;</span> Global Quality Standards</li>
              </ul>
            </div>
            {/* Stacked fabric roll image */}
            <div className="w-full h-24 bg-slate-100 rounded-lg overflow-hidden border border-slate-50 relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=400&auto=format&fit=crop" 
                alt="Fabrics Stack" 
                className="w-full h-full object-cover" 
              />
            </div>
            <Link 
              to="/about"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              Discover More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: For Retailers - lg:col-span-3 */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">For Retailers</span>
              <h4 className="font-heading text-lg font-bold text-primary leading-snug">Grow Your Business With Us</h4>
              <p className="text-slate-400 text-xs">Reliable supply logs, exclusive collections.</p>
            </div>
            {/* Showroom interior image */}
            <div className="w-full h-28 bg-slate-100 rounded-lg overflow-hidden border border-slate-50 relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop" 
                alt="Showroom display" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
              />
            </div>
            <Link 
              to="/trade-enquiry"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              Partner With Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: Right B2B Column - lg:col-span-3 */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* e-Quotation card */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-accent/20 transition-all duration-300">
              <div className="space-y-1">
                <h5 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider">
                  <span className="normal-case">e</span>-Quotation
                </h5>
                <p className="text-[10px] text-slate-400 leading-normal max-w-[150px]">Get instant quotes for your lot requirements.</p>
                <Link to="/e-quotation" className="text-[9px] font-bold text-accent hover:underline uppercase tracking-wider block pt-1">Request Now &rarr;</Link>
              </div>
              <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                <Receipt className="w-5 h-5 text-accent" />
              </div>
            </div>

            {/* e-Auction card */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-accent/20 transition-all duration-300">
              <div className="space-y-1">
                <h5 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider">
                  <span className="normal-case">e</span>-Auction
                </h5>
                <p className="text-[10px] text-slate-400 leading-normal max-w-[150px]">Participate in exclusive wholesale auctions.</p>
                <Link to="/e-auction" className="text-[9px] font-bold text-accent hover:underline uppercase tracking-wider block pt-1">View Auctions &rarr;</Link>
              </div>
              <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                <Gavel className="w-5 h-5 text-accent" />
              </div>
            </div>

            {/* Trade Circular card */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-accent/20 transition-all duration-300">
              <div className="space-y-1">
                <h5 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider">TRADE CIRCULAR</h5>
                <p className="text-[10px] text-slate-400 leading-normal max-w-[150px]">Stay updated with latest official releases.</p>
                <Link to="/trade-circular" className="text-[9px] font-bold text-accent hover:underline uppercase tracking-wider block pt-1">View Circulars &rarr;</Link>
              </div>
              <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-accent" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Promos;
