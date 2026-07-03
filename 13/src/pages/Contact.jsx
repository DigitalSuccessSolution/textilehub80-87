import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Contact Texmart</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            We are here to help you with your wholesale orders and enquiries.
          </p>
        </div>
      </div>
      <div className="container-custom pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Headquarters</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Texmart Textile Retail Mall<br />
                8th M.L. Textile Park,<br />
                Surat, Gujarat, India - 395002
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Helpline</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                1800 123 4567 (Toll Free)<br />
                +91 98765 43210 (WhatsApp)
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Email Desk</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                info@texmart.com (General)<br />
                b2b@texmart.com (Trade)
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Business Hours</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Monday - Saturday<br />
                10:00 AM - 7:00 PM (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Live Interactive Google Map */}
        <div className="w-full h-[450px] bg-muted rounded-2xl border border-border overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.694605929606!2d72.86336335!3d21.20512165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f24c30c3a2f%3A0xe7a5c8df59fcd7e0!2sTextile%20Market%2C%20Surat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1698585800000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Texmart Location Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
