import React, { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Categories from '../components/sections/Categories';
import Promos from '../components/sections/Promos';
import BusinessIntro from '../components/sections/BusinessIntro';
import B2BFeaturesGrid from '../components/sections/B2BFeaturesGrid';
import BrandSlider from '../components/sections/BrandSlider';
import Testimonials from '../components/sections/Testimonials';
import BlogReviewsGallery from '../components/sections/BlogReviewsGallery';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Brand Preloader */}
      {!imagesLoaded && (
        <div className="fixed inset-0 bg-[#FDFBF7] z-[100] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary animate-pulse">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-2xl text-primary tracking-widest mb-2">AURORA</h2>
          <div className="h-1 w-12 bg-accent rounded-full animate-pulse"></div>
          <span className="mt-4 text-[10px] text-muted-foreground font-bold tracking-[0.3em] uppercase animate-fade-in-up">CURATING EXCELLENCE</span>
        </div>
      )}

      <div className={`transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Categories />
        <Promos />
        <BusinessIntro />
        <B2BFeaturesGrid />
        <BrandSlider />
        <Testimonials />
        <BlogReviewsGallery />
        <PreFooterCTA />
      </div>
    </div>
  );
};

export default Home;
