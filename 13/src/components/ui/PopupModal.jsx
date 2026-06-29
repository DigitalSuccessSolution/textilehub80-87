import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds of load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/40 z-[60] backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 pointer-events-auto"
            >
              <div className="relative aspect-video bg-slate-100">
                <img
                  src="https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex items-end p-6">
                  <h3 className="font-heading font-bold text-3xl text-white">B2B Trade Launch</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white hover:bg-accent text-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-8 text-center space-y-5">
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Join our exclusive B2B trade circle today. Access automated <strong>e-Quotations</strong>, bid in active <strong>e-Auctions</strong>, and view official <strong>Trade Circulars</strong> online.
                </p>
                <div className="flex gap-4 justify-center pt-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md transition-colors"
                  >
                    Dismiss
                  </button>
                  <a
                    href="/trade-enquiry"
                    className="bg-primary hover:bg-accent text-white hover:text-primary text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
