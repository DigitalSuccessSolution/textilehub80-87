import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Search, ShoppingCart, Phone, Globe, Lock
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
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CONTACT US', path: '/contact' },
    { 
      label: 'PRODUCT PAGE', 
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
    { label: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
    { label: 'TRADE ENQUIRY', path: '/trade-enquiry' },
    { label: 'e-Quotation', path: '/e-quotation' },
    { label: 'e-Auction', path: '/e-auction' },
    { label: 'TRADE CIRCULAR', path: '/trade-circular' },
    { label: 'BLOG PAGE', path: '/blog' },
    { label: 'NOTICE BOARD', path: '/notice-board' },
    { label: 'CAREER PAGE', path: '/career' },
    { label: 'CUSTOMER REVIEW', path: '/reviews' },
    { label: 'BUSINESS MEDIA GALLERY', path: '/media-gallery' }
  ];

  return (
    <>
      {/* 1. Utility Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200/60 text-[11px] py-2 hidden lg:block text-slate-500 font-light">
        <div className="container-custom flex justify-between items-center">
          <p className="opacity-95 flex items-center gap-1.5 font-medium"><Globe className="w-3.5 h-3.5 text-accent" /> Welcome to WeavesMart - Textile & Garment B2B Wholesale Retail Mall</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link to="/trade-enquiry" className="hover:text-accent transition-colors font-semibold">Trade Enquiry</Link>
              <Link to="/e-quotation" className="hover:text-accent transition-colors font-semibold">e-Quotation</Link>
              <Link to="/e-auction" className="hover:text-accent transition-colors font-semibold">e-Auction</Link>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-3.5 h-3.5 text-slate-400 hover:text-accent" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-3.5 h-3.5 text-slate-400 hover:text-accent" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-3.5 h-3.5 text-slate-400 hover:text-accent" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube className="w-3.5 h-3.5 text-slate-400 hover:text-accent" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Brand Bar */}
      <div className="bg-white border-b border-slate-100 py-4 hidden lg:block">
        <div className="container-custom flex justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 bg-primary flex flex-wrap p-1.5 rounded-lg shrink-0 gap-0.5 justify-center items-center shadow-md">
              <div className="w-3.5 h-3.5 bg-accent rounded-xs rotate-45"></div>
              <div className="w-3.5 h-3.5 bg-white rounded-xs"></div>
              <div className="w-3.5 h-3.5 bg-white rounded-xs"></div>
              <div className="w-3.5 h-3.5 bg-accent rounded-xs rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-tight text-primary leading-none">WeavesMart</span>
              <span className="text-[9px] tracking-wider text-accent font-bold uppercase mt-1">Textile & Garment B2B Retail Mall</span>
            </div>
          </Link>

          {/* Support Desk details */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-accent">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Customer Care</span>
              <a href="tel:+911234567890" className="text-xs font-bold text-slate-700 hover:text-accent transition-colors">+91 12345 67890</a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar (Sticky) */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 bg-primary ${
        isScrolled ? 'shadow-md py-1' : 'py-3'
      }`}>
        <div className="container-custom flex justify-between items-center">
          
          {/* Mobile Logo Only */}
          <Link to="/" className="flex lg:hidden items-center gap-2">
            <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
              <div className="font-heading text-sm font-bold text-primary-foreground">W</div>
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-primary-foreground">WeavesMart</span>
          </Link>

          {/* Desktop Central Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center w-full gap-2 xl:gap-3.5">
            {navLinks.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div 
                    key={idx} 
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-[10px] xl:text-[11px] font-bold tracking-wider text-white hover:text-accent/90 transition-colors whitespace-nowrap cursor-pointer">
                      {link.label} <ChevronDown className="w-3.5 h-3.5 text-accent" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === idx && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-52 bg-white border border-border shadow-xl rounded-md py-2 z-50"
                        >
                          {link.dropdown.map((item, itemIdx) => (
                            <Link 
                              key={itemIdx}
                              to={item.path}
                              className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-muted hover:text-accent transition-colors"
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
                  className="text-[10px] xl:text-[11px] font-bold tracking-wider text-white hover:text-accent/90 transition-colors py-2 block whitespace-nowrap"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Right Indicators & Drawer Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white fixed inset-x-0 top-[57px] bottom-0 z-40 overflow-y-auto px-6 py-8 border-t border-border flex flex-col gap-6"
            >
              {/* B2B Services Shortcut Mobile */}
              <div className="grid grid-cols-2 gap-3">
                <Link to="/e-quotation" className="border border-accent text-accent py-2 text-center text-xs font-bold rounded-md tracking-wider">
                  e-Quotation
                </Link>
                <Link to="/e-auction" className="bg-primary text-white py-2 text-center text-xs font-bold rounded-md tracking-wider">
                  e-Auction
                </Link>
              </div>

              {/* Navigation links Mobile */}
              <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
                {navLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={link.dropdown ? '/products' : link.path}
                    className="text-sm font-semibold py-3 text-slate-700 hover:text-accent border-b border-slate-50 flex justify-between items-center"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-300 text-xs">→</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
