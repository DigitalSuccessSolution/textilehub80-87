import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 border-t border-white/10 relative overflow-hidden">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

      <div className="container-custom pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-transparent text-accent border border-accent/40 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z" />
                </svg>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-white leading-none tracking-wider group-hover:text-accent transition-colors">AURORA</h2>
                <span className="text-[8px] md:text-[10px] text-accent uppercase tracking-[0.25em] font-bold">Textile Mall</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-8 max-w-xs">
              Empowering businesses and preserving textiles through trust, quality, and tradition. Bringing generations of craftsmanship to the modern retail landscape.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Retail Management', path: '/retail-management' },
                { name: 'Product Gallery', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
              ].map((l, i) => (
                <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources & Help */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-white/60 font-light">
                {[
                  { name: 'Trade Circulars', path: '/trade-circular' },
                  { name: 'Notice Board', path: '/notice-board' },
                  { name: 'Customer Review', path: '/reviews' },
                  { name: 'Media Gallery', path: '/media-gallery' },
                ].map((l, i) => (
                  <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-white/60 font-light">
                {[
                  { name: 'Blog', path: '/blog' },
                  { name: 'Careers', path: '/career' },
                  { name: 'Contact Us', path: '/contact' },
                ].map((l, i) => (
                  <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Contact Us</h4>
            <ul className="space-y-4 text-xs text-white/60 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Aurora Textile Mall, Block A, Textile Park, Surat, Gujarat, India – 395002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>1800 123 4567 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@auroramall.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <span>www.auroramall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-light">
          <span>© 2026 Aurora Textile Mall. All Rights Reserved.</span>
          <span>GST No: 24AAACT0012K125 | Powered by B2B Solutions</span>
        </div>
      </div>

      {/* Floating Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-accent text-white px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform border border-white/20 hover:bg-accent/90">
          <MessageCircle className="w-4 h-4" /> Live Chat
        </button>
      </div>
      
      {/* WhatsApp Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform border-2 border-white">
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
