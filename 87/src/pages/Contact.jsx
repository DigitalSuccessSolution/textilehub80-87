import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
    useSEO(
        'Contact Us',
        'Get in touch with Aurora Textile House. Call, email, or visit our showroom. Trade & retail enquiries welcome.',
        'contact aurora textile, showroom address, trade enquiry, email, google map'
    );

    const contactChannels = [
        {
            icon: Mail,
            label: 'General Support',
            title: 'Email Care',
            value: 'care@auroratextile.com',
            link: 'mailto:care@auroratextile.com',
            cta: 'Send Email',
            desc: 'We respond within 24 business hours.',
            dark: true,
        },
        {
            icon: Mail,
            label: 'Trade Desk',
            title: 'Trade Email',
            value: 'trade@auroratextile.com',
            link: 'mailto:trade@auroratextile.com',
            cta: 'Email Trade',
            desc: 'For wholesale, quotations & bulk orders.',
            dark: false,
        },
        {
            icon: Phone,
            label: 'Call Showroom',
            title: 'Phone Contact',
            value: '+91 63537 78329',
            link: 'tel:+916353778329',
            cta: 'Call Now',
            desc: 'Mon – Sat, 10:00 AM – 8:00 PM.',
            dark: true,
        },
        {
            icon: MessageCircle,
            label: 'Quick Chat',
            title: 'WhatsApp Chat',
            value: '+91 63537 78329',
            link: 'https://wa.me/916353778329',
            cta: 'Start WhatsApp Chat',
            desc: 'Quick responses during business hours.',
            dark: false,
        },
    ];

    const infoCards = [
        {
            icon: MapPin,
            label: 'Showroom Address',
            lines: ['Aurora Textile House', '120, Textile Market, Surat - 395002'],
        },
        {
            icon: Clock,
            label: 'Business Hours',
            lines: ['Monday – Saturday', '10:00 AM – 8:00 PM IST', 'Closed on Sundays & Public Holidays'],
        },
    ];

    return (
        <div className="min-h-screen bg-[#FAF6F2] text-[#182220]">

            {/* ── Hero Header: Centered Elegant layout ── */}
            <section className="pt-40 pb-20 bg-[#FAF4EE] border-b border-[#C29E6B]/20 px-6 sm:px-12 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FAF0E6]/60 blur-3xl pointer-events-none" />
                <div className="max-w-4xl mx-auto space-y-4 relative z-10">
                    <span className="text-[9px] font-sans font-bold  tracking-[0.4em] text-[#2C443E] block">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif text-[#10211F]  tracking-tight leading-none">
                        Contact Our <span className="text-[#C29E6B] italic font-light  font-serif normal-case">showroom</span>
                    </h1>
                    <div className="w-12 h-[2px] bg-[#C29E6B] mx-auto mt-4" />
                    <p className="text-stone-500 text-xs sm:text-sm font-sans font-light max-w-lg mx-auto leading-relaxed pt-2">
                        For commercial trade orders, wholesale samples, or customer care enquiries, connect with our support desk coordinators.
                    </p>
                </div>
            </section>

            {/* ── Contact Channels (4 cards) ── */}
            <section className="py-16 md:py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[10px] font-bold  tracking-[0.3em] text-[#C29E6B] mb-2">Reach Us</p>
                        <h2 className="text-2xl md:text-3xl font-serif text-[#10211F]  tracking-wide">
                            Choose Your <span className="text-[#C29E6B] italic font-light">Channel</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactChannels.map((ch, idx) => {
                            const Icon = ch.icon;
                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col justify-between p-7 border transition-all duration-300 shadow-sm hover:shadow-xl hover:translate-y-[-4px] relative overflow-hidden group ${
                                        ch.dark
                                            ? 'bg-[#10211F] border-white/10 rounded-[2rem_0.5rem_2rem_0.5rem] hover:border-[#C29E6B] text-white'
                                            : 'bg-white border-stone-200 rounded-[0.5rem_2rem_0.5rem_2rem] hover:border-[#C29E6B]'
                                    }`}
                                >
                                    <div>
                                        <div className="mb-5">
                                            <Icon
                                                size={22}
                                                className="text-[#C29E6B]"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <p className="text-[9px]  tracking-[0.3em] font-black mb-1 text-[#C29E6B]">
                                            {ch.label}
                                        </p>
                                        <h3 className={`text-base font-serif  tracking-wide mb-3 ${ch.dark ? 'text-white' : 'text-[#10211F]'}`}>
                                            {ch.title}
                                        </h3>
                                        <p className={`text-xs font-sans font-semibold mb-2 break-all ${ch.dark ? 'text-white/80' : 'text-[#182220]'}`}>
                                            {ch.value}
                                        </p>
                                        <p className={`text-[11px] leading-relaxed ${ch.dark ? 'text-white/40' : 'text-stone-500'}`}>
                                            {ch.desc}
                                        </p>
                                    </div>
                                    <a
                                        href={ch.link}
                                        target={ch.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noreferrer"
                                        className={`mt-7 flex items-center gap-2 text-[10px] font-black  tracking-[0.25em] transition-colors ${
                                            ch.dark
                                                ? 'text-[#C29E6B] hover:text-white'
                                                : 'text-[#2C443E] hover:text-[#C29E6B]'
                                        }`}
                                    >
                                        {ch.cta}
                                        <ExternalLink size={11} strokeWidth={2.5} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Info Strip ── */}
            <section className="pb-16 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {infoCards.map(({ icon: Icon, label, lines }, idx) => (
                            <div
                                key={idx}
                                className="flex gap-5 items-start p-7 bg-white border border-stone-200 rounded-3xl hover:border-[#C29E6B] transition-all shadow-sm"
                            >
                                <div className="p-3 bg-[#10211F] rounded-xl flex-shrink-0">
                                    <Icon size={18} className="text-[#C29E6B]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[9px]  tracking-[0.3em] font-black text-[#C29E6B] mb-2">
                                        {label}
                                    </p>
                                    {lines.map((line, i) => (
                                        <p key={i} className={`font-sans ${i === 0 ? 'text-sm font-bold text-[#10211F]' : 'text-xs text-stone-500'} leading-relaxed`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Google Map Embed ── */}
            <section className="pb-16 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-3xl border border-stone-200 hover:border-[#C29E6B] transition-all shadow-sm">
                        <p className="text-[9px]  tracking-[0.3em] font-black text-[#C29E6B] mb-4">
                            Interactive Showroom Map
                        </p>
                        <div className="w-full h-80 rounded-2xl overflow-hidden border border-stone-100">
                            <iframe 
                                title="Aurora Showroom Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.273180456102!2d88.35678129999999!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027714413e56c3%3A0x2d69f64d08b7762a!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718451876523!5m2!1sen!2sin" 
                                className="w-full h-full border-0" 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trade Enquiry CTA ── */}
            <section className="pb-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#10211F] rounded-3xl px-8 py-14 md:py-16 text-center border border-white/5 relative overflow-hidden text-white shadow-xl">
                        <div
                            className="absolute inset-0 opacity-5 bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80')` }}
                        />
                        <div className="relative z-10">
                            <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] mb-4 block">
                                B2B Partners
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white  tracking-wide mb-4">
                                Looking for <span className="text-[#C29E6B] italic font-light">Wholesale Pricing?</span>
                            </h2>
                            <p className="text-stone-300 text-xs sm:text-sm font-sans max-w-xl mx-auto mb-8 leading-relaxed">
                                Submit a trade enquiry or email our B2B desk directly. We respond with pricing and samples within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/trade-enquiry"
                                    className="px-8 py-4 bg-[#2C443E] hover:bg-[#1B2E2A] text-white text-[10px] font-bold  tracking-[0.3em] transition-all duration-300 rounded-full shadow-md cursor-pointer"
                                >
                                    Submit Trade Enquiry
                                </Link>
                                <a
                                    href="mailto:trade@auroratextile.com"
                                    className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold  tracking-[0.3em] hover:border-[#C29E6B] hover:text-[#C29E6B] transition-colors rounded-full flex items-center justify-center gap-2"
                                >
                                    <Mail size={13} /> trade@auroratextile.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
