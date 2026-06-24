import React from 'react';
import { Award, Layers, Globe, Smile, Sparkles } from 'lucide-react';

const StatsBanner = () => {
  const stats = [
    { num: '1000+', label: 'Happy Customers', icon: <Smile className="w-5 h-5 text-accent" /> },
    { num: '5000+', label: 'Products', icon: <Layers className="w-5 h-5 text-accent" /> },
    { num: '38', label: 'Business Domains', icon: <Globe className="w-5 h-5 text-accent" /> },
    { num: '25+', label: 'Years Experience', icon: <Award className="w-5 h-5 text-accent" /> },
    { num: '100%', label: 'Customer Satisfaction', icon: <Sparkles className="w-5 h-5 text-accent" /> }
  ];

  return (
    <section className="bg-[#053B1F] py-10 font-light text-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-2 text-accent">
                {item.icon}
              </div>
              <span className="block text-2xl font-heading font-extrabold text-white leading-none">{item.num}</span>
              <span className="block text-[9px] text-slate-300 uppercase font-bold tracking-wider pt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
