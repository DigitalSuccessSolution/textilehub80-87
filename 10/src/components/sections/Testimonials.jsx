import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const list = [
    {
      name: 'Priya Sharma',
      company: 'Retailer, Jaipur',
      text: 'Excellent quality products and amazing customer service. Truly satisfied with their collection.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop'
    },
    {
      name: 'Rakesh Verma',
      company: 'Boutique Owner, Mumbai',
      text: 'Best wholesale textile mall. Wide range, competitive prices, and timely delivery.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
    },
    {
      name: 'Anita Patel',
      company: 'Boutique Owner, Ahmedabad',
      text: 'We have been associated with them for years. Highly recommended!',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-white py-16 font-light text-slate-600 border-b border-slate-100">
      <div className="container-custom space-y-10">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center w-full">
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wider">What Our Customers Say</h3>
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {list.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-200/60 pt-3">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs shrink-0" 
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-none">{item.name}</h4>
                  <span className="text-[10px] text-slate-400 font-semibold mt-1 block">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
