import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail 
} from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-slate-400 border-t border-slate-900 pt-16 pb-8 text-xs font-light">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1 - Brand - 4 cols */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#0C6C3E] flex items-center justify-center rounded-sm">
                <span className="font-heading font-bold text-white text-sm">W</span>
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">WeavesMart</span>
            </Link>
            <p className="leading-relaxed text-slate-400 max-w-sm">
              WeavesMart is India's premier B2B textile & garment retail mall, supplying high-grade fabrics, sarees, and furnishings to retail outlets nation-wide. Style and trust since 1985.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 bg-slate-900 border border-slate-800 hover:border-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 bg-slate-900 border border-slate-800 hover:border-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 bg-slate-900 border border-slate-800 hover:border-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" className="w-8 h-8 bg-slate-900 border border-slate-800 hover:border-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Column 2 - Company Links - 2 cols */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-[11px]">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Legacy</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Infrastructure</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services - 2 cols */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-[11px]">Our Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/retail-management" className="hover:text-accent transition-colors">Our Retail Management</Link></li>
              <li><Link to="/trade-enquiry" className="hover:text-accent transition-colors">Trade Enquiry</Link></li>
              <li><Link to="/e-quotation" className="hover:text-accent transition-colors">e-Quotation</Link></li>
              <li><Link to="/e-auction" className="hover:text-accent transition-colors">e-Auction</Link></li>
            </ul>
          </div>

          {/* Column 4 - Links - 2 cols */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-[11px]">Important Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/trade-circular" className="hover:text-accent transition-colors">Trade Circular</Link></li>
              <li><Link to="/notice-board" className="hover:text-accent transition-colors">Notice Board</Link></li>
              <li><Link to="/career" className="hover:text-accent transition-colors">Career</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5 - Contact - 2 cols */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-[11px]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent" />
                <a href="tel:+911234567890" className="hover:text-accent transition-colors leading-tight">+91 12345 67890</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent" />
                <a href="mailto:info@weavesmart.com" className="hover:text-accent transition-colors leading-tight">info@weavesmart.com</a>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent" />
                <span>Head Office:<br />Surat, Gujarat, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex justify-center items-center">
          <p>© 2026 WeavesMart Retail Mall. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
