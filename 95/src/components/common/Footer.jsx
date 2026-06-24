import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Journey', path: '/about' },
    { name: 'Our Retail Management', path: '/management' },
    { name: 'Career Page', path: '/career' },
  ];

  const collectionsLinks = [
    { name: 'Sarees', path: '/products' },
    { name: 'Kurtis', path: '/products' },
    { name: 'Suits', path: '/products' },
    { name: 'Linen', path: '/products' },
    { name: 'Hosiery', path: '/products' },
    { name: 'Men\'s Wear', path: '/products' },
    { name: 'Home Furnishing', path: '/products' },
    { name: 'Kids Wear', path: '/products' },
  ];

  const tradeServicesLinks = [
    { name: <><span className="lowercase font-bold">e</span>-Quotation</>, path: '/quotation' },
    { name: <><span className="lowercase font-bold">e</span>-Auction</>, path: '/auction' },
    { name: 'Trade Circular', path: '/circular' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
  ];

  const networkLinks = [
    { name: 'Our Stores', path: '/media-gallery' },
    { name: 'Become a Partner', path: '/trade-enquiry' },
    { name: 'Notice Board', path: '/notice-board' },
  ];

  return (
    <footer className="relative bg-brand-cream text-brand-plum font-sans pt-12 overflow-hidden">
      
      {/* ── Wavy Divider Vector (Mockup Curve Style) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] text-brand-gold/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Main Footer Container */}
      <div className="relative bg-brand-cream border-t border-brand-gold/20 pt-20 pb-12 px-6 sm:px-10 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-plum/10">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:pr-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-lavender text-white">
                <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="M12 2a2 2 0 0 1 2 2c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 0 1 2-2z" />
                  <path d="M12 22a2 2 0 0 1-2-2c0-1.5 2-3 2-3s2 1.5 2 3a2 2 0 0 1-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-serif font-black uppercase tracking-wider text-brand-plum">
                RETAIL <span className="text-brand-lavender font-light">TEXTILE MALL</span>
              </h3>
            </div>
            <p className="text-xs text-brand-plum/80 leading-relaxed font-light">
              Woven with tradition. Delivered with pride. Your premium B2B and retail textile hub since 1998, curating the finest fabrics across India.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-brand-plum/10 flex items-center justify-center text-brand-plum hover:bg-brand-lavender hover:text-white hover:border-brand-lavender transition-colors"><FaFacebookF size={12} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-brand-plum/10 flex items-center justify-center text-brand-plum hover:bg-brand-lavender hover:text-white hover:border-brand-lavender transition-colors"><FaInstagram size={12} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-brand-plum/10 flex items-center justify-center text-brand-plum hover:bg-brand-lavender hover:text-white hover:border-brand-lavender transition-colors"><FaLinkedinIn size={12} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-brand-plum/10 flex items-center justify-center text-brand-plum hover:bg-brand-lavender hover:text-white hover:border-brand-lavender transition-colors"><FaYoutube size={12} /></a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lavender mb-5 font-serif">Company</h4>
            <ul className="space-y-3.5 text-xs">
              {companyLinks.map((link, idx) => (
                <li key={idx}><Link to={link.path} className="text-brand-plum/80 hover:text-brand-lavender transition-colors font-medium">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Collections links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lavender mb-5 font-serif">Collections</h4>
            <ul className="grid grid-cols-1 gap-3.5 text-xs">
              {collectionsLinks.map((link, idx) => (
                <li key={idx}><Link to={link.path} className="text-brand-plum/80 hover:text-brand-lavender transition-colors font-medium">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Trade Services links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lavender mb-5 font-serif">Trade Services</h4>
            <ul className="space-y-3.5 text-xs font-medium">
              {tradeServicesLinks.map((link, idx) => (
                <li key={idx}><Link to={link.path} className="text-brand-plum/80 hover:text-brand-lavender transition-colors">{link.name}</Link></li>
              ))}
              <li className="pt-2 border-t border-brand-plum/5 space-y-2.5">
                <span className="text-[9px] uppercase tracking-wider text-stone-500 font-bold block">Network Directories</span>
                {networkLinks.map((link, idx) => (
                  <Link key={idx} to={link.path} className="block text-brand-plum/80 hover:text-brand-lavender transition-colors">{link.name}</Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4 text-xs font-medium">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lavender mb-5 font-serif">Contact Us</h4>
            
            <div className="flex gap-2.5 items-start text-brand-plum/80">
              <FaMapMarkerAlt className="text-brand-lavender shrink-0 mt-0.5" size={12} />
              <span className="leading-relaxed text-[11px] text-left">
                Retail Textile Mall,<br />
                120, Textile Market,<br />
                Ring Road, Surat - 395002
              </span>
            </div>

            <div className="flex gap-2.5 items-center text-brand-plum/80">
              <FaPhoneAlt className="text-brand-lavender shrink-0" size={11} />
              <a href="tel:+916353778329" className="hover:text-brand-lavender transition-colors">+91 63537 78329</a>
            </div>

            <div className="flex gap-2.5 items-center text-brand-plum/80">
              <FaEnvelope className="text-brand-lavender shrink-0" size={11} />
              <a href="mailto:info@retailtextilemall.com" className="hover:text-brand-lavender transition-colors truncate">info@retailtextilemall.com</a>
            </div>

            <div className="flex gap-2.5 items-center text-brand-plum/80 pt-2 border-t border-brand-plum/5">
              <FaClock className="text-brand-lavender shrink-0" size={11} />
              <span className="text-[10px] text-stone-500">Mon - Sat: 10:00 AM - 8:00 PM</span>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-between items-center text-brand-plum/40 text-[9px] uppercase tracking-widest font-black gap-4">
          <p>© {new Date().getFullYear()} Retail Textile Mall. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Premium Handloom Craftsmanship</span>
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
