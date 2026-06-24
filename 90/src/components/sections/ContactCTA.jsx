import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-6 bg-[#121212] text-white text-center border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto relative z-10">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-4 block">
                    Retail Assistance
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight uppercase leading-none mb-6">
                    Visit Our Showrooms
                </h2>
                <p className="text-gray-400 text-xs max-w-lg mx-auto leading-relaxed mb-10 font-sans">
                    Have questions about specific styles, fabrics, or wedding bookings? Drop us a line or visit our retail desk in Kolkata.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-3.5 bg-[#C5A880] hover:bg-white text-[#121212] hover:text-black text-[9px] uppercase tracking-widest font-black transition-colors rounded-xl"
                    >
                        Contact Details
                    </button>
                    <a
                        href="tel:+916353778329"
                        className="px-8 py-3.5 border border-white/30 hover:border-white text-white hover:bg-white/10 text-[9px] uppercase tracking-widest font-black transition-colors rounded-xl inline-block"
                    >
                        Call Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
