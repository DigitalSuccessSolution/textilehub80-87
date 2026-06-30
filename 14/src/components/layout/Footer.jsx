import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, MessageCircle, Video, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C1E16] text-[#EAE0D5] pt-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>



      <div className="container-custom pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-transparent text-primary border border-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-white leading-none tracking-tight">TEXMART</h2>
                <span className="text-xs md:text-xs text-primary capitalize tracking-widest font-bold">Textile Retail Mall</span>
              </div>
            </Link>
            <p className="text-sm text-[#EAE0D5]/70 font-light leading-relaxed mb-8">
              Empowering businesses and preserving textiles through trust, quality, and tradition. We bring generations of craftsmanship to the modern retail landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#EAE0D5] hover:bg-primary hover:border-primary hover:text-white transition-all"><Share2 className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#EAE0D5] hover:bg-primary hover:border-primary hover:text-white transition-all"><MessageCircle className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#EAE0D5] hover:bg-primary hover:border-primary hover:text-white transition-all"><Mail className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#EAE0D5] hover:bg-primary hover:border-primary hover:text-white transition-all"><Send className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold capitalize tracking-widest text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#EAE0D5]/70 font-light">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/our-retail-management" className="hover:text-accent transition-colors">Retail Management</Link></li>
              <li><Link to="/product" className="hover:text-accent transition-colors">Product Gallery</Link></li>
              <li><Link to="/trade-enquiry" className="hover:text-accent transition-colors">Trade Enquiry</Link></li>
              <li><Link to="/e-quotation" className="hover:text-accent transition-colors">e-quotation</Link></li>
              <li><Link to="/e-auction" className="hover:text-accent transition-colors">e-auction</Link></li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold capitalize tracking-widest text-primary mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-[#EAE0D5]/70 font-light">
              <li><Link to="/trade-circular" className="hover:text-accent transition-colors">Trade Circulars</Link></li>
              <li><Link to="/notice-board" className="hover:text-accent transition-colors">Notice Board</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/customer-review" className="hover:text-accent transition-colors">Customer Review</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-4 mt-8 lg:mt-0">
            <h4 className="text-xs font-bold capitalize tracking-widest text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4 text-xs text-[#EAE0D5]/70 font-light">
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
                <Share2 className="w-4 h-4 text-accent shrink-0" />
                <span>www.texmart.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
