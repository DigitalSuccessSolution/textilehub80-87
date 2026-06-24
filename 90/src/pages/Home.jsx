import React from 'react';
import useSEO from '../hooks/useSEO';

// Component Sections
import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import Categories from '../components/sections/Categories';
import ThreeCTAs from '../components/sections/ThreeCTAs';
import Featured from '../components/sections/Featured';
import ReviewsSection from '../components/sections/ReviewsSection';
import StatsBanner from '../components/sections/StatsBanner';
import BlogHighlights from '../components/sections/BlogHighlights';

const Home = () => {
    useSEO(
        'Home',
        'Kaaya Fabrics - Premium Garment & Textile Destination. Discover gorgeous sarees, fabrics, bedsheets, and hosiery.',
        'textiles, sarees, garment retail mall, linen, suiting, shirting, Kaaya Fabrics'
    );

    return (
        <main className="overflow-x-hidden pt-[76px] bg-[#FDFBF7]">
            {/* 1. Hero Section with staggered arched panels */}
            <Hero />

            {/* 2. Trust Badges Banner */}
            <Intro />

            {/* 3. Shop by Category */}
            <Categories />

            {/* 4. Business Services CTAs (live e-Auction, e-Quotation, Trade Services) */}
            <ThreeCTAs />

            {/* 5. Signature Collections (Featured products) */}
            <Featured />

            {/* 6. Client Testimonials (What Our Clients Say) */}
            <ReviewsSection />

            {/* 7. Statistics Banner */}
            <StatsBanner />

            {/* 8. From Our Blog Highlights */}
            <BlogHighlights />
        </main>
    );
};

export default Home;
