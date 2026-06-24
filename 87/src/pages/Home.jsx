import React from 'react';
import useSEO from '../hooks/useSEO';

// Component Sections
import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import Categories from '../components/sections/Categories';
import Featured from '../components/sections/Featured';
import BlogHighlights from '../components/sections/BlogHighlights';
import ReviewsSection from '../components/sections/ReviewsSection';

const Home = () => {
    useSEO(
        'Home',
        'Aurora Textile House - Premium Fabrics & Garment Boutique. Discover luxury sarees, cotton leggings, designer kurtis, bedsheets, and suiting shirting fabrics.',
        'textiles, sarees, garment house, linen, suiting, shirting, kids wear'
    );

    return (
        <main className="overflow-x-hidden pt-0 bg-[#FAF6F2]">
            {/* 1. Hero Banner Slider */}
            <Hero />

            {/* 2. Business Introduction */}
            <Intro />

            {/* 3. Product Departments */}
            <Categories />

            {/* 4. Signature Collections (12 Items) */}
            <Featured />

            {/* 5. Blog Highlights */}
            <BlogHighlights />

            {/* 6. Customer Reviews */}
            <ReviewsSection />
        </main>
    );
};

export default Home;
