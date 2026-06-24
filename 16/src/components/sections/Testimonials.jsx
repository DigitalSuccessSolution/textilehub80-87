import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'Retailer, Jaipur',
    text: 'Excellent quality products and amazing customer service. Truly satisfied with their saree and kurti collections. Highly recommend Aurora to all retailers.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Rakesh Verma',
    company: 'Boutique Owner, Mumbai',
    text: 'Best wholesale textile mall in India. Wide range, competitive prices, and timely delivery. Our boutique customers love the suiting and shirting collections.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Anita Patel',
    company: 'Boutique Owner, Ahmedabad',
    text: 'We have been associated with Aurora Textile Mall for 5+ years. The bedsheets & linen collection is outstanding. Highly recommended for all B2B retailers!',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-background py-20 border-b border-border relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container-custom space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-0.5 bg-accent"></span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Testimonials</span>
            <span className="w-10 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">What Our Clients Say</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto font-light">
            Trusted by thousands of retailers across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-card p-7 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-accent/8 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed italic font-light flex-1">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-accent/20 shadow-sm shrink-0" 
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-none">{item.name}</h4>
                  <span className="text-[10px] text-accent font-semibold mt-1 block">{item.company}</span>
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
