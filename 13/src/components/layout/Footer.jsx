import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, MessageCircle, Video, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t border-border mt-12 relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>



      <div className="container-custom pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-transparent text-primary border border-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">TEXMART</h2>
                <span className="text-[8px] md:text-[10px] text-accent uppercase tracking-widest font-bold">Textile Retail Mall</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
              Empowering businesses and preserving textiles through trust, quality, and tradition. We bring generations of craftsmanship to the modern retail landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all"><Share2 className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all"><MessageCircle className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all"><Mail className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all"><Video className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
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

          {/* Resources & Support */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><Link to="/trade-circular" className="hover:text-accent transition-colors">Trade Circulars</Link></li>
                <li><Link to="/notice-board" className="hover:text-accent transition-colors">Notice Board</Link></li>
                <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                <li><Link to="/reviews" className="hover:text-accent transition-colors">Customer Review</Link></li>
                <li><Link to="/support" className="hover:text-accent transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Help & Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><Link to="/contact" className="hover:text-accent transition-colors">Live Chat</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
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
              <li className="flex items-center gap-3">
                <Video className="w-4 h-4 text-accent shrink-0" />
                <span>www.texmart.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-white px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform border border-white/20">
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
