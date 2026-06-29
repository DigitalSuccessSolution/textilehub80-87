import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 to 100 over ~1.6s
    let start = null;
    const duration = 1600;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(animate);
      } else {
        // Start fade-out after a small pause
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onFinish && onFinish();
          }, 500);
        }, 250);
      }
    };
    requestAnimationFrame(animate);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Decorative background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Logo Mark */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Grid Icon */}
        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl grid grid-cols-2 p-3 gap-2 shadow-2xl animate-pulse-slow">
          <div className="w-full h-full bg-accent rounded-sm rotate-45 scale-75" />
          <div className="w-full h-full bg-white/80 rounded-sm" />
          <div className="w-full h-full bg-white/80 rounded-sm" />
          <div className="w-full h-full bg-accent rounded-sm rotate-45 scale-75" />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-1">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
            Weaves<span className="text-accent">Mart</span>
          </h1>
          <p className="text-slate-400 text-xs font-light tracking-[0.3em] uppercase">
            Premium Textile B2B
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-56 h-0.5 bg-white/10 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-accent rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-slate-500 text-[10px] tracking-[0.25em] uppercase font-medium">
          Loading…
        </p>
      </div>
    </div>
  );
};

export default Preloader;
