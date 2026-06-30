import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Product', path: '/product' },
    { name: 'Our Retail Management', path: '/our-retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { 
      name: 'More', 
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'e-quotation', path: '/e-quotation' },
        { name: 'e-auction', path: '/e-auction' },
        { name: 'Trade Circular', path: '/trade-circular' },
        { name: 'Blog', path: '/blog' },
        { name: 'Notice Board', path: '/notice-board' },
        { name: 'Career', path: '/career' },
        { name: 'Customer Review', path: '/customer-review' },
        { name: 'Business Media Gallery', path: '/business-media-gallery' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-border'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-transparent text-primary border border-primary rounded-full flex items-center justify-center font-heading font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">TEXMART</span>
              <span className="text-xs text-accent capitalize tracking-[0.2em] font-bold">Textile Retail Mall</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group px-2 py-2">
                <Link 
                  to={link.path} 
                  className={`whitespace-nowrap text-xs font-bold tracking-widest flex items-center gap-1 transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {/* Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.dropdownItems.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          className="block px-6 py-3 text-sm font-bold tracking-wider text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/trade-enquiry" className="bg-[#B8860B] text-white hover:bg-[#B8860B]/90 px-6 py-2.5 rounded-sm text-xs font-bold capitalize tracking-widest transition-colors shadow-md">
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

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="container-custom py-4 max-h-[calc(100vh-80px)] overflow-y-auto pb-20 visible-scrollbar">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div key={index} className="flex flex-col border-b border-border/50 last:border-0 pb-2">
                <Link 
                  to={link.path} 
                  className={`py-3 text-sm font-bold tracking-widest flex justify-between items-center ${location.pathname === link.path ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-1 border-l-2 border-border ml-2 mb-2">
                    {link.dropdownItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        to={item.path} 
                        className="py-2 text-xs font-bold tracking-wider text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/trade-enquiry" 
              className="mt-4 bg-primary text-white text-center py-3 rounded-full text-sm font-bold capitalize tracking-widest shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trade Enquiry
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
