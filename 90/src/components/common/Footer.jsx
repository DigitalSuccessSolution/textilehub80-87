import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/retailtextile', icon: <FaFacebook size={16} /> },
    { name: 'Instagram', url: 'https://instagram.com/retailtextile', icon: <FaInstagram size={16} /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/retailtextile', icon: <FaLinkedin size={16} /> },
    { name: 'Twitter', url: 'https://twitter.com/retailtextile', icon: <FaTwitter size={16} /> },
  ];

  return (
    <footer className="bg-brand-emerald-dark text-brand-linen pt-28 pb-12 px-6 sm:px-10 border-t border-brand-gold/10">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Branding Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-16 mb-16 border-b border-brand-gold/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center shrink-0 border border-brand-gold/20 rounded-2xl bg-brand-emerald-medium">
                <span className="font-serif text-brand-gold font-black text-xl">KF</span>
              </div>
              <h3 className="text-xl font-sans font-black tracking-[0.2em] uppercase text-white">
                KAAYA <span className="text-brand-gold font-light">FABRICS</span>
              </h3>
            </div>
            <p className="text-brand-linen/60 text-xs max-w-md font-sans font-light">
              India's premier destination for exquisite sarees, premium fabrics, home linen, and upholstery. Experience the pinnacle of artisan weaving.
            </p>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-16 border-b border-brand-gold/10">
          
          {/* About Column */}
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-[0.25em] text-brand-gold">Our Philosophy</h4>
            <p className="text-brand-linen/60 text-xs leading-relaxed mb-6 font-sans">
              We stand for purity of fabric, honest mill-direct pricing, and curated retail spaces designed to provide an unparalleled shopping journey.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-2xl border border-brand-gold/15 text-brand-linen/60 flex items-center justify-center hover:bg-brand-gold hover:text-brand-emerald-dark hover:border-brand-gold transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-[0.25em] text-brand-gold">Corporate</h4>
            <ul className="space-y-3.5 text-brand-linen/60 text-xs">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors duration-200">About Us</Link></li>
              <li><Link to="/management" className="hover:text-brand-gold transition-colors duration-200">Our Retail Management</Link></li>
              <li><Link to="/trade-enquiry" className="hover:text-brand-gold transition-colors duration-200">Trade Enquiry</Link></li>
              <li><Link to="/career" className="hover:text-brand-gold transition-colors duration-200">Career Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Portals Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-[0.25em] text-brand-gold">Services & Portals</h4>
            <ul className="space-y-3.5 text-brand-linen/60 text-xs">
              <li><Link to="/products" className="hover:text-brand-gold transition-colors duration-200">Product Collections</Link></li>
              <li><Link to="/quotation" className="hover:text-brand-gold transition-colors duration-200">e-Quotation Portal</Link></li>
              <li><Link to="/auction" className="hover:text-brand-gold transition-colors duration-200">e-Auction Center</Link></li>
              <li><Link to="/circular" className="hover:text-brand-gold transition-colors duration-200">Trade Circulars</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors duration-200">Atelier Journal</Link></li>
              <li><Link to="/notice-board" className="hover:text-brand-gold transition-colors duration-200">Public Notices</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-gold transition-colors duration-200">Customer Testimonials</Link></li>
              <li><Link to="/media-gallery" className="hover:text-brand-gold transition-colors duration-200">Press & Media Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-brand-gold transition-colors duration-200">Help & FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-6 text-xs tracking-[0.25em] text-brand-gold">Get in Touch</h4>
            <ul className="space-y-4 text-brand-linen/60 text-xs">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-brand-gold shrink-0 mt-0.5" />
                <span className="font-sans leading-relaxed">Kolkata, West Bengal, India</span>
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold font-black">Trade Enquiries</span>
                  <a href="mailto:trade-enquiry@retailtextile.com" className="hover:text-brand-gold transition-colors duration-200 truncate">
                    trade-enquiry@retailtextile.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold font-black">Customer Service</span>
                  <a href="mailto:customer-care@retailtextile.com" className="hover:text-brand-gold transition-colors duration-200 truncate">
                    customer-care@retailtextile.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand-gold shrink-0" />
                <a href="tel:+916353778329" className="hover:text-brand-gold transition-colors duration-200">+91 63537 78329</a>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-brand-gold shrink-0" />
                <span className="font-sans">Mon - Sat: 10 AM - 8 PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-brand-linen/40 text-[10px] uppercase tracking-widest gap-4 font-bold">
          <p>© {new Date().getFullYear()} Kaaya Fabrics. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
