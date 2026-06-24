import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Gavel, FileText, Sparkles } from 'lucide-react';

const Promos = () => {
  return (
    <section className="bg-muted/40 py-14 border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Summer Edit */}
          <div className="lg:col-span-3 bg-primary text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between items-start space-y-5 relative overflow-hidden group">
            {/* Background subtle texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '18px 18px'}}></div>
            
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">New Collection</span>
              <h4 className="font-heading text-2xl font-bold text-white leading-tight">Summer<br/>Edit 2025</h4>
              <p className="text-white/60 text-xs font-light">Light. Elegant. Effortless.</p>
            </div>
            {/* Image */}
            <div className="w-full h-40 bg-white/5 rounded-t-full overflow-hidden relative z-10 shrink-0 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=400&auto=format&fit=crop" 
                alt="Model pink saree" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <Link 
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors flex items-center gap-1 w-full border-t border-white/10 pt-4 relative z-10"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Premium Fabrics */}
          <div className="lg:col-span-3 bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between items-start space-y-5">
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Quality Looms</span>
                <h4 className="font-heading text-lg font-bold text-primary leading-snug">Premium Fabrics For Every Creation</h4>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground font-medium">
                {['Luxurious Textures', 'Rich Dye Colors', 'Latest Jacquard Designs', 'Global Quality Standards'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-24 bg-muted rounded-xl overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=400&auto=format&fit=crop" 
                alt="Fabrics Stack" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <Link 
              to="/about"
              className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-border pt-4"
            >
              Discover More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: For Retailers */}
          <div className="lg:col-span-3 bg-accent/8 border border-accent/20 p-6 rounded-2xl flex flex-col justify-between items-start space-y-5 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">For Retailers</span>
              <h4 className="font-heading text-lg font-bold text-primary leading-snug">Grow Your Business With Us</h4>
              <p className="text-muted-foreground text-xs font-light">Reliable supply logs, exclusive collections.</p>
            </div>
            <div className="w-full h-28 bg-muted rounded-xl overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop" 
                alt="Showroom display" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <Link 
              to="/trade-enquiry"
              className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-border/60 pt-4"
            >
              Partner With Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: B2B portals */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {[
              { title: 'e-Quotation', desc: 'Get instant quotes for your lot requirements.', cta: 'Request Now', icon: Receipt, path: '/e-quotation' },
              { title: 'e-Auction', desc: 'Participate in exclusive wholesale auctions.', cta: 'View Auctions', icon: Gavel, path: '/e-auction' },
              { title: 'Trade Circular', desc: 'Stay updated with latest official releases.', cta: 'View Circulars', icon: FileText, path: '/trade-circular' },
            ].map((item, i) => (
              <div key={i} className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-center justify-between gap-4 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <div className="space-y-1">
                  <h5 className="font-heading font-bold text-foreground text-xs uppercase tracking-wider">{item.title}</h5>
                  <p className="text-[10px] text-muted-foreground leading-normal max-w-[150px] font-light">{item.desc}</p>
                  <Link to={item.path} className="text-[9px] font-bold text-accent hover:underline uppercase tracking-wider block pt-0.5">{item.cta} →</Link>
                </div>
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 border border-border">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Promos;
