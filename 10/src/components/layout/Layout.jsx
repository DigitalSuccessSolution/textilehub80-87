import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MessageSquare } from 'lucide-react';
import Chatbot from '../ui/Chatbot';
import PopupModal from '../ui/PopupModal';
import Preloader from '../ui/Preloader';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {!preloaderDone && <Preloader onFinish={() => setPreloaderDone(true)} />}
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <PopupModal />
      <Chatbot />
      
      {/* Floating WhatsApp Bubble */}
      <a 
        href="https://wa.me/911234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white"
        aria-label="Contact on WhatsApp"
        id="whatsapp-bubble"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.632-1.02-5.107-2.88-6.973C16.594 1.919 14.12 .898 11.49 1.896 6.05 1.896 1.626 6.309 1.623 11.745c-.001 1.706.452 3.373 1.312 4.823l-.999 3.648 3.711-.974zm11.233-6.84c-.274-.137-1.62-.8-1.874-.892-.254-.092-.44-.137-.624.137-.184.277-.713.892-.874 1.077-.162.185-.323.208-.597.071-.274-.137-1.157-.426-2.204-1.36-0.815-.726-1.366-1.624-1.526-1.899-.16-.276-.017-.424.12-.561.123-.123.274-.323.411-.484.137-.162.184-.277.276-.462.092-.185.046-.347-.023-.484-.069-.137-.624-1.503-.855-2.057-.225-.541-.472-.468-.646-.477-.167-.008-.358-.008-.55-.008-.192 0-.505.072-.77.358-.264.286-1.008.986-1.008 2.402 0 1.417 1.031 2.787 1.176 2.977.145.19 2.03 3.1 4.916 4.344.686.296 1.222.473 1.639.605.69.22 1.318.19 1.815.115.553-.083 1.62-.662 1.849-1.27.228-.607.228-1.128.16-1.238-.07-.11-.253-.185-.527-.322z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
