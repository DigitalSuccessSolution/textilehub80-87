import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 to 100 over ~1.5s
    let start = null;
    const duration = 1500;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onFinish && onFinish();
          }, 500);
        }, 200);
      }
    };
    requestAnimationFrame(animate);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF7] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Decorative background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8860B]/5 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center z-10">
        
        {/* Animated Rings & Icon */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="absolute inset-0 border border-[#B8860B]/10 rounded-full"
          />
          {/* Dashed Accent Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-2 border border-dashed border-[#B8860B]/50 rounded-full"
          />
          {/* Pulsing Glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-4 bg-[#B8860B] rounded-full blur-xl"
          />
          {/* Inner SVG Logo */}
          <div className="w-12 h-12 text-[#B8860B] flex items-center justify-center z-10 animate-pulse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-8 text-center space-y-1.5">
          <motion.h1 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="font-heading text-3xl font-extrabold text-[#3E2723] tracking-wider leading-none"
          >
            TEXMART
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#B8860B] text-[9px] font-bold tracking-[0.3em] uppercase"
          >
            Textile Retail Mall
          </motion.p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-[2px] bg-[#B8860B]/5 rounded-full overflow-hidden mt-6 relative">
          <div
            className="h-full bg-gradient-to-r from-[#B8860B] to-[#3E2723] rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-[#3E2723]/40 text-[9px] tracking-[0.2em] uppercase font-bold mt-3">
          Loading…
        </p>

      </div>
    </div>
  );
};

export default Preloader;
