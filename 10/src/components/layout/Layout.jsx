import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MessageSquare } from 'lucide-react';
import Chatbot from '../ui/Chatbot';
import PopupModal from '../ui/PopupModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
        id="whatsapp-bubble"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M11.996 0C5.371 0 0 5.371 0 11.996c0 2.128.555 4.195 1.611 6L.334 23.666l5.824-1.528A11.944 11.944 0 0 0 11.996 24c6.625 0 11.996-5.371 11.996-11.996S18.621 0 11.996 0zm0 21.996a9.957 9.957 0 0 1-5.088-1.385l-.364-.216-3.774.989.997-3.681-.237-.377a9.96 9.96 0 0 1-1.526-5.334C2.004 5.474 7.478 0 11.996 0c5.518 0 9.996 4.478 9.996 9.996s-4.478 9.996-9.996 9.996zm5.514-7.514c-.302-.151-1.791-.884-2.068-.985-.276-.101-.478-.151-.679.151-.201.302-.78 1.006-.956 1.207-.176.201-.352.226-.654.075-.302-.151-1.278-.471-2.434-1.503-.9-.803-1.506-1.794-1.682-2.096-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.679-1.635-.931-2.239-.245-.589-.494-.509-.679-.518-.176-.008-.377-.008-.578-.008-.201 0-.528.075-.804.377-.276.302-1.056 1.031-1.056 2.515 0 1.484 1.081 2.917 1.232 3.118.151.201 2.125 3.245 5.148 4.549.719.31 1.28.495 1.718.634.721.229 1.378.196 1.896.119.58-.086 1.791-.732 2.043-1.439.252-.707.252-1.312.176-1.439-.075-.127-.276-.201-.578-.352z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
