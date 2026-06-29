import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Exact required pages list in sequence
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { 
      label: 'Product', 
      path: '/products',
      dropdown: [
        { label: 'Sarees', path: '/products?cat=Sarees' },
        { label: 'Leggings', path: '/products?cat=Leggings' },
        { label: 'Kurtis', path: '/products?cat=Kurtis' },
        { label: 'Dress Suits', path: '/products?cat=Dress%20Suits' },
        { label: 'Bedsheets & Linen', path: '/products?cat=Bedsheets%20%26%20Linen' },
        { label: 'Hosiery Items', path: '/products?cat=Hosiery%20Items' },
        { label: 'Suiting', path: '/products?cat=Suiting' },
        { label: 'Shirting', path: '/products?cat=Shirting' },
        { label: 'Formal & Ethnic Wear for Women', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Women' },
        { label: 'Formal & Ethnic Wear for Men', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Men' },
        { label: 'Formal & Ethnic Wear for Children', path: '/products?cat=Formal%20%26%20Ethnic%20Wear%20for%20Children' },
        { label: 'Home Upholstery & Furnishing', path: '/products?cat=Home%20Upholstery%20%26%20Furnishing' }
      ]
    },
    { label: 'Our Retail Management', path: '/retail-management' },
    { label: 'Trade Enquiry', path: '/trade-enquiry' },
    { label: 'e-Quotation', path: '/e-quotation' },
    { label: 'e-Auction', path: '/e-auction' },
    { label: 'Trade Circular', path: '/trade-circular' },
    { label: 'Blog', path: '/blog' },
    { label: 'Notice Board', path: '/notice-board' },
    { label: 'Career', path: '/career' },
    { label: 'Customer Review', path: '/reviews' },
    { label: 'Business Media Gallery', path: '/media-gallery' },
    { label: 'FAQ', path: '/faq' }
  ];

  // First 8 items go to main header, items 9-15 go to 'More' dropdown
  const mainLinks = navLinks.slice(0, 8);
  const moreLinks = navLinks.slice(8);

  return (
    <>
      {/* 1. Slim Utility Top Bar */}
      <div className="bg-[#0b0f19] text-[11px] py-2.5 hidden lg:block text-slate-400 border-b border-slate-900 font-light">
        <div className="container-custom flex justify-between items-center">
          <p className="flex items-center gap-1.5 font-medium">
            <Globe className="w-3.5 h-3.5 text-accent animate-pulse" /> Welcome to WeavesMart - Textile & Garment B2B Wholesale Retail Mall
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-accent" /> Customer Care: +91 12345 67890
            </a>
            {/* Social Icons */}
            <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5 text-slate-500 hover:text-white" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5 text-slate-500 hover:text-white" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5 text-slate-500 hover:text-white" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5 text-slate-500 hover:text-white" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cohesive Navigation Bar (Sticky) */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 ${
        isScrolled ? 'shadow-md py-3' : 'py-5'
      }`}>
        <div className="container-custom flex justify-between items-center gap-4">
          
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-primary grid grid-cols-2 p-1 rounded shrink-0 gap-1 justify-items-center items-center shadow-md overflow-hidden">
              <div className="w-3 h-3 bg-accent rounded-xs rotate-45"></div>
              <div className="w-3 h-3 bg-white rounded-xs"></div>
              <div className="w-3 h-3 bg-white rounded-xs"></div>
              <div className="w-3 h-3 bg-accent rounded-xs rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-tight text-primary leading-none">WeavesMart</span>
              <span className="text-[8px] tracking-wider text-accent font-bold mt-1 uppercase">B2B Wholesale</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3.5">
            {mainLinks.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div 
                    key={idx} 
                    className="relative py-1"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-0.5 text-xs font-bold text-slate-700 hover:text-accent transition-colors whitespace-nowrap cursor-pointer">
                      {link.label} <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === idx && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-60 bg-white border border-slate-100 shadow-xl rounded-md py-2 z-50"
                        >
                          {link.dropdown.map((item, itemIdx) => (
                            <Link 
                              key={itemIdx}
                              to={item.path}
                              className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors border-b border-slate-50/50 last:border-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link 
                  key={idx} 
                  to={link.path}
                  className="text-xs font-bold text-slate-700 hover:text-accent transition-colors py-1 block whitespace-nowrap"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* 'More' dropdown menu */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button className="flex items-center gap-0.5 text-xs font-bold text-slate-700 hover:text-accent transition-colors whitespace-nowrap cursor-pointer">
                More <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-56 bg-white border border-slate-100 shadow-xl rounded-md py-2 z-50"
                  >
                    {moreLinks.map((link, idx) => (
                      <Link 
                        key={idx}
                        to={link.path}
                        className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors border-b border-slate-50/50 last:border-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Right Action button */}
          <div className="hidden lg:block shrink-0">
            <Link to="/trade-enquiry" className="bg-[#0C6C3E] hover:bg-[#053B1F] text-white text-[11px] font-bold tracking-wider px-5 py-2.5 rounded transition-all shadow-sm">
              Trade Enquiry
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer — Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed inset-y-0 right-0 w-full bg-white z-[60] shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary grid grid-cols-2 p-1 rounded gap-1 justify-items-center items-center shadow-md overflow-hidden">
                    <div className="w-2.5 h-2.5 bg-accent rounded-xs rotate-45" />
                    <div className="w-2.5 h-2.5 bg-white rounded-xs" />
                    <div className="w-2.5 h-2.5 bg-white rounded-xs" />
                    <div className="w-2.5 h-2.5 bg-accent rounded-xs rotate-45" />
                  </div>
                  <span className="font-heading text-lg font-bold text-primary">WeavesMart</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Drawer Body (scrollable) */}
              <div className="flex-1 overflow-y-auto px-6 py-4 mobile-scrollable-menu">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Link to="/e-quotation" onClick={() => setMobileMenuOpen(false)} className="border border-[#0C6C3E] text-[#0C6C3E] py-2.5 text-center text-xs font-bold rounded tracking-wider">
                    e-Quotation
                  </Link>
                  <Link to="/e-auction" onClick={() => setMobileMenuOpen(false)} className="bg-[#0C6C3E] text-white py-2.5 text-center text-xs font-bold rounded tracking-wider">
                    e-Auction
                  </Link>
                </div>

                {/* All nav links */}
                <div className="flex flex-col gap-0.5 border-t border-slate-100 pt-4">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 px-1">Navigation</p>
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold py-3 px-2 text-slate-700 hover:bg-slate-50 hover:text-accent rounded transition-colors flex justify-between items-center"
                    >
                      <span>{link.label}</span>
                      <span className="text-slate-300 text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
};

export default Header;

