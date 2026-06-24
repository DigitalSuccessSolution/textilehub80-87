import React from 'react';

const MapsSection = () => {
    return (
        <section className="py-12 px-6 sm:px-10 bg-[#FCFBF7]">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
                        Locate Showroom
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight uppercase leading-none mb-4">
                        Retail Store <span className="font-light text-[#C5A880] italic">Location</span>
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
                </div>

                {/* Map Wrapper */}
                <div className="max-w-5xl mx-auto h-[400px] border border-[#C5A880]/30 rounded-xl overflow-hidden shadow-2xl relative bg-neutral-900">
                    <iframe
                        title="Retail Store Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.273618751433!2d88.35824557999863!3d22.572879579998797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771340b10001%3A0x8fc2330777558fc2!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </section>
    );
};

export default MapsSection;
