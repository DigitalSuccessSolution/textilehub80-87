import React from 'react';
import { Award, Grid, Truck, Heart, Headphones } from 'lucide-react';

const Intro = () => {
    const badges = [
        {
            icon: <Award className="w-6 h-6 text-[#800834]" />,
            title: "Premium Quality",
            desc: "Finest fabrics, unmatched quality"
        },
        {
            icon: <Grid className="w-6 h-6 text-[#800834]" />,
            title: "Wide Range",
            desc: "Thousands of fabrics for every need"
        },
        {
            icon: <Truck className="w-6 h-6 text-[#800834]" />,
            title: "Pan India Delivery",
            desc: "Timely delivery across India"
        },
        {
            icon: <Heart className="w-6 h-6 text-[#800834]" />,
            title: "Customer First",
            desc: "Your satisfaction is our priority"
        },
        {
            icon: <Headphones className="w-6 h-6 text-[#800834]" />,
            title: "Dedicated Support",
            desc: "We are here to help you anytime"
        }
    ];

    return (
        <section className="py-12 px-6 sm:px-12 bg-white border-b border-brand-linen-dark">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {badges.map((b, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 bg-[#FAF8F5] border border-brand-gold/10 hover:border-brand-gold/30 rounded-xl transition-all duration-300 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-brand-gold/10 shadow-sm">
                                {b.icon}
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-xs font-sans font-black uppercase text-brand-charcoal tracking-wider">
                                    {b.title}
                                </h4>
                                <p className="text-[10px] text-brand-charcoal/60 leading-normal font-sans font-light">
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;
