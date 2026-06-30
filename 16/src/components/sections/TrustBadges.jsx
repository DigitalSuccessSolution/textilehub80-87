import React from 'react';
import { ShieldCheck, Layers, Landmark, Truck, Lock } from 'lucide-react';

const TrustBadges = () => {
  const list = [
    { title: 'Premium Quality', desc: 'Products', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
    { title: 'Wide Range of', desc: 'Collection', icon: <Layers className="w-5 h-5 text-accent" /> },
    { title: 'Best Price', desc: 'Guarantee', icon: <Landmark className="w-5 h-5 text-accent" /> },
    { title: 'Timely Delivery', desc: 'Worldwide', icon: <Truck className="w-5 h-5 text-accent" /> },
    { title: 'Secure Payment', desc: '100% Secure', icon: <Lock className="w-5 h-5 text-accent" /> }
  ];

  return (
    <section className="bg-[#053B1F] py-8 font-light text-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {list.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center text-left">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-heading font-bold text-white tracking-wider leading-none ">{item.title}</h4>
                <p className="text-[10px] text-slate-300 font-medium leading-none mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
