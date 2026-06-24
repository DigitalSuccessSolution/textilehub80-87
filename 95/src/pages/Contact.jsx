import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
    useSEO(
        'Contact Us',
        'Get in touch with Retail Textile Mall. Call, email, or visit our showroom. Trade & retail enquiries welcome.',
        'contact retail textile, showroom address, trade enquiry, email, google map'
    );

    const contactChannels = [
        {
            icon: Mail,
            label: 'General Support',
            title: 'Email Care',
            value: 'care@retailtextilemall.com',
            link: 'mailto:care@retailtextilemall.com',
            cta: 'Send Email',
            desc: 'We respond within 24 business hours.',
            dark: true,
        },
        {
            icon: Mail,
            label: 'Trade Desk',
            title: 'Trade Email',
            value: 'trade@retailtextilemall.com',
            link: 'mailto:trade@retailtextilemall.com',
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
            lines: ['Retail Textile Mall', 'Kolkata, West Bengal, India'],
        },
        {
            icon: Clock,
            label: 'Business Hours',
            lines: ['Monday – Saturday', '10:00 AM – 8:00 PM IST', 'Closed on Sundays & Public Holidays'],
        },
    ];

    return (
        <div className="min-h-screen bg-brand-cream text-brand-plum">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Contact Our <span className="text-brand-lavender italic font-light">Showroom</span>
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

            {/* ── Contact Channels (4 cards) ── */}
            <section className="py-16 md:py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-lavender mb-2">Reach Us</p>
                        <h2 className="text-2xl md:text-3xl font-serif text-brand-plum uppercase tracking-wide">
                            Choose Your <span className="text-brand-lavender italic font-light">Channel</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contactChannels.map((ch, idx) => {
                            const Icon = ch.icon;
                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col justify-between p-7 rounded-3xl border transition-all duration-300 group ${
                                        ch.dark
                                            ? 'bg-brand-lavender border-brand-gold/15 hover:border-brand-lavender-dark text-brand-cream'
                                            : 'bg-brand-light border-brand-gold/12 hover:border-brand-lavender'
                                    }`}
                                >
                                    <div>
                                        <div className="mb-5">
                                            <Icon
                                                size={22}
                                                className={ch.dark ? 'text-brand-cream' : 'text-brand-lavender'}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <p className="text-[9px] uppercase tracking-[0.35em] font-black mb-1 text-brand-lavender">
                                            {ch.label}
                                        </p>
                                        <h3 className={`text-base font-serif uppercase tracking-wide mb-3 ${ch.dark ? 'text-brand-cream' : 'text-brand-plum'}`}>
                                            {ch.title}
                                        </h3>
                                        <p className={`text-xs font-sans font-semibold mb-2 break-all ${ch.dark ? 'text-brand-cream' : 'text-brand-plum'}`}>
                                            {ch.value}
                                        </p>
                                        <p className={`text-[11px] leading-relaxed ${ch.dark ? 'text-brand-cream/60' : 'text-stone-500'}`}>
                                            {ch.desc}
                                        </p>
                                    </div>
                                    <a
                                        href={ch.link}
                                        target={ch.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noreferrer"
                                        className={`mt-7 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] transition-colors ${
                                            ch.dark
                                                ? 'text-brand-cream hover:text-white'
                                                : 'text-brand-plum hover:text-brand-lavender'
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
                                className="flex gap-5 items-start p-7 bg-brand-light border border-brand-gold/12 rounded-3xl hover:border-brand-lavender transition-all shadow-md"
                            >
                                <div className="p-3 bg-brand-lavender rounded-xl flex-shrink-0">
                                    <Icon size={18} className="text-brand-cream" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-lavender mb-2">
                                        {label}
                                    </p>
                                    {lines.map((line, i) => (
                                        <p key={i} className={`font-sans ${i === 0 ? 'text-sm font-bold text-brand-plum' : 'text-xs text-stone-500'} leading-relaxed`}>
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
                    <div className="bg-brand-light p-6 rounded-3xl border border-brand-gold/12 hover:border-brand-lavender transition-all shadow-md">
                        <p className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-lavender mb-4">
                            Interactive Showroom Map
                        </p>
                        <div className="w-full h-80 rounded-2xl overflow-hidden border border-brand-gold/15">
                            <iframe 
                                title="Retail Textile Showroom Location"
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
                    <div className="bg-brand-light rounded-3xl px-8 py-14 md:py-16 text-center border border-brand-gold/12 relative overflow-hidden text-brand-plum shadow-2xl">
                        <div
                            className="absolute inset-0 opacity-5 bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80')` }}
                        />
                        <div className="relative z-10">
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender mb-4 block">
                                B2B Partners
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-plum uppercase tracking-wide mb-4">
                                Looking for <span className="text-brand-lavender italic font-light">Wholesale Pricing?</span>
                            </h2>
                            <p className="text-stone-500 text-xs sm:text-sm font-sans max-w-xl mx-auto mb-8 leading-relaxed">
                                Submit a trade enquiry or email our B2B desk directly. We respond with pricing and samples within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/trade-enquiry"
                                    className="px-8 py-4 bg-brand-lavender hover:bg-brand-lavender-dark text-brand-cream text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 rounded-full shadow-md cursor-pointer"
                                >
                                    Submit Trade Enquiry
                                </Link>
                                <a
                                    href="mailto:trade@retailtextilemall.com"
                                    className="px-8 py-4 border border-brand-gold/15 text-brand-plum text-[10px] font-bold uppercase tracking-[0.3em] hover:border-brand-lavender hover:text-brand-lavender transition-all rounded-full flex items-center justify-center gap-2 bg-brand-light/35"
                                >
                                    <Mail size={13} /> trade@retailtextilemall.com
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
