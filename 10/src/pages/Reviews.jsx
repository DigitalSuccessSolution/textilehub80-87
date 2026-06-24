import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ramesh Desai',
      company: 'Desai Textiles, Ahmedabad',
      rating: 5,
      text: 'The Royal Silk Collection from WeavesMart has transformed our premium segment. The quality of the Zari work is unmatched, and the automated e-Quotation system saves us hours of negotiation.',
      type: 'Wholesale Partner'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Elegant Ethnic Wear, Delhi',
      rating: 5,
      text: 'We switched our entire sourcing for wedding season to WeavesMart. The 12 Collections offer exactly what modern brides are looking for. Shipping is always on time, which is critical for our business.',
      type: 'Retail Boutique'
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      company: 'Gulf Fashion Exports, Dubai',
      rating: 5,
      text: 'Sourcing Indian textiles for the UAE market requires impeccable quality control. WeavesMart delivers consistently. Their B2B portal makes international ordering incredibly transparent.',
      type: 'Export Partner'
    },
    {
      id: 4,
      name: 'Anita Verma',
      company: 'Verma Fabrics, Jaipur',
      rating: 4,
      text: 'Excellent fabric quality, specifically the Egyptian cotton blends. The e-Auction portal is a game-changer for picking up surplus lots at great prices. Highly recommended for bulk buyers.',
      type: 'Distributor'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      company: 'Singh & Sons, Ludhiana',
      rating: 5,
      text: 'We have been dealing with Surat manufacturers for 20 years. WeavesMart stands out for their professionalism and the sheer elegance of their 12 Collections. A reliable partner.',
      type: 'Wholesale Partner'
    },
    {
      id: 6,
      name: 'Sarah Jones',
      company: 'Boutique India, London',
      rating: 5,
      text: 'The logistics support for international shipping is fantastic. The textiles arrive in pristine condition, and the B2B dashboard allows us to track everything in real-time.',
      type: 'International Retailer'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Partner Testimonials</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">Built on Trust.</h1>
          <p className="text-slate-500 font-light text-lg">
            Hear from our global network of 1,200+ retailers, distributors, and boutique owners who rely on WeavesMart for premium textile sourcing.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-10 text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-heading font-bold text-primary">4.9/5</span>
              <div className="flex text-accent my-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Average Rating</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-green-500 mb-1" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Verified B2B Buyers</span>
            </div>
          </div>
        </div>

        {/* Masonry Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-primary/5 transition-colors" />
              
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                ))}
              </div>
              
              <p className="text-slate-600 font-light leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary text-sm">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">{review.company}</p>
                </div>
                <span className="bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  {review.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
