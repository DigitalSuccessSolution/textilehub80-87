import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { name: 'Instagram', url: '#', icon: <FaInstagram size={14} /> },
        { name: 'Facebook', url: '#', icon: <FaFacebook size={14} /> },
        { name: 'LinkedIn', url: '#', icon: <FaLinkedin size={14} /> },
        { name: 'Twitter', url: '#', icon: <FaTwitter size={14} /> }
    ];

    return (
        <footer className="bg-[#10211F] text-white pt-20 pb-10 px-6 sm:px-12 lg:px-16 border-t border-[#C29E6B]/15 font-sans relative overflow-hidden">
            


            {/* ── 2. Footer Columns Grid ── */}
            <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 pb-16 border-b border-white/10 text-left">
                
                {/* Column 1: Brand Info */}
                <div className="col-span-2 lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-[#C29E6B]/20 rounded-full bg-[#0A1514]">
                            <span className="text-xs text-[#C29E6B]">✦</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-serif font-bold tracking-wider text-white leading-none">
                                AURORA
                            </span>
                            <span className="text-[8px] text-[#C29E6B] tracking-[0.2em] font-bold mt-0.5">
                                TEXTILE HOUSE
                            </span>
                        </div>
                    </div>
                    <p className="text-stone-300 text-xs leading-relaxed font-sans font-light max-w-xs">
                        Woven with pride. Delivered with purpose. Premium textiles, crafted for generations.
                    </p>
                    <div className="flex gap-2.5 pt-2">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                className="w-8 h-8 rounded-full border border-white/10 text-stone-300 flex items-center justify-center hover:bg-[#FAF6F2] hover:text-[#10211F] hover:border-white transition-all duration-300"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Company Links */}
                <div>
                    <h4 className="font-bold mb-6 text-xs  tracking-[0.25em] text-[#C29E6B] font-serif">
                        Company
                    </h4>
                    <ul className="space-y-3.5 text-stone-300 text-xs font-sans font-light">
                        <li><Link to="/about" className="hover:text-[#C29E6B] transition-colors">About Us</Link></li>
                        <li><Link to="/management" className="hover:text-[#C29E6B] transition-colors">Our Journey</Link></li>
                        <li><Link to="/management" className="hover:text-[#C29E6B] transition-colors">Infrastructure</Link></li>
                        <li><Link to="/about" className="hover:text-[#C29E6B] transition-colors">Quality Assurance</Link></li>
                    </ul>
                </div>

                {/* Column 3: Collections Links */}
                <div>
                    <h4 className="font-bold mb-6 text-xs  tracking-[0.25em] text-[#C29E6B] font-serif">
                        Collections
                    </h4>
                    <ul className="space-y-3.5 text-stone-300 text-xs font-sans font-light">
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Kurtis</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Sarees</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Suits</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Linen</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">Home Textiles</Link></li>
                        <li><Link to="/products" className="hover:text-[#C29E6B] transition-colors">View All</Link></li>
                    </ul>
                </div>

                {/* Column 4: Trade Services Links */}
                <div>
                    <h4 className="font-bold mb-6 text-xs  tracking-[0.25em] text-[#C29E6B] font-serif text-left">
                        Trade Services
                    </h4>
                    <ul className="space-y-3.5 text-stone-300 text-xs font-sans font-light text-left">
                        <li><Link to="/quotation" className="hover:text-[#C29E6B] transition-colors ">e-Quotation</Link></li>
                        <li><Link to="/auction" className="hover:text-[#C29E6B] transition-colors ">e-Auction</Link></li>
                        <li><Link to="/circular" className="hover:text-[#C29E6B] transition-colors">Trade Circular</Link></li>
                        <li><Link to="/trade-enquiry" className="hover:text-[#C29E6B] transition-colors">Private Label</Link></li>
                    </ul>
                </div>

                {/* Column 5: Network Links */}
                <div>
                    <h4 className="font-bold mb-6 text-xs  tracking-[0.25em] text-[#C29E6B] font-serif text-left">
                        Network
                    </h4>
                    <ul className="space-y-3.5 text-stone-300 text-xs font-sans font-light text-left">
                        <li><Link to="/contact" className="hover:text-[#C29E6B] transition-colors">Our Stores</Link></li>
                        <li><Link to="/career" className="hover:text-[#C29E6B] transition-colors">Become a Partner</Link></li>
                        <li><Link to="/trade-enquiry" className="hover:text-[#C29E6B] transition-colors">Franchise Enquiry</Link></li>
                    </ul>
                </div>

            </div>

            {/* ── 3. Lower Contact & Copyright Details ── */}
            <div className="max-w-[1600px] mx-auto mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left text-stone-400 text-xs">
                
                {/* Store Address */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold  tracking-wider text-[#C29E6B] block">CONTACT US</span>
                    <div className="flex items-start gap-2.5">
                        <FaMapMarkerAlt className="text-[#C29E6B] shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed text-[11px] text-stone-300">
                            Aurora Textile House<br />
                            123, Textile Market, Ring Road,<br />
                            Surat - 395002, India
                        </span>
                    </div>
                </div>

                {/* Phone Helpline */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold  tracking-wider text-[#C29E6B] block">HELPLINE</span>
                    <div className="flex items-center gap-2.5">
                        <FaPhone className="text-[#C29E6B] shrink-0" />
                        <a href="tel:+919876543210" className="hover:text-white transition-colors text-[11px] font-light text-stone-300">+91 98765 43210</a>
                    </div>
                </div>

                {/* Email Channels */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold  tracking-wider text-[#C29E6B] block">SUPPORT CHANNELS</span>
                    <div className="flex items-center gap-2.5">
                        <FaEnvelope className="text-[#C29E6B] shrink-0" />
                        <a href="mailto:info@auroratextile.com" className="hover:text-white transition-colors text-[11px] font-light text-stone-300">info@auroratextile.com</a>
                    </div>
                </div>

            </div>

            <div className="max-w-[1600px] mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-stone-500 text-[10px]  tracking-widest gap-4">
                <p>© 2024 Aurora Textile House. All Rights Reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
