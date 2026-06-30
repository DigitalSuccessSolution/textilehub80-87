import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Patel",
      company: "Shree Balaji Textiles",
      location: "Ahmedabad",
      rating: 5,
      content: "Aurora has been our trusted partner for quality textiles and excellent service. Their e-quotation system saves us hours of negotiation. The fabric quality, especially the Chanderi Silk, is unmatched in the market."
    },
    {
      id: 2,
      name: "Meera Reddy",
      company: "Elegant Ethnic Boutique",
      location: "Hyderabad",
      rating: 5,
      content: "As a premium boutique owner, consistency is key. Aurora's automated retail management system ensures we never run out of our bestsellers. Their dedicated account managers are incredibly responsive."
    },
    {
      id: 3,
      name: "Amit Singhania",
      company: "Singhania Garments",
      location: "Delhi",
      rating: 4,
      content: "Participating in their live e-auctions has been a game changer for our wholesale procurement. We managed to secure premium shirting surplus at highly competitive rates. Logistics are generally smooth."
    },
    {
      id: 4,
      name: "Kavita Desai",
      company: "Kavita's Wardrobe",
      location: "Mumbai",
      rating: 5,
      content: "The transition from traditional purchasing to Aurora's digital B2B portal was seamless. The interface is intuitive, and the transparency in pricing and GST breakdowns is highly appreciated."
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      company: "Malhotra Retail Chain",
      location: "Chandigarh",
      rating: 5,
      content: "We source our entire winter suiting collection from Aurora. The 5-point quality check they emphasize is real; we have practically zero return rates from our end consumers due to fabric defects."
    },
    {
      id: 6,
      name: "Anita Bose",
      company: "Bengal Handlooms Ltd",
      location: "Kolkata",
      rating: 4,
      content: "Good variety and prompt delivery. Their focus on authentic weaves helps us cater to a niche audience effectively. The customer support team is knowledgeable about fabric compositions."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Hear from our network of successful retail partners.
          </p>
        </div>
      </div>

      <div className="container-custom pb-24">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col relative group hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              
              <Quote className="absolute top-6 right-6 w-12 h-12 text-muted-foreground/10 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-muted-foreground/30'}`} />
                ))}
              </div>

              <p className="text-sm font-light text-foreground/80 italic leading-relaxed mb-8 flex-1">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{review.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-bold  tracking-widest">{review.company}</p>
                  <p className="text-[9px] text-primary/50 mt-0.5">{review.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>


      </div>
      
    </div>
  );
};

export default Reviews;
