import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const BusinessIntro = () => {
  const stats = [
    { num: '10K+', label: 'Happy Customers' },
    { num: '5000+', label: 'Products' },
    { num: '25+', label: 'Years Experience' },
    { num: '38', label: 'Business Domains' }
  ];

  const highlights = [
    'Factory-Direct B2B Wholesale Pricing',
    'Verified Dispatch Operations Pan-India',
    'ISO Certified Quality Standards',
    'Serving 28 States & Major Cargo Depots'
  ];

  return (
    <section className="bg-background py-20 border-b border-border relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Store Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Geometric frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] border-2 border-dashed border-primary/15 pointer-events-none"></div>
            <div className="relative w-full max-w-md h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white">
              <img
                src="https://images.pexels.com/photos/20420599/pexels-photo-20420599.jpeg"
                alt="Aurora Textile Mall Interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-primary/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/90 text-[10px] font-bold  tracking-widest">Aurora Textile Mall</p>
                <p className="text-white/60 text-[9px] font-medium">India's Trusted B2B Destination</p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:right-0 md:bottom-10 w-28 h-28 rounded-full bg-accent text-white flex flex-col justify-center items-center text-center p-3 shadow-2xl border-4 border-background transform hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-extrabold text-3xl leading-none">25+</span>
              <span className="text-[8px] font-bold  tracking-wider leading-tight mt-1.5">Years of<br />Experience</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-[10px]  tracking-widest border border-accent/20">
                ✦ Welcome to Aurora Textile Mall ✦
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight">
                Your Trusted Textile &amp;<br />
                <span className="text-accent italic font-normal font-cursive">Garment Retail Partner</span>
              </h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light max-w-lg">
              Aurora Textile Mall is a complete B2B textile and garment retail destination, offering a wide range of premium quality products for the entire family. Committed to factory-direct wholesale pricing and verified dispatch across 28 states.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((item, idx) => (
                <div key={idx} className="bg-card p-5 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group">
                  <span className="block text-2xl font-heading font-extrabold text-primary group-hover:text-accent transition-colors">{item.num}</span>
                  <span className="block text-[9px] text-muted-foreground  font-bold tracking-wider mt-2">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-8 rounded-full text-xs  tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Know More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessIntro;
