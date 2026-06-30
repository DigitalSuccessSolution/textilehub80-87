import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import Popup from '../ui/Popup';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';
import LiveChat from '../ui/LiveChat';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Popup />
      <FloatingWhatsApp />
      <LiveChat />
    </div>
  );
};

export default Layout;
