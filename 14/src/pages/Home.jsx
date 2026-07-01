import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Quote, ShieldCheck, Truck, Tag, Headset, CheckCircle2, MapPin, Search, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { blogPosts } from './Blog';
import { mediaItems } from './MediaGallery';

const Home = () => {

  const categories = [
    { name: 'Sarees', img: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg' },
    { name: 'Leggings', img: 'https://images.pexels.com/photos/5262957/pexels-photo-5262957.jpeg' },
    { name: 'Kurtis', img: 'https://images.pexels.com/photos/28949655/pexels-photo-28949655.jpeg' },
    { name: 'Dress Suits', img: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg' },
    { name: 'Bedsheets & Linen', img: 'https://images.pexels.com/photos/7765000/pexels-photo-7765000.jpeg' },
    { name: 'Hosiery Items', img: 'https://images.pexels.com/photos/14844499/pexels-photo-14844499.jpeg' },
    { name: 'Suiting', img: 'https://images.pexels.com/photos/9834882/pexels-photo-9834882.jpeg' },
    { name: 'Shirting', img: 'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg' },
    { name: 'Formal & Ethnic Wear for Women', img: 'https://images.pexels.com/photos/20702627/pexels-photo-20702627.jpeg' },
    { name: 'Formal & Ethnic Wear for Men', img: 'https://images.pexels.com/photos/16761760/pexels-photo-16761760.jpeg' },
    { name: 'Formal & Ethnic Wear for Children', img: 'https://images.pexels.com/photos/25636353/pexels-photo-25636353.jpeg' },
    { name: 'Home Upholstery & Furnishing', img: 'https://images.pexels.com/photos/11295890/pexels-photo-11295890.jpeg' }
  ];

  const features = [
    { name: 'Premium Quality', desc: 'Carefully sourced finest textiles.', icon: ShieldCheck },
    { name: 'Nationwide Delivery', desc: 'Fast & reliable delivery across India.', icon: Truck },
    { name: 'Competitive Pricing', desc: 'Best prices for better margins.', icon: Tag },
    { name: '24/7 Support', desc: 'Our team is always here to help you.', icon: Headset },
    { name: 'Secure Transactions', desc: 'Safe, trusted & hassle-free deals.', icon: CheckCircle2 }
  ];

  const heroSlides = [
    {
      img1: 'https://images.pexels.com/photos/37602134/pexels-photo-37602134.jpeg',
      img2: 'https://images.pexels.com/photos/37602133/pexels-photo-37602133.jpeg'
    },
    {
      img1: 'https://images.pexels.com/photos/36281928/pexels-photo-36281928.jpeg',
      img2: 'https://images.pexels.com/photos/15996677/pexels-photo-15996677.jpeg'
    },
    {
      img1: 'https://images.pexels.com/photos/28651451/pexels-photo-28651451.jpeg',
      img2: 'https://images.pexels.com/photos/36909817/pexels-photo-36909817.jpeg'
    }
  ];


  return (
    <div className="bg-[#FDFBF7] min-h-screen">

      {/* Hero Section */}
      <section className="container-custom pt-8 pb-24 relative overflow-hidden">


        <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-12 gap-12 lg:gap-0">

          <div className="lg:w-1/2 z-10">
            <h1 className="font-heading text-5xl lg:text-7xl font-medium text-[#3E2723] leading-[1.1] mb-6 capitalize">
              Empowering<br />
              Textile Business,<br />
              <span className="text-[#B8860B] font-light italic">Enriching Lives.</span>
            </h1>
            <p className="text-[#3E2723]/80 text-sm lg:text-base mb-10 max-w-md font-medium">
              Your trusted partner for quality fabrics, retail solutions & business growth.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/product" className="bg-[#B8860B] text-white hover:bg-[#B8860B]/90 px-8 py-3.5 rounded-sm text-xs font-bold capitalize tracking-widest transition-all shadow-md flex items-center gap-2">
                Explore Collections <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/trade-enquiry" className="bg-white border border-[#3E2723] text-[#3E2723] hover:border-[#B8860B] hover:text-[#B8860B] px-8 py-3.5 rounded-sm text-xs font-bold capitalize tracking-widest transition-all shadow-sm">
                B2B Enquiry
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full flex justify-center lg:justify-end">

            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#B8860B]/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#B8860B]/30 rounded-full"></div>

            {/* Swiper Slider for Images */}
            <div className="absolute inset-0 w-full h-full z-20">
              <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
              >
                {heroSlides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full h-full relative">
                      {/* Top Right Circle Image */}
                      <div className="absolute top-0 right-10 w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-white animate-[spin_30s_linear_infinite_reverse]">
                        <img src={slide.img1} alt="Textile Store" className="w-full h-full object-cover animate-[spin_30s_linear_infinite]" />
                      </div>

                      {/* Bottom Left Circle Image */}
                      <div className="absolute bottom-0 left-10 w-[240px] h-[240px] rounded-full overflow-hidden border-8 border-white animate-[spin_20s_linear_infinite]">
                        <img src={slide.img2} alt="Textile Collection" className="w-full h-full object-cover animate-[spin_20s_linear_infinite_reverse]" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="absolute bottom-0 right-0 z-40 flex gap-2">
              <button className="swiper-button-prev-custom w-10 h-10 bg-white border border-[#EAE0D5] rounded-full flex items-center justify-center text-[#3E2723] hover:bg-[#B8860B] hover:text-white hover:border-[#B8860B] transition-colors shadow-md">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="swiper-button-next-custom w-10 h-10 bg-white border border-[#EAE0D5] rounded-full flex items-center justify-center text-[#3E2723] hover:bg-[#B8860B] hover:text-white hover:border-[#B8860B] transition-colors shadow-md">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-12 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <span className="font-heading text-xl font-bold text-[#B8860B]">500+</span>
              <span className="text-sm font-bold capitalize tracking-widest text-[#3E2723]">Retail Partners</span>
            </div>

            <div className="absolute bottom-24 -right-8 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <span className="font-heading text-xl font-bold text-[#3E2723]">1,00,000+</span>
              <span className="text-sm font-bold capitalize tracking-widest text-[#3E2723]">Happy Customers</span>
            </div>

            <div className="absolute bottom-10 left-0 bg-white px-6 py-4 rounded-xl shadow-xl z-40 border border-[#EAE0D5] flex flex-col items-center">
              <MapPin className="w-5 h-5 text-[#B8860B] mb-1" />
              <span className="text-sm font-bold capitalize tracking-widest text-[#3E2723]">Pan India<br />Network</span>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-custom pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <Link to="/product" key={index} className="bg-white rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer hover:shadow-lg transition-all border border-[#EAE0D5]">
              <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-4">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-[12px] font-bold text-[#3E2723] mb-3 capitalize">{cat.name}</h3>
              <div className="w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors mt-auto">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Textile Solutions Grid */}
      <section className="container-custom pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

          {/* Left Large Card */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group">
            <img src="https://images.pexels.com/photos/5264903/pexels-photo-5264903.jpeg" alt="Textile Solutions" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-[#2C1E16]/80 to-transparent"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight capitalize">
                Textile Solutions<br />for Retail Businesses
              </h2>
              <div className="w-12 h-0.5 bg-[#B8860B] mb-6"></div>
              <p className="text-white/80 text-sm font-light mb-10 max-w-sm">
                End-to-end textile solutions to help your business grow bigger and stronger.
              </p>
              <Link to="/trade-enquiry" className="border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-6 py-3 rounded-sm text-xs font-bold capitalize tracking-widest transition-colors w-fit flex items-center gap-2">
                Explore Solutions <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Top Card (Full Width) */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden group h-[280px]">
              <img src="https://images.pexels.com/photos/7679460/pexels-photo-7679460.jpeg" alt="Bulk Orders" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/90 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-medium text-white mb-3 capitalize">Bulk Orders<br />& B2B Supply</h3>
                <p className="text-white/80 text-xs font-light max-w-[200px]">
                  Wide range of fabrics available in bulk for retailers, wholesalers & businesses.
                </p>
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="relative rounded-2xl overflow-hidden group bg-[#3E2723] p-8 flex flex-col h-[280px]">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-medium text-white mb-2 capitalize">Live Textile Auctions</h3>
                <p className="text-white/70 text-xs font-light mb-auto">
                  Bid on premium textiles at unbeatable prices.
                </p>
                <Link to="/e-auction" className="border border-white/30 text-white hover:bg-white hover:text-[#3E2723] px-4 py-2 rounded-sm text-sm font-bold capitalize tracking-widest transition-colors w-fit flex items-center gap-2 mt-4">
                  View Auctions <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 h-[280px]">
              <div className="bg-[#F4EFEA] rounded-2xl p-6 relative overflow-hidden group h-[130px]">
                <h3 className="font-heading text-xl font-medium text-[#3E2723] mb-1 capitalize">Instant Quotation</h3>
                <p className="text-[#3E2723]/60 text-xs font-light w-2/3">Quick, transparent & reliable quotes.</p>
                <Link to="/e-quotation" className="absolute bottom-4 left-6 w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B]">
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="bg-[#F4EFEA] rounded-2xl p-6 relative overflow-hidden group h-[130px]">
                <h3 className="font-heading text-xl font-medium text-[#3E2723] mb-1 capitalize">Pan India Distribution</h3>
                <p className="text-[#3E2723]/60 text-xs font-light w-2/3">Timely delivery across India.</p>
                <div className="absolute bottom-4 left-6 w-6 h-6 rounded-full border border-[#B8860B] flex items-center justify-center text-[#B8860B]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Texmart - Timeline Style */}
      <section className="container-custom py-16 border-y border-[#EAE0D5] relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="lg:w-1/4">
            <h2 className="font-heading text-3xl font-medium text-[#3E2723] capitalize">
              Why Choose<br />Texmart?
            </h2>
          </div>
          <div className="lg:w-3/4 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-10 right-10 h-0.5 border-t border-dashed border-[#B8860B]/30 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white border border-[#B8860B]/30 flex items-center justify-center mb-4 shadow-sm relative">
                      <Icon className="w-6 h-6 text-[#B8860B]" strokeWidth={1.5} />
                      {idx !== features.length - 1 && <div className="hidden lg:block absolute right-[-50%] top-1/2 w-[50%] h-0 border-t border-[#B8860B]/30 border-dashed z-0"></div>}
                    </div>
                    <h4 className="text-sm font-bold text-[#3E2723] mb-2 px-2 capitalize">{feature.name}</h4>
                    <p className="text-sm text-[#3E2723]/60 font-light">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-[#2C1E16] py-10 border-y-4 border-[#B8860B]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">20+</div>
                <div className="text-sm capitalize tracking-widest font-medium text-white/70">Years of Experience</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">500+</div>
                <div className="text-sm capitalize tracking-widest font-medium text-white/70">Retail Partners</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">100+</div>
                <div className="text-sm capitalize tracking-widest font-medium text-white/70">Cities Across India</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#B8860B]" />
              </div>
              <div>
                <div className="text-2xl font-light font-heading text-white mb-0.5">1,00,000+</div>
                <div className="text-sm capitalize tracking-widest font-medium text-white/70">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* From the Blog */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xs font-bold capitalize tracking-widest text-[#3E2723]">Latest From Our Blog</h3>
              <Link to="/blog" className="text-xs font-bold capitalize tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</Link>
            </div>
            <div className="space-y-4">
              {blogPosts.slice(0, 3).map((post, i) => (
                <Link to="/blog" key={i} className="flex gap-4 group cursor-pointer border border-[#EAE0D5] p-2 rounded-md hover:border-[#B8860B] transition-colors">
                  <img src={post.img} alt={post.title} className="w-14 h-14 rounded-sm object-cover" />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-[#3E2723] leading-tight mb-1 group-hover:text-[#B8860B] transition-colors capitalize line-clamp-2">{post.title}</h4>
                    <span className="text-xs text-[#3E2723]/60 capitalize tracking-widest">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Love */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xs font-bold capitalize tracking-widest text-[#3E2723]">Customer Stories</h3>
              <Link to="/customer-review" className="text-xs font-bold capitalize tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</Link>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-md border border-[#EAE0D5] shadow-sm relative h-[250px] flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#B8860B] mb-2" />
              <p className="text-sm text-[#3E2723]/80 font-medium leading-relaxed mb-4">
                Texmart has been a game-changer for our business. Quality, variety and timely delivery - everything we need under one roof.
              </p>
              <div>
                <div className="flex gap-1 mb-2 text-[#B8860B]">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </div>
                <h5 className="text-xs font-bold text-[#3E2723]">Rajesh Patel</h5>
                <span className="text-sm text-[#3E2723]/60 italic">Shree Balaji Textiles</span>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xs font-bold capitalize tracking-widest text-[#3E2723]">Media Gallery</h3>
              <Link to="/business-media-gallery" className="text-xs font-bold capitalize tracking-widest text-[#B8860B] hover:text-[#3E2723] transition-colors">VIEW ALL</Link>
            </div>
            <div className="grid grid-cols-2 gap-2 h-[250px]">
              {mediaItems.slice(0, 4).map((item, i) => (
                <Link to="/business-media-gallery" key={i} className="rounded-md overflow-hidden relative group cursor-pointer border border-[#EAE0D5] h-full">
                  <img src={item.img} alt={item.title || "Gallery"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#3E2723]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Our Network */}
          <div>
            <h3 className="text-xs font-bold capitalize tracking-widest text-[#3E2723] mb-6">Our India Network</h3>
              <div className="h-[250px] bg-white rounded-md overflow-hidden border border-[#EAE0D5] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594247.925433235!2d70.9323719875!3d22.091151625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India Map"
                ></iframe>
              <div className="absolute bottom-6 bg-white border border-[#EAE0D5] px-4 py-2 rounded-sm shadow-md text-center">
                <span className="text-xs text-[#3E2723] block leading-tight">Delivering quality textiles<br />to every corner of India.</span>
              </div>
              <Link to="/trade-enquiry" className="absolute bottom-[-10px] bg-white border border-[#B8860B] text-[#B8860B] px-4 py-1.5 rounded-sm text-xs font-bold capitalize tracking-widest hover:bg-[#B8860B] hover:text-white transition-colors">
                Explore Network
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
