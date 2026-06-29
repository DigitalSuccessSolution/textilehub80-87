import React, { useRef } from 'react';
import { ArrowRight, Star, TrendingUp, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';

const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 352; // card width (320px) + gap (32px)
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Magazine Style Hero Slider */}
      <Hero />

      {/* Featured Collections Horizontal Scroll */}
      <section className="py-24 bg-white relative">
        <div className="container-custom mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary">The Signature 12 Collections</h2>
            <p className="text-slate-500 mt-2 font-light">Our most sought-after premium lines</p>
          </div>
          
          <div className="flex items-center gap-6 self-end md:self-auto">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-colors focus:outline-none"
                aria-label="Previous collections"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-colors focus:outline-none"
                aria-label="Next collections"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link to="/products" className="hidden md:flex items-center gap-2 text-accent font-bold text-sm tracking-wider hover:text-primary transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scrollable Container without visible scrollbar */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex gap-8 w-max">
            {[
              { name: 'Sarees', img: 'https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg', desc: 'Varanasi Gold Zari Katan' },
              { name: 'Leggings', img: 'https://media.istockphoto.com/id/1980806050/photo/full-body-attractive-girl-engage-in-her-pursuit-of-healthy-lifestyle-vigorous.jpg?b=1&s=612x612&w=0&k=20&c=1BXZoiBHgh0EuRe7ywn7sfS4Pt1NNU6V9AQ6IBLzWI0=', desc: 'Four-Way Stretch Leggings' },
              { name: 'Kurtis', img: 'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg', desc: 'Embroidered Slub Kurti' },
              { name: 'Dress Suits', img: 'https://images.pexels.com/photos/11840170/pexels-photo-11840170.jpeg', desc: 'Royal Chanderi Silk Set' },
              { name: 'Bedsheets & Linen', img: 'https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI=', desc: 'Egyptian Cotton Royal Set' },
              { name: 'Hosiery Items', img: 'https://images.pexels.com/photos/11212879/pexels-photo-11212879.jpeg', desc: 'Combed Cotton Hosiery' },
              { name: 'Suiting', img: 'https://images.pexels.com/photos/31094610/pexels-photo-31094610.jpeg', desc: 'Classic Merino Wool' },
              { name: 'Shirting', img: 'https://images.pexels.com/photos/9594940/pexels-photo-9594940.jpeg', desc: 'Premium Oxford Giza' },
              { name: 'Formal & Ethnic Wear for Women', img: 'https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcm1hbCUyMCUyNiUyMGV0aG5pYyUyMHdlYXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D', desc: 'Banarasi Brocade Sherwani' },
              { name: 'Formal & Ethnic Wear for Men', img: 'https://images.pexels.com/photos/37045884/pexels-photo-37045884.jpeg', desc: 'Pure Linen White Kurta' },
              { name: 'Formal & Ethnic Wear for Children', img: 'https://media.istockphoto.com/id/667900166/photo/smiling-portrait-of-an-indian-boy.jpg?b=1&s=612x612&w=0&k=20&c=SZBNrCgPpqvCosFQhkHXAFfXT4CA0x_6ZXXtuhws2OQ=', desc: 'Silk Blend Festival Kurta' },
              { name: 'Home Upholstery & Furnishing', img: 'https://images.pexels.com/photos/18408858/pexels-photo-18408858.jpeg', desc: 'Luxury Velvet' }
            ].map((col, i) => (
              <Link to={`/products?cat=${encodeURIComponent(col.name)}`} key={i} className="group relative w-80 h-[450px] overflow-hidden flex flex-col justify-end p-6 cursor-pointer block shrink-0 animate-fadeIn">
                <img src={col.img} alt={col.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-xs font-bold tracking-wider mb-2">{col.desc}</p>
                  <h3 className="text-white font-heading text-xl font-bold flex justify-between items-center">
                    {col.name}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Modern Split Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <span className="text-accent font-bold tracking-wider text-xs">B2B Excellence</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary leading-tight">
                Empowering Retailers with Seamless Supply
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                We bridge the gap between world-class mills and premium retail outlets. With our advanced e-Auction and e-Quotation platforms, procuring high-end textiles has never been more transparent.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: TrendingUp, text: 'Real-time e-Auction platform for bulk lots' },
                  { icon: Award, text: 'Certified 12 Collections spanning all categories' },
                  { icon: Star, text: 'Dedicated Retail Management Support' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-medium text-sm">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100 shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/about" className="text-primary font-bold tracking-wider text-sm border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                  Read Our Story
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/18587721/pexels-photo-18587721.jpeg"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <p className="font-heading text-3xl font-bold text-primary mb-2">40+</p>
                <p className="text-xs text-slate-500 font-light">Years of legacy in weaving perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
