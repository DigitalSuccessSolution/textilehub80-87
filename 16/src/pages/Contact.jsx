import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Contact Aurora Textile Mall</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            We are here to help you with your wholesale orders and B2B inquiries.
          </p>
        </div>
      </div>
      <div className="container-custom pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md hover:border-accent/20 transition-all">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Headquarters</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Aurora Textile Mall<br/>
                8th M.L. Textile Park,<br/>
                Surat, Gujarat, India - 395002
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md hover:border-accent/20 transition-all">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Helpline</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                1800 123 4567 (Toll Free)<br/>
                +91 98765 43210 (WhatsApp)
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md hover:border-accent/20 transition-all">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Email Desk</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                info@auroramall.com (General)<br/>
                b2b@auroramall.com (Trade)
              </p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md hover:border-accent/20 transition-all">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Business Hours</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Monday - Saturday<br/>
                10:00 AM - 7:00 PM (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-96 bg-muted rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"></div>
          <div className="relative z-10 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg border border-white flex flex-col items-center">
            <MapPin className="w-8 h-8 text-accent mb-2" />
            <h4 className="font-bold text-primary text-lg mb-1">Surat Textile Hub</h4>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Interactive Map Disabled</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
