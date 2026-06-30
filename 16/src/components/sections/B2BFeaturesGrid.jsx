import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, FileText, ClipboardList, Hammer, FileDown, BookOpen, 
  Bell, Briefcase, Star, Image 
} from 'lucide-react';

const features = [
  { name: 'Retail Management', icon: Building, path: '/retail-management', desc: 'Manage your retail operations' },
  { name: 'Trade Enquiry', icon: FileText, path: '/trade-enquiry', desc: 'Submit your trade queries' },
  { name: 'e-quotation', icon: ClipboardList, path: '/e-quotation', desc: 'Instant lot quotations' },
  { name: 'e-auction', icon: Hammer, path: '/e-auction', desc: 'Exclusive wholesale auctions' },
  { name: 'Trade Circular', icon: FileDown, path: '/trade-circular', desc: 'Official trade releases' },
  { name: 'Blog Page', icon: BookOpen, path: '/blog', desc: 'Textile industry insights' },
  { name: 'Notice Board', icon: Bell, path: '/notice-board', desc: 'Important announcements' },
  { name: 'Career Page', icon: Briefcase, path: '/career', desc: 'Join our growing team' },
  { name: 'Customer Review', icon: Star, path: '/reviews', desc: 'Share your experience' },
  { name: 'Media Gallery', icon: Image, path: '/media-gallery', desc: 'Explore our showrooms' }
];

const B2BFeaturesGrid = () => {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
      
      <div className="container-custom relative z-10 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-0.5 bg-accent"></span>
            <span className="text-[10px] font-bold text-accent  tracking-widest">B2B Portals</span>
            <span className="w-10 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Your Business Shortcuts
          </h2>
          <p className="text-sm text-white/60 max-w-md mx-auto font-light">
            Quick access to active trade portals, enquiry forms, circulars, and review panels — all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {features.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="bg-white/8 border border-white/15 p-5 rounded-2xl text-center hover:bg-accent hover:border-accent transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[130px] group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-white  tracking-wide group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
                <span className="block text-[9px] text-white/50 group-hover:text-white/80 mt-1 font-light leading-tight">
                  {item.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default B2BFeaturesGrid;
