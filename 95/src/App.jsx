import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ScrollToTop from './components/common/ScrollToTop';
import LiveChat from './components/common/LiveChat';
import PopupAnnouncement from './components/common/PopupAnnouncement';
import Preloader from './components/common/Preloader';
import ThemeSwitcher from './components/common/ThemeSwitcher';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Management from './pages/Management';
import TradeEnquiryPage from './pages/TradeEnquiry';
import QuotationPage from './pages/Quotation';
import AuctionPage from './pages/Auction';
import CircularPage from './pages/Circular';
import BlogPage from './pages/Blog';
import BlogDetailPage from './pages/BlogDetail';
import NoticeBoardPage from './pages/NoticeBoard';
import CareerPage from './pages/Career';
import ReviewsPage from './pages/CustomerReviews';
import MediaGalleryPage from './pages/MediaGallery';
import FAQPage from './pages/FAQ';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('terracotta');
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let savedTheme = localStorage.getItem('aurora-theme');
    if (!savedTheme || savedTheme === 'default') {
      savedTheme = 'terracotta';
    }
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem('aurora-theme', themeName);
    if (themeName === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeName);
    }
  };

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
          <PopupAnnouncement />
          <ThemeSwitcher 
            isOpen={themeOpen} 
            onClose={() => setThemeOpen(false)} 
            currentTheme={theme} 
            onSelectTheme={applyTheme} 
          />
          <div className="font-sans antialiased text-brand-plum bg-brand-cream min-h-screen flex flex-col justify-between transition-colors duration-500">
            <Navbar onOpenTheme={() => setThemeOpen(true)} />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/management" element={<Management />} />
                <Route path="/trade-enquiry" element={<TradeEnquiryPage />} />
                <Route path="/quotation" element={<QuotationPage />} />
                <Route path="/auction" element={<AuctionPage />} />
                <Route path="/circular" element={<CircularPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/notice-board" element={<NoticeBoardPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/media-gallery" element={<MediaGalleryPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </main>

            <LiveChat />
            <FloatingWhatsApp phoneNumber="+916353778329" />
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
