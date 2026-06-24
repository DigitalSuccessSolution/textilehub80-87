import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', url: '#', icon: <FaFacebook size={14} /> },
        { name: 'Instagram', url: '#', icon: <FaInstagram size={14} /> },
        { name: 'LinkedIn', url: '#', icon: <FaLinkedin size={14} /> },
        { name: 'Twitter', url: '#', icon: <FaTwitter size={14} /> },
        { name: 'Pinterest', url: '#', icon: <FaPinterest size={14} /> },
    ];

    const webmails = [
        { label: 'General & Support', email: 'info@auroratextile.com' },
        { label: 'Trade Enquiries', email: 'trade@auroratextile.com' },
        { label: 'Customer Care', email: 'care@auroratextile.com' },
        { label: 'Careers & HR', email: 'careers@auroratextile.com' },
        { label: 'Management', email: 'management@auroratextile.com' },
    ];

    return (
        <footer className="bg-[#2E081B] text-white pt-16 pb-8 px-6 sm:px-12 lg:px-16 border-t border-[#C29E6B]/15 font-sans relative overflow-hidden">

            {/* Top Grid */}
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

                {/* Brand */}
                <div className="space-y-5 text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex items-center justify-center shrink-0 border border-[#C29E6B]/20 rounded-full bg-[#3E0F26]">
                            <span className="text-xs text-[#C29E6B]">✦</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-serif font-bold tracking-wider uppercase text-white">AURORA</span>
                            <span className="text-[8px] text-[#C29E6B] tracking-[0.2em] font-bold uppercase mt-0.5">TEXTILE HOUSE</span>
                        </div>
                    </div>
                    <p className="text-stone-300 text-xs leading-relaxed font-light">
                        Premium textiles, crafted for generations. Redefining small scale textile retailing with excellence, durability, and sustainable designs.
                    </p>
                    <div className="flex gap-2">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                className="w-7 h-7 rounded-full border border-white/10 text-stone-300 flex items-center justify-center hover:bg-[#9C4B6E] hover:text-white hover:border-[#9C4B6E] transition-all duration-300"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Company */}
                <div className="text-left">
                    <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.25em] text-[#C29E6B] font-serif">Company</h4>
                    <ul className="space-y-3 text-stone-300 text-xs font-light">
                        <li><Link to="/about" className="hover:text-[#C29E6B] transition-colors">About Us</Link></li>
                        <li><Link to="/management" className="hover:text-[#C29E6B] transition-colors">Our Journey</Link></li>
                        <li><Link to="/management" className="hover:text-[#C29E6B] transition-colors">Infrastructure</Link></li>
                        <li><Link to="/about" className="hover:text-[#C29E6B] transition-colors">Quality Assurance</Link></li>
                        <li><Link to="/media-gallery" className="hover:text-[#C29E6B] transition-colors">Media Gallery</Link></li>
                        <li><Link to="/career" className="hover:text-[#C29E6B] transition-colors">Careers</Link></li>
                    </ul>
                </div>

                {/* Collections */}
                <div className="text-left">
                    <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.25em] text-[#C29E6B] font-serif">Collections</h4>
                    <ul className="space-y-3 text-stone-300 text-xs font-light">
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Kurtis</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Sarees</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Linen</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Cottons</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Home Furnishing</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">All Collections</Link></li>
                    </ul>
                </div>

                {/* Trade Services */}
                <div className="text-left">
                    <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.25em] text-[#C29E6B] font-serif">Trade Services</h4>
                    <ul className="space-y-3 text-stone-300 text-xs font-light mb-6">
                        <li><Link to="/quotation" className="hover:text-[#C29E6B] transition-colors">e-quotation</Link></li>
                        <li><Link to="/auction" className="hover:text-[#C29E6B] transition-colors">e-auction</Link></li>
                        <li><Link to="/circular" className="hover:text-[#C29E6B] transition-colors">Trade Circular</Link></li>
                        <li><Link to="/trade-enquiry" className="hover:text-[#C29E6B] transition-colors">Trade Enquiry</Link></li>
                        <li><Link to="/notice-board" className="hover:text-[#C29E6B] transition-colors">Notice Board</Link></li>
                        <li><Link to="/faq" className="hover:text-[#C29E6B] transition-colors">FAQ</Link></li>
                    </ul>
                </div>

            </div>

            {/* Contact Details Row */}
            <div className="max-w-[1600px] mx-auto mt-10 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-stone-400 text-xs">

                {/* Address */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29E6B] block">Contact Us</span>
                    <div className="flex items-start gap-2.5">
                        <FaMapMarkerAlt className="text-[#C29E6B] shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed text-[11px]">
                            Aurora Textile House<br />
                            120, Textile Market, Surat - 395002<br />
                            108, Silk Street, Surat - 395003
                        </span>
                    </div>
                </div>

                {/* Phone & Timings */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29E6B] block">Helpline</span>
                    <div className="flex items-center gap-2.5">
                        <FaPhone className="text-[#C29E6B]" />
                        <a href="tel:+916353778329" className="hover:text-white transition-colors text-[11px] font-light">+91 63537 78329</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <FaClock className="text-[#C29E6B]" />
                        <span className="text-[11px] font-light">Mon - Sat: 10:00 AM - 8:00 PM</span>
                    </div>
                </div>

                {/* Emails col 1 */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29E6B] block">Support Channels</span>
                    <div className="space-y-1.5 text-[11px] font-light">
                        {webmails.slice(0, 3).map((m, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <FaEnvelope className="text-[#C29E6B] shrink-0" />
                                <a href={`mailto:${m.email}`} className="hover:text-white transition-colors">{m.email}</a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emails col 2 */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29E6B] block">Corporate</span>
                    <div className="space-y-1.5 text-[11px] font-light">
                        {webmails.slice(3).map((m, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <FaEnvelope className="text-[#C29E6B] shrink-0" />
                                <a href={`mailto:${m.email}`} className="hover:text-white transition-colors">{m.email}</a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="max-w-[1600px] mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-stone-500 text-[10px] uppercase tracking-widest gap-4">
                <p>© 2026 Aurora Textile House. All Rights Reserved.</p>
                <div className="flex gap-4">
                    <Link to="/faq" className="hover:text-stone-300">FAQ</Link>
                    <span>•</span>
                    <Link to="/contact" className="hover:text-stone-300">Locate Us</Link>
                    <span>•</span>
                    <Link to="/reviews" className="hover:text-stone-300">Reviews</Link>
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#3E0F26]/50 blur-2xl pointer-events-none" />
        </footer>
    );
};

export default Footer;
