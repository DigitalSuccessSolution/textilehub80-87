import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, FileText, ClipboardList, Hammer, FileDown, BookOpen, 
  Bell, Briefcase, Star, Image, Layers, Sliders, MessageCircle, Share2 
} from 'lucide-react';

const B2BFeaturesGrid = () => {
  const features = [
    { name: 'Our Retail Management', icon: <Building className="w-6 h-6 text-[#0C6C3E]" />, path: '/retail-management' },
    { name: 'Trade Enquiry', icon: <FileText className="w-6 h-6 text-[#0C6C3E]" />, path: '/trade-enquiry' },
    { name: 'e-Quotation', icon: <ClipboardList className="w-6 h-6 text-[#0C6C3E]" />, path: '/e-quotation' },
    { name: 'e-Auction', icon: <Hammer className="w-6 h-6 text-[#0C6C3E]" />, path: '/e-auction' },
    { name: 'Trade Circular', icon: <FileDown className="w-6 h-6 text-[#0C6C3E]" />, path: '/trade-circular' },
    { name: 'Blog Page', icon: <BookOpen className="w-6 h-6 text-[#0C6C3E]" />, path: '/blog' },
    { name: 'Notice Board', icon: <Bell className="w-6 h-6 text-[#0C6C3E]" />, path: '/notice-board' },
    { name: 'Career Page', icon: <Briefcase className="w-6 h-6 text-[#0C6C3E]" />, path: '/career' },
    { name: 'Customer Review', icon: <Star className="w-6 h-6 text-[#0C6C3E]" />, path: '/reviews' },
    { name: 'Business Media Gallery', icon: <Image className="w-6 h-6 text-[#0C6C3E]" />, path: '/media-gallery' }
  ];

  return (
    <section className="bg-slate-50 py-16 font-light text-slate-600 border-b border-slate-100">
      <div className="container-custom space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wider">
            B2B Shortcuts Panel
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Quick links to access active portals, trade forms, circulars, and review panels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {features.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="bg-white p-5 rounded-xl border border-slate-100/80 text-center shadow-xs hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between min-h-[120px] group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <span className="block text-[10px] font-bold text-slate-700 uppercase tracking-wide group-hover:text-accent transition-colors leading-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default B2BFeaturesGrid;
