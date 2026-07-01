import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setIsMoreOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setIsMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Main nav links — exactly the first 6 pages in order
    const navLinks = [
        { name: 'Home',                  path: '/' },
        { name: 'About Us',              path: '/about' },
        { name: 'Contact Us',            path: '/contact' },
        { name: 'Product',               path: '/products' },
        { name: 'Our Retail Management', path: '/management' },
        { name: 'Trade Enquiry',         path: '/trade-enquiry' },
    ];

    // Remaining pages in order
    const moreLinks = [
        { name: 'e-Quotation',           path: '/quotation' },
        { name: 'e-Auction',             path: '/auction' },
        { name: 'Trade Circular',        path: '/circular' },
        { name: 'Blog',                  path: '/blog' },
        { name: 'Notice Board',          path: '/notice-board' },
        { name: 'Career',                path: '/career' },
        { name: 'Customer Review',       path: '/reviews' },
        { name: 'Business Media Gallery', path: '/media-gallery' },
        { name: 'FAQ',                   path: '/faq' },
    ];

    // Helper: renders link name — keeps 'e-' , matches exact name capitalization for others
    const renderLinkName = (name) => {
        if (name.toLowerCase().startsWith('e-')) {
            const parts = name.split('-');
            const first = parts[0].toLowerCase();
            const rest = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : '';
            return <span><span className=" font-bold">{first}</span>-{rest}</span>;
        }
        return <span>{name}</span>;
    };

    return (
        <div className="fixed top-4 left-4 right-4 z-[999]">
            <nav className={`max-w-7xl mx-auto bg-white/95 border border-stone-200/60 shadow-lg transition-all duration-300 ${isScrolled ? 'py-2 px-6 rounded-full' : 'py-3.5 px-8 rounded-[2.5rem]'}`}>
                <div className="flex justify-between items-center shrink-0">
                    
                    {/* ── Logo Branding (Left) ── */}
                    <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10211F] border border-[#C29E6B]/20 group-hover:border-[#C29E6B] transition-colors relative">
                            <span className="text-[10px] text-[#C29E6B] font-sans">✦</span>
                        </div>
                        <div className="flex flex-col text-left leading-none">
                            <span className="text-sm font-serif font-bold tracking-wider text-[#10211F]">
                                AURORA
                            </span>
                            <span className="text-[8px] text-[#2C443E] tracking-[0.25em] font-bold mt-0.5">
                                TEXTILE HOUSE
                            </span>
                        </div>
                    </Link>

                    {/* ── Desktop Main Navigation ── */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative text-[11px] font-sans font-bold tracking-wider transition-colors ${
                                        isActive ? 'text-[#2C443E]' : 'text-stone-600 hover:text-[#2C443E]'
                                    }`}
                                >
                                    {renderLinkName(link.name)}
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
                            <button
                                className="flex items-center gap-1 text-[11px] font-sans font-bold tracking-wider text-stone-600 hover:text-[#2C443E] transition-colors cursor-pointer"
                            >
                                More
                                <ChevronDown size={10} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isMoreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-3 bg-white rounded-3xl border border-stone-200/60 shadow-2xl p-4 min-w-[200px] z-50 space-y-1 text-left"
                                    >
                                        {moreLinks.map((link) => {
                                            const isLinkActive = location.pathname === link.path;
                                            return (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    className={`block px-4 py-2.5 rounded-xl hover:bg-[#FAF6F2] text-stone-700 hover:text-[#2C443E] transition-colors text-[10px] font-sans font-bold tracking-wider ${
                                                        isLinkActive ? 'text-[#2C443E] bg-[#FAF6F2]' : ''
                                                    }`}
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

                    {/* ── Desktop CTAs (Right) ── */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={() => navigate('/quotation')}
                            className="flex items-center gap-2.5 px-6 py-3 bg-[#10211F] hover:bg-[#2C443E] text-white text-[10px] font-bold tracking-[0.2em] rounded-full transition-all cursor-pointer shadow-md"
                        >
                            Request Quote
                            <span className="text-white">→</span>
                        </button>
                        
                        <button
                            onClick={() => navigate('/contact')}
                            className="w-10 h-10 rounded-full bg-[#10211F] text-white flex items-center justify-center border border-white/10 hover:bg-[#2C443E] transition-colors cursor-pointer"
                        >
                            <span className="text-xs">✦</span>
                        </button>
                    </div>

                    {/* ── Mobile Hamburger Menu ── */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-[#10211F] hover:bg-stone-50 transition-colors z-[110] relative"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>

                </div>
            </nav>

            {/* ── Mobile Dropdown Menu Overlay ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-[#FAF6F2] z-[998] flex flex-col pt-32 px-6 sm:px-12 pb-12 overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-4 text-center items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-serif font-bold tracking-widest text-[#10211F] hover:text-[#C29E6B] py-2"
                                >
                                    {renderLinkName(link.name)}
                                </Link>
                            ))}

                            <div className="w-12 h-[1px] bg-[#C29E6B]/30 my-4"></div>
                            
                            <span className="text-[10px] font-sans font-bold tracking-widest text-[#C29E6B] pb-2 block">
                                More Portals
                            </span>
                            
                            {moreLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-sans font-bold tracking-wider text-stone-500 hover:text-[#10211F] py-2"
                                >
                                    {renderLinkName(link.name)}
                                </Link>
                            ))}
                            
                            <div className="pt-8 w-full px-8 sm:px-12">
                                <button
                                    onClick={() => { navigate('/quotation'); setIsOpen(false); }}
                                    className="w-full py-4 bg-[#2C443E] text-white text-[10px] font-bold tracking-widest rounded-full shadow-xl cursor-pointer hover:bg-[#10211F] transition-colors"
                                >
                                    Request e-Quotation
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
