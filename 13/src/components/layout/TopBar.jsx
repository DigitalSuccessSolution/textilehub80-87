import React from 'react';
import { MapPin, Phone, Share2, MessageCircle, Mail, Video } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 hidden lg:block border-b border-white/10">
      <div className="container-custom flex justify-between items-center text-[10px] font-medium tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>India's Most Trusted Textile Retail Mall</span>
        </div>

        <div className="flex items-center gap-6">
          {/* <span>GST No: 24AAACT0012K125</span> */}
          <span className="w-1 h-1 rounded-full bg-accent"></span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-accent" /> Helpline: 1800 123 4567
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors"><Share2 className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><MessageCircle className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Mail className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Video className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
