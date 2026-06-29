import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  const formatLabel = (label) => {
    if (label.toLowerCase().startsWith('e-')) {
      return <span>e-{label.slice(2).toUpperCase()}</span>;
    }
    return label.toUpperCase();
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Product', path: '/products' },
    { label: 'Our Retail Management', path: '/retail-management' },
    { label: 'Trade Enquiry', path: '/trade-enquiry' },
    { label: 'e-Quotation', path: '/e-quotation' },
    { label: 'e-Auction', path: '/e-auction' }
  ];

  const moreLinks = [
    { label: 'Trade Circular', path: '/trade-circular' },
    { label: 'Blog', path: '/blog' },
    { label: 'Notice Board', path: '/notice-board' },
    { label: 'Career', path: '/career' },
    { label: 'Customer Review', path: '/reviews' },
    { label: 'Business Media Gallery', path: '/media-gallery' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-border'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-transparent text-primary border border-primary rounded-full flex items-center justify-center font-heading font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">Texmart</span>
                <span className="text-[8px] text-accent uppercase tracking-[0.2em] font-bold">Textile Retail Mall</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className={`whitespace-nowrap text-[10px] font-bold tracking-widest flex items-center gap-1 transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {formatLabel(link.label)}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setMoreDropdownOpen(true)}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button className="whitespace-nowrap text-[10px] font-bold tracking-widest flex items-center gap-1 transition-colors text-foreground hover:text-primary cursor-pointer">
                  MORE <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:rotate-180 transition-transform" />
                </button>
                
                <AnimatePresence>
                  {moreDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 w-56 bg-white border border-border rounded-xl shadow-xl overflow-hidden py-2 z-50"
                    >
                      {moreLinks.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          className="block px-6 py-3 text-[11px] font-bold tracking-wider text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {formatLabel(item.label)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/trade-enquiry" className="bg-primary text-white hover:bg-primary/90 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors shadow-md">
                Trade Enquiry
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-primary p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-heading font-bold text-lg text-white">
                    T
                  </div>
                  <span className="font-heading text-lg font-bold text-primary">Texmart</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Drawer Body (scrollable) */}
              <div className="flex-1 overflow-y-auto visible-scrollbar px-6 py-4 mobile-scrollable-menu">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Link to="/e-quotation" onClick={() => setMobileMenuOpen(false)} className="border border-primary text-primary py-2.5 text-center text-xs font-bold rounded tracking-wider">
                    {formatLabel('e-Quotation')}
                  </Link>
                  <Link to="/e-auction" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white py-2.5 text-center text-xs font-bold rounded tracking-wider">
                    {formatLabel('e-Auction')}
                  </Link>
                </div>

                {/* All nav links in exact sequence */}
                <div className="flex flex-col gap-0.5 border-t border-slate-100 pt-4">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 px-1">Navigation</p>
                  {[...navLinks, ...moreLinks].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-bold py-3 px-2 rounded transition-colors flex justify-between items-center ${
                        location.pathname === link.path ? 'text-primary bg-muted' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                      }`}
                    >
                      <span>{formatLabel(link.label)}</span>
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
