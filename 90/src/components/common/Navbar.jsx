import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Helper: renders link name as written
const renderLinkName = (name) => {
    return <span>{name}</span>;
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); setIsMoreOpen(false); }, [location]);

    // Main nav
    const navLinks = [
        { name: 'Home',                  path: '/' },
        { name: 'About Us',              path: '/about' },
        { name: 'Contact Us',            path: '/contact' },
        { name: 'Product',               path: '/products' },
        { name: 'Our Retail Management', path: '/management' },
        { name: 'Trade Enquiry',         path: '/trade-enquiry' },
    ];

    // More dropdown links
    const moreLinks = [
        { name: 'e-Quotation',            path: '/quotation' },
        { name: 'e-Auction',              path: '/auction' },
        { name: 'Trade Circular',         path: '/circular' },
        { name: 'Blog',                   path: '/blog' },
        { name: 'Notice Board',           path: '/notice-board' },
        { name: 'Career',                 path: '/career' },
        { name: 'Customer Review',        path: '/reviews' },
        { name: 'Business Media Gallery', path: '/media-gallery' },
        { name: 'FAQ',                    path: '/faq' },
    ];

    return (
        <nav
            className="fixed w-full z-[100] bg-brand-emerald-dark border-b border-brand-gold/10 py-4 shadow-xl"
        >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex justify-between items-center">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 text-white group">
                    <div className="w-11 h-11 flex items-center justify-center shrink-0 border border-brand-gold/20 rounded-2xl bg-brand-emerald-medium transition-all duration-300 group-hover:border-brand-gold">
                        <span className="font-serif text-white font-black text-xl">KF</span>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-sans tracking-[0.25em] font-black uppercase text-white group-hover:text-brand-gold transition-colors duration-300">
                            KAAYA <span className="font-light text-brand-gold">FABRICS</span>
                        </span>
                        <span className="text-[8px] text-brand-gold-pale/50 tracking-[0.3em] uppercase">
                            FINE WEAVES & ETHNIC TEXTILES
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[10px] tracking-[0.2em] font-bold transition-all duration-300 relative py-1.5 ${isActive ? 'text-brand-gold' : 'text-brand-linen/70 hover:text-white'}`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="navUnderline"
                                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold"
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* More Dropdown */}
                    <div
                        ref={moreRef}
                        className="relative"
                        onMouseEnter={() => setIsMoreOpen(true)}
                        onMouseLeave={() => setIsMoreOpen(false)}
                    >
                        <button className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-bold text-brand-linen/70 hover:text-white transition-colors duration-300 py-1.5 focus:outline-none">
                            More
                            <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${isMoreOpen ? 'rotate-180 text-brand-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {isMoreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full right-0 mt-2 bg-brand-emerald-medium border border-brand-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] py-3 min-w-[240px] rounded-xl"
                                >
                                    {moreLinks.map((link) => {
                                        const isSubActive = location.pathname === link.path;
                                        return (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className={`block px-6 py-2.5 text-[10px] tracking-[0.2em] font-bold transition-all duration-200 border-l-2 ${isSubActive ? 'border-brand-gold bg-brand-emerald-dark text-brand-gold' : 'border-transparent text-brand-linen/70 hover:bg-brand-emerald-dark hover:text-white hover:border-brand-gold/40'}`}
                                            >
                                                {renderLinkName(link.name)}
                                            </Link>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-brand-linen hover:text-brand-gold focus:outline-none transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 top-[68px] bottom-0 bg-brand-emerald-dark py-8 px-6 lg:hidden flex flex-col gap-6 shadow-2xl z-[90] overflow-y-auto visible-scrollbar"
                    >
                        <div className="flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[11px] tracking-[0.2em] font-bold py-1 ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-linen/70 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="border-t border-brand-gold/10 pt-6 flex flex-col gap-4 text-center">
                            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-gold/50">More Pages</span>
                            <div className="grid grid-cols-2 gap-3 text-center">
                                {moreLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-[10px] tracking-[0.2em] font-bold py-1 ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-linen/60 hover:text-white'}`}
                                    >
                                        {renderLinkName(link.name)}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            to="/trade-enquiry"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-emerald-dark font-black text-[10px] tracking-[0.25em] transition-all rounded-xl shadow-lg shadow-brand-gold/10"
                        >
                            Trade Enquiry
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
