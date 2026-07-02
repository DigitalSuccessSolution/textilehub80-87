import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const RouterLink = Link;
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Award, Palette, ChevronDown, FileText, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'more' or null
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    // Exact sequence of 14 pages requested by user, with 'Page' word removed:
    const all14Pages = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Contact us', path: '/contact' },
        { name: 'Product', path: '/products' },
        { name: 'Our Retail Management', path: '/management' },
        { name: 'Trade Enquiry', path: '/trade-enquiry' },
        { name: 'e-Quotation', path: '/quotation', isE: true },
        { name: 'e-Auction', path: '/auction', isE: true },
        { name: 'Trade Circular', path: '/circular' },
        { name: 'Blog', path: '/blog' },
        { name: 'Notice Board', path: '/notice-board' },
        { name: 'Career', path: '/career' },
        { name: 'Customer Review', path: '/reviews' },
        { name: 'Business Media Gallery', path: '/media-gallery' }
    ];

    // Primary inline links for desktop (first 6)
    const primaryLinks = all14Pages.slice(0, 6);
    // Remaining links placed inside 'More' dropdown (last 8)
    const moreLinks = all14Pages.slice(6);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                isScrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
            }`}>
                <nav className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center relative">
                    
                    {/* ── Logo & Brand Name ── */}
                    <RouterLink to="/" className="group flex items-center gap-3 text-left shrink-0">
                        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-brand-lavender text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="2.5" className="fill-white/20" />
                                <path d="M12 2a2 2 0 0 1 2 2c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 0 1 2-2z" />
                                <path d="M12 22a2 2 0 0 1-2-2c0-1.5 2-3 2-3s2 1.5 2 3a2 2 0 0 1-2 2z" />
                                <path d="M2 12a2 2 0 0 1 2-2c1.5 0 3 2 3 2s-2 2-3 2a2 2 0 0 1-2-2z" />
                                <path d="M22 12a2 2 0 0 1-2 2c-1.5 0-3-2-3-2s2-2 3-2a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-serif font-black uppercase tracking-[0.15em] text-brand-plum">
                                RETAIL <span className="text-brand-lavender font-light">TEXTILE</span>
                            </span>
                            <span className="text-[9px] text-brand-lavender font-sans tracking-[0.3em] font-bold uppercase mt-1">
                                MALL
                            </span>
                            <span className="text-[7px] text-brand-plum/50 tracking-[0.1em] font-sans uppercase mt-0.5">
                                SINCE 1998
                            </span>
                        </div>
                    </RouterLink>

                    {/* ── Desktop Inline Links (Mockup Navigation layout) ── */}
                    <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-brand-plum">
                        {primaryLinks.map((link) => (
                            <RouterLink 
                                key={link.name} 
                                to={link.path} 
                                className="hover:text-brand-lavender relative py-2 transition-colors"
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-lavender rounded-full" />
                                )}
                            </RouterLink>
                        ))}

                        {/* More Dropdown */}
                        <div 
                            className="relative py-2 group cursor-pointer"
                            onMouseEnter={() => setActiveDropdown('more')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-brand-lavender font-semibold text-xs focus:outline-none cursor-pointer">
                                More <ChevronDown size={12} className="text-brand-lavender group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'more' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 w-56 bg-brand-light border border-brand-gold/15 p-3 rounded-2xl shadow-xl flex flex-col gap-2 z-[110] text-left"
                                    >
                                        {moreLinks.map((link) => (
                                            <RouterLink 
                                                key={link.name} 
                                                to={link.path}
                                                className="px-3 py-2 text-[11px] font-medium text-brand-plum hover:bg-brand-lavender/10 hover:text-brand-lavender rounded-xl transition-all"
                                            >
                                                {link.isE ? (
                                                    <span><span className="lowercase font-bold">e</span>-{link.name.split('-')[1]}</span>
                                                ) : (
                                                    <span>{link.name}</span>
                                                )}
                                            </RouterLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ── Action Buttons & Switcher & Hamburger ── */}
                    <div className="flex items-center gap-3">
                        {/* Theme Customizer Trigger (Set className to "w-10 h-10 flex..." to reactivate) */}
                        <button
                            onClick={onOpenTheme}
                            className="hidden w-10 h-10 items-center justify-center rounded-full bg-brand-lavender/10 border border-brand-lavender/25 text-brand-lavender hover:bg-brand-lavender hover:text-brand-cream transition-all duration-300 cursor-pointer shadow-sm"
                            title="Switch Theme"
                        >
                            <Palette size={16} />
                        </button>

                        {/* e-Quotation CTA Button (Mockup layout matches) */}
                        <RouterLink
                            to="/quotation"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-plum text-brand-cream hover:bg-brand-lavender text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <FileText size={12} />
                            <span><span className="lowercase font-black">e</span>-Quotation</span>
                            <ArrowRight size={11} className="ml-1 opacity-70" />
                        </RouterLink>

                        {/* Hamburger Trigger (Hidden on Desktop) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex lg:hidden items-center justify-center rounded-full bg-brand-lavender hover:bg-brand-lavender-dark text-brand-cream shadow-md focus:outline-none transition-all duration-300 cursor-pointer"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>

                </nav>
            </div>

            {/* ── Mobile & Extended Sidebar Overlay Drawer ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black z-[98]"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-brand-cream border-l border-brand-gold/20 shadow-2xl z-[99] p-8 sm:p-12 overflow-y-auto flex flex-col justify-between visible-scrollbar"
                        >
                            <div className="space-y-10">
                                {/* Brand Header */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-lavender text-white">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <circle cx="12" cy="12" r="2.5" />
                                                <path d="M12 2a2 2 0 0 1 2 2c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 0 1 2-2z" />
                                                <path d="M12 22a2 2 0 0 1-2-2c0-1.5 2-3 2-3s2 1.5 2 3a2 2 0 0 1-2 2z" />
                                            </svg>
                                        </div>
                                        <span className="font-serif font-black uppercase text-base text-brand-plum tracking-wider">RETAIL TEXTILE</span>
                                    </div>
                                    <button 
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-brand-lavender hover:border-brand-lavender transition-colors cursor-pointer"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Exact Sequence List of 14 pages */}
                                <div className="space-y-6 text-left">
                                    <div className="grid grid-cols-1 gap-3.5">
                                        {all14Pages.map((link, index) => {
                                            const isActive = location.pathname === link.path;
                                            return (
                                                <RouterLink 
                                                    key={link.name} 
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-4 text-xs font-semibold py-1 border-b border-stone-100/40 hover:text-brand-lavender transition-colors ${
                                                        isActive ? 'text-brand-lavender' : 'text-brand-plum'
                                                    }`}
                                                >
                                                    <span className="text-[10px] font-sans font-light text-stone-400 w-5 shrink-0">
                                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                                    </span>
                                                    {link.isE ? (
                                                        <span><span className="lowercase font-bold">e</span>-{link.name.split('-')[1]}</span>
                                                    ) : (
                                                        <span>{link.name}</span>
                                                    )}
                                                </RouterLink>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="border-t border-brand-gold/15 pt-6 mt-8 space-y-4">
                                <div className="flex items-center gap-2 text-[10px] text-stone-500 font-sans tracking-wide">
                                    <Award size={12} className="text-brand-lavender" />
                                    <span>Premium B2B & Retail Textile Mall</span>
                                </div>
                                <p className="text-[9px] text-brand-plum/40 tracking-wider font-bold uppercase">
                                    © {new Date().getFullYear()} RETAIL TEXTILE MALL
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
