import React from 'react';
import { ArrowRight, Star, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Magazine Style Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
            alt="Fashion Editorial" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-primary-foreground max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.3em] text-xs font-bold uppercase mb-6 block">The Exclusive Edit</span>
          <h1 className="font-heading text-6xl md:text-8xl font-bold leading-tight mb-8">
            Curating Elegance. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200 italic font-medium">12 Collections.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-300 mb-10 max-w-2xl mx-auto">
            Discover the pinnacle of textile craftsmanship and contemporary design. A premium B2B wholesale experience tailored for luxury retail.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link to="/products" className="bg-accent text-primary px-8 py-4 rounded-none font-bold tracking-widest text-sm uppercase hover:bg-white transition-colors duration-300">
              Explore Collections
            </Link>
            <Link to="/e-quotation" className="border border-white/30 px-8 py-4 rounded-none font-bold tracking-widest text-sm uppercase text-white hover:bg-white/10 transition-colors duration-300">
              Request <span className="normal-case">e</span>-Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Horizontal Scroll */}
      <section className="py-24 bg-white relative">
        <div className="container-custom mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary">The Signature 12</h2>
            <p className="text-slate-500 mt-2 font-light">Our most sought-after premium lines</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-accent font-bold text-sm tracking-wider uppercase hover:text-primary transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto visible-scrollbar pb-12 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 w-max">
            {[
              { name: 'Royal Silk', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop', desc: 'Handwoven Varanasi' },
              { name: 'Merino Suiting', img: 'https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=600&auto=format&fit=crop', desc: 'Italian Grade Wool' },
              { name: 'Egyptian Linen', img: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=600&auto=format&fit=crop', desc: '100% Giza Cotton' },
              { name: 'Velvet Luxe', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop', desc: 'Premium Upholstery' },
              { name: 'Bridal Brocade', img: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=600&auto=format&fit=crop', desc: 'Gold Zari Threads' }
            ].map((col, i) => (
              <Link to="/products" key={i} className="group relative w-80 h-[450px] overflow-hidden flex flex-col justify-end p-6 cursor-pointer block shrink-0">
                <img src={col.img} alt={col.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{col.desc}</p>
                  <h3 className="text-white font-heading text-2xl font-bold flex justify-between items-center">
                    {col.name}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Split Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <span className="text-accent font-bold tracking-widest uppercase text-xs">B2B Excellence</span>
              <h2 className="font-heading text-5xl font-bold text-primary leading-tight">
                Empowering Retailers with Seamless Supply.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-lg">
                We bridge the gap between world-class mills and premium retail outlets. With our advanced e-Auction and e-Quotation platforms, procuring high-end textiles has never been more transparent.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: TrendingUp, text: 'Real-time e-Auction platform for bulk lots' },
                  { icon: Award, text: 'Certified 12 Collections spanning all categories' },
                  { icon: Star, text: 'Dedicated Retail Management Support' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/about" className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                  Read Our Story
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1fac0840c2?q=80&w=800&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <p className="font-heading text-4xl font-bold text-primary mb-2">40+</p>
                <p className="text-sm text-slate-500 font-light">Years of legacy in weaving perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
