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
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-8 mb-6 lg:mb-0">
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
                <span className="text-[10px] text-accent tracking-[0.25em] font-bold">Textile Mall</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-6 max-w-xs">
              Empowering businesses and preserving textiles through trust, quality, and tradition.
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
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-sm font-bold tracking-widest text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Retail Management', path: '/our-retail-management' },
                { name: 'Product', path: '/product' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'e-quotation', path: '/e-quotation' },
                { name: 'e-auction', path: '/e-auction' },
              ].map((l, i) => (
                <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources & Help */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-accent mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-white/60 font-light">
                {[
                  { name: 'Trade Circular', path: '/trade-circular' },
                  { name: 'Notice Board', path: '/notice-board' },
                  { name: 'Customer Review', path: '/customer-review' },
                  { name: 'Business Media Gallery', path: '/business-media-gallery' },
                ].map((l, i) => (
                  <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest text-accent mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-white/60 font-light">
                {[
                  { name: 'Blog', path: '/blog' },
                  { name: 'Career', path: '/career' },
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Contact Us', path: '/contact' },
                ].map((l, i) => (
                  <li key={i}><Link to={l.path} className="hover:text-accent transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-3 mt-6 lg:mt-0">
            <h4 className="text-sm font-bold tracking-widest text-accent mb-6">Contact Us</h4>
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
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <span>© 2026 Aurora Textile Mall. All Rights Reserved.</span>
          <span>GST No: 24AAACT0012K125 | Powered by B2B Solutions</span>
        </div>
      </div>

      {/* Floating Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-white px-5 py-3 rounded-full text-sm font-bold tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform border border-white/20 hover:bg-accent/90"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg> 
          Live Chat
        </a>
      </div>
      
      {/* WhatsApp Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform border-2 border-white">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
