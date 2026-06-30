import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BlogReviewsGallery = () => {
  return (
    <section className="bg-muted/40 py-14 border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Blog Column */}
          <div className="lg:col-span-4 bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="text-sm font-bold text-primary  tracking-wider">Latest From Blog</h3>
                <Link to="/blog" className="text-[10px] font-bold  tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {[
                { date: 'June 10, 2026', title: 'Top Fabric Trends for Summer Edit 2025', img: 'https://images.pexels.com/photos/36890819/pexels-photo-36890819.jpeg', id: 1 },
                { date: 'May 28, 2026', title: 'How to Authenticate Giza Cotton Fibers', img: 'https://images.pexels.com/photos/12081254/pexels-photo-12081254.jpeg', id: 2 },
                { date: 'May 10, 2026', title: 'Wholesale Saree Buying Guide for Retailers', img: 'https://images.pexels.com/photos/6850574/pexels-photo-6850574.jpeg', id: 3 }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-16 h-16 bg-muted rounded-xl overflow-hidden shrink-0 border border-border">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-muted-foreground font-medium">{post.date}</span>
                    <h4 className="font-heading font-bold text-foreground text-xs leading-snug hover:text-accent cursor-pointer transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/blog"
              className="text-xs font-bold  tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-border pt-4"
            >
              Discover Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2. Customer Reviews Column */}
          <div className="lg:col-span-4 bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="text-sm font-bold text-primary  tracking-wider">Customer Reviews</h3>
                <Link to="/reviews" className="text-[10px] font-bold  tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {[
                { name: 'Rajesh Mehta', role: 'Retailer – Jaipur', text: 'Excellent variety and quality. Our customers love the gold zari saree designs we sourced from Aurora. The bulk lot shipping was seamless.', rating: 5 },
                { name: 'Sunita Desai', role: 'Boutique Owner – Pune', text: 'The kurti collection this season is fabulous. Very reasonable wholesale pricing and prompt delivery across Maharashtra.', rating: 5 }
              ].map((review, i) => (
                <div key={i} className="space-y-3 pt-1">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-xs font-bold text-foreground">{review.name}</h5>
                      <p className="text-[9px] text-accent font-medium">{review.role}</p>
                    </div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-500" />)}
                    </div>
                  </div>
                  {i < 1 && <div className="border-b border-border/50 pt-1"></div>}
                </div>
              ))}
            </div>
            
            <Link 
              to="/reviews"
              className="text-xs font-bold  tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-border pt-4"
            >
              Write a Review <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. Media Gallery Column */}
          <div className="lg:col-span-4 bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="text-sm font-bold text-primary  tracking-wider">Media Gallery</h3>
                <Link to="/media-gallery" className="text-[10px] font-bold  tracking-wider text-accent hover:underline">View All</Link>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {[
                  { src: 'https://images.pexels.com/photos/6350916/pexels-photo-6350916.jpeg', alt: 'Showroom' },
                  { src: 'https://images.pexels.com/photos/6050435/pexels-photo-6050435.jpeg', alt: 'Mill Loom' },
                  { src: 'https://images.pexels.com/photos/35228874/pexels-photo-35228874.jpeg', alt: 'Fabric roll' },
                  { src: 'https://images.pexels.com/photos/31030919/pexels-photo-31030919.jpeg', alt: 'Design layout' },
                  { src: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg', alt: 'Bedsheets' },
                  { src: 'https://images.pexels.com/photos/4862901/pexels-photo-4862901.jpeg', alt: 'Children wear' },
                ].map((img, i) => (
                  <div key={i} className="h-20 rounded-xl overflow-hidden bg-muted group cursor-pointer border border-border hover:border-accent/30 transition-all">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
            
            <Link 
              to="/media-gallery"
              className="text-xs font-bold  tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full border-t border-border pt-4"
            >
              View Full Gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogReviewsGallery;
