import React from 'react';
import useSEO from '../hooks/useSEO';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
    useSEO(
        'Contact Us',
        'Get in touch with Kaaya Fabrics. Call, email, or visit our showroom in Surat, Gujarat.',
        'contact Kaaya Fabrics, showroom address, trade enquiry, email'
    );

    const contactChannels = [
        {
            icon: MapPin,
            title: "Showroom Address",
            value: "123, Textile Market, Surat, Gujarat - 395002",
            desc: "Visit our state-of-the-art flagship experience store.",
            link: "https://maps.google.com/?q=Surat,Gujarat,India"
        },
        {
            icon: Phone,
            title: "Phone & WhatsApp",
            value: "+91 98765 43210",
            desc: "Mon – Sat, 10:00 AM – 8:00 PM IST.",
            link: "tel:+919876543210"
        },
        {
            icon: Mail,
            title: "Email Address",
            value: "hello@kaayafabrics.com",
            desc: "For general and B2B trade enquiries.",
            link: "mailto:hello@kaayafabrics.com"
        },
        {
            icon: Clock,
            title: "Business Hours",
            value: "Mon - Sat: 10 AM - 8 PM",
            desc: "Closed on Sundays & National Holidays.",
            link: null
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-[#FAF8F5] text-brand-charcoal text-left pb-20">

            {/* Header section (Reduced top gap) */}
            <section className="py-12 bg-brand-emerald-dark text-white text-center px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 scale-105"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-dark/50 to-brand-emerald-dark" />
                <div className="max-w-3xl mx-auto relative z-10 space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-gold block">
                        Get in Touch
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-white leading-tight">
                        Contact Us
                    </h1>
                    <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
                </div>
            </section>

            {/* Split Grid: Details on Left, Map on Right */}
            <section className="py-12 px-6 sm:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                    {/* Left: Contact Details (Columns 1-5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#800834] block">
                                Quick Connect
                            </span>
                            <h2 className="text-2xl md:text-3xl font-serif font-black uppercase text-brand-charcoal tracking-tight">
                                Reach Our Desk
                            </h2>
                            <p className="text-brand-charcoal/60 text-xs md:text-sm font-sans font-light leading-relaxed">
                                Have any questions about our products, fabric licensing, or e-Auction bookings? Connect with our trade representatives.
                            </p>
                        </div>

                        {/* Channels Lists */}
                        <div className="space-y-4">
                            {contactChannels.map((c, idx) => {
                                const Icon = c.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white border border-brand-gold/10 p-5 rounded-2xl shadow-sm hover:border-[#800834]/40 transition-colors flex gap-4 items-start"
                                    >
                                        <div className="p-3 bg-[#FDF6F8] rounded-xl text-[#800834] shrink-0 shadow-sm">
                                            <Icon size={18} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-wider text-brand-charcoal">
                                                {c.title}
                                            </h4>
                                            {c.link ? (
                                                <a
                                                    href={c.link}
                                                    className="text-xs font-sans font-black text-[#800834] hover:underline block"
                                                >
                                                    {c.value}
                                                </a>
                                            ) : (
                                                <span className="text-xs font-sans font-bold text-brand-charcoal block">
                                                    {c.value}
                                                </span>
                                            )}
                                            <p className="text-[10px] text-brand-charcoal/50 leading-relaxed font-sans">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Map Container (Columns 6-12) */}
                    <div className="lg:col-span-7 flex flex-col min-h-[400px] h-full">
                        <div className="w-full h-full border border-brand-gold/15 rounded-3xl overflow-hidden shadow-xl bg-white p-2">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#EFECE6]">
                                <iframe
                                    title="Kaaya Fabrics Showroom Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.694605990425!2d72.84687648356885!3d21.195195000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc875b2253%3A0xc3160a28f731e843!2sTextile%20Market%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "450px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
