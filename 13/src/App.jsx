import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/eQuotation';
import EAuction from './pages/eAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import Reviews from './pages/Reviews';
import MediaGallery from './pages/MediaGallery';
import FAQ from './pages/FAQ';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#FCFBFA] z-[9999] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/25 border-t-primary rounded-full animate-spin"></div>
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-2xl text-primary leading-none tracking-tight">Texmart</span>
            <span className="text-[8px] text-accent uppercase tracking-[0.2em] font-bold mt-1">Textile Retail Mall</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="retail-management" element={<RetailManagement />} />
          <Route path="trade-enquiry" element={<TradeEnquiry />} />
          <Route path="e-quotation" element={<EQuotation />} />
          <Route path="e-auction" element={<EAuction />} />
          <Route path="trade-circular" element={<TradeCircular />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="blog-post" element={<BlogPost />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="career" element={<Career />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="media-gallery" element={<MediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
