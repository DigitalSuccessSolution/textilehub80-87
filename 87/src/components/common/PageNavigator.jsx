import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PageNavigator = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pages = [
        { name: 'Home',                  path: '/' },
        { name: 'About us',              path: '/about' },
        { name: 'Contact us',            path: '/contact' },
        { name: 'Product',               path: '/products' },
        { name: 'Our Retail Management', path: '/management' },
        { name: 'Trade Enquiry',         path: '/trade-enquiry' },
        { name: 'e-Quotation',           path: '/quotation' },
        { name: 'e-Auction',             path: '/auction' },
        { name: 'Trade Circular',        path: '/circular' },
        { name: 'Blog',                  path: '/blog' },
        { name: 'Notice Board',          path: '/notice-board' },
        { name: 'Career',                path: '/career' },
        { name: 'Customer Review',       path: '/reviews' },
        { name: 'Business Media Gallery', path: '/media-gallery' },
        { name: 'FAQ',                   path: '/faq' }
    ];

    const currentIndex = pages.findIndex(p => p.path === location.pathname);

    if (currentIndex === -1) return null;

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
        navigate(pages[prevIndex].path);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % pages.length;
        navigate(pages[nextIndex].path);
    };

    return (
        <div className="fixed top-28 right-6 z-[95] bg-[#FAF6F2]/90 backdrop-blur-md border border-[#C29E6B]/30 shadow-lg rounded-full px-4 py-2 flex items-center gap-3 font-sans text-xs select-none">
            <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-[#10211F] text-white flex items-center justify-center hover:bg-[#2C443E] transition-colors cursor-pointer shadow-sm"
                title={`Previous: ${pages[(currentIndex - 1 + pages.length) % pages.length].name}`}
            >
                <ArrowLeft size={14} />
            </button>
            <span className="text-[10px] font-bold text-[#10211F] min-w-[70px] text-center  tracking-wider">
                {currentIndex + 1} / {pages.length}
            </span>
            <button
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-[#10211F] text-white flex items-center justify-center hover:bg-[#2C443E] transition-colors cursor-pointer shadow-sm"
                title={`Next: ${pages[(currentIndex + 1) % pages.length].name}`}
            >
                <ArrowRight size={14} />
            </button>
        </div>
    );
};

export default PageNavigator;
