import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const themes = [
  {
    id: 'default',
    name: 'Obsidian Gold',
    desc: 'Premium obsidian backdrop accented with warm champagne gold.',
    colors: ['#080808', '#C5A880', '#DFBA73', '#FAF7F2'],
  },
  {
    id: 'emerald',
    name: 'Obsidian Emerald',
    desc: 'Deep emerald charcoal backdrop with forest green and royal gold accents.',
    colors: ['#070C09', '#4E9A70', '#C59F45', '#F2F6F3'],
  },
  {
    id: 'sapphire',
    name: 'Obsidian Sapphire',
    desc: 'Imperial navy obsidian backdrop paired with sapphire blue and gold.',
    colors: ['#080C14', '#5682C9', '#D4AF37', '#F0F4F8'],
  },
  {
    id: 'terracotta',
    name: 'Obsidian Terracotta',
    desc: 'Warm rust obsidian backdrop with copper and warm sand gold tones.',
    colors: ['#0F0A07', '#D87F63', '#BCA288', '#FAF6F2'],
  },
];

const ThemeSwitcher = ({ isOpen, onClose, currentTheme, onSelectTheme }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-brand-cream border border-brand-lavender/35 max-w-md w-full relative p-6 sm:p-8 rounded-[2rem] shadow-2xl z-10 text-left"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-brand-lavender block mb-1">
                  Design Customizer
                </span>
                <h3 className="text-xl font-serif text-brand-plum uppercase tracking-wide font-black">
                  Select Theme
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-brand-lavender/20 flex items-center justify-center text-brand-plum/60 hover:text-brand-lavender hover:border-brand-lavender transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="w-full h-px bg-brand-lavender/10 mb-6" />

            {/* Theme Options */}
            <div className="space-y-4">
              {themes.map((theme) => {
                const isActive = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onSelectTheme(theme.id);
                      onClose();
                    }}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-4 transition-all duration-300 group cursor-pointer ${
                      isActive
                        ? 'bg-brand-lavender/10 border-brand-lavender shadow-md'
                        : 'bg-white border-stone-200 hover:border-brand-lavender/50 hover:bg-stone-50/50'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-brand-plum uppercase tracking-wider group-hover:text-brand-lavender transition-colors">
                        {theme.name}
                      </h4>
                      <p className="text-[10px] text-stone-500 font-sans leading-relaxed max-w-[240px]">
                        {theme.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Color dots preview */}
                      <div className="flex -space-x-1.5">
                        {theme.colors.map((c, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-white shadow-sm shrink-0"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>

                      {/* Selected indicator */}
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        isActive 
                          ? 'bg-brand-lavender border-brand-lavender text-brand-cream' 
                          : 'border-stone-300 text-transparent'
                      }`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer decorator */}
            <div className="mt-6 text-center">
              <p className="text-[9px] text-brand-plum/40 font-sans tracking-wide">
                Dynamic palette shifting will apply across all sub-pages instantly.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThemeSwitcher;
