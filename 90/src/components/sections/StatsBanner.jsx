import React from 'react';
import { ShieldCheck, Store, Users, ShoppingBag, Headphones } from 'lucide-react';

const StatsBanner = () => {
    const stats = [
        {
            value: "35+",
            label: "Years of Trust",
            icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />
        },
        {
            value: "500+",
            label: "Retail Outlets",
            icon: <Store className="w-5 h-5 text-brand-gold" />
        },
        {
            value: "10K+",
            label: "Happy Retailers",
            icon: <Users className="w-5 h-5 text-brand-gold" />
        },
        {
            value: "1Lakh+",
            label: "Products",
            icon: <ShoppingBag className="w-5 h-5 text-brand-gold" />
        },
        {
            value: "24/7",
            label: "Customer Support",
            icon: <Headphones className="w-5 h-5 text-brand-gold" />
        }
    ];

    return (
        <section className="bg-brand-emerald-dark text-white py-10 px-6 sm:px-12 border-t border-brand-gold/15">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 p-2 pt-6 md:pt-2">
                            <div className="mb-1">{s.icon}</div>
                            <span className="text-2xl md:text-3xl font-serif font-black text-white">{s.value}</span>
                            <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
