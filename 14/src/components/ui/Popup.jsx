import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 bg-white shadow-md hover:bg-gray-100 text-gray-800 rounded-full p-1.5 transition-colors z-10"
        >
          <X size={20} />
        </button>
        <div className="h-48 bg-primary/10 relative">
          <img
            src="https://images.pexels.com/photos/33276443/pexels-photo-33276443.jpeg"
            alt="Welcome to Texmart"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl font-heading font-bold">Welcome to TEXMART</h2>
          </div>
        </div>
        <div className="p-6 text-center space-y-4">
          <p className="text-gray-600 font-medium">Discover the finest collection of premium textiles and garments at wholesale prices.</p>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-8 rounded-full tracking-wider transition-colors"
          >
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
