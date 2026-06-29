import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, MessageCircle, Video, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t border-border mt-12 relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>



      <div className="container-custom pb-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-transparent text-primary border border-primary rounded-full flex items-center justify-center font-heading font-bold text-xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">Texmart</h2>
                <span className="text-[8px] md:text-[10px] text-accent uppercase tracking-widest font-bold">Textile Retail Mall</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
              Empowering businesses and preserving textiles through trust, quality, and tradition. We bring generations of craftsmanship to the modern retail landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/retail-management" className="hover:text-accent transition-colors">Retail Management</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Product Gallery</Link></li>
              <li><Link to="/trade-enquiry" className="hover:text-accent transition-colors">Trade Enquiry</Link></li>
              <li><Link to="/e-quotation" className="hover:text-accent transition-colors">e-Quotation</Link></li>
              <li><Link to="/e-auction" className="hover:text-accent transition-colors">e-Auction</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><Link to="/trade-circular" className="hover:text-accent transition-colors">Trade Circulars</Link></li>
              <li><Link to="/notice-board" className="hover:text-accent transition-colors">Notice Board</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/reviews" className="hover:text-accent transition-colors">Customer Review</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Help</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4 text-xs text-muted-foreground font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Texmart Textile Retail Mall, Block A, Textile Park, Surat, Gujarat, India - 395002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>1800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@texmart.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
