import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-0 bg-slate-100 flex flex-col">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="WeavesMart Surat Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.012356123456!2d72.825123!3d21.192345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f123456789b%3A0x123456789b123456!2sRing+Road%2C+Surat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1592345678901!5m2!1sen!2sin"
          className="w-full h-full border-0 filter grayscale contrast-125 opacity-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Glassmorphism Card */}
      <div className="container-custom relative z-10 flex-grow flex items-center justify-end py-12 md:py-24">
        <div className="bg-primary/90 backdrop-blur-xl border border-white/20 p-8 md:p-12 w-full max-w-lg shadow-2xl text-primary-foreground">
          <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Concierge Desk</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Get In Touch</h1>
          
          <p className="text-slate-300 font-light text-sm mb-10 leading-relaxed">
            Reach out to our B2B coordinators to request private viewings of our 12 collections, or to discuss custom manufacturing requirements.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Headquarters</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Textile Trade Tower, Ring Road<br/>Surat, Gujarat - 395002
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Direct Line</h4>
                <a href="tel:+919876543210" className="text-xs text-slate-300 font-light hover:text-accent transition-colors">+91 98765 43210</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Email</h4>
                <a href="mailto:info@weavesmart.com" className="text-xs text-slate-300 font-light hover:text-accent transition-colors">info@weavesmart.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Hours</h4>
                <p className="text-xs text-slate-300 font-light">Mon - Sat: 09:30 AM - 07:00 PM IST</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <a href="/trade-enquiry" className="block w-full bg-accent hover:bg-white text-primary text-center py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300">
              Submit Trade Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
