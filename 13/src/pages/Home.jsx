import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Star, PlayCircle, Quote, ShieldCheck, Truck, PackageOpen, Tag, Headset, CheckCircle2, MapPin, Shirt, Sparkles, Activity, Briefcase, BedDouble, Layers, Ruler, ShoppingBag, User, Smile, Home as HomeIcon, FileText, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroSlides = [
    {
      title: "Timeless Textiles",
      subtitle: "Crafted to Perfection",
      desc: "Premium fabrics that blend tradition with modern elegance for every lifestyle.",
      img: "/hero-png.png"
    },
    {
      title: "Exquisite Designs",
      subtitle: "Woven with Care",
      desc: "Discover our latest collection of premium ethnic wear and modern fabrics.",
      img: "/hero-png.png"
    },
    {
      title: "Heritage Collection",
      subtitle: "Unmatched Quality",
      desc: "Experience the rich textile heritage of India with our premium range.",
      img: "/hero-png.png"
    }
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
    { name: 'Women Wear', desc: 'Ethnic & Formal', icon: ShoppingBag },
    { name: 'Men Wear', desc: 'Ethnic & Formal', icon: User },
    { name: 'Children Wear', desc: 'Stylish & Cute', icon: Smile },
    { name: 'Home Furnishing', desc: 'Comfort Living', icon: HomeIcon },
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
    { name: 'Sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Leggings', img: 'https://images.unsplash.com/photo-1509631179647-0c37272f912e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Kurtis', img: 'https://images.unsplash.com/photo-1605902302302-3861214cc9f7?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dress Suits', img: 'https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=800&auto=format&fit=crop' },
    { name: 'Bedsheets & Linen', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop' },
    { name: 'Hosiery Items', img: 'https://images.unsplash.com/photo-1588145125958-552ebfa40a4e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Suiting', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop' },
    { name: 'Shirting', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop' },
    { name: 'Women Wear', img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Men Wear', img: 'https://images.unsplash.com/photo-1594938298596-70f582004d11?q=80&w=800&auto=format&fit=crop' },
    { name: 'Children Wear', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop' },
    { name: 'Home Furnishing', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' }
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
      <div className="w-full min-h-[500px] lg:min-h-[600px] relative flex items-center bg-background overflow-hidden border-b border-border">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Hero Background" className="w-full h-full object-cover object-center opacity-90" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 w-full py-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Crafting Comfort,<br />
              Woven with <span className="font-cursive text-primary font-normal text-6xl lg:text-8xl relative top-2">Trust</span>
            </h1>
            <p className="text-foreground/80 text-sm lg:text-base mb-10 font-light">
              Premium fabrics blending tradition, quality and elegance for every lifestyle.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products" className="bg-primary text-white hover:bg-primary/90 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md">
                Explore Collections
              </Link>
              <Link to="/trade-circular" className="bg-white border border-border text-foreground hover:border-primary hover:text-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm">
                View Catalogue
              </Link>
            </div>
            <div className="flex gap-2 mt-12">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
            </div>
          </div>
        </div>
      </div>

      {/* 12 Category Icons (Changed to Cards) */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-muted rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <cat.icon className="w-6 h-6 text-primary mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={1.5} />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors leading-tight mb-1">{cat.name}</h3>
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
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{feature.name}</span>
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
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4">About Texmart</span>
              <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
                Weaving Excellence<br/>in Every Fabric
              </h2>
              <p className="text-sm text-muted-foreground font-light mb-8 leading-relaxed max-w-md">
                From heritage to contemporary, we bring you fabrics that speak of quality and elegance. Our extensive collection is curated to meet the highest standards.
              </p>
              <Link to="/about" className="bg-primary text-white hover:bg-primary/90 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors w-fit flex items-center gap-2 shadow-md">
                Know More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:w-1/2 h-[400px] lg:h-[500px] w-full">
              <img src="https://images.unsplash.com/photo-1528458909336-e6a0fb461b55?q=80&w=1200&auto=format&fit=crop" alt="Fabrics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Section 2: Trade Services & Portals */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-muted rounded-[30px] p-10 flex flex-col justify-between border border-border/50">
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4 block">Trade Services</span>
                <h3 className="font-heading text-3xl font-medium text-primary mb-4 leading-tight">Solutions for<br/>Textile Professionals</h3>
                <p className="text-xs text-primary/70 font-light mb-8">Explore our B2B services to grow your business.</p>
              </div>
              <Link to="/trade-enquiry" className="bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit flex items-center gap-2 hover:bg-primary/90">
                Explore Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="bg-[#FFF8F0] rounded-[30px] p-10 flex flex-col justify-between relative overflow-hidden group border border-border/50">
              <div className="relative z-10">
                <span className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mb-4 block">e-QUOTATION</span>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Get Instant<br/>Quotation</h3>
                <Link to="/e-quotation" className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:text-primary/70">
                  Request Quote <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-10 transform translate-x-8 translate-y-8 group-hover:scale-110 transition-transform">
                <FileText className="w-full h-full text-accent" />
              </div>
            </div>
            <div className="bg-white rounded-[30px] p-10 flex flex-col justify-between relative overflow-hidden group border border-border/50">
              <div className="relative z-10">
                <span className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mb-4 block">LIVE e-AUCTION</span>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Join Live Textile<br/>Auctions</h3>
                <Link to="/e-auction" className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:text-primary/70">
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
          <h2 className="font-heading text-2xl font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
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
                <h4 className="text-center text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{col.name}</h4>
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
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Years of Excellence</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">500+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Retail Partners</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Cities Pan India</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-light font-heading mb-1">1,00,000+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Happy Customers</div>
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-accent pb-2 inline-block">From The Blog</h3>
              <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Top 10 Saree Trends This Season', date: 'May 16, 2025', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&h=100&fit=crop' },
                { title: 'How to Choose the Perfect Fabric', date: 'May 14, 2025', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=100&h=100&fit=crop' },
                { title: 'Sustainable Textiles The Future', date: 'May 08, 2025', img: 'https://images.unsplash.com/photo-1528458909336-e6a0fb461b55?w=100&h=100&fit=crop' }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <img src={post.img} alt={post.title} className="w-16 h-16 rounded-md object-cover border border-border" />
                  <div>
                    <h4 className="text-[11px] font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{post.title}</h4>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Love */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-accent pb-2 inline-block mb-6">Customer Love</h3>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm relative">
              <Quote className="w-6 h-6 text-accent/20 absolute top-4 left-4" />
              <p className="text-xs text-foreground/80 font-light leading-relaxed mb-4 relative z-10 pt-4">
                "Texmart has been our trusted partner for quality textiles and excellent service. Their collections are truly remarkable and loved by our customers."
              </p>
              <div className="flex gap-1 mb-4 text-accent">
                <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest">— Rajesh Patel</h5>
                <span className="text-[9px] text-muted-foreground">Shree Balaji Textiles</span>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-accent pb-2 inline-block">Media Gallery</h3>
              <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">View All</a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-md overflow-hidden relative group cursor-pointer border border-border">
                  <img src={`https://images.unsplash.com/photo-1558098329-a11cff621064?w=200&h=150&fit=crop&q=80&sig=${i}`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Network */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-accent pb-2 inline-block mb-6">Our Network</h3>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center border border-border overflow-hidden p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_Map.svg/800px-India_Map.svg.png" alt="India Map" className="w-full h-full object-contain opacity-40 filter sepia-[0.3]" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
