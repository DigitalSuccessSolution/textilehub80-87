import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BlogReviewsGallery = () => {
  return (
    <section className="bg-[#FCFCFE] py-12 border-b border-slate-100 font-light text-slate-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Blog Column - 4 cols */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-end border-b border-slate-50 pb-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">LATEST FROM BLOG</h3>
                <Link to="/blog" className="text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {/* Blog Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=150&auto=format&fit=crop" alt="Fabric Trend" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-slate-400">June 10, 2026</span>
                  <h4 className="font-heading font-bold text-slate-800 text-xs leading-snug hover:text-accent cursor-pointer">
                    <Link to="/blog/1">Top Fabric Trends for Summer Edit 2025</Link>
                  </h4>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=150&auto=format&fit=crop" alt="Oxford Cotton" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-slate-400">May 28, 2026</span>
                  <h4 className="font-heading font-bold text-slate-800 text-xs leading-snug hover:text-accent cursor-pointer">
                    <Link to="/blog/2">How to Authenticate Giza Cotton Fibers</Link>
                  </h4>
                </div>
              </div>
            </div>
            
            <Link 
              to="/blog"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              Discover Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2. Customer Reviews Column - 4 cols */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-end border-b border-slate-50 pb-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">CUSTOMER REVIEWS</h3>
                <Link to="/reviews" className="text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {/* Review Card */}
              <div className="space-y-4 pt-2">
                <div className="w-8 h-8 bg-accent/5 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-accent" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light italic">
                  "Excellent variety and quality. Our customers love the gold zari saree designs we sourced from WeavesMart. The bulk lot shipping was seamless."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Rajesh Mehta</h5>
                    <p className="text-[9px] text-slate-400 font-medium">Retailer - Jaipur</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/reviews"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              Write Review <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. Media Gallery Column - 4 cols */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between items-start space-y-6">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-end border-b border-slate-50 pb-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">MEDIA GALLERY</h3>
                <Link to="/media-gallery" className="text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {/* Showroom Photo grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="h-16 rounded-md overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=150&auto=format&fit=crop" alt="Showroom" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 rounded-md overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=150&auto=format&fit=crop" alt="Mill Loom" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 rounded-md overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=150&auto=format&fit=crop" alt="Fabric roll" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 rounded-md overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1583391733959-b15124188f54?q=80&w=150&auto=format&fit=crop" alt="Design layout" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <Link 
              to="/media-gallery"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-slate-50 pt-4"
            >
              View Gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogReviewsGallery;
