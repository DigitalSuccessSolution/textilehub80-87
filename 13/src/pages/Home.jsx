import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Star, PlayCircle, Quote, ShieldCheck, Truck, PackageOpen, Tag, Headset, CheckCircle2, MapPin, Shirt, Sparkles, Activity, Briefcase, BedDouble, Layers, Ruler, ShoppingBag, User, Smile, Home as HomeIcon, FileText, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroSlides = [
    {
      title: <>Crafting Comfort,<br />Woven with <span className="font-cursive text-primary font-normal text-6xl lg:text-8xl relative top-2">Trust</span></>,
      desc: "Premium fabrics blending tradition, quality and elegance for every lifestyle.",
      img: "https://images.pexels.com/photos/34182941/pexels-photo-34182941.jpeg"
    },

    {
      title: <>Heritage Fabrics,<br />Built on <span className="font-cursive text-primary font-normal text-6xl lg:text-8xl relative top-2">Quality</span></>,
      desc: "Experience the rich textile heritage of India with our premium range.",
      img: "https://images.pexels.com/photos/19335605/pexels-photo-19335605.jpeg"
    },
    {
      title: <>Exquisite Designs,<br />Woven with <span className="font-cursive text-primary font-normal text-6xl lg:text-8xl relative top-2">Care</span></>,
      desc: "Discover our latest collection of premium ethnic wear and modern fabrics.",
      img: "https://images.pexels.com/photos/28949643/pexels-photo-28949643.jpeg"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Sarees', desc: 'Timeless Elegance', icon: Sparkles },
    { name: 'Leggings', desc: 'Everyday Comfort', icon: Activity },
    { name: 'Kurtis', desc: 'Style Redefined', icon: Shirt },
    { name: 'Dress Suits', desc: 'Grace & Charm', icon: Briefcase },
    { name: 'Bedsheets & Linen', desc: 'Cozy Living', icon: BedDouble },
    { name: 'Hosiery Items', desc: 'Soft & Durable', icon: Layers },
    { name: 'Suiting', desc: 'Tailored Perfection', icon: Ruler },
    { name: 'Shirting', desc: 'Everyday Style', icon: Shirt },
    { name: 'Formal & Ethnic Wear for Women', desc: 'Ethnic & Formal', icon: ShoppingBag },
    { name: 'Formal & Ethnic Wear for Men', desc: 'Ethnic & Formal', icon: User },
    { name: 'Formal & Ethnic Wear for Children', desc: 'Stylish & Cute', icon: Smile },
    { name: 'Home Upholstery & Furnishing', desc: 'Comfort Living', icon: HomeIcon },
  ];

  const features = [
    { name: 'Premium Quality Assurance', icon: ShieldCheck },
    { name: 'Pan India Delivery', icon: Truck },
    { name: 'Wide Product Range', icon: PackageOpen },
    { name: 'Competitive Pricing', icon: Tag },
    { name: '24/7 Dedicated Support', icon: Headset },
    { name: 'Secure & Trusted Transactions', icon: CheckCircle2 }
  ];

  const popularCollections = [
    { name: 'Sarees', img: 'https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg' },
    { name: 'Leggings', img: 'https://media.istockphoto.com/id/1980806050/photo/full-body-attractive-girl-engage-in-her-pursuit-of-healthy-lifestyle-vigorous.jpg?b=1&s=612x612&w=0&k=20&c=1BXZoiBHgh0EuRe7ywn7sfS4Pt1NNU6V9AQ6IBLzWI0=' },
    { name: 'Kurtis', img: 'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg' },
    { name: 'Dress Suits', img: 'https://images.pexels.com/photos/11840170/pexels-photo-11840170.jpeg' },
    { name: 'Bedsheets & Linen', img: 'https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI=' },
    { name: 'Hosiery Items', img: 'https://images.pexels.com/photos/11212879/pexels-photo-11212879.jpeg' },
    { name: 'Suiting', img: 'https://images.pexels.com/photos/31094610/pexels-photo-31094610.jpeg' },
    { name: 'Shirting', img: 'https://images.pexels.com/photos/9594940/pexels-photo-9594940.jpeg' },
    { name: 'Formal & Ethnic Wear for Women', img: 'https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcm1hbCUyMCUyNiUyMGV0aG5pYyUyMHdlYXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Formal & Ethnic Wear for Men', img: 'https://images.pexels.com/photos/37045884/pexels-photo-37045884.jpeg' },
    { name: 'Formal & Ethnic Wear for Children', img: 'https://media.istockphoto.com/id/667900166/photo/smiling-portrait-of-an-indian-boy.jpg?b=1&s=612x612&w=0&k=20&c=SZBNrCgPpqvCosFQhkHXAFfXT4CA0x_6ZXXtuhws2OQ=' },
    { name: 'Home Upholstery & Furnishing', img: 'https://images.pexels.com/photos/18408858/pexels-photo-18408858.jpeg' }
  ];

  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen">

      {/* Hero Section */}
      <div className="w-full min-h-[500px] lg:min-h-[600px] relative flex items-center bg-background overflow-hidden border-b border-border group">
        {/* Full Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`Hero Background ${index + 1}`}
              className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          {/* Soft left-to-right gradient shade for text legibility (slightly white), keeping right side clear */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(252, 251, 250, 0.7) 0%, rgba(252, 251, 250, 0.3) 35%, transparent 65%)' }}
          ></div>
        </div>

        <div className="container-custom relative z-10 w-full py-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-foreground/80 text-sm lg:text-base mb-10 font-light">
              {heroSlides[currentSlide].desc}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products" className="bg-primary text-white hover:bg-primary/90 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md">
                Explore Collections
              </Link>
              <Link to="/trade-circular" className="bg-white border border-border text-foreground hover:border-primary hover:text-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm">
                View Catalogue
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-primary hidden lg:flex items-center justify-center shadow-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100 border border-slate-100"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-primary hidden lg:flex items-center justify-center shadow-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100 border border-slate-100"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Mobile Navigation Arrows (Bottom Center) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 lg:hidden">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-md active:scale-95 border border-slate-100"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-md active:scale-95 border border-slate-100"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* 12 Category Icons (Changed to Cards) */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-muted rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <cat.icon className="w-6 h-6 text-primary mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={1.5} />
              <h3 className="text-[10px] font-bold tracking-widest text-foreground group-hover:text-primary transition-colors leading-tight mb-1">{cat.name}</h3>
              <span className="text-[9px] text-muted-foreground font-light">{cat.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Strip */}
      <div className="bg-muted py-6 border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-center gap-3 w-full sm:w-[calc(50%-1rem)] lg:w-auto">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-white">
                    <Icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                  </div>
                  <span className="text-primary text-xs font-bold tracking-widest">{feature.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trade Services - Alternating Sections */}
      <div className="py-24 space-y-24">

        {/* Section 1: About Texmart */}
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-0 bg-white rounded-[40px] border border-border overflow-hidden shadow-sm">
            <div className="lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center z-10">
              <span className="text-primary text-[10px] font-bold tracking-widest mb-4">About Texmart</span>
              <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
                Weaving Excellence<br />in Every Fabric
              </h2>
              <p className="text-sm text-muted-foreground font-light mb-8 leading-relaxed max-w-md">
                From heritage to contemporary, we bring you fabrics that speak of quality and elegance. Our extensive collection is curated to meet the highest standards.
              </p>
              <Link to="/about" className="bg-primary text-white hover:bg-primary/90 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors w-fit flex items-center gap-2 shadow-md">
                Know More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:w-[60%] h-[400px] lg:h-[500px] w-full overflow-hidden relative">
              <img src="/hero-bg-half.png" alt="Fabrics" className="w-full h-full object-cover object-left transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Section 2: Trade Services & Portals */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-muted rounded-[30px] p-10 flex flex-col justify-between border border-border/50">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-widest mb-4 block">Trade Services</span>
                <h3 className="font-heading text-3xl font-medium text-primary mb-4 leading-tight">Solutions for<br />Textile Professionals</h3>
                <p className="text-xs text-primary/70 font-light mb-8">Explore our B2B services to grow your business.</p>
              </div>
              <Link to="/trade-enquiry" className="bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest w-fit flex items-center gap-2 hover:bg-primary/90">
                Explore Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="bg-[#FFF8F0] rounded-[30px] p-10 flex flex-col justify-between relative overflow-hidden group border border-border/50">
              <div className="relative z-10">
                <span className="text-primary/60 text-[10px] font-bold tracking-widest mb-4 block">e-Quotation</span>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Get Instant<br />Quotation</h3>
                <Link to="/e-quotation" className="text-[10px] font-bold tracking-widest text-primary flex items-center gap-1 group-hover:text-primary/70">
                  Request Quote <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-10 transform translate-x-8 translate-y-8 group-hover:scale-110 transition-transform">
                <FileText className="w-full h-full text-accent" />
              </div>
            </div>
            <div className="bg-white rounded-[30px] p-10 flex flex-col justify-between relative overflow-hidden group border border-border/50">
              <div className="relative z-10">
                <span className="text-primary/60 text-[10px] font-bold tracking-widest mb-4 block">Live e-Auction</span>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Join Live Textile<br />Auctions</h3>
                <Link to="/e-auction" className="text-[10px] font-bold tracking-widest text-primary flex items-center gap-1 group-hover:text-primary/70">
                  View Auctions <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-10 transform translate-x-8 translate-y-8 group-hover:scale-110 transition-transform">
                <Gavel className="w-full h-full text-primary" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Popular Collections */}
      <div className="container-custom pb-24">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-border flex-1 max-w-[100px]"></div>
          <h2 className="font-heading text-2xl font-bold text-foreground tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Popular Collections
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          </h2>
          <div className="h-px bg-border flex-1 max-w-[100px]"></div>
        </div>

        <div className="relative">
          <button onClick={() => scrollSlider('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 shadow-lg hidden md:flex">
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div ref={sliderRef} className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x scroll-smooth">
            {popularCollections.map((col, idx) => (
              <div key={idx} className="w-[140px] md:w-[180px] lg:w-[200px] flex-shrink-0 snap-start group cursor-pointer">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 border border-border/50">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-center text-xs font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">{col.name}</h4>
              </div>
            ))}
          </div>

          <button onClick={() => scrollSlider('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 shadow-lg hidden md:flex">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary rounded-[50px] lg:rounded-[100px] scale-x-110 -rotate-1 origin-center"></div>
        <div className="container-custom relative z-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">20+</div>
              <div className="text-[10px] tracking-widest font-bold opacity-80">Years of Excellence</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">500+</div>
              <div className="text-[10px] tracking-widest font-bold opacity-80">Retail Partners</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">100+</div>
              <div className="text-[10px] tracking-widest font-bold opacity-80">Cities Pan India</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">1,00,000+</div>
              <div className="text-[10px] tracking-widest font-bold opacity-80">Happy Customers</div>
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
              <h3 className="text-xs font-bold tracking-widest text-primary border-b-2 border-accent pb-2 inline-block">From The Blog</h3>
              <Link to="/blog" className="text-[9px] font-bold tracking-widest text-accent hover:text-primary transition-colors">View All</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Top 10 Saree Trends This Season', date: 'May 16, 2025', img: 'https://images.pexels.com/photos/8100946/pexels-photo-8100946.jpeg' },
                { title: 'How to Choose the Perfect Fabric', date: 'May 14, 2025', img: 'https://images.pexels.com/photos/6766232/pexels-photo-6766232.jpeg' },
                { title: 'Sustainable Textiles The Future', date: 'May 08, 2025', img: 'https://images.pexels.com/photos/6850882/pexels-photo-6850882.jpeg' }
              ].map((post, i) => (
                <Link to="/blog" key={i} className="flex gap-4 group cursor-pointer block">
                  <img src={post.img} alt={post.title} className="w-16 h-16 rounded-md object-cover border border-border" />
                  <div>
                    <h4 className="text-[11px] font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{post.title}</h4>
                    <span className="text-[9px] text-muted-foreground tracking-widest">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Love */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-primary border-b-2 border-accent pb-2 inline-block mb-6">Customer Love</h3>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm relative">
              <Quote className="w-6 h-6 text-accent/20 absolute top-4 left-4" />
              <p className="text-xs text-foreground/80 font-light leading-relaxed mb-4 relative z-10 pt-4">
                "Texmart has been our trusted partner for quality textiles and excellent service. Their collections are truly remarkable and loved by our customers."
              </p>
              <div className="flex gap-1 mb-4 text-accent">
                <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-primary tracking-widest">— Rajesh Patel</h5>
                <span className="text-[9px] text-muted-foreground">Shree Balaji Textiles</span>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xs font-bold tracking-widest text-primary border-b-2 border-accent pb-2 inline-block">Media Gallery</h3>
              <Link to="/media-gallery" className="text-[9px] font-bold tracking-widest text-accent hover:text-primary transition-colors">View All</Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                'https://images.pexels.com/photos/6876955/pexels-photo-6876955.jpeg',
                'https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg',
                'https://images.pexels.com/photos/36104905/pexels-photo-36104905.jpeg',
                'https://images.pexels.com/photos/31030919/pexels-photo-31030919.jpeg'
              ].map((img, i) => (
                <Link to="/media-gallery" key={i} className="aspect-[4/3] rounded-md overflow-hidden relative group cursor-pointer border border-border block">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-primary border-b-2 border-accent pb-2 inline-block mb-6">Our Location</h3>
            <div className="aspect-square bg-muted rounded-xl border border-border overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709425405!2d72.73111585860714!3d21.170240108398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Surat"
              ></iframe>
            </div>
          </div>

      </div>
    </div>
  </div>
  );
};

export default Home;
