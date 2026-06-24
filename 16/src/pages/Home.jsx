import React from 'react';
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
  return (
    <div className="bg-background min-h-screen">
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
  );
};

export default Home;
