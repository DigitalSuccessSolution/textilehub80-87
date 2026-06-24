import React from 'react';
import { ShieldCheck, Award, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-20 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16] z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">About Texmart</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            A Legacy of Textile Excellence since 1995. We bridge the gap between master weavers, modern mills, and discerning retailers across the globe.
          </p>
        </div>
      </div>

      {/* Hero Section Redesigned */}
      <section className="container-custom py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-muted rounded-[40px] transform -rotate-3 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" 
              alt="Weaving" 
              className="w-full h-[500px] object-cover rounded-[30px] shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border">
              <h4 className="font-heading text-4xl font-bold text-primary mb-1">20+</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Years Experience</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Weaving Excellence<br/>in Every Fabric
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
              Texmart started as a small trading house and has grown into a definitive partner for retail networks across India. Our commitment to quality and transparency has remained unchanged.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              We partner with over 500 retailers and serve 100+ cities, ensuring the finest fabrics reach every corner of the country.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-muted"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary/20"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-accent/20"></div>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">500+ Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Horizontal Cards */}
      <section className="bg-muted py-24 border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Philosophy</span>
            <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-6">Pillars of Our Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-border/50 p-8 flex items-start gap-6 rounded-[30px] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">Transparent dealings, fair pricing, and honest communication form the bedrock of our business relationships.</p>
              </div>
            </div>
            
            <div className="bg-white border border-border/50 p-8 flex items-start gap-6 rounded-[30px] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Award className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">A rigorous 5-point quality check ensures every yard of fabric meets international standards of excellence.</p>
              </div>
            </div>

            <div className="bg-white border border-border/50 p-8 flex items-start gap-6 rounded-[30px] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Partnership</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">We don't just supply; we partner with retailers, offering market insights and trend analysis to fuel mutual growth.</p>
              </div>
            </div>

            <div className="bg-white border border-border/50 p-8 flex items-start gap-6 rounded-[30px] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">Pioneering digital B2B trade with our advanced e-Quotation and live e-Auction platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-24 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-primary mb-6">Join the Texmart Network</h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-light mb-10 text-sm">
          Whether you're a boutique looking for exclusive collections or a large retailer seeking bulk supply, Texmart is your definitive textile partner.
        </p>
        <Link to="/trade-enquiry" className="bg-primary text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1">
          Submit Trade Enquiry <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
};

export default About;
